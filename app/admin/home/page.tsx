'use client'
import React, {useEffect, useState} from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import Section1HomeAdmin from "@/app/admin/home/components/Section1HomeAdmin";
import Section2HomeAdmin from "@/app/admin/home/components/Section2HomeAdmin";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import LoadingAdmin from "@/app/components/LoadingAdmin";

const Home = () => {
    const [protect, setProtect] = useState(false)
    useEffect(() => {
handleProtect()
    }, []);
    const router= useRouter()
    const handleProtect = async () => {

        try {
            const token = localStorage?.getItem('adminToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            // setData(response.data)
            if (response.status == 200) {
                setProtect(true)
            } else {
                setProtect(false)
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
                text: "شما ادمین نیستید",
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
        <div className={'bg-[#F8F9FC] flex'}>
            {protect ?
                <div className={'flex w-[100%]'}>
                <div className={' flex flex-col w-[100%] lg:w-[81.25%]'}>
                    <NavbarAdminPanel/>
                    <div className={'w-[100%] h-[846px]'}>
                        <Section1HomeAdmin/>
                        <Section2HomeAdmin/>
                    </div>
                </div>
                <SideBarAdminPanel/>
                </div>
            :
            <LoadingAdmin/>
            }
        </div>
    );
};

export default Home;