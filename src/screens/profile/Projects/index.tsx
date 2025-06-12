"use client";

import { useState } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Badge,
} from "reactstrap";
import { FaTrash, FaPlus, FaTimes, FaSave, FaFolderOpen } from "react-icons/fa";
import SkillsInput, { Skill } from "@/components/SkillsInput";
import { translations } from "./translations";

interface ProjectsProps {
  readonly language: string;
}

export default function Projects({ language }: ProjectsProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "",
      description: "",
      link: "",
      skills: [] as Skill[],
      highlights: [] as string[],
    },
  ]);
  const [newHighlight, setNewHighlight] = useState("");

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        name: "",
        description: "",
        link: "",
        skills: [],
        highlights: [],
      },
    ]);
  };

  const removeProject = (id: number) => {
    if (projects.length > 1) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  const setSkills = (index: number, updatedSkills: Skill[]) => {
    const updatedProjects = [...projects];
    updatedProjects[index].skills = updatedSkills;
    setProjects(updatedProjects);
  };

  const addHighlight = (index: number) => {
    if (newHighlight.trim()) {
      const updatedProjects = [...projects];
      updatedProjects[index].highlights.push(newHighlight.trim());
      setProjects(updatedProjects);
      setNewHighlight("");
    }
  };

  const removeHighlight = (projIndex: number, highlightIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projIndex].highlights.splice(highlightIndex, 1);
    setProjects(updatedProjects);
  };

  const handleSaveProject = (id: number) => {
    const projectToSave = projects.find((p) => p.id === id);
    console.log("Saving project:", projectToSave);
  };

  return (
    <div className="projects-container">
      <h2 className="mb-4 d-flex align-items-center">
        <FaFolderOpen className="me-2" />
        {t.projects}
      </h2>

      <Form>
        {projects.map((project, index) => (
          <Card key={project.id} className="shadow-sm border-0 p-4 mb-4">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.projectName}</Label>
                  <Input
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                    placeholder={t.projectNamePlaceholder}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>{t.projectLink}</Label>
                  <Input
                    type="url"
                    value={project.link}
                    onChange={(e) =>
                      handleInputChange(index, "link", e.target.value)
                    }
                    placeholder={t.projectLinkPlaceholder}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>{t.projectDescription}</Label>
              <Input
                type="textarea"
                rows={3}
                value={project.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                placeholder={t.projectDescriptionPlaceholder}
              />
            </FormGroup>

            <SkillsInput
              language={language}
              initialSkills={[]}
              onSkillsChange={(skills) => setSkills(index, skills)}
            />

            <FormGroup className="mt-3">
              <Label>{t.highlights}</Label>
              <div className="mb-2">
                {project.highlights.map((h, hi) => (
                  <Badge
                    key={h + hi}
                    color="info"
                    pill
                    className="me-2 mb-2 d-inline-flex align-items-center"
                  >
                    {h}
                    <Button
                      color="link"
                      className="text-white p-0 ms-2"
                      onClick={() => removeHighlight(index, hi)}
                    >
                      <FaTimes size={12} />
                    </Button>
                  </Badge>
                ))}
              </div>
              <InputGroup>
                <Input
                  type="text"
                  value={newHighlight}
                  onChange={(e) => setNewHighlight(e.target.value)}
                  placeholder={t.highlightPlaceholder}
                  onKeyDown={(e) => e.key === "Enter" && addHighlight(index)}
                />
                <Button color="secondary" onClick={() => addHighlight(index)}>
                  {t.addHighlight}
                </Button>
              </InputGroup>
            </FormGroup>

            <div className="d-flex justify-content-end mt-3">
              <Button
                color="danger"
                onClick={() => removeProject(project.id)}
                className="me-2"
              >
                <FaTrash className="me-1" />
                {t.delete}
              </Button>
              <Button
                color="primary"
                onClick={() => handleSaveProject(project.id)}
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
            onClick={addProject}
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
