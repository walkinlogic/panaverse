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
    const [isOpen, setIsOpen] = React.useState(false)

    function toggle() {
        setIsOpen(!isOpen);
    }
    // const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer as="header" backdropFilter="saturate(180%) blur(5px)" pr={15} zIndex="99" position="fixed" w="100%" mb={"0"} {...props} bg={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}>
            <Logo w="240px" />
            <MenuLinks isOpen={isOpen} />
            {/* <ToggleLayout />  toggle={toggle} */}
            <MenuToggle toggle={toggle} isOpen />
        </NavBarContainer>
    )
}

export default NavBar