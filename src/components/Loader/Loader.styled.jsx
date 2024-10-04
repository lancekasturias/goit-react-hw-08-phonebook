import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;       
`
export const Message = styled.p`
    color:  ${({ theme }) => theme.colors.primaryBlack};
    margin-top: 10px;
`