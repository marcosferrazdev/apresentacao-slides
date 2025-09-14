import React from "react";
import { motion } from "motion/react";
import { Network, Search, BarChart3, Activity } from "lucide-react";

export function DpisMensagensChaveSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Network className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Search className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <Activity className="w-20 h-20 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 md:mb-4">
            Mensagens-Chave
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2 md:mt-4">
            Doenças Pulmonares Intersticiais
          </h2>
        </motion.div>

        {/* Key Messages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 md:p-8 border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Network className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <div className="text-lg md:text-xl text-blue-900 font-semibold mb-2 md:mb-3">Complexidade</div>
            <div className="text-blue-700 text-sm md:text-base">Mais de 200 tipos reconhecidos</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 md:p-8 border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Search className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
            <div className="text-lg md:text-xl text-green-900 font-semibold mb-2 md:mb-3">Diagnóstico</div>
            <div className="text-green-700 text-sm md:text-base">Abordagem multidisciplinar</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 md:p-8 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4" />
            <div className="text-lg md:text-xl text-purple-900 font-semibold mb-2 md:mb-3">Prognóstico</div>
            <div className="text-purple-700 text-sm md:text-base">Variável conforme o tipo</div>
          </motion.div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 md:p-8 border border-blue-200"
        >
          <p className="text-blue-600 text-base md:text-lg italic">
            Compreensão integrada: essencial para o manejo adequado das DPIs
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}