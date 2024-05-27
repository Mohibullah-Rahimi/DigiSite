import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const greenColor = "#2AAA8A"; // Great shade of green

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${greenColor};
  border: 1px solid transparent;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    border: 2px solid white;
    transition: border 0.3s ease-in-out;
  }
`;

const buttonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
`;

export const SecondaryButton = styled.button`
  ${buttonStyles}
  background: transparent;
  border: 2px solid ${greenColor};
  color: ${greenColor};

  &:hover {
    background: ${greenColor};
    color: white;
  }
`;

export const PrimaryButton = styled(SecondaryButton)`
  background: ${greenColor};
  color: white;

  &:hover {
    background: white;
    color: ${greenColor};
    border: 3px solid ${greenColor};
  }

  &:disabled {
    background: gray;
  }
`;

export const SpecialButton = styled(PrimaryButton)`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid transparent;
  font-size: 1.5rem;
  width: 20px;
  font-weight: bold;
`;

export const SecondaryLink = styled(ButtonLink)`
  background: transparent;
  border: 2px solid ${greenColor};
  color: ${greenColor};

  &:hover {
    background: ${greenColor};
    color: white;
    transform: scale(1);
    border: 2px solid ${greenColor};
    transition: none;
  }
`;

export const PrimaryLink = styled(SecondaryLink)`
  background: ${greenColor};
  color: white;

  &:hover {
    background: transparent;
    color: ${greenColor};
  }
`;
