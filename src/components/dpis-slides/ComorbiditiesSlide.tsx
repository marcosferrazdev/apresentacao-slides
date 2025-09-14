import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  Zap,
  Moon,
  Coffee,
  Activity,
} from "lucide-react";

export function ComorbiditiesSlide() {
  const comorbidities = [
    {
      icon: Heart,
      title: "Hipertensão pulmonar",
      description: "Aumento da pressão na artéria pulmonar",
      color: "red",
    },
    {
      icon: Activity,
      title: "Câncer de pulmão",
      description: "Risco aumentado em DPIs fibrosantes",
      color: "purple",
    },
    {
      icon: Moon,
      title: "Apneia obstrutiva do sono",
      description: "Interrupções na respiração durante o sono",
      color: "blue",
    },
    {
      icon: Coffee,
      title: "Refluxo gastroesofágico",
      description: "Associação com progressão da doença",
      color: "orange",
    },
    {
      icon: Heart,
      title: "Doença cardiovascular",
      description: "Complicações sistêmicas",
      color: "green",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Heart className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Activity className="w-24 h-24 text-blue-400" />
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
            O Contexto Clínico Ampliado
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-xl text-blue-700 mt-4">
            Comorbidades Associadas às DPIs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comorbidities.map((comorbidity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
              }}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 bg-${comorbidity.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <comorbidity.icon
                  className={`w-8 h-8 text-${comorbidity.color}-600`}
                />
              </div>
              <h3
                className={`text-lg font-semibold text-${comorbidity.color}-900 mb-3`}
              >
                {comorbidity.title}
              </h3>
              <p
                className={`text-${comorbidity.color}-700 text-sm leading-relaxed`}
              >
                {comorbidity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}