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
export interface props {
    text?: string;
    short?: string;
    image?: string;
}
const Courselist = ({ text, short, image }: props) => {
    return (
        <>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    maxH={'410px'}
                    w={'full'}
                    mb={6}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        maxH={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        overflow={'hidden'}
                        pos={'relative'}>
                        <Image
                            src={image}
                            layout={'fill'}
                        />
                    </Box>
                    <Stack mb={10} h={'200px'}>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'1xl'}
                            fontFamily={'body'}>
                            {text}
                        </Heading>
                        <Text color={'gray.500'} noOfLines={[3, 4, 5]}>
                            {short}
                        </Text>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default Courselist