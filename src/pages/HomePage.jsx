import Hero from "../components/Hero";
import ChiffresCles from "../components/ChiffresCles";
import Mission from "../components/Mission";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ChiffresCles />
      <Mission cta />
      <Services cta />
      {/* <Methode cta />
      <CasClients cta />
      <ParlonsNous /> */}
    </>
  );
};

export default HomePage;
