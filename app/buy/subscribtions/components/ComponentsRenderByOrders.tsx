'use client'
import React, {useEffect} from 'react';
import DailyCowork from "@/app/buy/subscribtions/components/DailyCowork";
import LongTermCowork from "@/app/buy/subscribtions/components/LongTermCowork";
import DailySession from "@/app/buy/subscribtions/components/DailySession";
import HourlySession from "@/app/buy/subscribtions/components/HourlySession";
import axios from "axios";
import Swal from "sweetalert2";

const ComponentsRenderByOrders = ({order}: any) => {

    return (
        <div className={'w-[65%] flex justify-center mx-auto'}>
            <div className={'w-[100%] h-[1128px] rounded-xl bg-[#0A2E65]'}>
                {order === 1 ? <DailyCowork/> : null}
                {order === 2 ? <LongTermCowork/> : null}
                {order === 3 ? <DailySession/> : null}
                {order === 4 ? <HourlySession/> : null}
            </div>
        </div>
    );
};

export default ComponentsRenderByOrders;