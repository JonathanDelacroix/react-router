import Footer from "./Footer"
import Header from './Header'
import { Outlet } from "react-router"
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <>
            <Container as="main">
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </>
    );
}

export default Layout;