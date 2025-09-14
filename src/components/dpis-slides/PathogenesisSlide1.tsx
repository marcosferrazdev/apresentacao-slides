import React from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Dna,
  Bug,
  Clock,
  Zap,
} from "lucide-react";

export function PathogenesisSlide1() {
  const riskFactors = [
    {
      icon: AlertTriangle,
      title: "Gatilhos Ambientais",
      items: [
        "Poeiras",
        "Mofos",
        "Produtos químicos",
        "Asbesto",
      ],
      color: "orange",
    },
    {
      icon: Dna,
      title: "Suscetibilidade Genética",
      items: [
        "Polimorfismos genéticos",
        "História familiar",
        "Predisposição hereditária",
      ],
      color: "blue",
    },
    {
      icon: Bug,
      title: "Infecções",
      items: ["COVID-19"],
      color: "red",
    },
    {
      icon: Clock,
      title: "Envelhecimento",
      items: [
        "Redução da capacidade regenerativa",
        "Alterações imunológicas",
      ],
      color: "gray",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Dna className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <AlertTriangle className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Bug className="w-20 h-20 text-blue-300" />
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
          className="mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
            Como as DPIs se Desenvolvem?
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Fatores de Risco e Mecanismo Inicial
          </h2>
        </motion.div>

        {/* Risk Factors Grid */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          {riskFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.2,
              }}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <factor.icon
                  className={`w-6 h-6 md:w-8 md:h-8 text-${factor.color}-600 mr-2 md:mr-3`}
                />
                <h3
                  className={`text-base md:text-lg font-semibold text-${factor.color}-900`}
                >
                  {factor.title}
                </h3>
              </div>

              <ul className="space-y-1 md:space-y-2 text-left">
                {factor.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay:
                        0.8 + index * 0.2 + itemIndex * 0.1,
                    }}
                    className={`flex items-center space-x-2 text-${factor.color}-800`}
                  >
                    <div
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-${factor.color}-600 rounded-full flex-shrink-0`}
                    />
                    <span className="text-xs md:text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mechanism Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 md:p-6 border border-blue-200"
        >
          <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4">
            Mecanismo Inicial
          </h3>

          <div className="flex items-center justify-center space-x-3 md:space-x-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>
              <div className="text-xs md:text-sm text-red-800 font-medium">
                Fatores de Risco
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="w-8 h-0.5 md:w-12 md:h-1 bg-blue-400"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div className="text-xs md:text-sm text-blue-800 font-medium">
                Dano Epitelial
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="w-8 h-0.5 md:w-12 md:h-1 bg-blue-400"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-1 md:mb-2">
                <Dna className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <div className="text-xs md:text-sm text-purple-800 font-medium">
                Vias de Inflamação/Fibrose
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="mt-3 md:mt-4 p-3 md:p-4 bg-blue-50/70 rounded-lg border border-blue-200"
          >
            <p className="text-blue-700 text-xs md:text-sm italic text-center">
              Interação complexa entre fatores genéticos,
              ambientais e imunológicos
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}