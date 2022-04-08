import React from "react";

const SettingsDelete = () => {
  const handleClick = (e) => {
    // TODO delete account and redirect to register page
    e.preventDefault();
  };
  return (
    <div className="pt-10 flex flex-col space-y-8">
      <p className=" text-slate-50 text-lg">
        This action is permanent and cannot be undone, are you sure you want to
        continue?
      </p>
      <button
        onClick={handleClick}
        className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto hover:opacity-80"
      >
        Confirm
      </button>
    </div>
  );
};

export default SettingsDelete;
