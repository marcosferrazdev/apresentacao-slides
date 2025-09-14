import React from "react";
import { motion } from "motion/react";
import {
  Ban,
  Shrink,
  Droplet,
  ArrowDown,
  ArrowRight,
} from "lucide-react";

export function ClassificationSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Ban className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Shrink className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Classificação da Atelectasia
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
          <h2 className="text-xl text-blue-700 mt-2">
            Diferentes Caminhos para o Colapso
          </h2>
        </motion.div>
      </motion.div>

      {/* Content Grid */}
      <div className="flex-1 grid lg:grid-cols-3 gap-8 relative z-10">
        {/* Atelectasia Obstrutiva */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
            >
              <Ban className="w-8 h-8 text-red-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Obstrutiva
            </h3>
            <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">
                Mecanismo:
              </h4>
              <p className="text-red-700 text-sm leading-relaxed">
                Ar não chega → é reabsorvido → colapso
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900">
                Exemplos:
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Tampões mucosos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Tumores endobrônquicos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Corpo estranho</span>
                </li>
                <li className="flex items-center space-x-2"></li>
              </ul>
            </div>

            {/* Flow diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-4 p-3 bg-gray-50 rounded-lg border"
            >
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <span>Obstrução</span>
                <ArrowRight className="w-3 h-3" />
                <span>Reabsorção</span>
                <ArrowRight className="w-3 h-3" />
                <span>Colapso</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Atelectasia Compressiva */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"
            >
              <Shrink className="w-8 h-8 text-orange-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Compressiva
            </h3>
            <div className="h-0.5 bg-orange-500 w-12 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">
                Mecanismo:
              </h4>
              <p className="text-orange-700 text-sm leading-relaxed">
                Força extrínseca → colapso
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900">
                Exemplos:
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Derrame pleural</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Pneumotórax</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Cardiomegalia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Tumores mediastinais</span>
                </li>
              </ul>
            </div>

            {/* Flow diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 p-3 bg-gray-50 rounded-lg border"
            >
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <span>Pressão Externa</span>
                <ArrowRight className="w-3 h-3" />
                <span>Colapso </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Atelectasia Adesiva */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
            >
              <Droplet className="w-8 h-8 text-purple-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Adesiva
            </h3>
            <div className="h-0.5 bg-purple-500 w-12 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">
                Mecanismo:
              </h4>
              <p className="text-purple-700 text-sm leading-relaxed">
                Deficiência de surfactante → ↑ tensão
                superficial
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900">
                Exemplos:
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>SDRA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Recém-nascido prematuro</span>
                </li>
                <li className="flex items-center space-x-2"></li>
                <li className="flex items-center space-x-2"></li>
              </ul>
            </div>

            {/* Flow diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-4 p-3 bg-gray-50 rounded-lg border"
            >
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <span>↓ Surfactante</span>
                <ArrowRight className="w-3 h-3" />
                <span>↑ Tensão</span>
                <ArrowRight className="w-3 h-3" />
                <span>Colapso</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}