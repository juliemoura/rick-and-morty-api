import styled from "styled-components";
import { Drawer } from "antd";
import Link from "next/link";

export const Container = styled.div``;

export const ButtonDrawer = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DrawerContainer = styled(Drawer)``;

export const DrawerContent = styled.div`
  display: flex;

  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

export const LinkContent = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
`;


export const Title = styled.h4`
    font-family: "Space Grotesk", sans-serif;
    font-size: 16px;
    text-decoration: none;
    color: #000;

    &:hover{
        color: #C6C6C6;
        cursor: pointer;
    }
`;

export const LinkButton = styled.h4`
    font-family: "Space Grotesk", sans-serif;
    font-size: 16px;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 999px;
    padding: 10px 20px;
    color: #000;
    transition: background-color 0.5s ease-in-out, border 0.5s ease-in-out;

    &:hover{
        background: #C6C6C6;
        border: 1px solid #C6C6C6;
        cursor: pointer;
    }
`;