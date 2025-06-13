import { NotificationModel } from "@/types/notification";

type Notification = {
  id: string;
  title: string;
  read: boolean;
  metadata: {
    type: string;
    message: string;
  };
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type NotificationResponse = {
  data: Notification[];
  total: number;
  skip: number;
  take: number;
};

export const getNotifications = async (
  query: {
    skip?: number;
    take?: number;
    read?: boolean;
    type?: string;
  },
  token: string
): Promise<{
  data: NotificationModel[];
  total: number;
  skip: number;
  take: number;
}> => {
  const urlParams = new URLSearchParams();
  if (query.skip !== undefined) urlParams.append("skip", query.skip.toString());
  if (query.take !== undefined) urlParams.append("take", query.take.toString());

  const apiUrl = process.env["NEXT_PUBLIC_API_URL"];

  const url = new URL(apiUrl + "/notifications");
  if (urlParams.toString()) {
    url.search = urlParams.toString();
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorData: { message: string } = await response.json();
    throw new Error(errorData.message || "Failed to get notifications");
  }
  const responseObj = (await response.json()) as NotificationResponse;
  return {
    data: responseObj.data.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    })),
    total: responseObj.total,
    take: responseObj.take,
    skip: responseObj.skip,
  };
};
