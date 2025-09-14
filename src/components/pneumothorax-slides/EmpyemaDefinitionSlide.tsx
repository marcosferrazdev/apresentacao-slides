import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Activity, ArrowRight } from 'lucide-react';

const EmpyemaDefinitionSlide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-8 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Wind className="w-32 h-32 text-red-600" />
        </div>
        <div className="absolute top-40 right-32">
          <Activity className="w-24 h-24 text-orange-600" />
        </div>
        <div className="absolute bottom-32 left-1/3">
          <Wind className="w-28 h-28 text-red-500" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <h1 className="text-4xl font-bold text-red-800 mb-2">
          Empiema Pleural
        </h1>
        <h2 className="text-2xl text-red-600">
          Definição e Fisiopatologia
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-red-100"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-red-600" />
            Definição
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Consiste na presença de <strong>coleção purulenta no espaço pleural</strong>, sendo a principal etiologia o <strong>derrame parapneumônico complicado</strong>.
          </p>
        </motion.div>

        {/* Pathophysiology */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-100"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
            <Wind className="w-8 h-8 mr-3 text-red-600" />
            Fisiopatologia (Evolução)
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            O desenvolvimento do empiema ocorre em um <strong>continuum de três fases</strong>:
          </p>

          {/* Phase I */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
          >
            <h4 className="text-xl font-bold text-blue-800 mb-2 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">I</span>
              Fase Exsudativa
            </h4>
            <p className="text-gray-700">
              Acúmulo de <strong>líquido pleural estéril</strong>, fluido e com baixa celularidade, em resposta à inflamação pulmonar adjacente.
            </p>
          </motion.div>

          {/* Phase II */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500"
          >
            <h4 className="text-xl font-bold text-orange-800 mb-2 flex items-center">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">II</span>
              Fase Fibrinopurulenta
            </h4>
            <p className="text-gray-700">
              <strong>Invasão bacteriana</strong> do espaço pleural, com deposição de fibrina, formação de septos e loculações, e aumento da celularidade e viscosidade do líquido (pus).
            </p>
          </motion.div>

          {/* Phase III */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500"
          >
            <h4 className="text-xl font-bold text-red-800 mb-2 flex items-center">
              <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">III</span>
              Fase de Organização
            </h4>
            <p className="text-gray-700">
              Proliferação de fibroblastos, resultando na formação de uma <strong>membrana fibrótica espessa e inelástica</strong> (encarceramento pulmonar ou "pleural peel"), que restringe a expansão pulmonar.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpyemaDefinitionSlide;