import React from "react";
import { motion } from "motion/react";
import { Wind, AlertTriangle, ArrowDown, Activity } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function PneumothoraxDefinitionSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Wind className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Wind className="w-24 h-24 text-blue-400" />
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
            Pneumotórax
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

      <div className="flex-1 relative z-10 flex gap-2">        {/* Left side - Cards */}
        <div className="flex-1 space-y-8">
        {/* Definition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg mb-8"
        >
          <div className="flex items-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4"
            >
              <Activity className="w-6 h-6 text-blue-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900">
              Definição
            </h3>
          </div>
          <p className="text-blue-700 leading-relaxed text-lg">
            O pneumotórax é uma <strong>condição patológica caracterizada pela presença de ar no espaço pleural</strong>, 
            resultando em perda da pressão negativa intrapleural e consequente <strong>colapso pulmonar, parcial ou total</strong>.
          </p>
        </motion.div>

        {/* Physiopathology Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg mb-8"
        >
          <div className="flex items-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mr-4"
            >
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900">
              Fisiopatologia
            </h3>
          </div>
          <p className="text-blue-700 leading-relaxed text-lg mb-4">
            <strong>Violação da integridade pleural</strong>, seja pela ruptura da pleura visceral, 
            como na ruptura de bolhas ou blebs subpleurais, ou por lesão da pleura parietal.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-medium">
              💡 A comunicação estabelecida permite o <strong>influxo de ar para a cavidade pleural</strong>
            </p>
          </div>
        </motion.div>

        {/* Mechanism Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Normal Pleura */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Pleura Normal
            </h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Pressão negativa intrapleural</li>
              <li>• Pulmão expandido</li>
              <li>• Integridade pleural preservada</li>
            </ul>
          </div>

          {/* Pneumothorax */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              Pneumotórax
            </h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Ar no espaço pleural</li>
              <li>• Perda da pressão negativa</li>
              <li>• Colapso pulmonar</li>
            </ul>
          </div>
        </motion.div>

        </div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative">
            <ImageWithFallback
              src="/Pleurais 2.jpg"
              alt="Anatomia Pleural - Pneumotórax"
              className="w-full h-[800px] object-cover rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold">Anatomia Pleural</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}