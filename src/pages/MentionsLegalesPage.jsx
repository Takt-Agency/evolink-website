import PageHeader from "../components/PageHeader";

const MentionsLegalesPage = () => {
  return (
    <>
      <PageHeader
        badge="Informations"
        title="Mentions"
        highlight="légales."
        breadcrumb={[{ label: "Mentions légales" }]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="prose-content text-dark/80 space-y-8">
            <Block title="Éditeur du site">
              <p>
                <strong className="text-dark">EVOLINK</strong>
                <br />
                Forme juridique : à compléter
                <br />
                Capital social : à compléter
                <br />
                Siège social : à compléter
                <br />
                RCS : à compléter
                <br />
                SIRET : à compléter
                <br />
                N° TVA intracommunautaire : à compléter
              </p>
            </Block>

            <Block title="Directeur de publication">
              <p>À compléter</p>
            </Block>

            <Block title="Contact">
              <p>
                Email :{" "}
                <a
                  href="mailto:contact@evolink.io"
                  className="text-primary hover:underline"
                >
                  contact@evolink.io
                </a>
                <br />
                Téléphone :{" "}
                <a href="tel:0610541872" className="text-primary hover:underline">
                  06 10 54 18 72
                </a>
              </p>
            </Block>

            <Block title="Hébergeur">
              <p>
                Le site est hébergé par : à compléter
                <br />
                Adresse : à compléter
                <br />
                Téléphone : à compléter
              </p>
            </Block>

            <Block title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus présents sur ce site (textes, images,
                logos, vidéos) est la propriété exclusive d'EVOLINK ou de ses
                partenaires. Toute reproduction, représentation, diffusion ou
                exploitation, totale ou partielle, sans autorisation écrite
                préalable est strictement interdite.
              </p>
            </Block>

            <Block title="Responsabilité">
              <p>
                EVOLINK met tout en œuvre pour offrir aux utilisateurs des
                informations disponibles et vérifiées, mais ne saurait être
                tenue responsable des erreurs, d'une absence de disponibilité
                des informations ou de la présence de virus sur son site.
              </p>
            </Block>

            <Block title="Liens hypertextes">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres
                sites. EVOLINK n'a pas la possibilité de vérifier le contenu
                de ces sites et n'assume aucune responsabilité de ce fait.
              </p>
            </Block>
          </div>
        </div>
      </section>
    </>
  );
};

const Block = ({ title, children }) => (
  <div>
    <h2 className="text-xl font-extrabold text-dark mb-3">{title}</h2>
    <div className="leading-relaxed">{children}</div>
  </div>
);

export default MentionsLegalesPage;
