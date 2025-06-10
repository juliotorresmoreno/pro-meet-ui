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
  InputGroupText,
} from "reactstrap";
import {
  FaPlus,
  FaUser,
  FaBuilding,
  FaCalendarAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";
import SaveButton from "@/components/SaveButton";
import CancelButton from "@/components/CancelButton";
import DeleteButton from "@/components/DeleteButton";
import SkillsInput, { Skill } from "@/components/SkillsInput";

interface ExperienceProps {
  language: string;
}

export default function Experience({ language }: ExperienceProps) {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "",
      company: "",
      from: "",
      to: "",
      current: false,
      description: "",
      skills: [] as Skill[],
    },
  ]);

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

  const setSkills = (expIndex: number, updatedSkills: Skill[]) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].skills = updatedSkills;
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
              <Col md={6}>
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
              <Col md={6}>
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

            <Row>
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
            </Row>
            <Row>
              <Col md={6} className="d-flex align-items-center">
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
                rows={4}
                placeholder="Describe your responsibilities and achievements"
              />
            </FormGroup>

            <SkillsInput
              language={language}
              initialSkills={[]}
              onSkillsChange={(updatedSkills) =>
                setSkills(index, updatedSkills)
              }
            />

            <div className="d-flex justify-content-end mt-3 gap-2">
              <DeleteButton onClick={() => removeExperience(exp.id)} />
              <CancelButton onClick={() => handleCancelChanges(exp.id)} />
              <SaveButton onClick={() => handleSaveExperience(exp.id)} />
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
