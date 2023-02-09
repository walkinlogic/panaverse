import React from "react"
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
export interface props {
    children?: React.ReactNode;
    to: string;
}
const MenuItem = ({ children, to = "/", ...rest }: props) => {

    return (
        <Link href={to}>
            <Text display="block" {...rest} color={useColorModeValue('black', 'white')} px={4}>
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem