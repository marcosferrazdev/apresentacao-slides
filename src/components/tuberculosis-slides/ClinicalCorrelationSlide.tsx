import { motion } from "motion/react";
import {
  Thermometer,
  Moon,
  Weight,
  Activity,
  MapPin,
} from "lucide-react";

export function ClinicalCorrelationSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-7xl h-full flex flex-col"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-blue-900 mb-2 sm:mb-4"
        >
          Entendendo os Sintomas
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4 sm:mb-6 lg:mb-8"
        />

        {/* Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 min-h-0">
          {/* Systemic Symptoms */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-orange-200 flex flex-col"
          >
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-orange-900 mb-2 sm:mb-3 lg:mb-4">
              Sintomas Sistêmicos
            </h2>
            <p className="text-orange-800 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm">
              Resultado da inflamação crônica
            </p>

            <div className="space-y-1 sm:space-y-2 lg:space-y-3 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <Thermometer className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-orange-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Febre vespertina
                  </h3>
                  <p className="text-orange-700 text-xs">
                    Padrão característico no final do dia
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <Moon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-orange-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Sudorese noturna
                  </h3>
                  <p className="text-orange-700 text-xs">
                    Suor profuso que molha roupas
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <Weight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-orange-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Emagrecimento
                  </h3>
                  <p className="text-orange-700 text-xs">
                    Perda de peso progressiva e significativa
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Respiratory Symptoms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-red-200 flex flex-col"
          >
            <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-red-900 mb-2 sm:mb-3 lg:mb-4">
              Sintomas Respiratórios
            </h2>
            <p className="text-red-800 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm">
              Relacionados à lesão pulmonar
            </p>

            <div className="space-y-1 sm:space-y-2 lg:space-y-3 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-red-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Tosse crônica
                  </h3>
                  <p className="text-red-700 text-xs">
                    Inicialmente seca → produtiva
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-red-600 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="text-left">
                  <h3 className="text-red-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Hemoptise
                  </h3>
                  <p className="text-red-700 text-xs">
                    Sangue no escarro por erosão vascular
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg"
              >
                <Activity className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-red-900 mb-0.5 text-xs sm:text-sm lg:text-base">
                    Dispneia
                  </h3>
                  <p className="text-red-700 text-xs">
                    Falta de ar em casos avançados
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Anatomical Preference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200 lg:col-span-2 xl:col-span-1 flex flex-col"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 lg:mb-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-900">
                Localização Preferencial
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 items-center flex-1">
              <div className="text-left">
                <h3 className="text-blue-900 mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base">
                  Predomínio nos Ápices Pulmonares
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-blue-700 text-xs sm:text-sm">
                      Áreas com maior concentração de oxigênio
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-blue-700 text-xs sm:text-sm">
                      Mycobacterium tuberculosis é aeróbio obrigatório
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-blue-700 text-xs sm:text-sm">
                      Menor mobilidade e drenagem linfática
                    </p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="relative"
              >
                <div className="w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 mx-auto bg-gradient-to-b from-red-200 to-blue-200 rounded-lg relative">
                  {/* Lung representation */}
                  <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 bg-red-300 rounded-t-full opacity-80">
                    <div className="absolute inset-1 sm:inset-2 bg-red-400 rounded-t-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-10 sm:top-12 lg:top-14 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-300 rounded-b-full opacity-60"></div>

                  <div className="absolute top-3 sm:top-4 lg:top-5 left-1/2 transform -translate-x-1/2 text-xs text-red-800">
                    Ápices
                  </div>
                  <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-blue-800">
                    Bases
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Clinical Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-2 sm:mt-3 lg:mt-4 p-2 sm:p-3 lg:p-4 bg-blue-50 rounded-lg border border-blue-200"
        >
          <p className="text-blue-800 text-xs sm:text-sm lg:text-base">
            <strong>Correlação Fisiopatológica:</strong> Os sintomas refletem diretamente os mecanismos 
            patológicos: inflamação crônica (sintomas sistêmicos) e destruição tecidual (sintomas respiratórios).
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}