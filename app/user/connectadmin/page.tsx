'use client'
import React, {useEffect} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import IconConnectAdmin from "@/app/user/connectadmin/data/IconConnectAdmin";
import Link from "next/link";
import ModalConnectAdmin from "@/app/user/connectadmin/components/ModalConnectAdmin";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
const ConnectAdmin = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    return (
        <div className={'bg-[#0A2E65] h-[2040px] '}>
            <UserNavbar/>
            <div className={'flex pt-[160px]'}>
                <div data-aos={'fade-right'} className={'w-[79.3%] flex-col h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                    <div className={'flex mt-[40px] mr-[24px]'} style={{direction: "rtl"}}>
                        <div className={'text-[#FFFEFF] text-[16px] font-[400] '}>
                            برای ارتباط با پشتیبانی اینجا کلیک کنید
                        </div>
                       <ModalConnectAdmin/>
                    </div>
                    <p className={'text-[#FFFEFF] text-[16px] font-[400] text-center mt-[150px]'}>
                        ! هیچ نتیجه ای یافت نشد
                    </p>
                    <IconConnectAdmin/>
                </div>
                <SideBarUser/>
            </div>
        </div>
    );
};

export default ConnectAdmin;