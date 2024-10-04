import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from "components/LoginForm/LoginForm";
import { FormContainer, FormSection } from "pages/RegisterPage/RegisterPage.styled";

function LoginPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <FormSection>
                <FormContainer>
                    <LoginForm/>
                </FormContainer>
            </FormSection>
        </HelmetProvider>)
}
export default LoginPage;