import { useLanguageStore } from "@/stores/language";
import { getLanguage } from "@/utils/language";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const translations = {
  en: {
    notifications: {
      title: "Notification Settings",
      email: "Email Notifications",
      sms: "SMS Notifications",
      save: "Save Notifications",
    },
  },
  es: {
    notifications: {
      title: "Configuración de Notificaciones",
      email: "Notificaciones por Email",
      sms: "Notificaciones por SMS",
      save: "Guardar Notificaciones",
    },
  },
  fr: {
    notifications: {
      title: "Paramètres de notification",
      email: "Notifications par e-mail",
      sms: "Notifications SMS",
      save: "Enregistrer les notifications",
    },
  },
  ja: {
    notifications: {
      title: "通知設定",
      email: "メール通知",
      sms: "SMS通知",
      save: "通知を保存",
    },
  },
  zh: {
    notifications: {
      title: "通知设置",
      email: "电子邮件通知",
      sms: "短信通知",
      save: "保存通知",
    },
  },
};

export default function Notifications() {
  const language = useLanguageStore((state) => state.language) || getLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    notificationEmail: true,
    notificationSMS: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Settings updated:", formData);
    // Here you would typically call an API to save the settings
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup check>
        <Input
          type="checkbox"
          name="notificationEmail"
          id="notificationEmail"
          checked={formData.notificationEmail}
          onChange={handleInputChange}
        />
        <Label for="notificationEmail" check>
          {t.notifications.email}
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          name="notificationSMS"
          id="notificationSMS"
          checked={formData.notificationSMS}
          onChange={handleInputChange}
        />
        <Label for="notificationSMS" check>
          {t.notifications.sms}
        </Label>
      </FormGroup>
      <Button color="primary" type="submit" className="mt-3">
        {t.notifications.save}
      </Button>
    </Form>
  );
}
