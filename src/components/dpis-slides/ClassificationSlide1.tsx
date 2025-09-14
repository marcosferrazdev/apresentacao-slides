import React from "react";
import { motion } from "motion/react";
import { HelpCircle, Microscope, Activity } from "lucide-react";

export function ClassificationSlide1() {
  const idiopathicDpis = [
    "Fibrose pulmonar idiopática (FPI)",
    "Pneumonia intersticial não específica idiopática",
    "Pneumonia intersticial aguda idiopática",
    "Pneumonia organizante criptogênica",
    "Pneumonia intersticial descamativa",
    "Doença respiratória bronquiolítica-intersticial",
    "Fibroelastose pleuroparenquimatosa",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <HelpCircle className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Microscope className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Activity className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Como Classificar as DPIs?
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-xl text-blue-700 mt-4">
            Classificação por Etiologia
          </h2>
        </motion.div>

        {/* Idiopathic DPIs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-sm"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-blue-900">
              DPIs Idiopáticas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            {idiopathicDpis.map((dpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                <span className="text-blue-800 font-medium">
                  {dpi}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-6 p-4 bg-blue-50/70 rounded-lg border border-blue-200"
          >
            <p className="text-blue-700 text-sm italic">
              * Etiologia desconhecida - diagnóstico por
              exclusão e por achados na TC.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}