import React from "react";

const SelectSets = ({ name, max }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>How many {name} would you like to do?</label>
      <input
        className="mt-3 bg-nl-darkblue text-slate-50 text-xl py-2 px-4 rounded-xl"
        required
        name={name}
        id={name}
        type="number"
        min={1}
        max={max}
      />
    </div>
  );
};

export default SelectSets;
