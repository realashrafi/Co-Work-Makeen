import React from 'react';
import DropDownNavbar from "@/app/components/DropDownNavbar";
import NavbarLinks from "@/app/components/NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import iconNavbar from "@/public/images/logo-makeen 8.png";
import NavbarBuy from "@/app/buy/components/NavbarBuy";
import SidebarBuy from "@/app/buy/components/SidebarBuy";
import CompleteInformation from "@/app/buy/components/CompleteInformation";
import HeaderBuy from './components/HeaderBuy';

const Page = () => {
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
                    <CompleteInformation />
                    <SidebarBuy />
                </div>
            </div>
        </div>
    );
};

export default Page;