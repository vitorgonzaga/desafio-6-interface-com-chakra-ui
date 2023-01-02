import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
    bgImage="BackgroundBanner.svg"
    bgPosition='center'
    bgRepeat='no-repeat'
    bgSize={'100%'}
    w="100%"
    h={335}
  >
    <Flex justify={"center"}>
      <Box mt={"80px"} w={524}>
        <Text fontSize="36" fontWeight="500" color="lightText.500">
          5 continentes, infinitas possibilidades.
        </Text>
        <Text mt={"20px"} fontSize="20" fontWeight="500" color="lightText.500">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box mt={76} ml={205.25}>
        <Image src="Airplane.svg" alt="airplane" />
      </Box>
    </Flex>
  </Box>
  )
}