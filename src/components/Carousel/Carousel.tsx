import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Africa from '../../images/Africa.jpg';
import Asia from '../../images/Asia.jpg';
import Europe from '../../images/europe.jpg';
import NorthAmerica from '../../images/NorthAmerica.jpg';
import Oceania from '../../images/Oceania.jpg';
import SouthAmerica from '../../images/SouthAmerica.jpg';


import { Slide } from '../Slide/Slide';

import 'swiper/scss';
import { useRef } from 'react';
import 'swiper/scss/pagination';
import styles from './Carousel.module.scss';



export function Carousel() {

  const swiperNavPrevRef = useRef<HTMLDivElement>(null)
  const swiperNavNextRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.container} >
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={{
          prevEl: swiperNavPrevRef?.current,
          nextEl: swiperNavNextRef?.current
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        centeredSlides
        keyboard
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        loop
        className={styles.mySwiper}
        onInit={(swiper) => {
          console.log('swiper initialized!')
          // @ts-ignore
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>
          <Slide description='Africa' image={Africa} slug='africa' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide description='Asia' image={Asia} slug='asia'/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide description='Europe' image={Europe} slug='europa'/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide description='North America' image={NorthAmerica} slug='northamerica'/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide description='South America' image={SouthAmerica} slug='southamerica' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide description='Oceania' image={Oceania} slug='oceania'/>
        </SwiperSlide>
        <div className={styles.swiperButtonPrev} ref={swiperNavPrevRef}></div>
        <div className={styles.swiperButtonNext} ref={swiperNavNextRef}></div>
      </Swiper>
    </div>
  )
}