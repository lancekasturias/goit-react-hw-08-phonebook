import AuthNav from "components/AuthNav/AuthNav";
import {
  Nav,
  Link,
  NavList, 
  NavItem,
  Logo,
  LogoPath,
} from "./NavBar.styled"; 
import { useAuth } from "../../hooks/useAuth";
import UserMenu from "../UserMenu/UserMenu";


function Navbar() {
  const { isLoggedIn } = useAuth(); 
  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>  
          </NavItem>
          {isLoggedIn && (
            <NavItem>          
              <Link to="/contacts"><Logo>Phone<LogoPath>book</LogoPath></Logo></Link>  
            </NavItem>
          )}
        </NavList>       
      </Nav>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}    
    </>
  )
}

export default Navbar;