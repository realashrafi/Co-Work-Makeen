'use client'
import React, {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParallaxElement from "@/app/components/ParallaxElement";


const SectionSeven = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            delay: 1000,
            once: false,
        })
    }, []);
    return (
        <section
            className={'relative  bg-gradient-to-t from-[#000B19] via-[#002250] to-[#002256] text-white text-center pb-1 lg:pb-[133px] lg:h-[731px]'}>
            <div data-aos={'fade-up'}
                 className="w-[170px] absolute z-10  right-0 -top-40 h-[219px] opacity-60 bg-[#FF792C] rounded-l-full blur-[140px]"/>
            <div data-aos={'fade-up'}
                 className="w-[170px] absolute z-10 left-0 -top-32 h-[219px] opacity-60 bg-[#FF792C] rounded-r-full blur-[140px]"/>
            <div data-aos={''} data-aos-delay={10} className={'flex relative flex-col  pt-[130px]'}>
                <h1 className={'text-orange-500 absolute  inset-2 text-[22px] font-bold'}>نظرات بچه های کوورک</h1>
                <ParallaxElement />
            </div>
        </section>
    );
};

export default SectionSeven;