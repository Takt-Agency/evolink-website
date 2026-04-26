import { Link } from "react-router-dom";
import {
  FiTruck,
  FiShoppingBag,
  FiBriefcase,
  FiMapPin,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const CasClients = ({ cta = false }) => {
  const cases = [
    {
      id: 1,
      icon: <FiTruck className="w-7 h-7" />,
      sector: "Transport",
      employees: "12 salariés",
      region: "Rhône-Alpes",
      color: "primary",
      title: "Contrats existants à renégocier",
      desc: "Contrats signés à la création, jamais révisés. Renégociation énergie + télécom. Économies mensuelles significatives en 3 semaines.",
      tags: ["Énergie", "Télécom"],
    },
    {
      id: 2,
      icon: <FiShoppingBag className="w-7 h-7" />,
      sector: "Commerce",
      employees: "3 salariés",
      region: "Île-de-France",
      color: "accent",
      title: "Démarrage d'activité",
      desc: "Ouverture de boutique. Intervention sur les 3 sujets. Site vitrine + contrats optimisés + réseaux lancés en 1 mois.",
      tags: ["Énergie", "Télécom", "Digital"],
    },
    {
      id: 3,
      icon: <FiBriefcase className="w-7 h-7" />,
      sector: "Cabinet conseil",
      employees: "6 salariés",
      region: "Bordeaux",
      color: "primary",
      title: "Intervention sur 2 services / 3",
      desc: "Intervention télécom + digital uniquement. Parfois deux services suffisent. L'audit dit ce qui est nécessaire.",
      tags: ["Télécom", "Digital"],
    },
  ];

  return (
    <section
      id="cas-clients"
      className="w-full bg-primary-light/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-md bg-white text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-primary/20">
            Cas clients
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight tracking-tight">
            Trois situations,{" "}
            <span className="text-primary">trois réponses.</span>
          </h2>
        </div>

        {/* Image placeholder - banner */}
        <div className="mb-12">
          <ImagePlaceholder
            variant="light"
            ratio="aspect-[16/5]"
            alt="Visuel cas clients EVOLINK"
            label="Image cas clients (bannière)"
          />
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-2xl p-7 border border-dark/5 hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md ${
                    c.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                >
                  {c.icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-dark/40">
                  Cas {c.id}
                </span>
              </div>

              {/* Sector / company info */}
              <div className="mb-4">
                <h3 className="text-lg font-extrabold text-dark">{c.sector}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-dark/60">
                  <span className="inline-flex items-center gap-1">
                    <FiUsers className="w-3.5 h-3.5" /> {c.employees}
                  </span>
                  <span className="text-dark/30">·</span>
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="w-3.5 h-3.5" /> {c.region}
                  </span>
                </div>
              </div>

              {/* Title */}
              <p className="text-base font-bold text-dark mb-3">{c.title}</p>

              {/* Description */}
              <p className="text-[15px] text-dark/75 leading-relaxed flex-grow">
                {c.desc}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-light text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Discreet mention */}
        <p className="mt-10 text-sm text-dark/50 italic text-center">
          Cas représentatifs et anonymisés. Témoignages réels à venir.
        </p>

        {cta && (
          <div className="mt-8 text-center">
            <Link
              to="/cas-clients"
              className="inline-flex items-center gap-2 bg-dark hover:bg-dark-deep text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Voir tous nos cas clients
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CasClients;
