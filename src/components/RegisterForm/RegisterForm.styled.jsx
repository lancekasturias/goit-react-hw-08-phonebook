import styled from "@emotion/styled";

export const Form = styled.form `
   padding: 0 10px;  
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
    
    &:nth-of-type(2n) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`