import { FiClock, FiArrowRight } from "react-icons/fi";

const PerimetreFutur = ({ items, badge = "À venir", note }) => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#3ad19c" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#32b3ea" }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <FiClock className="w-3 h-3" />
              {badge}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-3">
              Notre <span className="text-accent">périmètre s'étend</span>.
            </h3>
            <p className="text-white/70 max-w-2xl mb-8">
              Le service évolue. Voici ce que nous prévoyons d'intégrer dans
              les prochaines versions de notre offre.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <FiArrowRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">{item.title}</div>
                    {item.desc && (
                      <div className="text-sm text-white/65 mt-1">
                        {item.desc}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {note && (
              <p className="mt-7 text-xs text-white/50 italic">{note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerimetreFutur;
