import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const Mission = ({ cta = false }) => {
  return (
    <section id="vision" className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Container card */}
        <div className="relative bg-dark rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Text content */}
              <div className="lg:col-span-8 z-10">
                {/* Badge */}
                <span className="inline-block px-4 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8">
                  Notre mission
                </span>

                {/* Heading */}
                <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.8rem] xl:text-[3.2rem] font-extrabold text-white leading-[1.4] tracking-tight">
                  Libérer les{" "}
                  <span className="text-primary">dirigeants de PME</span>{" "}
                  des contraintes opérationnelles pour qu'ils se concentrent
                  sur leur{" "}
                  <span className="text-accent">vrai métier.</span>
                </h2>

                {cta && (
                  <div className="mt-8">
                    <Link
                      to="/vision"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-6 py-3 rounded-md transition-all shadow-lg hover:shadow-xl"
                    >
                      Découvrir notre vision
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Image placeholder */}
              <div className="lg:col-span-4 flex justify-end items-center">
                <ImagePlaceholder
                  variant="dark"
                  ratio="aspect-square"
                  alt="Visuel mission EVOLINK"
                  label="Image mission"
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
