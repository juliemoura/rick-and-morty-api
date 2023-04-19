import { Container } from "./styles";
import Image from "next/image";

import Drawer from "./components/drawer";
import { ReactElement } from "react";

const Mobile = (): ReactElement => {
    return (
        <Container>
            <Image src="/images/rmortymobile.png" width={99} height={102} alt="Logo" />
            <Drawer />
        </Container>
    )
}

export { Mobile };