import { useLanguageStore } from "@/stores/language";
import { Lang } from "@/utils/language";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const languageOptions: {
  code: Lang;
  name: string;
  flag: string;
}[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore();

  const handleLanguageChange = (langCode: Lang) => {
    setLanguage(langCode);
  };

  return (
    <UncontrolledDropdown nav inNavbar className="me-2">
      <DropdownToggle
        nav
        caret
        className="d-flex align-items-center language-toggle"
      >
        <span className="flag-icon me-1">
          {languageOptions.find((lang) => lang.code === language)?.flag || "🌐"}
        </span>
        <span className="d-none d-lg-inline">
          {languageOptions.find((lang) => lang.code === language)?.name}
        </span>
      </DropdownToggle>
      <DropdownMenu end className="shadow-sm border-0">
        {languageOptions.map((lang) => (
          <DropdownItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            active={language === lang.code}
            className="d-flex align-items-center"
          >
            <span className="flag-icon me-2">{lang.flag}</span>
            {lang.name}
            {language === lang.code && (
              <i className="bi bi-check2 ms-auto text-primary"></i>
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
