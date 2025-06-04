"use client";

import { useState } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormGroup,
  Label,
  Input,
  FormText,
  Badge,
  InputGroupText,
} from "reactstrap";
import {
  FaTrash,
  FaPlus,
  FaTimes,
  FaSave,
  FaUser,
  FaBuilding,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaTools,
} from "react-icons/fa";

export default function Experience() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "",
      company: "",
      from: "",
      to: "",
      current: false,
      description: "",
      skills: [] as string[],
    },
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        position: "",
        company: "",
        from: "",
        to: "",
        current: false,
        description: "",
        skills: [],
      },
    ]);
  };

  const removeExperience = (id: number) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((exp) => exp.id !== id));
    }
  };

  const addSkill = (expIndex: number) => {
    if (newSkill.trim()) {
      const updatedExperiences = [...experiences];
      updatedExperiences[expIndex].skills = [
        ...updatedExperiences[expIndex].skills,
        newSkill.trim(),
      ];
      setExperiences(updatedExperiences);
      setNewSkill("");
    }
  };

  const removeSkill = (expIndex: number, skillIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].skills = updatedExperiences[
      expIndex
    ].skills.filter((_, i) => i !== skillIndex);
    setExperiences(updatedExperiences);
  };

  const handleSaveExperience = (id: number) => {
    const experienceToSave = experiences.find((exp) => exp.id === id);
    console.log("Saving experience:", experienceToSave);
  };

  const handleCancelChanges = (id: number) => {
    if (
      experiences.find((exp) => exp.id === id)?.position === "" &&
      experiences.find((exp) => exp.id === id)?.company === ""
    ) {
      removeExperience(id);
    }
  };

  return (
    <div className="experience-container">
      <h2 className="mb-4">Work Experience</h2>

      <Form>
        {experiences.map((exp, index) => (
          <Card key={exp.id} className="shadow-sm border-0 p-4 mb-4">
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label>Position</Label>
                  <InputGroup>
                    <InputGroupText>
                      <FaUser />
                    </InputGroupText>
                    <Input
                      type="text"
                      value={exp.position}
                      onChange={(e) =>
                        handleInputChange(index, "position", e.target.value)
                      }
                      placeholder="Job title"
                      required
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label>Company</Label>
                  <InputGroup>
                    <InputGroupText>
                      <FaBuilding />
                    </InputGroupText>
                    <Input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleInputChange(index, "company", e.target.value)
                      }
                      placeholder="Company name"
                      required
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={3}>
                <FormGroup>
                  <Label>From</Label>
                  <InputGroup>
                    <InputGroupText>
                      <FaCalendarAlt />
                    </InputGroupText>
                    <Input
                      type="month"
                      value={exp.from}
                      onChange={(e) =>
                        handleInputChange(index, "from", e.target.value)
                      }
                      required
                    />
                  </InputGroup>
                  <FormText>Start date</FormText>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>To</Label>
                  <InputGroup>
                    <InputGroupText>
                      <FaRegCalendarCheck />
                    </InputGroupText>
                    <Input
                      type="month"
                      value={exp.to}
                      onChange={(e) =>
                        handleInputChange(index, "to", e.target.value)
                      }
                      disabled={exp.current}
                    />
                  </InputGroup>
                  <FormText>End date</FormText>
                </FormGroup>
              </Col>
              <Col md={6} className="d-flex align-items-end">
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id={`current-${index}`}
                    checked={exp.current}
                    onChange={(e) => {
                      handleInputChange(index, "current", e.target.checked);
                      if (e.target.checked) {
                        handleInputChange(index, "to", "");
                      }
                    }}
                  />
                  <Label for={`current-${index}`} check>
                    I currently work here
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup className="mt-3">
              <Label>Description</Label>
              <Input
                type="textarea"
                value={exp.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                rows={3}
                placeholder="Describe your responsibilities and achievements"
              />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label>Skills Used</Label>
              <div className="mb-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    color="primary"
                    pill
                    className="me-2 mb-2 d-inline-flex align-items-center"
                  >
                    {skill}
                    <Button
                      color="link"
                      className="text-white p-0 ms-2"
                      onClick={() => removeSkill(index, skillIndex)}
                    >
                      <FaTimes size={12} />
                    </Button>
                  </Badge>
                ))}
              </div>
              <InputGroup>
                <InputGroupText>
                  <FaTools />
                </InputGroupText>
                <Input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  onKeyDown={(e) => e.key === "Enter" && addSkill(index)}
                />
                <Button color="secondary" onClick={() => addSkill(index)}>
                  Add
                </Button>
              </InputGroup>
            </FormGroup>

            <div className="d-flex justify-content-end mt-3">
              <Button
                color="danger"
                onClick={() => removeExperience(exp.id)}
                className="me-2"
              >
                <FaTrash className="me-1" />
                Delete
              </Button>
              <Button
                color="secondary"
                onClick={() => handleCancelChanges(exp.id)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={() => handleSaveExperience(exp.id)}
              >
                <FaSave className="me-1" />
                Save
              </Button>
            </div>
          </Card>
        ))}

        <div className="d-flex justify-content-start mt-3">
          <Button
            color="primary"
            outline
            onClick={addExperience}
            className="d-flex align-items-center"
          >
            <FaPlus className="me-2" />
            Add New Experience
          </Button>
        </div>
      </Form>
    </div>
  );
}
