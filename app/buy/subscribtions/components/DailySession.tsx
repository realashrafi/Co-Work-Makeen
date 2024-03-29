'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import LoadingMinimal from "@/app/components/LoadingMinimal";
import Swal from "sweetalert2";
import {PiWarningCircleFill} from "react-icons/pi";
import FullTypoGraphi from "@/app/components/FullTypoGraphi";
import usePrice from "@/app/store/react-query/usePrice";
import usePriceDefault from "@/app/store/react-query/usePriceDefault";
import AOS from "aos";

const DailySession = () => {
    const [selectedDay, setSelectedDay] = useState<any>([])
    const [week, setWeek] = useState<string>('this-week')
    const [days, setDays] = useState<any>()
    const [loading, setLoading] = useState(true)
    const {priceDefault}=usePriceDefault()
    useEffect(() => {
        getInformation()
    }, [week]);
    const getInformation = async () => {
        AOS.init({
            duration: 700,
            once: true,
        })
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/session-room/status/${week}/daily`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            //console.log('res', res)
            setDays(res.data)
            setLoading(false)
        } catch (e) {
            //console.log(e)

        }
    }
    const handleReserve = async (e: any) => {
        let dates: any = []
        //@ts-ignore
        selectedDay.map(i => {
            return dates.push(i.date)
        })
        e.preventDefault()
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.post('https://www.cowork.v1r.ir/api/v1/reservation/session-room/reserve/daily', {
                dates: dates
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            localStorage.setItem('Ffa_type', res.data.reservation_type)
            localStorage.setItem('FLDay', res.data.reservation_count)
            localStorage.setItem('Fprice', res.data.price_paid)
            localStorage.setItem('Fcreated_at', res.data.j_date)
            Swal.fire({
                title: "انجام شد",
                text: "خرید شما موفق بود",
                icon: "success",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
            window.location.assign('/buy/submitedChair')
            if (res.status == 422) {
                Swal.fire({
                    title: "خطا",
                    text: `${res.data.message}`,
                    icon: "warning",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: '#002256'
                })
            }
        } catch (res: any) {
            Swal.fire({
                title: "خطا",
                text: `${res?.response.data.message}`,
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })

        }
    }
    //console.log(selectedDay)
    return (
        <div className={'lg:w-[80%] w-[95%] flex flex-col items-center mx-auto'}>
            <div className={'text-white text-base font-bold mt-[32px]'}>رزرو روزانه اتاق جلسات</div>
            <div className={'text-orange-500 text-sm font-normal mt-[8px]'}>هزینه روزانه {priceDefault?.data.sessionRoom.price.normal.perDay} تومان</div>
            <div className={'flex flex-col mx-auto lg:w-[90%] w-[100%] justify-center mt-[48px]'}>
                {loading ? <LoadingMinimal/> :
                    //@ts-ignore
                    days?.slice(0, 6).map(item => (
                        <div data-aos={'fade-down'} key={item.id}
                             className={`${!item.is_reservable ? 'opacity-30' : ''}  flex lg:w-[100%] w-[100%]  h-[56px]  my-1`}>
                            <div
                                className={'flex  text-center justify-between items-center lg:px-[10%] w-[90%] px-3 lg:w-[450px] bg-[#002256] rounded-l-xl lg:rounded-l-3xl'}>
                                <div className={'text-white text-sm font-normal '}
                                     dir={'rtl'}>{item.open} الی {item.close}</div>
                                <div className={'text-white text-sm font-normal '}>{item.j_date}</div>
                                <div className={'text-white text-sm font-normal '}>{item.day_of_week}</div>
                            </div>
                            <div
                                className={'flex w-[10%] px-2 lg:w-[150px] bg-[#002256] justify-center items-center border-l-2 border-[#0A2E65] rounded-r-xl lg:rounded-r-3xl'}>
                                <svg width="32" height="30" viewBox="0 0 32 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector"
                                          d="M5.03609 0C3.41862 0 2.0984 1.57293 2.0984 3.5C2.0984 5.42707 3.41862 7 5.03609 7C6.65357 7 7.97379 5.42707 7.97379 3.5C7.97379 1.57293 6.65357 0 5.03609 0ZM26.859 0C25.2415 0 23.9213 1.57293 23.9213 3.5C23.9213 5.42707 25.2415 7 26.859 7C28.4765 7 29.7967 5.42707 29.7967 3.5C29.7967 1.57293 28.4765 0 26.859 0ZM5.03609 1C6.19995 1 7.13445 2.11337 7.13445 3.5C7.13445 4.88663 6.19995 6 5.03609 6C3.87223 6 2.93774 4.88663 2.93774 3.5C2.93774 2.11337 3.87223 1 5.03609 1ZM26.859 1C28.0229 1 28.9573 2.11337 28.9573 3.5C28.9573 4.88663 28.0229 6 26.859 6C25.6951 6 24.7606 4.88663 24.7606 3.5C24.7606 2.11337 25.6951 1 26.859 1ZM5.03609 8C3.18684 8 1.67872 9.79678 1.67872 12V18.75C1.67872 20.8152 3.09285 22.5 4.82626 22.5H9.39018L10.0746 29.5576C10.0865 29.6795 10.1356 29.7919 10.2125 29.8735C10.2894 29.9551 10.3888 30.0001 10.4918 30H12.5902C12.7015 30 12.8082 29.9473 12.8869 29.8535C12.9656 29.7598 13.0098 29.6326 13.0098 29.5V19.75C13.0098 18.2372 11.9714 17 10.7017 17H8.39346V12C8.39346 9.79678 6.88535 8 5.03609 8ZM26.859 8C25.0097 8 23.5016 9.79678 23.5016 12V17H21.1934C19.9237 17 18.8852 18.2372 18.8852 19.75V29.5C18.8853 29.6326 18.9295 29.7598 19.0082 29.8535C19.0869 29.9473 19.1936 30 19.3049 30H21.4033C21.5063 30.0001 21.6057 29.9551 21.6826 29.8735C21.7595 29.7919 21.8086 29.6795 21.8205 29.5576L22.5049 22.5H27.0688C28.8022 22.5 30.2164 20.8152 30.2164 18.75V12C30.2164 9.79678 28.7082 8 26.859 8ZM5.03609 9C6.43174 9 7.55412 10.3372 7.55412 12V17.5H6.50494C5.69131 17.5 5.03609 16.7194 5.03609 15.75V13.75C5.03653 13.7165 5.03132 13.6833 5.02077 13.6522C5.01021 13.6212 4.99453 13.593 4.97465 13.5693C4.95477 13.5456 4.93111 13.5269 4.90505 13.5144C4.879 13.5018 4.85109 13.4956 4.82298 13.4961C4.79542 13.4966 4.76822 13.5036 4.74293 13.5166C4.71763 13.5297 4.69474 13.5485 4.67556 13.5721C4.65638 13.5957 4.64129 13.6235 4.63114 13.654C4.62099 13.6846 4.61599 13.7172 4.61642 13.75V15.75C4.61642 16.9896 5.46447 18 6.50494 18H8.18363H10.7017C11.5177 18 12.1705 18.7778 12.1705 19.75V29H10.8656L10.1812 21.9424C10.1693 21.8207 10.1203 21.7084 10.0436 21.6268C9.96683 21.5453 9.86761 21.5002 9.76477 21.5H4.82626C3.54642 21.5 2.51807 20.2748 2.51807 18.75V12C2.51807 10.3372 3.64045 9 5.03609 9ZM26.859 9C28.2546 9 29.377 10.3372 29.377 12V18.75C29.377 20.2748 28.3487 21.5 27.0688 21.5H22.1303C22.0275 21.5002 21.9283 21.5453 21.8515 21.6268C21.7747 21.7084 21.7258 21.8207 21.7139 21.9424L21.0295 29H19.7246V19.75C19.7246 18.7778 20.3774 18 21.1934 18H23.9213H25.3901C26.4306 18 27.2787 16.9896 27.2787 15.75V13.75C27.2791 13.7165 27.2739 13.6833 27.2633 13.6522C27.2528 13.6212 27.2371 13.593 27.2172 13.5693C27.1973 13.5456 27.1737 13.5269 27.1476 13.5144C27.1216 13.5018 27.0937 13.4956 27.0655 13.4961C27.038 13.4966 27.0108 13.5036 26.9855 13.5166C26.9602 13.5297 26.9373 13.5485 26.9181 13.5721C26.899 13.5957 26.8839 13.6235 26.8737 13.654C26.8636 13.6846 26.8586 13.7172 26.859 13.75V15.75C26.859 16.7194 26.2038 17.5 25.3901 17.5H24.341V12C24.341 10.3372 25.4633 9 26.859 9ZM0.413153 11.9932C0.301993 11.9952 0.196063 12.0498 0.118612 12.1448C0.0411609 12.2398 -0.00148288 12.3676 3.93997e-05 12.5V19C3.93997e-05 22.0317 2.07178 24.5 4.61642 24.5H7.13445C7.19006 24.5009 7.24527 24.4887 7.29688 24.464C7.34849 24.4393 7.39546 24.4026 7.43506 24.3561C7.47466 24.3096 7.50611 24.2541 7.52758 24.193C7.54904 24.1319 7.5601 24.0663 7.5601 24C7.5601 23.9337 7.54904 23.8681 7.52758 23.807C7.50611 23.7459 7.47466 23.6904 7.43506 23.6439C7.39546 23.5974 7.34849 23.5607 7.29688 23.536C7.24527 23.5113 7.19006 23.4991 7.13445 23.5H4.61642C2.52537 23.5 0.839382 21.4913 0.839382 19V12.5C0.840151 12.4331 0.829645 12.3667 0.808487 12.3047C0.787329 12.2428 0.755948 12.1865 0.716204 12.1392C0.67646 12.092 0.62916 12.0547 0.577105 12.0296C0.52505 12.0045 0.469299 11.9921 0.413153 11.9932ZM31.5737 11.9932C31.4626 11.9952 31.2517 12.0498 31.1743 12.1448C31.0968 12.2398 31.0542 12.3676 31.0557 12.5V19C31.0557 21.4913 29.3697 23.5 27.2787 23.5H24.7606C24.705 23.4991 24.6498 23.5113 24.5982 23.536C24.5466 23.5607 24.4996 23.5974 24.46 23.6439C24.4204 23.6904 24.389 23.7459 24.3675 23.807C24.346 23.8681 24.335 23.9337 24.335 24C24.335 24.0663 24.346 24.1319 24.3675 24.193C24.389 24.2541 24.4204 24.3096 24.46 24.3561C24.4996 24.4026 24.5466 24.4393 24.5982 24.464C24.6498 24.4887 24.705 24.5009 24.7606 24.5H27.2787C29.8233 24.5 32 22.0317 32 19V12.5C32.0007 12.4331 31.9902 12.3667 31.9691 12.3047C31.9479 12.2428 31.9165 12.1865 31.8768 12.1392C31.837 12.092 31.7897 12.0547 31.7377 12.0296C31.6856 12.0045 31.6299 11.9921 31.5737 11.9932Z"
                                          fill="#FFFEFF"/>
                                </svg>
                            </div>
                            <div className={'flex lg:w-[130px] w-[140px] justify-center items-center ml-[20px]'}>
                                {item.is_reservable ?
                                    <label
                                        className="cursor-pointer  duration-300 relative overflow-hidden w-[30px] h-[30px] flex justify-center items-center  rounded-lg bg-[#002256] ">
                                        <input className="peer  hidden" disabled={!item.is_reservable} type="checkbox"
                                               onChange={() => {
                                                   //@ts-ignore
                                                   const newselectedData = [...selectedDay]
                                                   if (item.is_reservable == true) {
                                                       let findDate = newselectedData.findIndex(o => {
                                                           return item.date === o.date
                                                       })
                                                       if (findDate == -1) {
                                                           newselectedData.push({
                                                               id: item.date,
                                                               date: item.date
                                                           })
                                                           setSelectedDay(newselectedData)
                                                       } else {
                                                           newselectedData.splice(findDate, 1)
                                                           setSelectedDay(newselectedData)
                                                       }
                                                   }
                                               }}
                                        />
                                        <div
                                            className="w-[30px] h-[30px]   opacity-0 peer-checked:opacity-100 bg-[#44C0ED] scale-0 transition-all z-20 duration-300  peer-checked:transition-all rounded-md top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-[#44C0ED]">
                                        </div>
                                    </label> :
                                    <FullTypoGraphi/>
                                }
                            </div>
                        </div>
                    ))}
            </div>
            <div className={'flex w-[100%] justify-start items-center mt-[65px] '}>
                <div onClick={() => {
                    setLoading(true)
                    setWeek('next-week')
                }}
                     className={`w-[170px] cursor-pointer  h-[45px] bg-[#002256] rounded-[15px] flex justify-center items-center ${week == 'next-week' ? 'text-[#44C0ED]' : 'text-white'} text-sm font-bold `}>هفته
                    بعد
                </div>
                <div onClick={() => {
                    setLoading(true)
                    setWeek('this-week')
                }}
                     className={`w-[170px]  cursor-pointer h-[45px]  rounded-[15px] flex justify-center items-center text-sm font-bold ${week == 'this-week' ? 'text-[#44C0ED]' : 'text-white'}`}>هفته
                    جاری
                </div>
            </div>
            <div className={'flex justify-end w-[85%] mt-[16px]'}>
                <div className="text-right"><span
                    className="text-white text-sm font-bold ">توجه</span><span
                    className="text-white text-sm font-extrabold "> :</span><span
                    className="text-white text-sm font-bold "> </span><span
                    className="text-white text-sm font-normal ">قوانین و شرایط </span><span
                    className="text-white text-sm font-normal ">لغو رزرو</span><span
                    className="text-white text-sm font-normal "> را از</span><span
                    className="text-orange-500 text-sm font-normal "> </span><span
                    className="text-orange-500 text-sm font-bold cursor-pointer">اینجا</span><span
                    className="text-orange-500 text-sm font-normal "> </span><span
                    className="text-white text-sm font-normal ">مشاهده کنید</span></div>
            </div>
            <button disabled={selectedDay.length == 0} onClick={handleReserve}
                    className={'flex justify-center disabled:opacity-50  items-center text-white text-lg font-medium bg-[#026AE1] w-[40%] lg:w-[408px] h-12 rounded-xl mt-[40px]'}>
                پرداخت
            </button>
        </div>
    );
};

export default DailySession;