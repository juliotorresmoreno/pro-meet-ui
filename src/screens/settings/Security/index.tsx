"use client";

import { Card, CardBody, Form, Button, Table } from "reactstrap";
import { useState } from "react";
import {
  FaCheck,
  FaKey,
  FaLock,
  FaShieldAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import SaveButton from "@/components/SaveButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/FormInput";
import { updatePassword } from "@/services/account";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";

interface SecurityProps {
  readonly language: string;
}

const schema = z
  .object({
    password: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormData = z.infer<typeof schema>;

export default function Security({ language }: SecurityProps) {
  console.log("Language:", language);
  const { accessToken, logout } = useAuthStore();
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: PasswordFormData) => {
    const payload = {
      currentPassword: data.password,
      newPassword: data.newPassword,
    };
    await updatePassword(payload, accessToken);

    await logout();
    router.push("/login");
  };

  const handle2FAToggle = () => {
    setTwoFAEnabled(!twoFAEnabled);
  };

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

  return (
    <>
      <h2 className="mb-4 d-flex align-items-center">
        <FaShieldAlt className="me-2" />
        Security Settings
      </h2>

      <Card className="p-2 shadow-sm border-0 mb-4">
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              id="password"
              label="Current Password"
              type="password"
              register={register("password")}
              error={errors.password}
              icon={<FaLock className="me-2" />}
            />
            <FormInput
              id="newPassword"
              label="New Password"
              type="password"
              register={register("newPassword")}
              error={errors.newPassword}
              icon={<FaKey className="me-2" />}
            />
            <FormInput
              id="confirmPassword"
              label="Confirm New Password"
              type="password"
              register={register("confirmPassword")}
              error={errors.confirmPassword}
              icon={<FaCheck className="me-2" />}
            />

            <SaveButton />
          </Form>
        </CardBody>
      </Card>

      <Card className="p-2 shadow-sm border-0 mb-4">
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

      <Card className="p-2 shadow-sm border-0 mb-4">
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
              {sessions.map((s) => (
                <tr key={`${s.device}-${s.location}-${s.lastActive}`}>
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
