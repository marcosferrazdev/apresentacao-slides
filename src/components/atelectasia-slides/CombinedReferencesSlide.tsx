import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export function CombinedReferencesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-blue-100 my-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-4 lg:mb-6"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 mr-3" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
              Referências
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* References Content */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Pleural Diseases References */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-lg lg:text-xl font-bold text-blue-700 mb-3 flex items-center">
              <div className="w-2 h-8 bg-blue-500 rounded-full mr-3" />
              Doenças Pleurais
            </h2>
            <div className="space-y-2 text-xs lg:text-sm text-gray-700 leading-snug">
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">1.</strong> MACDUFF, A.; ARNOLD A.; HARVEY, J. Management of spontaneous pneumothorax: British Thoracic Society Pleural Disease Guideline 2010. <em>Thorax</em>, v. 65, n. 2, 2010.
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">2.</strong> NOPPEN, M.; KEUKELEIRE, T. Pneumothorax. <em>Respiration</em>, v. 76, n.2, 2008
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">3.</strong> BAUMANN, M. H. et al. Management of Spontaneous Pneumothorax An American College of Chest Physicians Delphi Consensus Statement. <em>Consensus Statement</em>, v.119, n.2, 2001
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">4.</strong> LIGHT, R. W. Pleural Diseases. 6th ed. Philadelphia: Lippincott Williams & Wilkins, 2013.
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">5.</strong> HOOPER, C.; LEE, Y. C. G.; MASKELL, N. Investigation of a unilateral pleural effusion in adults: British Thoracic Society pleural disease guideline 2010. <em>Thorax</em>, v. 65, n. 2, 2010
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">6.</strong> MARCHI, E.; LUNDGREN, F.; MUSSI, R. Derrame pleural parapneumônico e empiema. <em>J. bras. pneumol.</em>, v. 32, n. 4, 2006
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">7.</strong> DAVIES, H. E.; DAVIES, R. J. O.; DAVIES, C. W. H. Management of pleural infection in adults: British Thoracic Society Pleural Disease Guideline 2010. <em>Thorax</em>, n. 65, v. 2, 2010.
              </p>
              
              <p className="border-l-4 border-blue-200 pl-3 py-2 bg-blue-50/50 rounded-r-lg">
                <strong className="ml-2">8.</strong> SUNDARALINGAM, A.; BANKA, R.; RAHMAN, N. M. Management of Pleural Infection, <em>Pulm Ther.</em>, n. 7, v. 1, 2020.
              </p>
            </div>
          </motion.div>

          {/* Atelectasia References */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-lg lg:text-xl font-bold text-indigo-700 mb-3 flex items-center">
              <div className="w-2 h-8 bg-indigo-500 rounded-full mr-3" />
              Atelectasia
            </h2>
            <div className="space-y-2 text-xs lg:text-sm text-gray-700 leading-snug">
              <p className="border-l-4 border-indigo-200 pl-3 py-2 bg-indigo-50/50 rounded-r-lg hover:bg-indigo-50 transition-colors duration-300">
                <strong className="text-indigo-700 ml-2">1.</strong> ZENG, C. et al. Perioperative Pulmonary Atelectasis – Part I: Biology and Mechanisms. <em>Anesthesiology</em>, v. 136, n. 1, 2022.
              </p>
              
              <p className="border-l-4 border-indigo-200 pl-3 py-2 bg-indigo-50/50 rounded-r-lg hover:bg-indigo-50 transition-colors duration-300">
                <strong className="text-indigo-700 ml-2">2.</strong> PERONI, D. G.; BONER, A. L. Atelectasis: mechanisms, diagnosis and management. <em>Paediatric Respiratory Reviews</em>, v.1, n. 3, 2000.
              </p>
              
              <p className="border-l-4 border-indigo-200 pl-3 py-2 bg-indigo-50/50 rounded-r-lg hover:bg-indigo-50 transition-colors duration-300">
                <strong className="text-indigo-700 ml-2">3.</strong> HOCHHEGGER, B. et al. Consensus statement on thoracic radiology terminology in Portuguese used in Brazil and in Portugal. <em>J Bras Pneumol.</em>, v. 47, n. 5, 2021.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 lg:mt-6 pt-4 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            Referências bibliográficas - Doenças Pleurais e Atelectasia
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}