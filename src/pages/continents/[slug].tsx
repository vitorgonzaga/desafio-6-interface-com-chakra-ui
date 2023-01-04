import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import logo from "../../../public/logo.svg";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { MiddleContent } from "../../components/MiddleContent";

export interface CityProps {
  id: number,
  imageUrl: string,
  cityName: string,
  countryName: string,
  flagImageUrl: string,
}

interface ContinentProps {
  mainImageUrl: string,
  name: string,
  text: string
  countries: string,
  languages: string,
  numberOfCities: string,
  cities: CityProps[]
}

export default function Continent({
  mainImageUrl,
  name,
  text,
  countries,
  languages,
  numberOfCities,
  cities
}: ContinentProps) {
  console.log('countries', countries)
  console.log('cities', cities)
  return (
    <>
      <Header logo={logo} />
      <Banner
        description={name}
        image={mainImageUrl}
        alt={name}
      />
      <MiddleContent
        mainText={text}
        countries={countries}
        cities={numberOfCities}
        languages={languages}
      />

      <Heading w="1440px" mx="auto" >Cidades +100</Heading>
      <Flex w="1440px" mx="auto" wrap="wrap" mb="35px">
        <Flex
          mt="40px"
          w="1440px"
          h="100vh"
          gap={8}
          wrap="wrap"
        >
          {
            cities.map(city => <CityCard key={city.id} {...city} />)
          }
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params?.slug)

  const result = await fetch(`http://localhost:3001/continents/${params?.slug}`)
    .then(res => res.json())
    .then(data => data)

  return {
    props: result,
    revalidate: 60
  }
}
