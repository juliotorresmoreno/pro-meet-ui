import { AccountModel } from "@/types/account";
import { ErrorResponse } from "@/types/http";

export type AccountResponse = AccountModel;
export type UpdateAccountPayload = AccountModel;

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

  const body = (await response.json()) as AccountModel & {
    createdAt: string;
    updatedAt: string;
  };

  return {
    ...body,
    createdAt: new Date(body.createdAt),
    updatedAt: new Date(body.updatedAt),
  } as AccountResponse;
};

export const updateAccount = async (
  payload: UpdateAccountPayload,
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

  const body = (await response.json()) as AccountModel & {
    createdAt: string;
    updatedAt: string;
  };

  return {
    ...body,
    createdAt: new Date(body.createdAt),
    updatedAt: new Date(body.updatedAt),
  } as AccountResponse;
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
