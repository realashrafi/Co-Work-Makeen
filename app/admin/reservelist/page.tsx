'use client'
import React, {useEffect, useState} from 'react';
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import axios from "axios";
import {DateObject} from "react-multi-date-picker";
import moment from 'jalali-moment';
import LoadingMinimal from "@/app/components/LoadingMinimal";
import LoadingSmall from "@/app/components/LoadingSmall";
import {useRouter} from "next/navigation";
import Swal from "sweetalert2";
import LoadingAdmin from "@/app/components/LoadingAdmin";

const reserveListCoWork = [
    {
        id: 1,
        fullName: 'مسعود رمضانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 2,
        fullName: 'علی احمدی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 3,
        fullName: 'مریم حیدری',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'بلند مدت',
        date: '1402/07/12',
        status: false
    }, {
        id: 4,
        fullName: 'شهاب رمضانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 5,
        fullName: 'علی احمدی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: false
    }, {
        id: 6,
        fullName: 'لیلا خانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'بلند مدت',
        date: '1402/07/12',
        status: true
    },
]
const reserveListJalase = [
    {
        id: 1,
        fullName: 'مسعود رمضانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 2,
        fullName: 'علی احمدی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 3,
        fullName: 'مریم حیدری',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'بلند مدت',
        date: '1402/07/12',
        status: false
    }, {
        id: 4,
        fullName: 'شهاب رمضانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: true
    }, {
        id: 5,
        fullName: 'علی احمدی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'روزانه',
        date: '1402/07/12',
        status: false
    }, {
        id: 6,
        fullName: 'لیلا خانی',
        codeNumber: '00198974455',
        callNumber: '0936875492',
        sub: 'بلند مدت',
        date: '1402/07/12',
        status: true
    },
]
const ReserveList = () => {
    const initialDate = moment();
    const [date, setDate] = useState<any>()
    const [list, setList] = useState<any>()
    const [protect, setProtect] = useState(false)
    const [loadingCo, setLoadingCo] = useState<any>(false)
    const router = useRouter()
    useEffect(() => {
        setDate(initialDate.format('YYYY-MM-DD'))
        handleProtect()
    }, []);
    useEffect(() => {
        console.log('1')
        getCoworkData()
    }, [date]);
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
    const getCoworkData = async () => {
        try {
            const token = localStorage?.getItem('adminToken')
            const res = await axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/cowork?date=${date}`,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log('ressAdmin', res)
            setList(res)
            setLoadingCo(false)
        } catch (e) {
            console.log(e)
        }
    }
    const incDate = () => {
        const new1 = moment(date)
        const new_date = new1.add(1, 'day').format('YYYY-MM-DD')
        setLoadingCo(true)
        setDate(new_date)
    }
    console.log(date)
    const decDate = () => {
        const new1 = moment(date)
        const new_date = new1.subtract(1, 'day').format('YYYY-MM-DD')
        setLoadingCo(true)
        setDate(new_date)
    }
    //@ts-ignore
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            {protect ?
                <div className={'flex w-[100%]'}>
                    <div className={'flex flex-col w-[81.25%]'}>
                        <NavbarAdminPanel/>
                        <div className={'w-[100%] h-[1626px] flex justify-center'}>
                            <div
                                className={'w-[88.97%] flex flex-col h-[1288px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                                <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                                    <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>لیست رزرو شده ها</p>
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
                                    <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>
                                        کاربر محترم شما می توانید در این بخش لیست افراد رزرو شده ی کوورک را مشاهده کنید.
                                    </p>
                                </div>
                                <div
                                    className={'bg-[#F6F6F6] rounded-[12.8px] flex flex-col mx-auto mt-[34px]  w-[98.36%] pb-4'}>
                                    <div className={'flex justify-between mt-[17px]'}>
                                        <div className={'flex ml-[22px]'}>
                                            <div onClick={incDate}
                                                 className={'cursor-pointer w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3774)">
                                                        <path id="Vector"
                                                              d="M20 11.6094H7.83L13.42 6.01937L12 4.60938L4 12.6094L12 20.6094L13.41 19.1994L7.83 13.6094H20V11.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3774">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="translate(0 0.609375)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                                className={'w-[150px] h-[32px] rounded-[5px] text-black text-sm font-normal mx-[10px] bg-[#FFFEFF] flex justify-center items-center'}>
                                                {date}
                                            </div>
                                            <div onClick={decDate}
                                                 className={'cursor-pointer w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3778)">
                                                        <path id="Vector"
                                                              d="M4 13.6094H16.17L10.58 19.1994L12 20.6094L20 12.6094L12 4.60938L10.59 6.01937L16.17 11.6094H4V13.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3778">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="matrix(-1 0 0 -1 24 24.6094)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={'flex items-center mr-[29px]'}>
                                            <p className={'text-[#0075FF] text-base font-normal mr-[8px]'}>لیست رزرو
                                                کوورک</p>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="more_vert" clipPath="url(#clip0_664_3783)">
                                                    <path id="Vector"
                                                          d="M9.0979 6.67431C9.93189 6.67431 10.6142 5.99195 10.6142 5.15795C10.6142 4.32396 9.93189 3.6416 9.0979 3.6416C8.2639 3.6416 7.58154 4.32396 7.58154 5.15795C7.58154 5.99195 8.2639 6.67431 9.0979 6.67431ZM9.0979 8.19066C8.2639 8.19066 7.58154 8.87302 7.58154 9.70701C7.58154 10.541 8.2639 11.2234 9.0979 11.2234C9.93189 11.2234 10.6142 10.541 10.6142 9.70701C10.6142 8.87302 9.93189 8.19066 9.0979 8.19066ZM9.0979 12.7397C8.2639 12.7397 7.58154 13.4221 7.58154 14.2561C7.58154 15.0901 8.2639 15.7724 9.0979 15.7724C9.93189 15.7724 10.6142 15.0901 10.6142 14.2561C10.6142 13.4221 9.93189 12.7397 9.0979 12.7397Z"
                                                          fill="#2086FF"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_664_3783">
                                                        <rect width="18.1962" height="18.1962" fill="white"
                                                              transform="translate(0 0.609375)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100%] h-[37px] flex items-center justify-center  mb-[10px] mt-[18px] mx-auto '}
                                        dir={'rtl'}>
                                        <p className={'text-[#222222] text-base font-normal -mr-[3%]'}>نام و نام
                                            خانوادگی</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[5%]'}>کد ملی</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[8%]'}>شماره تلفن</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[7%]'}>نوع اشتراک</p>
                                        <p className={'text-[#222222] flex text-base font-normal mr-[9%]'}>تاریخ رزرو
                                            <span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<g id="keyboard_arrow_down" clipPath="url(#clip0_2421_1637)">
<path id="Vector" d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill="#2E2E2E"/>
</g>
<defs>
<clipPath id="clip0_2421_1637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                                </span>
                                        </p>
                                        <p className={'text-[#222222] flex text-base font-normal mr-[9%]'}>وضعیت<span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<g id="keyboard_arrow_down" clipPath="url(#clip0_2421_1637)">
<path id="Vector" d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill="#2E2E2E"/>
</g>
<defs>
<clipPath id="clip0_2421_1637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                                </span></p>
                                    </div>
                                    <div className={'w-[97.16%] flex items-center flex-col  mx-auto  '} dir={'rtl'}>
                                        { loadingCo ?
                                            <LoadingSmall/>
                                            :
                                            list?.data.length == 0 ?
                                                <div className={'text-black mt-5'}>هنوز کسی رزرو نکرده است</div> :
                                                //@ts-ignore
                                                list?.data.map(item => (
                                                    <div
                                                        className={'odd:bg-[#026AE114] even:bg-[#FF792C14] mb-[5px] w-[100%] h-[50px] flex justify-between items-center '}
                                                        key={item.id}>
                                                        <p className={'text-[#222222] text-sm font-normal w-[120px] mr-[4%]'}>{item.user.first_name} {item.user.last_name}</p>
                                                        <p className={'text-[#222222] text-sm font-normal w-[80px] -mr-[7%]'}>{item.user.national_code}</p>
                                                        <p className={'text-[#222222] text-sm font-normal w-[70px] -mr-[2%]'}>{item.user.phone_number}</p>
                                                        <p className={'text-[#222222] text-sm font-normal text-center w-[60px] ml-[1%]'}>
                                                            {item.long_term_co_work_reservation_id == null ? 'بلند مدت' : 'روزانه'}
                                                        </p>
                                                        <p className={'text-[#222222] text-sm font-normal text-center  ml-[2%] w-fit'}>{item.date}</p>
                                                        <div
                                                            className={'text-[#222222] text-sm font-normal w-[80px] ml-[4%]'}>{item.status ?
                                                            <p className={'text-green-900 text-sm font-normal'}>پذیرش
                                                                شده</p> :
                                                            <p className={'text-orange-500 text-sm font-normal'}>مراجعه
                                                                نکرده</p>}</div>
                                                    </div>
                                                ))}
                                    </div>
                                </div>
                                <div
                                    className={'bg-[#F6F6F6] rounded-[12.8px] flex flex-col mx-auto mt-[34px]  w-[98.36%] pb-4'}>
                                    <div className={'flex justify-between mt-[17px]'}>
                                        <div className={'flex ml-[22px]'}>
                                            <div
                                                className={'w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3774)">
                                                        <path id="Vector"
                                                              d="M20 11.6094H7.83L13.42 6.01937L12 4.60938L4 12.6094L12 20.6094L13.41 19.1994L7.83 13.6094H20V11.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3774">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="translate(0 0.609375)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                                className={'w-[150px] h-[32px] rounded-[5px] text-black text-sm font-normal mx-[10px] bg-[#FFFEFF] flex justify-center items-center'}>
                                                سه شنبه 1402/07/12
                                            </div>
                                            <div
                                                className={'w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3778)">
                                                        <path id="Vector"
                                                              d="M4 13.6094H16.17L10.58 19.1994L12 20.6094L20 12.6094L12 4.60938L10.59 6.01937L16.17 11.6094H4V13.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3778">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="matrix(-1 0 0 -1 24 24.6094)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={'flex items-center mr-[29px]'}>
                                            <p className={'text-[#0075FF] text-base font-normal mr-[8px]'}>لیست رزرو
                                                اتاق
                                                جلسات</p>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="more_vert" clipPath="url(#clip0_664_3783)">
                                                    <path id="Vector"
                                                          d="M9.0979 6.67431C9.93189 6.67431 10.6142 5.99195 10.6142 5.15795C10.6142 4.32396 9.93189 3.6416 9.0979 3.6416C8.2639 3.6416 7.58154 4.32396 7.58154 5.15795C7.58154 5.99195 8.2639 6.67431 9.0979 6.67431ZM9.0979 8.19066C8.2639 8.19066 7.58154 8.87302 7.58154 9.70701C7.58154 10.541 8.2639 11.2234 9.0979 11.2234C9.93189 11.2234 10.6142 10.541 10.6142 9.70701C10.6142 8.87302 9.93189 8.19066 9.0979 8.19066ZM9.0979 12.7397C8.2639 12.7397 7.58154 13.4221 7.58154 14.2561C7.58154 15.0901 8.2639 15.7724 9.0979 15.7724C9.93189 15.7724 10.6142 15.0901 10.6142 14.2561C10.6142 13.4221 9.93189 12.7397 9.0979 12.7397Z"
                                                          fill="#2086FF"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_664_3783">
                                                        <rect width="18.1962" height="18.1962" fill="white"
                                                              transform="translate(0 0.609375)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-[100%] h-[37px] flex items-center justify-center  mb-[10px] mt-[18px] mx-auto '}
                                        dir={'rtl'}>
                                        <p className={'text-[#222222] text-base font-normal -mr-[3%]'}>نام و نام
                                            خانوادگی</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[5%]'}>کد ملی</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[8%]'}>شماره تلفن</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[7%]'}>نوع اشتراک</p>
                                        <p className={'text-[#222222] flex text-base font-normal mr-[9%]'}>تاریخ رزرو
                                            <span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<g id="keyboard_arrow_down" clipPath="url(#clip0_2421_1637)">
<path id="Vector" d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill="#2E2E2E"/>
</g>
<defs>
<clipPath id="clip0_2421_1637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                                </span>
                                        </p>
                                        <p className={'text-[#222222] flex text-base font-normal mr-[9%]'}>وضعیت<span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<g id="keyboard_arrow_down" clipPath="url(#clip0_2421_1637)">
<path id="Vector" d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill="#2E2E2E"/>
</g>
<defs>
<clipPath id="clip0_2421_1637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                                </span></p>
                                    </div>
                                    <div className={'w-[97.16%] flex  flex-col  mx-auto  '} dir={'rtl'}>
                                        {reserveListJalase.map(item => (
                                            <div
                                                className={'odd:bg-[#026AE114] even:bg-[#FF792C14] mb-[5px] w-[100%] h-[50px] flex justify-between  items-center '}
                                                key={item.id}>
                                                <p className={'text-[#222222] text-sm font-normal w-[120px] mr-[4%]'}>{item.fullName}</p>
                                                <p className={'text-[#222222] text-sm font-normal w-[80px] -mr-[7%]'}>{item.codeNumber}</p>
                                                <p className={'text-[#222222] text-sm font-normal w-[70px] -mr-[2%]'}>{item.callNumber}</p>
                                                <p className={'text-[#222222] text-sm font-normal text-center w-[60px] ml-[1%]'}>{item.sub}</p>
                                                <p className={'text-[#222222] text-sm font-normal text-center w-[60px] ml-[2%]'}>{item.date}</p>
                                                <div
                                                    className={'text-[#222222] text-sm font-normal w-[80px] ml-[4%]'}>{item.status ?
                                                    <p className={'text-green-900 text-sm font-normal'}>پذیرش شده</p> :
                                                    <p className={'text-orange-500 text-sm font-normal'}>مراجعه
                                                        نکرده</p>}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SideBarAdminPanel/>
                </div> : <LoadingAdmin/>}
        </div>
    );
};

export default ReserveList;