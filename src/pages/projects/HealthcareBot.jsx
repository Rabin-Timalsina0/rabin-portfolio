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

const HealthcareBot = () => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const boxBg = useColorModeValue('white', 'gray.700')

  const metrics = {
    'Bookings': '10K+',
    'Accuracy': '98%',
    'Retention': '87%',
    'Time Saved': '1.5K hrs',
  }

  const features = [
    'Intelligent appointment scheduling and management',
    'Preliminary symptom analysis and triage',
    'Medical query handling with high accuracy',
    'Integration with healthcare systems',
    'HIPAA-compliant data handling',
    'Multilingual patient support',
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
              alt="Healthcare Bot"
              h={{ base: "200px", md: "300px" }}
              w="100%"
              objectFit="cover"
            />
            
            <Box p={{ base: 6, md: 8 }}>
              <VStack spacing={6} align="stretch">
                <Heading size="xl">Healthcare Bot</Heading>
                
                <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                  An intelligent healthcare assistant that streamlines patient care by automating
                  appointment scheduling, providing preliminary symptom analysis, and answering
                  medical queries. This solution has significantly improved healthcare accessibility
                  and reduced administrative workload.
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
                    Developed using state-of-the-art natural language understanding and medical
                    knowledge integration, the bot provides accurate and reliable healthcare
                    assistance. The system maintains strict HIPAA compliance while processing
                    thousands of patient interactions daily, featuring advanced encryption and
                    secure data handling protocols.
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

export default HealthcareBot 