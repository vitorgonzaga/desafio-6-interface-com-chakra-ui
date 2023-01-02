import { Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SlideProps {
  image: StaticImageData | string,
  description: string,
  slug: string
}

export function Slide({ image, description, slug }: SlideProps) {
  return (
    <Flex
      width={1240}
      height={450}
      align='center'
      justify='center'
      _before={{
        content: `"${ description }"`,
        position: 'absolute',
        color: 'lightText.500',
        fontWeight: '700',
        fontSize: '48',
        align: 'center',
        zIndex: '9999'
      }}
      >
      <Link href={`/continents/${slug}`} >
        <Image
          fill
          src={image}
          alt={description}
          style={{
            filter: "brightness(0.6)",
            objectFit: "cover"
          }}
        />
      </Link>
    </Flex>
  )
}