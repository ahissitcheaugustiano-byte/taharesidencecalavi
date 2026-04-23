import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2-updated.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4-updated-v2.jpg";
import room5 from "@/assets/room-5-updated.jpg";
import room6 from "@/assets/room-6-updated-v2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const rooms = [
  {
    img: room2, badge: { fr: "Populaire", en: "Popular" }, badgeStyle: "bg-primary text-primary-foreground",
    fr: { name: "Chambre Simple (1 Place)", features: "Lit 1 place — Salle de bain privée — Ventilateur / Climatisation", price: "Ventilé 8 000 / Climatisé 13 000 FCFA" },
    en: { name: "Single Room (1 Person)", features: "Single bed — Private bathroom — Fan / Air conditioning", price: "Fan 8,000 / AC 13,000 FCFA" },
  },
  {
    img: room4,
    fr: { name: "Chambre Double (2 Places)", features: "Lit 2 places — Salle de bain privée — Ventilateur / Climatisation", price: "Ventilé 13 000 / Climatisé 18 000 FCFA" },
    en: { name: "Double Room (2 Persons)", features: "Double bed — Private bathroom — Fan / Air conditioning", price: "Fan 13,000 / AC 18,000 FCFA" },
  },
  {
    img: room6, badge: { fr: "Confort", en: "Comfort" }, badgeStyle: "bg-foreground text-background",
    fr: { name: "Suite Familiale (3 Places + Salon)", features: "Lit 3 places — Salon — Salle de bain privée — Ventilateur / Climatisation", price: "Ventilé 15 000 / Climatisé 20 000 FCFA" },
    en: { name: "Family Suite (3 Persons + Lounge)", features: "Triple bed — Lounge — Private bathroom — Fan / Air conditioning", price: "Fan 15,000 / AC 20,000 FCFA" },
  },
  {
    img: gallery4,
    fr: { name: "Chambre Double Confort (Climatisée)", features: "Lit 2 places — Salle de bain privée — Climatisation", price: "20 000 FCFA / nuit" },
    en: { name: "Comfort Double Room (AC)", features: "Double bed — Private bathroom — Air conditioning", price: "20,000 FCFA / night" },
  },
  {
    img: gallery5, badge: { fr: "Luxe", en: "Luxury" }, badgeStyle: "bg-foreground text-background",
    fr: { name: "Chambre Triple Luxe (Climatisée)", features: "Lit 3 places — Salle de bain privée — Climatisation", price: "25 000 FCFA / nuit" },
    en: { name: "Luxury Triple Room (AC)", features: "Triple bed — Private bathroom — Air conditioning", price: "25,000 FCFA / night" },
  },
];

const RoomsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="rooms" className="section-padding bg-background">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Nos Chambres", "Our Rooms")}</h2>
          <p className="section-subtitle mb-12">
            {t(
              "Des espaces pensés pour votre confort, à des tarifs accessibles.",
              "Spaces designed for your comfort, at accessible rates."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => {
            const data = lang === "fr" ? room.fr : room.en;
            return (
              <motion.div
                key={i}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm 
                           hover:shadow-lg hover:border-primary/50 hover:scale-[1.03] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                  <img
                    src={room.img}
                    alt={data.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                  />
                  {room.badge && (
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${room.badgeStyle}`}>
                      {lang === "fr" ? room.badge.fr : room.badge.en}
                    </span>
                  )}
                </div>
                <div className="p-5 text-left">
                  <h3
                    className="font-heading font-semibold text-primary mb-2 break-words"
                    style={{ fontSize: "clamp(16px, 2.5vw, 22px)", lineHeight: 1.3 }}
                  >
                    {data.name}
                  </h3>
                  <p
                    className="text-muted-foreground mb-3 break-words"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      lineHeight: 1.5,
                    }}
                  >
                    {data.features}
                  </p>
                  <p
                    className="font-bold text-primary mb-4"
                    style={{ fontSize: "clamp(16px, 2.5vw, 22px)" }}
                  >
                    {data.price}
                  </p>
                  <a
                    href="https://wa.me/2290195862080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green w-full justify-center text-sm btn-ripple"
                  >
                    {t("Réserver", "Book")}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 bg-primary text-primary-foreground py-4 px-6 rounded-xl text-center font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t(
            "Petit-déjeuner optionnel disponible — 2 000 FCFA / personne / jour",
            "Optional breakfast available — 2,000 FCFA / person / day"
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
