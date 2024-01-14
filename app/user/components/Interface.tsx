'use client'
import React, {useEffect, useState} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import userImage from './data/userImage.png'
import Image from "next/image";
import {ImMenu} from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";


const dataOfFav = [
    {
        id: 1,
        title: 'علوم انسانی',
    }, {
        id: 2,
        title: 'هوش مصنوعی',
    }, {
        id: 3,
        title: 'هنر',
    }, {
        id: 4,
        title: 'برنامه نویسی',
    }, {
        id: 5,
        title: 'آمار و داده کاوی',
    }, {
        id: 6,
        title: 'مهندسی نرم افزار',
    }, {
        id: 7,
        title: 'رباتیک',
    }, {
        id: 8,
        title: 'مدیریت',
    },
]

const UserInterface = ({data}: any) => {
    const [visible, setVisible] = useState(false)
    const [dob, setDob] = useState<any>()
    const [phone, setPhone] = useState<any>()
    const [last_name, setLast_name] = useState<any>()
    const [first_name, setFirst_name] = useState<any>()
    const [national_code, setNational_code] = useState<any>()
    const [gender, setGender] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [education, setEducation] = useState<any>()
    const [userID, setUserID] = useState<any>()
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
        // handleUseData()
        handleFetch()
    }, []);
// const handleUseData = ()=>{
//     setUserID(data?.id)
//     setFirst_name(data?.first_name)
//     setLast_name(data?.last_name)
//     setEmail(data?.email)
//     setNational_code(data?.national_code)
// }
    const handleFetch = async () => {
        const token = localStorage?.getItem('userToken');
        try {
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            console.log(response.data)
            setUserID(response.data.id)
            setGender(response.data.gender)
            setPhone(response.data.phone_number)
            setDob(response.data.dob.slice(0,10))
            setFirst_name(response.data.first_name)
            setLast_name(response.data.last_name)
            setEducation(response.data.education)
            setEmail(response.data.email)
            setNational_code(response.data.national_code)
        } catch (e) {
            console.log(e)
            // Swal.fire({
            //     title: "خطایی رخ داده",
            //     text: "لطفا وارد حساب کاربری خود شوید",
            //     icon: "warning",
            //     background: '#002256',
            //     color: '#EEEFEE',
            //     confirmButtonColor: "#FF792C",
            //     confirmButtonText: 'باشه',
            //     backdrop: '#002256'
            // })
            // router.push('/')
        }
    }
    const handleupdate = async (e: any) => {
        const token = localStorage?.getItem('userToken');
        e.preventDefault()

        try {
            const response = await axios.put(`https://www.cowork.v1r.ir/api/v1/user/${userID}`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                dob: dob,
                gender: gender,
                national_code: national_code,
                education: education,
                password: "12345678",
                password_confirmation: "12345678",
                current_password: "12345678"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            if (response.status==200){
                Swal.fire({
                    title: "انجام شد",
                    text: "حالا میتوانید خرید کنید",
                    icon: "success",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: '#002256'
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className={'bg-[#0A2E65] w-[100%] h-[2040px]'}>
            <UserNavbar data={data}/>
            <div className={'flex pt-[160px]'}>
                <div data-aos={'fade-right'}
                     className={'lg:w-[79.3%] w-[100%] h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                    <div className={'flex mt-[28px] mr-[50px]  justify-end items-center'}>
                        <div className={'relative cursor-pointer'}>
                            <div className={'absolute bottom-0'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 665">
                                        <rect id="Rectangle 742" width="24" height="24" rx="5" fill="#F5F4F4"/>
                                        <path id="Vector"
                                              d="M17.1688 5C16.9668 5 16.7646 5.07695 16.6106 5.23129L15.263 6.57895L18.4209 9.73684L19.7685 8.38919C20.0772 8.0805 20.0772 7.58072 19.7685 7.27282L17.727 5.23129C17.5727 5.07695 17.3708 5 17.1688 5ZM14.0788 7.76316L5 16.8421V20H8.15785L17.2367 10.9211L14.0788 7.76316Z"
                                              fill="#FF792C"/>
                                    </g>
                                </svg>
                            </div>
                            <Image src={userImage} alt={''}/>
                        </div>
                    </div>
                    <div className={'h-[32px] mt-[37px] items-center mr-[27px] flex'} style={{direction: "rtl"}}>
                        <svg width="32" className={'ml-[17px]'} height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.78947 0C1.70021 0 0 1.53829 0 3.42857V27.0476C0 28.9379 1.70021 30.4762 3.78947 30.4762H18.4391C17.9583 29.7859 17.6842 29.0141 17.6842 28.1905H3.78947C3.09305 28.1905 2.52632 27.6777 2.52632 27.0476V3.42857C2.52632 2.79848 3.09305 2.28571 3.78947 2.28571H13.4737V8.7619C13.4737 10.6522 15.1739 12.1905 17.2632 12.1905H24.4211V14.6146C24.8269 14.527 25.2488 14.4762 25.6842 14.4762C26.1196 14.4762 26.5415 14.527 26.9474 14.6146V11.0476C26.9474 10.7322 26.8058 10.4464 26.5773 10.2396L15.6299 0.334821C15.4014 0.127964 15.0859 0 14.7368 0H3.78947ZM16 3.90179L22.6349 9.90476H17.2632C16.5667 9.90476 16 9.392 16 8.7619V3.90179ZM25.6842 16C23.5949 16 21.8947 17.5383 21.8947 19.4286C21.8947 21.3189 23.5949 22.8571 25.6842 22.8571C27.7735 22.8571 29.4737 21.3189 29.4737 19.4286C29.4737 17.5383 27.7735 16 25.6842 16ZM21.8947 24.381C20.4994 24.381 19.3684 25.4042 19.3684 26.6667V28.1905C19.3684 30.2941 22.1962 32 25.6842 32C29.1722 32 32 30.2941 32 28.1905V26.6667C32 25.4042 30.8691 24.381 29.4737 24.381H21.8947Z"
                                fill="#FFFEFF"/>
                        </svg>
                        <p className={'text-[#FFFEFF] text-[18px] font-[500]'}>اطلاعات فردی</p>
                    </div>
                    <div
                        className={'w-[96.7%] mt-[25px] lg:h-[352px]   rounded-[12px]  border-[#0A2E65] border-[1px] mx-auto'}>
                        <div className={'flex  lg:flex-nowrap justify-center flex-wrap'}>
                            <div className={'ml-[1.3%] mr-[2.16%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>تاریخ تولد</p>
                                <input value={dob} onChange={(e) => setDob(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'تاریخ تولد'}/>
                            </div>
                            <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>شماره موبایل</p>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'شماره موبایل'}/>
                            </div>
                            <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>نام ونام خانوادگی</p>
                                <input value={last_name} onChange={(e) => setLast_name(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'نام ونام خانوادگی'}/>
                            </div>
                            <div className={'  mr-[1.3%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>نام</p>
                                <input value={first_name} onChange={(e) => setFirst_name(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'نام'}/>
                            </div>
                        </div>
                        <div className={'flex lg:justify-end mt-[39px] lg:flex-nowrap justify-center flex-wrap'}>

                            <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>کد ملی</p>
                                <input value={national_code} onChange={(e) => setNational_code(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'کد ملی'}/>
                            </div>
                            <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>انتخاب جنسیت</p>
                                <select value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px]'}
                                        placeholder={'انتخاب جنسیت'} style={{direction: "rtl"}}>
                                    <option value="notintrested">انتخاب جنسیت</option>
                                    <option value="unknown">نامشخص</option>
                                    <option value="male">مرد</option>
                                    <option value="female">زن</option>
                                </select>
                            </div>
                            <div className={'  mr-[1.3%] lg:w-[22.7%]'}>
                                <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                                   style={{direction: "rtl"}}>ایمیل</p>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}
                                       className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                       placeholder={'ایمیل'}/>
                            </div>

                        </div>
                        <div className={' lg:mr-[1.3%] w-[50%] mx-auto pb-4 lg:pb-0 lg:w-[22.7%]'}>
                            <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                               style={{direction: "rtl"}}>مدرک تحصیلی</p>
                            <select value={education} onChange={(e) => setEducation(e.target.value)}
                                    className={'w-[100%]  h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px]'}
                                    placeholder={'انتخاب جنسیت'} style={{direction: "rtl"}}>
                                <option value="notintrested">انتخاب مدرک</option>
                                <option value="دکتری">دکتری</option>
                                <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                                <option value="کار دانی">کار دانی</option>
                                <option value="دیپلم">دیپلم</option>
                                <option value="بی سواد">بی سواد</option>
                            </select>

                        </div>
                    </div>
                    <div className={'h-[32px] mt-[37px] items-center mr-[27px] flex'} style={{direction: "rtl"}}>
                        <svg width="32" className={'ml-[17px]'} height="32" viewBox="0 0 20 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M10 0C6.32812 0 3.33333 3.31731 3.33333 7.38462V9.23077H2.5C1.1263 9.23077 0 10.4784 0 12V21.2308C0 22.7524 1.1263 24 2.5 24H17.5C18.8737 24 20 22.7524 20 21.2308V12C20 10.4784 18.8737 9.23077 17.5 9.23077H16.6667V7.38462C16.6667 3.31731 13.6719 0 10 0ZM10 1.84615C12.7734 1.84615 15 4.3125 15 7.38462V9.23077H5V7.38462C5 4.3125 7.22656 1.84615 10 1.84615ZM2.5 11.0769H17.5C17.9688 11.0769 18.3333 11.4808 18.3333 12V21.2308C18.3333 21.75 17.9688 22.1538 17.5 22.1538H2.5C2.03125 22.1538 1.66667 21.75 1.66667 21.2308V12C1.66667 11.4808 2.03125 11.0769 2.5 11.0769Z"
                                  fill="white"/>
                        </svg>
                        <p className={'text-[#FFFEFF] text-[18px] font-[500]'}>اطلاعات ورود به حساب</p>
                    </div>
                    <div
                        className={'w-[96.7%] flex justify-end  pt-[10px] mt-[25px] h-[138px]   rounded-[12px]  border-[#0A2E65] border-[1px] mx-auto'}>
                        <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                            <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                               style={{direction: "rtl"}}>رمز عبور</p>
                            <input
                                className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                placeholder={'رمز عبور'}/>
                        </div>
                        <div className={' mr-[2.16%] lg:w-[22.7%]'}>
                            <p className={'font-[400] my-[10px] text-[#FFFFFF] text-[14px] mr-[10px]'}
                               style={{direction: "rtl"}}>نام کاربری</p>
                            <input value={data?.username}
                                   className={'w-[100%] h-[40px] bg-[#0A2E65] rounded-[12px] text-center font-[400] text-[#FFFFFF] text-[14px] '}
                                   placeholder={'نام کاربری'}/>
                        </div>
                    </div>
                    <div className={'h-[32px] mt-[56px] items-center mr-[27px] flex'} style={{direction: "rtl"}}>
                        <svg width="32" className={'ml-[17px]'} height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.77778 0C2.592 0 0 2.2759 0 5.07317V28.4878C0 28.9272 0.280361 29.3307 0.725694 29.5305C1.17103 29.7303 1.70662 29.6951 2.11285 29.4375L10.7014 24.0076C10.6881 23.8102 10.6667 23.6152 10.6667 23.4146C10.6667 22.5491 10.8053 21.7132 11.0382 20.9101L2.66667 26.2027V5.07317C2.66667 3.56683 4.06222 2.34146 5.77778 2.34146H19.1111C20.8267 2.34146 22.2222 3.56683 22.2222 5.07317V13.2683C23.1413 13.2683 24.0311 13.3731 24.8889 13.5518V5.07317C24.8889 2.2759 22.2969 0 19.1111 0H5.77778ZM22.2222 14.8293C16.8222 14.8293 12.4444 18.6732 12.4444 23.4146C12.4444 28.1561 16.8222 32 22.2222 32C27.6222 32 32 28.1561 32 23.4146C32 18.6732 27.6222 14.8293 22.2222 14.8293ZM22.2222 17.9512C22.6489 17.9512 23.0297 18.1899 23.1684 18.5442L24.158 21.0732H27.4444C27.8738 21.0732 28.2555 21.314 28.3924 21.6707C28.5293 22.0282 28.3908 22.423 28.0486 22.6509L25.3872 24.4238L26.2882 26.9573C26.418 27.321 26.2652 27.7159 25.9115 27.936C25.7381 28.0437 25.5351 28.0976 25.3333 28.0976C25.1227 28.0976 24.9113 28.0393 24.7344 27.9223L22.2222 26.2713L19.7101 27.9223C19.3634 28.1509 18.8877 28.1576 18.533 27.9375C18.1792 27.7174 18.0265 27.321 18.1562 26.9573L19.0573 24.4253L16.3958 22.6509C16.0536 22.423 15.9152 22.0297 16.0521 21.6723C16.1899 21.3148 16.5707 21.0732 17 21.0732H20.2865L21.276 18.5442C21.4147 18.1899 21.7956 17.9512 22.2222 17.9512Z"
                                fill="#FFFEFF"/>
                        </svg>
                        <p className={'text-[#FFFEFF] text-[18px] font-[500]'}>علاقه مندی ها</p>
                    </div>
                    <div
                        className={'lg:w-[96.7%] mt-[25px] lg:h-[256px]  w-[90%]  rounded-[12px]  border-[#0A2E65] border-[1px] mx-auto'}>
                        <div className={'flex justify-end text-[#FFFEFF] text-[18px] font-[500] pr-[24px] pt-[24px]'}>
                            انتخاب دسته بندی مورد علاقه شما
                        </div>
                        <div className={'mx-[1.35%] mt-[16px] flex  justify-center lg:flex-nowrap flex-wrap '}>
                            {dataOfFav.slice(0, 4).map(item => (
                                <button key={item.id}
                                        className={' m-1 lg:w-[22.7%] w-[40%] lg:mx-[12px] focus:bg-[#FF792C] after:bg-[#FF792C] h-[48px] bg-[#0A2E65] rounded-[30px]  '}>
                                    <div
                                        className={'flex justify-between text-[#FFFFFF] text-[14px] font-[400] mr-[24px] my-[12px] '}>
                                        <svg width="24" className={'ml-[24px]'} height="24" viewBox="0 0 24 24"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 0C5.38324 0 0 5.38324 0 12C0 18.6168 5.38324 24 12 24C18.6168 24 24 18.6168 24 12C24 5.38324 18.6168 0 12 0ZM12 1.8C17.644 1.8 22.2 6.35603 22.2 12C22.2 17.644 17.644 22.2 12 22.2C6.35603 22.2 1.8 17.644 1.8 12C1.8 6.35603 6.35603 1.8 12 1.8ZM11.9859 5.98711C11.7474 5.99084 11.5202 6.08907 11.3541 6.26024C11.188 6.4314 11.0966 6.66151 11.1 6.9V11.1H6.9C6.78074 11.0983 6.66233 11.1203 6.55166 11.1648C6.44099 11.2093 6.34026 11.2753 6.25533 11.3591C6.1704 11.4428 6.10295 11.5426 6.05692 11.6526C6.01089 11.7626 5.98718 11.8807 5.98718 12C5.98718 12.1193 6.01089 12.2374 6.05692 12.3474C6.10295 12.4574 6.1704 12.5572 6.25533 12.6409C6.34026 12.7247 6.44099 12.7907 6.55166 12.8352C6.66233 12.8797 6.78074 12.9017 6.9 12.9H11.1V17.1C11.0983 17.2193 11.1203 17.3377 11.1648 17.4483C11.2093 17.559 11.2753 17.6597 11.3591 17.7447C11.4428 17.8296 11.5426 17.897 11.6526 17.9431C11.7626 17.9891 11.8807 18.0128 12 18.0128C12.1193 18.0128 12.2374 17.9891 12.3474 17.9431C12.4574 17.897 12.5572 17.8296 12.6409 17.7447C12.7247 17.6597 12.7907 17.559 12.8352 17.4483C12.8797 17.3377 12.9017 17.2193 12.9 17.1V12.9H17.1C17.2193 12.9017 17.3377 12.8797 17.4483 12.8352C17.559 12.7907 17.6597 12.7247 17.7447 12.6409C17.8296 12.5572 17.897 12.4574 17.9431 12.3474C17.9891 12.2374 18.0128 12.1193 18.0128 12C18.0128 11.8807 17.9891 11.7626 17.9431 11.6526C17.897 11.5426 17.8296 11.4428 17.7447 11.3591C17.6597 11.2753 17.559 11.2093 17.4483 11.1648C17.3377 11.1203 17.2193 11.0983 17.1 11.1H12.9V6.9C12.9017 6.77954 12.8793 6.65996 12.8339 6.54835C12.7886 6.43673 12.7213 6.33535 12.6361 6.25022C12.5508 6.16509 12.4493 6.09794 12.3377 6.05274C12.226 6.00754 12.1064 5.98523 11.9859 5.98711Z"
                                                fill="#FFFEFF"/>
                                        </svg>
                                        {item.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className={'mx-[1.35%] mt-[26px] flex justify-center lg:flex-nowrap flex-wrap  '}>
                            {dataOfFav.slice(4, 8).map(item => (
                                <button key={item.id}
                                        className={'m-1 lg:w-[22.7%] w-[40%]  lg:mx-[12px] h-[48px] bg-[#0A2E65] focus:bg-[#FF792C] rounded-[30px]  '}>
                                    <div
                                        className={'flex justify-between text-[#FFFFFF] text-[14px] font-[400] mr-[24px] my-[12px] '}>
                                        <svg width="24" className={'ml-[24px]'} height="24" viewBox="0 0 24 24"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 0C5.38324 0 0 5.38324 0 12C0 18.6168 5.38324 24 12 24C18.6168 24 24 18.6168 24 12C24 5.38324 18.6168 0 12 0ZM12 1.8C17.644 1.8 22.2 6.35603 22.2 12C22.2 17.644 17.644 22.2 12 22.2C6.35603 22.2 1.8 17.644 1.8 12C1.8 6.35603 6.35603 1.8 12 1.8ZM11.9859 5.98711C11.7474 5.99084 11.5202 6.08907 11.3541 6.26024C11.188 6.4314 11.0966 6.66151 11.1 6.9V11.1H6.9C6.78074 11.0983 6.66233 11.1203 6.55166 11.1648C6.44099 11.2093 6.34026 11.2753 6.25533 11.3591C6.1704 11.4428 6.10295 11.5426 6.05692 11.6526C6.01089 11.7626 5.98718 11.8807 5.98718 12C5.98718 12.1193 6.01089 12.2374 6.05692 12.3474C6.10295 12.4574 6.1704 12.5572 6.25533 12.6409C6.34026 12.7247 6.44099 12.7907 6.55166 12.8352C6.66233 12.8797 6.78074 12.9017 6.9 12.9H11.1V17.1C11.0983 17.2193 11.1203 17.3377 11.1648 17.4483C11.2093 17.559 11.2753 17.6597 11.3591 17.7447C11.4428 17.8296 11.5426 17.897 11.6526 17.9431C11.7626 17.9891 11.8807 18.0128 12 18.0128C12.1193 18.0128 12.2374 17.9891 12.3474 17.9431C12.4574 17.897 12.5572 17.8296 12.6409 17.7447C12.7247 17.6597 12.7907 17.559 12.8352 17.4483C12.8797 17.3377 12.9017 17.2193 12.9 17.1V12.9H17.1C17.2193 12.9017 17.3377 12.8797 17.4483 12.8352C17.559 12.7907 17.6597 12.7247 17.7447 12.6409C17.8296 12.5572 17.897 12.4574 17.9431 12.3474C17.9891 12.2374 18.0128 12.1193 18.0128 12C18.0128 11.8807 17.9891 11.7626 17.9431 11.6526C17.897 11.5426 17.8296 11.4428 17.7447 11.3591C17.6597 11.2753 17.559 11.2093 17.4483 11.1648C17.3377 11.1203 17.2193 11.0983 17.1 11.1H12.9V6.9C12.9017 6.77954 12.8793 6.65996 12.8339 6.54835C12.7886 6.43673 12.7213 6.33535 12.6361 6.25022C12.5508 6.16509 12.4493 6.09794 12.3377 6.05274C12.226 6.00754 12.1064 5.98523 11.9859 5.98711Z"
                                                fill="#FFFEFF"/>
                                        </svg>
                                        {item.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={'flex mt-[58px] items-center ml-[5.6%]'}>
                        <Link className={'w-[16.9%]'} href={''} onClick={handleupdate}>
                            <div
                                className={'w-[100%] text-[#FFFEFF] text-[16px] font-[400] bg-[#44C0ED] justify-center h-[48px] flex items-center text-center rounded-[12px]'}>
                                اعمال تغییرات
                            </div>
                        </Link>
                        <div className={'text-[#FFFEFF] ml-[5.6%] text-[16px] font-[400]'}>
                            انصراف
                        </div>
                    </div>
                </div>
                <button className={'absolute right-4'} onClick={() => setVisible(true)}><ImMenu
                    className={'mt-4 scale-150 text-white'}/></button>
                <SideBarUser visible={visible} setVisible={setVisible}/>
            </div>
        </div>
    );
};

export default UserInterface;