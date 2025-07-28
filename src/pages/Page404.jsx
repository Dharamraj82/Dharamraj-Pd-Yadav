import React from "react";
import FuzzyText from "../uiComponents/FuzzyText";

function Page404() {
  return (
    <div className="h-[80%] flex text-2xl justify-center items-center">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        404 Page Not Found
      </FuzzyText>
    </div>
  );
}

export default Page404;
