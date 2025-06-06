"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";
import { translations } from "./translations";

interface VisionProps {
  language: string;
}

const Vision: React.FC<VisionProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="vision"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="align-items-center">
        <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
          <div className="ps-lg-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="border-start border-3 border-primary ps-3">
                  <h5 className="text-primary">
                    {t.sections.jobSeekers.title}
                  </h5>
                  <p className="lead">{t.sections.jobSeekers.text}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-success ps-3">
                  <h5 className="text-success">Para Empresas</h5>
                  <p className="lead">{t.sections.companies.text}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-warning ps-3">
                  <h5 className="text-warning">Para Freelancers</h5>
                  <p className="lead">{t.sections.freelancers.text}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-info ps-3">
                  <h5 className="text-info">Para Líderes B2B</h5>
                  <p className="lead">{t.sections.b2bLeaders.text}</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6} className="order-lg-1">
          <div className="position-relative rounded overflow-hidden">
            <Image
              src="/assets/undraw_experts_v2vy.svg"
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

export default Vision;
