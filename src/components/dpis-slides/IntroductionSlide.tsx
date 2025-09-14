import React from "react";
import { motion } from "motion/react";
import { Network, Zap, Heart, ArrowRight } from "lucide-react";

export function IntroductionSlide() {
  const points = [
    {
      icon: Network,
      title: "200 tipos reconhecidos",
      description: "Diversidade patológica significativa",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "Acometem o interstício pulmonar",
      description: "Estruturas de suporte alveolar",
      delay: 0.8
    },
    {
      icon: Zap,
      title: "Comprometimento das trocas gasosas",
      description: "Consequência central das DPIs",
      delay: 1.0
    },
    {
      icon: ArrowRight,
      title: "Eixo fisiopatológico: inflamação e/ou fibrose",
      description: "Mecanismos fundamentais",
      delay: 1.2
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-20">
          <Network className="w-40 h-40 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-16">
          <Zap className="w-32 h-32 text-blue-400" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 md:mb-8 lg:mb-12"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 md:mb-4">
            Doenças Pulmonares Intersticiais
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg lg:text-xl text-blue-700 mt-2 md:mt-4">
            Características Fundamentais
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto mb-6 md:mb-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: point.delay }}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <point.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600 mt-1" />
                </div>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1 md:mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base text-blue-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <div className="relative mb-8 md:mb-12">
            <div className="w-60 h-20 md:w-64 md:h-24 lg:w-72 lg:h-28 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border-2 border-blue-300 flex items-center justify-center">
              <div className="flex items-center space-x-1.5 md:space-x-2 lg:space-x-3">
                <Network className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500" />
                <Zap className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500" />
                <Heart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-3 md:mt-4 lg:mt-6 w-60 md:w-64 lg:w-72 text-xs md:text-sm lg:text-base text-blue-600 font-medium text-center">
              Interstício → Inflamação/Fibrose → Disfunção
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}