'use client'
import React, {useEffect} from 'react';
import img from '../components/data/ImageS3.png'
import designElement from '../components/data/Design element - Circles (2).png'
import Image from "next/image";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginForBuy from "@/app/buy/components/LoginForBuy";
import usePriceDefault from "@/app/store/react-query/usePriceDefault";
import Atropos from "atropos/react";

const Section3Tariffs = () => {
    const {priceDefault}=usePriceDefault()
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    return (
        <section className={'bg-[#002256] w-[100%] flex lg:flex-col lg:flex-nowrap flex-wrap relative '}>
            {/*<div*/}
            {/*    className={'w-[13%] h-[56px] self-end mt-[28px]  border-r-0 border-[3px] border-[#FF792C] rounded-l-full'}></div>*/}
            <div data-aos={'fade-up'}
                 className="w-[170px] animate-[pulse_10s_ease-in-out_infinite] absolute right-0 lg:-top-20 h-[219px] opacity-50 bg-[#FF792C] rounded-l-full blur-[100px]"/>
            <div data-aos={'fade-down'}
                 className="w-[170px]  animate-[pulse_10s_ease-in-out_infinite]  absolute left-0 lg:top-20 h-[219px] opacity-50 bg-[#FF792C] rounded-r-full blur-[100px]"/>
            <div className={'flex w-full relative mx-auto lg:pt-[123px]'}>
                <div className={'lg:w-1/19 lg:mr-[7%] '}>
                    <div data-aos={'fade-down'} className={'lg:w-[550px]  -mr-12 lg:pr-[5%]'}>
                        <h2 className={'text-[22px] text-[#FF792C] pt-12 lg:pt-[173px]'} style={{direction: "rtl"}}>اتاق
                            جلسات</h2>
                        <p className={'lg:w-[550px] lg:pr-[5%] lg:pl-[6%] w-[90%] text-[16px] text-[#DCDCDC] pt-8 mx-auto '}
                           style={{direction: "rtl"}}>
                            فعالیت در محیط کاری با حضور افراد مستعد و متخصص با نگرش های متفاوت ، فرصت کم نظیری است تا با
                            اشتراک دانش و تجربه ، فضایی پویا و هم افزا به وجود آید. امکانی است که با حضور در فضای کار
                            اشتراکی مکین برای شما فراهم می‌شود.
                        </p>
                    </div>
                </div>
                <Atropos className={'my-atropos'} highlight={false} shadow={false}>
                <div data-aos={'fade-up'} className={' lg:visible invisible w-full  mx-auto lg:mr-[10%]'}>
                    <Image src={img} className={'z-20'} alt={''}/>
                    <div className={'mt-2  lg:ml-[7px]'}>
                        <Image src={designElement} alt={''}/>
                    </div>
                </div>
                </Atropos>
            </div>
            <div data-aos={'fade-up'}
                className={'lg:w-[71%]  w-[90%] lg:h-[294px] pb-12 lg:pb-0 justify-center flex-wrap-reverse mx-auto rounded-[24px]  mt-[50px] bg-[#0A2E65] flex'}>
                <div data-aos={'fade-up'} className={'lg:w-[82%] w-[98%]'}>
                    <div data-aos={'fade-up'}
                        className={'lg:h-[50%] lg:-mr-0 mx-auto  pb-12 lg:pb-0 lg:w-[100%] w-[90%] flex-wrap-reverse  lg:flex-nowrap justify-center  flex '}>
                        <div
                            className={'lg:w-[26%] px-3 w-fit  flex items-center justify-center h-[48px] bg-[#FF792C]  mt-[49px] rounded-[10px] lg:ml-[6%] '}>
                            <div className={'lg:-ml-[64px]'}></div>
                            <LoginForBuy orderData={4}/>
                        </div>
                        <div className={'lg:ml-[23%] flex justify-center lg:w-fit w-[100%]  mt-[57px] '}>
                            <p className={'text-[18px] text-[#FFFEFF]'}>{priceDefault?.data.sessionRoom.price.normal.perHour} تومان</p>
                        </div>
                        <div className={'lg:w-[13%] w-fit lg:ml-[18%] pt-[45px] flex-col'} style={{direction: "rtl"}}>
                            <p className={'text-[16px] text-[#FFFFFF]'}>اشتراک ساعتی</p>
                            <p className={'text-[14px] pt-[8px] text-[#FFFFFF]'}>برای هر یک ساعت</p>
                        </div>
                    </div>
                    <svg className={'w-[96%] mx-auto'} height="1" viewBox="0 0 826 1" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="826" height="1" fill="#002256"/>
                    </svg>
                    <div data-aos={'fade-up'}
                        className={'lg:h-[50%] lg:-mr-0  mx-auto  lg:w-[100%] w-[90%] flex-wrap-reverse  lg:flex-nowrap justify-center  flex '}>
                        <div
                            className={'lg:w-[26%] lg:px-0 px-3 flex items-center justify-center h-[48px] bg-[#FF792C]  mt-[49px] rounded-[10px] lg:ml-[6%] '}>
                            <div className={'lg:-ml-[64px]'}></div>
                            <LoginForBuy orderData={3}/>
                        </div>
                        <div className={'lg:ml-[23%] flex justify-center lg:w-fit w-[100%]  mt-[57px] '}>
                            <p className={'text-[18px] text-[#FFFEFF]'}>{priceDefault?.data.sessionRoom.price.normal.perDay} تومان</p>
                        </div>
                        <div className={'lg:w-[13%] lg:ml-[18%] pt-[45px] flex-col'} style={{direction: "rtl"}}>
                            <p className={'text-[16px] text-[#FFFFFF]'}>اشتراک روزانه</p>
                            <p className={'text-[14px] pt-[8px] text-[#FFFFFF]'}>از 8 صبح تا 8 شب</p>
                        </div>
                    </div>
                </div>
                <div data-aos={'fade-up'}  className={'flex lg:pt-0 pt-12  lg:ml-[52px] items-center'}>
                    <svg width="70" height="55" viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.0165 0C7.47823 0 4.59024 2.8837 4.59024 6.41667C4.59024 9.94964 7.47823 12.8333 11.0165 12.8333C14.5547 12.8333 17.4427 9.94964 17.4427 6.41667C17.4427 2.8837 14.5547 0 11.0165 0ZM58.754 0C55.2158 0 52.3278 2.8837 52.3278 6.41667C52.3278 9.94964 55.2158 12.8333 58.754 12.8333C62.2923 12.8333 65.1803 9.94964 65.1803 6.41667C65.1803 2.8837 62.2923 0 58.754 0ZM11.0165 1.83333C13.5624 1.83333 15.6066 3.8745 15.6066 6.41667C15.6066 8.95883 13.5624 11 11.0165 11C8.47051 11 6.4263 8.95883 6.4263 6.41667C6.4263 3.8745 8.47051 1.83333 11.0165 1.83333ZM58.754 1.83333C61.3 1.83333 63.3442 3.8745 63.3442 6.41667C63.3442 8.95883 61.3 11 58.754 11C56.2081 11 54.1639 8.95883 54.1639 6.41667C54.1639 3.8745 56.2081 1.83333 58.754 1.83333ZM11.0165 14.6667C6.97121 14.6667 3.67221 17.9608 3.67221 22V34.375C3.67221 38.1612 6.76561 41.25 10.5574 41.25H20.541L22.0382 54.189C22.0642 54.4124 22.1715 54.6185 22.3398 54.7681C22.5081 54.9176 22.7256 55.0002 22.9509 55H27.541C27.7845 55 28.018 54.9034 28.1901 54.7315C28.3623 54.5596 28.459 54.3264 28.459 54.0833V36.2083C28.459 33.4349 26.1874 31.1667 23.4099 31.1667H18.3607V22C18.3607 17.9608 15.0617 14.6667 11.0165 14.6667ZM58.754 14.6667C54.7088 14.6667 51.4098 17.9608 51.4098 22V31.1667H46.3606C43.5831 31.1667 41.3115 33.4349 41.3115 36.2083V54.0833C41.3115 54.3264 41.4082 54.5596 41.5804 54.7315C41.7525 54.9034 41.986 55 42.2295 55H46.8196C47.0449 55.0002 47.2624 54.9176 47.4307 54.7681C47.599 54.6185 47.7063 54.4124 47.7323 54.189L49.2295 41.25H59.2131C63.0049 41.25 66.0983 38.1612 66.0983 34.375V22C66.0983 17.9608 62.7993 14.6667 58.754 14.6667ZM11.0165 16.5C14.0694 16.5 16.5246 18.9516 16.5246 22V32.0833H14.2296C12.4497 32.0833 11.0165 30.6522 11.0165 28.875V25.2083C11.0174 25.1469 11.006 25.086 10.9829 25.0291C10.9598 24.9722 10.9255 24.9205 10.8821 24.877C10.8386 24.8336 10.7868 24.7994 10.7298 24.7763C10.6728 24.7533 10.6118 24.7419 10.5503 24.7428C10.49 24.7438 10.4305 24.7566 10.3752 24.7805C10.3198 24.8044 10.2697 24.8389 10.2278 24.8821C10.1858 24.9254 10.1528 24.9764 10.1306 25.0324C10.1084 25.0884 10.0975 25.1481 10.0984 25.2083V28.875C10.0984 31.1477 11.9535 33 14.2296 33H17.9017H23.4099C25.1949 33 26.623 34.4259 26.623 36.2083V53.1667H23.7685L22.2713 40.2277C22.2453 40.0046 22.1383 39.7987 21.9704 39.6492C21.8024 39.4997 21.5854 39.4169 21.3604 39.4167H10.5574C7.7578 39.4167 5.50827 37.1705 5.50827 34.375V22C5.50827 18.9516 7.96349 16.5 11.0165 16.5ZM58.754 16.5C61.807 16.5 64.2622 18.9516 64.2622 22V34.375C64.2622 37.1705 62.0127 39.4167 59.2131 39.4167H48.4101C48.1851 39.4169 47.9681 39.4997 47.8001 39.6492C47.6322 39.7987 47.5252 40.0046 47.4992 40.2277L46.002 53.1667H43.1475V36.2083C43.1475 34.4259 44.5756 33 46.3606 33H52.3278H55.5409C57.817 33 59.6721 31.1477 59.6721 28.875V25.2083C59.673 25.1469 59.6616 25.086 59.6385 25.0291C59.6155 24.9722 59.5812 24.9205 59.5377 24.877C59.4942 24.8336 59.4424 24.7994 59.3854 24.7763C59.3284 24.7533 59.2674 24.7419 59.2059 24.7428C59.1456 24.7438 59.0861 24.7566 59.0308 24.7805C58.9754 24.8044 58.9254 24.8389 58.8834 24.8821C58.8415 24.9254 58.8084 24.9764 58.7862 25.0324C58.764 25.0884 58.7531 25.1481 58.754 25.2083V28.875C58.754 30.6522 57.3208 32.0833 55.5409 32.0833H53.2459V22C53.2459 18.9516 55.7011 16.5 58.754 16.5ZM0.903773 21.9875C0.660609 21.9913 0.428887 22.0912 0.259463 22.2654C0.0900396 22.4396 -0.00324381 22.6739 8.61867e-05 22.9167V34.8333C8.61867e-05 40.3915 4.53203 44.9167 10.0984 44.9167H15.6066C15.7283 44.9184 15.849 44.8959 15.9619 44.8506C16.0748 44.8054 16.1776 44.7381 16.2642 44.6528C16.3508 44.5675 16.4196 44.4659 16.4666 44.3538C16.5135 44.2418 16.5377 44.1215 16.5377 44C16.5377 43.8785 16.5135 43.7582 16.4666 43.6462C16.4196 43.5341 16.3508 43.4325 16.2642 43.3472C16.1776 43.2619 16.0748 43.1946 15.9619 43.1494C15.849 43.1041 15.7283 43.0816 15.6066 43.0833H10.0984C5.52425 43.0833 1.83615 39.4007 1.83615 34.8333V22.9167C1.83783 22.794 1.81485 22.6723 1.76856 22.5587C1.72228 22.4451 1.65364 22.3419 1.5667 22.2552C1.47976 22.1686 1.37629 22.1003 1.26242 22.0543C1.14855 22.0083 1.02659 21.9856 0.903773 21.9875ZM69.0675 21.9875C68.8244 21.9913 68.3632 22.0912 68.1937 22.2654C68.0243 22.4396 67.931 22.6739 67.9343 22.9167V34.8333C67.9343 39.4007 64.2462 43.0833 59.6721 43.0833H54.1639C54.0422 43.0816 53.9215 43.1041 53.8086 43.1494C53.6957 43.1946 53.5929 43.2619 53.5063 43.3472C53.4197 43.4325 53.3509 43.5341 53.3039 43.6462C53.257 43.7582 53.2328 43.8785 53.2328 44C53.2328 44.1215 53.257 44.2418 53.3039 44.3538C53.3509 44.4659 53.4197 44.5675 53.5063 44.6528C53.5929 44.7381 53.6957 44.8054 53.8086 44.8506C53.9215 44.8959 54.0422 44.9184 54.1639 44.9167H59.6721C65.2385 44.9167 69.9999 40.3915 69.9999 34.8333V22.9167C70.0016 22.794 69.9786 22.6723 69.9323 22.5587C69.8861 22.4451 69.8174 22.3419 69.7305 22.2552C69.6435 22.1686 69.5401 22.1003 69.4262 22.0543C69.3123 22.0083 69.1904 21.9856 69.0675 21.9875Z"
                            fill="#FFFEFF"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Section3Tariffs;