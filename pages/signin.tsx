import { Backdrop, CircularProgress, TextField } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Input from "../components/ui/Input";
import SigninButton from "../components/ui/SigninButton";

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    border: solid 1px #e1e5eb;
    max-width: 500px;
    width: 80vw;
    height: 600px;
    background-color: #fff;
    box-shadow: 0 20px 20px rgba(0,0,0,0.07);
    padding: 30px 3%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Signin: NextPage = () => {

    const [identity, setIdentity] = useState("")
    const [password, setPassword] = useState("")

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // login here
        setOpen(true)
        alert("Not ready")
    }

    return (
        <Screen>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box>
                <div className="text-center">
                    <h4 className="text-center">Sign in</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5 mb-3">
                        <Input
                            style={{ width: "100%" }}
                            placeholder="Enter username or email"
                            value={identity}
                            onChange={(e: any) => setIdentity(e.target.value)}
                        />
                        <Input
                            style={{ width: "100%" }}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                        <SigninButton>Login</SigninButton>
                    </div>
                </form>

            </Box>
        </Screen>
    )
}
export default Signin;