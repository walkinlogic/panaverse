import { Flex, useColorModeValue } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...extraStyles }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...extraStyles}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer