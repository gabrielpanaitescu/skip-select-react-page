import React from "react";
import {
  MapPinIcon,
  TrashIcon,
  TruckIcon,
  ClipboardCheckIcon,
  CalendarIcon,
  CreditCardIcon,
} from "lucide-react";
const steps = [
  {
    name: "Postcode",
    icon: MapPinIcon,
  },
  {
    name: "Waste Type",
    icon: TrashIcon,
  },
  {
    name: "Select Skip",
    icon: TruckIcon,
  },
  {
    name: "Permit Check",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Choose Date",
    icon: CalendarIcon,
  },
  {
    name: "Payment",
    icon: CreditCardIcon,
  },
];
const ProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full bg-gray-800 py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            let status = "upcoming";
            if (index + 1 < currentStep) status = "completed";
            if (index + 1 === currentStep) status = "current";
            const isClickable = index < 3;
            return (
              <div
                key={index}
                className={`flex flex-col items-center relative w-full 
                  `}
              >
                {index > 0 && (
                  <div
                    className={`absolute h-0.5 top-3 -left-1/2 w-full cursor-default ${
                      index < currentStep ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  />
                )}
                <div className="flex flex-col items-center z-10">
                  <div
                    className={`rounded-full p-2 mb-1 ${
                      status === "completed"
                        ? "bg-blue-500"
                        : status === "current"
                        ? "bg-blue-500"
                        : "bg-gray-600"
                    }`}
                  >
                    <StepIcon
                      size={16}
                      className={`
                        ${
                          status === "upcoming" ? "text-gray-400" : "text-white"
                        } ${
                        isClickable ? "cursor-pointer" : "cursor-not-allowed"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs md:text-sm mt-1 hidden md:block ${
                      status === "completed"
                        ? "font-light"
                        : status === "current"
                        ? "font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
