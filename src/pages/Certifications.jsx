import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

const certifications = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera - DeepLearning.AI',
    date: 'December 2023',
    image: '/certifications/deep-learning.png', // Add your certificate image
    link: 'https://www.coursera.org/account/accomplishments/specialization/xxxxx',
    description: 'Comprehensive specialization covering neural networks, deep learning, and AI applications.',
  },
  {
    title: 'Machine Learning Engineer',
    issuer: 'Udacity',
    date: 'November 2023',
    image: '/certifications/machine-learning.png', // Add your certificate image
    link: 'https://graduation.udacity.com/xxxxx',
    description: 'Advanced machine learning concepts, deployment, and real-world applications.',
  },
  {
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: 'October 2023',
    image: '/certifications/aws-ml.png', // Add your certificate image
    link: 'https://www.credly.com/badges/xxxxx',
    description: 'Expertise in building and deploying ML solutions on AWS cloud platform.',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'September 2023',
    image: '/certifications/tensorflow.png', // Add your certificate image
    link: 'https://www.tensorflow.org/certificate/xxxxx',
    description: 'Professional certification in building ML models using TensorFlow.',
  },
]

const CertificationCard = ({ title, issuer, date, image, link, description }) => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="lg"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <Link href={link} isExternal w="full">
          <Image
            src={image}
            alt={title}
            w="full"
            h="200px"
            objectFit="contain"
            borderRadius="lg"
            fallbackSrc="https://via.placeholder.com/400x200?text=Certificate+Image"
          />
        </Link>
        <VStack align="start" spacing={2}>
          <Heading size="md">{title}</Heading>
          <Text color="blue.500" fontWeight="medium">
            {issuer}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {date}
          </Text>
          <Text>{description}</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

const Certifications = () => {
  return (
    <Box py={{ base: 10, md: 20 }} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="7xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              mb={4}
            >
              Certifications & Achievements
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="2xl"
              mx="auto"
            >
              Professional certifications and achievements in AI, Machine Learning, and Software Development.
            </Text>
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8}
          >
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Certifications 