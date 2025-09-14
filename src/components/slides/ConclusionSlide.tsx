import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Target, BookOpen, ArrowDown } from 'lucide-react';

export function ConclusionSlide() {
  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Falha das defesas pulmonares",
      subtitle: "Inflamação alveolar intensa",
      color: "from-red-400 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Consolidação pulmonar",
      subtitle: "Hipoxemia via shunt intrapulmonar",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Sinais e sintomas",
      subtitle: "Expressão da fisiopatologia",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Target,
      title: "Entender o mecanismo unificado",
      subtitle: "Essencial ao manejo clínico",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const pathwaySteps = [
    { label: "Patógeno", icon: "🦠", color: "bg-red-500" },
    { label: "Inflamação Alveolar", icon: "🔥", color: "bg-orange-500" },
    { label: "Consolidação", icon: "🫁", color: "bg-blue-500" },
    { label: "Hipoxemia", icon: "📉", color: "bg-purple-500" },
    { label: "Sintomas Clínicos", icon: "🩺", color: "bg-green-500" }
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
          Conclusão
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"
        />
        <h2 className="text-2xl text-blue-700">
          Síntese do Conhecimento Integrado
        </h2>
      </motion.div>

      {/* Main Content - Two Columns */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Key Points */}
        <div className="space-y-4">
          {keyPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-grow">
                    <motion.h3
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                      className="font-semibold text-blue-900 mb-2"
                    >
                      {point.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                      className="text-blue-700 text-sm"
                    >
                      {point.subtitle}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column - Pathway Synthesis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="h-fit"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-xl p-6 border border-blue-200 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900">
                Progressão Fisiopatológica Unificada
              </h3>
            </div>

            {/* Visual Pathway */}
            <div className="space-y-4 mb-6">
              {pathwaySteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    className="flex items-center w-full"
                  >
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0`}>
                      <span className="text-lg">{step.icon}</span>
                    </div>
                    <p className="text-sm font-medium text-blue-900 flex-grow">
                      {step.label}
                    </p>
                  </motion.div>

                  {index < pathwaySteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.2 }}
                      className="ml-6 my-1"
                    >
                      <ArrowDown className="w-4 h-4 text-blue-400 mx-auto" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="bg-white/50 rounded-lg p-4 border border-blue-100"
            >
              <h4 className="font-semibold text-blue-900 mb-2 text-base">
                Mensagem Final
              </h4>
              <p className="text-blue-800 leading-relaxed text-sm mb-3">
                O <strong>entendimento integrado da fisiopatologia</strong> permite ao clínico:
              </p>
              <div className="space-y-1 text-xs text-blue-700">
                <div>• Diagnóstico mais preciso</div>
                <div>• Tratamento direcionado</div>
                <div>• Prevenção eficaz</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20">
          <CheckCircle className="w-24 h-24 text-green-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Target className="w-20 h-20 text-purple-500" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <BookOpen className="w-16 h-16 text-blue-500" />
        </div>
      </motion.div>
    </div>
  );
}