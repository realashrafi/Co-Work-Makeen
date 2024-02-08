'use client'
import React from 'react';
import compose from '../data/compose.png'
import cup from '../data/cup.png'
import rocket from '../data/rocket.png'
import Image from "next/image";
import Atropos from "atropos/react";

const SectionSix = () => {
    return (
        <section
            className={'bg-[#002256] lg:pt-[180px] pt-12 pb-12 lg:pb-[120px] flex lg:flex-nowrap flex-wrap justify-center'}>
            <Atropos className="my-atropos" highlight={false}>
                <div
                    className="relative group cursor-pointer  -mx-[15px] rounded-[18px] duration-500 my-2 lg:my-0 lg:scale-[85%] w-[275px] h-[275px] bg-[#44C0ED] ">
                    <div className="">
                        <div
                            className="absolute bottom-24 flex justify-center  duration-500 group-hover:-translate-y-14">
                            <div className="absolute -z-10  opacity-0 duration-500 group-hover:opacity-50 ">
                            </div>
                            <span className=" flex w-[275px]  justify-center ">
                                <Image data-atropos-offset="4" src={compose} className={' '} alt={''}/>
                            </span>
                        </div>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-24 text-center text-[18px]  pl-20 ml-2 text-white  duration-500 opacity-0">
                            میز کار کوورک
                        </p>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-6 px-8 text-[14px] text-white duration-500 opacity-0"
                           style={{direction: "rtl"}}>
                            مسیر راهت هموارتره و مشخص تره وقتی کنار همکارها و افراد حرفه ای کار میکنی .
                        </p>
                    </div>
                </div>
            </Atropos>
            <Atropos className="my-atropos" highlight={false}>
                <div
                    className="relative group cursor-pointer -mx-[15px] rounded-[18px] duration-500 my-2 lg:my-0 lg:scale-[85%] w-[275px] h-[275px] bg-[#FF792C] ">
                    <div className="">
                        <div
                            className="absolute bottom-28 flex justify-center  duration-500 group-hover:-translate-y-14">
                            <div className="absolute -z-10  opacity-0 duration-500 group-hover:opacity-50 ">
                            </div>
                            <span className=" flex w-[275px] pl-4 justify-center ">
                                <Image data-atropos-offset="4" src={cup} className={' '} alt={''}/>
                            </span>
                        </div>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-24 text-center text-[18px]  pl-20 text-white  duration-500 opacity-0">
                            فضای کار اشتراکی
                        </p>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-6 px-8 text-[13px] text-white text-justify   font-normal duration-500 opacity-0"
                           style={{direction: "rtl"}}>
                            فضای کار اشتراکی مکین نه تنها مکانی برای فعالیت حرفه ای ، بلکه مکانی برای شبکه سازی و
                            یادگیری
                            است .
                        </p>
                    </div>
                </div>
            </Atropos>
            <Atropos className="my-atropos" highlight={false}>
                <div
                    className="relative group cursor-pointer -mx-[15px] rounded-[18px] duration-500 my-2 lg:my-0 lg:scale-[85%] w-[275px] h-[275px] bg-[#026AE1] ">
                    <div className="">
                        <div
                            className="absolute bottom-24 flex justify-center  duration-500 group-hover:-translate-y-14">
                            <div className="absolute -z-10  opacity-0 duration-500 group-hover:opacity-50 ">

                            </div>
                            <span className=" flex w-[275px]  justify-center ">
                                <Image data-atropos-offset="4" src={rocket} className={' '} alt={''}/>
                            </span>
                        </div>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-24 text-center text-[18px]  pl-24 ml-2 text-white  duration-500 opacity-0">
                            شتاب دهی
                        </p>
                        <p data-atropos-offset="4"
                           className="group-hover:opacity-100 absolute bottom-6 px-8 text-[14px] text-white duration-500 opacity-0"
                           style={{direction: "rtl"}}>
                            در فضای کاری که قرار بگیری سرعت رشد پیشرفتت دو برابر میشه .
                        </p>
                    </div>
                </div>
            </Atropos>
        </section>
    );
};

export default SectionSix;