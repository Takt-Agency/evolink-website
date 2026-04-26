import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiPhone,
  FiMenu,
  FiX,
  FiChevronDown,
  FiZap,
  FiWifi,
  FiMonitor,
} from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    {
      label: "Énergie",
      to: "/services/energie",
      icon: <FiZap className="w-5 h-5 text-primary" />,
      desc: "Solutions énergétiques durables",
    },
    {
      label: "Télécom",
      to: "/services/telecom",
      icon: <FiWifi className="w-5 h-5 text-accent" />,
      desc: "Connectivité et infrastructure",
    },
    {
      label: "Digital",
      to: "/services/digital",
      icon: <FiMonitor className="w-5 h-5 text-primary" />,
      desc: "Transformation digitale",
    },
  ];

  const navLinks = [
    { label: "Notre vision", to: "/vision" },
    { label: "Nos services", to: "/services", dropdown: services },
    { label: "Notre méthode", to: "/methode" },
    { label: "Cas clients", to: "/cas-clients" },
    { label: "Media", to: "/media" },
  ];

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-dark/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMobile}>
          <img src={logo} alt="Evolink" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              (link.dropdown && location.pathname.startsWith(link.to));
            return (
              <li key={link.label} className="relative group">
                <NavLink
                  to={link.to}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-dark"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <FiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </NavLink>

                {link.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-dark/10 p-3 w-72">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-light transition-colors"
                        >
                          <div className="mt-0.5">{item.icon}</div>
                          <div>
                            <div className="text-[15px] font-semibold text-dark">
                              {item.label}
                            </div>
                            <div className="text-xs text-dark/60 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-dark/70 bg-primary-light px-2 py-0.5 rounded flex items-center gap-1">
              Contactez-nous <span>→</span>
            </span>
            <a
              href="tel:0610541872"
              className="text-[15px] font-semibold text-dark mt-1 flex items-center gap-2"
            >
              <FiPhone className="w-4 h-4 text-primary" />
              06 10 54 18 72
            </a>
          </div>
          <Link
            to="/rdv"
            className="bg-accent hover:bg-accent-dark text-white font-semibold text-[15px] px-6 py-3 rounded-md transition-colors shadow-sm"
          >
            Prendre RDV
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-dark p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-dark/10 px-4 sm:px-6 py-4 max-h-[calc(100vh-72px)] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-[15px] font-medium text-dark"
                    >
                      {link.label}
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="mt-3 ml-2 flex flex-col gap-3 border-l-2 border-primary-light pl-4">
                        <li>
                          <Link
                            to={link.to}
                            onClick={closeMobile}
                            className="flex items-center gap-2 text-sm font-semibold text-primary"
                          >
                            Tous les services
                          </Link>
                        </li>
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.to}
                              onClick={closeMobile}
                              className="flex items-center gap-2 text-sm text-dark hover:text-primary"
                            >
                              {item.icon}
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    onClick={closeMobile}
                    className="flex items-center justify-between text-[15px] font-medium text-dark"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3 border-t border-dark/10">
              <a
                href="tel:0610541872"
                className="flex items-center gap-2 text-[15px] font-semibold text-dark mb-3"
              >
                <FiPhone className="w-4 h-4 text-primary" />
                06 10 54 18 72
              </a>
              <Link
                to="/rdv"
                onClick={closeMobile}
                className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md"
              >
                Prendre RDV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
