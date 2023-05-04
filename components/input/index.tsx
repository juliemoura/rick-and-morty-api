import { InputContainer } from "./styles";

interface IInput {
    value: string;
    onChange: (e: any) => void;
};

const Input = ({value, onChange}: IInput) => {
    return(
        <InputContainer value={value} onChange={onChange} />
    )
};

export { Input };