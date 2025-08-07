"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "@/constant";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white text-5xl font-bold text-center mb-10">
        MES PROJETS
      </h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              className="z-[1] flex-1"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-row flex mb-5">
                <Image
                  alt={project.title}
                  loading="lazy"
                  width={150}
                  height={150}
                  className="h-36 w-36 rounded-lg"
                  src={project.image}
                />
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">
                    {project.title}
                  </p>
                  <p className="text-gray-500 text-[10px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

