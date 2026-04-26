import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";

const PageHeader = ({ badge, title, highlight, description, breadcrumb = [] }) => {
  return (
    <section className="relative w-full bg-dark text-white overflow-hidden">
      {/* Decorative gradients */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#32b3ea" }}
      />
      <div
        className="absolute -bottom-24 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: "#3ad19c" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-white/60 mb-5 sm:mb-6">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FiHome className="w-3.5 h-3.5" />
            Accueil
          </Link>
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5 min-w-0">
              <FiChevronRight className="w-3.5 h-3.5 shrink-0" />
              {b.to ? (
                <Link to={b.to} className="hover:text-white transition-colors truncate">
                  {b.label}
                </Link>
              ) : (
                <span className="text-white truncate">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-5 sm:mb-6 break-words">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-4xl">
          {title}{" "}
          {highlight && <span className="text-accent">{highlight}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
