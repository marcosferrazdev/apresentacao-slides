import React from "react";
import { motion } from "motion/react";
import { Shield, Zap, Activity, Heart, Users } from "lucide-react";

export function TreatmentSlide() {
  const treatments = [
    { icon: Shield, title: "Remoção/controle de agentes causais", description: "Evitar exposições identificadas", color: "green" },
    { icon: Zap, title: "Imunossupressão para formas inflamatórias", description: "Corticoides, imunossupressores", color: "orange" },
    { icon: Activity, title: "Antifibróticos para doenças progressivas", description: "Nintedanibe, pirfenidona", color: "blue" },
    { icon: Heart, title: "Reabilitação pulmonar e oxigenoterapia", description: "Melhora da qualidade de vida", color: "purple" },
    { icon: Users, title: "Transplante pulmonar em casos avançados", description: "Última opção terapêutica", color: "red" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8 text-center relative overflow-hidden py-4">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Shield className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <Heart className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
            Estratégias Terapêuticas
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"
          />
          <h2 className="text-base md:text-lg text-blue-700 mt-2">
            Abordagem Multidisciplinar do Tratamento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => {
            const colorClasses = {
              green: {
                bg: "bg-green-100",
                icon: "text-green-600",
                title: "text-green-900",
                text: "text-green-700"
              },
              orange: {
                bg: "bg-orange-100",
                icon: "text-orange-600", 
                title: "text-orange-900",
                text: "text-orange-700"
              },
              blue: {
                bg: "bg-blue-100",
                icon: "text-blue-600",
                title: "text-blue-900", 
                text: "text-blue-700"
              },
              purple: {
                bg: "bg-purple-100",
                icon: "text-purple-600",
                title: "text-purple-900",
                text: "text-purple-700"
              },
              red: {
                bg: "bg-red-100", 
                icon: "text-red-600",
                title: "text-red-900",
                text: "text-red-700"
              }
            };
            const colors = colorClasses[treatment.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 p-2 md:p-3 ${colors.bg} rounded-full`}>
                    <treatment.icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.icon}`} />
                  </div>
                  <div className="text-left flex-grow">
                    <h3 className={`text-sm md:text-base font-semibold ${colors.title} mb-1`}>
                      {treatment.title}
                    </h3>
                    <p className={`text-xs ${colors.text} leading-relaxed`}>
                      {treatment.description}
                    </p>
                  </div>
                  <div className="text-base md:text-lg font-bold text-blue-300">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 md:mt-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 md:p-6 border border-blue-200"
        >
          <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">
            Estratégia por Tipo de DPI
          </h3>
          
          <div className="grid md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
            <div className="text-center p-3 md:p-4 bg-orange-50/50 rounded-lg border border-orange-100">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 md:mb-2" />
              <div className="font-semibold text-orange-800">DPIs Inflamatórias</div>
              <div className="text-orange-700">Imunossupressão</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-blue-50/50 rounded-lg border border-blue-100">
              <Activity className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1 md:mb-2" />
              <div className="font-semibold text-blue-800">DPIs Fibrosantes</div>
              <div className="text-blue-700">Antifibróticos</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-purple-50/50 rounded-lg border border-purple-100">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-1 md:mb-2" />
              <div className="font-semibold text-purple-800">Cuidados Gerais</div>
              <div className="text-purple-700">Reabilitação e suporte</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}