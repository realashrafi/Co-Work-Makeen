'use client'
import React, { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Atropos from 'atropos/react';

const SectionOne = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    return (
        <section
            className={'flex  justify-center flex-col bg-cover bg-no-repeat bg-center bg-fixed bg-[url("/IMG_20231002_160850.png")] '}>
            <div className={'bg-gradient-to-t from-[#002256] to-transparent backdrop-brightness-[25%] '}>
                <Navbar />
                <div data-aos={'fade'}
                    className={'flex text-white justify-center flex-col my-auto pt-[240px] pb-[270px]  items-center'}>
                    <div data-atropos-offset="4" className="text-zinc-100 text-[28px] sm:text-[32px] font-bold ">فضای کار اشتراکی مکین</div>
                    <p data-atropos-offset="4" data-aos={'fade-down'} className={'py-2 text-[16px]'}>محیطی حرفه ای برای حرفه ای ها</p>
                    <Atropos highlight={false} shadow={false}>
                        <Link data-atropos-offset="4" href={'/tariffs'} data-aos={'zoom-in'} data-aos-duration="2000"
                            className={'mt-3 hover:animate-pulse hover:bg-[#44C0ED] bg-[#FF792C] flex justify-center items-center text-white w-[264px] h-[48px] rounded-full text-[20px]'}>
                            <span data-atropos-offset="8" data-aos={''} data-aos-duration="2000">
                                رزرو صندلی
                            </span>
                        </Link>
                    </Atropos>
                </div>
            </div>

        </section>
    );
};

export default SectionOne;