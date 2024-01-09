'use client'
import React, {useEffect} from 'react';
import axios from "axios";
import Image from "next/image";
import leftVector from "@/app/tariffs/components/data/leftVector.png";
import Swal from 'sweetalert2';
import Link from "next/link";
const LoginForBuy = ({orderData}: any) => {
   

    return (
        <div className={'flex  items-center lg:ml-[64px]'}>
            <Link href={`/buy/subscribtions?data=${orderData}`} >
                <div className={' lg:mr-[16px] mr-4'} >
                    <Image src={leftVector} alt={''}/>
                </div>
            </Link>
            <Link href={`/buy/subscribtions?data=${orderData}`} >
                <p className={'text-[#FFFFFF]  text-[16px]'}>ادامه فرایند خرید</p>
            </Link>
        </div>
    );
};

export default LoginForBuy;