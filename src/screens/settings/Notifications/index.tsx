"use client";

import { useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardBody,
} from "reactstrap";
import { FaBell, FaCheck, FaTrash } from "react-icons/fa";

interface Notification {
  id: number;
  message: string;
  date: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    message: "Tu suscripción ha sido renovada.",
    date: "2025-06-09",
    read: false,
  },
  {
    id: 2,
    message: "Nuevo inicio de sesión detectado.",
    date: "2025-06-08",
    read: true,
  },
  {
    id: 3,
    message: "Actualización disponible para la app.",
    date: "2025-06-07",
    read: false,
  },
  {
    id: 4,
    message: "Nuevo mensaje recibido.",
    date: "2025-06-06",
    read: false,
  },
  {
    id: 5,
    message: "Recordatorio: cambia tu contraseña.",
    date: "2025-06-05",
    read: true,
  },
  {
    id: 6,
    message: "Evento programado para mañana.",
    date: "2025-06-04",
    read: false,
  },
];

const ITEMS_PER_PAGE = 10;

interface NotificationsProps {
  readonly language: string;
}

export default function Notifications({ language }: NotificationsProps) {
  console.log("Notifications language:", language);

  const [notifications, setNotifications] = useState(initialNotifications);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(notifications.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentPageItems = notifications.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (notifications.length - 1 <= (page - 1) * ITEMS_PER_PAGE && page > 1) {
      setPage(page - 1);
    }
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <>
      <h2 className="mb-3 d-flex align-items-center">
        <FaBell className="me-2" />
        Notifications
        <Badge color="primary" className="ms-2">
          {notifications.filter((n) => !n.read).length}
        </Badge>
      </h2>

      <Card className="p-2 shadow-sm border-0 mb-4">
        <CardBody>
          {notifications.length === 0 && <p>No notifications</p>}

          <ListGroup flush>
            {currentPageItems.map(({ id, message, date, read }) => (
              <ListGroupItem
                key={id}
                style={{ paddingLeft: 0, paddingRight: 0 }}
                className={`d-flex justify-content-between align-items-center ${
                  read ? "text-muted" : ""
                }`}
              >
                <div>
                  <div>{message}</div>
                  <small className="text-secondary">{date}</small>
                </div>
                <div className="d-flex gap-2">
                  {!read && (
                    <Button
                      color="success"
                      size="sm"
                      onClick={() => markAsRead(id)}
                      title="Mark as read"
                    >
                      <FaCheck />
                    </Button>
                  )}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => removeNotification(id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>

          {totalPages > 1 && (
            <Pagination className="mt-3 justify-content-center">
              <PaginationItem disabled={page === 1}>
                <PaginationLink first onClick={() => changePage(1)} />
              </PaginationItem>
              <PaginationItem disabled={page === 1}>
                <PaginationLink previous onClick={() => changePage(page - 1)} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem active={page === i + 1} key={pageNumber}>
                    <PaginationLink onClick={() => changePage(i + 1)}>
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem disabled={page === totalPages}>
                <PaginationLink next onClick={() => changePage(page + 1)} />
              </PaginationItem>
              <PaginationItem disabled={page === totalPages}>
                <PaginationLink last onClick={() => changePage(totalPages)} />
              </PaginationItem>
            </Pagination>
          )}
        </CardBody>
      </Card>
    </>
  );
}
