const SkipCard = ({ skip, isSelected, onSelect }) => {
  const calculatePrice = (skip) => {
    const basePrice = skip.price_before_vat;
    return basePrice * (1 + skip.vat / 100);
  };
  return (
    <div
      onClick={onSelect}
      className={`rounded-xl overflow-hidden transition-all duration-25 cursor-pointer bg-gray-800 border-gray-800 ${
        isSelected
          ? "ring-2 ring-blue-500 border"
          : "hover:ring-1 border border-gray-200"
      }`}
    >
      <div className="relative">
        <img
          src={skip.image}
          alt={skip.title}
          className="w-full h-48 object-fit bg-gray-100"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {skip.size} Yards
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold ">{skip.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{skip.period}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full ${
                skip.allowed_on_road ? "bg-green-500" : "bg-red-500"
              } mr-2`}
            />
            <span className="text-gray-300">
              {skip.allowed_on_road ? "Public roads" : "Private property"}
            </span>
          </div>
          <div className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full ${
                skip.allows_heavy_waste ? "bg-green-500" : "bg-red-500"
              } mr-2`}
            />
            <span className="text-gray-300">
              {skip.allows_heavy_waste ? "Heavy waste" : "Heavy waste"}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-blue-600 text-2xl font-bold">
              £{calculatePrice(skip).toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              incl. VAT per week
            </span>
          </div>
        </div>
        {/* <button
          className={`w-full py-2 px-4 rounded-lg transition-colors  ${
            isSelected ? "bg-blue-600 text-black" : "bg-gray-700 text-white"
          }`}
        >
          {isSelected ? "Selected" : "Select"}
        </button> */}
      </div>
    </div>
  );
};
export default SkipCard;
