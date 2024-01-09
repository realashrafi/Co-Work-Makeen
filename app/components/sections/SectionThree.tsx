'use client'
import '@splidejs/react-splide/css';
// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Image from "next/image";
import img3 from '../data/splide3.png'
import img2 from '../data/splide2.png'
import img4 from '../data/splide4.png'

const SectionThree = () => {
    const options = {
        type: 'loop',
        gap: '0',
        arrows:false,
        pagination:false,
        prePage: 4,
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '219',
    };
    return (
        <section className={'bg-[#002256]'}>
            <div className={'lg:pt-[121px] pt-1'}>
                <h2 className={'text-[22px] text-center  text-[#FFFEFF]'}>گالری تصاویر</h2>
                <div className={'lg:w-[84%] w-[95%] h-[219px] mt-[52px] mx-auto flex justify-center '}>
                    <Splide options={options} aria-label="My Favorite Images">
                        <SplideSlide>
                            <Image src={img3} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={img2} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={img3} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={img4} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={img3} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={img4} className={'mx-[12px]'} alt={''}/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default SectionThree;