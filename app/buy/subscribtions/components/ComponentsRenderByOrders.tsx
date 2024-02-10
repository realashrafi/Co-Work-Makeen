'use client'
import React, {useEffect} from 'react';
import DailyCowork from "@/app/buy/subscribtions/components/DailyCowork";
import LongTermCowork from "@/app/buy/subscribtions/components/LongTermCowork";
import DailySession from "@/app/buy/subscribtions/components/DailySession";
import HourlySession from "@/app/buy/subscribtions/components/HourlySession";
import {useRouter} from "next/navigation";
import AOS from "aos";


const ComponentsRenderByOrders = ({order}: any) => {
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    return (
        <div data-aos={'fade-up'} className={'lg:w-[65%] w-[100%] flex justify-center mx-auto'}>
            <div className={'w-[100%] h-[1128px] rounded-xl bg-[#0A2E65]'}>
                {order === 1 && <DailyCowork/>}
                {order === 2 && <LongTermCowork/>}
                {order === 3 && <DailySession/>}
                {order === 4 && <HourlySession/>}
            </div>
        </div>
    );
};

export default ComponentsRenderByOrders;