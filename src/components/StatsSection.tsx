import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", fr: "Clients satisfaits", en: "Happy Guests" },
  { value: 6, suffix: "", fr: "Types de chambres", en: "Room Types" },
  { value: 0, display: "24/7", fr: "Disponibilité", en: "Availability" },
  { value: 100, suffix: "%", fr: "Clients recommandent", en: "Guests Recommend" },
];

const badges = {
  fr: ["Ouvert 24h/24", "Réponse rapide", "Meilleur prix garanti"],
  en: ["Open 24/7", "Fast Response", "Best Price Guaranteed"],
};

const Counter = ({ value, suffix, display }: { value: number; suffix: string; display?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (display) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, display]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
      {display || `${count}${suffix}`}
    </div>
  );
};

const StatsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 bg-primary">
      <div className="section-container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} display={stat.display} />
              <p className="mt-2 text-sm font-medium text-primary-foreground/80" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                {lang === "fr" ? stat.fr : stat.en}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {(lang === "fr" ? badges.fr : badges.en).map((badge) => (
            <span
              key={badge}
              className="bg-primary-foreground text-primary px-5 py-2 rounded-full text-sm font-semibold"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
