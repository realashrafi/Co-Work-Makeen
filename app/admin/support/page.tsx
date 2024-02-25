'use client'
import React, {useEffect, useState} from 'react';
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import soghra from './components/data/soghra.png'
import Image from "next/image";
import asghar from './components/data/asghar.png'
import kobra from './components/data/kobra.png'
import ali from './components/data/ali.png'
import Answer from "@/app/admin/support/components/Answer";
import {useRouter} from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingAdmin from "@/app/components/LoadingAdmin";
import LoadingMinimal from "@/app/components/LoadingMinimal";
import {BiDownload} from "react-icons/bi";
import {useQuery} from "react-query";
import IconConnectAdmin from "@/app/user/connectadmin/data/IconConnectAdmin";

const Support = () => {
    const [protect, setProtect] = useState(false)
    const [data, setData] = useState<any>([])
    const [links, setLinks] = useState<any>()
    const [url, setUrl] = useState('https://www.cowork.v1r.ir/api/v1/tickets/admin?page=1')
    const [loadingDeleteTicket, setLoadingDeleteTicket] = useState(false)
    const [loading, setLoading] = useState(false)
    const [reRender, setRerender] = useState(false)
    useEffect(() => {
        handleProtect()
    }, []);
    // useEffect(() => {
    //     getData()
    // }, [loadingDeleteTicket, loading, url]);
    const router = useRouter()
    const {data: suport, refetch} = useQuery({
        queryKey: ['suportAdmin'],
        queryFn: async function () {
            const token = localStorage?.getItem('adminToken');
            const response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            setRerender(false)
            return response.data
        },
        refetchInterval:10000
    })
    console.log('suport', suport)
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
        } catch (e) {
            //console.log(e)
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
    const deleteTicket = async (props: number) => {
        setLoadingDeleteTicket(true)
        try {
            const token = localStorage?.getItem('adminToken');
            const res = await axios.delete(`https://www.cowork.v1r.ir/api/v1/tickets/admin/${props}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            refetch()
            setLoadingDeleteTicket(false)
            Swal.fire({
                title: "انجام شد",
                text: `تیکت کاربر پاک شد`,
                icon: "success",
                background: 'transparent',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#00000098'
            })
        } catch (res: any) {
            Swal.fire({
                title: "خطایی رخ داده",
                text: `${res.data.message}`,
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
        }
    }

    return (
        <div className={'bg-[#F8F9FC] flex'}>
            {protect ?
                <div className={'w-[100%] flex'}>
                    <div className={'flex flex-col w-[81.25%]'}>
                        <NavbarAdminPanel/>
                        <div className={'w-[100%]  flex justify-center pb-10 min-h-[1726px]'}>
                            <div
                                className={'w-[88.97%] flex flex-col min-h-[1570px] pb-10 mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                                <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                                    <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>ارتباط با پشتیبانی</p>
                                    <div className={'relative flex items-center'}>
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path id="Vector 61"
                                                  d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                                  fill="#FF792C"/>
                                        </svg>
                                        <svg className={'absolute top-0 -right-1'} width="8" height="9"
                                             viewBox="0 0 8 9"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path id="Vector 62"
                                                  d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                                  fill="#0075FF"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={'flex justify-end mt-[8px] pr-[67px]'}>
                                    <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم ، در
                                        این بخش
                                        می توانید انتقادات پیشنهادات موجود در سایت را مشاهده کنید
                                    </p>
                                </div>
                                {suport?.data.length === 0 ?
                                    <div className={'flex flex-col'}>
                                        <p className={'text-[#000000] text-[16px] font-[400] text-center mt-[150px]'}>
                                            ! هیچ نتیجه ای یافت نشد
                                        </p>
                                        <IconConnectAdmin/>
                                    </div>
                                    :
                                    <>
                                        <div
                                            className={'flex justify-between mt-[52px] w-[69.93%] mx-auto items-center'}>
                                            <div className={'flex '}>
                                                <button
                                                    className={'w-[45px] h-8 bg-sky-600 rounded-[5px]  flex justify-center items-center'}>
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g id="arrow_back" clipPath="url(#clip0_1695_1313)">
                                                            <path id="Vector"
                                                                  d="M20 11.6094H7.83L13.42 6.01937L12 4.60938L4 12.6094L12 20.6094L13.41 19.1994L7.83 13.6094H20V11.6094Z"
                                                                  fill="#FFFEFF"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1695_1313">
                                                                <rect width="24" height="24" fill="white"
                                                                      transform="translate(0 0.609375)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </button>
                                                <div
                                                    className={'mx-[10px] w-[150px] h-8 bg-sky-600 rounded-[5px] text-white text-sm font-normal flex justify-center items-center'}>سه
                                                    شنبه 1402/07/12
                                                </div>
                                                <button
                                                    className={'w-[45px] h-8 bg-sky-600 rounded-[5px] flex justify-center items-center'}>
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g id="arrow_back" clipPath="url(#clip0_1695_1319)">
                                                            <path id="Vector"
                                                                  d="M4 13.6094H16.17L10.58 19.1994L12 20.6094L20 12.6094L12 4.60938L10.59 6.01937L16.17 11.6094H4V13.6094Z"
                                                                  fill="#FFFEFF"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1695_1319">
                                                                <rect width="24" height="24" fill="white"
                                                                      transform="matrix(-1 0 0 -1 24 24.6094)"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </button>
                                            </div>
                                            <div className={'flex items-center'}>
                                                <select name="بر اساس جدیدترین" id=""
                                                        className={'w-[172px] h-[30px] bg-sky-600 rounded-xl px-3  text-white text-xs font-normal'}
                                                        dir={'rtl'}>
                                                    <option value="unk">بر اساس جدیدترین</option>
                                                    <option value="unk">بر اساس جدیدترین</option>
                                                    <option value="unk">بر اساس جدیدترین</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={' flex justify-center items-center mt-3'}>
                                            {//@ts-ignore
                                                suport?.meta.links.slice(1, suport?.meta.links.length - 1).map(i => (
                                                    <div key={i.label} onClick={() => {
                                                        setUrl(i.url)
                                                        refetch()
                                                        setRerender(true)
                                                    }}
                                                         className={'cursor-pointer text-orange-500 w-4  mx-2  rounded-full flex justify-center  items-center'}>
                                                        {i.label}</div>
                                                ))}
                                        </div>
                                        <div className={'flex  w-[828px] mx-auto justify-center  mt-[20px] flex-wrap'}>
                                            {reRender ? <LoadingMinimal/> :
                                                //@ts-ignore
                                                suport?.data.map(item => (
                                                    <div
                                                        className={'m-[25px] w-[344px] pb-2 flex flex-col h-[321px] rounded-[10px] bg-slate-50 border border-sky-950 border-opacity-5'}
                                                        key={item.id}>
                                                        <div className={'flex justify-center mt-[-25px] relative '}>
                                                            <div
                                                                className={`${item.is_read && 'opacity-0'} w-[18px] h-[18px] bg-emerald-700 rounded-full absolute right-[15px] top-[15px]`}></div>
                                                            <img
                                                                src={item.user_image_url !== null ? item.user_image_url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png'}
                                                                className={'w-[90px] rounded-full h-[90px]'} alt={''}/>
                                                        </div>
                                                        <div
                                                            className={'flex mt-[25px] justify-center text-justify text-black text-md font-normal'}>
                                                            {item.name}
                                                        </div>
                                                        <div
                                                            className={'w-[85%] h-[150px]  mt-[25px] mx-auto text-justify text-black text-sm font-normal overflow-auto'}
                                                            dir={'rtl'}>
                                                            {item.media_link !== null ? 'فاکتور ارسال شده' :
                                                                <span>{item.title}</span>} {item.message}
                                                        </div>
                                                        <div className={'flex items-center ml-[15px] mt-[10px]'}>
                                                            <button className={'flex items-center '} dir={'rtl'}
                                                                    onClick={() => deleteTicket(item.id)}>
                                                                <p className={'ml-[5px] text-justify text-red-500 text-sm font-normal'}>{loadingDeleteTicket ? '...' : 'حذف'}</p>
                                                                <svg width="23" height="24" viewBox="0 0 23 24"
                                                                     fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="delete" clipPath="url(#clip0_1695_1363)">
                                                                        <path id="Vector"
                                                                              d="M5.82046 18.7211C5.82046 19.7697 6.67841 20.6277 7.72701 20.6277H15.3532C16.4018 20.6277 17.2597 19.7697 17.2597 18.7211V9.18839C17.2597 8.13979 16.4018 7.28184 15.3532 7.28184H7.72701C6.67841 7.28184 5.82046 8.13979 5.82046 9.18839V18.7211ZM17.2597 4.42202H14.8766L14.1997 3.7452C14.0281 3.57361 13.7803 3.46875 13.5324 3.46875H9.54776C9.29991 3.46875 9.05205 3.57361 8.88047 3.7452L8.20364 4.42202H5.82046C5.29616 4.42202 4.86719 4.851 4.86719 5.3753C4.86719 5.8996 5.29616 6.32857 5.82046 6.32857H17.2597C17.784 6.32857 18.213 5.8996 18.213 5.3753C18.213 4.851 17.784 4.42202 17.2597 4.42202Z"
                                                                              fill="#F53C2B"/>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1695_1363">
                                                                            <rect width="22.8785" height="22.8785"
                                                                                  fill="white"
                                                                                  transform="translate(0.101562 0.609375)"/>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </button>
                                                            <Answer id={item.id} loading={loading} refetch={refetch}
                                                                    setLoading={setLoading}/>
                                                            <div
                                                                onClick={() => {
                                                                    window.location.assign(item.media_link)
                                                                }}
                                                                className={`${item.media_link === null && 'hidden'} ml-[15px] cursor-pointer flex items-center`}>
                                                                <BiDownload className={'text-orange-500'}/>
                                                                <span
                                                                    className={'ml-[5px] text-justify text-orange-500 text-sm font-normal'}>دانلود فاکتور</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </>}
                            </div>
                        </div>
                    </div>
                    <SideBarAdminPanel/>
                </div> :
                <LoadingAdmin/>}
        </div>
    );
};

export default Support;