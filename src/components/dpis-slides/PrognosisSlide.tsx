import React from "react";
import { motion } from "motion/react";
import {
  TrendingDown,
  TrendingUp,
  BarChart3,
  AlertCircle,
} from "lucide-react";

export function PrognosisSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <BarChart3 className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <TrendingUp className="w-24 h-24 text-blue-400" />
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
            O Que Esperar?
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Prognóstico das DPIs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-red-600 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-xl font-semibold text-red-900">
                DPIs Fibrosantes
              </h3>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-3 md:p-4 bg-red-50/50 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-2 text-sm md:text-base">
                  Características:
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-red-700">
                      Prognóstico reservado
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-red-700">
                      Progressão irreversível
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-red-700">
                      Declínio funcional contínuo
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-3 md:p-4 bg-red-50/30 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-800 mb-1 md:mb-2 text-sm md:text-base">
                  Exemplo:
                </h4>
                <p className="text-xs md:text-sm text-red-700">
                  <strong>FPI:</strong> Sobrevida mediana de 3-5
                  anos
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-green-100 shadow-sm"
          >
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600 mr-2 md:mr-3" />
              <h3 className="text-lg md:text-xl font-semibold text-green-900">
                DPIs Inflamatórias
              </h3>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-3 md:p-4 bg-green-50/50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2 text-sm md:text-base">
                  Características:
                </h4>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-green-700">
                      Estabilização com tratamento
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-green-700">
                      Possibilidade de reversão
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-green-700">
                      Resposta à imunossupressão
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-3 md:p-4 bg-green-50/30 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-1 md:mb-2 text-sm md:text-base">
                  Exemplo:
                </h4>
                <p className="text-xs md:text-sm text-green-700">
                  <strong>PH:</strong> Resposta favorável ao
                  tratamento
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 md:p-6 border border-blue-200"
        >
          <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">
            Fatores Prognósticos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm">
            <div className="text-center p-2 md:p-3 bg-blue-50/50 rounded-lg border border-blue-100">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mx-auto mb-1" />
              <div className="font-semibold text-blue-800">
                Tipo de DPI
              </div>
              <div className="text-blue-700">
                Fibrosante vs. Inflamatória
              </div>
            </div>
            <div className="text-center p-2 md:p-3 bg-purple-50/50 rounded-lg border border-purple-100">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mb-1" />
              <div className="font-semibold text-purple-800">
                Idade
              </div>
              <div className="text-purple-700">
                Diagnóstico precoce
              </div>
            </div>
            <div className="text-center p-2 md:p-3 bg-green-50/50 rounded-lg border border-green-100">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto mb-1" />
              <div className="font-semibold text-green-800">
                Resposta
              </div>
              <div className="text-green-700">
                Tratamento adequado
              </div>
            </div>
            <div className="text-center p-2 md:p-3 bg-orange-50/50 rounded-lg border border-orange-100">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mx-auto mb-1" />
              <div className="font-semibold text-orange-800">
                Comorbidades
              </div>
              <div className="text-orange-700">
                Hipertensão pulmonar
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-3 md:mt-4 p-3 md:p-4 bg-blue-50/70 rounded-lg border border-blue-200"
          >
            <p className="text-blue-700 text-xs md:text-sm italic text-center">
              <strong>Importante:</strong> O prognóstico é
              altamente variável e depende do subtipo
              específico, resposta ao tratamento e presença de
              comorbidades
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}