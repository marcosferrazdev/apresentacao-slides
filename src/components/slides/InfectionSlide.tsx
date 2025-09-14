import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Droplets,
  Wind,
  Syringe,
  AlertTriangle,
} from "lucide-react";

export function InfectionSlide() {
  const entryRoutes = [
    {
      icon: Droplets,
      title: "Microaspiração de Secreções da Orofaringe",
    },
    {
      icon: Wind,
      title: "Inalação de Aerossóis",
    },
    {
      icon: ArrowDown,
      title: "Disseminação Hematogênica",
    },
    {
      icon: Syringe,
      title: "Inoculação Direta",
    },
  ];

  const riskFactors = [
    "Alteração do nível de consciência",
    "Infecção viral prévia",
    "Imunossupressão",
    "Doenças crônicas (DPOC, DM, ICC)",
    "Idade avançada",
    "Tabagismo",
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          O Início da Infecção
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-4"
        />
        <h2 className="text-xl text-blue-700">
          Quebra das Barreiras de Defesa
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Entry Routes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            Vias de Entrada
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {entryRoutes.map((route, index) => {
              const IconComponent = route.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-red-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm">
                      {route.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Risk Factors */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            Fatores Predisponentes
          </h3>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-orange-100 shadow-md">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              <span className="font-semibold text-orange-700">
                Fatores de Risco
              </span>
            </div>
            <div className="space-y-3">
              {riskFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.1,
                  }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-blue-700">
                    {factor}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Central Arrow Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
      >
        <div className="w-48 h-48 opacity-5">
          <ArrowDown className="w-full h-full text-red-500" />
        </div>
      </motion.div>
    </div>
  );
}