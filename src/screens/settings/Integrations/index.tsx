"use client";

import { Card } from "reactstrap";

interface IntegrationsProps {
  readonly language: string;
}

export default function Integrations({ language }: IntegrationsProps) {
  console.log("Integrations language:", language);
  return (
    <>
      <h4 className="mb-4">Integrations</h4>
      <Card className="p-4 shadow-sm border-0">
        <p>We are working on this feature. There is nothing here yet.</p>
      </Card>
    </>
  );
}
