'use client'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import LoadingMinimal from "@/app/components/LoadingMinimal";
import Atropos from "atropos/react";
import Swal from "sweetalert2";
import usePriceDefault from "@/app/store/react-query/usePriceDefault";
import FullTypoGraphi from "@/app/components/FullTypoGraphi";
import AOS from "aos";

const HourlySession = () => {
    const [week, setWeek] = useState('this-week')
    const [loading, setLoading] = useState(false)
    const [loadingWeek, setLoadingWeek] = useState(true)
    const [daysweek, setDaysWeek] = useState<any>()
    const [peakDayDate, setPeakDayDate] = useState<any>()
    const [peakdayName, setPeakdayName] = useState<any>()
    const [days, setDays] = useState<any>()
    const [selectedDay, setSelectedDay] = useState<any>([])
    const {priceDefault}=usePriceDefault()
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    useEffect(() => {
        getWeekDay()
        handlePeaksDay()
    }, [week, peakDayDate]);
    const getWeekDay = async () => {
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/session-room/status/${week}/daily`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            //console.log('ressssss', res.data)
            setDaysWeek(res.data.slice(0, 6))
            setLoadingWeek(false)
        } catch (e) {
            //console.log(e)
        }
    }
    const handlePeaksDay = async () => {
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/session-room/status/hourly/${peakDayDate}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            setDays(res.data)
            setLoading(false)
        } catch (e) {
            //console.log(e)
        }
    }
    //console.log('days', days)
    //@ts-ignore
    const toggleCheckbox = (item) => {
        //@ts-ignore

        const itemIndex = selectedDay.findIndex(selectedDay => selectedDay.id === item.id);

        if (itemIndex === -1) {
            setSelectedDay([...selectedDay, item]);
        } else {
            const updatedSelectedItems = [...selectedDay];
            updatedSelectedItems.splice(itemIndex, 1);
            setSelectedDay(updatedSelectedItems);
        }
    };
    const reserve = async (e: any) => {
        let dates: any = []
        //@ts-ignore
        selectedDay.map(i => {
            return dates.push(i.date + ' ' + i.id + ':00')
        })
        //console.log('dates', dates)
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.post('https://www.cowork.v1r.ir/api/v1/reservation/session-room/reserve/hourly',
                {
                    dates: dates
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            //console.log(res)
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
                text: `${res?.response?.data.message}`,
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
        }
    }
    // //console.log('selectedDay',selectedDay)
    return (
        <div className={'lg:w-[80%] flex flex-col items-center mx-auto'}>
            <div className={'text-white text-base font-bold mt-[32px]'}>رزرو ساعتی اتاق جلسات</div>
            <div className={'text-orange-500 text-sm font-normal mt-[8px]'}>هزینه هر ساعت {priceDefault?.data.sessionRoom.price.normal.perHour} تومان</div>
            <div className={'flex justify-center items-center mt-4 lg:mt-[33px]'}>
                <div className={'text-white text-sm font-bold mr-[8px]'} dir={'rtl'}>انتخاب روزهای هفته :</div>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                          d="M5.45499 0.750977C5.18061 0.750977 4.95913 0.963642 4.95913 1.22709V3.32374C3.07489 3.40151 1.9179 3.64423 1.1576 4.37269C-0.00600402 5.48997 -0.00435122 7.54825 0.000607307 11.6524V12.4127V13.1015C-0.00269838 16.7819 -0.00437707 18.6291 1.0898 19.6797C2.12944 20.678 3.99221 20.751 7.54913 20.751C7.84498 20.751 8.15081 20.751 8.46981 20.7494L9.23005 20.7479C9.50443 20.7479 9.72591 20.5336 9.72591 20.2718C9.72591 20.0083 9.50443 19.7956 9.23005 19.7956L8.4682 19.7972C4.5774 19.8035 2.62372 19.8067 1.78903 19.0052C0.985753 18.2339 0.987393 16.4105 0.990699 13.1015V12.4127V11.6524C0.990699 9.84472 0.98893 8.46248 1.07818 7.41661H18.0928C18.149 8.06095 18.1704 8.83549 18.1786 9.76868C18.1803 10.0305 18.4018 10.2417 18.6745 10.2417H18.6777C18.9521 10.2401 19.172 10.024 19.1704 9.76217C19.1472 6.87531 19.0363 5.05515 17.7057 4.12037C16.9487 3.58712 15.853 3.39354 14.2151 3.32529V1.22709C14.2151 0.963642 13.9936 0.750977 13.7192 0.750977C13.4448 0.750977 13.2233 0.963642 13.2233 1.22709V3.29646C12.4977 3.28536 11.683 3.28713 10.7657 3.28872C10.3905 3.2903 9.99865 3.29027 9.58709 3.29027C9.17554 3.29027 8.78367 3.2903 8.40847 3.28872C7.48949 3.28713 6.67478 3.28536 5.95084 3.29646V1.22709C5.95084 0.963642 5.72936 0.750977 5.45499 0.750977ZM7.10622 4.23971C7.51468 4.23896 7.94778 4.23996 8.40686 4.24095C8.78205 4.24254 9.17554 4.2425 9.58709 4.2425C9.99865 4.2425 10.3921 4.24254 10.7673 4.24095C14.2598 4.2346 16.1853 4.22989 17.1208 4.88693C17.5555 5.19323 17.8132 5.68989 17.9653 6.46438H1.20537C1.33264 5.81527 1.53614 5.35666 1.85844 5.04719C2.6047 4.33202 4.24696 4.24496 7.10622 4.23971ZM14.5456 10.2733C11.5374 10.2733 9.09124 12.6222 9.09124 15.5106C9.09124 18.399 11.5374 20.7479 14.5456 20.7479C17.5538 20.7479 20 18.399 20 15.5106C20 12.6222 17.5538 10.2733 14.5456 10.2733ZM14.5456 11.2255C17.0067 11.2255 19.0083 13.1475 19.0083 15.5106C19.0083 17.8737 17.0067 19.7956 14.5456 19.7956C12.0845 19.7956 10.0829 17.8737 10.0829 15.5106C10.0829 13.1475 12.0845 11.2255 14.5456 11.2255ZM14.5456 13.13C14.2712 13.13 14.0498 13.3427 14.0498 13.6061V15.5106C14.0498 15.6376 14.1028 15.758 14.1954 15.8469L15.5983 17.1944C15.6959 17.288 15.8217 17.3342 15.9489 17.3342C16.0762 17.3342 16.2033 17.288 16.2992 17.1944C16.4926 17.0087 16.4926 16.7071 16.2992 16.5214L15.0415 15.3138V13.6061C15.0415 13.3427 14.82 13.13 14.5456 13.13Z"
                          fill="#FFFEFF"/>
                </svg>
            </div>
            <div
                className={'flex-wrap items-center w-[100%] flex justify-center lg:w-[70%] mx-auto lg:justify-between mt-[26px]'}
                dir={'rtl'}>
                {loadingWeek ? <LoadingMinimal/> :
                    //@ts-ignore
                    daysweek?.map(i => (
                        <Atropos data-aos={'fade-down'} key={i.date} highlight={false} shadow={false}>
                            <button  onClick={() => {
                                setPeakDayDate(i.date)
                                setPeakdayName(i.day_of_week)
                                setLoading(true)
                                setSelectedDay([])
                            }}
                                    className={`w-[140px] disabled:opacity-50  mx-1 my-1  h-10 ${peakdayName == i.day_of_week ? 'bg-[#0B99DE]' : 'bg-[#002256]'} rounded-xl flex items-center justify-center text-white `}>
                                <span data-atropos-offset="8">{i.day_of_week}</span>
                            </button>
                        </Atropos>
                    ))}

            </div>
            <div className={'flex w-[95%] mx-auto flex-col justify-center mt-[48px]'}>
                {loading ? <LoadingMinimal/> :
                    //@ts-ignore
                    days?.map(item => (
                        <div data-aos={'fade-up'} key={item.index}
                             className={`${item.is_reservable ? '':'opacity-50'} flex w-[100%] h-[56px] my-[4px]`}>
                            <div
                                className={'flex  text-center justify-between items-center  px-2 lg:px-[5%] w-[80%] lg:w-[450px] bg-[#002256] rounded-l-xl lg:rounded-l-3xl'}>
                                <div className={'text-[#44C0ED] text-sm font-normal '}
                                     dir={'rtl'}>{item.start} الی {item.end}</div>
                                <div className={'text-white text-sm font-normal '}>{item.j_date}</div>
                                <div className={'text-white text-sm font-normal '}>{item.day_of_week}</div>
                            </div>
                            <div
                                className={'flex w-[20%] px-2 lg:w-[150px] bg-[#002256] justify-center items-center border-l-2 border-[#0A2E65] rounded-r-xl lg:rounded-r-3xl'}>
                                <svg width="32" height="30" viewBox="0 0 32 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector"
                                          d="M5.03609 0C3.41862 0 2.0984 1.57293 2.0984 3.5C2.0984 5.42707 3.41862 7 5.03609 7C6.65357 7 7.97379 5.42707 7.97379 3.5C7.97379 1.57293 6.65357 0 5.03609 0ZM26.859 0C25.2415 0 23.9213 1.57293 23.9213 3.5C23.9213 5.42707 25.2415 7 26.859 7C28.4765 7 29.7967 5.42707 29.7967 3.5C29.7967 1.57293 28.4765 0 26.859 0ZM5.03609 1C6.19995 1 7.13445 2.11337 7.13445 3.5C7.13445 4.88663 6.19995 6 5.03609 6C3.87223 6 2.93774 4.88663 2.93774 3.5C2.93774 2.11337 3.87223 1 5.03609 1ZM26.859 1C28.0229 1 28.9573 2.11337 28.9573 3.5C28.9573 4.88663 28.0229 6 26.859 6C25.6951 6 24.7606 4.88663 24.7606 3.5C24.7606 2.11337 25.6951 1 26.859 1ZM5.03609 8C3.18684 8 1.67872 9.79678 1.67872 12V18.75C1.67872 20.8152 3.09285 22.5 4.82626 22.5H9.39018L10.0746 29.5576C10.0865 29.6795 10.1356 29.7919 10.2125 29.8735C10.2894 29.9551 10.3888 30.0001 10.4918 30H12.5902C12.7015 30 12.8082 29.9473 12.8869 29.8535C12.9656 29.7598 13.0098 29.6326 13.0098 29.5V19.75C13.0098 18.2372 11.9714 17 10.7017 17H8.39346V12C8.39346 9.79678 6.88535 8 5.03609 8ZM26.859 8C25.0097 8 23.5016 9.79678 23.5016 12V17H21.1934C19.9237 17 18.8852 18.2372 18.8852 19.75V29.5C18.8853 29.6326 18.9295 29.7598 19.0082 29.8535C19.0869 29.9473 19.1936 30 19.3049 30H21.4033C21.5063 30.0001 21.6057 29.9551 21.6826 29.8735C21.7595 29.7919 21.8086 29.6795 21.8205 29.5576L22.5049 22.5H27.0688C28.8022 22.5 30.2164 20.8152 30.2164 18.75V12C30.2164 9.79678 28.7082 8 26.859 8ZM5.03609 9C6.43174 9 7.55412 10.3372 7.55412 12V17.5H6.50494C5.69131 17.5 5.03609 16.7194 5.03609 15.75V13.75C5.03653 13.7165 5.03132 13.6833 5.02077 13.6522C5.01021 13.6212 4.99453 13.593 4.97465 13.5693C4.95477 13.5456 4.93111 13.5269 4.90505 13.5144C4.879 13.5018 4.85109 13.4956 4.82298 13.4961C4.79542 13.4966 4.76822 13.5036 4.74293 13.5166C4.71763 13.5297 4.69474 13.5485 4.67556 13.5721C4.65638 13.5957 4.64129 13.6235 4.63114 13.654C4.62099 13.6846 4.61599 13.7172 4.61642 13.75V15.75C4.61642 16.9896 5.46447 18 6.50494 18H8.18363H10.7017C11.5177 18 12.1705 18.7778 12.1705 19.75V29H10.8656L10.1812 21.9424C10.1693 21.8207 10.1203 21.7084 10.0436 21.6268C9.96683 21.5453 9.86761 21.5002 9.76477 21.5H4.82626C3.54642 21.5 2.51807 20.2748 2.51807 18.75V12C2.51807 10.3372 3.64045 9 5.03609 9ZM26.859 9C28.2546 9 29.377 10.3372 29.377 12V18.75C29.377 20.2748 28.3487 21.5 27.0688 21.5H22.1303C22.0275 21.5002 21.9283 21.5453 21.8515 21.6268C21.7747 21.7084 21.7258 21.8207 21.7139 21.9424L21.0295 29H19.7246V19.75C19.7246 18.7778 20.3774 18 21.1934 18H23.9213H25.3901C26.4306 18 27.2787 16.9896 27.2787 15.75V13.75C27.2791 13.7165 27.2739 13.6833 27.2633 13.6522C27.2528 13.6212 27.2371 13.593 27.2172 13.5693C27.1973 13.5456 27.1737 13.5269 27.1476 13.5144C27.1216 13.5018 27.0937 13.4956 27.0655 13.4961C27.038 13.4966 27.0108 13.5036 26.9855 13.5166C26.9602 13.5297 26.9373 13.5485 26.9181 13.5721C26.899 13.5957 26.8839 13.6235 26.8737 13.654C26.8636 13.6846 26.8586 13.7172 26.859 13.75V15.75C26.859 16.7194 26.2038 17.5 25.3901 17.5H24.341V12C24.341 10.3372 25.4633 9 26.859 9ZM0.413153 11.9932C0.301993 11.9952 0.196063 12.0498 0.118612 12.1448C0.0411609 12.2398 -0.00148288 12.3676 3.93997e-05 12.5V19C3.93997e-05 22.0317 2.07178 24.5 4.61642 24.5H7.13445C7.19006 24.5009 7.24527 24.4887 7.29688 24.464C7.34849 24.4393 7.39546 24.4026 7.43506 24.3561C7.47466 24.3096 7.50611 24.2541 7.52758 24.193C7.54904 24.1319 7.5601 24.0663 7.5601 24C7.5601 23.9337 7.54904 23.8681 7.52758 23.807C7.50611 23.7459 7.47466 23.6904 7.43506 23.6439C7.39546 23.5974 7.34849 23.5607 7.29688 23.536C7.24527 23.5113 7.19006 23.4991 7.13445 23.5H4.61642C2.52537 23.5 0.839382 21.4913 0.839382 19V12.5C0.840151 12.4331 0.829645 12.3667 0.808487 12.3047C0.787329 12.2428 0.755948 12.1865 0.716204 12.1392C0.67646 12.092 0.62916 12.0547 0.577105 12.0296C0.52505 12.0045 0.469299 11.9921 0.413153 11.9932ZM31.5737 11.9932C31.4626 11.9952 31.2517 12.0498 31.1743 12.1448C31.0968 12.2398 31.0542 12.3676 31.0557 12.5V19C31.0557 21.4913 29.3697 23.5 27.2787 23.5H24.7606C24.705 23.4991 24.6498 23.5113 24.5982 23.536C24.5466 23.5607 24.4996 23.5974 24.46 23.6439C24.4204 23.6904 24.389 23.7459 24.3675 23.807C24.346 23.8681 24.335 23.9337 24.335 24C24.335 24.0663 24.346 24.1319 24.3675 24.193C24.389 24.2541 24.4204 24.3096 24.46 24.3561C24.4996 24.4026 24.5466 24.4393 24.5982 24.464C24.6498 24.4887 24.705 24.5009 24.7606 24.5H27.2787C29.8233 24.5 32 22.0317 32 19V12.5C32.0007 12.4331 31.9902 12.3667 31.9691 12.3047C31.9479 12.2428 31.9165 12.1865 31.8768 12.1392C31.837 12.092 31.7897 12.0547 31.7377 12.0296C31.6856 12.0045 31.6299 11.9921 31.5737 11.9932Z"
                                          fill="#FFFEFF"/>
                                </svg>
                            </div>
                            <div className={'flex lg:w-[130px] w-[140px] justify-center items-center ml-[20px]'}>
                                {item.is_reservable?
                                <label
                                    className="cursor-pointer  duration-300 relative overflow-hidden w-[30px] h-[30px] flex justify-center items-center  rounded-lg bg-[#002256] ">
                                    <input className="peer  hidden" type="checkbox"
                                        //@ts-ignore
                                           checked={selectedDay.some(selectedDay => selectedDay.id === item.start)}
                                           onChange={() => toggleCheckbox({id: item.start, date: item.date})}/>
                                    <div
                                        className="w-[30px] h-[30px] opacity-0 peer-checked:opacity-100 bg-[#44C0ED] scale-0 transition-all z-20 duration-300  peer-checked:transition-all rounded-md top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-[#44C0ED]">
                                    </div>
                                </label>
                                :<FullTypoGraphi/>}
                            </div>
                        </div>
                    ))}
            </div>
            <div className={'flex w-[100%] justify-start items-center mt-[65px] '}>
                <div onClick={() => {
                    setLoading(true)
                    setLoadingWeek(true)
                    setWeek('next-week')
                    setPeakdayName('')
                    setSelectedDay([])
                }}
                     className={`w-[170px] h-[45px] cursor-pointer bg-[#002256] rounded-[15px] flex justify-center items-center ${week == 'next-week' ? 'text-[#44C0ED]' : 'text-white'} text-sm font-bold`}>هفته
                    بعد
                </div>
                <div onClick={() => {
                    setLoading(true)
                    setLoadingWeek(true)
                    setWeek('this-week')
                    setPeakdayName('')
                    setSelectedDay([])
                }}
                     className={`w-[170px] h-[45px] cursor-pointer  rounded-[15px] flex justify-center items-center text-sm font-bold ${week == 'this-week' ? 'text-[#44C0ED]' : 'text-white'}`}>هفته
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
            <button onClick={reserve} disabled={selectedDay.length == 0}
                    className={'flex disabled:opacity-50 justify-center items-center text-white text-lg font-medium bg-[#026AE1] w-[40%] lg:w-[408px] h-12 rounded-xl mt-[40px]'}>
                پرداخت
            </button>
        </div>
    );
};

export default HourlySession;