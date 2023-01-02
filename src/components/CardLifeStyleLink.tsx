import { Flex, Icon, Text } from "@chakra-ui/react";

interface CardLifeStyleProps {
  description: string;
  iconComponent: React.ElementType;
}

export function CardLifeStyleLink({ description, iconComponent }: CardLifeStyleProps) {
  return (
    <Flex direction='column' align='center' justify='center'>
    <Icon as={iconComponent} fontSize={85} color='yellow.500'/>
    <Text mt='24px' color={"darkText.500"} fontSize={24} fontWeight={600}>{description}</Text>
  </Flex>
  )
}