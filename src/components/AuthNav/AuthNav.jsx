import {
    NavList,
    NavItem, 
    Link,
  } from "./AuthNav.styled"; 
  
  function AuthNav() {
    return (
      <NavList>
        <NavItem>
          <Link to="/login">Login</Link>  
        </NavItem>
        <NavItem>
          <Link to="/register">Signup</Link>  
        </NavItem>
      </NavList>        
    )
  }
  
  export default AuthNav;