import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
    HomeSection,
    HomeTitle,
    Logo,
    LogoPath,
    HomeContainer,   
} from "./HomePage.styled"; 

function HomePage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeSection>
                <HomeContainer>                
                    <HomeTitle>Welcome to <Logo>Phone<LogoPath>book</LogoPath></Logo></HomeTitle>
                    <p>Save the most important contacts to always be in touch!</p>  
                </HomeContainer>
            </HomeSection>
        </HelmetProvider>
    )
}

export default HomePage; 