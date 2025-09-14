import { motion } from "motion/react";
import { Moon, Sun, Users, AlertTriangle } from "lucide-react";

export function LatentVsActiveSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-7xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl text-blue-900 mb-4"
        >
          O Equilíbrio: Latência × Ativação
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12"
        />

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Latent TB */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border-2 border-slate-200"
          >
            <div className="flex items-center justify-center mb-6">
              <Moon className="w-16 h-16 text-slate-600" />
            </div>
            <h2 className="text-2xl text-slate-800 mb-6">
              Infecção Latente
            </h2>

            <div className="space-y-4 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Bacilos vivos, mas dormentes
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Contidos dentro de granulomas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  90-95% dos infectados
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">Sem sintomas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Não transmissor
                </p>
              </motion.div>
            </div>

            <div className="mt-6 p-4 bg-slate-200 rounded-lg">
              <p className="text-slate-800 text-sm">
                <strong>Estado:</strong> Equilíbrio imunológico
                mantido
              </p>
            </div>
          </motion.div>

          {/* Active TB */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 border-2 border-red-200"
          >
            <div className="flex items-center justify-center mb-6">
              <Sun className="w-16 h-16 text-red-600" />
            </div>
            <h2 className="text-2xl text-red-800 mb-6">
              TB Ativa
            </h2>

            <div className="space-y-4 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-red-700">
                  Quebra do equilíbrio
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-red-700">
                  Multiplicação bacilar intensa
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-red-700">
                  5-10% evoluem para doença
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-red-700">
                  Quadro clínico manifesto
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-red-700">Transmissível</p>
              </motion.div>
            </div>

            <div className="mt-6 p-4 bg-red-200 rounded-lg">
              <p className="text-red-800 text-sm">
                <strong>Estado:</strong> Falha do controle
                imunológico
              </p>
            </div>
          </motion.div>
        </div>

        {/* Risk Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-yellow-800">
                Fatores de Risco para Ativação
              </h3>
            </div>
            <div className="text-yellow-700 text-base space-y-1">
              <p>• Imunossupressão (HIV, corticoides)</p>
              <p>• Diabetes mellitus</p>
              <p>• Desnutrição</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}