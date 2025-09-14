import React from "react";
import { motion } from "motion/react";
import { Network, Stethoscope, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function DpisTitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Network className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Stethoscope className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <BookOpen className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        {/* Main Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
            Doença Pulmonar
          </h1>
          <h1 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
            Intersticial (DPI)
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-md"
          />
          <h2 className="text-2xl text-blue-700 mt-4 font-medium">
            Classificação, Patogênese e Manejo
          </h2>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
            >
              <Network className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Complexidade
              </h3>
              <p className="text-blue-700">
                Grupo heterogêneo de doenças que afetam o
                interstício pulmonar, com mais de 200 tipos
                reconhecidos na literatura.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
            >
              <Stethoscope className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Impacto Clínico
              </h3>
              <p className="text-blue-700">
                Comprometimento significativo das trocas
                gasosas, com consequências importantes para a
                função respiratória e qualidade de vida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
            >
              <BookOpen className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Objetivo
              </h3>
              <p className="text-blue-700">
                Compreender a classificação, fisiopatologia e
                estratégias terapêuticas das DPIs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Medical Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-12"
        >
          <div className="relative mx-auto w-48 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
            <img
              src="/DPI 1.jpg"
              alt="DPI - Doença Pulmonar Intersticial"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}