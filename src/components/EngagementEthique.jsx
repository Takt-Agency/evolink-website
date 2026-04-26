import { FiHeart, FiShield, FiUsers, FiGlobe } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const EngagementEthique = () => {
  const principles = [
    {
      icon: <FiHeart className="w-5 h-5" />,
      title: "Activité positive",
      desc: "Nous travaillons avec des entreprises dont l'activité contribue positivement à la société et à l'environnement.",
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Ligne de conduite",
      desc: "Une exigence professionnelle, pas un marqueur communautaire. Le filtre s'applique au code NAF et à l'activité réelle.",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: "Confiance mutuelle",
      desc: "Nos clients savent qu'ils font partie d'un réseau d'entreprises engagées. Nous accompagnons des dirigeants alignés.",
    },
    {
      icon: <FiGlobe className="w-5 h-5" />,
      title: "Impact long terme",
      desc: "Chaque mission contribue à construire une économie plus solide, plus compétitive et plus humaine.",
    },
  ];

  return (
    <section
      id="engagement-ethique"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: image */}
          <div>
            <ImagePlaceholder
              ratio="aspect-[4/5]"
              alt="Engagement éthique EVOLINK"
              label="Image engagement éthique"
            />
          </div>

          {/* Right: content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-md bg-accent/10 text-accent-dark text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Notre engagement
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-dark leading-tight tracking-tight mb-6">
              Un filtre <span className="text-accent">éthique</span> sur nos
              clients.
            </h2>
            <p className="text-base sm:text-[17px] text-dark/80 leading-relaxed mb-4">
              EVOLINK ne travaille qu'avec des entreprises dont l'activité est{" "}
              <span className="font-semibold text-dark">
                bonne pour les personnes et l'environnement.
              </span>
            </p>
            <p className="text-[15px] text-dark/70 leading-relaxed mb-8">
              Notre ambition va au-delà du service rendu : contribuer à
              construire des entreprises plus solides, c'est contribuer à
              construire une société plus compétitive. Plus humaine.
            </p>

            <ul className="space-y-4">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-light/30 border border-dark/5"
                >
                  <span className="w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                    {p.icon}
                  </span>
                  <div>
                    <div className="font-bold text-dark mb-1">{p.title}</div>
                    <div className="text-sm text-dark/70 leading-relaxed">
                      {p.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementEthique;
