import { useState } from "react";
import { motion } from "motion/react";
import { SlidePresentation } from "./components/SlidePresentation";
import { AtelectasiaPresentation } from "./components/AtelectasiaPresentation";
import { TuberculosisPresentation } from "./components/TuberculosisPresentation";
import { DpisPresentation } from "./components/DpisPresentation";
import {
  Heart,
  CircleDot,
  Bug,
  Network,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [selectedPresentation, setSelectedPresentation] =
    useState<
      "home" | "pneumonia" | "atelectasia" | "tuberculosis" | "dpis"
    >("home");

  if (selectedPresentation === "pneumonia") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Button
          onClick={() => setSelectedPresentation("home")}
          className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
          variant="outline"
        >
          ← Voltar
        </Button>
        <SlidePresentation onGoHome={() => setSelectedPresentation("home")} />
      </div>
    );
  }

  if (selectedPresentation === "atelectasia") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Button
          onClick={() => setSelectedPresentation("home")}
          className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
          variant="outline"
        >
          ← Voltar
        </Button>
        <AtelectasiaPresentation onGoHome={() => setSelectedPresentation("home")} />
      </div>
    );
  }

  if (selectedPresentation === "tuberculosis") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Button
          onClick={() => setSelectedPresentation("home")}
          className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
          variant="outline"
        >
          ← Voltar
        </Button>
        <TuberculosisPresentation onGoHome={() => setSelectedPresentation("home")} />
      </div>
    );
  }

  if (selectedPresentation === "dpis") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
        <Button
          onClick={() => setSelectedPresentation("home")}
          className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-50 border border-blue-200"
          variant="outline"
        >
          ← Voltar
        </Button>
        <DpisPresentation onGoHome={() => setSelectedPresentation("home")} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Heart className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-32 right-24">
          <CircleDot className="w-24 h-24 text-blue-400" />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <BookOpen className="w-20 h-20 text-blue-300" />
        </div>
        <div className="absolute top-1/3 left-1/3">
          <Bug className="w-16 h-16 text-blue-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/2">
          <Network className="w-18 h-18 text-blue-300" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* Main Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold text-blue-900 mb-2 leading-tight">
            Apresentação - Izabella Porto
          </h1>
          <h3 className="text-3xl text-blue-700 mb-4 leading-tight">
            Estágio em Docência
          </h3>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto max-w-md"
          />
          <h2 className="text-2xl text-blue-700 mt-4 font-medium">
            Fisiopatologia Respiratória
          </h2>
        </motion.div>

        {/* Presentation Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedPresentation("pneumonia")}
          >
            <Heart className="w-16 h-16 text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Pneumonia
            </h3>
            <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors">
              <span className="mr-2">Acessar apresentação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() =>
              setSelectedPresentation("tuberculosis")
            }
          >
            <Bug className="w-16 h-16 text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Tuberculose
            </h3>
            <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors">
              <span className="mr-2">Acessar apresentação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() =>
              setSelectedPresentation("atelectasia")
            }
          >
            <CircleDot className="w-16 h-16 text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Doenças Pleurais + Atelectasia
            </h3>
            <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors">
              <span className="mr-2">Acessar apresentação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() =>
              setSelectedPresentation("dpis")
            }
          >
            <Network className="w-16 h-16 text-blue-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Doenças Pulmonares Intersticiais
            </h3>
            <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-colors">
              <span className="mr-2">Acessar apresentação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 text-blue-500 text-sm"
        >
          Navegue com as setas do teclado • Clique para
          interagir
        </motion.div>
      </motion.div>
    </div>
  );
}