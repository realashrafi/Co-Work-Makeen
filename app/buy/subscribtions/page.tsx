'use client'
import React, {useState} from 'react';
import NavbarBuy from '../components/NavbarBuy';
import NavbarLinks from "@/app/components/NavbarLinks";
import Link from 'next/link';
import Image from "next/image";
import iconNavbar from "@/public/images/logo-makeen 8.png";
import SidebarBuy from '../components/SidebarBuy';
import ComponentsRenderByOrders from "@/app/buy/subscribtions/components/ComponentsRenderByOrders";
import HeaderBuy from "@/app/buy/components/HeaderBuy";
const Page = () => {
    const [dailyCowork, setDailyCowork] = useState(false)
    const [longTermCowork, setLongTermCowork] = useState(true)
    const [dailySession, setDailySession] = useState(false)
    const [hourlySession, setHourlySession] = useState(false)
    const orders:any={dailyCowork,longTermCowork,dailySession,hourlySession}
    return (
        <div className={'bg-[#0A2E65] pb-[64px]'}>
            <div className={'flex justify-between w-full pt-[35px]'}>
                <NavbarBuy/>
                <NavbarLinks/>
                <Link className={'mr-[8%] '} href={'/'}>
                    <Image src={iconNavbar} alt={'iconNavbar'}/>
                </Link>
            </div>
            <div className={'w-[94.8%] h-[1768px] rounded-xl bg-[#002256] mx-auto mt-[15px] flex flex-col '}>
                <HeaderBuy/>
                <div className="w-[90.9%] mx-auto h-[0px] border-2 border-[#0A2E65] mt-[24px]"></div>
                <div className={'flex justify-end pt-[43px]'}>
                    <ComponentsRenderByOrders orders={orders}/>
                    <SidebarBuy/>
                </div>
            </div>
        </div>
    );
};

export default Page;