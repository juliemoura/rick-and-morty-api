import { Container, Content, ContentInformation, Episode, Gender, Status, Title } from "./styles";
import Image from "next/image";

interface IData {
    data: Array<{
        name: string;
        status: string;
        species: string;
        gender: string;
        image: string;
        episode: Array<string>;
    }>;
};


const Card = ({ data }: IData) => {
    return (
        <Container>
            {data.map((item, key) => (
                <Content key={key} xs={24} sm={24} md={11} lg={7} xl={7}>
                    <Image src={item.image} width={150} height={150} alt="" />
                    <ContentInformation>
                        <Title>{item.name}</Title>
                        <Status>{item.status}</Status>
                        <Status>{item.species}</Status>
                        <Gender>{item.gender}</Gender>
                        <Episode>Episodes: {item.episode.length}</Episode>
                    </ContentInformation>
                </Content>
            ))}
        </Container>
    )
};

export { Card }