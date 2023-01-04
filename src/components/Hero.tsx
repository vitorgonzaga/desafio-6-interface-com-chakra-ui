import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
    bgImage="BackgroundBanner.svg"
    bgPosition='center'
    bgRepeat='no-repeat'
    bgSize={["", "100%"]}
    w="100%"
    h={[163, 335]}
  >
    <Flex
      align={["center", ""]}
      justify={"center"}
      p={0}
      h={[163, 335]}
    >
      <Box mt={["0", "80px"]} w={524} paddingLeft={["16px", ""]}>
        <Text
          fontSize={["20", "36"]}
          fontWeight="500"
          color="lightText.500"
        >
          5 continentes, infinitas possibilidades.
        </Text>
        <Text
          mt={["8px", "20px"]}
          fontSize={["14", "20"]}
          fontWeight="500"
          color="lightText.500"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box display={["none", "block"]} mt={76} ml={205.25}>
        <Image
          display={["none", "block"]}
          src="Airplane.svg"
          alt="airplane"
        />
      </Box>
    </Flex>
  </Box>
  )
}