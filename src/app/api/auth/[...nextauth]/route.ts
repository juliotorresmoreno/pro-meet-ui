import { SessionWithAccessToken } from "@/types/session";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        const payload = {
          sub: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
        };
        const secret = process.env.NEXTAUTH_SECRET;
        if (!secret) {
          throw new Error("NEXTAUTH_SECRET is not defined");
        }

        // Sign the JWT with the secret
        token.accessToken = jwt.sign(payload, secret, {
          algorithm: "HS256",
          expiresIn: "1h",
        });
        token.id = user.id;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: SessionWithAccessToken;
      token: JWT;
    }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
