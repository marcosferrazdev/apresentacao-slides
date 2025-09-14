import React from "react";
import { motion } from "motion/react";
import { Circle, FileText, MoreHorizontal } from "lucide-react";

export function ClassificationSlide3() {
  const cysticDpis = [
    "Proteínose alveolar pulmonar",
    "Linfangioleiomiomatose",
    "Histiocitose de células de Langerhans"
  ];

  const otherDpis = [
    "Sarcoidose",
    "Pós-infecciosa",
    "Associada a doenças malignas",
    "Não classificável"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Circle className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <FileText className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <MoreHorizontal className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Classificação das DPIs
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-xl text-blue-700 mt-4">
            Padrões Especiais e Outras Causas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cystic/Alveolar Filling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <Circle className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">
                Com Cistos ou Preenchimento Alveolar
              </h3>
            </div>
            
            <div className="space-y-3 text-left">
              {cysticDpis.map((dpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-purple-800 text-sm leading-relaxed">{dpi}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 p-3 bg-purple-50/70 rounded-lg border border-purple-200"
            >
              <p className="text-purple-700 text-xs italic">
                Padrões radiológicos característicos
              </p>
            </motion.div>
          </motion.div>

          {/* Other/Rare */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <MoreHorizontal className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">
                Outras/Raras
              </h3>
            </div>
            
            <div className="space-y-3 text-left">
              {otherDpis.map((dpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-800 text-sm leading-relaxed">{dpi}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-4 p-3 bg-gray-50/70 rounded-lg border border-gray-200"
            >
              <p className="text-gray-700 text-xs italic">
                Diagnósticos de exclusão ou raros
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200"
        >
          <h4 className="text-lg font-semibold text-blue-900 mb-4">
            Resumo da Classificação
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full" />
              <span className="text-blue-800">Idiopáticas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full" />
              <span className="text-orange-800">Exposição</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full" />
              <span className="text-purple-800">Císticas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full" />
              <span className="text-gray-800">Outras</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}