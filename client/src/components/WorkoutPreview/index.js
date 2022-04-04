import React from "react";
import PropTypes from "prop-types";

const WorkoutPreview = (props) => {
  const { day, exercises } = props;

  // TODO: change the weight to what they are actually doing
  return (
    <div className=" bg-nl-lightblue text-nl-darkblue rounded-xl py-2 px-6">
      <p className=" text-nl-textgrey text-center mb-3">{day}</p>
      <ul className=" space-y-1">
        {exercises.map((exercise) => {
          return (
            <li
              key={exercise.name}
              className=" font-medium flex justify-between"
            >
              <span>{exercise.name}</span>
              <span>
                {exercise.sets} x {exercise.reps} 100kg
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

WorkoutPreview.propTypes = {
  day: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired,
};

export default WorkoutPreview;
