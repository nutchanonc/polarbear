import { FunctionComponent } from "react";
import Navbar from "../ui/Navbar";

interface ITemplate {
    children: any
}

const Template: FunctionComponent<ITemplate> = ({ children }) => {
    return (
        <>
            <Navbar />
            {
                children
            }
        </>
    )
}
export default Template;