import { useLanguageStore } from "@/stores/language";
import { getLanguage, Lang } from "@/utils/language";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const translations = {
  en: {
    preferences: {
      title: "Preferences",
      theme: "Theme",
      language: "Language",
      save: "Save Preferences",
      themes: {
        light: "Light",
        dark: "Dark",
        system: "System Default",
      },
    },
    languages: {
      en: "English",
      es: "Spanish",
      fr: "French",
      ja: "Japanese",
      zh: "Chinese",
    },
  },
  es: {
    preferences: {
      title: "Preferencias",
      theme: "Tema",
      language: "Idioma",
      save: "Guardar Preferencias",
      themes: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      },
    },
    languages: {
      en: "Inglés",
      es: "Español",
      fr: "Francés",
      ja: "Japonés",
      zh: "Chino",
    },
  },
  fr: {
    preferences: {
      title: "Préférences",
      theme: "Thème",
      language: "Langue",
      save: "Enregistrer les préférences",
      themes: {
        light: "Clair",
        dark: "Sombre",
        system: "Système",
      },
    },
    languages: {
      en: "Anglais",
      es: "Espagnol",
      fr: "Français",
      ja: "Japonais",
      zh: "Chinois",
    },
  },
  ja: {
    preferences: {
      title: "設定",
      theme: "テーマ",
      language: "言語",
      save: "設定を保存",
      themes: {
        light: "ライト",
        dark: "ダーク",
        system: "システムデフォルト",
      },
    },
    languages: {
      en: "英語",
      es: "スペイン語",
      fr: "フランス語",
      ja: "日本語",
      zh: "中国語",
    },
  },
  zh: {
    preferences: {
      title: "偏好设置",
      theme: "主题",
      language: "语言",
      save: "保存偏好",
      themes: {
        light: "浅色",
        dark: "深色",
        system: "系统默认",
      },
    },
    languages: {
      en: "英语",
      es: "西班牙语",
      fr: "法语",
      ja: "日语",
      zh: "中文",
    },
  },
};

export default function Preferences() {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t = translations[language] || translations.en;
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const [formData, setFormData] = useState({
    theme: "light",
    language: language,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "language" && type !== "checkbox") {
      setLanguage(value as Lang);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Settings updated:", formData);
    // Here you would typically call an API to save the settings
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="theme">{t.preferences.theme}</Label>
            <Input
              type="select"
              name="theme"
              id="theme"
              value={formData.theme}
              onChange={handleInputChange}
            >
              <option value="light">{t.preferences.themes.light}</option>
              <option value="dark">{t.preferences.themes.dark}</option>
              <option value="system">{t.preferences.themes.system}</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="language">{t.preferences.language}</Label>
            <Input
              type="select"
              name="language"
              id="language"
              value={formData.language}
              onChange={handleInputChange}
            >
              {Object.entries(t.languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" type="submit" className="mt-3">
        {t.preferences.save}
      </Button>
    </Form>
  );
}
