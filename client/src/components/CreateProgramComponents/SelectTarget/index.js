import React from "react";

const SelectTarget = () => {
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  return (
    <div className="flex flex-col">
      <label htmlFor="target">Select the body part you want to target:</label>
      <select
        className="mt-3 bg-nl-darkblue text-slate-50 text-xl py-2 px-4 rounded-xl"
        required
        name="target"
        id="target"
      >
        {bodyParts.sort().map((part) => (
          <option key={`bodyPart_${part}`} value={part}>
            {part}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTarget;
