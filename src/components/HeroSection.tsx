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
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] animate-pulse"
        >
          {t("Bienvenue chez vous", "Welcome Home")}
        </motion.span>

        <h1
          className="font-heading font-extrabold tracking-tight text-primary"
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            fontSize: "clamp(32px, 8vw, 84px)",
            lineHeight: 1.05,
          }}
        >
          TAHA <span className="italic">RESIDENCE</span>
        </h1>

        <div className="h-1 lg:h-1.5 w-24 bg-primary mx-auto mt-6 sm:mt-8 rounded-full shadow-[0_0_15px_rgba(210,64,53,0.5)]"></div>

        <p
          className="font-heading mt-6 sm:mt-8 text-white/90 font-medium max-w-2xl mx-auto"
          style={{ 
            fontSize: "clamp(16px, 3vw, 24px)",
            lineHeight: 1.4,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)" 
          }}
        >
          {t(
            "Votre confort, notre passion",
            "Your comfort, our passion"
          )}
        </p>

        <p
          className="mt-4 sm:mt-6 max-w-xl mx-auto opacity-80"
          style={{
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.8vw, 17px)",
            lineHeight: 1.6,
          }}
        >
          {t(
            "Un cadre chaleureux, propre et sécurisé pour votre séjour mémorable à Calavi Bidossessi.",
            "A warm, clean and secure setting for your memorable stay in Calavi Bidossessi."
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12 w-full max-w-md mx-auto sm:max-w-none">
          <a
            href="https://wa.me/2290195862080"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base py-4 sm:py-5 px-8 sm:px-10 shadow-xl shadow-primary/30 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            {t("Réserver maintenant", "Book Now")}
          </a>
          <button
            onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border-2 border-white/30 backdrop-blur-md text-white font-bold py-4 sm:py-5 px-8 sm:px-10 transition-all hover:bg-white hover:text-black hover:border-white active:scale-95 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
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
