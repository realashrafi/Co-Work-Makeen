'use client'
import React, {useEffect, useState} from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingAdmin from "@/app/components/LoadingAdmin";
import {useRouter} from "next/navigation";

const offer = [
    {
        id: 1,
        title: 'تخفیف کوورک برای امروز !',
        content: 'همین امروز میتونی با تخفیف 50% صندلی خودتو در کوورک رزرو کنی ! :)',
    }, {
        id: 2,
        title: 'تخفیف کوورک برای امروز !',
        content: 'همین امروز میتونی با تخفیف 50% صندلی خودتو در کوورک رزرو کنی ! :)',
    },
]
const MakeNotification = () => {
    const [protect, setProtect] = useState(false)
    useEffect(() => {
        handleProtect()
    }, []);
    const router = useRouter()
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
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            {protect?
            <div className={'w-[100%] flex'}>
            <div className={'flex flex-col w-[81.25%]'}>
                <NavbarAdminPanel/>
                <div className={'w-[100%] h-[1626px] flex justify-center'}>
                    <div className={'w-[88.97%] flex flex-col h-[1288px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                        <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>ایجاد اعلانات برای کاربران</p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
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
                                کاربر محترم شما می توانید در این بخش برای تمامی کاربران این سامانه یک اعلان ارسال کنید
                            </p>
                        </div>
                        <div className={'flex  mt-[40px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>متن اعلان</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">متن اعلان را وارد کنید</option>
                                    <option value="unk">متن اعلان را وارد کنید</option>
                                    <option value="unk">متن اعلان را وارد کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>تیتر اعلان</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تیتر اعلان را وارد کنید</option>
                                    <option value="unk">تیتر اعلان را وارد کنید</option>
                                    <option value="unk">تیتر اعلان را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex  mt-[35px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>انتخاب تاریخ</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>ارسال اعلان از طریق</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">طریقه ی ارسال اعلان را انتخاب کنید</option>
                                    <option value="unk">طریقه ی ارسال اعلان را انتخاب کنید</option>
                                    <option value="unk">طریقه ی ارسال اعلان را انتخاب کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex mr-[67px] mt-[36px] justify-end'}>
                            <button
                                className={'w-[25.45%] h-[40px] rounded-[5px] flex justify-center items-center bg-[#0075FF] text-stone-50 text-base font-normal'}>ارسال
                            </button>
                        </div>
                        <div className={'w-[100%] mt-[70px] '}>
                            <svg width="97%" className={'mx-auto'} height="4" viewBox="0 0 1011 4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2H1011" stroke="url(#paint0_linear_34_3033)" strokeWidth="3"/>
                                <defs>
                                    <linearGradient id="paint0_linear_34_3033" x1="0" y1="2" x2="1001.25" y2="2"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#E2E0E0" stopOpacity="0"/>
                                        <stop offset="0.5" stopColor="#E0E1E2"/>
                                        <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={'w-[100%] flex justify-end mt-[52px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>اعلانات موجود در سایت</p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
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
                                کاربر محترم شما می توانید در این بخش اعلاناتیکه هم اکنون در سایت مووود می باشد را مشاهده
                                ، ویرایش و حذف کنید
                            </p>
                        </div>
                        <div className={'flex flex-wrap mt-[36px] justify-between mx-[67px]'}>
                            {offer.map(item => (
                                <div key={item.id} className={'w-[40%] h-[197px] flex  rounded-[12px] bg-[#F8F9FC]'}>
                                    <div className={'w-[80%] flex items-end flex-col'}>
                                        <p className={'text-[#002256] mt-[24px] text-base font-bold'}
                                           dir={'rtl'}>{item.title}</p>
                                        <p className={'text-[#393939] w-[271px] mt-[8px] text-sm font-normal'}
                                           dir={'rtl'}>{item.content}</p>
                                        <div className={'flex mt-[52px] items-center justify-start w-[90%]'}>
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector"
                                                      d="M15.3208 0C14.6352 0 13.9495 0.262778 13.4261 0.789526L12.3159 1.90678L16.1054 5.72034L17.2156 4.60309C18.2615 3.55054 18.2615 1.84302 17.2156 0.789526C16.6922 0.262778 16.0065 0 15.3208 0ZM10.8948 3.33686L0 14.3008V18.1144H3.7895L14.6843 7.15042L10.8948 3.33686Z"
                                                      fill="#02794C"/>
                                            </svg>
                                            <svg className={'ml-[31px]'} width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="delete" clipPath="url(#clip0_671_3890)">
                                                    <path id="Vector"
                                                          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
                                                          fill="#F53C2B"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_671_3890">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={'w-[20%] mt-[24px] flex justify-center'}>
                                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group 263">
                                                <g id="Group 262">
                                                    <path id="Vector"
                                                          d="M20.5261 40.0715C20.3535 40.0715 20.1935 40.0129 20.0609 39.903L16.4621 36.9179L11.9001 37.8649C11.8454 37.8767 11.7959 37.882 11.7465 37.882C11.456 37.882 11.1928 37.7028 11.0749 37.4234L9.25813 33.087L4.78777 31.7816C4.4541 31.6834 4.232 31.356 4.25937 31.0041L4.63725 26.3061L1.27947 23.0437C1.02685 22.7994 0.979485 22.4059 1.16685 22.1083L3.65834 18.1271L2.17944 13.6552C2.06997 13.3214 2.20891 12.9513 2.50996 12.7743L6.54244 10.4184L7.28452 5.76519C7.33926 5.41644 7.63188 5.15302 7.97923 5.13915L12.6285 4.95358L15.4179 1.18134C15.5569 0.995772 15.7779 0.883789 16.0084 0.883789C16.1179 0.883789 16.2231 0.908319 16.3221 0.955245L20.5251 2.98161L24.7271 0.956311C24.827 0.907252 24.9313 0.883789 25.0407 0.883789C25.2723 0.883789 25.4923 0.994706 25.6312 1.18134L28.4227 4.95358L33.072 5.13915C33.4194 5.15302 33.713 5.41751 33.7699 5.76626L34.512 10.4173L38.5434 12.7721C38.8455 12.9481 38.9844 13.3193 38.875 13.6552L37.3961 18.1239L39.8876 22.1051C40.0728 22.4038 40.0255 22.7973 39.7739 23.0415L36.4151 26.305L36.794 31.0041C36.8224 31.356 36.5993 31.6824 36.2645 31.7816L31.7963 33.087L29.9774 37.4255C29.8616 37.7017 29.5974 37.8809 29.3058 37.8809C29.2564 37.8809 29.2069 37.8756 29.1585 37.8649L24.5923 36.9168L20.9935 39.9019C20.8588 40.0129 20.6977 40.0715 20.5261 40.0715Z"
                                                          fill="#FF792C"/>
                                                    <path id="Vector_2"
                                                          d="M24.515 1.50596C24.5813 1.50596 24.6444 1.53796 24.6834 1.59021L27.3243 5.15981L27.6243 5.56615L28.1243 5.58642L32.522 5.76239C32.622 5.76665 32.7062 5.84344 32.722 5.93943L33.4241 10.342L33.5041 10.8422L33.9378 11.096L37.7534 13.325C37.8397 13.3751 37.8787 13.4818 37.8482 13.5746L36.4493 17.8043L36.2903 18.2853L36.5587 18.714L38.9144 22.4799C38.9671 22.5652 38.9544 22.6772 38.8818 22.7476L35.704 25.834L35.343 26.1849L35.384 26.6905L35.7419 31.1367C35.7503 31.238 35.6882 31.3287 35.5924 31.3575L31.3631 32.5925L30.8821 32.7333L30.6863 33.2004L28.9664 37.3043C28.9306 37.3897 28.8548 37.4312 28.7527 37.4312C28.7464 37.4312 28.739 37.4312 28.7316 37.4302L24.416 36.5343L23.9255 36.433L23.5381 36.754L20.133 39.5781C20.0941 39.6101 20.0499 39.6261 20.0004 39.6261C19.9509 39.6261 19.9056 39.6101 19.8678 39.5781L16.4626 36.754L16.0753 36.433L15.5847 36.5343L11.2207 37.4366C11.1428 37.4366 11.067 37.3822 11.0344 37.3054L9.31445 33.2004L9.11867 32.7333L8.63763 32.5925L4.41147 31.3575C4.31568 31.3287 4.25147 31.2359 4.25989 31.1357L4.61778 26.6894L4.65883 26.1839L4.29463 25.834L1.1158 22.7454C1.04527 22.6772 1.03159 22.5652 1.08422 22.482L3.44203 18.714L3.71044 18.2853L3.5515 17.8043L2.15155 13.5756C2.11997 13.4807 2.15997 13.3751 2.24628 13.325L6.06088 11.096L6.49455 10.8422L6.57455 10.342L7.27663 5.93943C7.29242 5.84024 7.37557 5.76559 7.47346 5.76132L11.8723 5.58535L12.3722 5.56508L12.6722 5.15875L15.31 1.59235C15.35 1.53796 15.4142 1.50596 15.4816 1.50596C15.5121 1.50596 15.5405 1.51236 15.57 1.52622L19.5457 3.44274L19.9983 3.6603L20.4509 3.44274L24.4307 1.52409C24.4571 1.51236 24.4855 1.50596 24.515 1.50596ZM24.5139 0.439453C24.3307 0.439453 24.1465 0.47998 23.9739 0.564234L19.9983 2.48075L16.0226 0.564234C15.8489 0.47998 15.6647 0.44052 15.4826 0.44052C15.0953 0.44052 14.7174 0.621826 14.4711 0.951376L11.8312 4.51991L7.43136 4.69588C6.83243 4.72041 6.3335 5.16834 6.23772 5.76985L5.53564 10.1724L1.72104 12.4014C1.20211 12.7043 0.96317 13.3367 1.15369 13.9137L2.55364 18.1435L0.195829 21.9114C-0.125212 22.4244 -0.045215 23.0974 0.389506 23.5176L3.56729 26.6041L3.2094 31.0503C3.16099 31.6572 3.54097 32.2128 4.11569 32.3824L8.34501 33.6174L10.0649 37.7224C10.267 38.1991 10.726 38.5042 11.2207 38.5042C11.306 38.5042 11.3933 38.4946 11.4796 38.4764L15.7963 37.5806L19.2015 40.4047C19.4341 40.5977 19.7162 40.6937 20.0004 40.6937C20.2846 40.6937 20.5667 40.5977 20.7993 40.4047L24.2055 37.5806L28.5211 38.4764C28.6074 38.4946 28.6938 38.5042 28.779 38.5042C29.2737 38.5042 29.7348 38.2013 29.9358 37.7235L31.6557 33.6185L35.8851 32.3835C36.4619 32.2139 36.8408 31.6582 36.7914 31.0514L36.4335 26.6051L39.6113 23.5187C40.0449 23.0985 40.1249 22.4255 39.8049 21.9114L37.4482 18.1435L38.8471 13.9137C39.0355 13.3367 38.7987 12.7043 38.2797 12.4014L34.4651 10.1724L33.763 5.76985C33.6652 5.16941 33.1652 4.72148 32.5662 4.69695L28.1675 4.52097L25.5254 0.95031C25.2802 0.620759 24.9013 0.439453 24.5139 0.439453Z"
                                                          fill="#FF792C"/>
                                                    <path id="Vector_3"
                                                          d="M28.409 22.0536C27.7006 21.2644 26.6985 20.8645 25.4028 20.8645C24.0765 20.8645 23.0144 21.2953 22.225 22.1464C21.4461 22.9964 21.0513 24.1653 21.0513 25.6531C21.0513 27.0065 21.4155 28.0933 22.165 28.9038C22.9039 29.7239 23.8954 30.1239 25.1501 30.1239C26.4353 30.1239 27.4785 29.693 28.2774 28.8313C29.0774 27.9706 29.4721 26.822 29.4721 25.3865C29.4721 23.9509 29.1174 22.8428 28.409 22.0536ZM26.8511 27.6315C26.4669 28.154 25.9501 28.4111 25.2828 28.4111C24.6144 28.4111 24.0881 28.1647 23.7144 27.6624C23.3302 27.1601 23.1376 26.4626 23.1376 25.5603C23.1376 24.6474 23.3302 23.9296 23.7249 23.3964C24.1091 22.8738 24.6459 22.6167 25.3238 22.6167C25.9712 22.6167 26.4774 22.8631 26.8522 23.3654C27.2269 23.8678 27.4185 24.5652 27.4185 25.4675C27.4174 26.3911 27.2248 27.1089 26.8511 27.6315ZM17.883 12.1159C17.1652 11.316 16.1631 10.9268 14.8779 10.9268C13.5421 10.9268 12.4895 11.347 11.7001 12.2087C10.9096 13.0598 10.5254 14.2287 10.5254 15.7154C10.5254 17.0688 10.8896 18.1555 11.6285 18.9661C12.3674 19.7766 13.3695 20.1862 14.6147 20.1862C15.9105 20.1862 16.9525 19.7553 17.7525 18.8936C18.5514 18.0329 18.9461 16.8853 18.9461 15.4487C18.9461 14.0132 18.5914 12.9062 17.883 12.1159ZM16.3147 17.6948C15.9399 18.2174 15.4136 18.4744 14.7558 18.4744C14.0874 18.4744 13.5611 18.2281 13.1769 17.7257C12.7927 17.2234 12.6106 16.5259 12.6106 15.6237C12.6106 14.7107 12.8032 13.9834 13.1874 13.4597C13.5821 12.9371 14.1189 12.6705 14.7863 12.6705C15.4336 12.6705 15.9505 12.9265 16.3252 13.4298C16.6999 13.9226 16.8915 14.6297 16.8915 15.5223C16.8915 16.4545 16.6989 17.1722 16.3147 17.6948ZM27.3669 10.9268H25.2617L13.2095 30.1239H15.3042L27.3669 10.9268Z"
                                                          fill="#002256"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SideBarAdminPanel/>
            </div>:
            <LoadingAdmin/>}
        </div>
    );
};

export default MakeNotification;