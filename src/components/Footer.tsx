import {
    Box,
    chakra,
    Container,
    Link,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Logo = (props: any) => {
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

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};
export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '4fr 1fr 3fr 0fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Stack direction={'row'} spacing={6}>
                                <Logo color={useColorModeValue('gray.700', 'white')} />
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
                                    <Text
                                        as={'span'}
                                        position={'relative'}
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '30%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bg: 'red.400',
                                            zIndex: -1,
                                        }}>
                                        Panaverse
                                    </Text>
                                </Heading>
                            </Stack>
                        </Box>
                        <Text fontSize={'sm'}>
                            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/courses'}>Courses</Link>
                        <Link href={'/howitworks'}>How it Works</Link>
                        <Link href={'contactus'}>Contact us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}