import React from "react";
import PropTypes from "prop-types";
import SetBtn from "../SetBtn";

const Exercise = ({ name, reps, sets }) => {
  const setsArr = [];
  for (let i = 0; i < sets; i++) {
    setsArr.push(<SetBtn key={i} reps={reps} />);
  }
  return (
    <div className=" space-y-3">
      <h3 className=" text-2xl text-nl-darkblue capitalize font-medium">
        {name}
      </h3>
      <div className=" overflow-x-scroll overflow-y-hidden ">
        <div className="flex justify-between space-x-4 whitespace-nowrap min-w-fit">
          {setsArr}
        </div>
      </div>
    </div>
  );
};

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  reps: PropTypes.number.isRequired,
  sets: PropTypes.number.isRequired,
};

export default Exercise;
