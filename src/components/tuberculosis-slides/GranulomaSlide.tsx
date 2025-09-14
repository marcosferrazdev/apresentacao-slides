import { motion } from "motion/react";
import { Shield, Clock, Layers, Target } from "lucide-react";

export function GranulomaSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-6xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl text-blue-900 mb-4"
        >
          O Granuloma: Mecanismo de Contenção
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12"
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Formation Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Clock className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  Desenvolvimento temporal
                </h3>
                <p className="text-blue-700">
                  Sistema de defesa se organiza após semanas da
                  infecção inicial
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Layers className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  Estrutura em camadas
                </h3>
                <p className="text-blue-700">
                  Formação de um "muro celular" em torno dos
                  macrófagos infectados
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Target className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  Centro necrótico
                </h3>
                <p className="text-blue-700">
                  Interior com necrose caseosa (aspecto de
                  queijo)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  Função protetiva
                </h3>
                <p className="text-blue-700">
                  Isolar os bacilos e limitar a disseminação
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Granuloma Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-blue-900 mb-6 text-center">
                Estrutura do Granuloma
              </h3>

              {/* Concentric circles representing granuloma layers */}
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute inset-0 bg-blue-600 rounded-full opacity-20"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute inset-4 bg-blue-500 rounded-full opacity-40"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 0.6 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="absolute inset-8 bg-blue-400 rounded-full opacity-60"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 0.4 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="absolute inset-12 bg-yellow-300 rounded-full opacity-80"
                />

                {/* Labels */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-700">
                  Linfócitos
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-xs text-blue-700">
                  Epitélio
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-700">
                  Fibroblastos
                </div>
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-xs text-blue-700">
                  Necrose caseosa
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200"
        >
          <p className="text-blue-800">
            <strong>Conceito-chave:</strong> O granuloma é uma
            estrutura defensiva complexa que representa o
            equilíbrio entre a tentativa do organismo de
            eliminar o bacilo e a resistência do Mycobacterium
            tuberculosis.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}