import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background-alt">
      <div className="section-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Où nous trouver", "Find Us")}</h2>
          <p className="section-subtitle mb-12">&nbsp;</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          <motion.div
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[350px] sm:h-[450px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2415174092523!2d2.342237075738499!3d6.429337493561578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a97ebb99ee99%3A0x18043a60ba4cef50!2sTAHA%20RESIDENCE!5e0!3m2!1sfr!2sbj!4v1714000000000!5m2!1sfr!2sbj"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation TAHA RESIDENCE"
            />
          </motion.div>
          
          <motion.div
            className="lg:col-span-2 bg-foreground text-background rounded-2xl p-8 shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <i className="fas fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">TAHA RESIDENCE</h3>
                  <p className="text-sm opacity-70">Calavi Bidossessi, Bénin</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <a href="tel:+2290197693739" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <span className="text-sm font-medium border-b border-white/10 group-hover:border-primary transition-colors pb-1">+229 01-97-69-37-39</span>
                </a>
                
                <a href="https://wa.me/2290195862080" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <i className="fab fa-whatsapp text-[#25D366]"></i>
                  </div>
                  <span className="text-sm font-medium border-b border-white/10 group-hover:border-[#25D366] transition-colors pb-1">+229 01-95-86-20-80</span>
                </a>
                
                <a href="mailto:taharesidance@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                    <i className="fas fa-envelope text-blue-400"></i>
                  </div>
                  <span className="text-sm font-medium border-b border-white/10 group-hover:border-blue-400 transition-colors pb-1">taharesidance@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs opacity-60 mb-4 italic leading-relaxed">
                {t(
                  "Situé dans un quartier calme et sécurisé, idéal pour vos séjours professionnels ou en famille.",
                  "Located in a quiet and secure area, ideal for your professional or family stays."
                )}
              </p>
              <a
                href="https://kloo.me/y7jxicxyup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center btn-ripple"
              >
                <i className="fas fa-route mr-2"></i>
                {t("Obtenir l'itinéraire", "Get Directions")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
