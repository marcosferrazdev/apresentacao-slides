import React from "react";
import { motion } from "motion/react";
import { Home, Droplets, Building } from "lucide-react";

export function SubtypesSlide() {
  const subtypes = [
    {
      icon: Home,
      title: "PAC",
      subtitle: "Pneumonia Adquirida na Comunidade",
      mechanism:
        "Microaspiração de flora orofaríngea ou inalação de gotículas respiratórias de pessoas infectadas",
      pathogens: "S. pneumoniae, H. influenzae, M. pneumoniae",
      characteristics:
        "Início súbito, pacientes previamente saudáveis",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Droplets,
      title: "Pneumonia Aspirativa",
      subtitle: "Aspiração de Conteúdo Gástrico",
      mechanism: "Pneumonite química + infecção polimicrobiana",
      pathogens: "Anaeróbios, Gram-negativos",
      characteristics: "Pacientes com alteração da consciência",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Building,
      title: "Pneumonia Hospitalar",
      subtitle: "Infecção Nosocomial",
      mechanism:
        "Patógenos resistentes em pacientes vulneráveis",
      pathogens: "P. aeruginosa e MRSA",
      characteristics: ">48h de internação, maior mortalidade",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8 lg:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-4">
          Subtipos de Pneumonia
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "250px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 sm:h-1 bg-gradient-to-r from-green-500 via-orange-500 to-red-500 mx-auto mb-2 sm:mb-4"
        />
        <h2 className="text-base sm:text-lg lg:text-xl text-blue-700">
          Diferentes Mecanismos, Mesma Base Fisiopatológica
        </h2>
      </motion.div>

      {/* Subtypes Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-4 -mt-4 sm:space-y-6 lg:space-y-8 w-full max-w-6xl">
          {subtypes.map((subtype, index) => {
            const IconComponent = subtype.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.3,
                }}
                className="bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-center">
                  {/* Icon and Title */}
                  <div className="lg:col-span-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.3,
                      }}
                      className="flex items-center space-x-3 sm:space-x-4"
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${subtype.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                          {subtype.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-blue-600">
                          {subtype.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.3,
                      }}
                      className="bg-blue-50 rounded-lg p-3 sm:p-4"
                    >
                      <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Mecanismo
                      </h4>
                      <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                        {subtype.mechanism}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + index * 0.3,
                      }}
                      className="bg-blue-50 rounded-lg p-3 sm:p-4"
                    >
                      <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Patógenos Principais
                      </h4>
                      <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                        {subtype.pathogens}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.3,
                      }}
                      className="bg-blue-50 rounded-lg p-3 sm:p-4"
                    >
                      <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Características
                      </h4>
                      <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                        {subtype.characteristics}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}