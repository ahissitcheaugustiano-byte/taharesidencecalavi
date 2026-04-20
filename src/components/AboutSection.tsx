import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const cards = [
  {
    icon: "fas fa-location-dot",
    fr: { title: "Localisation idéale", desc: "À deux pas du centre de Cotonou, tout est accessible." },
    en: { title: "Prime Location", desc: "Steps from Cotonou, everything is within reach." },
  },
  {
    icon: "fas fa-shield-halved",
    fr: { title: "Sécurité totale", desc: "Surveillance et accueil 24h/24 pour votre tranquillité." },
    en: { title: "Total Security", desc: "24/7 surveillance and reception for your peace of mind." },
  },
  {
    icon: "fas fa-heart",
    fr: { title: "Accueil chaleureux", desc: "Une équipe disponible et attentionnée à chaque instant." },
    en: { title: "Warm Welcome", desc: "A caring and attentive team at every moment." },
  },
];

const AboutSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section-padding bg-background-alt">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left">
              {t("Bienvenue à TAHA RESIDENCE", "Welcome to TAHA RESIDENCE")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
              {t(
                "Refuge au cœur de Calavi Bidossessi, à quelques minutes de Cotonou, TAHA RESIDENCE vous offre un cadre d'exception : propre, sécurisé et un accueil chaleureux. Chaque chambre a été pensée pour vous garantir confort et tranquillité, que vous soyez en déplacement professionnel ou à la découverte du Bénin.",
                "A refuge in the heart of Calavi Bidossessi, just minutes from Cotonou, TAHA RESIDENCE offers you an exceptional setting: clean, secure, with a warm welcome. Every room has been designed to guarantee your comfort and peace of mind, whether you are traveling for business or exploring Benin."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl shadow-lg img-skeleton"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src={aboutImg}
              alt={t("Chambre TAHA RESIDENCE", "TAHA RESIDENCE Room")}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => {
            const data = lang === "fr" ? card.fr : card.en;
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${card.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{data.title}</h3>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>{data.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
