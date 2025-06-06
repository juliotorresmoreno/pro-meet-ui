"use client";

import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";

const Vision = () => {
  return (
    <Section
      id="vision"
      title="Nuestra Visión"
      subtitle="Visualizamos una plataforma donde profesionales y empresas
                  encuentren exactamente las conexiones que necesitan, ya sea
                  talento, empleo o alianzas estratégicas."
      background="white"
      padding="lg"
    >
      <Row className="align-items-center">
        <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
          <div className="ps-lg-4">

            <div className="row g-4">
              <div className="col-md-6">
                <div className="border-start border-3 border-primary ps-3">
                  <h5 className="text-primary">Para Buscadores de Empleo</h5>
                  <p>
                    Conecta directamente con empleadores que buscan tu perfil
                    exacto, eliminando intermediarios.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-success ps-3">
                  <h5 className="text-success">Para Empresas</h5>
                  <p>
                    Encuentra el talento que necesitas mediante nuestro sistema
                    de matching inteligente.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-warning ps-3">
                  <h5 className="text-warning">Para Freelancers</h5>
                  <p>
                    Accede a proyectos que coincidan con tus habilidades y
                    disponibilidad.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-start border-3 border-info ps-3">
                  <h5 className="text-info">Para Líderes B2B</h5>
                  <p>
                    Forma alianzas estratégicas con profesionales
                    complementarios para hacer crecer tu negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6} className="order-lg-1">
          <div className="position-relative rounded overflow-hidden">
            <Image
              src="/assets/undraw_experts_v2vy.svg"
              alt="Red global de conexiones profesionales"
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
