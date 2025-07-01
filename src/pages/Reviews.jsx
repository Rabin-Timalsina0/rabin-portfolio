import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Avatar,
  useColorModeValue,
  Icon,
  IconButton,
  Flex,
} from '@chakra-ui/react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    testimonial: "Rabin developed an exceptional chatbot for our customer service. The AI solution reduced our response time by 60% and significantly improved customer satisfaction.",
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, AI Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    testimonial: 'Working with Rabin was a game-changer for our AI implementation. His expertise in chatbots and machine learning helped us create a solution that our users love.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Innovation Labs',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    testimonial: 'The custom AI solution Rabin built for us revolutionized our business processes. His deep understanding of AI and attention to detail made the project a huge success.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Digital, Global Retail',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    testimonial: "Rabin's expertise in AI chatbots helped us create a personalized shopping assistant that increased our online sales by 40%. His work exceeded our expectations.",
  },
]

const TestimonialCard = ({ name, role, image, testimonial }) => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const quoteBg = useColorModeValue('blue.50', 'gray.600')
  const quoteColor = useColorModeValue('blue.500', 'blue.200')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="lg"
      minW={{ base: "300px", md: "400px" }}
      maxW={{ base: "300px", md: "400px" }}
      h="full"
      position="relative"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      transition="all 0.3s"
    >
      <Box
        position="absolute"
        top={4}
        right={4}
        bg={quoteBg}
        p={2}
        borderRadius="full"
      >
        <Icon as={FaQuoteLeft} w={4} h={4} color={quoteColor} />
      </Box>
      <VStack align="start" spacing={4} h="full">
        <Text fontSize="md" pt={6} flex="1">
          "{testimonial}"
        </Text>
        <HStack spacing={4} mt="auto">
          <Avatar
            size="md"
            name={name}
            src={image}
          />
          <Box>
            <Text fontWeight="bold" fontSize="md">
              {name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {role}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}

const Reviews = () => {
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

  return (
    <Box py={{ base: 10, md: 20 }} bg={bgColor}>
      <Container maxW="7xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              mb={4}
            >
              Client Reviews
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="2xl"
              mx="auto"
            >
              Hear what my clients have to say about their experience working with me
              on AI and chatbot solutions.
            </Text>
          </Box>
          <Box position="relative">
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
            />
            <Box
              ref={scrollContainerRef}
              overflowX="auto"
              py={4}
              px={2}
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                scrollbarWidth: 'none',
              }}
            >
              <HStack spacing={6} minH="400px">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
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
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Reviews 