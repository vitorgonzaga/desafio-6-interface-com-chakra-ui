import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

interface MiddleContentProps {
  mainText: string;
  countries: string;
  languages: string;
  cities: string;
}

export function MiddleContent({ mainText, countries, languages, cities }: MiddleContentProps) {
  return (
    <SimpleGrid
      mt={"80px"}
      mb={"80px"}
      w="1440px"
      mx={"auto"}
      columns={2}
      minChildWidth="600px"
      spacingX="70px"
      justifyItems={"flex-start"}
    >
      <Flex w={"600px"} h="211px">
        <Text
          fontWeight={400}
          fontSize="24px"
          lineHeight={"36px"}
          textAlign="justify"
          color={"darlText.500"}
          marginBlockStart="0"
          marginBlockEnd="0"
        >
          { mainText }
        </Text>
      </Flex>
      <Flex w={"600px"} align={"center"} justify={"space-around"}>
        <Box h={"99px"}>
          <Text
            fontWeight={600}
            fontSize="48px"
            lineHeight={"72px"}
            textAlign="center"
            color={"yellow.500"}
          >
            { countries }
          </Text>
          <Text
            fontWeight={600}
            fontSize="24px"
            lineHeight={"36px"}
            textAlign="center"
            color={"darkText.500"}
          >
            países
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={600}
            fontSize="48px"
            lineHeight={"72px"}
            textAlign="center"
            color={"yellow.500"}
          >
            { languages }
          </Text>
          <Text
            fontWeight={600}
            fontSize="24px"
            lineHeight={"36px"}
            textAlign="center"
            color={"darkText.500"}
          >
            linguas
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={600}
            fontSize="48px"
            lineHeight={"72px"}
            textAlign="center"
            color={"yellow.500"}
          >
            { cities }
          </Text>
          <Text
            fontWeight={600}
            fontSize="24px"
            lineHeight={"36px"}
            textAlign="center"
            color={"darkText.500"}
          >
            cidades +100
          </Text>
        </Box>
      </Flex>
    </SimpleGrid>
  )
}