import React from 'react';
import Image from "next/image";
import iconFooter from "@/public/images/logo-makeen 8.png";
import baleIcon from '../data/baleIcon.png'
import telegramIcon from '../data/telegramIcon.png'
import inistagramIcon from '../data/inistagramIcon.png'
//Footer
const SectionNine = () => {
    return (
        <section className={'bg-[#000A19] flex flex-col justify-center items-center'}>
            <div className={' pt-[50px]'}>
                <Image src={iconFooter} alt={''}/>
            </div>
            <div className={'lg:w-[531px] w-[90%] lg:mx-0 mx-auto pt-[17px] lg:mr-[30px]'} style={{direction: "rtl"}}>
                <p className={'text-[#FFFFFF] text-[16px] '}>آکادمی مکین ، یه محیط صمیمی و تخصصیه که تمام تلاشش ایجاد
                    فرصت های شغلی برای جوانان این سرزمینه.ما با
                    استفاده از متدلوژی آمزشی منحصر به فرد ، به افراد کمک میکنیم به آرزوشون برسن.
                </p>
            </div>
            <div className={'flex pt-[4px] mr-[30px] '}>
                <div>
                    <Image src={baleIcon} alt={''}/>
                </div>
                <div className={'pr-[40px] pl-[10px] pt-[20px]'}>
                    <Image src={telegramIcon} alt={''}/>
                </div>
                <div className={'pt-[20px]'}>
                    <Image src={inistagramIcon} alt={''}/>
                </div>

            </div>
            <div className={''}>
                <ul className={'flex pb-[70px]'}>
                    <li className={'text-[#FFFFFF] mr-3 lg:pr-[25px]'}>وبلاگ</li>
                    <svg width="2" height="14" className={'mt-[6px] mr-3 lg:mr-[25px]'} viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1V13" stroke="white" strokeLinecap="round"/>
                    </svg>
                    <li className={'text-[#FFFFFF] mr-3 lg:pr-[25px]'}>تماس با ما</li>
                    <svg width="2" height="14" className={'mt-[6px] mr-3  lg:mr-[25px]'} viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1V13" stroke="white" strokeLinecap="round"/>
                    </svg>
                    <li className={'text-[#FFFFFF] mr-3 lg:pr-[25px]'}>تعرفه ها</li>
                    <svg width="2" height="14" className={'mt-[6px] mr-3 lg:mr-[25px]'} viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1V13" stroke="white" strokeLinecap="round"/>
                    </svg>
                    <li className={'text-[#FFFFFF] '}>صفحه اصلی</li>
                </ul>
            </div>
        </section>
    );
};

export default SectionNine;