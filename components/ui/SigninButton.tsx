import styled from "styled-components";

const SigninButton = styled.button`
    width: 100%;
    height: 80px;
    border-radius: 10px;
    margin-top: 40px;
    border: none;
    background: rgb(61,96,219);
    background: linear-gradient(151deg, rgba(61,96,219,1) 0%, rgba(115,86,198,1) 100%);
    font-size: 15px;
    color: #fff;
    transition: 300ms ease;
    &:hover {
        box-shadow: 0 15px 20px rgba(0,0,0,0.1);
        background: linear-gradient(270deg, #3d60db, #713ddb, #d93b86);
        background-size: 600% 600%;

        -webkit-animation: signin-button 2s ease infinite;
        -moz-animation: signin-button 2s ease infinite;
        -o-animation: signin-button 2s ease infinite;
        animation: signin-button 2s ease infinite;
    }
`
export default SigninButton;