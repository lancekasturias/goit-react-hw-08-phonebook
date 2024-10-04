import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const FormField = styled.div `
    display: flex;
    flex-direction: column;
    
    &:nth-of-type(2) {
        margin-top: 10px;       
    }
`
export const LinkNavInfo = styled.div`
    text-align: center;
    margin-top: 20px;
    color:  ${({ theme }) => theme.colors.primaryBlack};
`
export const LinkNav = styled(Link)`
    color: ${({ theme }) => theme.colors.accentOrange};
    font-weight: 400;  
    margin-left: 10px;    
`