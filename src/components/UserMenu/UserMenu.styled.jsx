import styled from "@emotion/styled";

export const Menu = styled.div`
    display:flex; 
    align-items: center; 
    justify-content: center; 
    margin-left: 20px;     
`
export const UserInfo = styled.p`
    font-weight: 600; 
    color: ${({ theme }) => theme.colors.milky};
`
export const Button = styled.button `
    display:flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px; 
    padding: 8px 16px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: ${({ theme }) => theme.colors.milky};
    border: none;
    border-radius:10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    font-weight: 600; 
    letter-spacing: .06em;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
         
    :hover, 
    :focus {
        color: ${({ theme }) => theme.colors.accentOrange};        
    }

    svg {
        width: 18px;
        height: 18px;     
    }   
`