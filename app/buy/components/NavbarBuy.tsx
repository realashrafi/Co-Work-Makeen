'use client'
import React, {useEffect, useState} from 'react';
import {FaAngleDown} from "react-icons/fa6";
import {IoPersonOutline} from "react-icons/io5";
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useRouter} from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import {disableValidation} from "schema-utils";
import ImagePre from "@/app/components/ImagePre";

const DropDownNavbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
        handleFetch()
    }, []);
    const router = useRouter()
    const [me, setMe] = useState<any>()
    const [toggle, setToggle] = useState(false)
    const handleFetch = async () => {
        const token = localStorage?.getItem('userToken');
        try {
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setMe(response.data)
        } catch (e) {
            //console.log(e)
        }
    }
    // //console.log(me)
    return (
        <details className="dropdown  w-[150px] ">
            <summary onClick={()=>setToggle(!toggle)}
                className={`lg:px-[18px] transition-all px-2 cursor-pointer flex justify-between h-[32px]  ${toggle?' bg-orange-500 ':'bg-[#44C0ED]'} items-center  rounded-xl`}>
                <FaAngleDown className={`${toggle && 'rotate-180 bottom-[2px]'} relative transition-all w-[14px] text-white h-[18px] my-auto`}/>
                <div className={'text-white  text-[10px]'}>پنل کاربری</div>
                <IoPersonOutline
                    className={`w-[21px]  text-white  h-[21px] my-auto`}/>
            </summary>
            <div tabIndex={0}
                 className="dropdown-content z-50 card card-compact mt-[16px] w-[280px] sm:w-[310px]  p-2 shadow bg-[#002256] text-primary-content">
                <div className={'flex items-center pt-[25px] justify-end'}>
                    <p className={'text-white text-sm font-bold mr-[18px]'}>{me?.first_name} {me?.last_name}</p>
                    {me?.profile_picture == null ?
                        <svg width="60px" className={'mr-3'} height="60px" viewBox="0 0 18 18"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill="#494c4e"
                                  d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"/>
                        </svg>
                        :
                        <ImagePre me={me}/>
                    }
                </div>
                <div className={'flex justify-center mt-[12px]'}>
                    <svg width="253" height="1" viewBox="0 0 253 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="252.854" y2="0.5" stroke="url(#paint0_linear_2169_1853)"/>
                        <defs>
                            <linearGradient id="paint0_linear_2169_1853" x1="126.427" y1="1.00064" x2="-0.0959282"
                                            y2="52.8036" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#44C0ED"/>
                                <stop offset="1" stopColor="#FF792C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={'flex flex-col items-end py-[6px]'}>
                    <Link href={'/user'}
                          className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] my-[6px]'}>
                        <p className={'text-right text-white text-sm font-normal '}>داشبورد من</p>
                        <svg className={'ml-[24px]'} width="15" height="15" viewBox="0 0 15 15" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 419">
                                <rect id="Rectangle 415" width="6.60393" height="6.70239" rx="0.753214" fill="#FFFEFF"/>
                                <rect id="Rectangle 417" y="7.54004" width="6.60393" height="6.70239" rx="0.753214"
                                      fill="#FFFEFF"/>
                                <rect id="Rectangle 416" x="7.54688" width="6.60393" height="6.70239" rx="0.753214"
                                      fill="#FFFEFF"/>
                                <rect id="Rectangle 418" x="7.54688" y="7.54004" width="6.60393" height="6.70239"
                                      rx="0.753214" fill="#FFFEFF"/>
                            </g>
                        </svg>
                    </Link>
                    <Link href={'/tariffs'}
                          className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] my-[6px]'}>
                        <p className={'text-right text-white text-sm font-normal '}>خرید اشتراک</p>
                        <svg className={'ml-[24px]'} width="17" height="13" viewBox="0 0 17 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M1.4996 0C0.807575 0 0.24707 0.564121 0.24707 1.26061V1.89091H16.5299V1.26061C16.5299 0.564121 15.9694 0 15.2774 0H1.4996ZM0.24707 3.78182V11.3455C0.24707 12.0419 0.807575 12.6061 1.4996 12.6061H15.2774C15.9694 12.6061 16.5299 12.0419 16.5299 11.3455V3.78182H0.24707ZM2.12586 5.04242H7.13596V5.67273H2.12586V5.04242Z"
                                  fill="#FFFEFF"/>
                        </svg>
                    </Link>
                    <Link href={'/user/walletuser'}
                          className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] my-[6px]'}>
                        <p className={'text-right text-white text-sm font-normal '}>کیف پول من</p>
                        <svg className={'ml-[24px]'} width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M11.7024 0C11.4196 0 11.0863 0.0567274 10.631 0.174545C9.48512 0.469818 2.76637 2.28655 2.66667 2.31564C1.66964 2.68218 1.03869 3.04291 0.642857 3.46764C1.10714 3.16073 1.66071 2.96727 2.28571 2.96727H12.9524V1.72218C12.9524 1.12 12.9479 0 11.7024 0ZM2.28571 3.712C0.869048 3.712 0 5.01382 0 5.94618V13.9055C0 15.0589 0.962798 16 2.14286 16H13.8571C15.0372 16 16 15.0589 16 13.9055V5.888C16 4.74909 14.9107 3.712 13.7143 3.712H2.28571ZM13.1429 8.92509C13.6682 8.92509 14.0952 9.34109 14.0952 9.856C14.0952 10.3709 13.6682 10.7869 13.1429 10.7869C12.6161 10.7869 12.1905 10.3709 12.1905 9.856C12.1905 9.34109 12.6161 8.92509 13.1429 8.92509Z"
                                  fill="#FFFEFF"/>
                        </svg>
                    </Link>
                    <Link href={'/user/reservehistory'}
                          className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] my-[6px]'}>
                        <p className={'text-right text-white text-sm font-normal '}>تاریخچه رزرو</p>
                        <svg className={'ml-[24px]'} width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M7.85953 0C3.53597 0 0.03125 3.52733 0.03125 7.87879C0.03125 12.2302 3.53597 15.7576 7.85953 15.7576C12.1831 15.7576 15.6878 12.2302 15.6878 7.87879C15.6878 3.52733 12.1831 0 7.85953 0ZM10.4374 11.5873L7.0767 8.20497V3.15152H8.64236V7.55261L11.5443 10.4733L10.4374 11.5873Z"
                                  fill="#FFFEFF"/>
                        </svg>
                    </Link>
                    <Link href={'/user/notifications'}
                          className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] my-[6px]'}>
                        <p className={'text-right text-white text-sm font-normal '}>اعلانات</p>
                        <svg className={'ml-[24px]'} width="15" height="16" viewBox="0 0 15 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M13.3159 12.6057H1.96649C1.49484 12.6057 1.06233 12.3666 0.809864 11.9656C0.557402 11.5645 0.526089 11.0694 0.726884 10.64L1.77 8.52766V6.05884C1.77 2.81318 4.22456 0.154874 7.35822 0.0063587C8.98298 -0.0677019 10.5208 0.507056 11.6931 1.63254C12.8666 2.75881 13.5124 4.27745 13.5124 5.90875V8.52766L14.5497 10.6285C14.7559 11.0694 14.725 11.5649 14.4726 11.966C14.2201 12.367 13.7876 12.6057 13.3159 12.6057ZM5.32796 13.3936C5.51505 14.5096 6.4795 15.3633 7.64121 15.3633C8.80293 15.3633 9.76698 14.5096 9.95447 13.3936H5.32796Z"
                                  fill="#FFFEFF"/>
                        </svg>
                    </Link>
                </div>
                <div className={'flex justify-center  '}>
                    <svg width="253" height="1" viewBox="0 0 253 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="252.854" y2="0.5" stroke="url(#paint0_linear_2169_1853)"/>
                        <defs>
                            <linearGradient id="paint0_linear_2169_1853" x1="126.427" y1="1.00064" x2="-0.0959282"
                                            y2="52.8036" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#44C0ED"/>
                                <stop offset="1" stopColor="#FF792C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    className={'cursor-pointer transition-transform hover:scale-110 flex justify-end items-center mr-[31px] mb-[64px] my-[12px]'}
                    onClick={() => {
                        localStorage.setItem('userToken', '')
                        localStorage.setItem('loginStatus', '')
                        window.location.assign('/')
                        Swal.fire({
                            title: "خارج شدید",
                            text: "موفقیت امیز بود",
                            icon: "success",
                            background: 'transparent',
                            color: '#EEEFEE',
                            confirmButtonColor: "#FF792C",
                            confirmButtonText: 'باشه',
                            backdrop: 'rgba(0,0,0,0.78)'
                        })
                    }}>
                    <p className={'text-right text-white text-sm font-normal '}>خروج از حساب کاربری</p>
                    <svg className={'ml-[24px]'} width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.07535 0C3.75179 0 0.24707 3.52733 0.24707 7.87879C0.24707 12.2302 3.75179 15.7576 8.07535 15.7576C12.3989 15.7576 15.9036 12.2302 15.9036 7.87879C15.9036 3.52733 12.3989 0 8.07535 0ZM11.9895 11.0303V8.66667H6.5097V7.09091H11.9895V4.72727L15.1208 7.87879L11.9895 11.0303Z"
                            fill="#FFFEFF"/>
                    </svg>
                </div>
            </div>
        </details>
    );
};

export default DropDownNavbar;