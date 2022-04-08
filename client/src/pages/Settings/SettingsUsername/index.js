import React from "react";
import Form from "../../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../actions/userActions";

const SettingsUsername = () => {
  const dispatch = useDispatch();
  const inputs = [
    {
      text: "change username",
      message: "Must be between five and twenty characters",
      pattern: ".{5,20}",
    },
  ];

  const change = (e) => {
    e.preventDefault();
    const data = { username: e.target["change username"].value };
    dispatch(updateUser(data));
  };
  return (
    <div className="pt-8">
      <Form text="Change" inputs={inputs} handleSubmit={change} />
    </div>
  );
};

export default SettingsUsername;
