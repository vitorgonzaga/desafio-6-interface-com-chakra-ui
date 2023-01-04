import { Avatar, Box, Card, CardBody, CardHeader, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { CityProps } from "../pages/continents/[slug]";

export function CityCard({
  id,
  imageUrl,
  cityName,
  countryName,
  flagImageUrl
}: CityProps) {
  return (
    <Card
    key={id}
    w="256px"
    h="279px"
    border="1px solid rgba(255, 186, 8, 0.5)"
    borderRadius="4px"
  >
    <CardHeader w="254px" padding={0}>
      <Image
        src={imageUrl}
        alt={cityName}
        w="256px"
        h="173px"
        align={"center"}
        fit={"cover"}
        borderRadius="4px 4px 0px 0px"
      />
    </CardHeader>
    <CardBody>
      <Stack
        direction="row"
        justify={"space-between"}
        align="center"
      >
        <Box>
          <Heading
            fontStyle="normal"
            fontWeight={600}
            fontSize="20px"
            lineHeight="25px"
            color="darkText.500"
          >
            {cityName}
          </Heading>
          <Text
            fontStyle="normal"
            fontWeight={500}
            fontSize="16px"
            lineHeight="26px"
            color="infoText.500"
            mt="12px"
          >
            {countryName}
          </Text>
        </Box>
        <Avatar
          boxSize="30px"
          name={`${countryName} Flag`}
          src={flagImageUrl}
        />
      </Stack>
    </CardBody>
  </Card>
  )
}