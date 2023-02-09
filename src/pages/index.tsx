import Link from 'next/link'
import Head from 'next/head'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import Hero from '../components/Hero';
const HomePage: React.FC = () => {
  return (
    <>
      <Hero></Hero>
    </>
  )
}

export default HomePage
