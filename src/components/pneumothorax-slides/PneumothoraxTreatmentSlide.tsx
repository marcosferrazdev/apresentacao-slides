import React from "react";
import { motion } from "motion/react";
import { Eye, AlertTriangle, Zap, Scissors, Clock, Activity } from "lucide-react";

export function PneumothoraxTreatmentSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Activity className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Scissors className="w-24 h-24 text-blue-400" />
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Pneumotórax
          </h1>
          <h2 className="text-2xl text-blue-700 font-medium">
            Tratamento
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-sm"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 relative z-10">
        {/* Treatment Options Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Conservative Management */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3"
              >
                <Eye className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Pneumotórax Pequeno
              </h3>
              <div className="text-sm text-green-600 font-medium mb-2">
                (&lt;3 cm) em Paciente Estável
              </div>
              <div className="h-0.5 bg-green-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 text-sm">
                  🏥 Conduta Expectante
                </h4>
                <ul className="text-green-700 text-xs space-y-1">
                  <li>• <strong>Observação clínica</strong> rigorosa</li>
                  <li>• <strong>Oxigenioterapia</strong> (acelera reabsorção do ar)</li>
                  <li>• <strong>Analgesia</strong> adequada</li>
                  <li>• Controle radiológico seriado</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Interventional Management */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3"
              >
                <Activity className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Pneumotórax Grande
              </h3>
              <div className="text-sm text-blue-600 font-medium mb-2">
                (&gt;3 cm) ou Sintomático
              </div>
              <div className="h-0.5 bg-blue-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm">
                  🔧 Drenagem Torácica
                </h4>
                <ul className="text-blue-700 text-xs space-y-1">
                  <li>• <strong>Drenagem fechada</strong> sob selo d'água</li>
                  <li>• Evacuação imediata do ar</li>
                  <li>• Monitorização contínua</li>
                  <li>• Reexpansão pulmonar progressiva</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency and Surgical Management */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Emergency Management */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-red-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3"
              >
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Pneumotórax Hipertensivo
              </h3>
              <div className="text-sm text-red-600 font-medium mb-2">
                ⚠️ EMERGÊNCIA MÉDICA
              </div>
              <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 text-sm">
                  🚨 Características
                </h4>
                <ul className="text-red-700 text-xs space-y-1 mb-3">
                  <li>• Instabilidade hemodinâmica</li>
                  <li>• Desvio contralateral do mediastino</li>
                  <li>• Comprometimento do retorno venoso</li>
                </ul>
                <h4 className="font-semibold text-red-800 mb-2 text-sm">
                  ⚡ Manejo Imediato
                </h4>
                <ul className="text-red-700 text-xs space-y-1">
                  <li>• <strong>Toracocentese de alívio</strong></li>
                  <li>• 2º espaço intercostal, linha hemiclavicular</li>
                  <li>• Seguida por drenagem torácica definitiva</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Surgical Management */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100 shadow-lg"
          >
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3"
              >
                <Scissors className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Tratamento Cirúrgico
              </h3>
              <div className="text-sm text-purple-600 font-medium mb-2">
                Recidivante ou Persistente
              </div>
              <div className="h-0.5 bg-purple-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 text-sm">
                  🔬 Indicações
                </h4>
                <ul className="text-purple-700 text-xs space-y-1 mb-3">
                  <li>• Pneumotórax recidivante</li>
                  <li>• Fístula broncopleural persistente</li>
                  <li>• Falha do tratamento conservador</li>
                </ul>
                <h4 className="font-semibold text-purple-800 mb-2 text-sm">
                  ⚙️ Técnica Preferencial
                </h4>
                <ul className="text-purple-700 text-xs space-y-1">
                  <li>• <strong>Videotoracoscopia</strong> (VATS)</li>
                  <li>• Pleurodese (química ou mecânica)</li>
                  <li>• Ressecção de bolhas/blebs</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Treatment Algorithm Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center flex items-center justify-center">
            <Clock className="w-5 h-5 mr-2" />
            🎯 Algoritmo de Tratamento
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-green-100 rounded-lg p-3 text-center border border-green-200">
              <div className="font-semibold text-green-800 mb-1">Pequeno + Estável</div>
              <div className="text-green-700 text-xs">Observação + O₂</div>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 text-center border border-blue-200">
              <div className="font-semibold text-blue-800 mb-1">Grande + Sintomático</div>
              <div className="text-blue-700 text-xs">Drenagem Torácica</div>
            </div>
            <div className="bg-red-100 rounded-lg p-3 text-center border border-red-200">
              <div className="font-semibold text-red-800 mb-1">Hipertensivo</div>
              <div className="text-red-700 text-xs">Toracocentese + Dreno</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 text-center border border-purple-200">
              <div className="font-semibold text-purple-800 mb-1">Recidivante</div>
              <div className="text-purple-700 text-xs">Cirurgia (VATS)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}