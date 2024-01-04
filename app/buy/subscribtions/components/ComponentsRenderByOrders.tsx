'use client'
import React, {useState} from 'react';
import DailyCowork from "@/app/buy/subscribtions/components/DailyCowork";
import LongTermCowork from "@/app/buy/subscribtions/components/LongTermCowork";
import DailySession from "@/app/buy/subscribtions/components/DailySession";
import HourlySession from "@/app/buy/subscribtions/components/HourlySession";

const ComponentsRenderByOrders = ({orders}: any) => {
    return (
        <div className={'w-[65%] flex justify-center mx-auto'}>
            <div className={'w-[100%] h-[1128px] rounded-xl bg-[#0A2E65]'}>
                {orders.dailyCowork ? <DailyCowork/> : null}
                {orders.longTermCowork ? <LongTermCowork/> : null}
                {orders.dailySession ? <DailySession/> : null}
                {orders.hourlySession ? <HourlySession/> : null}
            </div>
        </div>
    );
};

export default ComponentsRenderByOrders;