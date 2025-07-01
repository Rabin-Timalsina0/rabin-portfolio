import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

const ContactInfo = ({ icon, title, content }) => {
  return (
    <VStack
      spacing={4}
      p={6}
      bg={useColorModeValue('white', 'gray.700')}
      rounded="lg"
      shadow="md"
      align="start"
    >
      <Icon as={icon} w={6} h={6} color="blue.500" />
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold">{title}</Text>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          {content}
        </Text>
      </VStack>
    </VStack>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Box py={20}>
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Get in Touch</Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
            >
              Ready to transform your business with AI? Let's discuss how we can
              help you achieve your goals.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={10}
            w="100%"
          >
            <ContactInfo
              icon={FaEnvelope}
              title="Email"
              content="rabin.timalsina@gmail.com"
            />
            <ContactInfo
              icon={FaPhone}
              title="Phone"
              content="+977 9841234567"
            />
            <ContactInfo
              icon={FaMapMarkerAlt}
              title="Location"
              content="Kathmandu, Nepal"
            />
          </SimpleGrid>

          <Box
            w="100%"
            maxW="3xl"
            mx="auto"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            shadow="md"
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </FormControl>
                </SimpleGrid>
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements"
                    minH="200px"
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w={{ base: '100%', md: 'auto' }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 