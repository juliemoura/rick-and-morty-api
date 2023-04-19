import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import { Container, DesktopContainer, MobileContainer } from "./styles";

const Navbar = () => {
    return(
        <Container>
            <DesktopContainer>
                <Desktop />
            </DesktopContainer>
            <MobileContainer>
                <Mobile />
            </MobileContainer>
        </Container>
    )
};

export { Navbar };