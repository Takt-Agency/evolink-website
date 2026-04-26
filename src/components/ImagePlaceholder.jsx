import { FiImage } from "react-icons/fi";

const ImagePlaceholder = ({
  src,
  alt = "",
  label = "Image à ajouter",
  ratio = "aspect-[4/3]",
  rounded = "rounded-2xl",
  className = "",
  variant = "light",
}) => {
  const variants = {
    light:
      "bg-primary-light/60 border-2 border-dashed border-primary/30 text-dark/50",
    dark: "bg-white/5 border-2 border-dashed border-white/20 text-white/60",
    accent:
      "bg-accent/10 border-2 border-dashed border-accent/40 text-dark/60",
  };

  if (src) {
    return (
      <div
        className={`relative w-full ${ratio} ${rounded} overflow-hidden ${className}`}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${ratio} ${rounded} flex flex-col items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      <FiImage className="w-10 h-10" />
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs opacity-60">{alt}</span>
    </div>
  );
};

export default ImagePlaceholder;
