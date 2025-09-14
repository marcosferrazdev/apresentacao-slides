import { motion } from 'motion/react';
import { Target, Users, AlertTriangle, Clock, ArrowRight } from 'lucide-react';

export function TuberculosisConclusionSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-6xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl text-blue-900 mb-4"
        >
          Pontos-Chave da Tuberculose
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12"
        />

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-6 mb-4">
          {/* Left Column - Key Points */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 shadow-sm"
            >
              <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-blue-900 mb-2 text-sm font-semibold">Núcleo da Fisiopatologia</h3>
              <p className="text-blue-700 text-sm leading-normal">
                Sobrevivência intracelular do bacilo + formação de granuloma = 
                mecanismo central da tuberculose
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 shadow-sm"
            >
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-blue-900 mb-2 text-sm font-semibold">Diferenciação Clínica</h3>
              <p className="text-blue-700 text-sm leading-normal">
                Infecção latente (não transmissor) × TB ativa (transmissor sintomático)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 shadow-sm"
            >
              <AlertTriangle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-blue-900 mb-2 text-sm font-semibold">Marco da Transmissibilidade</h3>
              <p className="text-blue-700 text-sm leading-normal">
                Cavitação = momento crítico de transmissibilidade e destruição tecidual
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 shadow-sm"
            >
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-blue-900 mb-2 text-sm font-semibold">Necessidade Terapêutica</h3>
              <p className="text-blue-700 text-sm leading-normal">
                Tratamento longo é essencial para eliminar bacilos ativos e dormentes
              </p>
            </motion.div>
          </div>

          {/* Right Column - Flowchart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-5 border-2 border-blue-200 h-fit"
          >
            <h2 className="text-lg text-blue-900 mb-4 text-center font-semibold">Fluxograma: Do Contágio à Transmissão</h2>
            
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex items-center"
              >
                <div className="bg-blue-200 px-3 py-2 rounded text-blue-800 text-sm flex-grow text-center">
                  Contágio aéreo
                </div>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="flex items-center"
              >
                <div className="bg-blue-300 px-3 py-2 rounded text-blue-800 text-sm flex-grow text-center">
                  Infecção primária
                </div>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="flex items-center"
              >
                <div className="bg-blue-400 px-3 py-2 rounded text-white text-sm flex-grow text-center">
                  Granuloma
                </div>
              </motion.div>
              
              <div className="flex justify-center items-center space-x-1">
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
                <span className="text-blue-600 text-sm">ou</span>
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  className="bg-gray-400 px-3 py-2 rounded text-white text-sm text-center"
                >
                  Latência
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  className="bg-orange-400 px-3 py-2 rounded text-white text-sm text-center"
                >
                  Reativação
                </motion.div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                className="flex items-center"
              >
                <div className="bg-red-500 px-3 py-2 rounded text-white text-sm flex-grow text-center">
                  Cavitação
                </div>
              </motion.div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                className="flex items-center"
              >
                <div className="bg-red-600 px-3 py-2 rounded text-white text-sm flex-grow text-center">
                  Transmissão
                </div>
              </motion.div>
            </div>

            {/* Final Message below the flowchart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="mt-4 p-3 bg-blue-50 rounded border border-blue-200"
            >
              <p className="text-blue-800 text-sm text-center leading-normal">
                <strong>Mensagem final:</strong> A compreensão da fisiopatologia da tuberculose é fundamental 
                para o diagnóstico precoce, tratamento adequado e controle da transmissão, sendo essencial 
                no combate a esta importante causa de morbimortalidade mundial.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}