"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Maître de Stage",
      company: "Centre Hospitalier Henri-Laborit",
      content: "Abdelali a fait preuve d'une grande professionnalisme lors de son stage. Son travail sur la dockerisation de nos applications a considérablement amélioré notre infrastructure. Un stagiaire très prometteur.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Lead Developer",
      company: "Agence Blue-Com",
      content: "Excellent stagiaire avec une approche moderne. La refonte du site avec Next.js et Symfony a été un succès total. Abdelali s'est rapidement intégré à l'équipe et a su s'adapter aux technologies utilisées.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Leroy",
      role: "Chef de Projet",
      company: "Sogestea",
      content: "Abdelali a développé un module DAS exceptionnel pour notre application SaaS. Son attention aux détails et sa créativité ont dépassé nos attentes. Un collègue très apprécié de toute l'équipe.",
      avatar: "👩‍💼",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="px-4 md:px-10 py-20"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          variants={itemVariants}
        >
          Avis
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-center mb-12 text-lg"
          variants={itemVariants}
        >
          Retours de mes collègues et encadrants professionnels
        </motion.p>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </blockquote>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-purple-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial 
                        ? "bg-gradient-to-r from-purple-500 to-orange-400" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
