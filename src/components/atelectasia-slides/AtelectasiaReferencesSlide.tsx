import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export function AtelectasiaReferencesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-blue-100"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 mr-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Referências - Atelectasia
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* References Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-sm lg:text-base text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-200 pl-6 py-4 bg-blue-50/50 rounded-r-lg hover:bg-blue-50 transition-colors duration-300">
              <strong className="text-blue-700">1.</strong> ZENG, C. et al. Perioperative Pulmonary Atelectasis – Part I: Biology and Mechanisms. <em>Anesthesiology</em>, v. 136, n. 1, 2022.
            </p>
            
            <p className="border-l-4 border-indigo-200 pl-6 py-4 bg-indigo-50/50 rounded-r-lg hover:bg-indigo-50 transition-colors duration-300">
              <strong className="text-indigo-700">2.</strong> PERONI, D. G.; BONER, A. L. Atelectasis: mechanisms, diagnosis and management. <em>Paediatric Respiratory Reviews</em>, v.1, n. 3, 2000.
            </p>
            
            <p className="border-l-4 border-blue-200 pl-6 py-4 bg-blue-50/50 rounded-r-lg hover:bg-blue-50 transition-colors duration-300">
              <strong className="text-blue-700">3.</strong> HOCHHEGGER, B. et al. Consensus statement on thoracic radiology terminology in Portuguese used in Brazil and in Portugal. <em>J Bras Pneumol.</em>, v. 47, n. 5, 2021.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            Referências bibliográficas utilizadas no estudo da Atelectasia
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}