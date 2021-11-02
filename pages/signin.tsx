import { Backdrop, CircularProgress, TextField } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
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
    padding: 30px 30px;
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
    }

    return (
        <Screen>
            <Head>
                <title>Sigin - Polarbear</title>
            </Head>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className="text-center ">
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
            <Box>
                <div className="text-center">
                    <h4 className="text-center">Sign in to your account</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5 mb-3">
                        <div className="my-3">
                            <p style={{ fontSize: "13px"}}>Email</p>
                            <Input
                                type="email"
                                style={{ width: "100%" }}
                                value={identity}
                                onChange={(e: any) => setIdentity(e.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <p style={{ fontSize: "13px"}}>Password</p>
                            <Input
                                style={{ width: "100%" }}
                                type="password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>
                        <SigninButton>Continue</SigninButton>
                    </div>
                </form>

            </Box>
        </Screen>
    )
}
export default Signin;