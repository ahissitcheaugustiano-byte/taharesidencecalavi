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
          className="bg-card rounded-2xl p-6 sm:p-10 max-w-[90%] sm:max-w-md w-full text-center shadow-2xl relative border border-white/10 group"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          style={{ maxHeight: "calc(100vh - 40px)", overflowY: "auto" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors z-10" 
            onClick={() => setShow(false)}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-gift text-2xl text-primary animate-bounce"></i>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-extrabold mb-3 text-foreground">
            {t("Avant de partir...", "Before you leave...")}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {t(
              "Ne manquez pas nos meilleures d'offres. Laissez-nous votre email et bénéficiez d'une réduction exclusive sur votre prochain séjour.",
              "Don't miss our best offers. Leave us your email and enjoy an exclusive discount on your next stay."
            )}
          </p>
          
          <div className="flex flex-col gap-3">
            <div className="relative">
              <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={() => {
                if (email) {
                  window.location.href = `mailto:taharesidance@gmail.com?subject=Offre exclusive&body=Email: ${email}`;
                  setShow(false);
                }
              }}
              className="btn-primary w-full py-4 text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
            >
              {t("Je veux mon offre", "Claim My Offer")}
            </button>
          </div>
          <button 
            onClick={() => setShow(false)} 
            className="text-xs font-semibold text-muted-foreground mt-6 hover:text-foreground transition-colors uppercase tracking-widest hover:underline"
          >
            {t("Peut-être plus tard", "Maybe later")}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
