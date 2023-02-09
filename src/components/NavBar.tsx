'use client'
import React from "react";
import Logo from './Navigation/Logo';
import MenuLinks from "./Navigation/MenuLinks";
import MenuToggle from "./Navigation/MenuToggle";
import NavBarContainer from "./Navigation/NavBarContainer";
const NavBar = (props: any) => {
    const [isOpen] = React.useState(false)

    //const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer {...props}>
            <Logo w="100px" />
            <MenuLinks isOpen={isOpen} />
            {/* <ToggleLayout />  toggle={toggle} */}
            <MenuToggle isOpen />
        </NavBarContainer>
    )
}

export default NavBar