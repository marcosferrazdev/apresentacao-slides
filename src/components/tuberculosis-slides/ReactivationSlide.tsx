import { motion } from "motion/react";
import {
  AlertTriangle,
  Droplets,
  Zap,
  Users,
} from "lucide-react";

export function ReactivationSlide() {
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
          A Quebra do Cerco → Doença Ativa
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12"
        />

        {/* Risk Factors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-blue-900 mb-6">
            Fatores de Risco para Reativação
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-red-50 p-4 rounded-lg border border-red-200"
            >
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-red-800 mb-2">HIV</h3>
              <p className="text-red-700 text-sm">
                Imunossupressão grave
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-orange-50 p-4 rounded-lg border border-orange-200"
            >
              <Droplets className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="text-orange-800 mb-2">Diabetes</h3>
              <p className="text-orange-700 text-sm">
                Hiperglicemia crônica
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-yellow-50 p-4 rounded-lg border border-yellow-200"
            >
              <Users className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="text-yellow-800 mb-2">
                Desnutrição
              </h3>
              <p className="text-yellow-700 text-sm">
                Deficiência imunológica
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-purple-50 p-4 rounded-lg border border-purple-200"
            >
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-purple-800 mb-2">
                Corticoterapia
              </h3>
              <p className="text-purple-700 text-sm">
                Supressão imunológica
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Flow */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Sequential Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <h3 className="text-blue-900 mb-2">
                1. Necrose caseosa se liquefaz
              </h3>
              <p className="text-blue-700 text-sm">
                Mudança de consistência favorece replicação
                bacilar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <h3 className="text-blue-900 mb-2">
                2. Meio favorável à multiplicação
              </h3>
              <p className="text-blue-700 text-sm">
                Material liquefeito permite crescimento
                exponencial
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100"
            >
              <h3 className="text-blue-900 mb-2">
                3. Cavitação pulmonar
              </h3>
              <p className="text-blue-700 text-sm">
                Multiplicação bacilar e destruição tecidual
                podem corroer a parede de um brônquio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="p-4 bg-red-50 backdrop-blur-sm rounded-lg border border-red-200"
            >
              <h3 className="text-red-800 mb-2">
                4. Paciente se torna bacilífero
              </h3>
              <p className="text-red-700 text-sm">
                Transmissibilidade aumenta drasticamente
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visual Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              {/* Medical Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="flex justify-center"
              >
                <img 
                  src="/Tuberculose 1.jpg" 
                  alt="Tuberculose - Processo de Cavitação" 
                  className="w-80 h-60 object-cover rounded-lg shadow-lg border border-blue-200"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}