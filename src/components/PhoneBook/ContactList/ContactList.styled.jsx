import styled from "@emotion/styled";

export const List = styled.ul `
    list-style: none;
    padding: 10px;
    margin: 20px auto 0; 
`
export const Contact = styled.li `
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px; 
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack}; 
    border-radius: 10px; 

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &:hover, 
    :focus {
        border-color: ${({ theme }) => theme.colors.accentOrange}; 
    }
`