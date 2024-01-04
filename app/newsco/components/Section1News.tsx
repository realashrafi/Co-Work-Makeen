import React from 'react';
import Navbar from "@/app/components/Navbar";

const Section1News = () => {
    return (
        <div>
            <Navbar/>
            <div className={'mt-[46px]  mx-auto h-[754px] w-[85%] flex flex-warp'}>
                <div className={'w-[48%] h-[654px] rounded-[11px] bg-[url("/newsImg1.png")]'}>
                    <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                        <p className={'text-[#FFFFFF] text-[25px] w-[76%] mx-auto text-center pt-[75%]'}>تجربه ی شیرین
                            خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                        <p className={'text-[#FFFFFF] text-[16px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                            متین ستوده ، مهر 1402
                        </p>
                    </div>
                </div>
                <div className={'w-[48%] ml-[4%]'}>
                    <div className={'w-[100%] h-[367px] bg-red-500 rounded-[11px] bg-[url("/newsImg2.png")]'}>
                        <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                            <p className={'text-[#FFFFFF] text-[20px] w-[70%] mx-auto text-center pt-[40%]'}>تجربه ی
                                شیرین
                                خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                            <p className={'text-[#FFFFFF] text-[14px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                                متین ستوده ، مهر 1402
                            </p>
                        </div>
                    </div>
                    <div
                        className={'w-[100%] h-[275px] mt-3 bg-red-500 rounded-[11px] bg-[url("/newsImg3.png")]'}>
                        <div className={'w-[100%] h-[100%] backdrop-brightness-50 rounded-[11px]'}>
                            <p className={'text-[#FFFFFF] text-[20px] w-[70%] mx-auto text-center pt-[27%]'}>تجربه ی
                                شیرین
                                خلق رابط کاربری با استفاده از هوش مصنوعی</p>
                            <p className={'text-[#FFFFFF] text-[14px] w-[27%] mx-auto text-center pt-[14px] mr-[60%]'}>
                                متین ستوده ، مهر 1402
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section1News;