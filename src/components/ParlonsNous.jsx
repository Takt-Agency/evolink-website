import { Link } from "react-router-dom";
import { FiClock, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const ParlonsNous = () => {
  const points = [
    { icon: <FiClock className="w-4 h-4" />, label: "30 minutes" },
    { icon: <FiCheckCircle className="w-4 h-4" />, label: "Gratuit" },
    { icon: <FiCheckCircle className="w-4 h-4" />, label: "Sans engagement" },
  ];

  return (
    <section id="rdv" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative bg-dark rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#32b3ea" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#3ad19c" }}
          />

          <div className="relative px-6 sm:px-8 md:px-16 py-12 sm:py-16 lg:py-20 text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-5 sm:mb-6">
              Premier échange
            </span>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              Parlons-<span className="text-accent">nous</span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Un échange de 30 minutes, en visio ou par téléphone, pour faire
              le point sur votre situation. Gratuit. Sans engagement.{" "}
              <span className="text-white font-semibold">
                Si on peut vous aider, on vous le dit. Si ce n'est pas le bon
                moment, on vous le dit aussi.
              </span>
            </p>

            {/* Quick info pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {points.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold"
                >
                  <span className="text-accent">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/rdv"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Prendre RDV
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-xs text-white/50">
                Réponse sous 24h ouvrées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParlonsNous;
