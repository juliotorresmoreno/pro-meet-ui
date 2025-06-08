import React from "react";
import { Row, Col } from "reactstrap";
import Section from "@/components/Section";
import { translations } from "./translations";

interface UseCasesProps {
  language: string;
}

const UseCases = ({ language }: UseCasesProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="use-cases"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="g-4">
        {t.cases.map((useCase) => (
          <Col md={6} lg={4} key={useCase.title}>
            <div className="use-case-card h-100 p-4 bg-white rounded-3 border">
              <div className="d-flex align-items-start">
                <div className="icon-container me-3">{useCase.icon}</div>
                <div>
                  <h3 className="h5 fw-bold mb-2 text-dark">{useCase.title}</h3>
                  <p className="text-muted mb-0">{useCase.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default UseCases;
