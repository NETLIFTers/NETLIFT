import React from "react";
import FormBtn from "../FormBtn";
import FormInputs from "../FormInputs";
import PropTypes from "prop-types";

const Form = (props) => {
  const { text, inputs, handleSubmit } = props;
  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="flex flex-col space-y-8"
    >
      {inputs.map((input) => (
        <FormInputs key={`${input.text}_input`} label={input} />
      ))}
      <FormBtn text={text} />
    </form>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
