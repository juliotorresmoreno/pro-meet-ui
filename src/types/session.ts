import { ISODateString, Session } from "next-auth";

export interface SessionWithAccessToken extends Session {
  accessToken?: string;
  user?: {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}
