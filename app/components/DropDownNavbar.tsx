'use client'
import React, {useEffect, useState} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import RegisterModalStep1 from "@/app/components/RegisterModalStep1";
import NavbarBuy from "@/app/buy/components/NavbarBuy";
import axios from "axios";
import Swal from "sweetalert2";

const DropDownNavbar = () => {
    const [userLoginStatus, setUserLoginStatus] = useState<any>()
    const [userRegisterStatus, setUserRegisterStatus] = useState<any>()
    const [exist, setExist] = useState<any>(false)
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
            console.log(response)
            setExist(true)
        } catch (e) {
            console.log(e)
            setExist(false)
        }
    }
    const statusLogin = {userLoginStatus, setUserLoginStatus}
    const statusRegister = {userRegisterStatus, setUserRegisterStatus}
    return (
        <div className=" w-[150px] ">
            <div
                className={' w-[100%]   h-[32px] bg-[#44C0ED]  rounded-xl'}>
                {exist ?
                    <NavbarBuy/>
                    :
                    <RegisterModalStep1 statusLogin={statusLogin} statusRegister={statusRegister}/>
                }
            </div>
        </div>
    );
};

export default DropDownNavbar;