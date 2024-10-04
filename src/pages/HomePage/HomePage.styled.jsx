import styled from "@emotion/styled";

export const HomeSection = styled.section`
    padding-top: 118px;
    padding-bottom: 118px;
    margin-left: auto;
    margin-right: auto;
    color: ${({ theme }) => theme.colors.primaryBlack};
    text-align: center;
    font-size: 20px; 
`
export const HomeContainer = styled.div`
    padding-left: 30px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;   
`
export const HomeTitle = styled.h1`
   margin: 0 auto 30px; 
   font-weight: 1100; 
   font-size: 90px;   
`
export const Logo = styled.span`
    color: ${({ theme }) => theme.colors.primaryGreen};    
`
export const LogoPath = styled.span`
    color: ${({ theme }) => theme.colors.accentOrange};  
`