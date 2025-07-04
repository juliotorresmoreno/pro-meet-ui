"use client";

import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Card, Button, Alert } from "reactstrap";

interface DangerZoneProps {
  readonly language: string;
}

export default function DangerZone({ language }: DangerZoneProps) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action is irreversible."
      )
    ) {
      setDeleted(true);
    }
  };

  if (deleted) {
    return (
      <>
        <h4 className="mb-4 text-danger">Danger Zone</h4>
        <Card className="p-4 shadow-sm border-0">
          <Alert color="danger">Your account has been deleted.</Alert>
        </Card>
      </>
    );
  }

  console.log("DangerZone language:", language);

  return (
    <>
      <h2 className="mb-4 text-danger d-flex align-items-center">
        <FaExclamationTriangle className="me-2" />
        Danger Zone
      </h2>

      <Card className="p-4 shadow-sm border-0">
        <p>
          Deleting your account is irreversible. All your data will be lost.
          Please proceed with caution.
        </p>
        <Button color="danger" onClick={handleDelete}>
          Delete Account
        </Button>
      </Card>
    </>
  );
}
