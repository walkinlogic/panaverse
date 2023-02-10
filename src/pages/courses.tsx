import Courselist from '../components/Courselist';
import {
    Text,
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
    IoCheckmarkCircle,
} from 'react-icons/io5';
interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}
const datacourses = [
    { id: 1, image: "/static/images/web3_mataverse.jpg", text: "Web 3.0 and Metaverse Developer", short: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences." },
    { id: 2, image: "/static/images/AI.png", text: "Artificial Intelligence", short: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models." },
    { id: 3, image: "/static/images/cloud.png", text: "Cloud-Native Computing", short: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes." },
    { id: 4, image: "/static/images/IoT.jpg", text: "Ambient Computing and IoT", short: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices." },
    { id: 5, image: "/static/images/geno.png", text: "Genomics and Bioinformatics", short: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications." },
    { id: 6, image: "/static/images/network.png", text: "Network Programmability and Automation", short: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git." }
];
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
const CoursesPage: React.FC = () => {
    return (
        <>
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid mt={{ sm: 10, md: 30, lg: 39 }} columns={{ base: 1, md: 2 }} spacing={15}>
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
                                    <Icon as={IoCheckmarkCircle} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Karachi: Accepting applications in Karachi'}
                            />
                            <Feature
                                icon={<Icon as={IoCheckmarkCircle} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'Islamabad: Accepting applications in Islamabad'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkCircle} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'Lahore: Accepting applications in Lahore'}
                            />
                            <Feature
                                icon={
                                    <Icon as={IoCheckmarkCircle} color={'red.500'} w={5} h={5} />
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
                                '/static/images/courses.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
            </Container>
            <Container maxW={'5xl'} py={12} >
                <Stack direction={'row'} spacing={4} align={'center'}><Heading color={'green.600'} fontSize={'3xl'}>Courses</Heading></Stack>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
                    {datacourses.map((content) => (
                        <Stack spacing={4} className="card">
                            <Courselist text={content.text} short={content.short} image={content.image}></Courselist>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Container>

        </>
    )
}

export default CoursesPage
