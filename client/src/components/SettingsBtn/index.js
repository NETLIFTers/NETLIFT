import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SettingsBtn = ({ text, to }) => {
  const allStyle =
    "text-nl-darkblue text-xl font-medium py-4 px-8 rounded-xl mx-auto hover:opacity-80 w-full text-center";
  let style;
  /delete/i.test(text)
    ? (style = allStyle + " bg-red-400")
    : (style = allStyle + " bg-nl-lightblue");
  return (
    <Link to={`/settings/${to}`} className={style}>
      {text}
    </Link>
  );
};

SettingsBtn.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SettingsBtn;
