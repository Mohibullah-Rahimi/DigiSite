import styled from "styled-components";
import { Link } from "react-router-dom";

const primaryColor = "#2AAA8A"; // Better primary color

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryColor};
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
  border: 2px solid ${primaryColor};
  background: ${primaryColor};
  color: white;
  border-radius: 5px; /* Add rounded corners */

  &:hover {
    background: transparent;
    color: ${primaryColor};
  }
`;
