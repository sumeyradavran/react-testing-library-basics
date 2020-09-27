import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 8px;
  padding: 6px 8px;
  background-color: #d6e0f0;
  border: none;
`;

export default function Button({ onClick, text }) {
  return <StyledButton  data-testid="fetch-button" onClick={onClick}>{text}</StyledButton>;
}
