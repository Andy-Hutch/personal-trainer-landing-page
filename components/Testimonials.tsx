"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  { id: 1, name: "John Doe", title: "Fitness Enthusiast", quote: "This program has completely transformed my life. I’m in the best shape I’ve ever been!" },
  { id: 2, name: "Jane Smith", title: "Beginner", quote: "The personalized plans made it so easy for me to get started. I’m finally seeing results!" },
  { id: 3, name: "Michael Johnson", title: "Athlete", quote: "The expert trainers here pushed me to my limits and helped me achieve my goals faster than I imagined." },
  { id: 4, name: "Emma Brown", title: "New Member", quote: "Great support and motivation! I feel like I’m part of a community that truly cares." },
  { id: 5, name: "Sophia Wilson", title: "Health Coach", quote: "The flexibility of this program is amazing! I love the ability to access workouts anytime." },
  { id: 6, name: "James Lee", title: "Personal Trainer", quote: "As a trainer, I can tell the quality of these plans is top-notch. I highly recommend it to all my clients." },
];

const Testimonials: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full bg-white text-black rounded-lg shadow-md overflow-hidden min-h-[80px] flex items-center justify-center p-2">
          <div className="relative w-full flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsData[currentTestimonial].id}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-4 w-full"
              >
                {/* Escaped Quotes */}
                <p className="text-lg italic">&quot;{testimonialsData[currentTestimonial].quote}&quot;</p>
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-gray-700">
                    {testimonialsData[currentTestimonial].name}
                  </div>
                  <div className="text-gray-500">{testimonialsData[currentTestimonial].title}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




