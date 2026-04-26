import {
  FiZap,
  FiWifi,
  FiMonitor,
  FiSmartphone,
  FiServer,
  FiGlobe,
  FiHeadphones,
  FiTrendingDown,
  FiActivity,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import ServiceDetail from "../components/ServiceDetail";
import PerimetreFutur from "../components/PerimetreFutur";
import FAQ from "../components/FAQ";
import ParlonsNous from "../components/ParlonsNous";

const telecomFaqs = [
  {
    q: "Mes lignes vont-elles être interrompues pendant la migration ?",
    a: "Non. Nous coordonnons la bascule pour assurer une continuité de service. Les portabilités sont planifiées hors heures de production.",
  },
  {
    q: "Travaillez-vous avec tous les opérateurs ?",
    a: "Nous travaillons avec les principaux opérateurs B2B français — Orange Pro, SFR Business, Bouygues Telecom Entreprises et opérateurs spécialisés.",
  },
  {
    q: "Couvrez-vous l'infrastructure IT ?",
    a: "Oui : suivi du parc informatique, conseil sécurité des données, téléphonie IP, VPN. Nous coordonnons avec votre prestataire IT existant si nécessaire.",
  },
  {
    q: "Que se passe-t-il pour mes hors-forfait actuels ?",
    a: "Nous identifions tous les surcoûts (hors-forfaits, options dormantes, doublons de lignes) dès l'audit. Beaucoup de PME économisent 20 à 40% rien qu'en supprimant l'inutile.",
  },
];

const TelecomPage = () => {
  return (
    <>
      <PageHeader
        badge="📡 Service · Télécom"
        title="Lignes, mobiles, internet —"
        highlight="un seul interlocuteur."
        description="Votre connectivité est critique. Nous auditons vos contrats, identifions les surcoûts et renégocions à votre place."
        breadcrumb={[
          { label: "Nos services", to: "/services" },
          { label: "Télécom" },
        ]}
      />
      <ServiceDetail
        badge="télécom"
        intro={{
          title: "Vos abonnements télécom méritent",
          highlight: "un vrai audit.",
          paragraphs: [
            "Lignes fixes, mobiles, internet, infrastructure IT — votre entreprise dépend de ces services chaque jour. Pourtant, la plupart des PME ne savent pas si leurs contrats sont encore adaptés à leur usage.",
            "Nous faisons l'audit complet, identifions les surcoûts et renégocions les conditions.",
            "Un seul interlocuteur pour tout ce qui touche à votre connectivité.",
          ],
        }}
        features={[
          {
            icon: <FiSmartphone className="w-6 h-6" />,
            title: "Lignes mobiles",
            desc: "Audit des forfaits, mutualisation des lignes, options inutiles.",
          },
          {
            icon: <FiGlobe className="w-6 h-6" />,
            title: "Internet & fibre",
            desc: "Vérification du débit, du SLA et du prix par rapport au marché.",
          },
          {
            icon: <FiServer className="w-6 h-6" />,
            title: "Infrastructure IT",
            desc: "Conseil sur l'hébergement, la téléphonie IP, les VPN.",
          },
          {
            icon: <FiHeadphones className="w-6 h-6" />,
            title: "Standard téléphonique",
            desc: "Modernisation et optimisation de votre standard.",
          },
          {
            icon: <FiTrendingDown className="w-6 h-6" />,
            title: "Surcoûts détectés",
            desc: "Hors-forfaits, options dormantes, doublons de lignes.",
          },
          {
            icon: <FiActivity className="w-6 h-6" />,
            title: "Suivi qualité",
            desc: "Monitoring des incidents et accompagnement SAV.",
          },
        ]}
        process={[
          {
            title: "Audit gratuit",
            desc: "Récupération de vos factures et inventaire des lignes.",
          },
          {
            title: "Diagnostic",
            desc: "Identification des surcoûts et des risques.",
          },
          {
            title: "Renégociation",
            desc: "Mise en concurrence et négociation à votre place.",
          },
          {
            title: "Migration",
            desc: "Bascule sécurisée vers le nouveau prestataire.",
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
            to: "/services/digital",
            label: "Digital",
            desc: "Site, branding, outils CRM/ERP",
            icon: <FiMonitor className="w-5 h-5" />,
            color: "primary",
          },
        ]}
      />
      <PerimetreFutur
        badge="Périmètre étendu"
        items={[
          {
            title: "Sécurité données",
            desc: "Audit RGPD, sauvegardes, plan de continuité d'activité.",
          },
          {
            title: "Cybersécurité",
            desc: "Audit pare-feu, sensibilisation collaborateurs, MFA.",
          },
          {
            title: "Suivi parc IT",
            desc: "Inventaire matériel, renouvellement, gestion lifecycle.",
          },
          {
            title: "Téléphonie cloud",
            desc: "Migration vers solutions IP modernes (Teams, 3CX, Zoom).",
          },
          {
            title: "Réseau multi-sites",
            desc: "Architecture VPN, SD-WAN, optimisation interconnexions.",
          },
          {
            title: "Connectivité mobile pro",
            desc: "Forfaits roaming, IoT, M2M pour flottes mobiles.",
          },
        ]}
        note="Activable via abonnement mensuel — selon vos besoins et la criticité de votre infrastructure."
      />
      <FAQ
        faqs={telecomFaqs}
        title="Questions fréquentes"
        highlight="sur le télécom."
      />
      <ParlonsNous />
    </>
  );
};

export default TelecomPage;
