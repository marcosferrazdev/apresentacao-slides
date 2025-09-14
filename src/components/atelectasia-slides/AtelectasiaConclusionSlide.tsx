import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Target,
  Activity,
  AlertTriangle,
  Wrench,
  CheckCircle,
} from "lucide-react";

export function AtelectasiaConclusionSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Target className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <CheckCircle className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Da Fisiopatologia à Terapêutica
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Summary Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <Target className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
              Definição
            </h3>
            <p className="text-blue-700 text-center text-sm">
              Atelectasia = perda de volume alveolar (obstrução
              ou compressão)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <AlertTriangle className="w-10 h-10 text-red-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
              Consequência Central
            </h3>
            <p className="text-blue-700 text-center text-sm">
              Hipoxemia por shunt intrapulmonar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <Wrench className="w-10 h-10 text-green-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
              Tratamento
            </h3>
            <p className="text-blue-700 text-center text-sm">
              Guiado pela fisiopatologia específica
            </p>
          </motion.div>
        </div>

        {/* Animated Flow Chart */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border-2 border-blue-200 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Fluxograma Fisiopatológico
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto">
            {/* Item 1: Risk Factors */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center"
            >
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg px-4 py-3 w-40">
                <h4 className="font-bold text-orange-800 text-center mb-2 text-sm">
                  Fatores de Risco
                </h4>
                <div className="text-xs text-orange-700 text-center">
                  Cirurgia • Anestesia • Imobilidade
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>

            {/* Item 2: Alveolar Collapse */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex items-center"
            >
              <div className="bg-red-100 border-2 border-red-300 rounded-lg px-4 py-3 w-40">
                <h4 className="font-bold text-red-800 text-center mb-2 text-sm">
                  Colapso Alveolar
                </h4>
                <div className="text-xs text-red-700 text-center">
                  Obstrutiva • Compressiva • Adesiva
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>

            {/* Item 3: Shunt */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="flex items-center"
            >
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-4 py-3 w-40">
                <h4 className="font-bold text-purple-800 text-center mb-2 text-sm">
                  Shunt Intrapulmonar
                </h4>
                <div className="text-xs text-purple-700 text-center">
                  V/Q = 0 • Mistura venosa-arterial
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 3.0 }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>

            {/* Item 4: Hypoxemia */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="flex items-center"
            >
              <div className="bg-red-200 border-2 border-red-400 rounded-lg px-4 py-3 w-40">
                <h4 className="font-bold text-red-900 text-center mb-2 text-sm">
                  Hipoxemia
                </h4>
                <div className="text-xs text-red-800 text-center">
                  ↓ PaO₂ • ↓ SatO₂
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 3.8 }}
                className="ml-2"
              >
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>

            {/* Item 5: Complications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.2 }}
              className="flex justify-center"
            >
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-3 w-48">
                <h4 className="font-bold text-gray-800 text-center mb-2 text-sm">
                  Complicações
                </h4>
                <div className="text-xs text-gray-700 text-center">
                  Estase de secreções • Risco de pneumonia • Insuficiência respiratória
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}