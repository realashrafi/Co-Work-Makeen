import React from 'react';
import FlatGroupsS2 from "@/app/components/FlatGroupsS2";
import Image from "next/image";
import videoPre from '@/public/Rectangle 275.png'
import DesignElemntWithDot from "@/app/components/DesignElemntWithDot";
import gifIcon from '../data/movedIcon.gif'
const SectionTwo = () => {
    return (
        <section className={'bg-[#002256]'}>
            <div className={'flex justify-center relative flex-col'}>
                <h2 className={'text-[22px] text-center text-[#FF792C] pt-10'}>فضای کار اشتراکی </h2>
                <p className={'lg:w-[557px]  text-justify text-zinc-300 text-base font-normal pt-8 lg:mx-auto mx-5 '} style={{direction:"rtl"}}>فعالیت در محیط کاری با حضور افراد
                    مستعد و متخصص با نگرش های متفاوت ، فرصت کم نظیری است تا با اشتراک
                    دانش و تجربه ، فضایی پویا و هم افزا به وجود آید. امکانی است که با حضور در فضای کار اشتراکی مکین برای
                    شما فراهم می‌شود.
                </p>
                <Image src={gifIcon} alt={''} className={'absolute lg:top-28 top-[16%] scale-[90%] lg:-left-24'}/>
                <FlatGroupsS2/>
                <div className={'lg:pt-[155px] pt-[50px] pb-[52px] flex-wrap lg:flex relative '}>
                    <div>
                        <div className={' lg:w-[755px] w-[90%] mx-auto  relative '}>
                            <Image src={videoPre} width={725} alt={'videoPre'}/>
                            <div
                                className={'w-[101px] flex justify-center items-center h-[95px] bg-[#002256] rounded-full absolute z-10  right-1/3 -top-12 lg:right-[-20px] lg:top-[220px]'}>
                                <div className={'w-[65px] flex justify-center items-center h-[65px] bg-[#FF792C] rounded-full'}>
                                    <svg width="25" className={'ml-1'} height="25" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9183 8.92277C19.3196 9.67816 19.3196 11.6884 17.9183 12.4438L3.60689 20.1583C2.2744 20.8766 0.65789 19.9116 0.65789 18.3978L0.65789 2.96875C0.65789 1.45499 2.2744 0.489958 3.60689 1.20823L17.9183 8.92277Z" fill="#002256"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex  justify-center lg:w-[425px] mx-auto flex-col '}>
                        <h3 className={'text-white text-[22px] font-bold lg:mt-0 mt-8 text-center pb-[10px]'}>تور مجازی کوورک مکین</h3>
                        <svg  className={'lg:w-[425px] w-[90%] mx-auto'} height="1" viewBox="0 0 425 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="425" y2="0.5" stroke="#FF792C"/>
                        </svg>
                        <p className={'pt-[14px] lg:mx-0 mx-8 text-justify text-slate-50 text-base font-normal'} style={{direction:"rtl"}} >آکادمی مکین همواره در تلاش است تا فضای
                            مناسبی را برای عزیزان فراهم کند تا در آسایش به کار خود
                            مشغول شوند.
                        </p>
                        <div className={'lg:absolute relative lg:bottom-0 bottom-2 right-[2%] lg:right-0'}>
                            <DesignElemntWithDot/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;