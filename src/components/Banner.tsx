import { Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface BannerProps {
  description: string,
  image: StaticImageData | string,
  alt: string
}

export function Banner({ description, image, alt }: BannerProps) {
  return (
    <Flex
    h='500px'
    color={"lightText.500"}
    fontSize={48}
    fontWeight={600}
    lineHeight="72px"
    _after={{
      content: `"${description}"`,
      position: "absolute",
      width: "1440px",
      margin: "369px auto 59px 196.5px",
    }} >
    <Image
      src={image}
      alt={`${alt}`}
      style={{
        filter: "brightness(0.6)",
        objectFit: "cover",
      }}
    />
  </Flex>
  )
}