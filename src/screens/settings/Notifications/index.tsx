"use client";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardBody,
} from "reactstrap";
import { FaBell } from "react-icons/fa";
import { useAuthStore } from "@/stores/auth";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "react-toastify";

interface NotificationsProps {
  readonly language: string;
}

export default function Notifications({ language }: NotificationsProps) {
  console.log("Notifications language:", language);

  const take = 6;
  const [skip, setSkip] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const { accessToken } = useAuthStore();

  const { data: notifications, error } = useNotifications(
    accessToken,
    skip,
    take
  );

  useEffect(() => {
    const page = (notifications?.skip ?? 0) / take + 1;
    setPage(page);
    setTotalPages(Math.ceil((notifications?.total ?? 0) / take));
  }, [notifications?.skip, notifications?.total, take]);

  useEffect(() => {
    if (!error) return;
    toast.error(error?.message);
  }, [error]);

  return (
    <>
      <h2 className="mb-3 d-flex align-items-center">
        <FaBell className="me-2" />
        Notifications
      </h2>

      <Card className="p-2 shadow-sm border-0 mb-4">
        <CardBody>
          {notifications?.data.length === 0 && <p>No notifications</p>}

          <ListGroup flush>
            {notifications?.data.map(
              ({ id, metadata: { message }, createdAt }) => (
                <ListGroupItem
                  key={id}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  className={`d-flex justify-content-between align-items-center`}
                >
                  <div>
                    <div>{message}</div>
                    <small className="text-secondary">
                      {moment(createdAt).format("LLL")}
                    </small>
                  </div>
                </ListGroupItem>
              )
            )}
          </ListGroup>

          {totalPages > 1 && (
            <Pagination className="mt-3 justify-content-center">
              <PaginationItem disabled={page === 1}>
                <PaginationLink
                  first
                  onClick={() => {
                    setPage(1);
                    setSkip(0);
                  }}
                />
              </PaginationItem>
              <PaginationItem
                disabled={page === 1}
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                    setSkip((page - 2) * take);
                  }
                }}
              >
                <PaginationLink previous />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem
                    active={page === i + 1}
                    key={pageNumber}
                    onClick={() => {
                      setPage(pageNumber);
                      setSkip(i * take);
                    }}
                  >
                    <PaginationLink>{i + 1}</PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationLink
                  next
                  onClick={() => {
                    if (page < totalPages) {
                      setPage(page + 1);
                      setSkip(page * take);
                    }
                  }}
                />
              </PaginationItem>
              <PaginationItem disabled={page === totalPages}>
                <PaginationLink
                  last
                  onClick={() => {
                    if (page < totalPages) {
                      setPage(totalPages);
                      setSkip((totalPages - 1) * take);
                    }
                  }}
                />
              </PaginationItem>
            </Pagination>
          )}
        </CardBody>
      </Card>
    </>
  );
}
