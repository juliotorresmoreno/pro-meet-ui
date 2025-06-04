// app/dashboard/profile/page.tsx
"use client";

import {
  Card,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormGroup,
  Label,
  InputGroupText,
  Input,
} from "reactstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    summary: "",
    website: "",
    linkedin: "",
    github: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // API call to save profile
  };

  return (
    <>
      <h2 className="mb-4">Professional Profile</h2>
      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Full Name</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaUser />
                  </InputGroupText>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Email</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaEnvelope />
                  </InputGroupText>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Phone</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaPhone />
                  </InputGroupText>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Profession</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaBriefcase />
                  </InputGroupText>
                  <Input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    placeholder="Your profession"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Professional Summary</Label>
            <Input
              type="textarea"
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              rows={4}
              placeholder="Brief summary of your professional background"
            />
          </FormGroup>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>LinkedIn</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaLinkedin />
                  </InputGroupText>
                  <Input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="LinkedIn profile URL"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>GitHub</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaGithub />
                  </InputGroupText>
                  <Input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    placeholder="GitHub profile URL"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Personal Website</Label>
                <InputGroup>
                  <InputGroupText>
                    <FaGlobe />
                  </InputGroupText>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Your website URL"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-4">
            <Button color="primary" type="submit" className="me-2">
              Save Profile
            </Button>
            <Button color="secondary">Cancel</Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
