import Navbar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {HeaderContainer} from "./Layout.styled";

function Layout() {
    return (
        <>
            <header> 
                <HeaderContainer>
                    <Navbar/>
                </HeaderContainer>
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>     
    )   
}

export default Layout;