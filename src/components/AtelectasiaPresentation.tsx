import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  Dot,
} from "lucide-react";
import { Button } from "./ui/button";
import { EndPresentationModal } from "./EndPresentationModal";
// Pneumothorax, Pleural Effusion and Empyema slides
import { PneumothoraxTitleSlide } from "./pneumothorax-slides/PneumothoraxTitleSlide";
import { PneumothoraxDefinitionSlide } from "./pneumothorax-slides/PneumothoraxDefinitionSlide";
import { PneumothoraxClassificationSlide } from "./pneumothorax-slides/PneumothoraxClassificationSlide";
import { PneumothoraxDiagnosisSlide } from "./pneumothorax-slides/PneumothoraxDiagnosisSlide";
import { PneumothoraxTreatmentSlide } from "./pneumothorax-slides/PneumothoraxTreatmentSlide";
import { PneumothoraxTreatmentSlide2 } from "./pneumothorax-slides/PneumothoraxTreatmentSlide2";
import { PleuralEffusionDefinitionSlide } from "./pneumothorax-slides/PleuralEffusionDefinitionSlide";
import { PleuralEffusionPhysiologySlide } from "./pneumothorax-slides/PleuralEffusionPhysiologySlide";
import { PleuralEffusionDiagnosisSlide } from "./pneumothorax-slides/PleuralEffusionDiagnosisSlide";
import { PleuralEffusionDiagnosisSlide2 } from "./pneumothorax-slides/PleuralEffusionDiagnosisSlide2";
import { PleuralEffusionTreatmentSlide } from "./pneumothorax-slides/PleuralEffusionTreatmentSlide";
import EmpyemaDefinitionSlide from "./pneumothorax-slides/EmpyemaDefinitionSlide";
import EmpyemaDiagnosisSlide from "./pneumothorax-slides/EmpyemaDiagnosisSlide";
import EmpyemaTreatmentSlide from "./pneumothorax-slides/EmpyemaTreatmentSlide";

// Atelectasia slides
import { AtelectasiaTitleSlide } from "./atelectasia-slides/AtelectasiaTitleSlide";
import { AlveolarStabilitySlide } from "./atelectasia-slides/AlveolarStabilitySlide";
import { ClassificationSlide } from "./atelectasia-slides/ClassificationSlide";
import { PostOperativeSlide } from "./atelectasia-slides/PostOperativeSlide";
import { PathophysiologySlide } from "./atelectasia-slides/PathophysiologySlide";
import { RadiologySlide } from "./atelectasia-slides/RadiologySlide";
import { AtelectasiaConclusionSlide } from "./atelectasia-slides/AtelectasiaConclusionSlide";
import { CombinedReferencesSlide } from "./atelectasia-slides/CombinedReferencesSlide";

const slides = [
  // Pneumothorax, Pleural Effusion and Empyema slides (1-14)
  { id: 1, component: PneumothoraxTitleSlide },
  { id: 2, component: PneumothoraxDefinitionSlide },
  { id: 3, component: PneumothoraxClassificationSlide },
  { id: 4, component: PneumothoraxDiagnosisSlide },
  { id: 5, component: PneumothoraxTreatmentSlide },
  { id: 6, component: PneumothoraxTreatmentSlide2 },
  { id: 7, component: PleuralEffusionDefinitionSlide },
  { id: 8, component: PleuralEffusionPhysiologySlide },
  { id: 9, component: PleuralEffusionDiagnosisSlide },
  { id: 10, component: PleuralEffusionDiagnosisSlide2 },
  { id: 11, component: PleuralEffusionTreatmentSlide },
  { id: 12, component: EmpyemaDefinitionSlide },
  { id: 13, component: EmpyemaDiagnosisSlide },
  { id: 14, component: EmpyemaTreatmentSlide },
  
  // Atelectasia slides (15-22)
  { id: 15, component: AtelectasiaTitleSlide },
  { id: 16, component: AlveolarStabilitySlide },
  { id: 17, component: ClassificationSlide },
  { id: 18, component: PostOperativeSlide },
  { id: 19, component: PathophysiologySlide },
  { id: 20, component: RadiologySlide },
  { id: 21, component: AtelectasiaConclusionSlide },
  { id: 22, component: CombinedReferencesSlide },
];

interface AtelectasiaPresentationProps {
  onGoHome?: () => void;
}

export function AtelectasiaPresentation({ onGoHome }: AtelectasiaPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEndModal, setShowEndModal] = useState(false);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setShowEndModal(true);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const restartPresentation = () => {
    setCurrentSlide(0);
    setShowEndModal(false);
  };

  const handleGoHome = () => {
    setShowEndModal(false);
    if (onGoHome) {
      onGoHome();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showEndModal) return; // Don't navigate when modal is open
      
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () =>
      window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, showEndModal]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Slide Content */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 bg-white/40 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-sm border border-blue-100/50 opacity-30 hover:opacity-100 transition-opacity duration-300">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1 sm:p-1.5 lg:p-2 hover:bg-blue-50 disabled:opacity-50"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex space-x-1 sm:space-x-1.5 lg:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="p-0.5 sm:p-1 rounded-full transition-all duration-300"
            >
              {index === currentSlide ? (
                <Dot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 fill-current" />
              ) : (
                <Circle className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-blue-300 hover:text-blue-500" />
              )}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-1 sm:p-1.5 lg:p-2 hover:bg-blue-50 disabled:opacity-50"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 shadow-sm border border-blue-100">
        <span className="text-blue-600 font-medium text-xs sm:text-sm lg:text-base">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* End Presentation Modal */}
      <EndPresentationModal
        isOpen={showEndModal}
        onClose={() => setShowEndModal(false)}
        onRestartPresentation={restartPresentation}
        onGoHome={handleGoHome}
        presentationTitle="Fisiopatologia das Doenças Pleurais e Atelectasia: Uma Abordagem Clínica Integrada"
      />
    </div>
  );
}