import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import ImagePlaceholder from "./ImagePlaceholder";

const ServiceDetail = ({
  badge,
  intro,
  features,
  process,
  perimetre,
  otherServices,
}) => {
  return (
    <>
      {/* Intro section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark leading-tight mb-6">
                {intro.title}{" "}
                <span className="text-primary">{intro.highlight}</span>
              </h2>
              <div className="space-y-5 text-base sm:text-[17px] text-dark/80 leading-relaxed">
                {intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {perimetre && (
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 text-accent-dark text-sm font-semibold">
                  <FiCheck className="w-4 h-4" />
                  {perimetre}
                </div>
              )}
            </div>
            <div className="order-first lg:order-last">
              <ImagePlaceholder
                ratio="aspect-[4/5]"
                alt={`Image ${badge}`}
                label={`Image ${badge}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="w-full bg-primary-light/30 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark leading-tight">
              Ce que vous obtenez{" "}
              <span className="text-accent">concrètement</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-dark/5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-extrabold text-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-dark/75 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark leading-tight">
              Comment ça se passe
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((s, i) => (
              <li
                key={i}
                className="relative bg-primary-light/30 rounded-2xl p-6 border border-dark/5"
              >
                <span className="absolute -top-4 left-6 px-3 py-1 rounded-md bg-accent text-white text-xs font-bold tracking-[0.2em] uppercase">
                  Étape {i + 1}
                </span>
                <h4 className="text-lg font-bold text-dark mt-4 mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-dark/70 leading-relaxed">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="w-full bg-primary-light/20 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h3 className="text-2xl font-extrabold text-dark mb-6">
            Découvrir nos autres services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between bg-white rounded-xl p-5 border border-dark/5 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                      s.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <div className="font-bold text-dark">{s.label}</div>
                    <div className="text-sm text-dark/60">{s.desc}</div>
                  </div>
                </div>
                <FiArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
