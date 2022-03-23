import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  form {
    max-width: 500px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    legend {
        padding: 0 1rem;
    }

    fieldset {
      padding: 2rem;
      border: 2px solid #800020;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    button {
      align-self: flex-end;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  background: transparent;
  border: 2px solid #800020;
  color: #800020;
  align-self: flex-start;
  margin: 1rem 0;

  &:hover {
    background: #800020;
    color: white;
  }
`;