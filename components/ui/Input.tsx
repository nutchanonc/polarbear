import styled from "styled-components";
import { blue } from "../../styles/colors";

const Input = styled.input`
    border: none;
    border-radius: 7px;
    background-color: #f7f9fc;
    height: 40px;
    padding: 0 20px;
    margin: 5px 0;
    font-size: 15px;
    &:focus {
        outline: none;
        border: 1px solid ${blue};
    }
    

`
export default Input