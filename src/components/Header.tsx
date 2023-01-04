import { Box, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  logo: StaticImageData | string
}

export function Header({ logo }: HeaderProps) {
  return (
    <Flex
      as="header"
      h={["50", "100px"]}
      mx="auto"
      align="center"
      justify="center"
    >
      <Box w={["81px", "184.06px"]} h={["20px", "45.92px"]}>
        <Image
          src={logo}
          alt="logo"
        />
      </Box>
    </Flex>
  );
}
