import React from "react";
import SkipCard from "./SkipCard";
const SkipSelection = ({ skipOptions, selectedSkip, onSelectSkip }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 xl:mx-36">
      {skipOptions.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={() => onSelectSkip(skip)}
        />
      ))}
    </div>
  );
};
export default SkipSelection;
