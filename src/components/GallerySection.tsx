import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

import heroBg from "@/assets/hero-bg.jpg";
import about from "@/assets/about.jpg";
import room1 from "@/assets/311bc269-a513-4a62-a965-90bc97e6d590.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4-updated-v2.jpg";
import room5 from "@/assets/room-5-updated.jpg";
import room6 from "@/assets/room-6-updated-v2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import room2Alt from "@/assets/room-2-updated.jpg";

const masonryImages = [
  heroBg, room4, gallery1,
  room6, gallery2, room1,
  gallery3, room2, about,
  gallery4, room3, room2Alt,
  heroBg, room5, heroBg // Total 15 images = 5 rows of 3
];
const carouselImages = [room1, gallery1, room2, gallery2, room3, gallery3, room4, gallery4];

const GallerySection = () => {
  const { t } = useLanguage();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Notre Galerie", "Our Gallery")}</h2>
          <p className="section-subtitle mb-12">
            {t("Des espaces authentiques qui parlent d'eux-mêmes.", "Authentic spaces that speak for themselves.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {masonryImages.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg img-skeleton relative"
              style={{ aspectRatio: "4 / 3" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={img}
                alt={`Galerie ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="animate-scroll-left flex gap-4" style={{ width: "max-content", willChange: "transform" }}>
            {[...carouselImages, ...carouselImages].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Carousel ${i + 1}`}
                className="h-32 sm:h-40 md:h-56 w-auto rounded-lg object-cover flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button className="absolute top-4 right-4 p-2 btn-ripple" style={{ color: "#ffffff" }} onClick={() => setLightboxIdx(null)}>
              <i className="fas fa-xmark text-2xl"></i>
            </button>
            <button
              className="absolute left-4 p-2 btn-ripple"
              style={{ color: "#ffffff" }}
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + masonryImages.length) % masonryImages.length); }}
            >
              <i className="fas fa-chevron-left text-3xl"></i>
            </button>
            <img
              src={masonryImages[lightboxIdx]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 p-2 btn-ripple"
              style={{ color: "#ffffff" }}
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % masonryImages.length); }}
            >
              <i className="fas fa-chevron-right text-3xl"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
