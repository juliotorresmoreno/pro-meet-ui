"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";

const AboutPage = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  return (
    <>
      <Head>
        <title>Pro-Meets - Professional Meeting Solution</title>
        <meta
          name="description"
          content="Pro-Meets - Your professional meeting solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Componente de cabecera */}
      <Header />

      <main>
        <Container fluid className="pt-5 p-0">
          <About />
          <Mission />
          <Vision />

          <CallToAction language={language} />
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default AboutPage;
