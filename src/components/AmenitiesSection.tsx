import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
const amenities = [
  { icon: "fas fa-fan", fr: { title: "Climatisation", desc: "Chambres climatisées pour un confort optimal toute l'année." }, en: { title: "Air Conditioning", desc: "AC rooms for optimal comfort year-round." } },
  { icon: "fas fa-wind", fr: { title: "Ventilation", desc: "Système de ventilation dans toutes les chambres." }, en: { title: "Fan System", desc: "Fan ventilation available in all rooms." } },
  { icon: "fas fa-bath", fr: { title: "Salle de bain privée", desc: "Chaque chambre dispose de sa propre salle de bain." }, en: { title: "Private Bathroom", desc: "Every room has its own private bathroom." } },
  { icon: "fas fa-wifi", fr: { title: "WiFi disponible", desc: "Connexion internet accessible dans l'ensemble de la résidence." }, en: { title: "WiFi Available", desc: "Internet connection available throughout the residence." } },
  { icon: "fas fa-shield-halved", fr: { title: "Sécurité 24h/24", desc: "Votre sécurité est notre priorité absolue, à toute heure." }, en: { title: "24/7 Security", desc: "Your safety is our absolute priority, at all hours." } },
  { icon: "fas fa-mug-hot", fr: { title: "Petit-déjeuner optionnel", desc: "Un petit-déjeuner savoureux disponible sur demande à 2 000 FCFA." }, en: { title: "Optional Breakfast", desc: "A delicious breakfast available on request for 2,000 FCFA." } },
  { icon: "fas fa-car", fr: { title: "Parking", desc: "Un espace de stationnement sécurisé est mis à votre disposition." }, en: { title: "Parking", desc: "A secure parking space is available for your vehicle." } },
  { icon: "fas fa-location-dot", fr: { title: "Derrière l'Université d'Abomey Calavi", desc: "Accès rapide au campus et aux principaux sites." }, en: { title: "Behind the University of Abomey-Calavi", desc: "Quick access to the campus and major attractions." } },
];

const AmenitiesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="amenities" className="section-padding bg-background-alt">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Nos Équipements & Services", "Our Amenities & Services")}</h2>
          <p className="section-subtitle mb-12">
            {t("Tout le nécessaire pour un séjour serein et confortable.", "Everything you need for a serene and comfortable stay.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => {
            const data = lang === "fr" ? item.fr : item.en;
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-card rounded-xl p-6 border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-heading font-semibold mb-1" style={{ fontSize: "clamp(16px, 2.5vw, 22px)" }}>{data.title}</h3>
                <p className="text-muted-foreground" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(14px, 1.5vw, 16px)" }}>{data.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
