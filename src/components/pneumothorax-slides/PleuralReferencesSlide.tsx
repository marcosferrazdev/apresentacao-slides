import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

export function PleuralReferencesSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-blue-100"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 mr-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Referências - Doenças Pleurais
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* References Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="grid gap-4 text-sm lg:text-base text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-200 pl-4 py-3 bg-blue-50/50 rounded-r-lg">
              <strong>1.</strong> MACDUFF, A.; ARNOLD A.; HARVEY, J. Management of spontaneous pneumothorax: British Thoracic Society Pleural Disease Guideline 2010. <em>Thorax</em>, v. 65, n. 2, 2010.
            </p>
            
            <p className="border-l-4 border-indigo-200 pl-4 py-3 bg-indigo-50/50 rounded-r-lg">
              <strong>2.</strong> NOPPEN, M.; KEUKELEIRE, T. Pneumothorax. <em>Respiration</em>, v. 76, n.2, 2008
            </p>
            
            <p className="border-l-4 border-blue-200 pl-4 py-3 bg-blue-50/50 rounded-r-lg">
              <strong>3.</strong> BAUMANN, M. H. et al. Management of Spontaneous Pneumothorax An American College of Chest Physicians Delphi Consensus Statement. <em>Consensus Statement</em>, v.119, n.2, 2001
            </p>
            
            <p className="border-l-4 border-indigo-200 pl-4 py-3 bg-indigo-50/50 rounded-r-lg">
              <strong>4.</strong> LIGHT, R. W. Pleural Diseases. 6th ed. Philadelphia: Lippincott Williams & Wilkins, 2013.
            </p>
            
            <p className="border-l-4 border-blue-200 pl-4 py-3 bg-blue-50/50 rounded-r-lg">
              <strong>5.</strong> HOOPER, C.; LEE, Y. C. G.; MASKELL, N. Investigation of a unilateral pleural effusion in adults: British Thoracic Society pleural disease guideline 2010. <em>Thorax</em>, v. 65, n. 2, 2010
            </p>
            
            <p className="border-l-4 border-indigo-200 pl-4 py-3 bg-indigo-50/50 rounded-r-lg">
              <strong>6.</strong> MARCHI, E.; LUNDGREN, F.; MUSSI, R. Derrame pleural parapneumônico e empiema. <em>J. bras. pneumol.</em>, v. 32, n. 4, 2006
            </p>
            
            <p className="border-l-4 border-blue-200 pl-4 py-3 bg-blue-50/50 rounded-r-lg">
              <strong>7.</strong> DAVIES, H. E.; DAVIES, R. J. O.; DAVIES, C. W. H. Management of pleural infection in adults: British Thoracic Society Pleural Disease Guideline 2010. <em>Thorax</em>, n. 65, v. 2, 2010.
            </p>
            
            <p className="border-l-4 border-indigo-200 pl-4 py-3 bg-indigo-50/50 rounded-r-lg">
              <strong>8.</strong> SUNDARALINGAM, A.; BANKA, R.; RAHMAN, N. M. Management of Pleural Infection, <em>Pulm Ther.</em>, n. 7, v. 1, 2020.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 lg:mt-10 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-500">
            Referências bibliográficas - Pneumotórax, Derrame Pleural e Empiema
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}