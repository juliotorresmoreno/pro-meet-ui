"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";
import { translations } from "./translations";

interface MissionProps {
  language: string;
}

const Mission: React.FC<MissionProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="mission"
      title={t.title}
      subtitle={t.subtitle}
      background="light"
      padding="lg"
    >
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="pe-lg-4">
            <div className="d-flex align-items-start mb-5">
              <div className="me-4">
                <div className="bg-opacity-10 rounded-circle p-3 d-inline-block">
                  <i className="bi bi-bullseye text-primary fs-3"></i>
                </div>
              </div>
              <div>
                <h3 className="mb-3">{t.commitmentTitle}</h3>
                <p className="lead">{t.commitmentTexts[0]}</p>
                <p className="lead">{t.commitmentTexts[1]}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative rounded overflow-hidden">
            <Image
              src="/assets/undraw_team-goals_0026.svg"
              alt={t.imageAlt}
              width={600}
              height={500}
              className="img-fluid"
              quality={90}
              priority
            />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Mission;
