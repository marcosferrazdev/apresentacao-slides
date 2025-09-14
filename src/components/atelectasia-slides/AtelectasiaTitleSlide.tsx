import React from "react";
import { motion } from "motion/react";
import { CircleDot, Target, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AtelectasiaTitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <CircleDot className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Target className="w-24 h-24 text-blue-400" />
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
          <h1 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Atelectasia
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-md"
          />
          <h2 className="text-2xl text-blue-700 mt-4 font-medium">
            Fisiopatologia e Implicações Clínicas
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
              <CircleDot className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Definição
              </h3>
              <p className="text-blue-700">
                Atelectasia (do grego atelez + ektasiz =
                expansão imperfeita) é o colapso reversível dos
                alvéolos e bronquíolos terminais, resultando em
                perda de volume.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
            >
              <Target className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Contexto Clínico
              </h3>
              <p className="text-blue-700">
                Manifestação secundária a diversos processos
                patológicos. Extremamente comum em ambientes
                hospitalares, especialmente no pós-operatório.
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
                Revisar mecanismos fisiopatológicos,
                classificação, consequências funcionais e imagem
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
          <div className="relative mx-auto w-64 h-32 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
            <ImageWithFallback
              src="/Atelectasia 1.jpg"
              alt="Atelectasia"
              className="w-full h-full object-contain opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}