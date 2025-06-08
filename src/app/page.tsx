"use client";

import CallToAction from "@/screens/common/CallToAction";
import Features from "@/screens/home/Features";
import Footer from "@/screens/common/Footer";
import Header from "@/screens/common/Header";
import Hero from "@/screens/home/Hero";
import HowItWorks from "@/screens/home/HowItWorks";
import Pricing from "@/screens/home/Pricing";
import UseCases from "@/screens/home/UseCases";
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
