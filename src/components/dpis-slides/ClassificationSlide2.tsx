import React from "react";
import { motion } from "motion/react";
import { Shield, AlertTriangle, Zap } from "lucide-react";

export function ClassificationSlide2() {
  const autoimmuneDpis = [
    "Associadas a doenças do tecido conjuntivo (AR, esclerose sistêmica, lúpus)",
    "Pneumonia intersticial aguda rapidamente progressiva (anti-MDA5, vasculite ANCA)",
    "Relacionadas à vasculite associada ao ANCA"
  ];

  const exposureDpis = [
    "Pneumonite de hipersensibilidade",
    "Pneumoconioses",
    "Lesão pulmonar por radiação ou drogas (quimio, antibióticos etc.)",
    "Pneumonite eosinofílica (aguda/crônica)"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Shield className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <AlertTriangle className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Zap className="w-20 h-20 text-blue-300" />
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
            Autoimunidade e Exposição
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Autoimmune Related */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">
                Relacionadas à Autoimunidade
              </h3>
            </div>
            
            <div className="space-y-3 text-left">
              {autoimmuneDpis.map((dpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-blue-800 text-sm leading-relaxed">{dpi}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 p-3 bg-blue-50/70 rounded-lg border border-blue-200"
            >
              <p className="text-blue-700 text-xs italic">
                Sistema imune ataca o próprio organismo
              </p>
            </motion.div>
          </motion.div>

          {/* Exposure Related */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">
                Relacionadas à Exposição
              </h3>
            </div>
            
            <div className="space-y-3 text-left">
              {exposureDpis.map((dpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-orange-50/50 border border-orange-100"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-orange-800 text-sm leading-relaxed">{dpi}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-4 p-3 bg-orange-50/70 rounded-lg border border-orange-200"
            >
              <p className="text-orange-700 text-xs italic">
                Resposta a agentes externos identificáveis
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Visual Metaphor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 flex justify-center space-x-8"
        >
          <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border border-blue-300">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Autoimune</span>
          </div>
          <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg border border-orange-300">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <span className="text-orange-800 font-medium text-sm">Exposição</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}