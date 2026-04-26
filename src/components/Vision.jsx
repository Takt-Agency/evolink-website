import { FiZap, FiWifi, FiMonitor } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const Vision = () => {
  const pillars = [
    { icon: <FiZap className="w-5 h-5" />, label: "Énergie", color: "primary" },
    { icon: <FiWifi className="w-5 h-5" />, label: "Télécom", color: "accent" },
    { icon: <FiMonitor className="w-5 h-5" />, label: "Digital", color: "primary" },
  ];

  return (
    <section id="notre-vision" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary-light text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Notre vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight tracking-tight">
            Une vision <span className="text-primary">née du terrain</span>,
            pour des entreprises plus solides.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">
          {/* Left: text paragraphs */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6 text-base sm:text-[17px] text-dark/80 leading-relaxed">
            <p>
              Nous avons constaté que gérer une PME, c'est avancer en
              permanence avec des ressources limitées, des décisions à prendre
              vite, et peu de temps pour tout maîtriser.{" "}
              <span className="font-semibold text-dark">
                Nous le savons parce que nous sommes nous-mêmes entrepreneurs.
              </span>{" "}
              Nous avons vécu ces mêmes contraintes, ces mêmes arbitrages, ces
              mêmes angles morts. C'est de ce constat qu'EVOLINK est né.
            </p>

            <p>
              Trois sujets fondamentaux structurent la compétitivité de toute
              entreprise :{" "}
              <span className="font-semibold text-dark">
                son fournisseur d'énergie, son opérateur télécom, sa présence
                digitale.
              </span>{" "}
              Parce que l'on ne peut pas travailler sans électricité ou
              internet — et parce qu'être à la page en termes de digital est
              un besoin du quotidien.
            </p>

            <p>
              Ces trois sujets sont souvent traités une fois au démarrage,
              puis laissés à l'abandon faute de temps et d'expertise.{" "}
              <span className="font-semibold text-accent">
                Nous intervenons là où ça compte.
              </span>{" "}
              En un mois, avec des équipes dédiées, et un seul interlocuteur
              qui coordonne tout.
            </p>

            <p>
              Notre ambition va au-delà du service rendu. Contribuer à
              construire des entreprises plus solides, c'est aussi contribuer
              à construire une société plus compétitive. Des entreprises mieux
              armées, qui subissent moins les crises. Et une société dans son
              ensemble qui progresse par{" "}
              <span className="font-semibold text-dark">
                la compétence, la coopération et l'entraide.
              </span>
            </p>
          </div>

          {/* Right: image + 3 pillars summary */}
          <aside className="lg:col-span-1 space-y-5">
            <ImagePlaceholder
              variant="light"
              ratio="aspect-[4/5]"
              alt="Portrait équipe EVOLINK"
              label="Image équipe / portrait"
            />
            <div className="bg-primary-light/40 border border-dark/5 rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-dark/60 mb-5">
                Les 3 piliers
              </p>
              <ul className="space-y-4">
                {pillars.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white border border-dark/5"
                  >
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        p.color === "primary"
                          ? "bg-primary text-white"
                          : "bg-accent text-white"
                      }`}
                    >
                      {p.icon}
                    </span>
                    <span className="font-bold text-dark">{p.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-dark/70 leading-relaxed">
                Trois domaines critiques pour la compétitivité de votre PME.
                Un seul interlocuteur pour les piloter.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Vision;
