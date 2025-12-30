"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useRef } from "react";

interface MobileSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSearchOverlay({
  isOpen,
  onClose,
}: MobileSearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the animation has started/DOM is ready
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-white text-black"
        >
          {/* Header Section */}
          <div className="flex items-center p-4 border-b border-gray-100 gap-4">
            <button
              onClick={onClose}
              className="p-1 -ml-1 text-black hover:text-gray-600 transition-colors"
              aria-label="Back"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1 relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-0" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Cari"
                className="w-full pl-8 pr-4 py-2 border-none shadow-none focus-visible:ring-0 text-lg placeholder:text-gray-400"
                autoFocus
              />
            </div>
          </div>

          {/* Optional: Add Recent Searches or Suggestions here later */}
          <div className="p-4">{/* Content placeholder */}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
