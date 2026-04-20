import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed img-skeleton"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,7,5,0.55)" }} />

      <motion.div
        className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-heading font-bold tracking-wider"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            fontSize: "clamp(28px, 6vw, 72px)",
            lineHeight: 1.2,
          }}
        >
          TAHA RESIDENCE
        </h1>
        <p
          className="font-heading italic mt-4 text-primary font-bold"
          style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
        >
          {t(
            "Votre confort, notre passion",
            "Your comfort, our passion"
          )}
        </p>
        <p
          className="mt-4"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.5,
          }}
        >
          {t(
            "Un cadre chaleureux, propre et sécurisé pour votre séjour à Calavi Bidossessi.",
            "A warm, clean and secure setting for your stay in Calavi Bidossessi."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 w-full">
          <a
            href="https://wa.me/2290195862080"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base animate-btn-pulse w-full sm:w-auto btn-ripple"
          >
            {t("Réserver maintenant", "Book Now")}
          </a>
          <button
            onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}
            className="font-semibold rounded-full border-2 transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 animate-btn-pulse inline-flex items-center justify-center gap-2 w-full sm:w-auto btn-ripple"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              minHeight: "44px",
            }}
          >
            {t("Découvrir nos chambres", "Discover our rooms")}
          </button>
        </div>
      </motion.div>

      <button
        onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "#ffffff" }}
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </button>
    </section>
  );
};

export default HeroSection;
