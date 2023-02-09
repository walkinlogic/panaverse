'use client'
import {
    useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import Logo from './Navigation/Logo';
import MenuLinks from "./Navigation/MenuLinks";
import MenuToggle from "./Navigation/MenuToggle";
import NavBarContainer from "./Navigation/NavBarContainer";
const NavBar = (props: any) => {
    const [isOpen] = React.useState(false)

    //const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer mb={"0"} {...props} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}>
            <Logo w="240px" />
            <MenuLinks isOpen={isOpen} />
            {/* <ToggleLayout />  toggle={toggle} */}
            <MenuToggle isOpen />
        </NavBarContainer>
    )
}

export default NavBar