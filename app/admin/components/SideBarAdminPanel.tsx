'use client'
import React from 'react';
import Image from "next/image";
import LogoMakeen from '../components/data/logoMakeen.png'
import Link from "next/link";
import {IoDocumentTextOutline} from "react-icons/io5";
import {IoChatboxSharp} from "react-icons/io5";
import {IoHome} from "react-icons/io5";
import {FaUserGroup} from "react-icons/fa6";
import {FaBell} from "react-icons/fa";
import {IoIosListBox} from "react-icons/io";
import {GrWorkshop} from "react-icons/gr";
import {MdOutlineSettingsApplications} from "react-icons/md";
import {HiOutlineNewspaper} from "react-icons/hi2";
import {GiExitDoor} from "react-icons/gi";
import {usePathname} from "next/navigation";

const SideBarAdminPanel = () => {
    const pathName=usePathname()
    return (
        <div className={'lg:flex hidden fixed  right-0 rounded-l-[12px] w-[18.75%] flex-col h-[1721px] bg-[#0C1E41]'}>
            <div className={'w-[95%] mx-auto flex justify-center items-center pt-[39px] pb-[18px]'}>
                <Link href={'/'}>
                    <Image src={LogoMakeen} alt={''}/>
                </Link>
            </div>
            <div className={'w-[95%] mb-[18px] mx-auto'}>
                <svg width="100%" height="2" viewBox="0 0 243 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector 10" d="M0 1L243 1.00394" stroke="url(#paint0_linear_645_3129)"/>
                    <defs>
                        <linearGradient id="paint0_linear_645_3129" x1="0" y1="1" x2="240.656" y2="1.0039"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E0E1E2" stopOpacity="0"/>
                            <stop offset="0.5" stopColor="#E0E1E2"/>
                            <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={''}>
                <Link
                    className={`${pathName==='/admin/home'? 'bg-[#2B345E]':''} group  my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                    href={'/admin/home'} dir={'rtl'}>
                    <div
                        className={`${pathName==='/admin/home'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                        <IoHome className={'text-white w-[15px] h-[15px]'}/>
                    </div>
                    <p className={'text-white text-sm font-normal'}>خانه</p>
                </Link> <Link
                className={`${pathName==='/admin/userlist'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/userlist'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/userlist'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <FaUserGroup className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>لیست کاربران</p>
            </Link> <Link
                className={`${pathName==='/admin/settingreserve'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/settingreserve'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/settingreserve'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <MdOutlineSettingsApplications className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>تنظیمات رزرو</p>
            </Link> <Link
                className={`${pathName==='/admin/reservelist'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/reservelist'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/reservelist'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <IoIosListBox className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>لیست رزرو شده ها</p>
            </Link> <Link
                className={`${pathName==='/admin/makenotification'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/makenotification'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/makenotification'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <FaBell className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>ایجاد اعلانات برای کاربران</p>
            </Link> <Link
                className={`${pathName==='/admin/workshops'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/workshops'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/workshops'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <GrWorkshop className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>ورکشاپ ها</p>
            </Link> <Link
                className={`${pathName==='/admin/blogs'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/blogs'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/blogs'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <IoDocumentTextOutline className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>مقالات</p>
            </Link> <Link
                className={`${pathName==='/admin/news'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/news'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/news'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'}  mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <HiOutlineNewspaper className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>اخبار کوورک</p>
            </Link> <Link
                className={`${pathName==='/admin/support'? 'bg-[#2B345E]':''} group my-[4px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin/support'} dir={'rtl'}>
                <div
                    className={`${pathName==='/admin/support'? 'bg-[#0075FF] border-r-[2px] border-t-0 border-l-0 border-b-[2px] border-orange-500':'bg-[#1D2652]'} mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#0075FF] h-[30px]`}>
                    <IoChatboxSharp className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>ارتباط با پشتیبانی</p>
            </Link> <Link
                className={` group mt-[70px] mx-auto flex items-center hover:bg-[#2B345E] w-[220px] h-[50px] rounded-[15px]`}
                href={'/admin'} dir={'rtl'}>
                <div
                    className={'bg-[#1D2652] mx-[10px] flex justify-center items-center rounded-xl w-[30px] group-hover:bg-[#FF792C] h-[30px]'}>
                    <GiExitDoor className={'text-white w-[15px] h-[15px]'}/>
                </div>
                <p className={'text-white text-sm font-normal'}>خروج از حساب کاربری</p>
            </Link>
            </div>
        </div>
    );
};

export default SideBarAdminPanel;