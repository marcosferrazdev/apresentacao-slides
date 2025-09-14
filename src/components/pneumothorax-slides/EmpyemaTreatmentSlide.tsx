import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Syringe, Scissors, AlertTriangle } from 'lucide-react';

const EmpyemaTreatmentSlide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Pill className="w-32 h-32 text-green-600" />
        </div>
        <div className="absolute top-40 right-32">
          <Syringe className="w-24 h-24 text-emerald-600" />
        </div>
        <div className="absolute bottom-32 left-1/3">
          <Scissors className="w-28 h-28 text-green-500" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          Empiema Pleural
        </h1>
        <h2 className="text-2xl text-green-600">
          Tratamento
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 space-y-6 max-w-6xl mx-auto w-full">
        {/* First Row - Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Antibiotic Therapy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100"
          >
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Pill className="w-7 h-7 mr-3 text-green-600" />
              Antibioticoterapia
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Mandatória</strong>, com espectro direcionado aos patógenos mais prevalentes, administrada por <strong>via intravenosa</strong>.
              </p>
            </div>
          </motion.div>

          {/* Pleural Drainage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100"
          >
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <Syringe className="w-7 h-7 mr-3 text-green-600" />
              Drenagem Pleural
            </h3>
            <div className="space-y-3">
              <div className="bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                  <h4 className="text-base font-bold text-orange-800">
                    Procedimento Fundamental
                  </h4>
                </div>
                <p className="text-sm text-gray-700">
                  Indicado a partir da <strong>Fase II</strong>.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                <h4 className="text-base font-bold text-green-800 mb-2">
                  Objetivos
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Evacuação completa</strong> da coleção purulenta</li>
                  <li>• Controle do processo infeccioso</li>
                  <li>• Permitir a <strong>reexpansão pulmonar</strong></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Surgical Treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <Scissors className="w-8 h-8 mr-3 text-green-600" />
            Tratamento Cirúrgico (Decorticação)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-800 mb-2">
                Indicações
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Falha do tratamento conservador</li>
                <li>• <strong>Fase III</strong> (de organização)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="text-lg font-bold text-purple-800 mb-2">
                Objetivo
              </h4>
              <p className="text-gray-700">
                Remoção do <strong>tecido fibrótico</strong> que aprisiona o pulmão, permitindo sua <strong>completa reexpansão</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpyemaTreatmentSlide;