import React, { useState } from "react";
import { StyledForm, InputContainer, FormButton } from "./style";
import FormInput from "../FormInput/FormInput";

function Form() {
  const [formFields, setFormFields] = useState({
    nameInput: "",
    emailInput: "",
    messageInput: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to the server)
      console.log("Form submitted successfully:", formFields);
      resetForm();
    }
  };

  const validate = () => {
    let nameErr = "";
    let emailErr = "";
    let messageErr = "";
    let status = true;

    if (formFields.nameInput.trim() === "" || /\d/.test(formFields.nameInput)) {
      nameErr = "Enter a valid name";
      status = false;
    }
    if (
      formFields.emailInput.trim() === "" ||
      !/^([a-z\d._%+-]+)@([a-z\d.-]+)\.([a-z]{2,})$/i.test(formFields.emailInput)
    ) {
      emailErr = "Enter a valid email";
      status = false;
    }
    if (formFields.messageInput.trim() === "") {
      messageErr = "Message cannot be blank";
      status = false;
    }

    setErrors({
      nameError: nameErr,
      emailError: emailErr,
      messageError: messageErr,
    });

    return status;
  };

  const resetForm = () => {
    setFormFields({
      nameInput: "",
      emailInput: "",
      messageInput: "",
    });
    setErrors({
      nameError: "",
      emailError: "",
      messageError: "",
    });
  };

  const { nameInput, emailInput, messageInput } = formFields;
  const { nameError, emailError, messageError } = errors;

  return (
    <StyledForm onSubmit={handleSubmit} action="https://formspree.io/f/mvolbzdo" method="POST">
      <h3>Send Us A Message!</h3>
      <InputContainer>
        <FormInput
          htmlFor="name"
          type="text"
          id="nameInput"
          name="nameInput"
          label="Name:"
          value={nameInput}
          onChange={handleInput}
          required
        />
        {nameError && <span className="error">{nameError}</span>}
      </InputContainer>
      <InputContainer>
        <FormInput
          htmlFor="email"
          type="email"
          id="emailInput"
          name="emailInput"
          label="Email:"
          value={emailInput}
          onChange={handleInput}
          required
        />
        {emailError && <span className="error">{emailError}</span>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="message">Message</label>
        <textarea
          name="messageInput"
          id="messageInput"
          cols="30"
          rows="10"
          value={messageInput}
          onChange={handleInput}
          required></textarea>
        {messageError && <span className="error">{messageError}</span>}
      </InputContainer>
      <FormButton type="submit">
        Send Message
      </FormButton>
    </StyledForm>
  );
}

export default Form;
