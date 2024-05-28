import styled from 'styled-components';
import { PrimaryButton } from '../Button/style';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90vw;
  margin: 2rem auto;
  padding: 2rem;
  gap: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.8rem;
    color: #2AAA8A;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    color: #333;
    font-weight: 600;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    outline: none;

    &:focus {
      border-color: #2ecc71;
      box-shadow: 0 0 5px rgba(46, 204, 113, 0.5);
    }
  }

  span {
    color: red;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;

export const FormButton = styled(PrimaryButton)`
  align-self: center;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2AAA8A;
    transform: translateY(-2px);
  }
`;
