import Footer from "./Footer"
import Header from './Header'
import { Outlet } from "react-router"
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <>
            <Header />
            <Container as="main">
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

export default Layout;