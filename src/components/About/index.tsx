"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";

const About = () => {
  return (
    <Section
      id="history"
      title="Sobre Nosotros"
      subtitle="Conoce al equipo detrás de Pro-Meets"
      background="white"
      padding="lg"
    >
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <p className="lead">
            En Pro-Meets, nacimos con una misión clara: eliminar la frustración
            de coordinar agendas. Lo que comenzó como una solución simple se ha
            convertido en una plataforma integral que empodera a profesionales
            en más de 15 países.
          </p>
          <p className="lead">
            Nuestra tecnología patentada y enfoque centrado en el usuario nos
            diferencia de otras soluciones del mercado. No solo sincronizamos
            calendarios, creamos experiencias fluidas que fomentan conexiones
            significativas.
          </p>
          <div className="mt-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i> Más de 500,000 reuniones programadas
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i> Integración con 20+ plataformas
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i> Satisfacción del 98% según encuestas
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative">
            <Image
              src="/assets/undraw_remote-meeting_l9wx.png" // Reemplaza con tu imagen
              alt="Equipo de Pro-Meets colaborando"
              width={800}
              height={600}
              className="img-fluid rounded"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,[BASE64_ENCODED_SVG]"
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
