import React from "react"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"


const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color={useColorModeValue('black', 'white')} px={4}>
        Logo
      </Text>
    </Box>
  )
}
export default Logo;