import Hero from '../components/Hero';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Courselist from '../components/Courselist';
const datacourses = [
  { id: 1, image: "/static/images/web3_mataverse.jpg", text: "Web 3.0 and Metaverse Developer", short: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences." },
  { id: 2, image: "/static/images/AI.png", text: "Artificial Intelligence", short: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models." },
  { id: 3, image: "/static/images/cloud.png", text: "Cloud-Native Computing", short: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes." },
  { id: 4, image: "/static/images/Iot.png", text: "Ambient Computing and IoT", short: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices." },
  { id: 5, image: "/static/images/geno.png", text: "Genomics and Bioinformatics", short: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications." },
  { id: 6, image: "/static/images/network.png", text: "Network Programmability and Automation", short: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git." }
];
const HomePage: React.FC = () => {
  const linkColor = useColorModeValue('blue.600', 'blue.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <>
      <Hero></Hero>
      <Box p={4} maxW={'full'}>
        <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
          <Heading color={'green.600'} fontSize={'3xl'}>Panaverse DAO</Heading>
          <Text color={'green.600'} fontSize={'xl'}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
          </Text>
          <Text color={'blue.600'} fontSize={'xl'}>
            <Link
              p={2}
              href={'https://www.piaic.org/'}
              fontSize={'3xl'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}>Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
            </Link>
          </Text>
          <Text color={'blue.600'} fontSize={'xl'}>
            <Link
              p={2}
              href={'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'}
              fontSize={'xl'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}>This document on Google Docs
            </Link>
          </Text>
          <Text textAlign={'left'}>
            The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
          </Text>
          <Text textAlign={'left'}>
            Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022
            <Link
              p={2}
              href={'https://www.citivelocity.com/citigps/metaverse-and-money/'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}>research paper</Link>
            that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
          </Text>
          <Heading color={'green.600'} textAlign={'left'} fontSize={'3xl'}>The Program in a Nutshell: Earn While You Learn</Heading>
          <Text textAlign={'left'}>
            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Stack>
      </Box>

      <Container maxW={'5xl'} py={12} >
        <Stack direction={'row'} spacing={4} align={'center'}><Heading color={'green.600'} fontSize={'3xl'}>Courses</Heading></Stack>
        <Box maxW={'5xl'}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
            {datacourses.map((content) => (
              <Stack spacing={4} className="card">
                <Courselist text={content.text} short={content.short} image={content.image}></Courselist>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  )
}

export default HomePage
