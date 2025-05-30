"use client";

import { useAuthStore } from "@/stores/auth";

const DashboardPage = () => {
  const { accessToken } = useAuthStore();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <p>Your access token is: {accessToken}</p>
    </div>
  );
};

export default DashboardPage;
