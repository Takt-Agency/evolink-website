import {
  FiZap,
  FiWifi,
  FiMonitor,
  FiFileText,
  FiTrendingDown,
  FiHome,
  FiBarChart2,
  FiShield,
  FiClock,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import ServiceDetail from "../components/ServiceDetail";
import PerimetreFutur from "../components/PerimetreFutur";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const energieFaqs = [
  {
    q: "Avez-vous accès à tous les fournisseurs d'énergie ?",
    a: "Nous travaillons avec un large panel de fournisseurs d'électricité et de gaz. L'audit identifie ceux qui correspondent le mieux à votre profil de consommation.",
  },
  {
    q: "Faut-il résilier mon contrat actuel avant l'audit ?",
    a: "Surtout pas. L'audit se fait sur la base de vos contrats en cours et de vos factures. C'est ensuite vous qui décidez si vous changez ou non.",
  },
  {
    q: "Quels documents devez-vous récupérer ?",
    a: "Vos contrats actuels (électricité, gaz) et 12 mois de factures. C'est tout. Le reste, on s'en occupe.",
  },
  {
    q: "Et la performance énergétique du bâtiment ?",
    a: "Nous proposons un audit complémentaire pour optimiser votre consommation à la source — isolation, équipements, usages. Bientôt étendu aux projets solaires.",
  },
];

const EnergiePage = () => {
  return (
    <>
      <PageHeader
        badge="⚡ Service · Énergie"
        title="Optimisez vos contrats"
        highlight="d'électricité et de gaz."
        description="Audit gratuit, comparaison du marché, négociation à votre place. Un contrat adapté à votre activité réelle, pas à celle d'il y a 3 ans."
        breadcrumb={[
          { label: "Nos services", to: "/services" },
          { label: "Énergie" },
        ]}
      />
      <ServiceDetail
        badge="énergie"
        perimetre="Périmètre V1 : électricité + gaz"
        intro={{
          title: "Vos contrats énergie ne sont plus",
          highlight: "adaptés à votre réalité.",
          paragraphs: [
            "Votre contrat d'électricité ou de gaz a été signé il y a des mois, parfois des années. Depuis, les tarifs ont évolué. Votre consommation aussi.",
            "Nous auditons vos contrats en cours, comparons les offres du marché et négocions à votre place. L'objectif : un contrat adapté à votre activité réelle.",
            "Nous intervenons également sur la performance énergétique de votre bâtiment — parce qu'optimiser ce que vous consommez vaut autant qu'optimiser ce que vous payez.",
          ],
        }}
        features={[
          {
            icon: <FiFileText className="w-6 h-6" />,
            title: "Audit complet",
            desc: "Analyse détaillée de vos contrats actuels, factures et profil de consommation.",
          },
          {
            icon: <FiBarChart2 className="w-6 h-6" />,
            title: "Comparaison marché",
            desc: "Mise en concurrence des fournisseurs avec offres adaptées à votre profil.",
          },
          {
            icon: <FiTrendingDown className="w-6 h-6" />,
            title: "Économies réelles",
            desc: "Négociation à votre place pour obtenir les meilleures conditions tarifaires.",
          },
          {
            icon: <FiHome className="w-6 h-6" />,
            title: "Performance bâtiment",
            desc: "Audit énergétique du local pour réduire la consommation à la source.",
          },
          {
            icon: <FiShield className="w-6 h-6" />,
            title: "Sécurisation",
            desc: "Vérification des clauses, protection contre les hausses imprévues.",
          },
          {
            icon: <FiClock className="w-6 h-6" />,
            title: "Suivi continu",
            desc: "Veille tarifaire pour anticiper les renégociations futures.",
          },
        ]}
        process={[
          {
            title: "Audit gratuit",
            desc: "Récupération des factures, analyse à distance.",
          },
          {
            title: "Comparatif",
            desc: "Présentation des meilleures offres du marché.",
          },
          {
            title: "Négociation",
            desc: "Discussion avec les fournisseurs en votre nom.",
          },
          {
            title: "Signature & suivi",
            desc: "Bascule du contrat et suivi mensuel.",
          },
        ]}
        otherServices={[
          {
            to: "/services/telecom",
            label: "Télécom",
            desc: "Connectivité et infrastructure",
            icon: <FiWifi className="w-5 h-5" />,
            color: "accent",
          },
          {
            to: "/services/digital",
            label: "Digital",
            desc: "Site, branding, outils CRM/ERP",
            icon: <FiMonitor className="w-5 h-5" />,
            color: "primary",
          },
        ]}
      />
      <PerimetreFutur
        badge="Périmètre futur"
        items={[
          {
            title: "Eau",
            desc: "Audit et optimisation des contrats d'approvisionnement en eau.",
          },
          {
            title: "Fioul",
            desc: "Comparaison fournisseurs, négociation des tarifs livraison.",
          },
          {
            title: "Déchets",
            desc: "Audit collecte, tri, valorisation et coûts associés.",
          },
          {
            title: "Performance bâtiment",
            desc: "Audit énergétique approfondi, plan de rénovation.",
          },
          {
            title: "Projets solaires",
            desc: "Études de faisabilité photovoltaïque, autoconsommation.",
          },
          {
            title: "Bilan carbone",
            desc: "Mesure et trajectoire de réduction des émissions.",
          },
        ]}
        note="Roadmap V2 / V3 — Le périmètre énergie s'étend progressivement selon la demande."
      />
      <FAQ
        faqs={energieFaqs}
        title="Questions fréquentes"
        highlight="sur l'énergie."
      />
      <ParlonsNous />
    </>
  );
};

export default EnergiePage;
