import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
    FormSection,
    FormContainer,
} from "./RegisterPage.styled";


function RegisterPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <FormSection>
                <FormContainer> 
                    <RegisterForm />
                </FormContainer> 
            </FormSection>  
        </HelmetProvider>    
    )
}

export default RegisterPage; 