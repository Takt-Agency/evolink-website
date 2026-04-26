import { FiUsers, FiMapPin, FiTrendingUp, FiAlertCircle, FiClock, FiShield } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const Cible = () => {
  const profile = [
    { icon: <FiMapPin className="w-4 h-4" />, label: "PME françaises" },
    { icon: <FiUsers className="w-4 h-4" />, label: "5 à 200 salariés" },
    { icon: <FiTrendingUp className="w-4 h-4" />, label: "Tous secteurs (filtre éthique)" },
  ];

  const douleurs = [
    {
      icon: <FiAlertCircle className="w-5 h-5" />,
      title: "Contrats jamais révisés",
      desc: "Signés au démarrage, oubliés depuis. Le marché a évolué, vos contrats non.",
    },
    {
      icon: <FiClock className="w-5 h-5" />,
      title: "Pas le temps de comparer",
      desc: "Les offres changent vite. Trier le bruit du signal demande des heures que vous n'avez pas.",
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Méfiance des prestataires",
      desc: "Trop de courtiers \"font les poches\" puis disparaissent. Vous voulez des résultats, pas des promesses.",
    },
  ];

  return (
    <section id="cible" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-md bg-primary-light text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Pour qui
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark leading-tight tracking-tight mb-5">
              Pour les{" "}
              <span className="text-primary">dirigeants de PME</span> qui
              avancent vite.
            </h2>
            <p className="text-base sm:text-[17px] text-dark/70 leading-relaxed mb-7">
              Vous gérez votre entreprise avec des ressources limitées, des
              décisions à prendre vite, et peu de temps pour tout maîtriser.
              Vous n'êtes pas obligé d'être expert en énergie, télécom ou
              digital — c'est notre rôle.
            </p>

            {/* Profile pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {profile.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-semibold border border-primary/20"
                >
                  {p.icon}
                  {p.label}
                </span>
              ))}
            </div>

            {/* Douleurs */}
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-dark/50 mb-4">
              Vos douleurs (que nous adressons)
            </h3>
            <ul className="space-y-3">
              {douleurs.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-light/30 border border-dark/5"
                >
                  <span className="w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                    {d.icon}
                  </span>
                  <div>
                    <div className="font-bold text-dark mb-1">{d.title}</div>
                    <div className="text-sm text-dark/70 leading-relaxed">
                      {d.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="order-first lg:order-last">
            <ImagePlaceholder
              ratio="aspect-[4/5]"
              alt="Dirigeant de PME"
              label="Image dirigeant PME"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cible;
