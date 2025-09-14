import { motion } from "motion/react";
import { Wind, Circle, Search, Zap } from "lucide-react";

export function TransmissionSlide() {
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
          O Início: A Invasão Pulmonar
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12"
        />

        {/* Process Flow */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
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
              <Wind className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  1. Inalação de aerossóis
                </h3>
                <p className="text-blue-700">
                  Gotículas contendo bacilos são inaladas
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Circle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  2. Deposição nos alvéolos
                </h3>
                <p className="text-blue-700">
                  Bacilos alcançam o parênquima pulmonar
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Search className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  3. Fagocitose por macrófagos
                </h3>
                <p className="text-blue-700">
                  Macrófagos alveolares englobam os bacilos
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <Zap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-blue-900 mb-2">
                  4. Sobrevivência e replicação
                </h3>
                <p className="text-blue-700">
                  Bacilo sobrevive no macrófago e se multiplica
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-blue-900 mb-6 text-center">
                Foco de Ghon
              </h3>
              <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                <p className="text-blue-800 text-center mb-4">
                  Pequeno foco de inflamação no pulmão.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200"
        >
          <p className="text-blue-800">
            <strong>Ponto-chave:</strong> O bacilo da
            tuberculose é resistente à digestão pelos
            macrófagos, permitindo sua sobrevivência e
            multiplicação dentro dessas células de defesa.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}