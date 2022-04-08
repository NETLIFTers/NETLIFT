import React from "react";
import { Link } from "react-router-dom";

const BackSettings = () => {
  return (
    <Link
      className="text-slate-50 text-2xl font-bold capitalize"
      to="/settings"
    >
      go back
    </Link>
  );
};

export default BackSettings;
