import { Cross } from "lucide-react";
//import { motion } from "motion/react"; // Remover ou comentar
import { motion } from "framer-motion";

interface ChurchAvatarProps {
  size?: "sm" | "md" | "lg";
}

export function ChurchAvatar({ size = "md" }: ChurchAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} rounded-full border-3 border-white shadow-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center`}
      animate={{ 
        scale: [1, 1.02, 1],
        boxShadow: [
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "0 15px 20px -3px rgba(236, 72, 153, 0.2), 0 8px 8px -4px rgba(236, 72, 153, 0.06)",
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        ]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 2, -2, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Cross className="w-3/4 h-3/4 text-white" />
      </motion.div>
    </motion.div>
  );
}