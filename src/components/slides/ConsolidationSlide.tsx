import React from "react";
import { motion } from "motion/react";
import {
  Square,
  RotateCcw,
  TrendingDown,
  Monitor,
} from "lucide-react";

export function ConsolidationSlide() {
  const concepts = [
    {
      icon: Square,
      title: "Consolidação",
      description:
        "Preenchimento do espaço alveolar por exsudato inflamatório",
      details: "Substituição do ar por líquido/células",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: RotateCcw,
      title: "Shunt Intrapulmonar",
      description: "Perfusão sem ventilação adequada (V/Q = 0)",
      details: "Sangue passa pelos alvéolos sem oxigenação",
      color: "from-red-500 to-red-700",
    },
    {
      icon: TrendingDown,
      title: "Hipoxemia",
      description: "Redução da oxigenação",
      details: "Consequência direta do shunt pulmonar",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Monitor,
      title: "Correlação Radiológica",
      description: "Opacidade branca no RX e TC de tórax",
      details: "Visualização da consolidação",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Consolidação Pulmonar e Troca Gasosa
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "280px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-4"
        />
        <h2 className="text-xl text-blue-700">
          Fisiopatologia da Hipoxemia
        </h2>
      </motion.div>

      {/* Main Concepts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {concepts.map((concept, index) => {
          const IconComponent = concept.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
              }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.15,
                }}
                className={`w-16 h-16 bg-gradient-to-r ${concept.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.15,
                }}
                className="font-semibold text-blue-900 mb-3 text-center"
              >
                {concept.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.15,
                }}
                className="text-blue-700 text-sm text-center mb-2 leading-relaxed"
              >
                {concept.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.15,
                }}
                className="text-blue-600 text-xs text-center italic"
              >
                {concept.details}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8 border border-blue-200 shadow-lg">
          <h3 className="text-xl font-semibold text-center text-blue-900 mb-6">
            Sequência Fisiopatológica
          </h3>

          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex-1 text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Square className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-blue-900">
                Exsudato
              </p>
              <p className="text-xs text-blue-700">
                preenche alvéolos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              className="w-8 h-1 bg-blue-400"
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex-1 text-center"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-blue-900">
                Shunt V/Q = 0
              </p>
              <p className="text-xs text-blue-700">
                perfusão sem ventilação
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              className="w-8 h-1 bg-red-400"
            />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="flex-1 text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-blue-900">
                Hipoxemia
              </p>
              <p className="text-xs text-blue-700">↓ PaO₂</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}