import React from "react";
import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function SubtypesSlide2() {
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
          Via Final Comum
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-2 sm:mb-4"
        />
        <h2 className="text-base sm:text-lg lg:text-xl text-blue-700">
          Convergência Fisiopatológica
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto w-full items-center">
          
          {/* Via Final Comum */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-200 shadow-lg">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900">
                  Sequência Unificada
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-blue-800 leading-relaxed text-sm sm:text-base lg:text-lg text-center">
                  <strong>Independente do subtipo</strong>, todos convergem para a mesma sequência fisiopatológica:
                </p>
                
                <div className="bg-white/60 rounded-lg p-3 sm:p-4 lg:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex items-center text-blue-600 font-semibold text-sm sm:text-base lg:text-lg"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-bold">1</span>
                      </div>
                      Invasão Patogênica
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      className="flex items-center text-blue-600 font-semibold text-sm sm:text-base lg:text-lg"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-bold">2</span>
                      </div>
                      Inflamação Alveolar
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="flex items-center text-blue-600 font-semibold text-sm sm:text-base lg:text-lg"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-bold">3</span>
                      </div>
                      Consolidação
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      className="flex items-center text-blue-600 font-semibold text-sm sm:text-base lg:text-lg"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-bold">4</span>
                      </div>
                      Hipoxemia
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      className="flex items-center text-blue-600 font-semibold text-sm sm:text-base lg:text-lg"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-bold">5</span>
                      </div>
                      Sintomas Clínicos
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Lung Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border-2 border-blue-200 bg-white">
                <ImageWithFallback
                  src="/Pneumonia.jpg"
                  alt="Pneumonia"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}