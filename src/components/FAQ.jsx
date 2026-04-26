import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiHelpCircle, FiArrowRight } from "react-icons/fi";

export const defaultFaqs = [
  {
    q: "Combien coûte l'audit initial ?",
    a: "L'audit initial est 100% gratuit. EVOLINK est rémunéré par les fournisseurs et opérateurs partenaires uniquement si vous décidez de basculer. Vous n'avez rien à avancer, et aucun engagement.",
  },
  {
    q: "Combien de temps prend une mission ?",
    a: "Une mission complète dure 1 mois : la semaine 1 est consacrée à l'énergie, la semaine 2 au télécom, et les semaines 3–4 au digital. 3 réunions au maximum, 100% en distanciel.",
  },
  {
    q: "Comment êtes-vous rémunérés ?",
    a: "Phase 1 (audit) : nous sommes payés par les fournisseurs si vous changez. Phase 2 (abonnement mensuel optionnel) : vous nous rémunérez directement pour des prestations approfondies (rapports, audits physiques, plan d'action). Tout est transparent.",
  },
  {
    q: "Suis-je engagé après l'audit ?",
    a: "Non. Aucun engagement initial. Si vous ne souhaitez pas changer de contrat, vous gardez vos analyses et nous nous arrêtons là. Si vous voulez aller plus loin, l'abonnement mensuel est activable et résiliable à tout moment.",
  },
  {
    q: "Quelles sont les entreprises avec lesquelles vous travaillez ?",
    a: "Nous accompagnons des PME françaises de 5 à 200 salariés, tous secteurs. Nous appliquons un filtre éthique : nous ne travaillons qu'avec des entreprises dont l'activité est positive pour les personnes et l'environnement.",
  },
  {
    q: "Pourquoi 3 domaines en même temps ?",
    a: "Énergie, télécom et digital sont les trois sujets qui structurent la compétitivité d'une PME. Les traiter ensemble permet une vue d'ensemble, des arbitrages cohérents, et un seul interlocuteur. Vous pouvez aussi nous mandater sur 1 ou 2 domaines uniquement.",
  },
  {
    q: "Que se passe-t-il après la mission ?",
    a: "Vous repartez avec des contrats optimisés et un plan d'action clair. Si vous le souhaitez, vous activez l'abonnement mensuel pour bénéficier d'un suivi continu, d'une veille tarifaire et d'audits réguliers.",
  },
];

const FAQ = ({ faqs = defaultFaqs, title, highlight, intro, dark = false }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  const bgClass = dark ? "bg-dark text-white" : "bg-white";
  const cardBg = dark ? "bg-white/5 border-white/10" : "bg-white border-dark/10";
  const titleColor = dark ? "text-white" : "text-dark";
  const subColor = dark ? "text-white/70" : "text-dark/70";
  const answerColor = dark ? "text-white/75" : "text-dark/75";

  return (
    <section
      id="faq"
      className={`w-full ${bgClass} py-16 sm:py-20 lg:py-24 relative overflow-hidden`}
    >
      {dark && (
        <>
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ backgroundColor: "#32b3ea" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ backgroundColor: "#3ad19c" }}
          />
        </>
      )}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-bold tracking-[0.2em] uppercase mb-6 ${
              dark
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-primary-light text-primary"
            }`}
          >
            <FiHelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 ${titleColor}`}
          >
            {title || "Vos questions,"}{" "}
            <span className="text-accent">{highlight || "nos réponses."}</span>
          </h2>
          {intro && (
            <p className={`text-[17px] leading-relaxed ${subColor}`}>{intro}</p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all ${cardBg} ${
                  isOpen ? "shadow-lg" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 text-left"
                >
                  <span className={`font-bold text-sm sm:text-base ${titleColor}`}>
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-accent text-white"
                        : dark
                        ? "bg-white/10 text-white"
                        : "bg-primary-light text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <FiMinus className="w-4 h-4" />
                    ) : (
                      <FiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className={`px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 -mt-1 text-sm sm:text-[15px] leading-relaxed ${answerColor}`}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className={`text-sm mb-3 ${subColor}`}>
            D'autres questions ? Discutons-en directement.
          </p>
          <Link
            to="/rdv"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md"
          >
            Prendre RDV
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
