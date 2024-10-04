import styled from "@emotion/styled";

export const Form = styled.form `
   padding: 0 10px;
   margin: 0 auto;
`
export const FormTitle = styled.p`
    color:  ${({ theme }) => theme.colors.primaryBlack};
    margin-bottom: 20px;
    font-weight: 800;
    text-align: center;  
`
export const FormField = styled.div `
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2) {
        margin-top: 10px;
    }
`
export const Label = styled.label `
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryBlack};
    margin-bottom: 4px; 
`
export const Input = styled.input `
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack};
    border-radius: 10px; 
    padding: 12px;
    padding-left: 35px;  
    outline: rgba(0,0,0,0);
    background-color: transparent;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ::placeholder{
        font-size: 14px; 
        align-items:center;
        color: ${({ theme }) => theme.colors.primaryGreen};               
    }
  
    &:hover, :focus  {
        border-color: ${({ theme }) => theme.colors.accentOrange};
    }

    &:hover + svg, :focus +svg  {
        fill: ${({ theme }) => theme.colors.accentOrange};
    }
`

export const InputSection = styled.div `
    position: relative;

    svg {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
`

export const SubmitButton = styled.button `
    display:flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px; 
    padding: 8px 16px;
    margin: 20px auto 0;
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: ${({ theme }) => theme.colors.milky};
    border: none;
    border-radius:10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    font-weight: 600; 
    letter-spacing: .06em;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
         
    :hover, :focus {
        color: ${({ theme }) => theme.colors.accentOrange};        
    }

    svg {
        width: 18px;
        height: 18px; 
    }   
`