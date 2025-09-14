import React from "react";
import { motion } from "motion/react";
import {
  Users,
  TrendingUp,
  BarChart3,
  UserCheck,
} from "lucide-react";

export function EpidemiologySlide() {
  const epidemiologyData = [
    {
      icon: UserCheck,
      title: "FPI",
      subtitle: "Fibrose Pulmonar Idiopática",
      description: "Mais comum em homens >60 anos",
      color: "blue",
      delay: 0.6,
    },
    {
      icon: Users,
      title: "Pneumonia Intersticial Não Específica Idiopática",
      subtitle: "-",
      description:
        "Mais comum em mulheres de meia-idade (40 à 60 anos)",
      color: "purple",
      delay: 0.8,
    },
    {
      icon: BarChart3,
      title: "Autoimunes",
      subtitle: "Associada à doença do Tecido Conjutivo",
      description:
        "Mais comum em mulheres de meia-idade (40 à 60 anos)",
      color: "green",
      delay: 1.0,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Users className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <TrendingUp className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <BarChart3 className="w-20 h-20 text-blue-300" />
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
            Quem é Mais Afetado?
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Epidemiologia das DPIs
          </h2>
        </motion.div>

        {/* Epidemiology Cards */}
        <div className="space-y-2 md:space-y-3 max-w-5xl mx-auto">
          {epidemiologyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className={`bg-white/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-${item.color}-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div
                    className={`flex-shrink-0 p-2 md:p-3 bg-${item.color}-100 rounded-full`}
                  >
                    <item.icon
                      className={`w-6 h-6 md:w-8 md:h-8 text-${item.color}-600`}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className={`text-base md:text-lg font-semibold text-${item.color}-900 mb-1`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs md:text-sm text-${item.color}-600 mb-1`}
                    >
                      {item.subtitle}
                    </p>
                    <p
                      className={`text-sm md:text-base text-${item.color}-800 leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`hidden md:block w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-full flex items-center justify-center`}
                >
                  <item.icon
                    className={`w-8 h-8 text-${item.color}-600`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 md:mt-6 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 md:p-6 border border-green-200 w-full text-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-1">
              6,3–76,0 casos por 100.000 pessoas
            </div>
            <div className="text-green-700 text-sm md:text-base">
              Prevalência Geral
            </div>
          </div>
        </motion.div>


      </motion.div>
    </div>
  );
}