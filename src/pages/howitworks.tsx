
import {
    Text,
    Box,
    Flex,
    Container,
    Image,
    Heading,
    SimpleGrid,
    StackDivider,
    Icon,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
    IoCheckmarkSharp,
} from 'react-icons/io5';


interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};
const HowitworksPage: React.FC = () => {
    return (
        <>
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} mt={{ sm: 10, md: 30, lg: 39 }} spacing={10}>
                    <Stack spacing={4}>
                        <Heading>How it Work</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            PIAIC will launch classes in the following locations, one city at a time, in the following order
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Karachi: Accepting applications in Karachi'}
                            />
                            <Feature
                                icon={<Icon as={IoCheckmarkSharp} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Islamabad: Accepting applications in Islamabad'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'Lahore: Accepting applications in Lahore'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'red.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('red.100', 'red.900')}
                                text={'Peshawar: Accepting applications in Peshawar'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                '/static/images/splash.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
                <SimpleGrid columns={{ base: 1, md: 1 }} mt={"10"} spacing={10}>
                    <Stack spacing={4}>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'1- Signup at PIAIC Portal.'}
                            />
                            <Feature
                                icon={<Icon as={IoCheckmarkSharp} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'2- Submit the online application.'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkSharp} color={'red.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('red.100', 'red.900')}
                                text={'4- Pass all PIAIC exams with an average score of at least 70%.'}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
                <Text color={'gray.500'} mt={"10"} fontSize={'lg'}>
                    All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.
                </Text>
            </Container>
            <Container bg={useColorModeValue('green.400', 'green.400')} maxW="full" m={{ sm: 0, md: 0, lg: 0 }} centerContent overflow="hidden">
                <Box
                    maxW="5xl"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 0, md: 0, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 5 }}>
                    <Text color={'white'} mt={"0"} fontSize={'lg'}>
                        Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.
                    </Text>
                    <Text color={'white'} mt={"10"} fontSize={'lg'}>
                        The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.
                    </Text>
                    <Text color={'white'} mt={"10"} fontSize={'lg'}>
                        The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.
                    </Text>
                </Box>
            </Container>
            <Container bg={useColorModeValue('white.80', 'white.100')} maxW="full" p={{ sm: 0, md: 0, lg: 0 }} m={{ sm: 0, md: 0, lg: 0 }} centerContent overflow="hidden">
                <Box
                    bg={useColorModeValue('white.400', 'white.100')}
                    color="white"
                    maxW="5xl"
                    borderRadius="lg"
                    m={{ sm: 0, md: 0, lg: 0 }}
                    p={{ sm: 5, md: 5, lg: 10 }}>
                    <Text color={'black'} mt={"10"} fontSize={'lg'}>
                        Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.
                    </Text>
                </Box>
            </Container>
            <Container bg={useColorModeValue('green.400', 'green.400')} maxW="full" p={{ sm: 0, md: 0, lg: 0 }} m={{ sm: 0, md: 0, lg: 0 }} centerContent overflow="hidden">
                <Box
                    bg={useColorModeValue('green.400', 'greenAlpha.100')}
                    color="white"
                    maxW="5xl"
                    borderRadius="lg"
                    m={{ sm: 0, md: 0, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 5 }}>
                    <Text color={'white'} mt={"0"} fontSize={'lg'}>
                        Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.
                    </Text>
                </Box>
            </Container>
            <Container bg={useColorModeValue('blackAlpha.800', 'blackAlpha.800')} maxW="full" p={{ sm: 0, md: 0, lg: 0 }} m={{ sm: 0, md: 0, lg: 0 }} centerContent overflow="hidden">
                <Box
                    //bg={useColorModeValue('blackAlpha.800', 'blackAlpha.800')}
                    color="black"
                    maxW="5xl"
                    borderRadius="lg"
                    m={{ sm: 0, md: 0, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 5 }}>
                    <Text color={'white'} mt={"0"} fontSize={'lg'}>
                        For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
                        Please note we are closed on Fridays.
                    </Text>
                    <Text color={'white'} mt={"0"} fontSize={'lg'}>
                        For technical questions related to coursework, you may contact us via email at education@piaic.org.
                    </Text>
                </Box>
            </Container>
        </>
    )
}

export default HowitworksPage
