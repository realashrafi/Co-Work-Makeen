'use client'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect, useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/data/swiperStyle.css'
// import required modules
import {Autoplay, Parallax, Pagination, Navigation} from 'swiper/modules';
import img1 from '../components/data/imageSliderParallax1.png'
import img3 from '../components/data/parallaxImage3.png'
import img2 from '../components/data/parallaxImage2.png'
import img4 from '../components/data/parallaxImage4.png'
import bgParallax from '../components/data/parallaxImage.jpeg'
import Image from "next/image";

const data = [
    {
        id: 1,
        image: img1,
        name: 'امیر اکبری',
        title: 'برنامه نویس',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت '
    }, {
        id: 2,
        image: img2,
        name: 'علیرضا راد',
        title: 'طراح',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت '
    }, {
        id: 3,
        image: img3,
        name: 'زینب رحیمی',
        title: 'توسعه دهنده',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت '
    }, {
        id: 4,
        image: img4,
        name: 'جواد مقدم',
        title: 'توسعه دهنده',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت '
    }, {
        id: 5,
        image: img1,
        name: 'محمد محمدی',
        title: 'طراح',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت '
    },

]

function ParallaxElement() {
    useEffect(() => {
        AOS.init({
            duration: 300,
            delay: 0,
            once: false,
        })
    }, []);
    return (
        <>
            <Swiper
                style={{
                    // @ts-ignore
                    '--swiper-navigation-color': '#FF792C',
                    '--swiper-pagination-color': '#FF792C',
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay,Parallax, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        //https://abrehamrahi.ir/o/public/DM3fznCa/
                        // @ts-ignore
                        'background-image':
                            `url('/parallaxImage.jpg')`,
                    }}
                    data-swiper-parallax="-23%"
                >
                    <div
                        className={'w-[100%]  h-[400px] bg-gradient-to-t from-[#000B1999] via-transparent to-[#002250] backdrop-brightness-[25%]'}></div>
                </div>
                {data.map(item => (
                    <SwiperSlide key={item.id} className={'flex items-center  '}>
                        <div className={'flex lg:px-[15%] items-center mt-[30%] lg:mt-[5%]'}>
                            <div className={'flex relative flex-col items-center -mt-[20px]'}>
                                <svg className={'absolute animate-[spin_11s_ease-out_infinite] z-1 lg:w-[244px] lg:visible invisible'} height="172"
                                     viewBox="0 0 244 172" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 536">
                                        <rect id="Rectangle 694" x="36.5" y="2.5" width="206" height="164" rx="22.5"
                                              stroke="url(#paint0_linear_2737_91)" strokeWidth="3"/>
                                        <rect id="Rectangle 695" x="210.866" y="165.496" width="206" height="164"
                                              rx="22.5"
                                              transform="rotate(178.82 210.866 165.496)"
                                              stroke="url(#paint1_linear_2737_91)" strokeWidth="3"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_2737_91" x1="35" y1="1" x2="102.5" y2="77.5"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop offset="0.002384" stopColor="#FF792C"/>
                                            <stop offset="1" stopColor="#FF792C" stopOpacity="0"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2737_91" x1="212.396" y1="166.964"
                                                        x2="279.896"
                                                        y2="243.464" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.002384" stopColor="#44C0ED"/>
                                            <stop offset="1" stopColor="#44C0ED" stopOpacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <Image src={item.image} alt={''} className={'z-10 -mt-[6px]'}/>
                                <p className={'text-1sky-400 text-base font-bold leading-7 mt-[12px]'}>{item.name}</p>
                                <p className={'text-orange-500 text-xs font-light leading-normal mt-[4px]'}>{item.title}</p>
                            </div>
                            <div className={'w-[50%] mx-auto pt-[20px] ml-[35%]'} dir={'rtl'}>
                                <p className={'text-right line-clamp-3 text-white text-sm font-normal'}>{item.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ParallaxElement