import styled from '@emotion/styled';

export const BookFormSection = styled.section`
    padding-top: 60px; 
    padding-bottom: 60px; 
`
export const FilterSection = styled.section`
    padding-bottom: 60px; 
` 
export const FilterContainer = styled.div`
    padding:0 30px;
` 
export const Container = styled.div `
    padding:0 30px; 
    display: flex;
    flex-direction: column; 
    justify-content: center;    
    font-size: 16px;
    color: ${({theme}) => theme.colors.primaryBlack};
    letter-spacing: .03em;
`
export const InfoContainer = styled.div`
   height: 40px;
   margin-top: 20px;
`
export const MainTitle = styled.h1 `
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px; 
`
export const SecondaryTitle = styled.h2 `
    text-align: center;
    margin-top: 20px;     
`

export const Titleparth = styled.span `
    color: ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
`
export const Message = styled.p `
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: 20px; 
`