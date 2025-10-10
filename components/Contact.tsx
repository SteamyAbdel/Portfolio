"use client";

import React from "react";

const Contact: React.FC = () => {
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
    <section
      id="contact"
      className="px-4 md:px-10 py-20"
      style={{
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
          }}
        >
          Contactez-moi
        </h1>
        
        <p 
          className="text-gray-300 text-center mb-12 text-lg"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.6s ease-out 0.4s forwards'
          }}
        >
          Une idée de projet ? Une collaboration ? N&apos;hésitez pas à me contacter !
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Informations de contact */}
          <div 
            className="space-y-8"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              animation: 'fadeInUp 0.6s ease-out 0.6s forwards'
            }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target={method.title !== "Email" ? "_blank" : "_self"}
                    rel={method.title !== "Email" ? "noopener noreferrer" : ""}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
                    style={{
                      opacity: 0,
                      transform: 'translateY(50px)',
                      animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s forwards`
                    }}
                  >
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
