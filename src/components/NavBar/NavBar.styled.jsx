import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;       
`
export const NavList = styled.ul`
    display: flex;
    list-style: none; 
    margin-right: 20px;
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
    &.active>span>span, 
    &.active>span{
        color:${({ theme }) => theme.colors.accentOrange};        
    }
`
export const Logo = styled.span`
    color: ${({ theme }) => theme.colors.primaryGreen};    
`
export const LogoPath = styled.span`
    color: ${({ theme }) => theme.colors.milky};  
`