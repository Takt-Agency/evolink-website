import PageHeader from "../components/PageHeader";
import Vision from "../components/Vision";
import EngagementEthique from "../components/EngagementEthique";
import Equipe from "../components/Equipe";
import ChiffresCles from "../components/ChiffresCles";
import ParlonsNous from "../components/ParlonsNous";

const VisionPage = () => {
  return (
    <>
      <PageHeader
        badge="Notre vision"
        title="Notre vision,"
        highlight="née du terrain."
        description="Construire des PME plus solides en agissant là où ça compte vraiment : énergie, télécom, digital. Avec un seul interlocuteur."
        breadcrumb={[{ label: "Notre vision" }]}
      />
      <Vision />
      <EngagementEthique />
      <Equipe />
      <ChiffresCles />
      <ParlonsNous />
    </>
  );
};

export default VisionPage;
