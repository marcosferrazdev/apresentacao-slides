import React from "react";
import { motion } from "motion/react";
import { Heart, Syringe, Droplets, Pill, Activity, Target } from "lucide-react";

export function PleuralEffusionTreatmentSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Target className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Activity className="w-24 h-24 text-blue-400" />
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
            Derrame Pleural
          </h1>
          <h2 className="text-2xl text-blue-700 font-medium">
            Tratamento
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Primary Treatment Principle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg mb-6"
        >
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3"
            >
              <Target className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Princípio Fundamental
            </h3>
            <div className="h-0.5 bg-blue-500 w-16 mx-auto"></div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 text-lg leading-relaxed text-center">
              A terapêutica primária é <strong>direcionada à doença de base</strong>.
            </p>
          </div>
        </motion.div>

        {/* Treatment by Type */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Transudates Treatment */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3"
              >
                <Heart className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Transudatos
              </h3>
              <div className="h-0.5 bg-green-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3 text-sm">
                  🎯 Estratégia Principal
                </h4>
                <p className="text-green-700 text-sm leading-relaxed mb-3">
                  O manejo consiste no <strong>tratamento otimizado da condição subjacente</strong>.
                </p>
                
                
              </div>
            </div>
          </motion.div>

          {/* Exudates Treatment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3"
              >
                <Pill className="w-8 h-8 text-red-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Exsudatos
              </h3>
              <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-3 text-sm">
                  🎯 Abordagem Dupla
                </h4>
                <p className="text-red-700 text-sm leading-relaxed mb-3">
                  Além do <strong>tratamento da causa</strong>, pode ser necessária intervenção direta.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-lg p-3 border border-red-100">
                    <h5 className="font-semibold text-red-800 mb-2 text-xs flex items-center">
                      <Syringe className="w-3 h-3 mr-1" />
                      Intervenção Direta
                    </h5>
                    <ul className="text-red-700 text-xs space-y-1">
                      <li>• <strong>Toracocentese de alívio</strong> (derrames volumosos)</li>
                      <li>• <strong>Drenagem pleural</strong> (quando necessário)</li>
                      <li>• <strong>Pleurodese</strong> (derrames recidivantes)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Treatment Algorithm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center flex items-center justify-center">
            <Activity className="w-5 h-5 mr-2" />
            🎯 Algoritmo Terapêutico
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-100 rounded-lg p-3 text-center border border-blue-200">
              <div className="font-semibold text-blue-800 mb-1 text-xs">1. Identificar Tipo</div>
              <div className="text-blue-700 text-xs">Transudato vs Exsudato</div>
            </div>
            <div className="bg-green-100 rounded-lg p-3 text-center border border-green-200">
              <div className="font-semibold text-green-800 mb-1 text-xs">2. Tratar Causa Base</div>
              <div className="text-green-700 text-xs">Terapia Específica</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 text-center border border-purple-200">
              <div className="font-semibold text-purple-800 mb-1 text-xs">3. Alívio Sintomático</div>
              <div className="text-purple-700 text-xs">Toracocentese/Drenagem</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-3 text-center border border-orange-200">
              <div className="font-semibold text-orange-800 mb-1 text-xs">4. Prevenção</div>
              <div className="text-orange-700 text-xs">Pleurodese se Recidivante</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}