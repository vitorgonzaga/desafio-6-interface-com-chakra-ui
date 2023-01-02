import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import logo from "../../public/logo.svg";
import { Carousel } from "../components/Carousel/Carousel";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LifeStyleSection } from "../components/LifeStyleSection";

export default function Home() {
  return (
    <>
      <Header logo={logo}/>
      <Hero />
      <LifeStyleSection />
      <Center>
        <Divider
          bg='darkText.500'
          h='2px'
          w='90px'
          orientation="horizontal"
          size='90px'
          variant={"solid"}
        />
      </Center>
      <Flex h={205} >
        <Box h={101} mx='auto' my='auto'>
          <Text fontWeight={500} fontSize={36} align='center'>Vamos nessa?</Text>
          <Text fontWeight={500} fontSize={36} align='center'>Então escolha seu continente</Text>
        </Box>
      </Flex>
      <Carousel />
    </>
  );
}
