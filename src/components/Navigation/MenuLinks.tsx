import { Box, Stack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
export interface props {
    isOpen?: React.ReactNode;
}
const MenuLinks = ({ isOpen }: props) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}>
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/courses">Courses</MenuItem>
                <MenuItem to="/howitworks">How it Works</MenuItem>
                <MenuItem to="/contactus">Contact Us</MenuItem>
            </Stack>
        </Box>
    )
}

export default MenuLinks