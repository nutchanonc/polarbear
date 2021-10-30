import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
`

const Menu: FunctionComponent = () => {
    return (
        <Container>
            <p>Menu</p>
        </Container>
    )
}
export default Menu;