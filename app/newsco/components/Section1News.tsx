'use client'
import React, {useEffect} from 'react';
import Navbar from "@/app/components/Navbar";
import Atropos from 'atropos/react';
import AOS from "aos";

const Section1News = () => {
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    return (
        <div>
            <Navbar/>
            <div
                className={'mt-[46px] justify-center mx-auto h-fit pb-12 w-[95%] flex-wrap lg:flex-nowrap lg:w-[85%] flex flex-warp'}>
                <Atropos data-aos={'fade-up'} className={'w-[95%] rounded-[11px] h-[654px]'}>
                    <div className={' rounded-[11px] h-[654px] bg-no-repeat bg-cover bg-[url("/newsImg1.png")]'}>
                        <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                            <p data-atropos-offset="4"
                               className={'text-[#FFFFFF] text-[25px] w-[76%] mx-auto text-center pt-[75%]'}>تجربه ی
                                شیرین
                                خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                            <p data-atropos-offset="4"
                               className={'text-[#FFFFFF] text-[16px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                                متین ستوده ، مهر 1402
                            </p>
                        </div>
                    </div>
                </Atropos>
                <div className={'w-[95%] lg:-mt-3 lg:ml-[4%]'}>
                    <Atropos data-aos={'fade-down'} className={'w-[100%] mt-3 h-[367px] rounded-[11px] '}>
                        <div
                            className={'w-[100%] h-[367px]  rounded-[11px] bg-no-repeat  bg-center  bg-[url("/newsImg2.png")]'}>
                            <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                                <p data-atropos-offset="4"
                                   className={'text-[#FFFFFF] text-[20px] w-[70%] mx-auto text-center pt-[40%]'}>تجربه ی
                                    شیرین
                                    خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                                <p data-atropos-offset="4"
                                   className={'text-[#FFFFFF] text-[14px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                                    متین ستوده ، مهر 1402
                                </p>
                            </div>
                        </div>
                    </Atropos>
                    <Atropos data-aos={'fade-right'} className={'w-[100%] h-[275px] mt-3 rounded-[11px]'}>
                    <div
                        className={'w-[100%] h-[275px] rounded-[11px] bg-no-repeat bg-center bg-[url("/newsImg3.png")]'}>
                        <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                            <p data-atropos-offset="4" className={'text-[#FFFFFF] text-[20px] w-[70%] mx-auto text-center pt-[27%]'}>تجربه ی
                                شیرین
                                خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                            <p data-atropos-offset="4" className={'text-[#FFFFFF] text-[14px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                                متین ستوده ، مهر 1402
                            </p>
                        </div>
                    </div>
                    </Atropos>
                </div>
            </div>
        </div>
    );
};

export default Section1News;