import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

const VIDEO_ID = "zSkoqBjhyqc";

const VideoSection = () => {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="section-padding bg-background">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t("Découvrez TAHA RESIDENCE", "Discover TAHA RESIDENCE")}
          </h2>
          <p className="section-subtitle mb-10">
            {t(
              "Plongez dans l'atmosphère unique de notre maison d'hôte.",
              "Immerse yourself in the unique atmosphere of our guesthouse."
            )}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto rounded-xl overflow-hidden border-4 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
          style={{ maxWidth: 1050, width: "100%" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="relative w-full bg-black img-skeleton"
            style={{ aspectRatio: "16 / 9" }}
          >
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="TAHA RESIDENCE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full cursor-pointer btn-ripple"
                aria-label={t("Lire la vidéo", "Play video")}
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="TAHA RESIDENCE"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
                >
                  {/* Native-style YouTube Play Button */}
                  <div className="relative w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] rounded-[12px] flex items-center justify-center group-hover:bg-[#FF0000]/90 transition-all shadow-xl">
                    <div 
                      className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white sm:border-t-[10px] sm:border-b-[10px] sm:border-l-[18px]"
                    ></div>
                  </div>
                  
                  {/* Title Overlay (Mimic native player) */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-left">
                    <p className="text-white text-sm sm:text-base font-semibold truncate drop-shadow-md">
                      {t("TAHA RESIDENCE - Visite Guidée", "TAHA RESIDENCE - Guided Tour")}
                    </p>
                  </div>
                  
                  {/* "Watch on YouTube" mimic bar (Optional, but looks good) */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded text-[10px] sm:text-xs text-white">
                    <span>{t("Regarder sur", "Watch on")}</span>
                    <i className="fab fa-youtube text-sm text-[#FF0000]"></i>
                    <span className="font-bold">YouTube</span>
                  </div>
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
