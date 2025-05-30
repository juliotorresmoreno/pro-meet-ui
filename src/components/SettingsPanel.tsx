// components/SettingsPanel.tsx
import { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    timezone: "America/New_York",
    notificationEmail: true,
    notificationSMS: false,
    theme: "light",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Settings updated:", formData);
  };

  return (
    <Card className="shadow-sm border-0">
      <CardBody>
        <Nav tabs className="mb-4">
          <NavItem>
            <NavLink
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            >
              Notifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === "preferences"}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="profile">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label for="timezone">Timezone</Label>
                <Input
                  type="select"
                  name="timezone"
                  id="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                </Input>
              </FormGroup>
              <Button color="primary" type="submit">
                Save Profile
              </Button>
            </Form>
          </TabPane>

          <TabPane tabId="notifications">
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
                  Email Notifications
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
                  SMS Notifications
                </Label>
              </FormGroup>
              <Button color="primary" type="submit" className="mt-3">
                Save Notification Settings
              </Button>
            </Form>
          </TabPane>

          <TabPane tabId="preferences">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="theme">Theme</Label>
                <Input
                  type="select"
                  name="theme"
                  id="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </Input>
              </FormGroup>
              <Button color="primary" type="submit">
                Save Preferences
              </Button>
            </Form>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}
