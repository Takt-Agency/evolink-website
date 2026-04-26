import { FiLinkedin } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const Equipe = () => {
  const team = [
    {
      role: "Direction & coordination",
      name: "À compléter",
      desc: "Pilotage des missions, point de contact unique pour les clients.",
    },
    {
      role: "Pôle Énergie",
      name: "Équipe dédiée",
      desc: "Spécialistes audit contrats électricité/gaz, négociation fournisseurs.",
    },
    {
      role: "Pôle Télécom",
      name: "Équipe dédiée",
      desc: "Experts lignes fixes, mobiles, internet et infrastructure IT.",
    },
    {
      role: "Pôle Digital",
      name: "Équipe dédiée",
      desc: "Développeurs, designers, intégrateurs CRM/ERP. Production interne.",
    },
  ];

  return (
    <section id="equipe" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-4 py-1.5 rounded-md bg-accent/10 text-accent-dark text-xs font-bold tracking-[0.2em] uppercase mb-6">
            L'équipe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight tracking-tight mb-4">
            Un seul interlocuteur,{" "}
            <span className="text-accent">des équipes dédiées.</span>
          </h2>
          <p className="text-[17px] text-dark/70 leading-relaxed">
            Vous parlez à une seule personne. Derrière, des équipes spécialisées
            par domaine travaillent en parallèle pour livrer en 1 mois.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div
              key={i}
              className="group bg-primary-light/30 border border-dark/5 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <ImagePlaceholder
                ratio="aspect-square"
                rounded=""
                alt={m.role}
                label={`Photo ${m.role}`}
              />
              <div className="p-5">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">
                  {m.role}
                </span>
                <h3 className="text-lg font-extrabold text-dark mb-1">
                  {m.name}
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed mb-4">
                  {m.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  aria-label={`LinkedIn ${m.name}`}
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;
