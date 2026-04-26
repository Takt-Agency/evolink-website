import PageHeader from "../components/PageHeader";

const PolitiqueConfPage = () => {
  return (
    <>
      <PageHeader
        badge="Informations"
        title="Politique de"
        highlight="confidentialité."
        breadcrumb={[{ label: "Politique de confidentialité" }]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-dark/80 space-y-8">
            <p className="text-sm text-dark/60">
              Dernière mise à jour : à compléter
            </p>

            <Block title="1. Données collectées">
              <p>
                Lors de votre utilisation du site EVOLINK, nous pouvons être
                amenés à collecter les données suivantes :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Nom, prénom</li>
                <li>Email professionnel</li>
                <li>Numéro de téléphone</li>
                <li>Nom et taille de l'entreprise</li>
                <li>Données de navigation (cookies techniques)</li>
              </ul>
            </Block>

            <Block title="2. Finalités du traitement">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Répondre à vos demandes de contact ou de rendez-vous</li>
                <li>Vous adresser des informations commerciales (avec consentement)</li>
                <li>Améliorer la qualité de nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </Block>

            <Block title="3. Base légale">
              <p>
                Les traitements reposent sur votre consentement (formulaires)
                ou sur l'exécution d'un contrat ou de mesures précontractuelles.
              </p>
            </Block>

            <Block title="4. Durée de conservation">
              <p>
                Vos données sont conservées pendant la durée nécessaire à la
                finalité du traitement, et au maximum 3 ans à compter du
                dernier contact, sauf obligation légale de conservation
                supérieure.
              </p>
            </Block>

            <Block title="5. Destinataires">
              <p>
                Vos données sont destinées aux équipes internes d'EVOLINK et,
                le cas échéant, à nos sous-traitants techniques (hébergeur,
                outils de gestion de la relation client). Elles ne sont jamais
                vendues à des tiers.
              </p>
            </Block>

            <Block title="6. Vos droits">
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de
                rectification, d'effacement, de limitation, de portabilité et
                d'opposition concernant vos données.
              </p>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@evolink.io"
                  className="text-primary hover:underline"
                >
                  contact@evolink.io
                </a>
                .
              </p>
              <p className="mt-3">
                Vous disposez également du droit d'introduire une réclamation
                auprès de la CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </Block>

            <Block title="7. Cookies">
              <p>
                Le site utilise uniquement des cookies techniques nécessaires
                à son bon fonctionnement. Aucun cookie de mesure d'audience ou
                publicitaire n'est déposé sans votre consentement explicite.
              </p>
            </Block>

            <Block title="8. Sécurité">
              <p>
                EVOLINK met en œuvre les mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non
                autorisé, modification ou destruction.
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

export default PolitiqueConfPage;
