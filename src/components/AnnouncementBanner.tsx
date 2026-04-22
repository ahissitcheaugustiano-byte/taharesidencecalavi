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
    <div className="bg-primary text-primary-foreground py-2 px-4 shadow-sm relative overflow-hidden z-40">
      <div className="section-container">
        <div className="marquee-container flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-flex gap-8 sm:gap-16 items-center py-1">
            <span className="font-bold flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider">
              <i className="fas fa-star text-[8px] opacity-70"></i>
              {text}
            </span>
            <span className="font-bold flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider">
              <i className="fas fa-star text-[8px] opacity-70"></i>
              {text}
            </span>
            {/* Third copy for seamless loop on wider screens */}
            <span className="hidden md:flex font-bold items-center gap-2 text-xs uppercase tracking-wider">
              <i className="fas fa-star text-[8px] opacity-70"></i>
              {text}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-50 transition-opacity"
        aria-label="Fermer"
      >
        <X size={14} className="sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
