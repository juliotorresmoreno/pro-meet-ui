interface RegisterUserResponse {
  access_token: string;
}

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}): Promise<RegisterUserResponse> => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return response.json();
};

interface LoginUserResponse {
  access_token: string;
}

export const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<LoginUserResponse> => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
};

export const sendPasswordResetEmail = async (email: string) => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to send reset email");
  }

  return response.json();
};
