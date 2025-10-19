import { ImageWithFallback } from './figma/ImageWithFallback';

interface IrisAvatarProps {
  size?: "m"s | "md" | "lg";
}

export function IrisAvatar({ size = "md" }: IrisAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-3 border-white shadow-lg bg-white p-1`}>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1685040771396-cca850d734fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBhc3Npc3RhbnQlMjB3b21hbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc1NjQzODk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Nossa Senhora - Virgem Maria"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}