import { Link } from "react-router-dom";
import { FiZap, FiWifi, FiMonitor, FiArrowRight, FiCheck } from "react-icons/fi";

const Services = ({ cta = false }) => {
  const services = [
    {
      id: "energie",
      to: "/services/energie",
      icon: <FiZap className="w-7 h-7" />,
      tag: "Service 1",
      title: "Énergie",
      colorClass: "bg-primary",
      badge: "Électricité + gaz",
      tagline: "Audit, comparaison, négociation à votre place.",
      bullets: [
        "Audit gratuit de vos contrats",
        "Comparaison du marché",
        "Négociation à votre place",
      ],
    },
    {
      id: "telecom",
      to: "/services/telecom",
      icon: <FiWifi className="w-7 h-7" />,
      tag: "Service 2",
      title: "Télécom",
      colorClass: "bg-accent",
      tagline: "Lignes, mobiles, internet — un seul interlocuteur.",
      bullets: [
        "Audit complet des forfaits",
        "Identification des surcoûts",
        "Renégociation des conditions",
      ],
    },
    {
      id: "digital",
      to: "/services/digital",
      icon: <FiMonitor className="w-7 h-7" />,
      tag: "Service 3",
      title: "Digital",
      colorClass: "bg-primary",
      tagline: "Site, branding, outils — visible et crédible.",
      bullets: [
        "Site web en 2 semaines",
        "Identité visuelle + réseaux",
        "Choix CRM / ERP adapté",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-primary-light/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-md bg-white text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-primary/20">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight tracking-tight">
            Trois domaines,{" "}
            <span className="text-primary">un seul interlocuteur.</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group bg-white rounded-2xl p-7 border border-dark/5 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon + Tag */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`w-14 h-14 rounded-xl ${service.colorClass} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                >
                  {service.icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-dark/40">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-dark mb-2">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="text-[15px] text-dark/70 leading-relaxed mb-5">
                {service.tagline}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-5 flex-grow">
                {service.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-dark/80"
                  >
                    <FiCheck
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        service.colorClass === "bg-primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Badge (only Énergie) */}
              {service.badge && (
                <div className="mb-5 inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-md bg-accent/10 text-accent-dark text-xs font-semibold">
                  <FiCheck className="w-3 h-3" />
                  {service.badge}
                </div>
              )}

              {/* CTA Button */}
              <Link
                to={service.to}
                className={`mt-auto inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-md transition-all w-full shadow-sm hover:shadow-md group-hover:gap-3 ${
                  service.colorClass === "bg-primary"
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-accent hover:bg-accent-dark text-white"
                }`}
              >
                En savoir plus
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        {cta && (
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-dark hover:bg-dark-deep text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Voir tous nos services
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
