import { Box, useColorModeValue } from "@chakra-ui/react";
import NavBar from './NavBar';
import Footer from './Footer';
import Jointeam from './Jointeam';
import React from "react";
export interface props {
    children?: React.ReactNode;
}
const Layout = ({ children }: props) => {
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

export default Layout;