import React from "react";
import { motion } from "motion/react";
import { Droplets, Heart, Bug, Activity } from "lucide-react";

export function PleuralEffusionDefinitionSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Droplets className="w-32 h-32 text-blue-500" />
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
            Definição e Fisiopatologia
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
        {/* Definition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-lg mb-6"
        >
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3"
            >
              <Droplets className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Definição
            </h3>
            <div className="h-0.5 bg-blue-500 w-16 mx-auto"></div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-base leading-relaxed text-center">
              Corresponde ao <strong>acúmulo patológico de fluido</strong> no interior do <strong>espaço pleural</strong>.
            </p>
          </div>
        </motion.div>



        {/* Key Points Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center flex items-center justify-center">
            <Activity className="w-5 h-5 mr-2" />
            💡 Pontos-Chave
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">🔍 Diferenciação Fundamental</h4>
              <p className="text-blue-700 text-xs leading-relaxed">
                A distinção entre <strong>transudato</strong> e <strong>exsudato</strong> é crucial para determinar a etiologia e orientar o tratamento adequado.
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">⚖️ Equilíbrio de Starling</h4>
              <p className="text-blue-700 text-xs leading-relaxed">
                O derrame pleural resulta da alteração das <strong>forças de Starling</strong> que governam a formação e reabsorção do líquido pleural.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}