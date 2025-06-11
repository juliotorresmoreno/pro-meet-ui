"use client";

import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import { useState } from "react";
import { FaKey, FaShieldAlt, FaSignOutAlt } from "react-icons/fa";
import SaveButton from "@/components/SaveButton";

export default function Security() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  const sessions = [
    {
      device: "Chrome on Windows",
      location: "New York, USA",
      lastActive: "2025-06-10 12:34",
    },
    {
      device: "Safari on iPhone",
      location: "Paris, France",
      lastActive: "2025-06-09 20:12",
    },
  ];

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handle2FAToggle = () => {
    setTwoFAEnabled(!twoFAEnabled);
  };

  return (
    <>
      <h2 className="mb-4">Security Settings</h2>

      <Card className="shadow-sm border-0 mb-4">
        <CardBody>
          <h5 className="mb-3">
            <FaKey className="me-2" />
            Change Password
          </h5>
          <Form onSubmit={handlePasswordChange}>
            <FormGroup>
              <Label>Current Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>New Password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormGroup>
            <SaveButton />
          </Form>
        </CardBody>
      </Card>

      <Card className="shadow-sm border-0 mb-4">
        <CardBody>
          <h5 className="mb-3">
            <FaShieldAlt className="me-2" />
            Two-Factor Authentication
          </h5>
          <Button
            color={twoFAEnabled ? "danger" : "primary"}
            onClick={handle2FAToggle}
          >
            {twoFAEnabled ? "Disable 2FA" : "Enable 2FA"}
          </Button>
        </CardBody>
      </Card>

      <Card className="shadow-sm border-0">
        <CardBody>
          <h5 className="mb-3">
            <FaSignOutAlt className="me-2" />
            Active Sessions
          </h5>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Device</th>
                <th>Location</th>
                <th>Last Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={i}>
                  <td>{s.device}</td>
                  <td>{s.location}</td>
                  <td>{s.lastActive}</td>
                  <td>
                    <Button color="danger" size="sm">
                      <FaSignOutAlt className="me-1" />
                      Sign out
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
