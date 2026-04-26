import { Link } from "react-router-dom";
import {
  FiSearch,
  FiBriefcase,
  FiTrendingUp,
  FiZap,
  FiWifi,
  FiMonitor,
  FiVideo,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const Methode = ({ cta = false }) => {
  const steps = [
    {
      n: "01",
      icon: <FiSearch className="w-6 h-6" />,
      title: "Comparateur",
      tagline: "Audit gratuit",
      desc: "Analyse à distance de vos contrats existants et proposition des meilleures alternatives du marché. EVOLINK est rémunéré directement par les fournisseurs si vous changez. Vous ne payez rien.",
      color: "primary",
    },
    {
      n: "02",
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Courtier",
      tagline: "Concrétisation",
      desc: "EVOLINK devient l'intermédiaire entre vous et le fournisseur ou l'opérateur retenu. C'est à cette étape que la rémunération partenaires est activée.",
      color: "accent",
    },
    {
      n: "03",
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "MOA / Partenaire",
      tagline: "Abonnement mensuel",
      desc: "EVOLINK devient votre maîtrise d'ouvrage externalisée : rapports détaillés, audits approfondis, plan d'action budgétisé, interventions physiques si nécessaire. Vous restez libre à chaque étape.",
      color: "primary",
    },
  ];

  const planning = [
    {
      icon: <FiZap className="w-5 h-5 text-primary" />,
      domain: "Énergie",
      period: "Semaine 1",
    },
    {
      icon: <FiWifi className="w-5 h-5 text-accent" />,
      domain: "Télécom",
      period: "Semaine 2",
    },
    {
      icon: <FiMonitor className="w-5 h-5 text-primary" />,
      domain: "Digital",
      period: "Semaines 3–4",
    },
  ];

  const meetings = [
    { num: 1, title: "Audit et état des lieux" },
    { num: 2, title: "Présentation des solutions" },
    { num: 3, title: "Choix définitif et mise en œuvre" },
  ];

  return (
    <section id="methode" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-md bg-accent/10 text-accent-dark text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Notre méthode
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight tracking-tight">
            Comment ça se passe,{" "}
            <span className="text-accent">concrètement.</span>
          </h2>
        </div>

        {/* Intro paragraph */}
        <p className="max-w-4xl text-base sm:text-[17px] text-dark/80 leading-relaxed mb-8 sm:mb-10">
          Nous démarrons toujours par un{" "}
          <span className="font-semibold text-dark">audit gratuit</span>. Sans
          engagement. En distanciel, au format qui vous convient. Nous
          analysons vos contrats d'énergie, vos abonnements télécom et votre
          présence digitale. À ce stade, nous agissons comme un comparateur
          expert.{" "}
          <span className="font-semibold text-accent">
            C'est là que s'arrête la plupart des courtiers. Pas nous.
          </span>{" "}
          Via un abonnement mensuel, nous prenons le rôle de votre MOA. Vous
          restez libre à chaque étape. Nous restons disponibles à chaque
          niveau.
        </p>

        {/* Image placeholder - banner */}
        <div className="mb-16">
          <ImagePlaceholder
            variant="light"
            ratio="aspect-[16/6]"
            alt="Illustration de la méthode EVOLINK"
            label="Image méthode (bannière)"
          />
        </div>

        {/* 3 steps */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-dark/50 mb-8">
            Le modèle en 3 temps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative bg-primary-light/30 border border-dark/5 rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >
                <span
                  className={`absolute -top-4 left-7 text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-md ${
                    step.color === "primary"
                      ? "bg-primary text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  Temps {step.n}
                </span>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 mt-3 ${
                    step.color === "primary"
                      ? "bg-primary text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  {step.icon}
                </div>
                <h4 className="text-xl font-extrabold text-dark mb-1">
                  {step.title}
                </h4>
                <p className="text-sm font-semibold text-dark/60 mb-4">
                  {step.tagline}
                </p>
                <p className="text-[15px] text-dark/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Planning + Meetings - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Planning */}
          <div className="bg-dark rounded-2xl p-8 text-white">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/60 mb-2">
              Répartition du temps
            </h3>
            <p className="text-2xl font-extrabold mb-6">
              Mission de <span className="text-accent">1 mois</span>
            </p>
            <ul className="space-y-3">
              {planning.map((p) => (
                <li
                  key={p.domain}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                      {p.icon}
                    </span>
                    <span className="font-semibold">{p.domain}</span>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    {p.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meetings */}
          <div className="bg-primary-light/30 border border-dark/5 rounded-2xl p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-dark/50 mb-2">
              Format des réunions
            </h3>
            <p className="text-2xl font-extrabold text-dark mb-6">
              <span className="text-primary">3 réunions</span> maximum
            </p>
            <ol className="space-y-3 mb-6">
              {meetings.map((m) => (
                <li
                  key={m.num}
                  className="flex items-center gap-4 bg-white border border-dark/5 rounded-lg px-4 py-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                    {m.num}
                  </span>
                  <span className="text-dark font-medium">{m.title}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-3 text-sm text-dark/70">
              <span className="font-semibold text-dark">Format :</span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-dark/5">
                <FiVideo className="w-4 h-4 text-primary" /> Visioconférence
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-dark/5">
                <FiPhone className="w-4 h-4 text-accent" /> Téléphone
              </span>
              <span className="text-dark/60">— 100% distanciel</span>
            </div>
          </div>
        </div>

        {cta && (
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/methode"
              className="inline-flex items-center gap-2 bg-dark hover:bg-dark-deep text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Voir la méthode complète
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Methode;
