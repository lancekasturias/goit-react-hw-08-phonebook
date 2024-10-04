import { BsFillPersonFill, BsCheck2Square} from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { registration } from "../../redux/auth/operation";
import { selectIsLoadingRegister } from "../../redux/auth/selectors";
import {
    Label,
    Input,
    InputSection,
    SubmitButton,
} from "components/PhoneBook/ContactForm/ContactForm.styled";
import {
    Form,
    FormTitle,
    FormField,
} from "./RegisterForm.styled";
import {
    LinkNav,
    LinkNavInfo,
} from "components/LoginForm/LoginForm.styled";

function RegisterForm() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoadingRegister);
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const userCredentials = {
            name: form.elements.userName.value, 
            email: form.elements.userEmail.value, 
            password: form.elements.userPassword.value,   
        }
        dispatch(registration(userCredentials));
        form.reset();
    } 
    
    return ( 
        <Form onSubmit={handleSubmitForm}>
            <FormTitle>Join us. It`s free!</FormTitle>
            <FormField>
                <Label  htmlFor="userName">User name</Label>
                <InputSection>
                    <Input
                        type="text"
                        name="userName"
                        placeholder="Name Surname"
                        required
                    />
                    <BsFillPersonFill />
                </InputSection>
            </FormField>
            <FormField>
                <Label  htmlFor="userEmail">Email</Label>
                <InputSection>
                    <Input
                        type="email"
                        name="userEmail"
                        placeholder="user@email.com"
                        required
                    />
                    <HiEnvelope/>
                </InputSection>
            </FormField>
            <FormField>
                <Label  htmlFor="userPassword">Password</Label>
                <InputSection>
                    <Input
                        type="password"
                        name="userPassword"
                        placeholder="********"
                        required
                    />                        
                    <IoLockClosed />
                </InputSection>
            </FormField>
            <LinkNavInfo>
                <b>Already have an account?</b>
                <LinkNav to='/login'>Login Here</LinkNav>
            </LinkNavInfo>
            <SubmitButton type="submit">
                Signup 
                {isLoading ? <Watch color="#f8b400" /> : <BsCheck2Square />}
            </SubmitButton>
        </Form>     
    )
}

export default RegisterForm;