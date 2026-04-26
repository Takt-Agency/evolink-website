import { Link } from "react-router-dom";
import { FiSearch, FiBriefcase, FiTrendingUp, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const ModeleEconomique = () => {
  const phases = [
    {
      step: "Phase 1",
      title: "Audit gratuit",
      tagline: "Vous ne payez rien",
      icon: <FiSearch className="w-6 h-6" />,
      color: "primary",
      desc: "Aucune facturation client. EVOLINK est rémunéré directement par les fournisseurs et opérateurs partenaires si vous décidez de changer de contrat.",
      bullets: [
        "Audit à distance des contrats existants",
        "Comparatif avec les meilleures offres du marché",
        "Recommandations détaillées par domaine",
      ],
    },
    {
      step: "Phase 2",
      title: "Courtage à la signature",
      tagline: "Rémunération partenaires",
      icon: <FiBriefcase className="w-6 h-6" />,
      color: "accent",
      desc: "Si vous décidez de basculer, EVOLINK joue le rôle d'intermédiaire avec le fournisseur ou l'opérateur. La rémunération est versée par le partenaire.",
      bullets: [
        "Négociation des conditions à votre place",
        "Gestion administrative complète",
        "Bascule sécurisée",
      ],
    },
    {
      step: "Phase 3",
      title: "Abonnement mensuel",
      tagline: "Optionnel · activable à tout moment",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "primary",
      desc: "Activable service par service. EVOLINK devient votre maîtrise d'ouvrage externalisée pour des prestations approfondies. Tarification selon les domaines choisis.",
      bullets: [
        "Rapports détaillés mensuels",
        "Audits physiques approfondis",
        "Plan d'action budgétisé",
      ],
    },
  ];

  return (
    <section
      id="modele-economique"
      className="w-full bg-primary-light/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-md bg-white text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-primary/20">
            Modèle économique
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark leading-tight tracking-tight mb-4">
            Une rémunération{" "}
            <span className="text-primary">100% transparente.</span>
          </h2>
          <p className="text-base sm:text-[17px] text-dark/70 leading-relaxed">
            Trois phases, trois logiques. Vous savez à chaque étape ce que vous
            payez — et ce que vous ne payez pas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <article
              key={i}
              className="relative bg-white rounded-2xl p-7 border border-dark/5 hover:shadow-xl transition-shadow flex flex-col"
            >
              <span
                className={`absolute -top-4 left-7 px-3 py-1 rounded-md text-white text-xs font-bold tracking-[0.2em] uppercase ${
                  p.color === "primary" ? "bg-primary" : "bg-accent"
                }`}
              >
                {p.step}
              </span>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 mt-3 ${
                  p.color === "primary" ? "bg-primary" : "bg-accent"
                }`}
              >
                {p.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-dark mb-1">
                {p.title}
              </h3>
              <p className="text-sm font-semibold text-dark/60 mb-4">
                {p.tagline}
              </p>
              <p className="text-[15px] text-dark/75 leading-relaxed mb-5">
                {p.desc}
              </p>

              <ul className="space-y-2 mt-auto">
                {p.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-dark/80"
                  >
                    <FiCheckCircle
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 bg-dark rounded-2xl p-6 sm:p-7 lg:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h4 className="text-xl font-extrabold mb-2">
              Vous restez libre à{" "}
              <span className="text-accent">chaque étape.</span>
            </h4>
            <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
              Aucun engagement initial. Vous activez ou désactivez l'abonnement
              quand vous voulez. Pas de frais cachés, pas de mauvaise surprise.
            </p>
          </div>
          <Link
            to="/rdv"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-6 py-3 rounded-md transition-all whitespace-nowrap shadow-lg w-full md:w-auto"
          >
            Audit gratuit
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModeleEconomique;
