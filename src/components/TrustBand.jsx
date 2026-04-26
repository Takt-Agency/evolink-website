import { FiAward } from "react-icons/fi";

const TrustBand = ({
  title = "Ils nous font confiance",
  subtitle = "Une sélection de PME accompagnées sur l'un ou plusieurs de nos 3 piliers.",
  count = 6,
}) => {
  return (
    <section className="w-full bg-primary-light/30 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-primary/20">
            <FiAward className="w-3 h-3" />
            {title}
          </span>
          <p className="text-dark/60 max-w-2xl mx-auto text-sm">{subtitle}</p>
        </div>

        {/* Logos placeholder grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-white rounded-xl border border-dark/5 flex items-center justify-center text-dark/30 text-xs font-semibold uppercase tracking-wider hover:border-primary/30 transition-colors"
            >
              Logo client {i + 1}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-dark/40 italic text-center">
          Logos clients à intégrer après autorisation. Cas anonymisés
          disponibles dès maintenant.
        </p>
      </div>
    </section>
  );
};

export default TrustBand;
