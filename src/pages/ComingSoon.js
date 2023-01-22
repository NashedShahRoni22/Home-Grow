import React from "react";
import comingSoonAnim from "../anim/coming-soon.json";
import Lottie from "lottie-react";

const ComingSoon = () => {
  return (
    <div>
      <Lottie animationData={comingSoonAnim} />
    </div>
  );
};

export default ComingSoon;
