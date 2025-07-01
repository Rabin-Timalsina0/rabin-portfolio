import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  useColorModeValue,
  IconButton,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  Button,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const MetricStat = ({ label, value }) => {
  const labelColor = useColorModeValue('gray.600', 'gray.400')
  const valueColor = useColorModeValue('blue.600', 'blue.300')

  return (
    <Stat>
      <StatNumber fontSize={{ base: 'xl', md: '2xl' }} color={valueColor} mb={1}>
        {value}
      </StatNumber>
      <StatLabel fontSize={{ base: 'xs', md: 'sm' }} color={labelColor} noOfLines={1}>
        {label}
      </StatLabel>
    </Stat>
  )
}

const ProjectCard = ({ title, description, image, metrics, path }) => {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bg={cardBg}
      shadow="xl"
      minW={{ base: "280px", md: "380px" }}
      maxW={{ base: "280px", md: "380px" }}
      h="full"
      _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
      position="relative"
      onClick={() => navigate(path)}
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          h="200px"
          w="100%"
          objectFit="cover"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      <Box p={6}>
        <VStack align="start" spacing={4} h="full">
          <Heading size="md" noOfLines={1}>{title}</Heading>
          <Text 
            color={useColorModeValue('gray.600', 'gray.300')}
            fontSize="sm"
            noOfLines={3}
          >
            {description}
          </Text>
          <Grid 
            templateColumns="repeat(2, 1fr)" 
            gap={4} 
            w="100%" 
            mt="auto"
          >
            {Object.entries(metrics).slice(0, 4).map(([key, value]) => (
              <MetricStat key={key} label={key} value={value} />
            ))}
          </Grid>
          <Button
            rightIcon={<FaArrowRight />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            alignSelf="flex-end"
            mt={2}
          >
            View Details
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

const Projects = () => {
  const scrollContainerRef = useRef(null)
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const buttonBg = useColorModeValue('white', 'gray.700')
  const buttonShadow = useColorModeValue('lg', 'dark-lg')

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: 'E-commerce Assistant',
      description:
        'AI-powered shopping assistant that helped increase sales by providing personalized product recommendations and handling customer inquiries 24/7.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800',
      metrics: {
        'Sales Growth': '+45%',
        'Response': '< 1s',
        'Rating': '4.8/5',
        'Users': '50K+',
      },
      path: '/projects/ecommerce-assistant',
    },
    {
      title: 'Healthcare Bot',
      description:
        'Intelligent healthcare assistant that helps patients schedule appointments, answer medical queries, and provide preliminary symptom analysis.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
      metrics: {
        'Bookings': '10K+',
        'Accuracy': '98%',
        'Retention': '87%',
        'Time Saved': '1.5K hrs',
      },
      path: '/projects/healthcare-bot',
    },
    {
      title: 'Financial Advisor Bot',
      description:
        'AI-driven financial advisor that provides personalized investment recommendations and handles basic banking queries.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800',
      metrics: {
        'Users': '25K+',
        'Success': '96%',
        'Savings': '$2M/yr',
        'Rating': '4.7/5',
      },
      path: '/projects/financial-advisor-bot',
    },
  ]

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Featured Projects</Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
            >
              Explore how my AI chatbot solutions have transformed businesses
              across different industries
            </Text>
          </VStack>

          <Box position="relative" w="full">
            <IconButton
              aria-label="Scroll left"
              icon={<FaChevronLeft />}
              position="absolute"
              left={{ base: -4, md: -6 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={() => scroll('left')}
              bg={buttonBg}
              shadow={buttonShadow}
              display={{ base: 'none', md: 'flex' }}
              size="lg"
              rounded="full"
            />
            <Box
              ref={scrollContainerRef}
              overflowX="auto"
              py={4}
              px={{ base: 4, md: 2 }}
              mx={{ base: -4, md: -2 }}
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                scrollbarWidth: 'none',
                '-webkit-overflow-scrolling': 'touch',
              }}
            >
              <HStack 
                spacing={{ base: 4, md: 6 }} 
                minH={{ base: "450px", md: "500px" }}
                px={{ base: 2, md: 0 }}
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </HStack>
            </Box>
            <IconButton
              aria-label="Scroll right"
              icon={<FaChevronRight />}
              position="absolute"
              right={{ base: -4, md: -6 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={() => scroll('right')}
              bg={buttonBg}
              shadow={buttonShadow}
              display={{ base: 'none', md: 'flex' }}
              size="lg"
              rounded="full"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects 