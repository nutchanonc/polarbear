import { Fragment, FunctionComponent, useState } from "react";
import styled from "styled-components";
import Brand from "./Brand";
import Button, { MinimalButton } from "./Button";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import Menu from "./Menu";
import IconButton from '@mui/material/IconButton';
import { useRouter } from "next/dist/client/router";

const Container = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #fff;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 10px rgba(0,0,0,0.06);
    position: sticky;
    top: 0;
    z-index: 47;
`

const Navbar: FunctionComponent = () => {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const anchor = "left";

    const list = () => (
        <Menu />
    )

    return (
        <Container>
            <Fragment key={anchor}>
                <Drawer
                    anchor={anchor}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    {list()}
                </Drawer>
            </Fragment>
            <div className="d-flex align-items-center">
                <IconButton className="me-3 pointer" onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>       
                <Brand/>
            </div>
            <div className="d-flex">
                <MinimalButton className="me-3" onClick={() => router.push("/signin")}>Log in</MinimalButton>
                <Button>Sign up</Button>
            </div>
        </Container>
    )
}

export default Navbar;