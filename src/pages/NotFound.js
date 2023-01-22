import React from "react";
import notFound from "../anim/notfound.json";
import Lottie from "lottie-react";

const NotFound = () => {
    const style = {
        height: 800,
      };
  return (
    <div>
      <Lottie animationData={notFound} style={style}/>
    </div>
  );
};

export default NotFound;
