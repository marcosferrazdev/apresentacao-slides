import React from "react";
import { motion } from "motion/react";
import { Users, FileText, Activity, Microscope, Search } from "lucide-react";

export function DiagnosisSlide() {
  const diagnosticSteps = [
    { icon: Users, title: "Avaliação multidisciplinar", description: "Pneumologista, radiologista, patologista" },
    { icon: FileText, title: "História clínica e exame físico", description: "Sintomas, exposições, comorbidades" },
    { icon: Activity, title: "Provas de função pulmonar", description: "Espirometria, DLCO, gasometria" },
    { icon: Search, title: "TCAR", description: "Tomografia de alta resolução" },
    { icon: Microscope, title: "Casos selecionados", description: "Lavado broncoalveolar e/ou biópsia" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Search className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Microscope className="w-24 h-24 text-blue-400" />
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
          className="mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
            Abordagem Diagnóstica
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Estratégia Multidisciplinar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {diagnosticSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 md:p-3 bg-blue-100 rounded-full">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="text-left flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="text-base md:text-lg font-bold text-blue-300">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-4 md:mt-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 md:p-6 border border-blue-200"
        >
          <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">
            Algoritmo Diagnóstico
          </h3>
          
          <div className="flex items-center justify-center space-x-2 md:space-x-4 text-xs md:text-sm">
            <div className="text-center">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1" />
              <div className="text-blue-800">Multidisciplinar</div>
            </div>
            <div className="text-blue-400">→</div>
            <div className="text-center">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1" />
              <div className="text-blue-800">História</div>
            </div>
            <div className="text-blue-400">→</div>
            <div className="text-center">
              <Search className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1" />
              <div className="text-blue-800">TCAR</div>
            </div>
            <div className="text-blue-400">→</div>
            <div className="text-center">
              <Microscope className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1" />
              <div className="text-blue-800">Biópsia</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}