'use client'
import React, {useEffect, useState} from 'react';
import NavbarLinks from "@/app/components/NavbarLinks";
import Link from 'next/link';
import Image from "next/image";
import iconNavbar from "@/public/images/logo-makeen 8.png";
import SidebarBuy from '../components/SidebarBuy';
import ComponentsRenderByOrders from "@/app/buy/subscribtions/components/ComponentsRenderByOrders";
import HeaderBuy from "@/app/buy/components/HeaderBuy";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import DropDownNavbar from "@/app/components/DropDownNavbar";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";

const Page = () => {
    const router = useRouter()
    const getData = useSearchParams()
    const orderData = getData.get('data')
    const [order, setOrder] = useState(Number(orderData))
    const [me, setMe] = useState<any>()
    const [validate, setValidate] = useState(false)

    if (order !== 1 && order !== 2 && order !== 3 && order !== 4){
        router.push('/404')
    }
    useEffect(() => {
        //@ts-ignore
        handleFetch()
    }, []);
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
            if (response.status == 200) {
                setValidate(true)
            } else {
                setValidate(false)
            }
            if (response.data.national_code === null) {
                Swal.fire({
                    title: 'تکمیل اطلاعات',
                    text: "لطفا اطلاعات حساب کاربری خود را تکمیل کنید",
                    icon: "warning",
                    background: 'transparent',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: 'rgba(0,0,0,0.78)'
                })
                router.push('/buy')
            }
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
        <div>
            {validate ? <div className={'bg-[#0A2E65] pb-[64px]'}>
                    <div className={'flex px-3 lg:px-0 lg:justify-between w-full lg:pl-[7.6%] pt-[35px]'}>
                        {/*<NavbarBuy/>*/}
                        <DropDownNavbar/>
                        <NavbarLinks/>
                        <Link className={'lg:mr-[8%] '} href={'/'}>
                            <Image src={iconNavbar} alt={'iconNavbar'}/>
                        </Link>
                    </div>
                    <div className={'w-[94.8%] h-[1768px] rounded-xl bg-[#002256] mx-auto mt-[15px] flex flex-col '}>
                        <HeaderBuy/>
                        <div className="w-[90.9%] mx-auto h-[0px] border-2 border-[#0A2E65] mt-[24px]"></div>
                        <div className={'flex justify-end flex-wrap-reverse lg:flex-nowrap pt-[43px]'}>
                            <ComponentsRenderByOrders order={order}/>
                            <SidebarBuy/>
                        </div>
                    </div>
                </div>
                :
                <LoadingMakeenLogo bg={'#002256'}/>}
        </div>
    );
};

export default Page;