import { Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./Slide.module.scss";

interface SlideProps {
  image: StaticImageData | string,
  description: string,
  slug: string
}

export function Slide({ image, description, slug }: SlideProps) {
  return (
    <Flex
      width={[375, 1240]}
      height={[250, 450]}
      align='center'
      justify='center'
      _before={{
        content: `"${ description }"`,
        position: 'absolute',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // top:[115 , 202],
        // right:[140, 545],
        color: 'lightText.500',
        fontWeight: '700',
        fontSize: ['32','48'],
        zIndex: '9999'
      }}
      >
      <Link href={`/continents/${slug}`} >
        <Image
          className={styles.slideImage}
          // fill
          src={image}
          alt={description}
          // style={{
          //   filter: "brightness(0.6)",
          //   objectFit: "cover"
          // }}
          // sizes="(min-width: 800px) 375px,
          //       (min-width: 1200px) 1240px,
          //       375px"
        />
      </Link>
    </Flex>
  )
}