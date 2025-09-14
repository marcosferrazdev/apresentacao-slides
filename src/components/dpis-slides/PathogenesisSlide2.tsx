import React from "react";
import { motion } from "motion/react";
import { Zap, Network, Shield, Microscope } from "lucide-react";

export function PathogenesisSlide2() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Zap className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Network className="w-24 h-24 text-blue-400" />
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
            Patogênese das DPIs
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Inflamação vs. Fibrose
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Inflammation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-orange-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-600 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-xl font-semibold text-orange-900">
                Via Inflamatória
              </h3>
            </div>

            <div className="space-y-2 md:space-y-3 text-left">
              <div className="p-2 md:p-3 bg-orange-50/50 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1 md:mb-2 text-sm md:text-base">
                  Características:
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-orange-700">
                      Acúmulo de células inflamatórias
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-orange-700">
                      Predominante nas doenças autoimunes
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-orange-700">
                      Resposta imunológica exacerbada
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-2 md:p-3 bg-orange-50/30 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-orange-800 mb-1 text-sm md:text-base">
                  Exemplos:
                </h4>
                <ul className="space-y-1 text-xs md:text-sm text-orange-700">
                  <li>• Pneumonite de hipersensibilidade</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Fibrosis */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Network className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                Via Fibrótica
              </h3>
            </div>

            <div className="space-y-2 md:space-y-3 text-left">
              <div className="p-2 md:p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">
                  Características:
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-blue-700">
                      Remodelamento anormal
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-blue-700">
                      Deposição excessiva de colágeno
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5 md:mt-2" />
                    <span className="text-blue-700">
                      Destruição da arquitetura pulmonar
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-2 md:p-3 bg-blue-50/30 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm md:text-base">
                  Exemplos:
                </h4>
                <ul className="space-y-1 text-xs md:text-sm text-blue-700">
                  <li>• Fibrose pulmonar idiopática</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mechanism Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-4 md:mt-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-4 md:p-6 border border-gray-200"
        >
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 text-center">
            Comparação dos Mecanismos
          </h3>

          <div className="flex items-center justify-center space-x-6 md:space-x-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
              </div>
              <div className="text-orange-800 font-medium mb-1 text-sm md:text-base">
                INFLAMAÇÃO
              </div>
              <div className="text-xs text-orange-600">
                Células imunes
              </div>
              <div className="text-xs text-orange-600">
                Reversível
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
              </div>
              <div className="text-gray-800 font-medium text-xs md:text-sm">
                VS
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                <Network className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
              </div>
              <div className="text-blue-800 font-medium mb-1 text-sm md:text-base">
                FIBROSE
              </div>
              <div className="text-xs text-blue-600">
                Colágeno
              </div>
              <div className="text-xs text-blue-600">
                Irreversível
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}