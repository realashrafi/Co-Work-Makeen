'use client'
import React from 'react';
import DailyCowork from "@/app/buy/subscribtions/components/DailyCowork";
import LongTermCowork from "@/app/buy/subscribtions/components/LongTermCowork";
import DailySession from "@/app/buy/subscribtions/components/DailySession";
import HourlySession from "@/app/buy/subscribtions/components/HourlySession";
import {useRouter} from "next/navigation";


const ComponentsRenderByOrders = ({order}: any) => {
    return (
        <div className={'lg:w-[65%] w-[100%] flex justify-center mx-auto'}>
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