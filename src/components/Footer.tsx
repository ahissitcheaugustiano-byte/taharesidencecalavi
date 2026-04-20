import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.avif";

const Footer = () => {
  const { lang, t } = useLanguage();
  const [email, setEmail] = useState("");

  const navLinks = {
    fr: ["Accueil", "Chambres", "Équipements", "Galerie", "Témoignages", "FAQ", "Contact"],
    en: ["Home", "Rooms", "Amenities", "Gallery", "Reviews", "FAQ", "Contact"],
  };
  const navIds = ["hero", "rooms", "amenities", "gallery", "testimonials", "faq", "contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-4" style={{ paddingBottom: "calc(2rem + var(--safe-bottom))" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left items-start">
          <div>
            <h3 className="font-heading font-bold text-primary mb-2" style={{ fontSize: "clamp(22px, 4vw, 42px)" }}>TAHA RESIDENCE</h3>
            <p className="opacity-70 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
              {t("Votre maison loin de chez vous, au cœur du Bénin.", "Your home away from home, in the heart of Benin.")}
            </p>
            <div className="flex gap-2 justify-center sm:justify-start flex-wrap">
              {[
                { name: "Facebook", icon: "fab fa-facebook-f" },
                { name: "Instagram", icon: "fab fa-instagram" },
                { name: "TikTok", icon: "fab fa-tiktok" },
                { name: "YouTube", icon: "fab fa-youtube" }
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="text-lg opacity-60 hover:text-primary hover:opacity-100 transition-all inline-flex items-center justify-center btn-ripple"
                  style={{ minWidth: 44, minHeight: 44, padding: "0 8px" }}
                  aria-label={s.name}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
              <a
                href="https://wa.me/2290195862080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-60 hover:text-primary hover:opacity-100 transition-all inline-flex items-center justify-center btn-ripple"
                style={{ minWidth: 44, minHeight: 44, padding: "0 8px" }}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{t("Navigation", "Navigation")}</h4>
            <div className="space-y-2">
              {(lang === "fr" ? navLinks.fr : navLinks.en).map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(navIds[i])}
                  className="block text-sm opacity-70 hover:text-primary hover:opacity-100 transition-all"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(16px, 2.5vw, 22px)" }}>{t("Nous contacter", "Contact Us")}</h4>
            <div className="space-y-4 opacity-70" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
              <p className="flex items-center gap-2"><i className="fas fa-phone text-primary"></i> +229 01-97-69-37-39</p>
              <p className="flex items-center gap-2"><i className="fas fa-phone text-primary"></i> +229 01-44-42-99-63</p>
              <p className="flex items-center gap-2"><i className="fab fa-whatsapp text-primary"></i> +229 01-95-86-20-80</p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-primary"></i> taharesidance@gmail.com</p>
              <p className="flex items-center gap-2"><i className="fas fa-location-dot text-primary"></i> Calavi Bidossessi, Bénin</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>{t("Restez informé", "Stay Informed")}</h4>
            <p className="text-sm opacity-70 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              {t(
                "Recevez nos offres exclusives directement dans votre boîte mail.",
                "Receive our exclusive offers directly in your inbox."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full sm:flex-1 bg-background/10 border border-background/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                style={{ fontSize: 16, minHeight: 44 }}
              />
              <button
                onClick={() => {
                  if (email) window.location.href = `mailto:taharesidance@gmail.com?subject=Newsletter&body=Email: ${email}`;
                }}
                className="btn-primary text-xs animate-btn-pulse w-full sm:w-auto"
                style={{ padding: "0.5rem 1rem" }}
              >
                {t("S'abonner", "Subscribe")}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
          {t(
            "2025 TAHA RESIDENCE — Tous droits réservés | Calavi Bidossessi, Bénin",
            "2025 TAHA RESIDENCE — All rights reserved | Calavi Bidossessi, Benin"
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
