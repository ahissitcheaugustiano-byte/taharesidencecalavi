import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingElements = () => {
  const [showScroll, setShowScroll] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2290195862080"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-wa-pulse overflow-hidden bg-[#25D366] text-white btn-ripple"
        style={{ bottom: "calc(1.5rem + var(--safe-bottom))", right: "1.25rem" }}
        title={t("Réservez sur WhatsApp", "Book on WhatsApp")}
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-40 w-11 h-11 bg-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform btn-ripple text-primary"
          style={{ bottom: "calc(5.5rem + var(--safe-bottom))", right: "1.25rem" }}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
};

export default FloatingElements;
