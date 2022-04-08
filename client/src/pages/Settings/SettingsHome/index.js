import React from "react";
import SettingsBtn from "../../../components/SettingsBtn";

const SettingsHome = () => {
  const currentUnit = "kg";
  const btnInfo = [
    { text: "Change Username", to: "username" },
    { text: "Change Password", to: "password" },
    { text: `Change Unit (${currentUnit})`, to: "unit" },
    { text: "Log Out", to: "log-out" },
    { text: "Delete Account", to: "delete-account" },
  ];
  return (
    <div className=" flex flex-col flex-auto space-y-8 pt-10">
      {btnInfo.map((info) => (
        <SettingsBtn
          key={info.text.split(" ")[1]}
          text={info.text}
          to={info.to}
        />
      ))}
    </div>
  );
};
export default SettingsHome;
