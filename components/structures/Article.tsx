import { FunctionComponent } from "react";
import { grey } from "../../styles/colors";
import EndOfSection from "./EndOfSection";


interface ITopic {
    title: string
    id?: string
}

interface IArticle {
    children?: any
    topics?: ITopic[]
}

const Article: FunctionComponent<IArticle> = ({ children }) => {
    return (
        <div className="row m-0 my-4">
            <div className="col-lg-2">
                
            </div>
            <div className="col-lg-10 p-5" style={{border: `1px solid ${grey}`,  borderWidth: "0 0 0 1px", minHeight: "80vh"}}>
                { children }
            </div>
        </div>
    )
}
export default Article