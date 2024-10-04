import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { Watch } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operation";
import { selectIsLoadingLogin } from "../../redux/auth/selectors";
import {
    Form,
    FormTitle,
} from "../RegisterForm/RegisterForm.styled";
import {
    Label,
    Input,
    InputSection,
    SubmitButton,
} from "../PhoneBook/ContactForm/ContactForm.styled";
import {
    FormField,
    LinkNav,
    LinkNavInfo,
} from "./LoginForm.styled";

function LoginForm() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoadingLogin);
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const userLoginCredentials = {
            email: form.elements.userEmail.value, 
            password: form.elements.userPassword.value,   
        }
        dispatch(logIn(userLoginCredentials));
        form.reset();
    }
 
    return (
        <Form onSubmit={handleSubmitForm}>
            <FormTitle>Welcome back!</FormTitle>
            <FormField>
                <Label htmlFor="userEmail">Email</Label>
                <InputSection>
                    <Input
                        name="userEmail"
                        type="email" 
                        placeholder="user@email.com"                        
                        required
                    />
                    <HiEnvelope />
                </InputSection>
            </FormField>
             <FormField>
                <Label  htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input
                        name="userPassword"
                        type="password"
                        placeholder="********"
                        required
                    />
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <LinkNavInfo>
                <b>New user?</b>
                <LinkNav to="/register">Sign Up Now</LinkNav>
            </LinkNavInfo> 
            <SubmitButton type="submit">
                Login
                {isLoading ? <Watch color="#f8b400" /> : <BsBoxArrowInLeft />}
            </SubmitButton>                   
        </Form>
    )
}

export default LoginForm; 
