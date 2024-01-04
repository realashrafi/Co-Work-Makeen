'use client'
import React, {useEffect, useState} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import IconNotification from "@/app/user/notifications/data/IconNotification";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddSub from "@/app/user/notifications/components/AddSub";

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
    const bgNotSeen = '#FFE7DA'
    const bgSeen = '#CBE4FF'
    const bgNotSeen2 = '#FF792C'
    const bgSeen2 = '#007AFF'

    const [bgBySeen, setBgBySeen] = useState(bgNotSeen)
    const [bgBySeen2, setBgBySeen2] = useState(bgNotSeen2)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        })
    }, []);
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
                <div dir={'rtl'} className={'w-[95%] flex mx-auto'}>
                    {notifications.filter((item) => item.seen.includes(seen)
                    ).map((item) => (
                        <div dir={'rtl'}
                             className={`flex ${item.status ? 'bg-[#CBE4FF]' : 'bg-[#FFE7DA]'} rounded-[12px] w-[258px] h-[196px] m-[1.5%]`}
                             key={item.id}>
                            <div>
                                <div
                                    className={`w-[24px] ${item.status ? 'bg-[#007AFF]':'bg-[#FF792C]'} mx-[10px] text-[#FFFEFF] text-[16px] mt-[18px] h-[24px] rounded-[5px] flex justify-center items-center`}>
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
        <div className={'bg-[#0A2E65] h-[2040px] '}>
            <UserNavbar/>
            <div className={'flex pt-[160px]'}>
                <div data-aos={'fade-right'}
                     className={'w-[79.3%] flex-col h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                    <div className={'flex w-[100%] justify-end'}>
                        <div
                            className={'w-[32.9%]  flex justify-between items-center h-[52px] bg-[#0A2E65] rounded-[12px] mt-[40px]  mr-[37px]'}>
                            <div onClick={() => {
                                setSeen('true')
                            }}
                                 className={`w-[152px] ml-[15px] cursor-pointer h-[40px]  flex justify-center items-center ${seen==='true'?'bg-[#44C0ED]':''} hover:bg-[#44C0ED] mr-[15px] rounded-[12px] text-[#FFFEFF] text-[16px] font-[400]`}>
                                اعلانات خوانده شده
                            </div>
                            <div onClick={() => {
                                setSeen('false')
                            }}
                                 className={`w-[152px] cursor-pointer ml-[15px] h-[40px] flex justify-center ${seen==='false'?'bg-[#44C0ED]':''} hover:bg-[#44C0ED] items-center mr-[15px] rounded-[12px] text-[#FFFEFF] text-[16px] font-[400]`}>
                                اعلانات خوانده نشده
                            </div>
                        </div>
                    </div>
                    {rendering()}
                </div>
                <SideBarUser/>
            </div>
        </div>
    );
};

export default Notifications;