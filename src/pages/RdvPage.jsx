import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiZap,
  FiWifi,
  FiMonitor,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiCalendar,
  FiVideo,
  FiClock,
  FiSend,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import FAQ from "../components/FAQ";

const rdvFaqs = [
  {
    q: "Vous me rappelez quand exactement ?",
    a: "Sous 24h ouvrées après votre demande. Si vous avez choisi un créneau précis, nous le confirmons par email. Sinon, on vous propose 2 ou 3 créneaux compatibles.",
  },
  {
    q: "À quoi ressemble le premier RDV ?",
    a: "30 minutes en visio ou téléphone. Vous nous présentez votre situation, on vous explique ce qu'on peut faire (ou pas), on répond à vos questions. Pas de présentation commerciale interminable.",
  },
  {
    q: "Faut-il préparer quelque chose ?",
    a: "Non. Si vous avez une facture sous la main, c'est un plus. Sinon, on commence par parler — la collecte de documents vient ensuite, après l'audit.",
  },
  {
    q: "Et si finalement ça ne nous intéresse pas ?",
    a: "Aucun souci. Si on peut vous aider, on vous le dit. Si ce n'est pas le bon moment, on vous le dit aussi. Pas de relance commerciale agressive.",
  },
];

const TOTAL_STEPS = 3;

const RdvPage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    // Step 1 - Identité
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    // Step 2 - Besoin
    services: [],
    urgency: "",
    message: "",
    // Step 3 - Créneau
    preferredDate: "",
    preferredTime: "",
    format: "visio",
    consent: false,
  });

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleService = (service) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = "Champ requis";
      if (!form.lastName.trim()) e.lastName = "Champ requis";
      if (!form.email.trim()) e.email = "Champ requis";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Email invalide";
      if (!form.phone.trim()) e.phone = "Champ requis";
      if (!form.company.trim()) e.company = "Champ requis";
      if (!form.companySize) e.companySize = "Sélectionnez une option";
    }
    if (step === 2) {
      if (form.services.length === 0)
        e.services = "Sélectionnez au moins un service";
      if (!form.urgency) e.urgency = "Sélectionnez une option";
    }
    if (step === 3) {
      if (!form.preferredDate) e.preferredDate = "Date requise";
      if (!form.preferredTime) e.preferredTime = "Créneau requis";
      if (!form.consent) e.consent = "Vous devez accepter";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHeader
          badge="Confirmation"
          title="Votre demande est"
          highlight="bien envoyée."
          description="Nous revenons vers vous sous 24h ouvrées pour confirmer le créneau."
          breadcrumb={[{ label: "Prendre RDV" }]}
        />
        <section className="w-full bg-white py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <FiCheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-extrabold text-dark mb-4">
              Merci {form.firstName} !
            </h2>
            <p className="text-dark/70 leading-relaxed mb-8">
              Nous avons bien reçu votre demande de rendez-vous pour le{" "}
              <span className="font-semibold text-dark">
                {form.preferredDate} à {form.preferredTime}
              </span>{" "}
              en{" "}
              <span className="font-semibold text-dark">
                {form.format === "visio" ? "visioconférence" : "téléphone"}
              </span>
              . Un email de confirmation va vous être envoyé à{" "}
              <span className="font-semibold text-dark">{form.email}</span>.
            </p>
            <div className="bg-primary-light/40 rounded-xl p-6 text-left mb-8">
              <h3 className="font-bold text-dark mb-3">Prochaines étapes :</h3>
              <ul className="space-y-2 text-sm text-dark/80">
                <li className="flex gap-2">
                  <FiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Nous validons votre créneau sous 24h ouvrées
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Vous recevez un lien de visio (ou un appel)
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Préparez vos questions, on s'occupe du reste
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <FiArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        badge="Premier échange"
        title="Prenons"
        highlight="rendez-vous."
        description="30 minutes, en visio ou par téléphone. Gratuit, sans engagement. On fait le point sur votre situation."
        breadcrumb={[{ label: "Prendre RDV" }]}
      />

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: form */}
            <div className="lg:col-span-2">
              {/* Stepper */}
              <Stepper currentStep={step} />

              <form
                onSubmit={submit}
                className="bg-white border border-dark/10 rounded-2xl p-6 md:p-8 shadow-sm"
              >
                {step === 1 && (
                  <Step1 form={form} update={update} errors={errors} />
                )}
                {step === 2 && (
                  <Step2
                    form={form}
                    update={update}
                    toggleService={toggleService}
                    errors={errors}
                  />
                )}
                {step === 3 && (
                  <Step3 form={form} update={update} errors={errors} />
                )}

                {/* Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prev}
                      className="inline-flex items-center gap-2 text-dark/70 hover:text-dark font-semibold px-4 py-2 transition-colors"
                    >
                      <FiArrowLeft className="w-4 h-4" />
                      Retour
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={next}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
                    >
                      Suivant
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-md transition-colors shadow-md"
                    >
                      <FiSend className="w-4 h-4" />
                      Envoyer ma demande
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Right: info sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-dark text-white rounded-2xl p-6 space-y-5">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                    Votre RDV
                  </span>
                  <h3 className="text-xl font-extrabold">
                    Un échange utile,
                    <br />
                    sans engagement.
                  </h3>
                </div>

                <ul className="space-y-3 text-sm">
                  <Item icon={<FiClock />} text="30 minutes" />
                  <Item icon={<FiVideo />} text="Visio ou téléphone" />
                  <Item icon={<FiCheckCircle />} text="100% gratuit" />
                  <Item icon={<FiCheckCircle />} text="Aucun engagement" />
                </ul>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Si on peut vous aider, on vous le dit.
                    <br />
                    Si ce n'est pas le bon moment, on vous le dit aussi.
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-xs text-white/50 mb-1">Une question ?</p>
                  <a
                    href="tel:0610541872"
                    className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors"
                  >
                    <FiPhone className="w-4 h-4 text-primary" />
                    06 10 54 18 72
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQ
        faqs={rdvFaqs}
        title="Avant de prendre RDV,"
        highlight="quelques réponses."
        intro="Les questions que se posent souvent les dirigeants avant un premier échange."
      />
    </>
  );
};

const Item = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-accent">
      {icon}
    </span>
    <span className="font-medium">{text}</span>
  </li>
);

const Stepper = ({ currentStep }) => {
  const steps = [
    { n: 1, label: "Vos coordonnées" },
    { n: 2, label: "Votre besoin" },
    { n: 3, label: "Créneau" },
  ];
  return (
    <ol className="flex items-center gap-2 mb-6">
      {steps.map((s, i) => (
        <li key={s.n} className="flex-1 flex items-center gap-2">
          <div className="flex flex-col items-center flex-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                currentStep === s.n
                  ? "bg-primary text-white"
                  : currentStep > s.n
                  ? "bg-accent text-white"
                  : "bg-primary-light text-dark/40"
              }`}
            >
              {currentStep > s.n ? <FiCheckCircle className="w-5 h-5" /> : s.n}
            </div>
            <span
              className={`mt-2 text-xs font-semibold text-center ${
                currentStep >= s.n ? "text-dark" : "text-dark/40"
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 transition-colors ${
                currentStep > s.n ? "bg-accent" : "bg-primary-light"
              }`}
            />
          )}
        </li>
      ))}
    </ol>
  );
};

const Field = ({ label, error, children, required }) => (
  <div>
    <label className="block text-sm font-semibold text-dark mb-1.5">
      {label}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
    )}
  </div>
);

const inputClass =
  "w-full px-4 py-3 rounded-md border border-dark/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark placeholder:text-dark/40";

const Step1 = ({ form, update, errors }) => (
  <div className="space-y-5">
    <header className="mb-6">
      <h2 className="text-2xl font-extrabold text-dark mb-2">
        Vos coordonnées
      </h2>
      <p className="text-sm text-dark/60">
        Pour qu'on puisse vous recontacter au bon endroit.
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Prénom" error={errors.firstName} required>
        <div className="relative">
          <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Marie"
            className={`${inputClass} pl-10`}
          />
        </div>
      </Field>
      <Field label="Nom" error={errors.lastName} required>
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => update("lastName", e.target.value)}
          placeholder="Dupont"
          className={inputClass}
        />
      </Field>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Field label="Email professionnel" error={errors.email} required>
        <div className="relative">
          <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="marie@entreprise.fr"
            className={`${inputClass} pl-10`}
          />
        </div>
      </Field>
      <Field label="Téléphone" error={errors.phone} required>
        <div className="relative">
          <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="06 10 54 18 72"
            className={`${inputClass} pl-10`}
          />
        </div>
      </Field>
    </div>

    <Field label="Entreprise" error={errors.company} required>
      <div className="relative">
        <FiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40" />
        <input
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder="Nom de votre société"
          className={`${inputClass} pl-10`}
        />
      </div>
    </Field>

    <Field label="Taille de l'entreprise" error={errors.companySize} required>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {["1-9", "10-49", "50-249", "250+"].map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => update("companySize", size)}
            className={`px-4 py-2.5 rounded-md border-2 font-semibold text-sm transition-all ${
              form.companySize === size
                ? "border-primary bg-primary/5 text-primary"
                : "border-dark/10 text-dark/70 hover:border-primary/40"
            }`}
          >
            {size} salariés
          </button>
        ))}
      </div>
    </Field>
  </div>
);

const Step2 = ({ form, update, toggleService, errors }) => {
  const services = [
    { id: "energie", label: "Énergie", icon: <FiZap className="w-5 h-5" /> },
    { id: "telecom", label: "Télécom", icon: <FiWifi className="w-5 h-5" /> },
    { id: "digital", label: "Digital", icon: <FiMonitor className="w-5 h-5" /> },
  ];

  const urgencies = [
    { id: "asap", label: "Le plus tôt possible" },
    { id: "month", label: "Dans le mois" },
    { id: "quarter", label: "Dans le trimestre" },
    { id: "explore", label: "J'explore juste" },
  ];

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h2 className="text-2xl font-extrabold text-dark mb-2">
          Votre besoin
        </h2>
        <p className="text-sm text-dark/60">
          Sélectionnez les sujets qui vous intéressent. Vous pouvez en choisir
          plusieurs.
        </p>
      </header>

      <Field label="Sujets d'intérêt" error={errors.services} required>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((s) => {
            const checked = form.services.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggleService(s.id)}
                className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                  checked
                    ? "border-primary bg-primary/5"
                    : "border-dark/10 hover:border-primary/40"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${
                    checked
                      ? "bg-primary text-white"
                      : "bg-primary-light text-primary"
                  }`}
                >
                  {s.icon}
                </div>
                <div className="font-bold text-dark">{s.label}</div>
                {checked && (
                  <FiCheckCircle className="absolute top-3 right-3 w-5 h-5 text-accent" />
                )}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Quelle est votre urgence ?" error={errors.urgency} required>
        <div className="grid grid-cols-2 gap-2">
          {urgencies.map((u) => (
            <button
              key={u.id}
              type="button"
              onClick={() => update("urgency", u.id)}
              className={`px-4 py-3 rounded-md border-2 font-semibold text-sm transition-all ${
                form.urgency === u.id
                  ? "border-accent bg-accent/5 text-accent-dark"
                  : "border-dark/10 text-dark/70 hover:border-accent/40"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Décrivez votre situation (facultatif)">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          placeholder="Ex : Nous avons signé nos contrats à la création il y a 3 ans, jamais révisés…"
          className={`${inputClass} resize-none`}
        />
      </Field>
    </div>
  );
};

const Step3 = ({ form, update, errors }) => {
  const today = new Date().toISOString().split("T")[0];
  const slots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00",
  ];

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h2 className="text-2xl font-extrabold text-dark mb-2">
          Votre créneau
        </h2>
        <p className="text-sm text-dark/60">
          Choisissez votre préférence — nous confirmons sous 24h ouvrées.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Date souhaitée" error={errors.preferredDate} required>
          <div className="relative">
            <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/40 pointer-events-none" />
            <input
              type="date"
              value={form.preferredDate}
              min={today}
              onChange={(e) => update("preferredDate", e.target.value)}
              className={`${inputClass} pl-10`}
            />
          </div>
        </Field>
        <Field label="Format" required>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => update("format", "visio")}
              className={`px-3 py-2.5 rounded-md border-2 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                form.format === "visio"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-dark/10 text-dark/70 hover:border-primary/40"
              }`}
            >
              <FiVideo className="w-4 h-4" /> Visio
            </button>
            <button
              type="button"
              onClick={() => update("format", "phone")}
              className={`px-3 py-2.5 rounded-md border-2 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                form.format === "phone"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-dark/10 text-dark/70 hover:border-primary/40"
              }`}
            >
              <FiPhone className="w-4 h-4" /> Téléphone
            </button>
          </div>
        </Field>
      </div>

      <Field label="Créneau préféré" error={errors.preferredTime} required>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => update("preferredTime", slot)}
              className={`px-3 py-2.5 rounded-md border-2 font-semibold text-sm transition-all ${
                form.preferredTime === slot
                  ? "border-accent bg-accent/5 text-accent-dark"
                  : "border-dark/10 text-dark/70 hover:border-accent/40"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </Field>

      {/* Recap */}
      <div className="bg-primary-light/40 rounded-xl p-5">
        <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-dark/60 mb-3">
          Récapitulatif
        </h4>
        <ul className="text-sm text-dark/80 space-y-1.5">
          <li>
            <strong>Contact :</strong> {form.firstName} {form.lastName} —{" "}
            {form.company || "Entreprise"}
          </li>
          <li>
            <strong>Email :</strong> {form.email || "—"}
          </li>
          <li>
            <strong>Sujets :</strong>{" "}
            {form.services.length > 0
              ? form.services.join(", ")
              : "Aucun sélectionné"}
          </li>
          <li>
            <strong>Format :</strong>{" "}
            {form.format === "visio" ? "Visioconférence" : "Téléphone"}
          </li>
        </ul>
      </div>

      <Field error={errors.consent}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="w-5 h-5 mt-0.5 rounded border-dark/20 text-accent focus:ring-accent"
          />
          <span className="text-sm text-dark/80 leading-relaxed">
            J'accepte que mes données soient utilisées par EVOLINK pour me
            recontacter.{" "}
            <Link
              to="/politique-confidentialite"
              className="text-primary hover:underline"
            >
              Voir la politique de confidentialité
            </Link>
            .
          </span>
        </label>
      </Field>
    </div>
  );
};

export default RdvPage;
