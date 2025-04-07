import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const NavigationFooter = ({ selectedSkip, onBack, onContinue }) => {
  if (!selectedSkip) return null;

  const calculatePrice = (skip) => {
    if (!skip) return "0.00";
    const basePrice = skip.price_before_vat;
    return (basePrice * (1 + skip.vat / 100)).toFixed(2);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 py-4 px-4 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
        <button
          onClick={onBack}
          className="fixed left-1 bottom-1 sm:static px-4 py-2 sm:px-6 sm:py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors flex items-center"
        >
          <ArrowLeftIcon size={16} className="mr-2" />
          <span className="hidden sm:block">Back</span>
        </button>
        <div className="flex items-center mb-5 sm:mb-[-0.5rem]">
          {selectedSkip ? (
            <div className="flex items-center text-white">
              <div className="px-4 border-r border-gray-600">
                <span className="block text-sm text-gray-400">Size</span>
                <span className="font-bold text-sm sm:text-md">
                  {selectedSkip.size} Yards
                </span>
              </div>
              <div className="px-4 border-r border-gray-600">
                <span className="block text-sm text-gray-400">Period</span>
                <span className="font-bold text-sm sm:text-md ">
                  {selectedSkip.hire_period_days} Days
                </span>
              </div>
              <div className="px-4">
                <span className="block text-sm text-gray-400">Price</span>
                <span className="font-bold text-md sm:text-lg text-blue-400">
                  £{calculatePrice(selectedSkip)}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-gray-400">No skip selected</span>
          )}
        </div>
        <button
          onClick={onContinue}
          disabled={!selectedSkip}
          className={`fixed bottom-1 right-1 sm:static px-4 py-2 sm:px-6 sm:py-2 rounded-md flex items-center ${
            selectedSkip
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          } transition-colors`}
        >
          <span className="hidden sm:block">Continue</span>
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
export default NavigationFooter;
