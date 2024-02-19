'use client'
import React, {useEffect, useState} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import IconConnectAdmin from "@/app/user/connectadmin/data/IconConnectAdmin";
import Link from "next/link";
import ModalConnectAdmin from "@/app/user/connectadmin/components/ModalConnectAdmin";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ImMenu} from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import {useQuery} from "react-query";
import AddSub from "@/app/user/notifications/components/AddSub";
import Atropos from "atropos/react";
import LoadingMinimal from "@/app/components/LoadingMinimal";

const ConnectAdmin = () => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState<any>()
    const [validate, setValidate] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        AOS.init({
            duration: 300,
            once: false,
        })
        handleFetch()
    }, []);
    const router = useRouter()
    const token = localStorage?.getItem('userToken');
    const handleFetch = async () => {
        try {
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
    const {data: sendedList,refetch} = useQuery({
        queryKey: ['userTokenSended'],
        queryFn: async function () {
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/tickets/user/ticket', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setLoading(false)
            return res.data
        }
    })
    console.log('sendedList',sendedList)
    return (
        <div>
            {validate ? <div className={'bg-[#0A2E65] h-[2040px] '}>
                    <UserNavbar data={data}/>
                    <div className={'flex pt-14 lg:pt-[160px]'}>
                        <div data-aos={'fade-up'}
                             className={'lg:w-[79.3%] w-[100%]  flex-col h-[1752PX] bg-[#002256] items-center rounded-[24px] mb-[132px]'}>
                            <div className={'flex mt-[40px] mr-[24px]'} style={{direction: "rtl"}}>
                                <div className={'text-[#FFFEFF] text-[16px] font-[400] '}>
                                    برای ارتباط با پشتیبانی اینجا کلیک کنید
                                </div>
                                <ModalConnectAdmin refetch={refetch}/>
                            </div>
                            {loading?<LoadingMinimal/>:
                                sendedList?.length === 0 ?
                                    <div className={'flex flex-col'}>
                                        <p className={'text-[#FFFEFF] text-[16px] font-[400] text-center mt-[150px]'}>
                                            ! هیچ نتیجه ای یافت نشد
                                        </p>
                                        <IconConnectAdmin/>
                                    </div>
                                    :
                                    <div dir={'rtl'} className={'w-[95%] flex pt-2 flex-wrap lg:justify-start justify-center mx-auto'}>
                                        {//@ts-ignore
                                            sendedList?.map((i)=>{
                                        return(
                                        <Atropos key={i.id} className={'m-2 w-[]'} highlight={false} shadow={false}>
                                        <div data-aos={'fade-up'} dir={'rtl'}
                                             className={`flex ${i.is_read ? 'bg-[#CBE4FF]' : 'bg-[#FFE7DA]'} rounded-[12px] w-[258px] h-[196px] `}
                                        >
                                            <div data-atropos-offset="2">
                                                <div
                                                    className={`w-[24px] ${i.is_read ? 'bg-[#007AFF]' : 'bg-[#FF792C]'} mx-[10px] text-[#FFFEFF] text-[16px] mt-[18px] h-[24px] rounded-[5px] flex justify-center items-center`}>
                                                    !
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[80%]'}>
                                                <p data-atropos-offset="2"
                                                   className={'text-[#A53A2B] mt-[20px] text-[14px] '}>{i.title}</p>
                                                <p data-atropos-offset="2"
                                                   className={'text-[#3A3A3A] pl-[8px] mt-[20px] text-[12px]'}>{i.message}</p>
                                            </div>
                                        </div>
                                    </Atropos>)})}
                                    </div>
                            }
                        </div>
                        <button className={'fixed hover:animate-pulse  transition-transform z-[10] right-4'}
                                onClick={() => setVisible(!visible)}><ImMenu
                            className={`mt-4 lg:invisible transition-all ${visible ? 'scale-x-150 scale-y-125' : 'scale-150'} text-white`}/>
                        </button>
                        <SideBarUser visible={visible} setVisible={setVisible}/>
                    </div>
                </div>
                :
                <LoadingMakeenLogo bg={'#002256'}/>
            }
        </div>
    );
};

export default ConnectAdmin;