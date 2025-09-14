import React from "react";
import { motion } from "motion/react";
import {
  CircleDot,
  Droplets,
  Network,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AlveolarStabilitySlide() {
  return (
    <div className="flex flex-col h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 sm:top-24 lg:top-32 right-16 sm:right-24 lg:right-32">
          <CircleDot className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-blue-500" />
        </div>
        <div className="absolute bottom-12 sm:bottom-16 lg:bottom-24 left-12 sm:left-16 lg:left-24">
          <Network className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-blue-400" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 sm:mb-6 lg:mb-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">
            A Física do Alvéolo
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-xs"
          />
          <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-700 mt-1 sm:mt-2">
            Por que o Pulmão Não Colapsa?
          </h2>
        </motion.div>
      </motion.div>

      <div className="flex-1 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start relative z-10 min-h-0">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6 overflow-y-auto"
        >
          {/* Tensão superficial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 xl:p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                  Tensão Superficial e Lei de Laplace
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-700 leading-relaxed">
                  Tendência natural dos alvéolos ao colapso.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Surfactante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 xl:p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                  Papel do Surfactante Pulmonar
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-700 leading-relaxed">
                  Produzido por pneumócitos tipo II, reduz a
                  tensão superficial, aumenta a complacência
                  pulmonar e previne o colapso no final da
                  expiração.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interdependência */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 xl:p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <Network className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                  Interdependência Alveolar
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-700 leading-relaxed">
                  Suporte mecânico das paredes alveolares
                  vizinhas previne o colapso individual através
                  de forças de tração radial.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ventilação colateral */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 xl:p-6 border border-blue-100 shadow-sm"
          >
            <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">
                  Ventilação Colateral
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-700 leading-relaxed">
                  <strong>Poros de Kohn</strong> e{" "}
                  <strong>canais de Lambert</strong> permitem
                  comunicação entre alvéolos adjacentes,
                  facilitando a redistribuição do ar.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6 overflow-y-auto"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative w-32 h-24 sm:w-48 sm:h-36 lg:w-64 lg:h-48 xl:w-80 xl:h-60 rounded-xl overflow-hidden shadow-xl border-2 border-blue-200"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704032489484-09e46665cd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHZlb2xpJTIwbHVuZyUyMG1pY3Jvc2NvcHl8ZW58MXx8fHwxNzU3Nzg4MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estrutura alveolar microscópica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-blue-600 text-white text-xs px-1 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1 rounded-full">
              Estrutura Alveolar
            </div>
          </div>

          {/* Key equation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 lg:p-4 xl:p-6 text-center"
          >
            <h4 className="text-xs sm:text-sm lg:text-base text-blue-900 font-semibold mb-1 sm:mb-2">
              Lei de Laplace
            </h4>
            <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-blue-700">
              P = 2γ/r
            </div>
            <p className="text-xs sm:text-sm text-blue-600 mt-1 sm:mt-2">
              Pressão = 2 × Tensão Superficial / Raio
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}