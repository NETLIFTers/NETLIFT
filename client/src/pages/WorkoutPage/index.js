import React from "react";
import Title from "../../components/Title";
import WorkoutSection from "../../components/WorkoutSection";

const WorkoutPage = () => {
  const workouts = [
    { name: "Squats", reps: 5, sets: 5 },
    { name: "OHP", reps: 3, sets: 5 },
    { name: "Deadlift", reps: 3, sets: 1 },
  ];

  return (
    // TODO: add button that updates reducer
    <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8 flex flex-col">
      <Title text="Workout" />
      <div className="-mx-8 px-8 pt-12 bg-nl-lightgrey space-y-8 flex-auto">
        <WorkoutSection workouts={workouts} />
      </div>
    </div>
  );
};

export default WorkoutPage;
