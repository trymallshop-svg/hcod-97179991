import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { i18n, t } = useTranslation();
  const toggle = () => {
    const next = i18n.language.startsWith("ar") ? "en" : "ar";
    i18n.changeLanguage(next);
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors ${className}`}
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">{t("nav.lang")}</span>
    </button>
  );
};

export default LanguageToggle;
