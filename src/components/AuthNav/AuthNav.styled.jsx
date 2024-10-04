import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
    display: flex;
    list-style: none; 
    justify-content: space-around; 
`
export const NavItem = styled.li`
    &:not(:last-child){
        margin-right: 30px;
    }
`
export const Link = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    color:${({ theme }) => theme.colors.milky};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &.active{
        color:${({ theme }) => theme.colors.accentOrange};        
    }
`