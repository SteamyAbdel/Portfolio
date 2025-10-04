"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "abdelali.noureddine86@gmail.com",
      link: "mailto:abdelali.noureddine86@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Abdelali NOUREDDINE",
      link: "https://www.linkedin.com/in/abdelalinoureddine/"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "SteamyAbdel",
      link: "https://github.com/SteamyAbdel"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
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
          Contactez-moi
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-center mb-12 text-lg"
          variants={itemVariants}
        >
          Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me contacter !
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {/* Informations de contact */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.title !== "Email" ? "_blank" : "_self"}
                    rel={method.title !== "Email" ? "noopener noreferrer" : ""}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
