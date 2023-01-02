import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import logo from "../../../public/logo.svg";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { MiddleContent } from "../../components/MiddleContent";
import Europe from "../../images/details/europe.jpg";

export interface CityProps {
  id: number,
  imageUrl: string,
  cityName: string,
  countryName: string,
  flagImageUrl: string,
}

interface ContinentProps {
  name: string,
  text: string
  countries: string,
  languages: string,
  numberOfCities: string,
  cities: CityProps[]
}

export default function Continent({ name, text, countries, languages, numberOfCities, cities }: ContinentProps) {
  return (
    <>
      <Header logo={logo} />
      <Banner
        description={name}
        image={Europe}
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
        <Flex mt="40px">
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
  console.log('params', params)

  // const result = fetch(`https://localhost:3001/continents/${params?.slug}`)
  //   .then(res => res.json())

  // console.log('result', result)

  return {
    props: {
      id: 1,
      name: "Europa",
      text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
      countries: "50",
      languages: "60",
      numberOfCities: "27",
      cities: [
        {
          id: 1,
          imageUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          cityName: "Londres",
          countryName: "Reino Unido",
          flagImageUrl: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"
        }
      ]
    },
    revalidate: 60
  }
}
