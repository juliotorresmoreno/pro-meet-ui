import { ErrorResponse } from "@/types/http";
import { requireEnv } from "@/utils/env";

interface RegisterUserResponse {
  message: string;
}

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}): Promise<RegisterUserResponse> => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return response.json();
};

interface LoginUserResponse {
  access_token: string;
  refresh_token: string;
}

export const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<LoginUserResponse> => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
};

export const loginOAuth = async (
  accessToken: string
): Promise<LoginUserResponse> => {
  try {
    const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

    const response = await fetch(`${apiUrl}/auth/oauth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: accessToken }),
    });

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.message || "OAuth login failed");
    }

    return response.json();
  } catch (error) {
    console.error("OAuth login error:", error);
    throw new Error("OAuth login failed. Please try again.");
  }
};

export const sendPasswordResetEmail = async (email: string) => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to send reset email");
  }

  return response.json();
};

export const verifyEmail = async (token: string) => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/verify-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Email verification failed");
  }

  return response.json();
};

export const resendVerificationEmail = async (email: string) => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/resend-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message || "Failed to resend verification email");
  }

  return response.json();
};

export const resetPassword = async (token: string, newPassword: string) => {
  const apiUrl = requireEnv("NEXT_PUBLIC_API_URL");

  const response = await fetch(`${apiUrl}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(
      errorData.message ||
        "Failed to reset password. The link may have expired."
    );
  }

  return response.json();
};
