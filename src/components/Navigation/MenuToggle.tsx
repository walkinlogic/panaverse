import React from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export interface props {
    isOpen: Boolean;
    toggle: Function
}
function MenuToggle({ isOpen, toggle }: props) {
    return (
        <Box color={useColorModeValue('red.400', 'gray.800')} display={{ base: "block", md: "none" }} onClick={() => toggle(!isOpen)}>
            {isOpen ? <HamburgerIcon fontSize={'lg'} /> : <HamburgerIcon />}
        </Box>
    )
}

export default MenuToggle