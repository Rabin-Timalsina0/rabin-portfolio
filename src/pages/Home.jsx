import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaRobot, FaBrain, FaChartLine, FaCode } from 'react-icons/fa'

const Feature = ({ title, text, icon }) => {
  return (
    <VStack
      align="start"
      p={6}
      bg={useColorModeValue('white', 'gray.700')}
      rounded="lg"
      shadow="md"
      _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
    >
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Heading size="md" mt={4} mb={2}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{text}</Text>
    </VStack>
  )
}

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('blue.50', 'gray.900')}
        py={{ base: 10, md: 20 }}
        px={4}
      >
        <Container maxW="7xl">
          <VStack 
            spacing={8} 
            align="center"
            textAlign="center"
            maxW="3xl"
            mx="auto"
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Hi, I'm{' '}
              <Text as="span" bgGradient="linear(to-r, blue.500, blue.800)" bgClip="text">
                Rabin Timalsina
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              AI Engineer & Chatbot Specialist with expertise in building intelligent
              conversational experiences. I help businesses automate customer interactions
              and streamline operations through custom AI solutions.
            </Text>
            <HStack spacing={4}>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                colorScheme="blue"
              >
                Hire Me
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                variant="outline"
                colorScheme="blue"
              >
                View Projects
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="7xl" py={{ base: 10, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          
        <Feature
            icon={FaBrain}
            title="Machine Learning"
            text="Implementing intelligent algorithms to process and understand user interactions effectively."
          />
          <Feature
            icon={FaRobot}
            title="AI Chatbots"
            text="Custom conversational AI solutions designed to enhance customer engagement and automate support."
          />
          <Feature
            icon={FaChartLine}
            title="Analytics"
            text="Data-driven insights to optimize chatbot performance and improve user experience."
          />
          <Feature
            icon={FaCode}
            title="Custom Development"
            text="Tailored solutions built with modern technologies to meet your specific business needs."
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Home 