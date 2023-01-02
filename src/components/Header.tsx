import { Box, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
// import logo from '../../public/logo.svg';

interface HeaderProps {
  logo: StaticImageData | string
}

export function Header({ logo }: HeaderProps) {
  return (
    <Flex
      as="header"
      h="100px"
      mx="auto"
      align="center"
      justify="center"
    >
      <Box w="184.06px" h="45.92px">
        <Image src={logo} alt="logo" />
      </Box>
    </Flex>
  );
}
