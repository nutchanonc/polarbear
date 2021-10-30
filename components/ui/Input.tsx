import styled from "styled-components";
import { blue } from "../../styles/colors";

const Input = styled.input`
    border: none;
    border-radius: 12px;
    background-color: #f2f5fa;
    height: 50px;
    padding: 0 40px;
    margin: 10px 0;
    transition: 300ms ease;
    &:focus {
        outline: none;
        transform: scale(1.04);
        border: 1px solid ${blue};
    }
    

`
export default Input