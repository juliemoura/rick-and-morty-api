import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Title = styled(Link)`
    font-family: "Space Grotesk", sans-serif;
    font-size: 16px;
    text-decoration: none;
    color: #000;

    &:hover{
        color: #C6C6C6;
        cursor: pointer;
    }
`;

export const LinkButton = styled(Link)`
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