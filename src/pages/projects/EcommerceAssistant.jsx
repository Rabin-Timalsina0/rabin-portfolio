import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  useColorModeValue,
  Button,
  List,
  ListItem,
  ListIcon,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from '@chakra-ui/react'
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MetricStat = ({ label, value }) => {
  const labelColor = useColorModeValue('gray.600', 'gray.400')
  const valueColor = useColorModeValue('blue.600', 'blue.300')

  return (
    <Stat>
      <StatNumber fontSize={{ base: 'xl', md: '2xl' }} color={valueColor} mb={1}>
        {value}
      </StatNumber>
      <StatLabel fontSize={{ base: 'xs', md: 'sm' }} color={labelColor}>
        {label}
      </StatLabel>
    </Stat>
  )
}

const EcommerceAssistant = () => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const boxBg = useColorModeValue('white', 'gray.700')

  const metrics = {
    'Sales Growth': '+45%',
    'Response': '< 1s',
    'Rating': '4.8/5',
    'Users': '50K+',
  }

  const features = [
    'Personalized product recommendations based on user behavior',
    '24/7 automated customer support with human handoff',
    'Multi-language support for global customers',
    'Integration with major e-commerce platforms',
    'Real-time inventory and pricing updates',
    'Order tracking and status notifications',
  ]

  return (
    <Box py={20} bg={bgColor} minH="100vh">
      <Container maxW="4xl">
        <VStack spacing={8} align="stretch">
          <Button
            leftIcon={<FaArrowLeft />}
            variant="ghost"
            alignSelf="flex-start"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            Back to Projects
          </Button>

          <Box
            borderRadius="xl"
            overflow="hidden"
            bg={boxBg}
            shadow="xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
              alt="E-commerce Assistant"
              h={{ base: "200px", md: "300px" }}
              w="100%"
              objectFit="cover"
            />
            
            <Box p={{ base: 6, md: 8 }}>
              <VStack spacing={6} align="stretch">
                <Heading size="xl">E-commerce Assistant</Heading>
                
                <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                  An AI-powered shopping assistant that revolutionizes the online shopping experience
                  by providing personalized recommendations and handling customer inquiries 24/7.
                  This solution has helped numerous e-commerce businesses increase their sales and
                  improve customer satisfaction.
                </Text>

                <Grid 
                  templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                  gap={6}
                  bg={useColorModeValue('blue.50', 'blue.900')}
                  p={6}
                  borderRadius="lg"
                >
                  {Object.entries(metrics).map(([key, value]) => (
                    <MetricStat key={key} label={key} value={value} />
                  ))}
                </Grid>

                <Box>
                  <Heading size="md" mb={4}>Key Features</Heading>
                  <List spacing={3}>
                    {features.map((feature, index) => (
                      <ListItem key={index} display="flex" alignItems="center">
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        <Text>{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Heading size="md" mb={4}>Technical Details</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Built using advanced natural language processing and machine learning
                    algorithms, the assistant continuously learns from interactions to improve
                    its recommendations and responses. The system integrates seamlessly with
                    existing e-commerce platforms and can handle thousands of concurrent users
                    while maintaining sub-second response times.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default EcommerceAssistant 