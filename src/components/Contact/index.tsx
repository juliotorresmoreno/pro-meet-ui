import { Col, Row } from "reactstrap";
import Section from "../Section";
import Image from "next/image";
import { translations } from "./translations";

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <Section
      id="contact"
      title={t.title}
      subtitle={t.subtitle}
      background="white"
      padding="lg"
    >
      <Row className="align-items-center justify-content-center">
        <Col lg={8} xl={6} className="mb-4 mb-lg-0">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h3 className="text-center mb-4">{t.heading}</h3>
              <form>
                <Row>
                  <Col md={6} className="mb-3">
                    <label htmlFor="name" className="form-label">
                      {t.name} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={t.placeholder.name}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <label htmlFor="email" className="form-label">
                      {t.email} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t.placeholder.email}
                      required
                    />
                  </Col>
                </Row>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    {t.subject} <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="subject" required>
                    <option value="">{t.subjects.select}</option>
                    <option value="general">{t.subjects.general}</option>
                    <option value="support">{t.subjects.support}</option>
                    <option value="partnership">
                      {t.subjects.partnership}
                    </option>
                    <option value="feedback">{t.subjects.feedback}</option>
                    <option value="other">{t.subjects.other}</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    {t.message} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder={t.placeholder.message}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="bi bi-send-fill me-2"></i> {t.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col lg={4} xl={6} className="d-none d-lg-block">
          <div className="ps-xl-5">
            <div className="position-relative rounded overflow-hidden h-100">
              <Image
                src="/assets/undraw_contact-us_kcoa.png"
                alt={t.imageAlt}
                width={600}
                height={500}
                className="img-fluid"
                quality={90}
                priority
              />
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Contact;
