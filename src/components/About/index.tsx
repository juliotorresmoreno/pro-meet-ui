"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";
import { translations } from "./translations";

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="history"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <p className="lead">{t.paragraphs[0]}</p>
          <p className="lead">{t.paragraphs[1]}</p>
          <p className="lead">{t.paragraphs[2]}</p>
          <div className="mt-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                {t.list[0]}
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                {t.list[1]}
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                {t.list[2]}
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative">
            <Image
              src="/assets/undraw_remote-meeting_l9wx.png"
              alt={t.imageAlt}
              width={600}
              height={500}
              className="img-fluid"
              quality={90}
              priority
            />
            <div className="img-overlay"></div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default About;
