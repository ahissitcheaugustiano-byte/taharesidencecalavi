import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const roomOptions = {
  fr: [
    "Chambre Simple (1 Place) — 8 000 / 13 000 FCFA",
    "Chambre Double (2 Places) — 13 000 / 18 000 FCFA",
    "Suite Familiale (3 Places + Salon) — 15 000 / 20 000 FCFA",
    "Chambre Double Confort (Climatisée) — 20 000 FCFA",
    "Chambre Triple Luxe (Climatisée) — 25 000 FCFA",
  ],
  en: [
    "Single Room (1 Person) — 8,000 / 13,000 FCFA",
    "Double Room (2 Persons) — 13,000 / 18,000 FCFA",
    "Family Suite (3 Persons + Lounge) — 15,000 / 20,000 FCFA",
    "Comfort Double Room (AC) — 20,000 FCFA",
    "Luxury Triple Room (AC) — 25,000 FCFA",
  ],
};

const ContactSection = () => {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", room: "", checkin: "", checkout: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nom: ${form.name}%0AEmail: ${form.email}%0ATél: ${form.phone}%0AChambre: ${form.room}%0AArrivée: ${form.checkin}%0ADépart: ${form.checkout}%0AMessage: ${form.message}`;
    window.location.href = `mailto:taharesidance@gmail.com?subject=Réservation TAHA RESIDENCE&body=${body}`;
  };

  const options = lang === "fr" ? roomOptions.fr : roomOptions.en;
  const inputClass = "w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Réservez votre séjour", "Book Your Stay")}</h2>
          <p className="section-subtitle mb-12">
            {t("Contactez-nous directement et obtenez une réponse rapide.", "Contact us directly and get a fast response.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 animate-on-scroll"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input
              className={inputClass}
              placeholder={t("Nom complet", "Full Name")}
              required
              autoComplete="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={inputClass}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={inputClass}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              name="phone"
              placeholder={t("Téléphone", "Phone")}
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              className={inputClass}
              value={form.room}
              onChange={(e) => setForm({ ...form, room: e.target.value })}
            >
              <option value="">{t("Type de chambre", "Room type")}</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">{t("Date d'arrivée", "Check-in date")}</label>
                <input className={inputClass} type="date" name="checkin" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">{t("Date de départ", "Check-out date")}</label>
                <input className={inputClass} type="date" name="checkout" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} />
              </div>
            </div>
            <textarea
              className={`${inputClass} min-h-[100px]`}
              placeholder={t("Message optionnel", "Optional message")}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="btn-green w-full justify-center">
              {t("Envoyer ma demande", "Send my request")}
            </button>
          </motion.form>

          <motion.div
            className="bg-foreground text-background rounded-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt={t("Chambre TAHA RESIDENCE", "TAHA RESIDENCE Room")}
              className="w-full h-48 object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="p-8 flex flex-col justify-center flex-1">
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                {t("Réservez en quelques secondes", "Book in seconds")}
              </h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                {t(
                  "Notre équipe répond rapidement sur WhatsApp. Envoyez-nous un message maintenant et obtenez votre confirmation dans les plus brefs délais.",
                  "Our team responds quickly on WhatsApp. Send us a message now and receive your confirmation as soon as possible."
                )}
              </p>
              <a
                href="https://wa.me/2290195862080"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green w-full justify-center text-base mb-6"
              >
                {t("Réserver sur WhatsApp", "Book on WhatsApp")}
              </a>

              <div className="space-y-3">
                {["+229 01-95-86-20-80"].map((num) => (
                  <a key={num} href={`tel:${num.replace(/[\s-]/g, "")}`} className="flex items-center gap-3 text-sm opacity-80 hover:text-primary hover:opacity-100 transition-all">
                    <i className="fas fa-phone text-primary"></i>
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
