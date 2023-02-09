import React from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export interface props {
    isOpen?: React.ReactNode;
    toggle?: React.MouseEvent;
}
function MenuToggle({ toggle, isOpen }: props) {
    return (
        <Box color={useColorModeValue('red.400', 'gray.800')} display={{ base: "block", md: "none" }} onClick={() => toggle}>
            {isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
        </Box>
    )
}

export default MenuToggle