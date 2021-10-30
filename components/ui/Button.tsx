import styled from "styled-components";
import { blue, grey } from "../../styles/colors";


const Button = styled.button`
    font-size: 14px;
    height: 40px;
    padding: 0 20px;
    border: none;
    background-color: ${blue};
    border-radius: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease;
    &:hover {
        filter: brightness(1.1);
    }
`

export const SecondaryButton = styled.button`
    font-size: 14px;
    border: 1px solid ${grey};
    height: 40px;
    padding: 0 20px;
    background-color: transparent;
    border-radius: 14px;
    color: ${grey};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease;
    &:hover {
        filter: brightness(0.8);
    }
`
export const MinimalButton = styled.button`
    border: none;
    font-size: 14px;
    height: 40px;
    padding: 0 20px;
    background-color: transparent;
    border-radius: 14px;
    color: ${grey};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease;
    &:hover {
        background-color: #f2f2f2;
    }
`


export default Button;

