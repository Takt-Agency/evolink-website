import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiCalendar,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import FAQ from "../components/FAQ";

const contactFaqs = [
  {
    q: "Quel est le délai de réponse ?",
    a: "Sous 24h ouvrées pour toute demande envoyée via le formulaire ou par email. Pour une demande urgente, privilégiez le téléphone.",
  },
  {
    q: "Puis-je vous appeler directement ?",
    a: "Oui, au 06 10 54 18 72. Si on ne décroche pas, laissez un message ou envoyez un SMS — on rappelle dans la journée.",
  },
  {
    q: "Êtes-vous disponibles en région ?",
    a: "Nous travaillons partout en France, à 100% en distanciel. Un déplacement physique reste possible pour certaines missions de l'abonnement mensuel (audit bâtiment, etc.).",
  },
  {
    q: "Puis-je passer directement au RDV ?",
    a: "Oui, c'est même conseillé : utilisez la page Prendre RDV pour choisir un créneau précis. Le formulaire de contact est plutôt pour les questions générales.",
  },
];

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSent(true);
  };

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Une question ?"
        highlight="Écrivez-nous."
        description="Pour toute demande générale. Pour prendre RDV, utilisez plutôt le formulaire dédié."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <FiCheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-dark/70">
                    Nous revenons vers vous sous 24h ouvrées.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="bg-white border border-dark/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Nom complet <span className="text-accent">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-md border border-dark/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-md border border-dark/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="vous@entreprise.fr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Sujet
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, subject: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-md border border-dark/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="Objet de votre message"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-1.5">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-md border border-dark/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                        placeholder="Votre message…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-md transition-colors shadow-md"
                    >
                      <FiSend className="w-4 h-4" />
                      Envoyer le message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-4">
              <div className="bg-primary-light/40 rounded-2xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-dark/60 mb-4">
                  Coordonnées
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <FiMail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <a
                      href="mailto:contact@evolink.io"
                      className="text-dark hover:text-primary transition-colors font-medium"
                    >
                      contact@evolink.io
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiPhone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <a
                      href="tel:0610541872"
                      className="text-dark hover:text-primary transition-colors font-medium"
                    >
                      06 10 54 18 72
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiMapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-dark font-medium">France</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/rdv"
                className="block bg-dark text-white rounded-2xl p-6 hover:bg-dark-deep transition-colors"
              >
                <FiCalendar className="w-7 h-7 text-accent mb-3" />
                <h3 className="text-lg font-extrabold mb-1">Plutôt un RDV ?</h3>
                <p className="text-sm text-white/70 mb-3">
                  30 min, gratuit, sans engagement.
                </p>
                <span className="text-accent font-semibold text-sm">
                  Prendre RDV →
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <FAQ
        faqs={contactFaqs}
        title="Vos questions"
        highlight="sur le contact."
      />
    </>
  );
};

export default ContactPage;
