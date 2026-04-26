import { FiClock, FiUsers, FiCheckCircle, FiVideo, FiZap, FiAward } from "react-icons/fi";

const ChiffresCles = ({ variant = "light" }) => {
  const stats = [
    {
      icon: <FiClock className="w-5 h-5" />,
      value: "1 mois",
      label: "Durée mission",
      color: "primary",
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "3 réunions",
      label: "Maximum",
      color: "accent",
    },
    {
      icon: <FiVideo className="w-5 h-5" />,
      value: "100%",
      label: "Distanciel",
      color: "primary",
    },
    {
      icon: <FiCheckCircle className="w-5 h-5" />,
      value: "0 €",
      label: "Audit initial",
      color: "accent",
    },
    {
      icon: <FiZap className="w-5 h-5" />,
      value: "3",
      label: "Domaines couverts",
      color: "primary",
    },
    {
      icon: <FiAward className="w-5 h-5" />,
      value: "1 seul",
      label: "Interlocuteur",
      color: "accent",
    },
  ];

  const isDark = variant === "dark";

  return (
    <section
      className={`w-full py-12 sm:py-14 lg:py-16 ${
        isDark ? "bg-dark text-white" : "bg-primary-light/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-dark/5"
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-3 text-white ${
                  s.color === "primary" ? "bg-primary" : "bg-accent"
                }`}
              >
                {s.icon}
              </div>
              <div
                className={`text-lg sm:text-xl lg:text-2xl font-extrabold leading-tight ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                {s.value}
              </div>
              <div
                className={`text-[10px] sm:text-xs uppercase tracking-[0.15em] mt-1 leading-tight ${
                  isDark ? "text-white/60" : "text-dark/55"
                }`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiffresCles;
