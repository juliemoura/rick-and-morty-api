import React, { useState } from "react";
import {
  ButtonDrawer,
  Container,
  DrawerContainer,
  DrawerContent,
  LinkButton,
  LinkContainer,
  LinkContent,
  Title,
} from "./styles";


import { BsList, BsPersonWorkspace } from "react-icons/bs";
import { MdClose, MdHome } from "react-icons/md";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ButtonDrawer onClick={showDrawer}>
        <BsList color="#000" size={25} />
      </ButtonDrawer>
      <DrawerContainer
        placement="right"
        closeIcon={<MdClose color="#34143C" size={25} />}
        onClose={onClose}
        open={open}
        width={300}
        style={{ backgroundColor: "#FFF" }}
      >
        <DrawerContent>
          <LinkContainer>
            <LinkContent href="https://rickandmortyapi.com/documentation/#introduction">
              <Title>docs</Title>
            </LinkContent>
            <LinkContent href="https://juliemoura.com.br/">
              <LinkButton>about me</LinkButton>
            </LinkContent>
          </LinkContainer>
        </DrawerContent>
      </DrawerContainer>
    </Container>
  );
};

export default Drawer;
