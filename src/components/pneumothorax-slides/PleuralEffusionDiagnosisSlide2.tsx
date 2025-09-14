import React from "react";
import { motion } from "motion/react";
import { Activity, Stethoscope, Droplets } from "lucide-react";

export function PleuralEffusionDiagnosisSlide2() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Activity className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Droplets className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Derrame Pleural
          </h1>
          <h2 className="text-2xl text-blue-700 font-medium">
            Diagnóstico - Imagem
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Medical Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center h-full"
        >
          <div className="relative max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl border-2 border-blue-200">
            <img
              src="/Pleurais 5.jpg"
              alt="Diagnóstico por Imagem do Derrame Pleural"
              className="w-full h-auto object-contain opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}