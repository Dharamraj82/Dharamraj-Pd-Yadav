import React from "react";
import { FaExternalLinkAlt, FaCode, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import GradientText from "../uiComponents/GradientText";

const Projects = [
  {
    title: "DOCBOOK",
    description:
      "DOCBOOK is a doctor appointment booking platform where patients can find doctors by specialization, check availability, and book slots, while doctors manage schedules and patient appointments.",
    image:
      "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    tech: [
      { name: "React", icon: "devicon-react-original", color: "#1d4ed8" },
      { name: "Express", icon: "devicon-express-original", color: "#166534" },
      {
        name: "Node",
        icon: "devicon-nodejs-plain-wordmark",
        color: "#92400e",
      },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#115e59" },
    ],
    links: {
      docs: "#",
      code: "#",
      live: "#",
    },
  },
  {
    title: "DOCBOOK",
    description:
      "DOCBOOK is a doctor appointment booking platform where patients can find doctors by specialization, check availability, and book slots, while doctors manage schedules and patient appointments.",
    image:
      "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    tech: [
      { name: "React", icon: "devicon-react-original", color: "#1d4ed8" },
      { name: "Express", icon: "devicon-express-original", color: "#166534" },
      {
        name: "Node",
        icon: "devicon-nodejs-plain-wordmark",
        color: "#92400e",
      },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#115e59" },
    ],
    links: {
      docs: "#",
      code: "#",
      live: "#",
    },
  },
  {
    title: "DOCBOOK",
    description:
      "DOCBOOK is a doctor appointment booking platform where patients can find doctors by specialization, check availability, and book slots, while doctors manage schedules and patient appointments.",
    image:
      "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    tech: [
      { name: "React", icon: "devicon-react-original", color: "#1d4ed8" },
      { name: "Express", icon: "devicon-express-original", color: "#166534" },
      {
        name: "Node",
        icon: "devicon-nodejs-plain-wordmark",
        color: "#92400e",
      },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#115e59" },
    ],
    links: {
      docs: "#",
      code: "#",
      live: "#",
    },
  },
  {
    title: "DOCBOOK",
    description:
      "DOCBOOK is a doctor appointment booking platform where patients can find doctors by specialization, check availability, and book slots, while doctors manage schedules and patient appointments.",
    image:
      "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    tech: [
      { name: "React", icon: "devicon-react-original", color: "#1d4ed8" },
      { name: "Express", icon: "devicon-express-original", color: "#166534" },
      {
        name: "Node",
        icon: "devicon-nodejs-plain-wordmark",
        color: "#92400e",
      },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#115e59" },
    ],
    links: {
      docs: "#",
      code: "#",
      live: "#",
    },
  },
  {
    title: "DOCBOOK",
    description:
      "DOCBOOK is a doctor appointment booking platform where patients can find doctors by specialization, check availability, and book slots, while doctors manage schedules and patient appointments.",
    image:
      "https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    tech: [
      { name: "React", icon: "devicon-react-original", color: "#1d4ed8" },
      { name: "Express", icon: "devicon-express-original", color: "#166534" },
      {
        name: "Node",
        icon: "devicon-nodejs-plain-wordmark",
        color: "#92400e",
      },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#115e59" },
    ],
    links: {
      docs: "#",
      code: "#",
      live: "#",
    },
  },
];

function Projects() {
  return (
    <div className="min-h-[90vh] relative flex flex-col items-center justify-center gap-10 px-5 py-10">
      <span className="text-5xl font-bold text-center w-full">
        <GradientText
          colors={["#3b82f6", "#ef4444", "#facc15", "#ec4899", "#3b82f6"]}
          animationSpeed={10}
          showBorder={true}
          className="custom-class"
        >
          All Projects
        </GradientText>
      </span>

      <div className="flex gap-20 flex-wrap items-center justify-center">
        {/* Card */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-md gap-3 flex flex-col w-full p-6 rounded-3xl border border-secondary/10 backdrop-blur-sm transition-all duration-300
    shadow-[0_6px_20px_rgba(0,0,0,0.2)]
    hover:shadow-[0_0_12px_4px_#3b82f6,0_0_18px_6px_#8b5cf6]"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl object-cover"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold mt-4 mb-2 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-center text-md font-medium mb-2 text-secondary/20 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm`}
                  style={{
                    color: tech.color,
                    boxShadow: `0 0 10px ${tech.color}`,
                  }}
                >
                  <i className={tech.icon}></i> {tech.name}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-start gap-10 mt-2 text-sm font-medium">
              <a
                href={project.links.docs}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaFileAlt /> Documentation
              </a>
              <a
                href={project.links.code}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
              >
                <FaCode /> Code
              </a>
              <a
                href={project.links.live}
                className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
              >
                <FaExternalLinkAlt /> Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
