import React from "react";
import { motion } from "motion/react";
import { Shield, Filter, Waves, Users } from "lucide-react";

export function DefenseSlide() {
  const defenses = [
    {
      icon: Filter,
      title: "Defesas Anatômicas e Mecânicas",
      description:
        "Filtração nasal, arquitetura da árvore brônquica e reflexo da tosse e do engasgo.",
      delay: 0.2,
    },
    {
      icon: Waves,
      title: "Depuração Mucociliar",
      description: "Produção de muco e ação ciliar contínua.",
      delay: 0.4,
    },
    {
      icon: Shield,
      title: "Imunidade Inata",
      description:
        "Macrófagos alveolares, proteínas surfactantes.",
      delay: 0.6,
    },
    {
      icon: Users,
      title: "Microbiota Pulmonar",
      description: "Equilíbrio microbiológico natural.",
      delay: 0.8,
    },
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
          A Homeostase Pulmonar
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"
        />
        <h2 className="text-xl text-blue-700">
          Defesas Contra a Invasão
        </h2>
      </motion.div>

      {/* Main Content - Cards and GIF Side by Side */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Defense Mechanisms - Left Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {defenses.map((defense, index) => {
            const IconComponent = defense.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: defense.delay,
                }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: defense.delay + 0.2,
                    }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: defense.delay + 0.3,
                      }}
                      className="text-lg font-semibold text-blue-900 mb-3"
                    >
                      {defense.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: defense.delay + 0.4,
                      }}
                      className="text-blue-700 leading-relaxed"
                    >
                      {defense.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mucociliary Clearance GIF - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
              Depuração Mucociliar em Ação
            </h3>
            <div className="flex justify-center">
               <img 
                 src="./Mucociliary-clearance (1).gif" 
                 alt="Animação da depuração mucociliar" 
                 className="max-w-full h-auto rounded-lg shadow-md"
                 style={{ maxHeight: '350px' }}
               />
             </div>
          </div>
        </motion.div>
      </div>

      {/* Central Lung Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
      >
        <div className="w-64 h-64 opacity-10">
          <Shield className="w-full h-full text-blue-500" />
        </div>
      </motion.div>
    </div>
  );
}