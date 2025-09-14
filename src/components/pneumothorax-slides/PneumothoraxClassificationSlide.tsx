import React from "react";
import { motion } from "motion/react";
import { User, Stethoscope, Car, Syringe, Cigarette, Activity } from "lucide-react";

export function PneumothoraxClassificationSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Activity className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Stethoscope className="w-24 h-24 text-blue-400" />
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
            Classificação Etiológica
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
        {/* Main Classification Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          {/* Espontâneo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
              >
                <User className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Espontâneo
              </h3>
              <div className="h-0.5 bg-green-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {/* Primário */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Cigarette className="w-4 h-4 mr-2" />
                  Primário
                </h4>
                <p className="text-green-700 text-sm leading-relaxed mb-2">
                  Ocorre em indivíduos <strong>sem doença pulmonar subjacente aparente</strong>.
                </p>
                <div className="text-xs text-green-600">
                  <strong>Perfil típico:</strong> Homens jovens, biotipo longilíneo, tabagistas
                </div>
              </div>

              {/* Secundário */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Secundário
                </h4>
                <p className="text-blue-700 text-sm leading-relaxed mb-2">
                  Desenvolve-se como <strong>complicação de uma pneumopatia preexistente</strong>.
                </p>
                <div className="text-xs text-blue-600">
                  <strong>Exemplos:</strong> DPOC, tuberculose, neoplasias
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adquirido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
              >
                <Car className="w-8 h-8 text-red-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Adquirido
              </h3>
              <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {/* Traumático */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                  <Car className="w-4 h-4 mr-2" />
                  Traumático
                </h4>
                <p className="text-red-700 text-sm leading-relaxed mb-2">
                  Resultante de <strong>trauma torácico</strong>, seja ele penetrante ou contuso.
                </p>
                <div className="text-xs text-red-600">
                  <strong>Causas:</strong> Acidentes, ferimentos, lesões esportivas
                </div>
              </div>

              {/* Iatrogênico */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <Syringe className="w-4 h-4 mr-2" />
                  Iatrogênico
                </h4>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  Consequência de <strong>intervenções médicas invasivas</strong>.
                </p>
                <div className="text-xs text-orange-600">
                  <strong>Exemplos:</strong> Punções venosas centrais, biópsias transtorácicas, barotrauma por ventilação mecânica
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-3 text-center">
            💡 Pontos-Chave da Classificação
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="text-blue-700">
              <strong>Espontâneo Primário:</strong> Jovens saudáveis, frequentemente tabagistas
            </div>
            <div className="text-blue-700">
              <strong>Espontâneo Secundário:</strong> Pacientes com doença pulmonar prévia
            </div>
            <div className="text-blue-700">
              <strong>Traumático:</strong> Relacionado a lesões torácicas externas
            </div>
            <div className="text-blue-700">
              <strong>Iatrogênico:</strong> Complicação de procedimentos médicos
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}