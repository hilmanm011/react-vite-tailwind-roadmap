// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function RoadmapTitle() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
      <span className="relative inline-block animate-gradient bg-[length:200%_200%]">
        🚀 Roadmap 2025
      </span>
    </motion.h2>
  );
}
