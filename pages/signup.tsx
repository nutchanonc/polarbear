import { Backdrop, CircularProgress } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Input from "../components/ui/Input";
import SigninButton from "../components/ui/SigninButton";
import Head from "next/head"
import VField from "../components/structures/Vfield";

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
    padding: 30px 8%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Signin: NextPage = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
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
                <title>Register - Polarbear</title>
            </Head>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="container">
                <div className="row">
                    <div className="col-lg d-flex justify-content-center pt-5">
                        <div style={{ minWidth: "400px" }}>
                            <h4 className="my-5">With Polar<span className="font-light">bear</span>, you can</h4>
                            <VField title="Own your crypto" value="Create a wallet and transfer your cryptocurrency." />
                            <VField title="Automate your expenses" value="Subcriptions"/>
                        </div>
                    </div>

                    <div className="col-lg p-0">
                        <form onSubmit={handleSubmit}>
                            <Box>
                                <div className="text-start">
                                    <h5>Create your Polarbear account</h5>
                                </div>
                                <div className="mt-5 mb-3">
                                    <div className="my-3">
                                        <p style={{ fontSize: "13px" }}>Email</p>
                                        <Input
                                            type="email"
                                            style={{ width: "100%" }}
                                            value={email}
                                            onChange={(e: any) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <p style={{ fontSize: "13px" }}>Full name</p>
                                        <Input
                                            type="text"
                                            style={{ width: "100%" }}
                                            value={name}
                                            onChange={(e: any) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <p style={{ fontSize: "13px" }}>Password</p>
                                        <Input
                                            style={{ width: "100%" }}
                                            type="password"
                                            value={password}
                                            onChange={(e: any) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <SigninButton>Create account</SigninButton>
                            </Box>
                        </form>

                    </div>

                </div>
            </div>



        </Screen >
    )
}
export default Signin;