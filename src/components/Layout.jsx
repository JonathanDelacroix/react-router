import Footer from "./Footer"
import Header from './Header'
import { Outlet } from "react-router"
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;