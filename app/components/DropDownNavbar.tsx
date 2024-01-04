'use client'
import React, {useEffect} from 'react';
import {FaAngleDown} from "react-icons/fa6";
import {IoPersonOutline} from "react-icons/io5";
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import RegisterModalStep1 from "@/app/components/RegisterModalStep1";

const DropDownNavbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, []);
    return (
        <div className=" w-[10%] ml-[7.6%]">
            <div
                className={' w-[100%]   h-[32px] bg-[#44C0ED]  rounded-xl'}>
                <RegisterModalStep1/>
            </div>
        </div>
    );
};

export default DropDownNavbar;