// components/Section.tsx
"use client";

import React, { ReactNode } from "react";
import { Container } from "reactstrap";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "light" | "dark" | "primary" | "gradient" | "white";
  padding?: "sm" | "md" | "lg";
  align?: "left" | "center";
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "light",
  padding = "lg",
  align = "center",
}: SectionProps) => {
  const backgroundClasses = {
    light: "bg-light",
    dark: "bg-dark text-white",
    primary: "bg-primary text-white",
    gradient: "bg-gradient-light",
    white: "bg-white",
  };

  const paddingClasses = {
    sm: "py-6",
    md: "py-12",
    lg: "py-20",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className} position-relative p-5 pt-5`}
    >
      <Container>
        <div className={`${alignClasses[align]} mb-8`}>
          <h2 className="display-5 fw-bold mb-3 text-black pt-5">{title}</h2>
          {subtitle && <p className="lead">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
};

export default Section;
