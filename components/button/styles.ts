import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #000;
  font-family: "Space Grotesk", sans-serif;
  color: #fff;
  font-size: 15px;
  border-radius: 0 4px 4px 0;

  &:hover{
    background: #19191A;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out;
  }
`;
