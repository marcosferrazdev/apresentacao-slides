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
import { DpisTitleSlide } from "./dpis-slides/DpisTitleSlide";
import { IntroductionSlide } from "./dpis-slides/IntroductionSlide";
import { ClassificationSlide1 } from "./dpis-slides/ClassificationSlide1";
import { ClassificationSlide2 } from "./dpis-slides/ClassificationSlide2";
import { ClassificationSlide3 } from "./dpis-slides/ClassificationSlide3";
import { EpidemiologySlide } from "./dpis-slides/EpidemiologySlide";
import { PathogenesisSlide1 } from "./dpis-slides/PathogenesisSlide1";
import { PathogenesisSlide2 } from "./dpis-slides/PathogenesisSlide2";
import { ClinicalManifestationsSlide } from "./dpis-slides/ClinicalManifestationsSlide";
import { DiagnosisSlide } from "./dpis-slides/DiagnosisSlide";
import { ComorbiditiesSlide } from "./dpis-slides/ComorbiditiesSlide";
import { TreatmentSlide } from "./dpis-slides/TreatmentSlide";
import { PrognosisSlide } from "./dpis-slides/PrognosisSlide";
import { FluxogramaIntegradoSlide } from "./dpis-slides/FluxogramaIntegradoSlide";
import { DpisMensagensChaveSlide } from "./dpis-slides/DpisMensagensChaveSlide";
import { DpisReferencesSlide } from "./dpis-slides/DpisReferencesSlide";

const slides = [
  { id: 1, component: DpisTitleSlide },
  { id: 2, component: IntroductionSlide },
  { id: 3, component: ClassificationSlide1 },
  { id: 4, component: ClassificationSlide2 },
  { id: 5, component: ClassificationSlide3 },
  { id: 6, component: EpidemiologySlide },
  { id: 7, component: PathogenesisSlide1 },
  { id: 8, component: PathogenesisSlide2 },
  { id: 9, component: ClinicalManifestationsSlide },
  { id: 10, component: DiagnosisSlide },
  { id: 11, component: ComorbiditiesSlide },
  { id: 12, component: TreatmentSlide },
  { id: 13, component: PrognosisSlide },
  { id: 14, component: FluxogramaIntegradoSlide },
  { id: 15, component: DpisMensagensChaveSlide },
  { id: 16, component: DpisReferencesSlide },
];

interface DpisPresentationProps {
  onGoHome?: () => void;
}

export function DpisPresentation({ onGoHome }: DpisPresentationProps) {
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
        presentationTitle="Doenças Pulmonares Intersticiais (DPIs): Classificação, Patogênese e Manejo"
      />
    </div>
  );
}