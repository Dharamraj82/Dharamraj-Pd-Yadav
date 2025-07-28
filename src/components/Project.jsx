import React from "react";
import { FaExternalLinkAlt, FaCode, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import GradientText from "../uiComponents/GradientText";

function Project() {
  return (
    <div className="min-h-[90vh] relative justify-start flex flex-col items-center gap-10 px-5">
      <span className="text-5xl font-bold text-center w-full">
        <GradientText
          colors={["#3b82f6", "#ef4444", "#facc15", "#ec4899", "#3b82f6"]}
          animationSpeed={10}
          showBorder={true}
          className="custom-class"
        >
          Projects
        </GradientText>
      </span>
      <Link
        to="/projects"
        className="absolute right-[18%] top-12 group cursor-pointer transition-all duration-300"
      >
        <span
          className="text-sm font-medium px-4 py-2 border border-secondary/20
          rounded-full group-hover:underline group-hover:opacity-80 tracking-wide"
        >
          View All Projects
        </span>
      </Link>

      <div className="flex gap-20 flex-wrap justify-center items-center">
        {/* Card */}
        <div
          className="max-w-md gap-3 flex flex-col w-full p-6 rounded-3xl border border-secondary/10 backdrop-blur-sm transition-all duration-300
    shadow-[0_6px_20px_rgba(0,0,0,0.2)]
    hover:shadow-[0_0_12px_4px_#3b82f6,0_0_18px_6px_#8b5cf6]"
        >
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt="DOCBOOK"
            className="w-full rounded-xl object-cover"
          />

          <h3 className="text-2xl font-bold mt-4 mb-2 text-center">DOCBOOK</h3>
          <p className="text-center text-md font-medium mb-2 text-secondary/20 leading-relaxed">
            DOCBOOK is a doctor appointment booking platform where patients can
            find doctors by specialization, check availability, and book slots,
            while doctors manage schedules and patient appointments.
          </p>

          <div className="flex flex-wrap justify-start gap-4 mb-4">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#1d4ed8] shadow-[0_0_10px_#1d4ed8]">
              <i className="devicon-react-original"></i> React
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#166534] shadow-[0_0_10px_#166534]">
              <i className="devicon-express-original"></i> Express
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#92400e] shadow-[0_0_10px_#92400e]">
              <i className="devicon-nodejs-plain-wordmark"></i> Node
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#115e59] shadow-[0_0_10px_#115e59]">
              <i className="devicon-mongodb-plain"></i> MongoDB
            </span>
          </div>

          <div className="flex flex-wrap justify-start gap-10 mt-2 text-sm font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaFileAlt /> Documentation
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <FaCode /> Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
          </div>
        </div>
        {/* Card */}
        <div
          className="max-w-md gap-3 flex flex-col w-full p-6 rounded-3xl border border-secondary/10 backdrop-blur-sm transition-all duration-300
    shadow-[0_6px_20px_rgba(0,0,0,0.2)]
    hover:shadow-[0_0_12px_4px_#3b82f6,0_0_18px_6px_#8b5cf6]"
        >
          {" "}
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1735746693939-586a9d7558e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt="DOCBOOK"
            className="w-full rounded-xl object-cover"
          />
          <h3 className="text-2xl font-bold mt-4 mb-2 text-center">DOCBOOK</h3>
          <p className="text-center text-md font-medium mb-2 text-secondary/20 leading-relaxed">
            DOCBOOK is a doctor appointment booking platform where patients can
            find doctors by specialization, check availability, and book slots,
            while doctors manage schedules and patient appointments.
          </p>
          <div className="flex flex-wrap justify-start gap-4 mb-4">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#1d4ed8] shadow-[0_0_10px_#1d4ed8]">
              <i className="devicon-react-original"></i> React
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#166534] shadow-[0_0_10px_#166534]">
              <i className="devicon-express-original"></i> Express
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#92400e] shadow-[0_0_10px_#92400e]">
              <i className="devicon-nodejs-plain-wordmark"></i> Node
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-[#115e59] shadow-[0_0_10px_#115e59]">
              <i className="devicon-mongodb-plain"></i> MongoDB
            </span>
          </div>
          <div className="flex flex-wrap justify-start gap-10 mt-2 text-sm font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaFileAlt /> Documentation
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            >
              <FaCode /> Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
