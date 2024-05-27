import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-right: 0.5rem;
  color: #2ecc71; /* Change color to green */
`;

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

const Checkbox = ({ htmlFor, label, type, name, id, onChange, checked }) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabel htmlFor={htmlFor}>{label}</CheckboxLabel>
      <CheckboxInput
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        required
      />
    </CheckboxWrapper>
  );
};

export default Checkbox;
