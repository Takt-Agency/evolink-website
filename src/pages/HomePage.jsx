import Hero from "../components/Hero";
import ChiffresCles from "../components/ChiffresCles";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Methode from "../components/Methode";
import CasClients from "../components/CasClients";
import ParlonsNous from "../components/ParlonsNous";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ChiffresCles />
      <Mission cta />
      <Services cta />
      <Methode cta />
      <CasClients cta />
      <ParlonsNous />
    </>
  );
};

export default HomePage;
