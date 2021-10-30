import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Brand: FunctionComponent = () => {
    const router = useRouter();
    return (
        <span 
            onClick={() => router.push("/")}
            style={{ fontSize: "20px", fontWeight: 300}}
            className="pointer"
            >
            <h4 className="d-inline brand" style={{ fontSize: "20px"}}>Polar</h4>
            bear
        </span>
    )
}
export default Brand;