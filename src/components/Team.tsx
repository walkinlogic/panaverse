'use client'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
export default function Team() {
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    name={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Lindsey James
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @lindsey_jam3s
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                    <Link href={'#'} color={'blue.400'}>
                        #tag
                    </Link>{' '}
                    me in your posts
                </Text>
            </Box>
        </Center>
    )
}