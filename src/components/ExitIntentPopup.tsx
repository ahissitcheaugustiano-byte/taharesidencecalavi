import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    if (sessionStorage.getItem("taha-exit-shown")) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
        sessionStorage.setItem("taha-exit-shown", "1");
        document.removeEventListener("mouseout", handler);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShow(false)}
      >
        <motion.div
          className="bg-card rounded-xl p-8 max-w-md w-full text-center shadow-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" onClick={() => setShow(false)}>
            <X size={20} />
          </button>
          <h3 className="font-heading text-2xl font-bold mb-3">
            {t("Avant de partir...", "Before you leave...")}
          </h3>
          <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            {t(
              "Ne manquez pas nos meilleures offres. Laissez-nous votre email et bénéficiez d'une réduction exclusive sur votre prochain séjour.",
              "Don't miss our best offers. Leave us your email and enjoy an exclusive discount on your next stay."
            )}
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => {
                if (email) {
                  window.location.href = `mailto:taharesidance@gmail.com?subject=Offre exclusive&body=Email: ${email}`;
                  setShow(false);
                }
              }}
              className="btn-primary text-sm py-2 px-4"
            >
              {t("Je veux mon offre", "I want my offer")}
            </button>
          </div>
          <button onClick={() => setShow(false)} className="text-xs text-muted-foreground mt-4 hover:underline block mx-auto">
            {t("Non merci", "No thanks")}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
