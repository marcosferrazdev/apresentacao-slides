import React from "react";
import { motion } from "motion/react";
import { CircleDot, Target, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function PneumothoraxTitleSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Target className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <CircleDot className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-center items-center text-center relative z-10"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4"
          >
            PNEUMOTÓRAX, DERRAME PLEURAL E EMPIEMA
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-2xl"
          />
          <h2 className="text-2xl text-blue-700 mt-4 font-medium">
            Doenças Pleurais
          </h2>
        </motion.div>

        {/* Medical Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="relative mx-auto max-w-2xl rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
            <ImageWithFallback
              src="/Pleurais 1.jpg"
              alt="Anatomia Pleural"
              className="w-full h-auto object-contain opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}