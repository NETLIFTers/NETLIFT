import React from "react";
import Form from "../../../components/Form";

const SettingsPassword = () => {
  const inputs = [
    {
      text: "current password",
      message: "This field is required",
    },
    {
      text: "new password",
      message:
        "The password must contain a between 8 and thirty characters, at least one letter, one number and one special character.",
      pattern:
        "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,30}",
    },
    {
      text: "confirm password",
      message: "The passwords must match",
    },
  ];

  const change = (e) => {
    // TODO submit data to server and add error handling
    e.preventDefault();
    const confirmPass = e.target["confirm password"];
    const pass = e.target["new password"];
    if (confirmPass.value !== pass.value) {
      confirmPass.value = "";
      confirmPass.focus();
    }
  };
  return (
    <div className="pt-8">
      <Form text="Change" inputs={inputs} handleSubmit={change} />
    </div>
  );
};

export default SettingsPassword;
