import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, Zap, Network, Stethoscope, Search, Shield, Activity, BarChart3, ArrowRight } from "lucide-react";

export function FluxogramaIntegradoSlide() {
  const flowSteps = [
    { icon: AlertTriangle, label: "Fatores de Risco", color: "red" },
    { icon: Zap, label: "Dano Epitelial", color: "orange" },
    { icon: Zap, label: "Inflamação", color: "yellow" },
    { icon: Network, label: "Fibrose", color: "blue" },
    { icon: Stethoscope, label: "Sintomas/Sinais", color: "purple" },
    { icon: Search, label: "Diagnóstico", color: "green" },
    { icon: Shield, label: "Tratamento", color: "teal" },
    { icon: BarChart3, label: "Prognóstico", color: "gray" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Network className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Stethoscope className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Activity className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 md:mb-10"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 md:mb-4">
            Fluxograma Integrado: Da Patogênese ao Manejo
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2 md:mt-4">
            Doenças Pulmonares Intersticiais
          </h2>
        </motion.div>

        {/* Animated Flowchart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-blue-100 shadow-sm"
        >
          {/* First Row - Pathogenesis */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">Patogênese</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              {flowSteps.slice(0, 4).map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mb-2 border border-${step.color}-200`}>
                      <step.icon className={`w-6 h-6 md:w-8 md:h-8 text-${step.color}-600`} />
                    </div>
                    <div className={`text-xs md:text-sm text-${step.color}-800 font-medium`}>
                      {step.label}
                    </div>
                  </motion.div>
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 + index * 0.2 }}
                      className="mx-2 my-2 md:my-0"
                    >
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400 rotate-90 md:rotate-0" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Branching - Inflammation vs Fibrosis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-6 md:mb-8 grid md:grid-cols-2 gap-4 md:gap-8"
          >
            <div className="text-center p-3 md:p-4 bg-orange-50/50 rounded-lg border border-orange-100">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mx-auto mb-2" />
              <div className="text-sm md:text-base font-semibold text-orange-800">Via Inflamatória</div>
              <div className="text-xs text-orange-700">Reversível com imunossupressão</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-blue-50/50 rounded-lg border border-blue-100">
              <Network className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-2" />
              <div className="text-sm md:text-base font-semibold text-blue-800">Via Fibrótica</div>
              <div className="text-xs text-blue-700">Progressiva com antifibróticos</div>
            </div>
          </motion.div>

          {/* Second Row - Clinical Management */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">Manejo Clínico</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              {flowSteps.slice(4).map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.0 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mb-2 border border-${step.color}-200`}>
                      <step.icon className={`w-6 h-6 md:w-8 md:h-8 text-${step.color}-600`} />
                    </div>
                    <div className={`text-xs md:text-sm text-${step.color}-800 font-medium`}>
                      {step.label}
                    </div>
                  </motion.div>
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 2.2 + index * 0.2 }}
                      className="mx-2 my-2 md:my-0"
                    >
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400 rotate-90 md:rotate-0" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}