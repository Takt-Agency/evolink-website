import PageHeader from "../components/PageHeader";
import CasClients from "../components/CasClients";
import TrustBand from "../components/TrustBand";
import Cible from "../components/Cible";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const casFaqs = [
  {
    q: "Pourquoi des cas anonymisés ?",
    o: "anonymisation",
    a: "Nous protégeons la confidentialité de nos clients. Les cas présentés sont représentatifs et basés sur des missions réelles. Des témoignages signés viendront enrichir cette page progressivement.",
  },
  {
    q: "Mon secteur est-il concerné ?",
    a: "Nous accompagnons des PME tous secteurs confondus, du moment qu'elles passent notre filtre éthique. Industrie, services, commerce, conseil, santé — l'audit s'adapte à chaque contexte.",
  },
  {
    q: "Quelles économies puis-je espérer ?",
    a: "Variable selon votre maturité contractuelle. Sur des contrats jamais révisés depuis 3 ans, nos clients constatent typiquement 15 à 35% d'économies sur l'énergie et 20 à 40% sur le télécom.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "L'audit est livré sous 2 semaines. Si vous décidez de basculer, les nouveaux contrats sont actifs sous 4 à 8 semaines selon le domaine. Les économies apparaissent dès la première facture.",
  },
];

const CasClientsPage = () => {
  return (
    <>
      <PageHeader
        badge="Cas clients"
        title="Trois situations,"
        highlight="trois réponses."
        description="Chaque PME a son contexte. Voici comment EVOLINK s'adapte selon la maturité, le secteur et les besoins."
        breadcrumb={[{ label: "Cas clients" }]}
      />
      <CasClients />
      <TrustBand
        title="Ils nous ont fait confiance"
        subtitle="Une sélection de PME accompagnées sur l'un ou plusieurs de nos 3 piliers."
      />
      <Cible />
      <FAQ
        faqs={casFaqs}
        title="Vos questions,"
        highlight="sur nos références."
      />
      <ParlonsNous />
    </>
  );
};

export default CasClientsPage;
