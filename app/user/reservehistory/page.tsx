'use client'
import React, {useEffect} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import Section1HistoryReserve from "@/app/user/reservehistory/components/Section1HistoryReserve";
import Section2HistoryReserve from "@/app/user/reservehistory/components/Section2HistoryReserve";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
const ReserveHistory = () => {
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
                <div data-aos={'fade-right'} className={'w-[79.3%] h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                    <Section1HistoryReserve/>
                   <Section2HistoryReserve/>
                </div>
                <SideBarUser/>
            </div>
        </div>
    );
};

// @ts-ignore
export default ReserveHistory;