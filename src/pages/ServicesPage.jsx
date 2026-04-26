import PageHeader from "../components/PageHeader";
import ChiffresCles from "../components/ChiffresCles";
import Services from "../components/Services";
import Differenciation from "../components/Differenciation";
import ModeleEconomique from "../components/ModeleEconomique";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const servicesFaqs = [
  {
    q: "Puis-je ne mandater EVOLINK que sur 1 ou 2 services ?",
    a: "Oui. Vous pouvez nous mandater sur l'un, deux ou les trois domaines. L'audit gratuit sert justement à dire ce qui est nécessaire — parfois deux services suffisent.",
  },
  {
    q: "Combien de temps prend chaque service ?",
    a: "Énergie : 1 semaine. Télécom : 1 semaine. Digital : 2 semaines. Soit 1 mois pour les 3 domaines, en parallèle d'équipes dédiées.",
  },
  {
    q: "Que comprend le périmètre Énergie ?",
    a: "Pour la V1 : audit, comparaison et négociation des contrats d'électricité et de gaz. Bientôt : eau, fioul, déchets, performance énergétique et projets solaires.",
  },
  {
    q: "Le service Digital remplace-t-il une agence ?",
    a: "Pour la création/refonte de site et la mise en place de réseaux, oui. Pour des campagnes Ads continues ou un SEO long terme, vous pouvez activer notre abonnement mensuel.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        badge="Nos services"
        title="Trois domaines,"
        highlight="un seul interlocuteur."
        description="Énergie, télécom, digital — les trois sujets qui structurent la compétitivité de votre PME. Audit gratuit, mission en 1 mois, sans engagement."
        breadcrumb={[{ label: "Nos services" }]}
      />
      <ChiffresCles />
      <Services />
      <Differenciation />
      <ModeleEconomique />
      <FAQ
        faqs={servicesFaqs}
        title="Questions fréquentes"
        highlight="sur nos services."
        intro="Tout ce que vous voulez savoir sur le périmètre, les délais et la rémunération."
      />
      <ParlonsNous />
    </>
  );
};

export default ServicesPage;
