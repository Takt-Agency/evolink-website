import PageHeader from "../components/PageHeader";

const CgvPage = () => {
  return (
    <>
      <PageHeader
        badge="Informations"
        title="Conditions"
        highlight="générales de vente."
        breadcrumb={[{ label: "CGV" }]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-dark/80 space-y-8">
            <p className="text-sm text-dark/60">
              Document à finaliser avec votre conseil juridique. Texte de
              référence à compléter.
            </p>

            <Block title="Article 1 — Objet">
              <p>
                Les présentes Conditions Générales de Vente régissent les
                prestations de conseil et de courtage proposées par EVOLINK à
                ses clients professionnels en matière d'énergie, de télécom et
                de digital.
              </p>
            </Block>

            <Block title="Article 2 — Prestations">
              <p>
                EVOLINK propose trois niveaux d'intervention : audit
                comparatif (gratuit), courtage à la signature, et abonnement
                mensuel d'accompagnement (MOA externalisée).
              </p>
            </Block>

            <Block title="Article 3 — Tarification">
              <p>
                L'audit initial est gratuit. La rémunération du courtage est
                assurée par les fournisseurs partenaires. L'abonnement mensuel
                est facturé selon le barème en vigueur, communiqué avant
                souscription.
              </p>
            </Block>

            <Block title="Article 4 — Durée et résiliation">
              <p>
                L'abonnement est mensuel, sans engagement de durée. La
                résiliation est possible à tout moment par notification écrite
                avec un préavis de 30 jours.
              </p>
            </Block>

            <Block title="Article 5 — Confidentialité">
              <p>
                EVOLINK s'engage à respecter la confidentialité des données
                transmises par ses clients dans le cadre de ses missions.
              </p>
            </Block>

            <Block title="Article 6 — Litiges">
              <p>
                En cas de litige, les parties s'efforceront de trouver une
                solution amiable. À défaut, le tribunal compétent sera celui
                du siège social d'EVOLINK.
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

export default CgvPage;
