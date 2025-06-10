"use client";

import { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Badge,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FaTimes, FaPlus } from "react-icons/fa";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description?: string;
}

const translations = {
  en: {
    add: "Add",
    cancel: "Cancel",
    skills: "Skills",
    name: "Name",
    level: "Level",
    description: "Description",
    editSkill: "Edit Skill",
    newSkill: "New Skill",
    levels: [
      {
        value: "Expert",
        label: "Expert",
        color: "success",
        desc: "Full mastery, can design and innovate in the field",
      },
      {
        value: "Advanced",
        label: "Advanced",
        color: "primary",
        desc: "Can solve complex problems and mentor others",
      },
      {
        value: "Intermediate",
        label: "Intermediate",
        color: "info",
        desc: "Can work independently with occasional supervision",
      },
      {
        value: "Beginner",
        label: "Beginner",
        color: "warning",
        desc: "Basic knowledge, can perform simple tasks",
      },
    ],
  },
  es: {
    add: "Agregar",
    cancel: "Cancelar",
    skills: "Habilidades",
    name: "Nombre",
    level: "Nivel",
    description: "Descripción",
    editSkill: "Editar Habilidad",
    newSkill: "Nueva Habilidad",
    levels: [
      {
        value: "Expert",
        label: "Experto",
        color: "success",
        desc: "Dominio completo, puede diseñar e innovar en el área",
      },
      {
        value: "Advanced",
        label: "Avanzado",
        color: "primary",
        desc: "Puede resolver problemas complejos y mentorizar a otros",
      },
      {
        value: "Intermediate",
        label: "Intermedio",
        color: "info",
        desc: "Puede trabajar independientemente con supervisión ocasional",
      },
      {
        value: "Beginner",
        label: "Principiante",
        color: "warning",
        desc: "Conocimiento básico, puede realizar tareas simples",
      },
    ],
  },
  fr: {
    add: "Ajouter",
    cancel: "Annuler",
    skills: "Compétences",
    name: "Nom",
    level: "Niveau",
    description: "Description",
    editSkill: "Modifier la compétence",
    newSkill: "Nouvelle compétence",
    levels: [
      {
        value: "Expert",
        label: "Expert",
        color: "success",
        desc: "Maîtrise complète, peut concevoir et innover dans le domaine",
      },
      {
        value: "Advanced",
        label: "Avancé",
        color: "primary",
        desc: "Peut résoudre des problèmes complexes et encadrer les autres",
      },
      {
        value: "Intermediate",
        label: "Intermédiaire",
        color: "info",
        desc: "Peut travailler de manière autonome avec une supervision occasionnelle",
      },
      {
        value: "Beginner",
        label: "Débutant",
        color: "warning",
        desc: "Connaissances de base, peut effectuer des tâches simples",
      },
    ],
  },
  ja: {
    add: "追加",
    cancel: "キャンセル",
    skills: "スキル",
    name: "名前",
    level: "レベル",
    description: "説明",
    editSkill: "スキルを編集",
    newSkill: "新しいスキル",
    levels: [
      {
        value: "Expert",
        label: "エキスパート",
        color: "success",
        desc: "完全な習熟度、設計や革新が可能",
      },
      {
        value: "Advanced",
        label: "上級",
        color: "primary",
        desc: "複雑な問題を解決し、他者を指導できる",
      },
      {
        value: "Intermediate",
        label: "中級",
        color: "info",
        desc: "時折の監督で独立して作業できる",
      },
      {
        value: "Beginner",
        label: "初心者",
        color: "warning",
        desc: "基本的な知識、簡単な作業が可能",
      },
    ],
  },
  zh: {
    add: "添加",
    cancel: "取消",
    skills: "技能",
    name: "名称",
    level: "等级",
    description: "描述",
    editSkill: "编辑技能",
    newSkill: "新技能",
    levels: [
      {
        value: "Expert",
        label: "专家",
        color: "success",
        desc: "完全掌握，能进行设计和创新",
      },
      {
        value: "Advanced",
        label: "高级",
        color: "primary",
        desc: "能解决复杂问题并指导他人",
      },
      {
        value: "Intermediate",
        label: "中级",
        color: "info",
        desc: "能在偶尔监督下独立工作",
      },
      {
        value: "Beginner",
        label: "初学者",
        color: "warning",
        desc: "基础知识，能完成简单任务",
      },
    ],
  },
};

interface SkillsInputProps {
  initialSkills?: Skill[];
  onSkillsChange?: (skills: Skill[]) => void;
  language: string;
}

const SkillsInput = ({
  initialSkills = [],
  onSkillsChange,
  language,
}: SkillsInputProps) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<Skill>({
    name: "",
    level: "Intermediate",
    description: "",
  });

  const t =
    translations[language as keyof typeof translations] || translations.en;

  const levelOptions = t.levels;

  const openModal = (skill?: Skill, index?: number) => {
    setForm(skill ?? { name: "", level: "Intermediate", description: "" });
    setEditingIndex(index ?? null);
    setModalOpen(true);
  };

  const handleSubmit = () => {
    const trimmedName = form.name.trim();
    if (!trimmedName) return;
    const updated = [...skills];
    if (editingIndex !== null) {
      updated[editingIndex] = { ...form, name: trimmedName };
    } else {
      if (
        skills.some((s) => s.name.toLowerCase() === trimmedName.toLowerCase())
      )
        return;
      updated.push({ ...form, name: trimmedName });
    }
    setSkills(updated);
    onSkillsChange?.(updated);
    setModalOpen(false);
  };

  const removeSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
    onSkillsChange?.(updated);
  };

  const onDragEnd = (res: DropResult) => {
    if (!res.destination) return;
    const name = res.draggableId;
    const newLevel = res.destination.droppableId as Skill["level"];
    const idx = skills.findIndex((s) => s.name === name);
    const updated = [...skills];
    updated[idx].level = newLevel;
    setSkills(updated);
    onSkillsChange?.(updated);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="skills-component border rounded p-3 bg-light">
          <FormGroup>
            <Label className="d-flex justify-content-between align-items-center">
              <span>{t.skills}</span>
              <Button color="primary" size="sm" onClick={() => openModal()}>
                <FaPlus className="me-1" /> {t.add}
              </Button>
            </Label>

            {levelOptions.map((lvl) => (
              <Droppable
                droppableId={lvl.value}
                key={lvl.value}
                direction="horizontal"
              >
                {(prov) => (
                  <div
                    ref={prov.innerRef}
                    {...prov.droppableProps}
                    className="mb-4"
                  >
                    <div
                      id={`tooltip-title-${lvl.value}`}
                      className="mb-2 fw-bold text-secondary"
                    >
                      {lvl.label}
                    </div>
                    <UncontrolledTooltip
                      placement="top"
                      target={`tooltip-title-${lvl.value}`}
                    >
                      {lvl.desc}
                    </UncontrolledTooltip>
                    <div className="d-flex flex-wrap gap-2">
                      {skills
                        .map((s, i) => ({ ...s, idx: i }))
                        .filter((s) => s.level === lvl.value)
                        .map((skill, i2) => (
                          <Draggable
                            draggableId={skill.name}
                            index={i2}
                            key={skill.name}
                          >
                            {(p) => (
                              <div
                                ref={p.innerRef}
                                {...p.draggableProps}
                                {...p.dragHandleProps}
                              >
                                <Badge
                                  pill
                                  color={lvl.color}
                                  className="d-inline-flex align-items-center"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => openModal(skill, skill.idx)}
                                >
                                  {skill.name}
                                  <Button
                                    color="link"
                                    className="text-white p-0 ms-2"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeSkill(skill.idx);
                                    }}
                                  >
                                    <FaTimes size={12} />
                                  </Button>
                                </Badge>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {prov.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </FormGroup>
        </div>
      </DragDropContext>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          {editingIndex !== null ? t.editSkill : t.newSkill}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>{t.name}</Label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <Label>{t.level}</Label>
            <Input
              type="select"
              value={form.level}
              onChange={(e) =>
                setForm({ ...form, level: e.target.value as Skill["level"] })
              }
            >
              {levelOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>{t.description}</Label>
            <Input
              type="textarea"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={3}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(false)}>
            {t.cancel}
          </Button>
          <Button
            color="primary"
            onClick={handleSubmit}
            disabled={!form.name.trim()}
          >
            {t.add}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SkillsInput;
