import { motion } from "motion/react";
import { Bug, Target, Users, BookOpen } from "lucide-react";

export function TuberculosisTitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl text-blue-900 mb-8 leading-tight"
        >
          Fisiopatologia da Tuberculose
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl text-blue-700 mb-12"
        >
          Do Contágio à Cavitação
        </motion.h2>

        {/* Key Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 justify-items-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <Bug className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-blue-900 mb-2">
              Agente Etiológico
            </h3>
            <p className="text-blue-700 text-sm">
              Mycobacterium tuberculosis (Bacilo de Koch)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-blue-900 mb-2">Relevância</h3>
            <p className="text-blue-700 text-sm">
              Endemia global, alta morbimortalidade
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm"
          >
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-blue-900 mb-2">Objetivo</h3>
            <p className="text-blue-700 text-sm">
              Entender do contágio à doença ativa
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}