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
  Badge,
} from "reactstrap";
import { FaTrash, FaPlus, FaTimes, FaSave } from "react-icons/fa";
import SkillsInput, { Skill } from "@/components/SkillsInput";
import { translations } from "./translations";

interface EducationProps {
  readonly language: string;
}

export default function Education({ language }: EducationProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const [educations, setEducations] = useState([
    {
      id: 1,
      degree: "",
      institution: "",
      fieldOfStudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      skills: [] as Skill[],
      achievements: [] as string[],
    },
  ]);
  const [newAchievement, setNewAchievement] = useState("");

  const handleInputChange = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };
    setEducations(updatedEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        degree: "",
        institution: "",
        fieldOfStudy: "",
        from: "",
        to: "",
        current: false,
        description: "",
        skills: [],
        achievements: [],
      },
    ]);
  };

  const removeEducation = (id: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((edu) => edu.id !== id));
    }
  };

  const addAchievement = (eduIndex: number) => {
    if (newAchievement.trim()) {
      const updatedEducations = [...educations];
      updatedEducations[eduIndex].achievements = [
        ...updatedEducations[eduIndex].achievements,
        newAchievement.trim(),
      ];
      setEducations(updatedEducations);
      setNewAchievement("");
    }
  };

  const removeAchievement = (eduIndex: number, achievementIndex: number) => {
    const updatedEducations = [...educations];
    updatedEducations[eduIndex].achievements = updatedEducations[
      eduIndex
    ].achievements.filter((_, i) => i !== achievementIndex);
    setEducations(updatedEducations);
  };

  const setSkills = (eduIndex: number, updatedSkills: Skill[]) => {
    const updatedEducations = [...educations];
    updatedEducations[eduIndex].skills = updatedSkills;
    setEducations(updatedEducations);
  };

  const handleSaveEducation = (id: number) => {
    const educationToSave = educations.find((edu) => edu.id === id);
    console.log("Saving education:", educationToSave);
  };

  const handleCancelChanges = (id: number) => {
    if (
      educations.find((edu) => edu.id === id)?.degree === "" &&
      educations.find((edu) => edu.id === id)?.institution === ""
    ) {
      removeEducation(id);
    }
  };

  return (
    <div className="education-container">
      <h2 className="mb-4">{t.title}</h2>

      <Form>
        {educations.map((edu, index) => (
          <Card key={edu.id} className="shadow-sm border-0 p-4 mb-4">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.degree}</Label>
                  <Input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleInputChange(index, "degree", e.target.value)
                    }
                    placeholder={t.degreePlaceholder}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.institution}</Label>
                  <Input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      handleInputChange(index, "institution", e.target.value)
                    }
                    placeholder={t.institutionPlaceholder}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label>{t.field}</Label>
                  <Input
                    type="text"
                    value={edu.fieldOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "fieldOfStudy", e.target.value)
                    }
                    placeholder={t.fieldPlaceholder}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label>{t.from}</Label>
                  <Input
                    type="month"
                    value={edu.from}
                    onChange={(e) =>
                      handleInputChange(index, "from", e.target.value)
                    }
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>{t.to}</Label>
                  <Input
                    type="month"
                    value={edu.to}
                    onChange={(e) =>
                      handleInputChange(index, "to", e.target.value)
                    }
                    disabled={edu.current}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={2} className="d-flex align-items-end">
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id={`current-${index}`}
                    checked={edu.current}
                    onChange={(e) => {
                      handleInputChange(index, "current", e.target.checked);
                      if (e.target.checked) {
                        handleInputChange(index, "to", "");
                      }
                    }}
                  />
                  <Label for={`current-${index}`} check>
                    {t.currently}
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup className="mt-3">
              <Label>{t.description}</Label>
              <Input
                type="textarea"
                value={edu.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                rows={3}
                placeholder={t.descriptionPlaceholder}
              />
            </FormGroup>

            <SkillsInput
              language={language}
              initialSkills={[]}
              onSkillsChange={(updatedSkills) =>
                setSkills(index, updatedSkills)
              }
            />

            <FormGroup className="mt-3">
              <Label>{t.achievements}</Label>
              <div className="mb-2">
                {edu.achievements.map((achievement, achievementIndex) => (
                  <Badge
                    key={achievement + achievementIndex}
                    color="info"
                    pill
                    className="me-2 mb-2 d-inline-flex align-items-center"
                  >
                    {achievement}
                    <Button
                      color="link"
                      className="text-white p-0 ms-2"
                      onClick={() => removeAchievement(index, achievementIndex)}
                    >
                      <FaTimes size={12} />
                    </Button>
                  </Badge>
                ))}
              </div>
              <InputGroup>
                <Input
                  type="text"
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder={t.achievementPlaceholder}
                  onKeyDown={(e) => e.key === "Enter" && addAchievement(index)}
                />
                <Button color="secondary" onClick={() => addAchievement(index)}>
                  {t.addAchievement}
                </Button>
              </InputGroup>
            </FormGroup>

            <div className="d-flex justify-content-end mt-3">
              <Button
                color="danger"
                onClick={() => removeEducation(edu.id)}
                className="me-2"
              >
                <FaTrash className="me-1" />
                {t.delete}
              </Button>
              <Button
                color="secondary"
                onClick={() => handleCancelChanges(edu.id)}
                className="me-2"
              >
                {t.cancel}
              </Button>
              <Button
                color="primary"
                onClick={() => handleSaveEducation(edu.id)}
              >
                <FaSave className="me-1" />
                {t.save}
              </Button>
            </div>
          </Card>
        ))}

        <div className="d-flex justify-content-start mt-3">
          <Button
            color="primary"
            outline
            onClick={addEducation}
            className="d-flex align-items-center"
          >
            <FaPlus className="me-2" />
            {t.addNew}
          </Button>
        </div>
      </Form>
    </div>
  );
}
