import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Search, TestTube, Activity } from 'lucide-react';

const EmpyemaDiagnosisSlide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Stethoscope className="w-32 h-32 text-blue-600" />
        </div>
        <div className="absolute top-40 right-32">
          <Search className="w-24 h-24 text-indigo-600" />
        </div>
        <div className="absolute bottom-32 left-1/3">
          <TestTube className="w-28 h-28 text-blue-500" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Empiema Pleural
        </h1>
        <h2 className="text-2xl text-blue-600">
          Diagnóstico
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex relative z-10 gap-8">
        {/* Left side - Cards */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
        {/* Clinical Manifestations */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <Stethoscope className="w-8 h-8 mr-3 text-blue-600" />
            Manifestações Clínicas
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Pacientes com pneumonia que mantêm <strong>quadro febril e toxêmico</strong> apesar da antibioticoterapia adequada, associado a <strong>dor pleurítica</strong>.
          </p>
        </motion.div>

        {/* Imaging Diagnosis */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <Search className="w-8 h-8 mr-3 text-blue-600" />
            Diagnóstico por Imagem
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="text-lg font-bold text-green-800 mb-2">
                Ultrassonografia Torácica
              </h4>
              <p className="text-gray-700">
                <strong>Excelente</strong> para identificar septações e guiar a punção.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                Tomografia Computadorizada de Tórax
              </h4>
              <p className="text-gray-700">
                <strong>Padrão-ouro</strong> para avaliar a complexidade das coleções e a presença de encarceramento.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thoracentesis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <TestTube className="w-8 h-8 mr-3 text-blue-600" />
            Toracocentese
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Essencial</strong> para o diagnóstico. A confirmação ocorre pela aspiração de pus franco ou por análise bioquímica do líquido pleural.
          </p>
          
        </motion.div>
        </div>

        {/* Right side - Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex-1 flex items-center justify-center gap-4"
        >
          <div className="relative">
            <img
              src="/Pleurais 6.jpg"
              alt="Empiema Pleural - Diagnóstico por Imagem 1"
              className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <span className="text-xs font-semibold">Imagem 1</span>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/Pleurais 7.jpg"
              alt="Empiema Pleural - Diagnóstico por Imagem 2"
              className="w-[200px] h-[200px] object-cover rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-2 py-1 rounded-lg shadow-lg">
              <span className="text-xs font-semibold">Imagem 2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpyemaDiagnosisSlide;