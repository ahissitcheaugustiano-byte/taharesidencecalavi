import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Sophie M.", country: "FR", flag: "France", role: { fr: "Touriste", en: "Tourist" },
    fr: "La TAHA RESIDENCE m'a offert bien plus qu'une chambre : une expérience chaleureuse et authentique. La propreté, la sécurité et la gentillesse du personnel m'ont conquise dès le premier soir.",
    en: "TAHA RESIDENCE gave me much more than a room — a warm and authentic experience. The cleanliness, security and kindness of the staff won me over from the very first evening." },
  { name: "Kwame A.", country: "GH", flag: "Ghana", role: { fr: "Famille", en: "Family" },
    fr: "Avec mes enfants, nous avons séjourné dans la Suite Familiale. Tout était parfait : spacieux, confortable et d'un excellent rapport qualité-prix. Nous reviendrons sans hésiter.",
    en: "With my children, we stayed in the Family Suite. Everything was perfect: spacious, comfortable and excellent value for money. We will return without hesitation." },
  { name: "Ibrahim T.", country: "SN", flag: "Sénégal", role: { fr: "Voyage d'affaires", en: "Business" },
    fr: "Le meilleur hébergement que j'aie trouvé à Calavi. La chambre climatisée était impeccable et le service, remarquable. Je recommande vivement à tout voyageur d'affaires.",
    en: "The best accommodation I found in Calavi. The AC room was spotless and the service remarkable. Highly recommended for any business traveler." },
  { name: "Aminata D.", country: "CI", flag: "Côte d'Ivoire", role: { fr: "Touriste", en: "Tourist" },
    fr: "Une adresse que je garde précieusement. L'accueil est sincère, les chambres sont propres et l'atmosphère est vraiment reposante. Exactement ce dont j'avais besoin.",
    en: "An address I will treasure. The welcome is genuine, the rooms are clean and the atmosphere is truly restful. Exactly what I needed." },
  { name: "Jean-Pierre L.", country: "FR", flag: "France", role: { fr: "Retraité en voyage", en: "Retired traveler" },
    fr: "À deux pas de Cotonou, cette résidence est une perle cachée. Calme, propre, sécurisée. Le petit-déjeuner était un vrai moment de bonheur chaque matin.",
    en: "Steps from Cotonou, this residence is a hidden gem. Quiet, clean, secure. Breakfast was a true moment of joy every morning." },
  { name: "Fatou B.", country: "TG", flag: "Togo", role: { fr: "Touriste", en: "Tourist" },
    fr: "J'étais sceptique au début, mais la réalité a dépassé mes attentes. Personnel attentif, chambre confortable, prix très honnêtes. Je n'hésiterai plus jamais à recommander TAHA RESIDENCE.",
    en: "I was skeptical at first, but reality exceeded my expectations. Attentive staff, comfortable room, very honest pricing. I will never hesitate to recommend TAHA RESIDENCE again." },
  { name: "Marcus O.", country: "NG", flag: "Nigeria", role: { fr: "Voyage d'affaires", en: "Business" },
    fr: "Sérieux, professionnel et chaleureux à la fois. La TAHA RESIDENCE répond parfaitement aux besoins d'un voyageur exigeant. La connexion WiFi et la climatisation étaient irréprochables.",
    en: "Serious, professional and warm at the same time. TAHA RESIDENCE perfectly meets the needs of a demanding traveler. WiFi and air conditioning were flawless." },
  { name: "Claire N.", country: "BE", flag: "Belgique", role: { fr: "Humanitaire", en: "Humanitarian" },
    fr: "En mission au Bénin pendant trois semaines, j'avais besoin d'un endroit sûr et confortable. La TAHA RESIDENCE a été mon refuge quotidien. Je remercie chaleureusement toute l'équipe.",
    en: "On a mission in Benin for three weeks, I needed a safe and comfortable place. TAHA RESIDENCE was my daily refuge. I warmly thank the entire team." },
  { name: "Yusuf A.", country: "ML", flag: "Mali", role: { fr: "Étudiant", en: "Student" },
    fr: "Pour un budget serré, c'est la meilleure option à Calavi. Propre, calme et bien situé. Les propriétaires sont à l'écoute et toujours disponibles. Une vraie bonne surprise.",
    en: "For a tight budget, this is the best option in Calavi. Clean, quiet and well located. The owners are attentive and always available. A truly pleasant surprise." },
  { name: "Hélène V.", country: "CA", flag: "Canada", role: { fr: "Touriste", en: "Tourist" },
    fr: "Je voyage souvent en Afrique de l'Ouest et TAHA RESIDENCE fait partie des meilleures adresses que j'aie testées. L'atmosphère familiale et sécurisante m'a immédiatement mise à l'aise.",
    en: "I travel frequently in West Africa and TAHA RESIDENCE is among the best addresses I have tried. The family-like and reassuring atmosphere immediately put me at ease." },
];

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let paused = false;
    let touching = false;
    let resumeTimer: number | undefined;
    let animId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused && !touching && el) {
        // ~60px/sec, frame-rate independent
        el.scrollLeft += (dt / 1000) * 60;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    if (!reduceMotion) {
      animId = requestAnimationFrame(tick);
    }

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const onTouchStart = () => {
      touching = true;
      window.clearTimeout(resumeTimer);
    };
    const onTouchEnd = () => {
      resumeTimer = window.setTimeout(() => {
        touching = false;
      }, 1500);
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.clearTimeout(resumeTimer);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-padding bg-background-alt">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Ce que disent nos clients", "What Our Guests Say")}</h2>
          <p className="section-subtitle mb-12">
            {t("Des séjours inoubliables, des mots sincères.", "Unforgettable stays, sincere words.")}
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="carousel-x flex gap-4 sm:gap-6 px-4"
        style={{ willChange: "scroll-position" }}
      >
        {items.map((t_item, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-card rounded-xl p-6 border border-border shadow-sm"
            style={{
              width: "min(85vw, 380px)",
              minHeight: 220,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-lg flex-shrink-0 img-skeleton"
                style={{ width: 48, height: 48, aspectRatio: "1 / 1" }}
              >
                {t_item.name.charAt(0)}
              </div>
              <div className="text-left min-w-0">
                <p className="font-semibold text-sm truncate">{t_item.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {t_item.flag} — {lang === "fr" ? t_item.role.fr : t_item.role.en}
                </p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <i key={j} className="fas fa-star text-primary text-[14px]"></i>
              ))}
            </div>
            <p
              className="text-muted-foreground italic"
              style={{ fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.6 }}
            >
              "{lang === "fr" ? t_item.fr : t_item.en}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
