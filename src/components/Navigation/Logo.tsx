import React from "react"
import { Box, Text, useColorModeValue, Stack, Heading } from "@chakra-ui/react"

const Logosvg = (props: any) => {
  return (
    <svg
      height={80}
      viewBox="0 0 80.000000 80.000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
        fill="#f33" stroke="none">
        <path
          d="M429 781 c-110 -35 -187 -112 -226 -225 -24 -69 -24 -244 1 -341 25
              -96 75 -215 91 -215 8 0 19 28 29 74 29 126 75 181 214 250 40 20 91 53 113
              73 115 104 129 244 35 338 -66 65 -150 80 -257 46z m183 -130 c33 -37 35 -68
              9 -120 -24 -47 -65 -79 -161 -124 -41 -20 -94 -54 -116 -76 l-42 -40 -6 31
              c-18 90 2 208 45 267 72 100 209 131 271 62z"
        />
      </g>
    </svg>
  );
};
const Logo = (props: any) => {
  return (
    <Box {...props} >
      <Box>
        <Stack direction={'row'} spacing={6}>
          <Logosvg color={useColorModeValue('gray.700', 'white')} />
          <Heading
            lineHeight={2.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              color={useColorModeValue('red.400', 'gray.800')}
              position={'relative'}
            >
              Panaverse
            </Text>
          </Heading>
        </Stack>
      </Box>
    </Box >
  )
}
export default Logo;