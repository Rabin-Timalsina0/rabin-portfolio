import {
  Stack,
  IconButton,
  Link,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaGithub,
    url: 'https://github.com/rabintimalsina',
    label: 'GitHub',
    hoverColor: '#333'
  },
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/rabintimalsina',
    label: 'LinkedIn',
    hoverColor: '#0077b5'
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com/rabintimalsina',
    label: 'Instagram',
    hoverColor: '#e4405f'
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com/rabintimalsina',
    label: 'Twitter',
    hoverColor: '#1da1f2'
  },
]

const SocialLinks = ({ variant = 'default' }) => {
  const iconColor = useColorModeValue('gray.600', 'gray.300')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const styles = {
    drawer: {
      direction: 'row',
      spacing: 4,
      justify: 'center',
      w: 'full',
      pt: 4,
      pb: 8,
    },
    footer: {
      direction: 'row',
      spacing: 6,
      justify: 'center',
      w: 'full',
      py: 6,
      borderTop: '1px solid',
      borderColor: borderColor,
      bg: bgColor,
      display: { base: 'flex', md: 'none' },
    }
  }

  if (variant === 'default') {
    return (
      <Box
        position="fixed"
        left="6"
        bottom="8"
        zIndex={999}
        display={{ base: 'none', md: 'block' }}
      >
        <Stack
          direction="column"
          spacing={3}
          p={3}
          bg={bgColor}
          borderRadius="2xl"
          boxShadow="lg"
          border="1px solid"
          borderColor={borderColor}
          backdropFilter="blur(10px)"
          _hover={{ boxShadow: 'xl' }}
          transition="all 0.3s"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.url}
              isExternal
              display="inline-flex"
              _hover={{ textDecoration: 'none' }}
            >
              <IconButton
                aria-label={social.label}
                icon={<social.icon />}
                variant="ghost"
                color={iconColor}
                size="md"
                borderRadius="full"
                transition="all 0.3s"
                _hover={{
                  color: social.hoverColor,
                  bg: hoverBg,
                  transform: 'scale(1.1)',
                }}
              />
            </Link>
          ))}
        </Stack>
      </Box>
    )
  }

  return (
    <Stack {...styles[variant]}>
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.url}
          isExternal
          display="inline-flex"
          _hover={{ textDecoration: 'none' }}
        >
          <IconButton
            aria-label={social.label}
            icon={<social.icon />}
            variant="ghost"
            color={iconColor}
            size={variant === 'drawer' ? 'lg' : 'md'}
            borderRadius="full"
            transition="all 0.3s"
            _hover={{
              color: social.hoverColor,
              bg: hoverBg,
              transform: 'scale(1.1)',
            }}
          />
        </Link>
      ))}
    </Stack>
  )
}

export default SocialLinks 