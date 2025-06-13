import { AccountModel } from "@/types/account";
import { ErrorResponse } from "@/types/http";

export type AccountResponse = AccountModel;
export type UpdateAccountPayload = AccountModel;

const parseAccount = (data: AccountModel & { createdAt: string; updatedAt: string }): AccountResponse => ({
  ...data,
  createdAt: new Date(data.createdAt),
  updatedAt: new Date(data.updatedAt),
});

export const getAccount = async (token: string): Promise<AccountResponse> => {
  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];
  const response = await fetch(`${apiUrl}/account`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to get account");
  }

  const responseObj = await response.json();
  return parseAccount(responseObj);
};

export const updateAccount = async (
  payload: Omit<UpdateAccountPayload, "id" | "email" | "plan" | "createdAt" | "updatedAt">,
  token: string
): Promise<AccountResponse> => {
  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];
  const response = await fetch(`${apiUrl}/account`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to update account");
  }

  const responseObj = await response.json();
  return parseAccount(responseObj);
};

export const deleteAccount = async (token: string): Promise<void> => {
  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];
  const response = await fetch(`${apiUrl}/account`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to delete account");
  }
};

interface UpdatePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export const updatePassword = async (
  payload: UpdatePasswordPayload,
  token: string
): Promise<void> => {
  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];
  const response = await fetch(`${apiUrl}/account/password`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to update password");
  }
};
