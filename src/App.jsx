import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TitleSection from "./components/TitleSection";
import SkipSelection from "./components/SkipSelection";
import NavigationFooter from "./components/NavigationFooter";
import skipData from "./skipData";

export default function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const processedSkipOptions = skipData.map((skip) => ({
    id: skip.id,
    size: skip.size,
    title: `${skip.size} Yard Skip`,
    period: `${skip.hire_period_days} day hire period`,
    price_before_vat: skip.price_before_vat || skip.transport_cost,
    vat: skip.vat,
    hire_period_days: skip.hire_period_days,
    allowed_on_road: skip.allowed_on_road,
    allows_heavy_waste: skip.allows_heavy_waste,
    image:
      "https://images.stockcake.com/public/1/9/4/19414133-a0b5-49d6-a287-c1c240d89dfd_large/geometric-industrial-harmony-stockcake.jpg",
  }));
  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
  };
  const handleBack = () => {
    console.log("Going back to previous step");
  };
  const handleContinue = () => {
    console.log("Continuing to next step with", selectedSkip);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-1 overflow-auto pb-24">
        <ProgressBar currentStep={3} totalSteps={6} />
        <div className="container mx-auto px-4  py-6">
          <TitleSection
            title="Choose Your Skip Size"
            description="Select the skip size that best suits your needs"
          />
          <SkipSelection
            skipOptions={processedSkipOptions}
            selectedSkip={selectedSkip}
            onSelectSkip={handleSelectSkip}
          />
        </div>
      </div>
      <NavigationFooter
        selectedSkip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
}
