import React from "react";

const GradientBorder = ({ children }) => {
  return (
    <div className="gradient-primary inline-block rounded-full p-[2px]">
      {children}
    </div>
  );
};

export default GradientBorder;
