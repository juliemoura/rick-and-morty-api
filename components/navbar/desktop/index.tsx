import { ReactElement } from "react";
import { Container, LeftContainer, LinkButton, RightContainer, Title } from "./styles";
import Image from "next/image";

const Desktop = (): ReactElement => {
    return (
        <Container>
            <LeftContainer>
                <Image src="/images/rmorty.png" width={352} height={102} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title href="https://rickandmortyapi.com/documentation/#introduction">Docs</Title>
                <LinkButton href="https://juliemoura.com.br/">About me</LinkButton>
            </RightContainer>
        </Container>
    )
};

export { Desktop };