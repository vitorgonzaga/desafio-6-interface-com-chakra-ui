import { Flex } from "@chakra-ui/react";
import { BiDrink, BiWorld } from "react-icons/bi";
import { GiSurfBoard } from "react-icons/gi";
import { HiOutlineBuildingLibrary, HiOutlineBuildingOffice } from "react-icons/hi2";
import { CardLifeStyleLink } from "./CardLifeStyleLink";

export function LifeStyleSection() {
  return (
    <Flex w='100%' h={[192, 360]} align='center'>
      <Flex
        as='section'
        w={['275px', '100%']}
        h={['120px', '100%']}
        maxW='1160px'
        mx='auto'
        align={['center', '']}
        justifyContent={['center',
        'space-between']}
        wrap="wrap"
      >
        <CardLifeStyleLink description='vida noturna' iconComponent={BiDrink} />
        <CardLifeStyleLink ml={["auto", "0"]} description='praia' iconComponent={GiSurfBoard} />
        <CardLifeStyleLink description='moderno' iconComponent={HiOutlineBuildingOffice} />
        <CardLifeStyleLink ml={["auto", "0"]} description='clássico' iconComponent={HiOutlineBuildingLibrary} />
        <CardLifeStyleLink description='e mais...' iconComponent={BiWorld} />
      </Flex>
    </Flex>
  )
}