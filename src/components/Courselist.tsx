'use client'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
export default function Courselist() {
    return (
        <>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            Boost your conversion rate
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}