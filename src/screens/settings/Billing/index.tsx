"use client";

import { useState } from "react";
import {
  Card,
  Table,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Label,
  Input,
  Alert,
  Row,
  Col,
  CardBody,
} from "reactstrap";
import { FaCreditCard, FaDownload } from "react-icons/fa";

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  downloadUrl: string;
}

const invoicesPerPage = 5;

const sampleInvoices: Invoice[] = [
  {
    id: "INV001",
    date: "2025-05-01",
    amount: "$100.00",
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV002",
    date: "2025-04-01",
    amount: "$120.00",
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV003",
    date: "2025-03-01",
    amount: "$100.00",
    status: "Failed",
    downloadUrl: "#",
  },
  {
    id: "INV004",
    date: "2025-02-01",
    amount: "$100.00",
    status: "Pending",
    downloadUrl: "#",
  },
  {
    id: "INV005",
    date: "2025-01-01",
    amount: "$100.00",
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV006",
    date: "2024-12-01",
    amount: "$90.00",
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV007",
    date: "2024-11-01",
    amount: "$100.00",
    status: "Paid",
    downloadUrl: "#",
  },
];

const availablePlans = [
  { id: "free", name: "Free Plan", price: "$0 / month" },
  { id: "basic", name: "Basic Plan", price: "$9.99 / month" },
  { id: "pro", name: "Pro Plan", price: "$29.99 / month" },
  { id: "premium", name: "Premium Plan", price: "$59.99 / month" },
];

const paymentMethods = [
  { id: "card_visa", label: "Visa **** 4242" },
  { id: "card_master", label: "Mastercard **** 1234" },
  { id: "paypal", label: "PayPal user@example.com" },
];

interface BillingProps {
  readonly language: string;
}

export default function Billing({ language }: BillingProps) {
  const [page, setPage] = useState(1);
  const [currentPlan, setCurrentPlan] = useState(availablePlans[1]);
  const [planMsg, setPlanMsg] = useState<string | null>(null);
  const [selectedPaymentMethod] = useState(paymentMethods[0]);

  const totalPages = Math.ceil(sampleInvoices.length / invoicesPerPage);

  const currentInvoices = sampleInvoices.slice(
    (page - 1) * invoicesPerPage,
    page * invoicesPerPage
  );

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const plan = availablePlans.find((p) => p.id === e.target.value);
    if (plan) {
      setCurrentPlan(plan);
      setPlanMsg(`Plan changed to ${plan.name}`);
      setTimeout(() => setPlanMsg(null), 3000);
    }
  };

  console.log("Billing language:", language);

  return (
    <>
      <h2 className="mb-4 d-flex align-items-center">
        <FaCreditCard className="me-2" />
        Billing
      </h2>

      <Card className="p-2 shadow-sm border-0 mb-4">
        <CardBody>
          <Row className="align-items-center">
            <Col md={6}>
              <FormGroup>
                <Label for="planSelect">Active Plan</Label>
                <Input
                  type="select"
                  id="planSelect"
                  value={currentPlan.id}
                  onChange={handlePlanChange}
                >
                  {availablePlans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} — {plan.price}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label>Payment Method</Label>
                <div>{selectedPaymentMethod.label}</div>
              </div>
            </Col>
          </Row>
          {planMsg && <Alert color="success">{planMsg}</Alert>}
        </CardBody>
      </Card>

      <h4 className="mb-4">Your Invoices</h4>

      <Card className="p-4 shadow-sm border-0">
        <Table striped responsive>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map(
              ({ id, date, amount, status, downloadUrl }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{date}</td>
                  <td>{amount}</td>
                  <td>{status}</td>
                  <td>
                    <Button
                      color="primary"
                      size="sm"
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDownload className="me-1" /> Download
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>

        <Pagination
          aria-label="Invoices pagination"
          className="justify-content-center"
        >
          <PaginationItem disabled={page === 1}>
            <PaginationLink first onClick={() => setPage(1)} />
          </PaginationItem>
          <PaginationItem disabled={page === 1}>
            <PaginationLink previous onClick={() => setPage(page - 1)} />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => {
            const pageNumber = i + 1;
            return (
              <PaginationItem active={page === pageNumber} key={pageNumber}>
                <PaginationLink onClick={() => setPage(pageNumber)}>
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem disabled={page === totalPages}>
            <PaginationLink next onClick={() => setPage(page + 1)} />
          </PaginationItem>
          <PaginationItem disabled={page === totalPages}>
            <PaginationLink last onClick={() => setPage(totalPages)} />
          </PaginationItem>
        </Pagination>
      </Card>
    </>
  );
}
