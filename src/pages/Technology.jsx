import React from "react";
import GradientText from "../uiComponents/GradientText";
 
function Technology() {
  const techIcon = [
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-tailwindcss-original colored",
    "devicon-javascript-plain colored",
    "devicon-react-original colored",
    "devicon-nodejs-plain-wordmark",
    "devicon-express-original-wordmark colored",
    "devicon-mongodb-plain colored",
    "devicon-cplusplus-plain colored",
    "devicon-java-plain colored",
    "devicon-git-plain colored",
    "devicon-github-original colored",
    "devicon-mysql-original colored",
    "devicon-canva-original colored",
  ];

  const keyframes = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    .marquee-container {
      overflow: hidden;
      width: 100%;
      height: 80px;
      position: relative;
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }

    .marquee-wrapper:hover .marquee-track {
      animation-play-state: paused;
    }

    .marquee-item {
      font-size: 5rem;
      margin-right: 40px;
    }
  `;

  return (
    <div className="h-[40vh] flex justify-center items-center flex-col gap-10">
      <span className="text-5xl font-bold text-center w-full mb-5">
        <GradientText
          colors={["#3b82f6", "#ef4444", "#facc15", "#ec4899", "#3b82f6"]}
          animationSpeed={10}
          showBorder={true}
          className="custom-class"
        >
          Technologies I Know
        </GradientText>
      </span>
      <style>{keyframes}</style>

      <div className="marquee-container marquee-wrapper">
        <div className="marquee-track">
          {[...techIcon, ...techIcon].map((icon, index) => (
            <span key={index} className={`marquee-item ${icon}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
