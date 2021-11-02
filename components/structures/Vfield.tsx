import { FunctionComponent } from "react"
import P from "../elements/P"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from "../../styles/colors";

interface IVField {
    title?: string
    value?: string
}

const VField: FunctionComponent<IVField> = ({ title, value }) => {
    return (
        <>
        <div className="my-5">
            <div className="d-flex flex-wrap mx-3">
                <CheckCircleIcon sx={{ fontSize: "17px", color: blue }} />
                <div className="ms-3" style={{ fontSize: "14px" }}>
                    <h6>{ title }</h6>
                    <P>{value}</P>
                </div>
            </div>
        </div>
        </>
    )
}

export default VField