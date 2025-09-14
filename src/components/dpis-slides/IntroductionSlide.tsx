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

        {/* Content Layout - Cards Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-center">
          {/* Cards Section - Left */}
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: point.delay }}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0">
                    <point.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600 mt-1" />
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

          {/* Image Section - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-56 md:w-96 md:h-64 lg:w-[28rem] lg:h-80 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200">
                <img
                  src="/DPI 2.jpg"
                  alt="DPI - Doença Pulmonar Intersticial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}