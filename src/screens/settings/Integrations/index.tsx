"use client";

import { FaPuzzlePiece } from "react-icons/fa";
import { Card, CardBody } from "reactstrap";

interface IntegrationsProps {
  readonly language: string;
}

export default function Integrations({ language }: IntegrationsProps) {
  console.log("Integrations language:", language);
  return (
    <>
      <h2 className="mb-4 d-flex align-items-center">
        <FaPuzzlePiece className="me-2" />
        Integrations
      </h2>

      <Card className="p-2 shadow-sm border-0">
        <CardBody>
          <p>We are working on this feature. There is nothing here yet.</p>
        </CardBody>
      </Card>
    </>
  );
}
