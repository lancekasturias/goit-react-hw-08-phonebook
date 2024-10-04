import {ThreeDots } from "react-loader-spinner";
import {
    LoaderContainer,
    Message,
} from "./Loader.styled";

function Loader({message}) {
    return (
        <LoaderContainer>
           <ThreeDots color="#f8b400"/>
           <Message>{message}</Message>           
        </LoaderContainer>         
    )
}

export default Loader;