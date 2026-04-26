import { Link } from "react-router-dom";
import { FiClock, FiUsers, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  const stats = [
    {
      icon: <FiClock className="w-6 h-6 text-primary" />,
      value: "1 mois",
      label: "durée de la mission",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-accent" />,
      value: "3 réunions max",
      label: "pas plus",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-primary" />,
      value: "Audit gratuit",
      label: "sans engagement",
    },
  ];

  return (
    <section
      id="accueil"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="z-10">
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.4rem] font-extrabold text-dark leading-[1.1] tracking-tight">
              Gérer votre <span className="text-primary">PME</span>, c'est
              déjà un{" "}
              <span className="text-accent">métier à plein temps.</span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-dark/80 leading-relaxed">
              <span className="font-bold text-dark">EVOLINK</span> intervient
              sur vos contrats d'énergie, votre télécom et votre présence
              digitale. <span className="font-semibold">En 1 mois.</span> Un
              seul interlocuteur.{" "}
              <span className="font-semibold">Audit gratuit.</span>
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                to="/rdv"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold text-[15px] px-8 py-4 rounded-md transition-colors shadow-sm w-full sm:w-auto"
              >
                Prendre RDV
              </Link>
            </div>

            {/* 3 Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary-light/40 border border-dark/5"
                >
                  <div className="shrink-0 mt-0.5">{stat.icon}</div>
                  <div>
                    <div className="text-base font-bold text-dark leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-dark/70 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image with diagonal clip */}
          <div className="relative">
            <div className="hero-image-clip relative w-full aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://wazolab.fr/wp-content/uploads/2023/07/child-plays-in-an-astronaut-costume-2021-08-26-15-29-34-utc-min-min-1536x1081.jpg"
                alt="Dirigeant de PME"
                className="w-full h-full object-cover"
              />
              {/* Brand color overlay */}
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ backgroundColor: "#32b3ea", opacity: 0.55 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
