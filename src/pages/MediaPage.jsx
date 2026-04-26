import { Link } from "react-router-dom";
import { FiCalendar, FiArrowRight, FiFileText, FiVideo, FiMic } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ParlonsNous from "../components/ParlonsNous";

const MediaPage = () => {
  const articles = [
    {
      type: "Article",
      icon: <FiFileText className="w-4 h-4" />,
      date: "À venir",
      title: "5 erreurs courantes sur les contrats d'énergie en PME",
      excerpt:
        "Les pièges classiques que nous identifions chez nos clients lors des audits initiaux.",
      tag: "Énergie",
    },
    {
      type: "Vidéo",
      icon: <FiVideo className="w-4 h-4" />,
      date: "À venir",
      title: "Refondre son site en 2 semaines : la méthode EVOLINK",
      excerpt:
        "Étapes, outils, livrables : ce qu'on fait et ce qu'on ne fait pas.",
      tag: "Digital",
    },
    {
      type: "Podcast",
      icon: <FiMic className="w-4 h-4" />,
      date: "À venir",
      title: "Pourquoi vos forfaits télécom coûtent trop cher",
      excerpt:
        "Hors-forfaits, options dormantes, doublons : analyse et solutions.",
      tag: "Télécom",
    },
    {
      type: "Article",
      icon: <FiFileText className="w-4 h-4" />,
      date: "À venir",
      title: "MOA externalisée : un modèle gagnant pour les PME",
      excerpt:
        "Pourquoi de plus en plus de dirigeants externalisent leur pilotage opérationnel.",
      tag: "Méthode",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Media"
        title="Articles, vidéos,"
        highlight="podcasts."
        description="Notre regard sur les enjeux d'énergie, télécom et digital pour les PME. Bientôt en ligne."
        breadcrumb={[{ label: "Media" }]}
      />

      {/* Featured / coming soon banner */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-8 lg:p-10 text-center">
            <span className="inline-block px-3 py-1 rounded-md bg-accent text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Bientôt en ligne
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-3">
              Notre espace média ouvre dans les prochaines semaines.
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Articles de fond, retours d'expérience, vidéos courtes et
              podcasts pour aider les dirigeants de PME à mieux décider.
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="w-full bg-primary-light/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-10">
            Au programme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-dark/5 hover:shadow-xl transition-shadow flex flex-col"
              >
                <ImagePlaceholder
                  ratio="aspect-[16/9]"
                  rounded=""
                  alt={a.title}
                  label={`Image ${a.type}`}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {a.icon}
                      {a.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-dark/50">
                      <FiCalendar className="w-3 h-3" />
                      {a.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-dark mb-3 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-dark/70 leading-relaxed flex-grow">
                    {a.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent-dark">
                      {a.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-dark/40">
                      Bientôt
                      <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-extrabold text-dark mb-4">
            Soyez prévenu·e du <span className="text-accent">lancement</span>
          </h2>
          <p className="text-dark/70 mb-8">
            Inscrivez-vous pour recevoir nos premiers contenus dès leur
            publication.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-md transition-colors shadow-sm"
          >
            Me prévenir
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ParlonsNous />
    </>
  );
};

export default MediaPage;
