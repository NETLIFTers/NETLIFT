import React from "react";
import { Title } from "../../components";
import CalenderComp from "../../components/Calender";

const History = () => (
  <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8 flex flex-col">
    <Title text="History" />
    <div className="-mx-8 flex-auto bg-nl-lightgrey">
      <CalenderComp />
    </div>
  </div>
);
export default History;
