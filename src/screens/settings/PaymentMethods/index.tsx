"use client";

import { useState } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "reactstrap";

interface CardData {
  id: string;
  brand: string;
  last4: string;
  expMonth: string;
  expYear: string;
}

interface PaymentMethodsProps {
  readonly language: string;
}

export default function PaymentMethods({ language }: PaymentMethodsProps) {
  console.log("PaymentMethods language:", language);

  const [cards, setCards] = useState<CardData[]>([]);
  const [brand, setBrand] = useState("");
  const [number, setNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [defaultCardId, setDefaultCardId] = useState<string | null>(null);

  const addCard = () => {
    if (
      brand.trim() === "" ||
      number.length < 4 ||
      expMonth.trim() === "" ||
      expYear.trim() === ""
    )
      return;
    const newCard: CardData = {
      id: crypto.randomUUID(),
      brand,
      last4: number.slice(-4),
      expMonth,
      expYear,
    };
    setCards((prev) => [...prev, newCard]);
    setBrand("");
    setNumber("");
    setExpMonth("");
    setExpYear("");
    if (!defaultCardId) setDefaultCardId(newCard.id);
  };

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    if (defaultCardId === id) setDefaultCardId(null);
  };

  return (
    <>
      <h2 className="mb-4 d-flex align-items-center">
        <FaMoneyCheckAlt className="me-2" />
        Payment Methods
      </h2>

      <Card className="p-4 shadow-sm border-0 mb-4">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addCard();
          }}
        >
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="brand">Brand</Label>
                <Input
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Visa, MasterCard..."
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="number">Card Number</Label>
                <Input
                  id="number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="Card number"
                  maxLength={16}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="expMonth">Exp. Month</Label>
                <Input
                  id="expMonth"
                  type="text"
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  placeholder="MM"
                  maxLength={2}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="expYear">Exp. Year</Label>
                <Input
                  id="expYear"
                  type="text"
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  placeholder="YYYY"
                  maxLength={4}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex">
              <Button color="primary" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      <h4 className="mb-4">Your Payment Methods</h4>

      <Card className="p-4 shadow-sm border-0 mb-4">
        <ListGroup>
          {cards.length === 0 && (
            <ListGroupItem>No payment methods added</ListGroupItem>
          )}
          {cards.map(({ id, brand, last4, expMonth, expYear }) => (
            <ListGroupItem
              key={id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                {brand} **** {last4} (Exp: {expMonth}/{expYear})
                {defaultCardId === id && (
                  <span className="badge bg-success ms-2">Default</span>
                )}
              </div>
              <div>
                {defaultCardId !== id && (
                  <Button
                    color="secondary"
                    size="sm"
                    className="me-2"
                    onClick={() => setDefaultCardId(id)}
                  >
                    Set Default
                  </Button>
                )}
                <Button color="danger" size="sm" onClick={() => removeCard(id)}>
                  Remove
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
