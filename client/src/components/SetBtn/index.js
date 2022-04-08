import React, { useState } from "react";
import PropTypes from "prop-types";

const SetBtn = ({ reps }) => {
  const [repsDone, setRepsDone] = useState(reps);
  const [finished, setFinished] = useState(false);
  const reset = () => {
    setRepsDone(reps);
    setFinished(false);
  };
  const handleReps = () => {
    repsDone > 1 ? setRepsDone(repsDone - 1) : reset();
  };
  const clickHandler = () => {
    finished ? handleReps() : setFinished(true);
  };
  let bgColour;
  finished ? (bgColour = "bg-nl-lightblue") : (bgColour = "bg-nl-grey");
  return (
    <button
      className={bgColour + " rounded-full w-12 h-12 text-2xl"}
      onClick={clickHandler}
    >
      {repsDone}
    </button>
  );
};

SetBtn.propTypes = {
  reps: PropTypes.number.isRequired,
};

export default SetBtn;
