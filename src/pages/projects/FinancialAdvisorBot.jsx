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

const FinancialAdvisorBot = () => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const boxBg = useColorModeValue('white', 'gray.700')

  const metrics = {
    'Users': '25K+',
    'Success': '96%',
    'Savings': '$2M/yr',
    'Rating': '4.7/5',
  }

  const features = [
    'Personalized investment recommendations',
    'Real-time market analysis and insights',
    'Automated portfolio rebalancing suggestions',
    'Risk assessment and management',
    'Banking query resolution',
    'Financial goal tracking and planning',
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
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800"
              alt="Financial Advisor Bot"
              h={{ base: "200px", md: "300px" }}
              w="100%"
              objectFit="cover"
            />
            
            <Box p={{ base: 6, md: 8 }}>
              <VStack spacing={6} align="stretch">
                <Heading size="xl">Financial Advisor Bot</Heading>
                
                <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                  An AI-driven financial advisor that provides personalized investment recommendations
                  and handles banking queries. This solution has helped thousands of users make
                  informed financial decisions and achieve their financial goals through intelligent
                  automation and data-driven insights.
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
                    Built with advanced financial modeling and machine learning algorithms,
                    the bot analyzes market trends, user preferences, and risk profiles to
                    provide tailored financial advice. The system features bank-grade security,
                    real-time data processing, and seamless integration with various financial
                    institutions.
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

export default FinancialAdvisorBot 