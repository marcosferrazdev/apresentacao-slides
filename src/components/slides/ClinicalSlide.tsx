import React from 'react';
import { motion } from 'motion/react';
import { Thermometer, Activity, Wind, Heart } from 'lucide-react';

export function ClinicalSlide() {
  const symptoms = [
    {
      icon: Thermometer,
      title: "Febre",
      mechanism: "Efeito das citocinas no hipotálamo",
      description: "IL-1, TNF-α → centro termorregulador",
      color: "from-red-400 to-red-600",
      delay: 0.2
    },
    {
      icon: Activity,
      title: "Tosse Produtiva",
      mechanism: "Eliminação do exsudato",
      description: "Reflexo de limpeza das vias aéreas",
      color: "from-yellow-400 to-orange-500",
      delay: 0.4
    },
    {
      icon: Wind,
      title: "Dispneia/Taquipneia",
      mechanism: "Compensação da hipoxemia",
      description: "↑ FR para manter oxigenação",
      color: "from-blue-400 to-blue-600",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "Dor Torácica Pleurítica",
      mechanism: "Inflamação pleural",
      description: "Irritação das terminações nervosas",
      color: "from-purple-400 to-purple-600",
      delay: 0.8
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Correlação Clínico-Fisiopatológica
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-red-500 via-orange-500 via-blue-500 to-purple-500 mx-auto mb-4"
        />
        <h2 className="text-xl text-blue-700">
          Da Fisiopatologia aos Sintomas
        </h2>
      </motion.div>

      {/* Symptoms Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {symptoms.map((symptom, index) => {
          const IconComponent = symptom.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 180 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: symptom.delay }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: symptom.delay + 0.2 }}
                  className={`w-16 h-16 bg-gradient-to-r ${symptom.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-grow">
                  <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: symptom.delay + 0.3 }}
                    className="text-xl font-semibold text-blue-900 mb-2"
                  >
                    {symptom.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: symptom.delay + 0.4 }}
                    className="mb-3"
                  >
                    <p className="font-medium text-blue-800 mb-1">
                      {symptom.mechanism}
                    </p>
                    <p className="text-blue-600 text-sm leading-relaxed">
                      {symptom.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: symptom.delay + 0.5 }}
                    className={`h-1 bg-gradient-to-r ${symptom.color} rounded-full`}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Central Connection Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200 shadow-lg">
          <h3 className="text-xl font-semibold text-center text-blue-900 mb-6">
            Síntese Clínica
          </h3>
          
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-blue-800 leading-relaxed"
            >
              <strong>Cada sintoma</strong> é uma manifestação direta dos mecanismos fisiopatológicos específicos da pneumonia
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-center justify-center space-x-8 text-sm text-blue-700"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                <span>Inflamação</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                <span>Hipoxemia</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
                <span>Irritação pleural</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}