import React from "react";
import { motion } from "motion/react";
import {
  Eye,
  ArrowRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function RadiologySlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Eye className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <TrendingUp className="w-24 h-24 text-blue-400" />
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
            Correlação com Imagem
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
          <h2 className="text-xl text-blue-700 mt-2">
            Radiologia da Atelectasia
          </h2>
        </motion.div>
      </motion.div>

      <div className="flex-1 grid lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Direct Signs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Direct Signs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">
                Sinais Diretos
              </h3>
              <div className="h-0.5 bg-blue-600 w-16 mx-auto mt-2"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">
                  Opacificação
                </h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>
                      Aumento da densidade do parênquima afetado
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">
                  Aglomeração Broncovascular
                </h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>
                      Aglomeração dos vasos e brônquios na área
                      colapsada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <h4 className="text-lg font-bold text-blue-900 mb-4 text-center">
              Exemplo Radiológico
            </h4>
            <div className="relative">
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584555684040-bad07f46a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMHhyYXklMjByYWRpb2dyYXBofGVufDF8fHx8MTc1Nzc4ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Radiografia de tórax"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Radiografia PA
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Indirect Signs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Indirect Signs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6 shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900">
                Sinais Indiretos
              </h3>
              <div className="h-0.5 bg-purple-600 w-16 mx-auto mt-2"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Desvio do Mediastino
                </h4>
                <p className="text-sm text-purple-700">
                  Atração para o lado da atelectasia devido à
                  perda de volume
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Hemicúpula Elevada
                </h4>
                <p className="text-sm text-purple-700">
                  Elevação diafragmática ipsilateral por redução
                  do volume pulmonar
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">
                  Redução dos Espaços Intercostais
                </h4>
                <p className="text-sm text-purple-700">
                  Aproximação das costelas por retração torácica
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">
                  Hiperinsuflação Compensatória
                </h4>
                <p className="text-sm text-purple-700">
                  Expansão excessiva do pulmão contralateral ou
                  lobos adjacentes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}