import { Box, Center } from "@chakra-ui/react";
import NavBar from './NavBar';
import Footer from './Footer';
import Jointeam from './Jointeam';
export default function Layout({ children }) {
    return (
        <>
            <Box>
                <NavBar />
                <Box>
                    {children}
                </Box>
                <Jointeam />
                <Footer />
            </Box>
        </>
    )
}