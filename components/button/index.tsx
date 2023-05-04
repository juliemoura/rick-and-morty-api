import { BsSearch } from "react-icons/bs";
import { ButtonContainer } from "./styles";

interface IButton {
    onClick: () => void;
};

const Button = ({ onClick }: IButton) => {
    return (
        <ButtonContainer onClick={onClick}>
            <BsSearch size={16} color="#FFF"/>
        </ButtonContainer>
    )
};

export { Button };