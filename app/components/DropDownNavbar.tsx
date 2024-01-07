'use client'
import React, {useEffect, useState} from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import RegisterModalStep1 from "@/app/components/RegisterModalStep1";
import NavbarBuy from "@/app/buy/components/NavbarBuy";

const DropDownNavbar = ({data}:any) => {
    const [userLoginStatus, setUserLoginStatus] = useState<any>()
    const [userRegisterStatus, setUserRegisterStatus] = useState<any>()
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    const exist:any= localStorage.getItem('loginStatus')
    const statusLogin = {userLoginStatus, setUserLoginStatus}
    const statusRegister = {userRegisterStatus, setUserRegisterStatus}
    return (
        <div className=" w-[150px] ">
            <div
                className={' w-[100%]   h-[32px] bg-[#44C0ED]  rounded-xl'}>
                {exist == 200 ?
                    <NavbarBuy  />
                    :
                    <RegisterModalStep1 statusLogin={statusLogin} statusRegister={statusRegister}/>
                }
            </div>
        </div>
    );
};

export default DropDownNavbar;