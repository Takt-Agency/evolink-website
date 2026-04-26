import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="text-[8rem] font-extrabold text-primary leading-none">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-4">
          Page introuvable
        </h1>
        <p className="text-dark/70 mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            <FiHome className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-primary-light text-primary hover:bg-primary/20 font-semibold px-6 py-3 rounded-md transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
