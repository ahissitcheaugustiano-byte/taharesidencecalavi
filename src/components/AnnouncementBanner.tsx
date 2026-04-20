import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  if (!visible) return null;

  const text = t(
    "Réduction de 10 % à partir de 7 jours de séjour — Réservez directement et économisez !",
    "10% discount from 7 nights stay — Book directly and save!"
  );

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm relative overflow-hidden">
      <div className="animate-marquee whitespace-nowrap inline-flex gap-16" style={{ width: "max-content", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
        <span className="font-bold">{text}</span>
        <span className="font-bold">{text}</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity z-10 bg-primary"
        aria-label="Fermer"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
