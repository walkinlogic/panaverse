'use client'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
export default function Courselist({ text, short, image }) {
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
                        <Image src={image} />
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {text}
                        </Heading>
                        <Text color={'gray.500'}>
                            {short}
                        </Text>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}