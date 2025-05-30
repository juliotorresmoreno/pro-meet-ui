"use client";

import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import UseCases from "@/components/UseCases";
import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

const HomePage: NextPage = () => {
  const language = useLanguageStore((state) => state.language) || getLanguage();

  return (
    <>
      <Head>
        <title>Pro-Meets - Landing Page</title>
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
          {/* Secciones a implementar: */}
          <Hero language={language} />
          <Features language={language} />
          <UseCases language={language} />
          <HowItWorks language={language} />
          <Pricing language={language} />

          <CallToAction language={language} />
        </Container>

        <Footer language={language} />
      </main>
    </>
  );
};

export default HomePage;
