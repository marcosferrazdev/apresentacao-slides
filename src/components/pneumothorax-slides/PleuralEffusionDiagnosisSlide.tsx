import React from "react";
import { motion } from "motion/react";
import { Stethoscope, Eye, Syringe, Search, Activity, Droplets } from "lucide-react";

export function PleuralEffusionDiagnosisSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20">
          <Search className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Droplets className="w-24 h-24 text-blue-400" />
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
            Derrame Pleural
          </h1>
          <h2 className="text-2xl text-blue-700 font-medium">
            Diagnóstico
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
        {/* Main Diagnostic Methods Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Clinical Assessment */}
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
                className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3"
              >
                <Stethoscope className="w-8 h-8 text-red-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Avaliação Clínica
              </h3>
              <div className="h-0.5 bg-red-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {/* Clinical Manifestations */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 text-sm">
                  🩺 Manifestações Clínicas
                </h4>
                <ul className="text-red-700 text-xs space-y-1">
                  <li>• <strong>Dispneia</strong> (proporcional ao volume)</li>
                  <li>• <strong>Tosse seca</strong> persistente</li>
                  <li>• <strong>Dor torácica</strong> de característica pleurítica</li>
                </ul>
              </div>

              {/* Physical Examination */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm">
                  👨‍⚕️ Exame Físico
                </h4>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-blue-700 text-xs">
                      <strong>Percussão:</strong> Macicez sobre a área do derrame
                    </div>
                  </div>
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-blue-700 text-xs">
                      <strong>Palpação:</strong> Redução do frêmito tóraco-vocal
                    </div>
                  </div>
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-blue-700 text-xs">
                      <strong>Ausculta:</strong> Abolição do murmúrio vesicular
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imaging Diagnosis */}
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
                className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3"
              >
                <Eye className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Diagnóstico por Imagem
              </h3>
              <div className="h-0.5 bg-purple-500 w-12 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {/* Chest X-ray */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2 text-sm">
                  📋 Radiografia de Tórax
                </h4>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-purple-700 text-xs">
                      <strong>✓</strong> Velamento do seio costofrênico
                    </div>
                  </div>
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-purple-700 text-xs">
                      <strong>✓</strong> Presença da parábola de Damoiseau
                    </div>
                  </div>
                  <div className="bg-white/70 rounded p-2">
                    <div className="text-purple-700 text-xs">
                      <strong>✓</strong> Opacidade homogênea com limite superior côncavo
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Imaging */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 text-sm">
                  🔍 Métodos Complementares
                </h4>
                <ul className="text-green-700 text-xs space-y-1">
                  <li>• <strong>Ultrassom:</strong> Localização e volume</li>
                  <li>• <strong>TC de tórax:</strong> Caracterização detalhada</li>
                  <li>• <strong>Decúbito lateral:</strong> Mobilidade do líquido</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thoracentesis Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg mb-6"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-3"
            >
              <Syringe className="w-8 h-8 text-orange-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Toracocentese
            </h3>
            <div className="h-0.5 bg-orange-500 w-16 mx-auto mb-4"></div>
            <p className="text-blue-700 text-sm">
              Procedimento <strong>diagnóstico</strong> e, por vezes, <strong>terapêutico</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Light's Criteria */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-3 text-sm text-center">
                ⚖️ Critérios de Light
              </h4>
              <div className="text-orange-700 text-xs space-y-2">
                <div className="bg-white/70 rounded p-2">
                  <strong>Proteína pleural/sérica</strong><br/>
                  &gt; 0,5
                </div>
                <div className="bg-white/70 rounded p-2">
                  <strong>LDH pleural/sérica</strong><br/>
                  &gt; 0,6
                </div>
                <div className="bg-white/70 rounded p-2">
                  <strong>LDH pleural</strong><br/>
                  &gt; 2/3 do limite superior sérico
                </div>
              </div>
            </div>

            {/* Analysis Parameters */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3 text-sm text-center">
                🧪 Análise do Líquido
              </h4>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• <strong>Aspecto:</strong> Claro, turvo, hemorrágico</li>
                <li>• <strong>Citologia:</strong> Contagem celular</li>
                <li>• <strong>Bioquímica:</strong> Proteínas, LDH, glicose</li>
                <li>• <strong>Microbiologia:</strong> Gram, culturas</li>
                <li>• <strong>pH:</strong> Importante no empiema</li>
              </ul>
            </div>

            {/* Etiological Investigation */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3 text-sm text-center">
                🔬 Investigação Etiológica
              </h4>
              <ul className="text-green-700 text-xs space-y-1">
                <li>• <strong>ADA:</strong> Tuberculose pleural</li>
                <li>• <strong>Citologia oncótica:</strong> Neoplasias</li>
                <li>• <strong>Complemento:</strong> Doenças autoimunes</li>
                <li>• <strong>Triglicerídeos:</strong> Quilotórax</li>
                <li>• <strong>Amilase:</strong> Pancreatite</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Diagnostic Algorithm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center flex items-center justify-center">
            <Activity className="w-5 h-5 mr-2" />
            🎯 Algoritmo Diagnóstico
          </h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="bg-red-100 rounded-lg p-3 text-center border border-red-200">
              <div className="font-semibold text-red-800 mb-1 text-xs">1. Suspeita Clínica</div>
              <div className="text-red-700 text-xs">Sintomas + Exame Físico</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 text-center border border-purple-200">
              <div className="font-semibold text-purple-800 mb-1 text-xs">2. Confirmação</div>
              <div className="text-purple-700 text-xs">Radiografia de Tórax</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-3 text-center border border-orange-200">
              <div className="font-semibold text-orange-800 mb-1 text-xs">3. Caracterização</div>
              <div className="text-orange-700 text-xs">Toracocentese</div>
            </div>
            <div className="bg-green-100 rounded-lg p-3 text-center border border-green-200">
              <div className="font-semibold text-green-800 mb-1 text-xs">4. Etiologia</div>
              <div className="text-green-700 text-xs">Critérios de Light</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}