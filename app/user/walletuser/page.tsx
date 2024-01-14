'use client'
import React, {useState, useEffect} from 'react';
import UserNavbar from "@/app/user/components/UserNavbar";
import SideBarUser from "@/app/user/components/SideBarUser";
import IconEmptyWallet from "@/app/user/walletuser/data/IconEmptyWallet";
import Image from "next/image";
import iconWallet from '../walletuser/data/iconwallet.png'
import ButtonsOfWallet from "@/app/user/components/ButtonsOfWallet";

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ImMenu} from "react-icons/im";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";


const dataOfWallet = [
    {
        id: 1,
        num: '1603',
        date: '19 آبان 1402',
        sub: 'روزانه کوورک',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 2,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 3,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 4,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 5,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 6,
        num: '1606',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 7,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    }, {
        id: 8,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'عودت داده شده',
    },
]
const WalletUser = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
        handleFetch()
    }, []);
    const [length, setLength] = useState(3)
    const [data, setData] = useState<any>()
    const [validate, setValidate] = useState(false)
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
    const showButton = () => {
        if (length !== 3) {
            return (
                <p onClick={() => setLength(3)}
                   className={'text-[#FF792C] cursor-pointer ml-[15px] text-[14px] font-[400] mt-[27px] '}
                   style={{direction: "ltr"}}>نمایش کمتر</p>
            )
        } else {
            return (
                <p onClick={() => setLength(dataOfWallet.length)}
                   className={'text-[#FF792C] cursor-pointer ml-[15px] text-[14px] font-[400] mt-[27px] '}
                   style={{direction: "ltr"}}>نمایش همه</p>
            )
        }
    }
    const helpEmpty = () => {
        if (dataOfWallet.length === 0) {
            return (
                <div className={'w-[100%]  '}>
                    <p className={'text-[#FFFEFF] text-[16px] font-[400] text-center mt-[180px]'}>! کیف پول شما خالی می
                        باشد</p>
                    <IconEmptyWallet/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'flex  lg:justify-end justify-center '}>
                        <select
                            className={'lg:w-[15%] text-center mt-[45px] lg:ml-[56.3%]  h-[30px] bg-[#FF792C] text-[12px] text-[#FFFFEF] rounded-[12px]'}
                            style={{direction: "rtl"}}>
                            <option>بر اساس جدیدترین</option>
                            <option>بر اساس جدیدترین</option>
                            <option>بر اساس جدیدترین</option>
                        </select>
                        <p className={'  mt-[45px] ml-[27px] lg:mr-[65px]  text-[#FFFEFF] text-[18px] font-[500] '}
                           style={{direction: "rtl"}}>
                            موجودی کیف پول
                        </p>
                    </div>
                    <div
                        className={'lg:w-[88.27%] w-[95%] px-2 justify-between lg:justify-start  mt-[32px]  h-[52px] flex mx-auto rounded-[5px] items-center bg-[#0A2E65]'}
                        style={{direction: "rtl"}}>
                        <p className={'text-[#FF792C] text-[14px] lg:mr-[7.13%] font-[400]'}>#</p>
                        <p className={'text-[#FFFFEF] text-[14px] lg:mr-[16.25%] font-[400]'}>تاریخ</p>
                        <p className={'text-[#FFFFEF] text-[14px] lg:mr-[14.76%] font-[400]'}>نوع اشتراک</p>
                        <p className={'text-[#FFFFEF] text-[14px] lg:mr-[13.57%] font-[400]'}>مجموع</p>
                        <p className={'text-[#FFFFEF] text-[14px] lg:mr-[15.85%] font-[400]'}>وضعیت</p>
                    </div>
                    <div className={'flex flex-col mt-[16px] w-[95%] mx-auto lg:w-[88.27%]'} style={{direction: "rtl"}}>
                        {dataOfWallet.slice(0, length).map(item => (
                            <div key={item.id}
                                 className={'w-[100%] h-[52px] border-[#FF792C] border-r-[2px] flex items-center mb-[8px] bg-[#0A2E65] rounded-[5px]'}>
                                <div className={' justify-between lg:w-[89%] w-[100%] h-[100%] flex items-center'}>
                                    <p className={'lg:mr-[6.14%] ml-2 text-[#C9C9C9] text-[14px]'}>{item.num}</p>
                                    <p className={'text-[#C9C9C9] text-[14px]'}>{item.date}</p>
                                    <p className={'text-[#C9C9C9] text-[14px]'}>{item.sub}</p>
                                    <p className={'text-[#C9C9C9] text-[14px]'}> {item.sum}تومان </p>
                                    <p className={'lg:ml-[3.5%] mr-2 text-[#C9C9C9] text-[14px]'}>{item.status}</p>
                                </div>
                                <button
                                    className={'bg-[#002256] w-[] text-[#FF792C] rounded-[12px] ml-[16px] h-[30px] px-[10px] text-[11px] '}>
                                    خرید اشتراک
                                </button>
                            </div>
                        ))}
                        {showButton()}
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            {validate ?
                <div className={'bg-[#0A2E65] h-[2040px] '}>
                    <UserNavbar data={data}/>
                    <div className={'flex pt-[160px]'}>
                        <div data-aos={'fade-right'}
                             className={'lg:w-[79.3%]  flex-col items-center justify-center h-[1752PX] bg-[#002256] rounded-[24px] mb-[132px]'}>
                            {helpEmpty()}
                            <div className={'mt-[69px] flex flex-col items-center lg:items-end lg:mr-[5.6%]'}>
                                <p className={'text-[#FFFEFF] text-[18px] font-[400]'}>
                                    کیف پول من
                                </p>
                                <div
                                    className={'lg:w-[76.6%] w-[95%] flex justify-between mt-[32px] relative h-[344px] bg-[#0A2E65] rounded-[20px]'}>
                                    <svg style={{zIndex: 1}}
                                         className={'absolute bottom-0 left-0 w-[80%] lg:w-[320px] '}
                                         height="339"
                                         viewBox="0 0 320 339" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2"
                                              d="M193.725 0.70148C187.698 1.59335 181.198 3.7796 173.181 7.03864C150.174 16.3465 18.0525 71.6466 18.0525 71.6466C17.8188 71.7377 17.5891 71.8584 17.3593 71.9791C-3.28656 82.8651 -15.9635 92.2105 -22.8445 104.239C-29.673 116.2 -29.7796 129.49 -27.7447 145.018C-27.7329 145.107 -27.7251 145.166 -27.7133 145.254L-27.0852 149.976C-27.0501 150.933 -27.0754 151.897 -26.9498 152.842L-5.4667 314.338C-2.36123 337.683 19.7829 354.23 43.6667 351.053L281.357 319.434C305.241 316.257 322.289 294.496 319.184 271.151L297.544 108.475C294.34 84.3918 269.628 67.2549 245.292 70.4923L13.3985 101.34C4.73268 102.493 -2.73555 105.949 -8.70127 110.768C-3.98416 103.262 5.76606 95.4772 24.1063 85.7389C24.3059 85.6222 24.3584 85.5552 24.558 85.4385C25.4022 85.0859 156.744 30.1599 178.993 21.1631C186.399 18.1655 191.999 16.3693 195.977 15.7801C199.954 15.1909 201.905 15.5321 202.897 16.0609C203.889 16.5897 204.813 17.7584 205.972 20.6978C207.132 23.6373 208.201 28.2106 209.002 34.2313L212.362 59.4946L227.822 57.4381L224.461 32.1748C223.59 25.6228 222.429 20.1306 220.478 15.164C218.526 10.1974 215.379 5.47998 210.475 2.79847C205.57 0.116962 199.752 -0.190387 193.725 0.70148ZM15.4086 116.451L247.302 85.6031C262.369 83.5988 280.168 96.1286 282.084 110.531L303.724 273.208C305.742 288.378 294.867 302.259 279.347 304.324L41.6566 335.943C26.1065 338.011 12.0147 327.481 9.99285 312.282L-10.0141 161.882L-11.4372 149.337C-11.6674 144.141 -9.95371 136.464 -5.64269 130.064C-0.949427 123.072 6.01812 117.7 15.4086 116.451ZM247.768 177.81C237.079 179.232 229.566 188.822 230.956 199.269C232.346 209.717 242.104 217.009 252.793 215.587C263.452 214.169 270.995 204.576 269.605 194.128C268.215 183.68 258.426 176.392 247.768 177.81Z"
                                              fill="#002256"/>
                                    </svg>
                                    <ButtonsOfWallet/>
                                    <div className={'flex flex-col mr-[10%] mt-[38px]'}>
                                        <div
                                            className={'border-r-[2px] text-[#FFFEFF] text-[14px] pl-[18px] flex items-center border-[#44C0ED]'}>
                                            20 آبان 1402
                                        </div>
                                        <div className={'w-[108px] h-[108px] mt-[28px] '}>
                                            <Image className={''} src={iconWallet} alt={''}/>
                                        </div>
                                        <div className={'flex items-center flex-col mt-[14px] justify-center'}>
                                            <p className={'text-[#FFFEFF] text-[18px] '}>: موجودی </p>
                                            <p className={'text-[#FFFEFF] mt-[14px] text-[16px] '}>30 تومان</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={'absolute right-4'} onClick={() => setVisible(true)}><ImMenu
                            className={'mt-4 scale-150 text-white'}/></button>
                        <SideBarUser visible={visible} setVisible={setVisible}/>
                    </div>
                </div>
                :
                <LoadingMakeenLogo/>
            }
        </div>
    );
};

export default WalletUser;