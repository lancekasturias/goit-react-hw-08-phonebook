import styled from "@emotion/styled";

export const ContactInfo = styled.div`
`
export const Name = styled.p `
    margin-bottom: 10px; 
    font-weight: 500;
    font-size: 20px; 
    color: ${({theme})=> theme.colors.primaryGreen};    
`
export const RemoveButton = styled.button `
    text-align: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: ${({ theme }) => theme.colors.milky};
    border: none;
    border-radius:50%;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
        width: 20px;
        height: 20px;
    }

    :hover, :focus {
        color: ${({ theme }) => theme.colors.accentOrange};
        transform: scale(1.1);
    }
`