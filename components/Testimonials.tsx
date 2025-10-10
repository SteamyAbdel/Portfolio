"use client";

import React, { useState } from "react";

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
    <section
      id="testimonials"
      className="px-4 md:px-10 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Avis
        </h1>
        
        <p className="text-gray-300 text-center mb-12 text-lg">
          Retours de mes collègues et encadrants professionnels
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[300px]">
            <div className="text-center transition-all duration-300">
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
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                      index === currentTestimonial 
                        ? "bg-gradient-to-r from-purple-500 to-orange-400" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
