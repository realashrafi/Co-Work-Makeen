'use client'
import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import usePrice from "@/app/store/react-query/usePrice";
import LoadingMinimal from "@/app/components/LoadingMinimal";

const DailyCowork = () => {
    const [selectedDay, setSelectedDay] = useState<any>([])
    const [weeks, setWeeks] = useState<any>('this-week')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>()
    const {price} = usePrice()
    useEffect(() => {
        handleGet()
    }, [weeks]);
    const handleGet = async () => {
        try {
            const token = localStorage?.getItem('userToken')
            const res = await axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/cowork/status/${weeks}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            setData(res.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    // @ts-ignore
    // const {data :data, isLoading,refetch} = useQuery({
    //     queryKey: ['reserveDailyCowork'],
    //     queryFn: async function () {
    //         const token = localStorage?.getItem('userToken')
    //         const res = axios.get(`https://www.cowork.v1r.ir/api/v1/reservation/cowork/status/${weeks}`, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         return res
    //     },
    // })
    // if (isLoading) return <LoadingMakeenLogo/>


    console.log('selectedDate : ', selectedDay)
    const reserveDailyCowork = async (e: any) => {
        let dates: any = []
        //@ts-ignore
        selectedDay.map(i => {
            return dates.push(i.date)
        })
        e.preventDefault()
        try {
            const token = localStorage?.getItem('userToken');
            const res = await axios.post('https://www.cowork.v1r.ir/api/v1/reservation/cowork/reserve/long-term',
                {
                    dates: dates
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    }
                })
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

    return (
        <div className={'lg:w-[80%] flex  flex-col items-center mx-auto'}>
            <div className={'text-white text-base font-bold mt-[32px]'}>خرید اشتراک روزانه کوورک</div>
            <div className={'text-orange-500 text-sm font-normal mt-[8px]'}>هزینه روزانه {price?.data.perDay} تومان
            </div>
            <div
                className={'w-[100%] flex lg:justify-between  mx-auto  flex-wrap  lg:flex-nowrap items-center mt-2 lg:mt-[70px]'}>
                <div className={'flex  items-center  lg:mx-0 mx-auto lg:w-[90%]'}>
                    <div className={'text-white text-sm font-bold '}>تعداد صندلی های پر شده</div>
                    <div className={'w-4 h-4 rounded-full bg-[#FF792C] ml-2'}></div>
                </div>
                <div className={'flex items-center  mx-auto lg:mx-0 lg:w-[90%]'}>
                    <div className={'text-white text-sm font-bold '}>تعداد صندلی های باقی مانده</div>
                    <div className={'w-4 h-4 rounded-full bg-[#44C0ED] ml-2'}></div>
                </div>
                <div className={'flex items-center mx-auto lg:mx-0 lg:w-[90%]'}>
                    <div className={'text-white text-sm font-bold '}>تعداد کل صندلی ها</div>
                    <div className={'w-4 h-4 rounded-full bg-[#FFFEFF] ml-2'}></div>
                </div>
            </div>
            <div className={'flex lg:w-[99%] lg:flex-nowrap flex-wrap-reverse items-center justify-between mt-[36px]'}>
                <div className={'text-sky-400 text-xs font-bold'}>
                    بیشتر
                </div>
                <svg width="3" height="22" viewBox="0 0 3 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 203" d="M1.5 1L1.5 21" stroke="#44C0ED" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className={'lg:w-[60%] flex  flex-wrap justify-center '} dir={'rtl'}>
                    {/*// @ts-ignore*/}
                    {selectedDay?.map(item => (
                        <div dir={'ltr'}
                             className={'w-[146px] lg:my-0 my-1 h-8 bg-[#002256] rounded-[32px] justify-evenly flex items-center mx-[2px]'}
                            //@ts-ignore
                             key={item.id}>
                            {/*// @ts-ignore*/}
                            <div className={'text-white text-xs font-normal'}>{item.j_date}</div>
                            <svg onClick={() => {
                                //@ts-ignore
                                const selectedDays = [...selectedDay]
                                let findItemIndex = selectedDays.findIndex(o => {
                                    return o.id === item.id
                                })
                                selectedDays.splice(findItemIndex, 1)
                                setSelectedDay(selectedDays)
                                // setSelectedDay(selectedDay.filter(id => item.id == id))
                                // window.location.reload()
                            }} className={'cursor-pointer'} width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector"
                                      d="M0.181522 9.81848C0.0652937 9.70222 0 9.54455 0 9.38015C0 9.21575 0.0652937 9.05809 0.181522 8.94182L4.12709 4.99626L0.181522 1.05069C0.0685877 0.933761 0.00609703 0.777152 0.00750961 0.614594C0.00892219 0.452037 0.0741255 0.296539 0.189075 0.181589C0.304025 0.0666393 0.459523 0.00143602 0.622081 2.3437e-05C0.784638 -0.00138914 0.941247 0.0611015 1.05818 0.174036L5.00374 4.1196L8.94931 0.174036C9.06624 0.0611015 9.22285 -0.00138914 9.38541 2.3437e-05C9.54796 0.00143602 9.70346 0.0666393 9.81841 0.181589C9.93336 0.296539 9.99856 0.452037 9.99998 0.614594C10.0014 0.777152 9.9389 0.933761 9.82596 1.05069L5.8804 4.99626L9.82596 8.94182C9.9389 9.05875 10.0014 9.21536 9.99998 9.37792C9.99856 9.54048 9.93336 9.69598 9.81841 9.81093C9.70346 9.92588 9.54796 9.99108 9.38541 9.99249C9.22285 9.9939 9.06624 9.93141 8.94931 9.81848L5.00374 5.87291L1.05818 9.81848C0.941913 9.93471 0.784247 10 0.61985 10C0.455453 10 0.297786 9.93471 0.181522 9.81848Z"
                                      fill="#FFFEFF"/>
                            </svg>
                        </div>
                    ))}
                </div>
                <svg width="3" height="22" viewBox="0 0 3 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Line 203" d="M1.5 1L1.5 21" stroke="#44C0ED" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div dir={'rtl'} className={'text-white text-sm font-bold '}>{selectedDay.length} روز</div>
                <div dir={'rtl'} className={'text-slate-50 text-sm font-bold'}>
                    روزهای انتخاب شده :
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                          d="M5.45499 0C5.18061 0 4.95913 0.212665 4.95913 0.476117V2.57277C3.07489 2.65053 1.9179 2.89325 1.1576 3.62171C-0.00600402 4.739 -0.00435122 6.79727 0.000607307 10.9014V11.6618V12.3505C-0.00269838 16.0309 -0.00437707 17.8781 1.0898 18.9287C2.12944 19.927 3.99221 20 7.54913 20C7.84498 20 8.15081 20 8.46981 19.9985L9.23005 19.9969C9.50443 19.9969 9.72591 19.7826 9.72591 19.5208C9.72591 19.2573 9.50443 19.0447 9.23005 19.0447L8.4682 19.0462C4.5774 19.0526 2.62372 19.0557 1.78903 18.2542C0.985753 17.4829 0.987393 15.6595 0.990699 12.3505V11.6618V10.9014C0.990699 9.09374 0.98893 7.7115 1.07818 6.66563H18.0928C18.149 7.30998 18.1704 8.08451 18.1786 9.0177C18.1803 9.27956 18.4018 9.49072 18.6745 9.49072H18.6777C18.9521 9.48913 19.172 9.27305 19.1704 9.01119C19.1472 6.12434 19.0363 4.30417 17.7057 3.36939C16.9487 2.83614 15.853 2.64256 14.2151 2.57432V0.476117C14.2151 0.212665 13.9936 0 13.7192 0C13.4448 0 13.2233 0.212665 13.2233 0.476117V2.54549C12.4977 2.53438 11.683 2.53615 10.7657 2.53774C10.3905 2.53933 9.99865 2.53929 9.58709 2.53929C9.17554 2.53929 8.78367 2.53933 8.40847 2.53774C7.48949 2.53615 6.67478 2.53438 5.95084 2.54549V0.476117C5.95084 0.212665 5.72936 0 5.45499 0ZM7.10622 3.48873C7.51468 3.48798 7.94778 3.48898 8.40686 3.48997C8.78205 3.49156 9.17554 3.49152 9.58709 3.49152C9.99865 3.49152 10.3921 3.49156 10.7673 3.48997C14.2598 3.48362 16.1853 3.47891 17.1208 4.13595C17.5555 4.44226 17.8132 4.93892 17.9653 5.7134H1.20537C1.33264 5.06429 1.53614 4.60569 1.85844 4.29621C2.6047 3.58104 4.24696 3.49398 7.10622 3.48873ZM14.5456 9.52233C11.5374 9.52233 9.09124 11.8712 9.09124 14.7596C9.09124 17.6481 11.5374 19.9969 14.5456 19.9969C17.5538 19.9969 20 17.6481 20 14.7596C20 11.8712 17.5538 9.52233 14.5456 9.52233ZM14.5456 10.4746C17.0067 10.4746 19.0083 12.3965 19.0083 14.7596C19.0083 17.1227 17.0067 19.0447 14.5456 19.0447C12.0845 19.0447 10.0829 17.1227 10.0829 14.7596C10.0829 12.3965 12.0845 10.4746 14.5456 10.4746ZM14.5456 12.379C14.2712 12.379 14.0498 12.5917 14.0498 12.8552V14.7596C14.0498 14.8866 14.1028 15.0071 14.1954 15.0959L15.5983 16.4434C15.6959 16.537 15.8217 16.5832 15.9489 16.5832C16.0762 16.5832 16.2033 16.537 16.2992 16.4434C16.4926 16.2577 16.4926 15.9561 16.2992 15.7704L15.0415 14.5628V12.8552C15.0415 12.5917 14.82 12.379 14.5456 12.379Z"
                          fill="#F8F9FC"/>
                </svg>
            </div>
            <div className={'flex w-[100%]  flex-col mt-[50px]  '}>
                {loading ?
                    <LoadingMinimal/>
                    :
                    //@ts-ignore
                    data?.slice(0, 6).map((item, index) => (
                        <div key={item.id}
                             className={`${!item.is_reservable ? 'opacity-30' : ''}  flex lg:w-[100%]  h-[56px]  my-1`}>
                            <div
                                className={'flex justify-around lg:w-[180px] w-[30%] bg-[#002256] rounded-l-xl lg:rounded-l-full'}>
                                <div className={'flex items-center text-sm font-bold text-[#FF792C]'}>
                                    {item.reservedChairs}
                                    <div className="w-4 h-4 bg-[#FF792C] rounded-full lg:ml-[8px]"/>
                                </div>
                                <div className={'flex items-center text-sm font-bold text-[#44C0ED]'}>
                                    {item.remainingChairs}
                                    <div className="w-4 h-4 bg-[#44C0ED] rounded-full lg:ml-[8px]"/>
                                </div>
                                <div className={'flex items-center text-sm font-bold text-[#EEEFEE]'}>
                                    {item.totalChairs}
                                    <div className="w-4 h-4 bg-[#EEEFEE] rounded-full lg:ml-[8px]"/>
                                </div>
                            </div>
                            <div
                                className={'flex lg:w-[435px] w-[80%] relative items-center justify-around bg-[#002256] rounded-r-xl lg:rounded-r-[14px] border-[#0A2E65] border-l-[2px]'}>
                                <div
                                    className={'text-white lg:border-none border-[#0A2E65] border-[1px] text-sm font-normal'}
                                    dir={'rtl'}>{item.open} الی {item.close}</div>
                                <div className={'text-white  text-sm font-normal'}>{item.j_date}</div>
                                <div className={'text-white  text-sm font-normal'}>{item.day_of_week}</div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="30" height="30" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use xlinkHref="#image0_2944_671" transform="scale(0.0078125)"/>
                                        </pattern>
                                        <image id="image0_2944_671" width="128" height="128"
                                               xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                {/*<div*/}
                                {/*    className={`absolute right-0 rounded-full w-1 h-[30px]  ${item.checked ? 'bg-[#44C0ED]' : ''}`}></div>*/}
                            </div>
                            <div className={'flex items-center ml-4 lg:ml-[20px]'}>
                                <label
                                    className="cursor-pointer  duration-300 relative overflow-hidden w-[30px] h-[30px] flex justify-center items-center  rounded-lg bg-[#002256] ">
                                    <input className="peer  hidden" type="checkbox" disabled={!item.is_reservable}
                                           onChange={() => {
                                               const newSelectedDate = [...selectedDay]
                                               if (item.is_reservable == true) {
                                                   //@ts-ignore
                                                   let findDate = newSelectedDate.findIndex(o => {
                                                       return item.date === o.date
                                                   })
                                                   if (findDate == -1) {
                                                       newSelectedDate.push({
                                                           id: item.date,
                                                           date: item.date,
                                                           j_date: item.j_date
                                                       })
                                                       setSelectedDay(newSelectedDate)
                                                   } else {
                                                       newSelectedDate.splice(findDate, 1)
                                                       setSelectedDay(newSelectedDate)
                                                   }
                                               }
                                           }}/>
                                    <div
                                        className="w-[30px] h-[30px]   opacity-0 peer-checked:opacity-100 bg-[#44C0ED] scale-0 transition-all z-20 duration-300  peer-checked:transition-all rounded-md top-2 left-2 peer-checked:scale-100 peer-checked:duration-300 peer-checked:bg-[#44C0ED]">
                                    </div>
                                </label>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={'flex w-[100%] justify-start items-center mt-[65px] '}>
                <button onClick={() => {
                    setWeeks('next-week')
                    setLoading(true)
                    // refetch()
                }}
                        className={`w-[170px] h-[45px] bg-[#002256] rounded-[15px] flex justify-center items-center ${weeks == 'next-week' ? 'text-[#44C0ED]' : 'text-white'} text-sm font-bold `}>هفته
                    بعد
                </button>
                <button onClick={() => {
                    setWeeks('this-week')
                    setLoading(true)
                    // refetch()
                }}
                        className={`w-[170px] h-[45px]  rounded-[15px] flex justify-center items-center text-sm font-bold ${weeks == 'this-week' ? 'text-[#44C0ED]' : 'text-white'}`}>هفته
                    جاری
                </button>
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
            <div className={'flex justify-end w-[85%] mt-[16px]'}>
                <div>
                    <span
                        className="text-white text-sm font-bold">مبلغ قابل پرداخت : </span><span
                    className="text-white text-base font-bold ">{price?.data.perDay * selectedDay.length}</span><span
                    className="text-white text-sm font-bold"> </span><span
                    className="text-white text-sm font-normal">تومان</span>
                </div>
            </div>
            <button onClick={reserveDailyCowork} disabled={selectedDay.length==0}
                    className={'flex justify-center  disabled:opacity-50 items-center text-white text-lg font-medium bg-[#026AE1] w-[40%] lg:w-[408px] h-12 rounded-xl mt-[40px]'}>
                پرداخت
            </button>
        </div>
    );
};

export default DailyCowork;