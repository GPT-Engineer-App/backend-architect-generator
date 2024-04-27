import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaCode, FaConnectdevelop, FaMagic } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Simplify Backend Development
          </Heading>
          <Text fontSize="xl">A web-based platform designed for front-end developers to easily create and manage backend processes.</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack bg={bg} p={10} borderRadius="md" boxShadow="md">
            <FaCode size="3em" />
            <Heading as="h3" size="lg">
              API Editor
            </Heading>
            <Text>Choose from a set of 30 predefined APIs or use our AI-powered editor to generate custom APIs tailored to your needs.</Text>
            <Button colorScheme="blue" mt={4}>
              Explore API Editor
            </Button>
          </VStack>

          <VStack bg={bg} p={10} borderRadius="md" boxShadow="md">
            <FaConnectdevelop size="3em" />
            <Heading as="h3" size="lg">
              Architecture Editor
            </Heading>
            <Text>Define your application's architecture and let our platform generate a comprehensive design automatically.</Text>
            <Button colorScheme="blue" mt={4}>
              Explore Architecture Editor
            </Button>
          </VStack>
        </SimpleGrid>

        <Box textAlign="center">
          <FaMagic size="3em" color={color} />
          <Heading as="h2" size="xl" mt={4}>
            Streamline Your Development
          </Heading>
          <Text fontSize="lg" mt={4}>
            Our platform bridges the gap between front-end and back-end development, making it easier than ever to build robust applications.
          </Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRvb2xzfGVufDB8fHx8MTcxNDIxNjQzN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </VStack>
    </Container>
  );
};

export default Index;
