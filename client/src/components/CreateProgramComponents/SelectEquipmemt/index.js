import React from "react";

const SelectEquipment = () => {
  const equipment = [
    "barbell",
    "body weight",
    "cable",
    "dumbbell",
    "kettlebell",
    "tire",
    "trap bar",
  ];
  return (
    <div className="flex flex-col">
      <label htmlFor="equipment">Select the equipment you want to use:</label>
      <select
        className="mt-3 bg-nl-darkblue text-slate-50 text-xl py-2 px-4 rounded-xl"
        required
        name="equipment"
        id="equipment"
      >
        {equipment.sort().map((part) => (
          <option key={`equipment_${part}`} value={part}>
            {part}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectEquipment;
