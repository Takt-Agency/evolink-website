import { FiX, FiCheck, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Differenciation = () => {
  const rows = [
    {
      criterion: "Périmètre d'intervention",
      classic: "Un seul domaine (énergie OU télécom)",
      evolink: "Énergie + Télécom + Digital, coordonnés",
    },
    {
      criterion: "Durée de la relation",
      classic: "Coup unique à la signature",
      evolink: "Partenaire dans la durée, abonnement optionnel",
    },
    {
      criterion: "Interlocuteur",
      classic: "Un commercial différent à chaque sujet",
      evolink: "Un seul interlocuteur qui coordonne tout",
    },
    {
      criterion: "Transparence rémunération",
      classic: "Souvent floue, conflit d'intérêts possible",
      evolink: "Audit gratuit + commission partenaires assumée",
    },
    {
      criterion: "Suivi après la signature",
      classic: "Disparaît jusqu'au prochain renouvellement",
      evolink: "Veille continue, rapports, MOA externalisée",
    },
    {
      criterion: "Filtre client",
      classic: "Aucun — tous secteurs",
      evolink: "Engagement éthique : activité positive uniquement",
    },
  ];

  return (
    <section
      id="pourquoi-evolink"
      className="w-full bg-white py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-4 py-1.5 rounded-md bg-accent/10 text-accent-dark text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Pourquoi EVOLINK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight tracking-tight mb-4">
            Pas un courtier de plus.{" "}
            <span className="text-accent">Un vrai partenaire.</span>
          </h2>
          <p className="text-[17px] text-dark/70 leading-relaxed">
            Ce qui nous distingue des prestataires classiques — point par
            point.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-sm">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 bg-primary-light/40 border-b border-dark/10">
            <div className="col-span-4 p-5 text-xs font-bold uppercase tracking-[0.18em] text-dark/60">
              Critère
            </div>
            <div className="col-span-4 p-5 text-xs font-bold uppercase tracking-[0.18em] text-dark/60 border-l border-dark/10">
              Courtier classique
            </div>
            <div className="col-span-4 p-5 text-xs font-bold uppercase tracking-[0.18em] text-accent border-l border-dark/10 bg-accent/5">
              EVOLINK
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-12 ${
                i !== rows.length - 1 ? "border-b border-dark/10" : ""
              }`}
            >
              <div className="md:col-span-4 p-5 font-bold text-dark text-sm bg-primary-light/30 md:bg-transparent">
                {r.criterion}
              </div>
              <div className="md:col-span-4 p-5 md:border-l border-dark/10 text-sm text-dark/70 flex items-start gap-2 min-w-0">
                <FiX className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="min-w-0 break-words">
                  <span className="md:hidden block text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40 mb-1">
                    Courtier classique
                  </span>
                  {r.classic}
                </span>
              </div>
              <div className="md:col-span-4 p-5 md:border-l border-dark/10 bg-accent/5 text-sm text-dark font-medium flex items-start gap-2 min-w-0">
                <FiCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="min-w-0 break-words">
                  <span className="md:hidden block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
                    EVOLINK
                  </span>
                  {r.evolink}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/methode"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Découvrir notre méthode complète
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Differenciation;
