import React from "react";
import { motion } from "motion/react";
import { Stethoscope, Eye, Heart, Zap, Search, Activity } from "lucide-react";

export function PneumothoraxDiagnosisSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Search className="w-32 h-32 text-blue-500" />
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
            Diagnóstico
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
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Manifestações Clínicas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3"
              >
                <Heart className="w-8 h-8 text-red-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Manifestações Clínicas
              </h3>
              <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Dor Torácica
                </h4>
                <p className="text-red-700 text-xs leading-relaxed">
                  <strong>Ipsilateral</strong> de início <strong>súbito</strong>
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center text-sm">
                  <Activity className="w-4 h-4 mr-2" />
                  Dispneia
                </h4>
                <p className="text-blue-700 text-xs leading-relaxed">
                  Intensidade <strong>variável</strong>, correlacionada ao <strong>volume do pneumotórax</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Exame Físico */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
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
                <Stethoscope className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Exame Físico
              </h3>
              <div className="h-0.5 bg-green-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 mb-1 text-sm">
                  Ausculta
                </h4>
                <p className="text-green-700 text-xs leading-relaxed">
                  <strong>Redução ou abolição</strong> do murmúrio vesicular
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">
                  Palpação
                </h4>
                <p className="text-blue-700 text-xs leading-relaxed">
                  <strong>Diminuição</strong> do frêmito tóraco-vocal
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-800 mb-1 text-sm">
                  Percussão
                </h4>
                <p className="text-purple-700 text-xs leading-relaxed">
                  <strong>Timpanismo</strong> no hemitórax afetado
                </p>
              </div>
            </div>
          </motion.div>

          {/* Diagnóstico por Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3"
              >
                <Eye className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Diagnóstico por Imagem
              </h3>
              <div className="h-0.5 bg-purple-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-800 mb-2 text-sm">
                  📋 Radiografia de Tórax
                </h4>
                <p className="text-purple-700 text-xs leading-relaxed mb-2">
                  <strong>Incidência póstero-anterior</strong> é o método de escolha
                </p>
                <div className="text-xs text-purple-600 space-y-1">
                  <div><strong>✓</strong> Linha da pleura visceral deslocada</div>
                  <div><strong>✓</strong> Ausência de trama vascular pulmonar periférica</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Medical Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 flex justify-center"
        >
          <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
            <img
              src="/Pleurais 3.jpg"
              alt="Diagnóstico de Pneumotórax"
              className="w-full h-auto object-contain opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}