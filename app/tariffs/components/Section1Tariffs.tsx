'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import imgLeft from './data/imgLeft.png'
import DesignCircle from './data/Design element - Circles (2).png'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";

const Section1Tariffs = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    return (
        <section className={'flex w-full bg-[#002256] justify-center flex-col'}>
            <div className={' '}>
                <Navbar/>
            </div>
            <div className={'flex w-full'}>
                <div data-aos="fade-right" className={'w-1/2  pt-[65px] pl-[110px] flex relative'}>
                    <Image width={377} height={503} className={'rounded-[18px] z-20'} src={imgLeft} alt={''}/>
                    <div className={'relative left-[-20px] pt-[407px]'}>
                        <Image src={DesignCircle} className={'  '} width={212} height={96} alt={''}/>
                    </div>
                </div>
                <div data-aos="fade-left" className={'w-1/2 '}>
                    <div className={'w-[550px] '}>
                        <h2 className={'text-[22px]  text-[#FF792C] pt-[173px]'} style={{direction: "rtl"}}>صندلی
                            کوورک </h2>
                        <p className={'w-[550px] text-[16px] text-[#DCDCDC] pt-8 mx-auto '}
                           style={{direction: "rtl"}}>فعالیت در محیط کاری با حضور افراد
                            مستعد و متخصص با نگرش های متفاوت ، فرصت کم نظیری است تا با اشتراک
                            دانش و تجربه ، فضایی پویا و هم افزا به وجود آید. امکانی است که با حضور در فضای کار اشتراکی
                            مکین برای
                            شما فراهم می‌شود.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1Tariffs;