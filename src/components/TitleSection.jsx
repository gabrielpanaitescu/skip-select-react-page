import React from "react";
const TitleSection = ({ title, description }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
export default TitleSection;
