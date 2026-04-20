import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = {
  fr: ["Accueil", "Vidéo", "Chambres", "Équipements", "Galerie", "Témoignages", "FAQ", "Contact"],
  en: ["Home", "Video", "Rooms", "Amenities", "Gallery", "Reviews", "FAQ", "Contact"],
};

const sectionIds = ["hero", "video", "rooms", "amenities", "gallery", "testimonials", "faq", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const items = lang === "fr" ? navItems.fr : navItems.en;

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-background-alt/95 backdrop-blur-md shadow-md"
          : "top-2 bg-transparent"
      }`}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="section-container flex items-center justify-between h-16 px-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-heading font-bold text-primary truncate"
          style={{
            textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.5)",
            fontSize: "clamp(14px, 2vw, 18px)",
            maxWidth: "60%",
          }}
        >
          TAHA RESIDENCE
        </button>

        <div className="hidden md:flex items-center gap-6">
          {items.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-muted transition-colors btn-ripple"
            style={{ minWidth: 44, minHeight: 44 }}
            aria-label="Toggle theme"
          >
            {isDark ? <i className="fas fa-sun text-sm"></i> : <i className="fas fa-moon text-sm"></i>}
          </button>

          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-bold border border-border rounded-full px-3 hover:bg-muted transition-colors btn-ripple"
            style={{ minHeight: 36 }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <a
            href="https://wa.me/2290195862080"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-xs btn-ripple"
            style={{ padding: "0.4rem 1rem", minHeight: 36 }}
          >
            {t("Réserver", "Book Now")}
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2"
            style={{ minWidth: 44, minHeight: 44 }}
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-4 px-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 p-2"
            style={{ minWidth: 44, minHeight: 44 }}
            aria-label="Close menu"
          >
            <i className="fas fa-xmark text-2xl"></i>
          </button>
          {items.map((item, i) => (
            <button
              key={item}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors w-full text-center btn-ripple"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                minHeight: 56,
              }}
            >
              {item}
            </button>
          ))}
          <a
            href="https://wa.me/2290195862080"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full sm:w-auto"
            onClick={() => setMobileOpen(false)}
          >
            {t("Réserver maintenant", "Book Now")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
