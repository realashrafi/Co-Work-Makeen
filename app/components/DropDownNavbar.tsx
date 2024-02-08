'use client'
import React, {useEffect, useState} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import RegisterModalStep1 from "@/app/components/RegisterModalStep1";
import NavbarBuy from "@/app/buy/components/NavbarBuy";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import LoadingMinimal from "@/app/components/LoadingMinimal";

const DropDownNavbar = () => {
    const [userLoginStatus, setUserLoginStatus] = useState<any>()
    const [userRegisterStatus, setUserRegisterStatus] = useState<any>(0)
    const [exist, setExist] = useState<any>(false)
    const [validate, setValidate] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
        //     localStorage?.getItem('loginStatus')
        handleFetch()
    }, []);
    const handleFetch = async () => {
        const token = localStorage?.getItem('userToken');
        try {
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            //console.log(response)
            if (response.status == 200) {
                setValidate(false)
            } else {
                setValidate(true)
            }
            setExist(true)
            if (response.status==500){
                Swal.fire({
                    title: "خطا",
                    text: "خطای غیر منتظره ای رخ داده است لطفا بعدا دوباره امتحان کنید",
                    icon: "error",
                    background: 'transparent',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop:'rgba(0,0,0,0.78)'
                })
            }
        } catch (e) {
            //console.log(e)

            setValidate(true)
            setExist(false)
        }
    }
    const statusLogin = {userLoginStatus, setUserLoginStatus}
    const statusRegister = {userRegisterStatus, setUserRegisterStatus}

    return (
        <div className=" mt-2 w-[150px] ">
            <div
                className={' w-[150px]   h-[32px] bg-[#44C0ED]  rounded-xl'}>
                {exist ?
                    <NavbarBuy/>
                    :
                    validate ?
                        <RegisterModalStep1 statusLogin={statusLogin} statusRegister={statusRegister}/>
                        :
                        <LoadingMinimal/>
                }
            </div>
        </div>
    );
};

export default DropDownNavbar;