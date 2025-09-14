import React from "react";
import { motion } from "motion/react";
import { Eye, Zap, Users, Droplets } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function InflammatorySlide() {
  const steps = [
    {
      icon: Eye,
      title: "Reconhecimento",
      description:
        "Macrófagos alveolares detectam os patógenos",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Zap,
      title: "Ativação",
      description:
        "Citocinas pró-inflamatórias (TNF-α, IL-1, IL-6)",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Recrutamento",
      description: "Neutrófilos migram para o alvéolo",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Droplets,
      title: "Exsudação",
      description:
        "Aumento da permeabilidade → formação de exsudato",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          A Resposta Inflamatória Alveolar
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "250px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-4"
        />
        <h2 className="text-xl text-blue-700">
          Cascata Inflamatória em 4 Etapas
        </h2>
      </motion.div>

      {/* Inflammatory Process Steps */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-yellow-400 via-blue-400 to-red-400 rounded-full"
          style={{ transformOrigin: "left" }}
        />

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative"
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.2,
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.1 + index * 0.2,
                  }}
                  className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-md"
                >
                  <h3 className="font-semibold text-blue-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-blue-700 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.3 + index * 0.2,
                    }}
                    className="hidden md:block absolute top-8 -right-3 z-20"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-gray-300">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-md border-2 border-red-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmFjdGVyaWElMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc1Nzc3ODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bactérias no microscópio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-red-900 mb-2">
                Resultado Final da Cascata
              </h4>
              <p className="text-red-800 leading-relaxed">
                <strong>Formação de exsudato:</strong> pus,
                fibrina e fluido preenchem o espaço alveolar,
                resultando na consolidação pulmonar
                característica da pneumonia.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}