import React from "react";
import PropTypes from "prop-types";

import Exercise from "../Exercise";
const WorkoutSection = ({ workouts }) => {
  return (
    <div data-testid="custom-element">
      {workouts.map((workout) => (
        <Exercise
          key={workout.name}
          sets={workout.sets}
          reps={workout.reps}
          name={workout.name}
        />
      ))}
    </div>
  );
};

WorkoutSection.propTypes = {
  workouts: PropTypes.array.isRequired,
};
export default WorkoutSection;
