"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import ProfileLayout from "@/screens/profile/Layout";
import { useFullScreenScroll } from "@/hooks/useFullScreenScroll";

export default function ProfilePage() {
  useFullScreenScroll();

  return (
    <ProfileLayout>
      <Head>
        <title>Pro-Meets Dashboard</title>
        <meta name="description" content="Manage your professional meetings" />
      </Head>

      <Container fluid className="px-md-4">
        asdfasfgfsd
      </Container>
    </ProfileLayout>
  );
}
