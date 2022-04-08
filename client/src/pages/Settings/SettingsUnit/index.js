import React from "react";
import FormBtn from "../../../components/FormBtn";

const SettingsUnit = () => {
  const change = (e) => {
    // TODO submit data to server and add error handling
    e.preventDefault();
  };

  return (
    <form onSubmit={change} className="flex flex-col space-y-8 pt-8">
      <div>
        <input
          required
          className="peer hidden"
          type="radio"
          id="kg"
          name="unit"
          value="kg"
        />
        <label
          className=" text-center bg-nl-grey text-nl-darkblue text-xl relative rounded-xl p-5 block peer-checked:bg-nl-lightblue"
          htmlFor="kg"
        >
          kg
        </label>
      </div>
      <div>
        <input
          required
          className="peer hidden"
          type="radio"
          id="lb"
          name="unit"
          value="lb"
        />
        <label
          className=" text-center bg-nl-grey text-nl-darkblue text-xl relative rounded-xl p-5 block peer-checked:bg-nl-lightblue"
          htmlFor="lb"
        >
          lb
        </label>
      </div>
      <FormBtn text="Change" />
    </form>
  );
};

export default SettingsUnit;
