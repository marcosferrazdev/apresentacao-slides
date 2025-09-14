import React from "react";
import { motion } from "motion/react";
import {
  Scissors,
  Pill,
  Activity,
  TrendingDown,
  Plus,
} from "lucide-react";

export function PostOperativeSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-32">
          <Scissors className="w-24 h-24 text-blue-500" />
        </div>
        <div className="absolute bottom-24 left-24">
          <Activity className="w-20 h-20 text-blue-400" />
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
            Atelectasia Pós-Operatória
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
          <h2 className="text-xl text-blue-700 mt-2">
            Uma Combinação de Fatores
          </h2>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Left Side - Factors */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Hipoventilação */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Hipoventilação
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Dor</strong> - reduz a expansão
                        torácica
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Anestesia</strong> - depressão
                        respiratória
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Opioides</strong> - redução do
                        drive respiratório
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="text-sm text-red-700">
                      <strong>Resultado:</strong> Colapso
                      preferencial das bases pulmonares
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Clearance Mucociliar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Comprometimento do Clearance Mucociliar
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Tosse ineficaz</strong> - dor,
                        fraqueza muscular
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Muco espesso</strong> -
                        desidratação, medicamentos
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-blue-700">
                        <strong>Disfunção ciliar</strong> -
                        efeitos anestésicos
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-sm text-orange-700">
                      <strong>Resultado:</strong> Acúmulo de
                      secreções → obstrução brônquica
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Mechanism & Result */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Combination Result */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  Resultado Final
                </h3>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 border border-blue-200">
                    <span className="text-orange-600 font-semibold">
                      Atelectasia
                    </span>
                  </div>
                </div>

                <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 text-center">
                    Fisiopatologia Mista
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-700">
                        Secreções obstruem vias aéreas menores
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-700">
                        Respiração superficial reduz
                        recrutamento
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-700">
                        Preferência por bases pulmonares
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Risk Factors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-4 text-center">
                Fatores de Risco Específicos
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Scissors className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      Doenças Pulmonares
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scissors className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      Cirurgia torácica
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Pill className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      Anestesia geral
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">Idade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      Posicionamento Corporal
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      Obesidade
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}