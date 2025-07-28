import React from "react";
import ProfileCard from "../components/ProfileCard";

function AboutMe() {
  return (
    <div className="flex flex-row justify-between items-center">
      <ProfileCard />
      <div className="relative w-[74%] h-[80vh] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 px-10 py-8 flex flex-col justify-center items-start text-secondary font-[Tektur]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Hello, I'm Dharamraj Prasad Yadav 
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl leading-relaxed">
            A passionate{" "}
            <span className="text-blue-600 font-semibold">
              Full Stack Web Developer
            </span>{" "}
            and
            <span className="text-blue-600 font-semibold">
              {" "}
              BCA final-year student
            </span>{" "}
            from
            <span className="text-blue-600 font-semibold">
              {" "}
              Vinoba Bhave University
            </span>
            , Jharkhand. With a strong grip on the{" "}
            <span className="text-green-600 font-semibold">MERN stack</span>, I
            love crafting efficient, scalable, and visually appealing web
            applications. My passion lies in transforming ideas into real-world
            digital experiences.
          </p>

          <ul className="mb-6 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>
               Skilled in{" "}
              <span className="font-medium">
                React.js, Node.js, Express, MongoDB, JavaScript
              </span>
            </li>
            <li>
               Strong foundation in{" "}
              <span className="font-medium">Data Structures & Algorithms</span>{" "}
              (DSA)
            </li>
            <li>
               Created real-world projects like{" "}
              <span className="font-medium">DOCBOOK</span> and
              <span className="font-medium"> AI Power Coder</span>
            </li>
            <li>
               Also experienced in{" "}
              <span className="font-medium">
                EJS templating, Tailwind CSS, SQL
              </span>
              , and more
            </li>
          </ul>

          <div className="flex gap-5 flex-wrap text-sm md:text-base">
            <a
              href="https://github.com/Dharamraj82"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dharamraj-yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dpy9572@gmail.com"
              className="hover:underline text-blue-700 font-medium"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              className="hover:underline text-blue-700 font-medium"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
