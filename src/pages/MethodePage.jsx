import PageHeader from "../components/PageHeader";
import ChiffresCles from "../components/ChiffresCles";
import Methode from "../components/Methode";
import ModeleEconomique from "../components/ModeleEconomique";
import Differenciation from "../components/Differenciation";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const methodeFaqs = [
  {
    q: "Pourquoi 1 mois exactement ?",
    a: "Parce que c'est le bon équilibre : assez court pour mobiliser un dirigeant, assez long pour faire un vrai travail de fond sur 3 domaines en parallèle.",
  },
  {
    q: "Pourquoi seulement 3 réunions ?",
    a: "Parce que vous n'avez pas le temps. Une réunion = un objectif clair. Audit, présentation, décision. Le reste se fait en autonomie côté EVOLINK.",
  },
  {
    q: "100% distanciel — c'est efficace ?",
    a: "Oui, et c'est même un atout : moins de temps perdu en transport, plus de réactivité. Vous choisissez visio ou téléphone selon votre préférence.",
  },
  {
    q: "Que se passe-t-il si je veux changer d'avis en cours de route ?",
    a: "À chaque étape, vous décidez. Audit gratuit terminé : vous pouvez vous arrêter là. Bascule entamée : vous restez maître de la décision finale. Abonnement : résiliable à tout moment.",
  },
];

const MethodePage = () => {
  return (
    <>
      <PageHeader
        badge="Notre méthode"
        title="Comment ça se passe,"
        highlight="concrètement."
        description="Une mission d'1 mois. 3 réunions max, en distanciel. Audit gratuit puis abonnement mensuel optionnel. Vous restez libre à chaque étape."
        breadcrumb={[{ label: "Notre méthode" }]}
      />
      <ChiffresCles />
      <Methode />
      <ModeleEconomique />
      <Differenciation />
      <FAQ
        faqs={methodeFaqs}
        title="Questions fréquentes"
        highlight="sur notre méthode."
      />
      <ParlonsNous />
    </>
  );
};

export default MethodePage;
