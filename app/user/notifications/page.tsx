'use client'
import React, {useEffect, useState} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import IconNotification from "@/app/user/notifications/data/IconNotification";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddSub from "@/app/user/notifications/components/AddSub";
import {ImMenu} from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";

const notifications = [
    {
        id: 1,
        title: 'همین حالا تخفیف کوورک بگیر!',
        content: 'کاربر گرامی ، شما فقط تا پایان چهارشنبه 30 آبان فرصت دارید تا از 50% تخفیف استفاده کنید.',
        seen: 'true',
        status: true
    }, {
        id: 2,
        title: 'همین حالا تخفیف کوورک بگیر!',
        content: 'کاربر گرامی ، شما فقط تا پایان چهارشنبه 30 آبان فرصت دارید تا از 50% تخفیف استفاده کنید.',
        seen: 'false',
        status: false
    }, {
        id: 3,
        title: 'همین حالا تخفیف کوورک بگیر!',
        content: 'کاربر گرامی ، شما فقط تا پایان چهارشنبه 30 آبان فرصت دارید تا از 50% تخفیف استفاده کنید.',
        seen: 'true',
        status: true
    },
]
const Notifications = () => {
    const [seen, setSeen] = useState('false')
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState()
    const [validate, setValidate] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
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
    const rendering = () => {
        if (notifications.length === 0) {
            return (
                <div>
                    <p className={'text-[#FFFEFF] text-[16px] font-[400] text-center mt-[120px]'}>
                        ! اعلان جدیدی جهت نمایش وجود ندارد
                    </p>
                    <IconNotification/>
                </div>
            )
        } else {
            return (
                <div dir={'rtl'}
                     className={'w-[95%] flex lg:flex-nowrap flex-wrap lg:justify-start justify-center mx-auto'}>
                    {notifications.filter((item) => item.seen.includes(seen)
                    ).map((item) => (
                        <div dir={'rtl'}
                             className={`flex ${item.status ? 'bg-[#CBE4FF]' : 'bg-[#FFE7DA]'} rounded-[12px] w-[258px] h-[196px] m-[1.5%]`}
                             key={item.id}>
                            <div>
                                <div
                                    className={`w-[24px] ${item.status ? 'bg-[#007AFF]' : 'bg-[#FF792C]'} mx-[10px] text-[#FFFEFF] text-[16px] mt-[18px] h-[24px] rounded-[5px] flex justify-center items-center`}>
                                    !
                                </div>
                            </div>
                            <div className={'flex flex-col w-[80%]'}>
                                <p className={'text-[#A53A2B] mt-[20px] text-[14px] '}>{item.title}</p>
                                <p className={'text-[#3A3A3A] pl-[8px] mt-[20px] text-[12px]'}>{item.content}</p>
                                <AddSub status={item.status}/>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
    return (
        <div>
            {validate ? <div className={'bg-[#0A2E65] lg:h-[2040px] '}>
                    <UserNavbar data={data}/>
                    <div className={'flex pt-14 lg:pt-[160px]'}>
                        <div data-aos={'fade-right'}
                             className={'lg:w-[79.3%] w-[100%] flex-col h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                            <div className={'flex w-[100%] justify-end'}>
                                <div
                                    className={'lg:w-[32.9%]   w-full flex justify-around items-center h-[52px] bg-[#0A2E65] rounded-[12px] mt-[40px]  lg:mr-[37px]'}>
                                    <div onClick={() => {
                                        setSeen('true')
                                    }}
                                         className={`lg:w-[152px] ml-[15px] px-3 lg:px-0 cursor-pointer h-[40px]  flex justify-center items-center ${seen === 'true' ? 'bg-[#44C0ED]' : ''} hover:bg-[#44C0ED] mr-[15px] rounded-[12px] text-[#FFFEFF] text-[16px] font-[400]`}>
                                        اعلانات خوانده شده
                                    </div>
                                    <div onClick={() => {
                                        setSeen('false')
                                    }}
                                         className={`lg:w-[152px] px-3 lg:px-0 cursor-pointer ml-[15px] h-[40px] flex justify-center ${seen === 'false' ? 'bg-[#44C0ED]' : ''} hover:bg-[#44C0ED] items-center mr-[15px] rounded-[12px] text-[#FFFEFF] text-[16px] font-[400]`}>
                                        اعلانات خوانده نشده
                                    </div>
                                </div>
                            </div>
                            {rendering()}
                        </div>
                        <button className={'fixed hover:animate-pulse  transition-transform z-[10] right-4'}
                                onClick={() => setVisible(!visible)}><ImMenu
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

export default Notifications;