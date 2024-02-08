'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";

const HeaderBuy = () => {
    const [me, setMe] = useState<any>()
    useEffect(() => {
        handleFetch()
    }, []);
    const router=useRouter()
    const handleFetch = async () => {
        try {
            const token = localStorage?.getItem('userToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setMe(response.data)
            // if (response.data.user.national_code === null) {
            //     Swal.fire({
            //         title: 'تکمیل اطلاعات',
            //         text: "لطفا اطلاعات حساب کاربری خود را تکمیل کنید",
            //         icon: "warning",
            //         background: '#002256',
            //         color: '#EEEFEE',
            //         confirmButtonColor: "#FF792C",
            //         confirmButtonText: 'باشه',
            //         backdrop: '#002256'
            //     })
            //     router.push('/buy')
            // }
        } catch (e) {
            //console.log(e)
            Swal.fire({
                title: "خطایی رخ داده",
                text: "لطفا وارد حساب کاربری خود شوید",
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
            router.push('/')
        }
    }
    return (
        <div className={'flex justify-end pr-[4.7%] pt-[38px]'}>
            <div
                className={'text-white text-base font-normal flex items-center border-r-[2px] border-[#FF792C] h-[28px] pr-[12px]'}>
                {me?.first_name} {me?.last_name}
            </div>
        </div>
    );
};

export default HeaderBuy;