import React from "react";
import { motion } from "motion/react";
import { Heart, Stethoscope, HeartPulse } from "lucide-react";

export function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 sm:top-20 left-16 sm:left-20">
          <Heart className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-24 sm:bottom-32 right-16 sm:right-24">
          <Stethoscope className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <HeartPulse className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-8"
      >
        {/* Main Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 sm:mb-8 lg:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-2 sm:mb-4 leading-tight">
            Fisiopatologia da Pneumonia
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-xs sm:max-w-md"
          />
          <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-700 mt-2 sm:mt-4 font-medium">
            Uma Abordagem Integrada
          </h2>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full flex-1 flex items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-blue-100 shadow-sm"
            >
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 sm:mb-3 lg:mb-4 mx-auto" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                Definição
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-blue-700">
                Infecção aguda do parênquima pulmonar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-blue-100 shadow-sm"
            >
              <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 sm:mb-3 lg:mb-4 mx-auto" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                Relevância Clínica
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-blue-700">
                Segundo o Global Burden of Diseases de 2019, as
                infecções do trato respiratório inferior
                afetaram 489 milhões de pessoas e causaram mais
                de 2,49 milhões de mortes, ultrapassando TB e
                HIV como principal causa de morte por doença
                infecciosa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-blue-100 shadow-sm"
            >
              <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 sm:mb-3 lg:mb-4 mx-auto" />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                Objetivo da Aula
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-blue-700">
                Unificar mecanismos fisiopatológicos dos
                diferentes tipos de pneumonia
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}