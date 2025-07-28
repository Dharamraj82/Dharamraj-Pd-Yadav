import React from "react";
import Silk from "../uiComponents/Silk";
import TextType from "../uiComponents/TextType";
import ProfileCard from "../components/ProfileCard";

function Home() {
  const randomRotation = Math.random() * 6;

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="relative w-[74%] h-[80vh] rounded-3xl overflow-hidden transition-all duration-500">
        <Silk
          speed={9.1}
          scale={0.4}
          color="#020bf5"
          noiseIntensity={1.3}
          rotation={randomRotation}
          // rotation={1.62}
        />

        <div className="absolute px-5 transition-all duration-500 text-center inset-0 flex text-7xl font-bold items-center justify-center">
          <TextType
            text={[
              "Hey, I'm Dharamraj",
              "Welcome to My Digital World",
              "Full Stack Web Developer",
              "Design. Develop. Deliver.",
              "Turning Ideas into Reality",
              "Let's Build Something Awesome!",
              "Happy Coding!",
            ]}
            typingSpeed={200}
            pauseDuration={900}
            showCursor={true}
            deletingSpeed={10}
            cursorCharacter="|"
          />
        </div>
      </div>
      <ProfileCard />
    </div>
  );
}

export default Home;
