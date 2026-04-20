import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  { fr: { q: "Comment effectuer une réservation ?", a: "Vous pouvez réserver directement via notre formulaire de contact, par WhatsApp au +229 01-95-86-20-80 ou par téléphone au +229 01-97-69-37-39." }, en: { q: "How do I make a reservation?", a: "You can book directly via our contact form, on WhatsApp at +229 01-95-86-20-80 or by phone at +229 01-97-69-37-39." } },
  { fr: { q: "Le petit-déjeuner est-il inclus ?", a: "Le petit-déjeuner est optionnel et disponible à 2 000 FCFA par personne et par jour, sur demande à l'arrivée." }, en: { q: "Is breakfast included?", a: "Breakfast is optional and available at 2,000 FCFA per person per day, upon request at check-in." } },
  { fr: { q: "Y a-t-il un parking disponible ?", a: "Oui, un espace de stationnement sécurisé est disponible pour tous nos clients." }, en: { q: "Is parking available?", a: "Yes, a secure parking space is available for all our guests." } },
  { fr: { q: "Quels modes de paiement acceptez-vous ?", a: "Nous acceptons le paiement en espèces (FCFA) ainsi que les transferts mobiles (MTN Money, Moov Money)." }, en: { q: "What payment methods do you accept?", a: "We accept cash (FCFA) as well as mobile transfers (MTN Money, Moov Money)." } },
  { fr: { q: "La résidence est-elle sécurisée ?", a: "Absolument. La TAHA RESIDENCE dispose d'une surveillance et d'un accueil 24h/24 pour garantir votre sécurité et votre tranquillité." }, en: { q: "Is the residence secure?", a: "Absolutely. TAHA RESIDENCE has 24/7 surveillance and reception to guarantee your safety and peace of mind." } },
  { fr: { q: "Proposez-vous des tarifs longue durée ?", a: "Oui, nous accordons une réduction de 10 % pour tout séjour à partir de 7 nuits consécutives. Contactez-nous pour en bénéficier." }, en: { q: "Do you offer long-stay rates?", a: "Yes, we offer a 10% discount for any stay of 7 or more consecutive nights. Contact us to take advantage of this offer." } },
  { fr: { q: "Où se trouve exactement TAHA RESIDENCE ?", a: "Nous sommes situés à Calavi Bidossessi, au Bénin, à quelques minutes du centre de Cotonou. Consultez notre carte pour l'itinéraire exact." }, en: { q: "Where exactly is TAHA RESIDENCE located?", a: "We are located in Calavi Bidossessi, Benin, a few minutes from downtown Cotonou. Check our map for exact directions." } },
  { fr: { q: "Le WiFi est-il disponible ?", a: "Oui, une connexion WiFi est accessible dans l'ensemble de la résidence pour tous nos clients." }, en: { q: "Is WiFi available?", a: "Yes, a WiFi connection is available throughout the residence for all our guests." } },
  { fr: { q: "Puis-je recevoir des visiteurs dans ma chambre ?", a: "Les visites sont autorisées dans le respect du règlement intérieur de la résidence. Renseignez-vous auprès de la réception à votre arrivée." }, en: { q: "Can I receive visitors in my room?", a: "Visits are permitted in compliance with the house rules. Please inquire at reception upon your arrival." } },
  { fr: { q: "Quelle est la politique d'annulation ?", a: "En cas d'annulation, veuillez nous prévenir au moins 24 heures à l'avance. Contactez-nous directement pour tout arrangement particulier." }, en: { q: "What is the cancellation policy?", a: "In case of cancellation, please notify us at least 24 hours in advance. Contact us directly for any special arrangement." } },
];

const FAQSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t("Questions fréquentes", "Frequently Asked Questions")}</h2>
          <p className="section-subtitle mb-12">&nbsp;</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 items-start">
          <div className="space-y-3">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, i) => {
                const data = lang === "fr" ? item.fr : item.en;
                return (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border rounded-lg px-5 data-[state=open]:border-l-4 data-[state=open]:border-l-primary"
                  >
                    <AccordionTrigger className="text-left font-bold text-sm hover:no-underline text-foreground btn-ripple">
                      {data.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {data.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="space-y-3">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.slice(Math.ceil(faqData.length / 2)).map((item, i) => {
                const index = i + Math.ceil(faqData.length / 2);
                const data = lang === "fr" ? item.fr : item.en;
                return (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-border rounded-lg px-5 data-[state=open]:border-l-4 data-[state=open]:border-l-primary"
                  >
                    <AccordionTrigger className="text-left font-bold text-sm hover:no-underline text-foreground btn-ripple">
                      {data.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {data.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
