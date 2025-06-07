import { ErrorResponse } from "@/types/http";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const contact = async (payload: ContactPayload) => {
  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];

  const response = await fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to resend verification email");
  }

  return response.json();
};
