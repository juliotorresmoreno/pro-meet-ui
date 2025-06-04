// app/dashboard/education/page.tsx
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

export default function Education() {
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

  const handleSaveEducation = (id: number) => {
    const educationToSave = educations.find((edu) => edu.id === id);
    console.log("Saving education:", educationToSave);
    // API call to save this specific education
  };

  const handleCancelChanges = (id: number) => {
    console.log("Canceling changes for education:", id);
    // Reset this education to its original state or remove if new
    if (
      educations.find((edu) => edu.id === id)?.degree === "" &&
      educations.find((edu) => edu.id === id)?.institution === ""
    ) {
      removeEducation(id);
    }
  };

  return (
    <div className="education-container">
      <h2 className="mb-4">Education</h2>

      <Form>
        {educations.map((edu, index) => (
          <Card key={edu.id} className="shadow-sm border-0 p-4 mb-4">
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label>Degree*</Label>
                  <Input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleInputChange(index, "degree", e.target.value)
                    }
                    placeholder="e.g. Bachelor of Science"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label>Institution*</Label>
                  <Input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      handleInputChange(index, "institution", e.target.value)
                    }
                    placeholder="University or School name"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={4}>
                <FormGroup>
                  <Label>Field of Study</Label>
                  <Input
                    type="text"
                    value={edu.fieldOfStudy}
                    onChange={(e) =>
                      handleInputChange(index, "fieldOfStudy", e.target.value)
                    }
                    placeholder="e.g. Computer Science"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>From*</Label>
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
                  <Label>To</Label>
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
                    Currently attending
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup className="mt-3">
              <Label>Description</Label>
              <Input
                type="textarea"
                value={edu.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                rows={3}
                placeholder="Thesis, honors, or special program details"
              />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label>Achievements</Label>
              <div className="mb-2">
                {edu.achievements.map((achievement, achievementIndex) => (
                  <Badge
                    key={achievementIndex}
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
                  placeholder="Add an achievement"
                  onKeyDown={(e) => e.key === "Enter" && addAchievement(index)}
                />
                <Button color="secondary" onClick={() => addAchievement(index)}>
                  Add
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
                Delete
              </Button>
              <Button
                color="secondary"
                onClick={() => handleCancelChanges(edu.id)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={() => handleSaveEducation(edu.id)}
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
            onClick={addEducation}
            className="d-flex align-items-center"
          >
            <FaPlus className="me-2" />
            Add New Education
          </Button>
        </div>
      </Form>
    </div>
  );
}
