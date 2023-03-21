import BarLoader from "react-spinners/BarLoader";
import { LoaderWrap } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderWrap>
            <BarLoader color="#36d7b7" size={20}/>
        </LoaderWrap>
    )
}

export default Loader;