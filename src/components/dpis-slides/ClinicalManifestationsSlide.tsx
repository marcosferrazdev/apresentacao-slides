import React from "react";
import { motion } from "motion/react";
import { Stethoscope, Wind, Zap, Hand } from "lucide-react";

export function ClinicalManifestationsSlide() {
  const symptoms = [
    {
      icon: Wind,
      title: "Dispneia",
      description: "Falta de ar progressiva",
      color: "blue",
    },
    {
      icon: Stethoscope,
      title: "Tosse crônica",
      description: "Seca, persistente",
      color: "orange",
    },
  ];

  const signs = [
    {
      icon: Stethoscope,
      title: "Crepitações bibasais",
      description: "Som de 'velcro'",
      color: "purple",
    },
    {
      icon: Hand,
      title: "Baqueteamento digital",
      description: "Dedos em baqueta de tambor",
      color: "green",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Stethoscope className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Wind className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Sintomas e Sinais
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-xl text-blue-700 mt-4">
            Manifestações Clínicas das DPIs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Sintomas
            </h3>
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-blue-50/50 rounded-lg"
                >
                  <symptom.icon
                    className={`w-8 h-8 text-${symptom.color}-600`}
                  />
                  <div className="text-left">
                    <div
                      className={`font-semibold text-${symptom.color}-900`}
                    >
                      {symptom.title}
                    </div>
                    <div
                      className={`text-sm text-${symptom.color}-700`}
                    >
                      {symptom.description}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center space-x-4 p-4 bg-blue-50/50 rounded-lg">
                <Zap className="w-8 h-8 text-red-600" />
                <div className="text-left">
                  <div className="font-semibold text-red-900">
                    Fadiga
                  </div>
                  <div className="text-sm text-red-700">
                    Cansaço progressivo
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-purple-100 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-purple-900 mb-6">
              Sinais
            </h3>
            <div className="space-y-4">
              {signs.map((sign, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-purple-50/50 rounded-lg"
                >
                  <sign.icon
                    className={`w-8 h-8 text-${sign.color}-600`}
                  />
                  <div className="text-left">
                    <div
                      className={`font-semibold text-${sign.color}-900`}
                    >
                      {sign.title}
                    </div>
                    <div
                      className={`text-sm text-${sign.color}-700`}
                    >
                      {sign.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}