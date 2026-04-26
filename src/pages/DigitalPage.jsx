import {
  FiZap,
  FiWifi,
  FiMonitor,
  FiLayout,
  FiPenTool,
  FiShare2,
  FiDatabase,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import ServiceDetail from "../components/ServiceDetail";
import PerimetreFutur from "../components/PerimetreFutur";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const digitalFaqs = [
  {
    q: "En 2 semaines, on a vraiment un site complet ?",
    a: "Oui : maquette, intégration, contenu de base, mise en ligne. Le périmètre est cadré (site vitrine type 5–8 pages). Pour de l'e-commerce avancé ou du sur-mesure poussé, comptez 4 à 6 semaines.",
  },
  {
    q: "Vous travaillez avec quels CMS / technologies ?",
    a: "Nous choisissons selon votre besoin : WordPress, Webflow, Next.js, ou solution sur-mesure. Nous favorisons toujours ce que VOUS pourrez maintenir.",
  },
  {
    q: "Comment choisissez-vous le bon CRM/ERP ?",
    a: "Nous partons de votre code NAF et de votre activité. Nous comparons 3 solutions adaptées à votre taille et secteur, puis nous accompagnons le déploiement.",
  },
  {
    q: "Qui produit le contenu ?",
    a: "L'équipe EVOLINK interne. Nous avons designers, intégrateurs et développeurs en interne — la même équipe que celle qui développe nos ERP. Pas de sous-traitance.",
  },
];

const DigitalPage = () => {
  return (
    <>
      <PageHeader
        badge="💻 Service · Digital"
        title="Site, branding, outils —"
        highlight="visible et crédible."
        description="En 2 semaines, nous posons les bases : site web, identité visuelle, réseaux sociaux, et déploiement des bons outils CRM/ERP."
        breadcrumb={[
          { label: "Nos services", to: "/services" },
          { label: "Digital" },
        ]}
      />
      <ServiceDetail
        badge="digital"
        intro={{
          title: "Exister en ligne ne suffit plus.",
          highlight: "Soyez crédible.",
          paragraphs: [
            "Exister sur internet ne suffit plus. Il faut être visible, cohérent, et crédible — sur votre site comme sur vos réseaux.",
            "En deux semaines, nous posons les bases : création ou refonte de votre site, identité visuelle et branding, mise en place de vos réseaux sociaux.",
            "Nous vous aidons également à choisir et déployer les bons outils de gestion — CRM, ERP — adaptés à votre activité. Parce qu'un outil mal choisi coûte plus cher qu'un hors-forfait téléphonique quand on est à l'étranger sans le savoir.",
          ],
        }}
        features={[
          {
            icon: <FiLayout className="w-6 h-6" />,
            title: "Site web",
            desc: "Création ou refonte d'un site rapide, responsive, optimisé SEO.",
          },
          {
            icon: <FiPenTool className="w-6 h-6" />,
            title: "Identité visuelle",
            desc: "Logo, charte graphique, supports de communication.",
          },
          {
            icon: <FiShare2 className="w-6 h-6" />,
            title: "Réseaux sociaux",
            desc: "Mise en place et stratégie éditoriale sur les bons canaux.",
          },
          {
            icon: <FiDatabase className="w-6 h-6" />,
            title: "CRM",
            desc: "Choix et déploiement de l'outil adapté à votre cycle commercial.",
          },
          {
            icon: <FiSettings className="w-6 h-6" />,
            title: "ERP",
            desc: "Sélection et intégration d'un ERP dimensionné pour votre activité.",
          },
          {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Analytics",
            desc: "Mise en place du suivi pour piloter par la donnée.",
          },
        ]}
        process={[
          {
            title: "Audit digital",
            desc: "État des lieux site, réseaux, outils existants.",
          },
          {
            title: "Recommandations",
            desc: "Plan d'action priorisé selon vos enjeux.",
          },
          {
            title: "Production",
            desc: "Création et déploiement en 2 semaines.",
          },
          {
            title: "Formation & suivi",
            desc: "Prise en main par vos équipes, accompagnement.",
          },
        ]}
        otherServices={[
          {
            to: "/services/energie",
            label: "Énergie",
            desc: "Électricité + gaz",
            icon: <FiZap className="w-5 h-5" />,
            color: "primary",
          },
          {
            to: "/services/telecom",
            label: "Télécom",
            desc: "Connectivité et infrastructure",
            icon: <FiWifi className="w-5 h-5" />,
            color: "accent",
          },
        ]}
      />
      <PerimetreFutur
        badge="Périmètre abonnement"
        items={[
          {
            title: "SEO continu",
            desc: "Optimisation, contenus, backlinks, suivi positionnement.",
          },
          {
            title: "Campagnes Ads",
            desc: "Google Ads, LinkedIn, Meta — pilotage et reporting mensuel.",
          },
          {
            title: "Gestion réseaux sociaux",
            desc: "Calendrier éditorial, production posts, modération.",
          },
          {
            title: "Veille concurrentielle",
            desc: "Monitoring de votre marché et alertes opportunités.",
          },
          {
            title: "Refonte continue",
            desc: "Itérations design, A/B tests, optimisation conversion.",
          },
          {
            title: "Formation équipes",
            desc: "Prise en main outils CRM/ERP, transmission compétences.",
          },
        ]}
        note="Activable via abonnement mensuel — service par service, sans engagement de durée."
      />
      <FAQ
        faqs={digitalFaqs}
        title="Questions fréquentes"
        highlight="sur le digital."
      />
      <ParlonsNous />
    </>
  );
};

export default DigitalPage;
