'use client'
import React, {useEffect, useState} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import Section1HistoryReserve from "@/app/user/reservehistory/components/Section1HistoryReserve";
import Section2HistoryReserve from "@/app/user/reservehistory/components/Section2HistoryReserve";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ImMenu} from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";

const ReserveHistory = () => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState<any>()
    const [validate, setValidate] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
        handleFetch()
    }, []);
    const router = useRouter()
    const handleFetch = async () => {
        try {
            const token = localStorage?.getItem('userToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setData(response.data)
            if (response.status == 200) {
                setValidate(true)
            } else {
                setValidate(false)
            }
            // if (response.status===200) {
            //     Swal.fire({
            //         title: 'خوش آمدید',
            //         text: "وارد پنل خود شدید",
            //         icon: "success",
            //         background: '#002256',
            //         color: '#EEEFEE',
            //         confirmButtonColor: "#FF792C",
            //         confirmButtonText: 'باشه',
            //         backdrop: '#002256'
            //     })
            // }
        } catch (e) {
            console.log(e)
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
            {validate ?
                <div className={'bg-[#0A2E65] h-[2040px] '}>
                    <UserNavbar data={data}/>
                    <div className={'flex pt-14 lg:pt-[160px]'}>
                        <div data-aos={'fade-right'}
                             className={'lg:w-[79.3%] h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                            <Section1HistoryReserve/>
                            <Section2HistoryReserve/>
                        </div>
                        <button className={'absolute right-4'} onClick={() => setVisible(true)}><ImMenu
                            className={'mt-4 scale-150 text-white'}/></button>
                        <SideBarUser visible={visible} setVisible={setVisible}/>
                    </div>
                </div>
                :
                <LoadingMakeenLogo bg={'#002256'}/>
            }
        </div>
    );
};

// @ts-ignore
export default ReserveHistory;