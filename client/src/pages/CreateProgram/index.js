import React from "react";
import { Title } from "../../components";
import WorkoutCreate from "../../components/CreateProgramComponents/CreateExercise";

const CreateProgram = () => (
  <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8 flex flex-col">
    <Title text="Create" />
    <div className="-mx-8 flex-auto bg-nl-lightgrey">
      <WorkoutCreate />
    </div>
  </div>
);
export default CreateProgram;
