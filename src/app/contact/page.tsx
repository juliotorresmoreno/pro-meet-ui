"use client";

import Head from "next/head";
import { Container } from "reactstrap";
import Header from "@/components/Header";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";

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
          <Contact language={language} />

          <CallToAction language={language} />
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default AboutPage;
