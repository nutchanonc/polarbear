import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const BannerContainer = styled.div`
    width: 100%;
    height: 83vh;
    position: relative;
    background: linear-gradient(270deg, #acb9e8, #ffffff, #c6b4ec);
    background-size: 600% 600%;

    -webkit-animation: Main 7s ease infinite;
    -moz-animation: Main 7s ease infinite;
    -o-animation: Main 7s ease infinite;
    animation: Main 7s ease infinite;
`
const Banner = styled.div`
    position: relative;
    height: 83vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`
const HomePageBanner: FunctionComponent = () => {
    const router = useRouter()
    return (
        <BannerContainer>
            <Banner>
                <div className="text-center fly-in">
                    <h1 className="text-white my-2">A cryptocurrency wallet</h1>
                    <p className="text-white my-4">Own your cryptocurrency and spend them in everyday life.</p>
                    <div className="d-flex justify-content-center">
                        <Button style={{ backgroundColor: "#fff", color: "#000" }} onClick={() => router.push("/docs")}>View docs {">"}</Button>
                    </div>
                </div>

            </Banner>
        </BannerContainer>
    )
}

export default HomePageBanner