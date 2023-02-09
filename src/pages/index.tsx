import Hero from '../components/Hero';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
const HomePage: React.FC = () => {
  const linkColor = useColorModeValue('blue.600', 'blue.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <>
      <Hero></Hero>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'full'} textAlign={'center'}>
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
    </>
  )
}

export default HomePage
