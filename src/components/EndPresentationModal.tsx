import React from "react";
import { motion } from "motion/react";
import { Home, RotateCcw, X } from "lucide-react";
import { Button } from "./ui/button";

interface EndPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestartPresentation: () => void;
  onGoHome: () => void;
  presentationTitle: string;
}

export function EndPresentationModal({
  isOpen,
  onClose,
  onRestartPresentation,
  onGoHome,
  presentationTitle,
}: EndPresentationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-xl border border-blue-200 p-8 max-w-md mx-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mx-auto mb-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <RotateCcw className="w-8 h-8 text-blue-600" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Apresentação Concluída!
          </h3>
          
          {/* Subtitle */}
          <p className="text-blue-700 mb-6">
            Você chegou ao final da apresentação sobre{" "}
            <span className="font-medium">"{presentationTitle}"</span>.
            O que gostaria de fazer agora?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <Button
                onClick={onRestartPresentation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reiniciar Apresentação
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1"
            >
              <Button
                onClick={onGoHome}
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Voltar à Home
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}