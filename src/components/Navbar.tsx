import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  const items = lang === "fr" ? navItems.fr : navItems.en;

  return (
    <>
      <nav
        className={`sticky top-0 z-[1000] pointer-events-auto transition-all duration-500 w-full ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
        style={{ paddingTop: "var(--safe-top)" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollTo("hero")}
            className="font-heading font-extrabold text-primary flex items-center gap-2 group transition-transform active:scale-95"
          >
            <span 
              className="text-lg sm:text-xl md:text-2xl tracking-tighter font-extrabold text-primary"
              style={{
                textShadow: scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              TAHA <span className="italic">RESIDENCE</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {items.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(sectionIds[i])}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-all relative overflow-hidden group py-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors btn-ripple"
              style={{ width: 44, height: 44 }}
              aria-label="Toggle theme"
            >
              {isDark ? <i className="fas fa-sun text-sm md:text-base"></i> : <i className="fas fa-moon text-sm md:text-base"></i>}
            </button>

            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="w-10 h-10 flex items-center justify-center text-[10px] md:text-xs font-bold border border-primary/20 rounded-full hover:bg-primary/10 transition-colors btn-ripple"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <a
              href="https://wa.me/2290195862080"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary text-xs md:text-sm font-bold shadow-soft hover:shadow-primary/20"
              style={{ padding: "0.5rem 1.25rem", minHeight: 40 }}
            >
              <i className="fab fa-whatsapp mr-2 text-base"></i>
              {t("Réserver", "Book Now")}
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-foreground ml-1"
              style={{ width: 44, height: 44 }}
              aria-label="Open menu"
            >
              <i className="fas fa-bars-staggered text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col p-6 lg:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-heading font-extrabold text-primary text-xl">TAHA RESIDENCE</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 w-11 h-11 flex items-center justify-center rounded-full bg-muted/50 transition-colors active:scale-90"
                aria-label="Close menu"
              >
                <i className="fas fa-xmark text-2xl"></i>
              </button>
            </div>
            
            <div className="flex flex-col gap-6 overflow-y-auto pb-8">
              {items.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(sectionIds[i])}
                  className="text-2xl font-bold text-foreground text-left flex items-center justify-between group py-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item}
                  <i className="fas fa-chevron-right text-sm text-primary opacity-0 group-hover:opacity-100 transition-all"></i>
                </motion.button>
              ))}
              
              <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
                <a
                  href="https://wa.me/2290195862080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  {t("Réserver maintenant", "Book Now")}
                </a>
                
                <div className="flex items-center justify-center gap-6 text-2xl text-foreground/50 mt-4">
                  <i className="fab fa-facebook hover:text-primary transition-colors cursor-pointer"></i>
                  <i className="fab fa-instagram hover:text-primary transition-colors cursor-pointer"></i>
                  <i className="fab fa-tiktok hover:text-primary transition-colors cursor-pointer"></i>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
