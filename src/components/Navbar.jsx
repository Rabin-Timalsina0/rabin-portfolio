import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // height of navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    onClose();
  };

  const NavLink = ({ children, to }) => (
    <Link
      onClick={() => scrollToSection(to)}
      fontWeight="medium"
      cursor="pointer"
      _hover={{ color: "blue.500" }}
    >
      {children}
    </Link>
  );

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      boxShadow="sm"
      zIndex="1000"
      py={2}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
        px={6}
      >
        <Flex
          onClick={() => scrollToSection("home")}
          cursor="pointer"
          align="center"
          gap={3}
        >
          <Text
            bgGradient="linear(to-r, blue.500, blue.800)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
          >
            Rabin Tims
          </Text>
        </Flex>

        {/* Desktop Navigation */}
        <Flex
          alignItems="center"
          gap={8}
          display={{ base: "none", md: "flex" }}
        >
          <NavLink to="home">Home</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="certifications">Certifications</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
          <Button
            onClick={() => scrollToSection("contact")}
            colorScheme="blue"
            size="sm"
          >
            Contact Me
          </Button>
        </Flex>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant="ghost"
          aria-label="Open menu"
          size="lg"
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={8} pt={16} align="stretch">
                <NavLink to="home">Home</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="certifications">Certifications</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
                <Button
                  onClick={() => scrollToSection("contact")}
                  colorScheme="blue"
                  w="full"
                >
                  Contact Me
                </Button>
                <SocialLinks variant="drawer" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
