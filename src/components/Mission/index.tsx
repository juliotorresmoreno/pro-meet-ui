"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";

const Mission = () => {
  return (
    <Section
      id="mission"
      title="Nuestra Misión"
      subtitle="El propósito que nos guía"
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
                <h3 className="mb-3">Nuestro Compromiso</h3>
                <p className="lead">
                  En Pro-Meets, nos dedicamos a revolucionar la gestión del tiempo mediante
                  tecnología intuitiva que elimina las fricciones en la programación de reuniones.
                </p>
                <p className="lead">
                  Creemos que cada minuto cuenta, y nuestro objetivo es devolverle a las personas
                  el tiempo que pierden coordinando agendas, para que puedan enfocarse en lo que
                  realmente importa.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="position-relative rounded overflow-hidden">
            <Image
              src="/assets/undraw_team-goals_0026.svg"
              alt="Ilustración de misión empresarial"
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