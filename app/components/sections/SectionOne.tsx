'use client'
import React, {useEffect} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const SectionOne = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    return (
        <section className={'flex  justify-center flex-col bg-fixed bg-[url("/IMG_20231002_160850.png")] '}>
            <div className={'bg-gradient-to-t from-[#002256] to-transparent backdrop-brightness-[25%] '}>
                <Navbar/>
                <div data-aos={'fade'}
                     className={'flex text-white justify-center flex-col my-auto pt-[240px] pb-[270px]  items-center'}>
                    <div className="text-zinc-100 text-[32px] font-bold ">فضای کار اشتراکی مکین</div>
                    <p data-aos={'fade-down'} className={'py-2 text-[16px]'}>محیطی حرفه ای برای حرفه ای ها</p>
                    <Link href={'/tariffs'} data-aos={'zoom-in'} data-aos-duration="2000"
                          className={'mt-3 bg-[#FF792C] flex justify-center items-center text-white w-[264px] h-[48px] rounded-full text-[20px]'}>
                        <span data-aos={''} data-aos-duration="2000">
                        رزرو صندلی
                        </span>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default SectionOne;