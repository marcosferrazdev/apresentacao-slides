import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Activity,
  Bug,
} from "lucide-react";

export function PathophysiologySlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-32">
          <AlertTriangle className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-32">
          <Activity className="w-24 h-24 text-blue-400" />
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
            Consequências Fisiopatológicas
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
          <h2 className="text-xl text-blue-700 mt-2">
            O Impacto Funcional do Colapso Alveolar
          </h2>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Main Flow Diagram */}
        <div className="grid lg:grid-cols-3 gap-8 h-full">
          {/* Primary Consequence - Shunt */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <TrendingDown className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-red-800 mb-2">
                Alteração V/Q
              </h3>
              <div className="h-0.5 bg-red-600 w-12 mx-auto"></div>
            </div>

            <div className="space-y-6">
              {/* V/Q = 0 */}
              <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-red-700">
                    V/Q = 0
                  </div>
                  <p className="text-sm text-red-600">
                    Ventilação/Perfusão
                  </p>
                </div>
                <div className="text-sm text-red-700 leading-relaxed">
                  <strong>Colapso alveolar:</strong> ventilação
                  = 0, mas perfusão mantida
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Shunt */}
              <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">
                  Shunt Intrapulmonar
                </h4>
                <div className="text-sm text-red-700 leading-relaxed">
                  Sangue não oxigenado mistura-se com sangue
                  oxigenado, reduzindo PaO₂
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Hypoxemia */}
              <div className="bg-red-600 text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">HIPOXEMIA</h4>
                <div className="text-sm leading-relaxed">
                  Redução da saturação de oxigênio arterial
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modifying Factors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Gravity factors */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900">
                  Gravidade Depende de:
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Extensão
                  </h4>
                  <p className="text-orange-700 text-sm">
                    Percentual do pulmão afetado determina
                    magnitude do shunt
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    Vasoconstrição Hipóxica
                  </h4>
                  <p className="text-orange-700 text-sm">
                    Mecanismo compensatório que desvia o sangue
                    das áreas colapsadas
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
              >
                <div className="text-sm text-blue-700 text-center">
                  <strong>Eficiência limitada:</strong>{" "}
                  vasoconstrição só ocorre com hipóxia alveolar
                  significativa
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Complications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Bug className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                Complicações Secundárias
              </h3>
              <div className="h-0.5 bg-purple-600 w-12 mx-auto"></div>
            </div>

            <div className="space-y-6">
              {/* Secretion stasis */}
              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">
                  Estase de Secreções
                </h4>
                <div className="space-y-2 text-sm text-purple-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>
                      Clearance mucociliar prejudicado
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Acúmulo de muco espesso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Ambiente favorável a patógenos</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Secondary infection */}
              <div className="bg-purple-600 text-white rounded-lg p-4">
                <h4 className="font-bold mb-2">
                  Risco de Pneumonia
                </h4>
                <div className="text-sm leading-relaxed">
                  Proliferação bacteriana em áreas mal
                  ventiladas
                </div>
              </div>

              {/* Additional risks */}
              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">
                  Fatores Agravantes:
                </h4>
                <div className="space-y-1 text-sm text-purple-700">
                  <div>• Imunossupressão</div>
                  <div>• Hospitalização prolongada</div>
                  <div>• Ventilação mecânica</div>
                  <div>• Aspiração de secreções</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}