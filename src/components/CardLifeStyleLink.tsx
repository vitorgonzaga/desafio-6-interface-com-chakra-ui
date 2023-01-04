import { Flex, FlexProps, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { RxDotFilled } from "react-icons/rx";

interface CardLifeStyleProps extends FlexProps{
  description: string;
  iconComponent: React.ElementType;
}

export function CardLifeStyleLink({ description, iconComponent, ...rest }: CardLifeStyleProps) {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Flex
      direction={['row', 'column']}
      align='center'
      justify='center'
      height={["fit-content", "100%"]}
      {...rest}
    >
      <Icon
        as={isLargerThan800 ? iconComponent : RxDotFilled}
        fontSize={[32, 85]}
        color='yellow.500'
      />
      <Text
        mt={['0', '24px']}
        color={"darkText.500"}
        fontSize={[18,
        24]}
        fontWeight={600}
      >
          {description}
      </Text>
    </Flex>
  )
}