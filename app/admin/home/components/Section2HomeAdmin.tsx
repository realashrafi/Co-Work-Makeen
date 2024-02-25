'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import ali_rahmani from '../components/data/ali-rahmani.png'
import maryam from '../components/data/maryam-akbari.png'
import shahin from '../components/data/shahin-mlki.png'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import Link from "next/link";
import axios from "axios";
import {useQuery} from "react-query";

// const userNotifications = [
//     {
//         id: 1,
//         image: ali_rahmani,
//         name: 'علی رحمانی',
//         count: 1
//     }, {
//         id: 2,
//         image: maryam,
//         name: 'مریم اکبری',
//         count: 2
//     }, {
//         id: 3,
//         image: shahin,
//         name: 'شاهین ملکی',
//         count: 1
//     }
// ]
const Section2HomeAdmin = () => {
    const [today, setToday] = useState<any>()
    useEffect(() => {
        getToday()
    }, []);
    const getToday = async () => {
        const token = localStorage?.getItem('adminToken')
        try {
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/reports/reservations/co-work-usage',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            //console.log('today', res)
            setToday(res.data)

        } catch (e) {
            //console.log(e)
        }
    }
    const pers = today?.filedPercentage
    const {data: userNotifications} = useQuery({
        queryKey: ['userNotifications'],
        queryFn: async function () {
            const token = localStorage?.getItem('adminToken')
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/tickets/admin/latest-tickets', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        }
    })
    console.log(userNotifications)
    return (
        <div className={' w-[96%] flex justify-between mt-[59px] mx-auto'}>
            <div
                className={'w-[22.38%] h-[240px] bg-white rounded-xl flex flex-col border border-sky-950 border-opacity-10 backdrop-blur-[71.48px] '}>
                <div className={'flex justify-end items-center mt-[16px] mr-[18px]'}>
                    <p className={'text-zinc-900 text-xs font-medium mr-[8px]'}>درج اخبار</p>
                    <div
                        className={'flex justify-center items-center w-[25.81px] h-[25.81px]  bg-[#00000010] rounded-lg'}>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="#7551FF"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="more_horiz" clipPath="url(#clip0_2412_3121)">
                                <path id="Vector"
                                      d="M4.37142 7.86035C3.60398 7.86035 2.97607 8.48826 2.97607 9.2557C2.97607 10.0231 3.60398 10.651 4.37142 10.651C5.13886 10.651 5.76677 10.0231 5.76677 9.2557C5.76677 8.48826 5.13886 7.86035 4.37142 7.86035ZM12.7435 7.86035C11.9761 7.86035 11.3482 8.48826 11.3482 9.2557C11.3482 10.0231 11.9761 10.651 12.7435 10.651C13.511 10.651 14.1389 10.0231 14.1389 9.2557C14.1389 8.48826 13.511 7.86035 12.7435 7.86035ZM8.55747 7.86035C7.79003 7.86035 7.16212 8.48826 7.16212 9.2557C7.16212 10.0231 7.79003 10.651 8.55747 10.651C9.32491 10.651 9.95282 10.0231 9.95282 9.2557C9.95282 8.48826 9.32491 7.86035 8.55747 7.86035Z"
                                      fill="#7551FF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2412_3121">
                                    <rect width="16.7442" height="16.7442" fill="white"
                                          transform="translate(0.185547 0.883789)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div
                    className={'w-[80%] h-[158px] bg-neutral-100 rounded-xl mx-auto mt-[17px] px-2 py-4 text-zinc-900 text-[10px] font-normal'}
                    dir={'rtl'}>
                    مهمترین کتابی که برای طراحان از استادان معرفی میشه از سری کتاب های کورسرا است.
                </div>
            </div>
            <div
                className="flex flex-col  w-[36.57%] h-[240px] bg-white rounded-xl border border-sky-950 border-opacity-10 backdrop-blur-[71.48px] ">
                <div className={'flex justify-between  mt-[16px] items-center '}>
                    <Link href={'/admin/support'} className={'text-sky-600 text-[10px] ml-[18px] font-normal'}>مشاهده
                        همه</Link>
                    <div className={'flex justify-end items-center mr-[18px]'}>
                        <p className={'text-zinc-900 text-xs font-medium mr-[8px]'}>پیام های ارتباط با پشتیبانی</p>
                        <div
                            className={'flex justify-center items-center w-[25.81px] h-[25.81px]  bg-[#00000010] rounded-lg'}>
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="#7551FF"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="more_horiz" clipPath="url(#clip0_2412_3121)">
                                    <path id="Vector"
                                          d="M4.37142 7.86035C3.60398 7.86035 2.97607 8.48826 2.97607 9.2557C2.97607 10.0231 3.60398 10.651 4.37142 10.651C5.13886 10.651 5.76677 10.0231 5.76677 9.2557C5.76677 8.48826 5.13886 7.86035 4.37142 7.86035ZM12.7435 7.86035C11.9761 7.86035 11.3482 8.48826 11.3482 9.2557C11.3482 10.0231 11.9761 10.651 12.7435 10.651C13.511 10.651 14.1389 10.0231 14.1389 9.2557C14.1389 8.48826 13.511 7.86035 12.7435 7.86035ZM8.55747 7.86035C7.79003 7.86035 7.16212 8.48826 7.16212 9.2557C7.16212 10.0231 7.79003 10.651 8.55747 10.651C9.32491 10.651 9.95282 10.0231 9.95282 9.2557C9.95282 8.48826 9.32491 7.86035 8.55747 7.86035Z"
                                          fill="#7551FF"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2412_3121">
                                        <rect width="16.7442" height="16.7442" fill="white"
                                              transform="translate(0.185547 0.883789)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col mt-[11px] items-center'}>
                    {//@ts-ignore
                        userNotifications?.data.map(item => (
                            <div
                                className={'w-[88.2%] h-12 mb-[12px] bg-neutral-100 rounded-[5px] justify-between px-[24px] flex items-center'}
                                key={item.id}>
                                <div
                                    className={'w-[15px] h-[15px] bg-orange-500 rounded-full text-white text-sm font-bold flex items-center justify-center'}>{item.unread_tickets}</div>
                                <div className={'flex items-center'}>
                                    <h1 className={'text-zinc-800 text-sm font-normal mr-[12px]'}>{item.name}</h1>
                                    <img className={'w-[36px] h-[36px] rounded-full'}
                                         src={item.profile_picture === null ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png' : item.profile_picture}
                                         alt={'پروفایل کاربر'}/>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div
                className="w-[36.57%] h-[240px] bg-white rounded-xl border border-sky-950 border-opacity-10 backdrop-blur-[71.48px] ">
                <div className={'flex justify-end items-center mt-[16px] mr-[18px]'}>
                    <p className={'text-zinc-900 text-xs font-medium mr-[8px]'}>نمودار صندلی های کووورک (امروز)</p>
                    <div
                        className={'flex justify-center items-center w-[25.81px] h-[25.81px]  bg-[#00000010] rounded-lg'}>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="#7551FF"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="more_horiz" clipPath="url(#clip0_2412_3121)">
                                <path id="Vector"
                                      d="M4.37142 7.86035C3.60398 7.86035 2.97607 8.48826 2.97607 9.2557C2.97607 10.0231 3.60398 10.651 4.37142 10.651C5.13886 10.651 5.76677 10.0231 5.76677 9.2557C5.76677 8.48826 5.13886 7.86035 4.37142 7.86035ZM12.7435 7.86035C11.9761 7.86035 11.3482 8.48826 11.3482 9.2557C11.3482 10.0231 11.9761 10.651 12.7435 10.651C13.511 10.651 14.1389 10.0231 14.1389 9.2557C14.1389 8.48826 13.511 7.86035 12.7435 7.86035ZM8.55747 7.86035C7.79003 7.86035 7.16212 8.48826 7.16212 9.2557C7.16212 10.0231 7.79003 10.651 8.55747 10.651C9.32491 10.651 9.95282 10.0231 9.95282 9.2557C9.95282 8.48826 9.32491 7.86035 8.55747 7.86035Z"
                                      fill="#7551FF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2412_3121">
                                    <rect width="16.7442" height="16.7442" fill="white"
                                          transform="translate(0.185547 0.883789)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={'flex justify-between mt-[23px]'}>
                    <div className={'flex flex-col pl-[31px]'}>
                        <div
                            className="w-[151.40px] mb-[21px] h-[64.88px]  pt-[10.65px] pb-[10.72px] bg-neutral-100 rounded-[13.95px] backdrop-blur-[83.72px] flex-col justify-center items-center gap-[9.51px] inline-flex">
                            <div
                                className="text-center text-neutral-700 text-[10px] font-normal ">ظرفیت
                                صندلی پر شده
                            </div>
                            <div className=" text-neutral-700 text-[10px] font-normal text-right"
                                 dir={'rtl'}>{today?.reservedChairs} صندلی
                            </div>
                        </div>
                        <div
                            className="w-[151.40px] h-[64.88px] pl-[32.39px] pr-9 pt-[10.65px] pb-[10.72px] bg-neutral-100 rounded-[13.95px] backdrop-blur-[83.72px] flex-col justify-center items-center gap-[9.51px] inline-flex">
                            <div
                                className="text-center text-neutral-700 text-[10px] font-normal ">ظرفیت
                                صندلی خالی
                            </div>
                            <div className=" text-neutral-700 text-[10px] font-normal text-right"
                                 dir={'rtl'}>{today?.remainingChairs} صندلی
                            </div>
                        </div>
                    </div>
                    <div className={'relative w-[40%] mr-[20px]'}>
                        {/*<svg className={'absolute top-[15%] right-[15%]'} width="104" height="98" viewBox="0 0 104 98" fill="none"*/}
                        {/*     xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        d="M77.9492 96.8117C87.8149 91.1158 95.5069 82.3014 99.8149 71.7554C104.123 61.2094 104.802 49.5305 101.747 38.556C98.6907 27.5816 92.0729 17.9346 82.9343 11.1329C73.7958 4.33121 62.6552 0.760839 51.2654 0.983554C39.8757 1.20627 28.8832 5.20943 20.0175 12.3632C11.1518 19.517 4.91619 29.4153 2.29167 40.5008C-0.33285 51.5863 0.80272 63.2298 5.51971 73.5992C10.2367 83.9687 18.2674 92.4757 28.3482 97.7816"*/}
                        {/*        stroke="#6BCCFE" strokeWidth="0.379354" strokeLinecap="round"*/}
                        {/*        strokeDasharray="0 0.38 5.31 0 0.38 5.31"/>*/}
                        {/*</svg>*/}
                        <div className={'text-sky-950 text-sm font-normal absolute top-[41%] right-[38%]'}
                             dir={'rtl'}>12 مهر
                        </div>
                        <div className={'   rotate-[197deg]'}>
                            <CircularProgressbar
                                value={pers}
                                circleRatio={0.9}
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    pathColor: '#165BAA',
                                    trailColor: "#7AD3FF30",
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2HomeAdmin;