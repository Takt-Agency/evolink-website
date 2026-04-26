import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiZap,
  FiWifi,
  FiMonitor,
  FiSend,
  FiCheckCircle,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter subscription:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const columns = [
    {
      title: "Services",
      links: [
        { label: "Énergie", to: "/services/energie", icon: <FiZap className="w-3.5 h-3.5 text-primary" /> },
        { label: "Télécom", to: "/services/telecom", icon: <FiWifi className="w-3.5 h-3.5 text-accent" /> },
        { label: "Digital", to: "/services/digital", icon: <FiMonitor className="w-3.5 h-3.5 text-primary" /> },
        { label: "Tous nos services", to: "/services" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Notre vision", to: "/vision" },
        { label: "Notre méthode", to: "/methode" },
        { label: "Cas clients", to: "/cas-clients" },
        { label: "Media", to: "/media" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  const socials = [
    { icon: <FiLinkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
    { icon: <FiTwitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <FiInstagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <FiYoutube className="w-4 h-4" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-dark text-white overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#32b3ea" }}
      />
      <div
        className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#3ad19c" }}
      />

      {/* Top Newsletter strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 text-center lg:text-left">
            <div className="lg:max-w-md">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Newsletter
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Restez <span className="text-accent">informé</span>.
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-1">
                Conseils mensuels pour mieux piloter votre PME. Pas de spam,
                juste de la valeur.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full lg:w-auto lg:min-w-[440px]"
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@entreprise.fr"
                    className="w-full pl-10 pr-3 py-3.5 rounded-md bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-accent focus:bg-white/10 outline-none transition-all text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-md transition-all whitespace-nowrap ${
                    subscribed
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {subscribed ? (
                    <>
                      <FiCheckCircle className="w-4 h-4" />
                      Inscrit
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      S'inscrire
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-white/40 leading-relaxed pt-2 text-center sm:text-left">
                En vous inscrivant, vous acceptez notre{" "}
                <Link
                  to="/politique-confidentialite"
                  className="underline hover:text-accent"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand block */}
          <div className="col-span-12 lg:col-span-4">
            <img src={logo} alt="Evolink" className="h-10 w-auto" />
            <p className="mt-5 text-white/75 text-[15px] leading-relaxed max-w-sm">
              Le partenaire des dirigeants de PME pour optimiser énergie,
              télécom et digital.{" "}
              <span className="text-white font-semibold">
                Un seul interlocuteur, en 1 mois.
              </span>
            </p>

            {/* Specialty pill */}
            <div className="mt-5 inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <span className="font-semibold text-white/90">Consulting B2B</span>
              <span className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <FiZap className="w-3 h-3 text-primary" /> Énergie
              </span>
              <span className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <FiWifi className="w-3 h-3 text-accent" /> Télécom
              </span>
              <span className="text-white/30">·</span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <FiMonitor className="w-3 h-3 text-primary" /> Digital
              </span>
            </div>

          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="col-span-6 lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 relative inline-block">
                {col.title}
                <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
              </h4>
              <ul className="space-y-3 text-[14px]">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-12 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5 relative inline-block">
              Contact
              <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href="mailto:contact@evolink.io"
                  className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors shrink-0">
                    <FiMail className="w-4 h-4 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="font-medium">contact@evolink.io</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0610541872"
                  className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-accent/20 flex items-center justify-center transition-colors shrink-0">
                    <FiPhone className="w-4 h-4 text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">
                      Téléphone
                    </span>
                    <span className="font-medium">06 10 54 18 72</span>
                  </span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/80">
                <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-4 h-4 text-primary" />
                </span>
                <span>
                  <span className="block text-xs text-white/50 uppercase tracking-wider">
                    Localisation
                  </span>
                  <span className="font-medium">France</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>
              © {year}{" "}
              <span className="font-semibold text-white">EVOLINK</span> — Tous
              droits réservés.
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent text-white/70 hover:text-white border border-white/10 hover:border-accent flex items-center justify-center transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <Link
              to="/mentions-legales"
              className="text-white/70 hover:text-accent transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/politique-confidentialite"
              className="text-white/70 hover:text-accent transition-colors"
            >
              Politique de confidentialité
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/cgv"
              className="text-white/70 hover:text-accent transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
