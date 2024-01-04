'use client'
import React from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const Section2HistoryReserve = () => {
    const pers =50
    return (
        <div>
            <p className={'mt-[70px] ml-[27px] mr-[65px]  text-[#FFFEFF] text-[18px] font-[500] '}
               style={{direction: "rtl"}}>
                وضعیت آخرین رزرو
            </p>
            <div
                className={'w-[88.27%] h-[344px] text-center flex justify-between px-[4%] mt-[32px] bg-[#0A2E65] rounded-[20px] mx-auto'}>
                <div className={'flex-col mt-[145px]'}>
                    <div className={'text-[#FFFEFF] text-[16px] font-[400]'}>تعداد روزهای باقی مانده :5 روز</div>
                    <div className={'text-[#FFFEFF]  mt-[16px] text-[16px] font-[400]'}>تعداد روزهای استفاده شده : 25 روز</div>
                </div>
                <div className={'w-[29%] flex flex-col  items-center'}>
                    <div className={'flex justify-between w-[100%] mt-[24px] mb-[48px]'}>
                        <p className={'text-[#44C0ED] text-[14px] font-[400] '}>18 مهر 1402</p>
                        <p className={'text-[#44C0ED] text-[14px] font-[400] '}>اشتراک ماهانه</p>
                    </div>
                    <div style={{width: 212}} className={'-rotate-[90deg] -mb-[80px]  relative'}>
                        <CircularProgressbar
                            value={pers}
                            circleRatio={0.5}
                            strokeWidth={50}
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                pathColor: "#FF792C",
                                trailColor: "#22234B",
                            })}
                        />
                        {/*<CircularProgressbar*/}
                        {/*    value={pers}*/}
                        {/*    circleRatio={0.6}*/}
                        {/*    styles={buildStyles({*/}
                        {/*        pathColor: "#FF792C",*/}
                        {/*        trailColor: "#22234B",*/}
                        {/*    })}/>*/}
                        <div className={'rotate-[90deg] absolute right-[38%] bottom-[38%]'}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#FF792C"/>
                                <g clipPath="url(#clip0_966_3883)">
                                    <rect width="30" height="30" transform="translate(9 9)" fill="#FF792C"/>
                                    <path
                                        d="M24.0129 11.5C17.1129 11.5 11.5254 17.1 11.5254 24C11.5254 30.9 17.1129 36.5 24.0129 36.5C30.9254 36.5 36.5254 30.9 36.5254 24C36.5254 17.1 30.9254 11.5 24.0129 11.5ZM24.0254 34C18.5004 34 14.0254 29.525 14.0254 24C14.0254 18.475 18.5004 14 24.0254 14C29.5504 14 34.0254 18.475 34.0254 24C34.0254 29.525 29.5504 34 24.0254 34ZM28.4004 22.75C29.4379 22.75 30.2754 21.9125 30.2754 20.875C30.2754 19.8375 29.4379 19 28.4004 19C27.3629 19 26.5254 19.8375 26.5254 20.875C26.5254 21.9125 27.3629 22.75 28.4004 22.75ZM19.6504 22.75C20.6879 22.75 21.5254 21.9125 21.5254 20.875C21.5254 19.8375 20.6879 19 19.6504 19C18.6129 19 17.7754 19.8375 17.7754 20.875C17.7754 21.9125 18.6129 22.75 19.6504 22.75ZM24.0254 30.875C26.5629 30.875 28.7754 29.4875 29.9629 27.4375C30.2004 27.025 29.9004 26.5 29.4129 26.5H18.6379C18.1629 26.5 17.8504 27.025 18.0879 27.4375C19.2754 29.4875 21.4879 30.875 24.0254 30.875Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_966_3883">
                                        <rect width="30" height="30" fill="white" transform="translate(9 9)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={'w-[100%]  flex-col  h-[82px] flex  rounded-[20px] bg-[#002256]'} style={{zIndex:2}}>
                        <div className={'flex w-[100%] justify-between items-center h-[41px]'}>
                            <p className={'text-[#FFFFFF] text-[14px] ml-[8%]'}>0%</p>
                            <p className={'text-[#FFFFFF] text-[20px] ml-[6%]'}>{pers}%</p>
                            <p className={'text-[#FFFFFF] text-[14px] mr-[5%]'}>100%</p>
                        </div>
                        <p className={'text-[#FFFFFF] pt-[8px] text-[14px]  text-center'}>میزان استفاده شده</p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Section2HistoryReserve;