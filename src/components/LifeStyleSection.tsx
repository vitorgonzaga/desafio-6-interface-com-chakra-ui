import { Flex } from "@chakra-ui/react";
import { BiDrink, BiWorld } from "react-icons/bi";
import { GiSurfBoard } from "react-icons/gi";
import { HiOutlineBuildingLibrary, HiOutlineBuildingOffice } from "react-icons/hi2";
import { CardLifeStyleLink } from "./CardLifeStyleLink";

export function LifeStyleSection() {
  return (
    <Flex w='100%' h={360}>
      <Flex as='section' w='100%' maxW='1160px' mx='auto' justifyContent={'space-between'}>
        <CardLifeStyleLink description='vida noturna' iconComponent={BiDrink} />
        <CardLifeStyleLink description='praia' iconComponent={GiSurfBoard} />
        <CardLifeStyleLink description='moderno' iconComponent={HiOutlineBuildingOffice} />
        <CardLifeStyleLink description='clássico' iconComponent={HiOutlineBuildingLibrary} />
        <CardLifeStyleLink description='e mais...' iconComponent={BiWorld} />
      </Flex>
    </Flex>
  )
}