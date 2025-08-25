// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ROADMAP } from "../constants/roadmap";
import RoadmapTitle from "./RoadmapTitle";

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // klik 2x untuk close
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center py-16 px-4">
      {/* Title */}
      <RoadmapTitle />

      <div className="relative w-full max-w-3xl space-y-10 md:space-y-16">
        {ROADMAP.map((item, index) => (
          <div key={index} className="relative w-full">
            {/* Main Card */}
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`relative z-20 rounded-2xl p-6 cursor-pointer transition-all duration-300
              backdrop-blur-md bg-white/80 shadow-md
              ${
                activeIndex === index
                  ? "ring-2 ring-indigo-500 shadow-lg shadow-indigo-200"
                  : "hover:shadow-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50"
              }`}
              onClick={() => toggleCard(index)}
            >
              <h3
                className={`text-xl font-extrabold transition-colors duration-300 
                ${
                  activeIndex === index
                    ? "text-indigo-600"
                    : "text-slate-700 group-hover:text-indigo-500"
                }`}
              >
                {item.quarter}
              </h3>
              <p className="text-slate-600 font-semibold capitalize mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>

            {/* Connector line (show if active) */}
            {activeIndex === index && (
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 h-6/12 w-1 bg-slate-300"
                  />
                )}
              </AnimatePresence>
            )}

            {/* Detail Card (show if active) */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 mt-8"
                >
                  <div className="bg-indigo-50 border border-indigo-200 shadow-sm rounded-lg p-4">
                    <p className="text-sm text-slate-700">{item.detail}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
