'use client'
import React, {useEffect, useState} from 'react';
import ModalCancelReserve from "@/app/user/reservehistory/components/ModalCancelReserve";
import axios from "axios";
import IconEmptyWallet from "@/app/user/walletuser/data/IconEmptyWallet";
import CalenderReserves from "@/app/user/reservehistory/components/CalenderReserves";
import LoadingSmall from "@/app/components/LoadingSmall";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import LoadingMinimal from "@/app/components/LoadingMinimal";
import AOS from "aos";


const Section1HistoryReserve = () => {
    const [length, setLength] = useState(3)
    const [reserveData, setReserveData] = useState<any>()
    const [url, setUrl] = useState<any>('https://www.cowork.v1r.ir/api/v1/reservation')
    const [props, setProps] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [firstLoad, setFirstLoad] = useState(true)
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    useEffect(() => {
        getHistory()
        setTimeout(() => setFirstLoad(false), 2000)
    }, [url]);
    const getHistory = async () => {
        try {
            const token = localStorage?.getItem('userToken');
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setReserveData(res.data.data)
            setProps(res.data.links)
            setLoading(false)
        } catch (e) {
            //console.log(e)
        }
    }
    const pagination = () => {
        //console.log('props', props)
        return (
            <div className={'flex justify-center mt-3'}>
                {/*// @ts-ignore*/}
                {props?.slice(1, props.length - 1).map(item => (
                    <div key={item.label} onClick={() => {
                        setUrl(item.url)
                        setLoading(true)
                    }}
                         className={'cursor-pointer text-orange-500 w-4  mx-2  rounded-full flex justify-center  items-center'}>
                        {item.label}
                    </div>
                ))}
            </div>
        )
    }
    const showButton = () => {
        if (length !== 3) {
            return (
                <p onClick={() => setLength(3)}
                   className={'text-[#FF792C] cursor-pointer lg:ml-20 text-[14px] font-[400] mt-2  ml-3'}
                   style={{direction: "ltr"}}>نمایش کمتر</p>
            )
        } else {
            return (
                <p onClick={() => setLength(reserveData.length)}
                   className={'text-[#FF792C] cursor-pointer lg:ml-20 text-[14px] font-[400] mt-2  ml-3'}
                   style={{direction: "ltr"}}>نمایش همه</p>
            )
        }
    }
    // @ts-ignore

    return (
        <div>
            {firstLoad ? <div className={'mt-10'}><LoadingMinimal/></div> :
                reserveData?.length === 0 ?
                    <div className={'w-[100%] -mt-24 '}>
                        <p className={'text-[#FFFEFF] text-[16px] font-[400] text-center mt-[180px]'}>
                            ! تاریحچه ای وجود ندارد</p>
                        <IconEmptyWallet/>
                    </div>
                    :
                    <div>
                        <div className={'flex  px-3 items-center lg:px-0 justify-between '}>
                            <CalenderReserves/>
                            <select
                                className={'lg:w-[15%] lg:ml-[33%] lg:mr-[27px] text-center mt-[45px]  h-[30px] bg-[#FF792C] text-[12px] text-[#FFFFEF] rounded-[12px]'}
                                style={{direction: "rtl"}}>
                                <option>بر اساس جدیدترین</option>
                                <option>بر اساس جدیدترین</option>
                                <option>بر اساس جدیدترین</option>
                            </select>
                            <p className={' lg:w-[121px]  mt-[45px]  lg:mr-[65px]  text-[#FFFEFF] text-[18px] font-[500] '}
                               style={{direction: "rtl"}}>
                                تاریخچه رزرو ها
                            </p>
                        </div>
                        <div
                            className={'lg:w-[88.27%] w-[95%] justify-between lg:justify-start px-2 mt-[32px] h-[52px] flex mx-auto rounded-[5px] items-center bg-[#0A2E65]'}
                            style={{direction: "rtl"}}>
                            <p className={'text-[#FF792C] text-[14px] lg:mr-[7.13%] font-[400]'}>#</p>
                            <p className={'text-[#FFFFEF] text-[14px] lg:mr-[16.25%] font-[400]'}>تاریخ</p>
                            <p className={'text-[#FFFFEF] text-[14px] lg:mr-[14.76%] font-[400]'}>نوع اشتراک</p>
                            <p className={'text-[#FFFFEF] text-[14px] lg:mr-[13.57%] font-[400]'}>مجموع</p>
                            <p className={'text-[#FFFFEF] text-[14px] lg:mr-[15.85%] font-[400]'}>وضعیت</p>
                        </div>
                        <div
                            className={'flex flex-col mt-[16px]  overflow-auto mx-auto w-[95%]  lg:justify-start lg:w-[88.27%]'}
                            style={{direction: "rtl"}}>
                            {loading ? <LoadingMakeenLogo/>
                                :
                                    // @ts-ignore
                                reserveData?.slice(0, length).map(item => (
                                        <div data-aos={'fade-down'} key={item.id}
                                             className={'w-[100%] h-[52px] border-[#FF792C] px-2 border-r-[2px] flex items-center  my-1 bg-[#0A2E65] rounded-[5px]'}>
                                            <div
                                                className={' justify-between w-[100%] lg:w-[89%] h-[100%] flex items-center'}>
                                                <p className={'lg:mr-[6.14%] ml-2 text-[#C9C9C9] text-[14px]'}>{item.id}</p>
                                                <p className={'text-[#C9C9C9] text-[14px]'}>{item.j_date}</p>
                                                <p className={'text-[#C9C9C9] text-[14px]'}>{item.fa_type}</p>
                                                <p className={'text-[#C9C9C9] text-[14px]'}> {item.price} تومان </p>
                                                <p className={'lg:ml-[3.5%] mr-2 text-[#C9C9C9] text-[14px]'}>{item.status == 'reserved' ? 'پرداخت شده' : item.status}</p>
                                            </div>
                                            <ModalCancelReserve item={item.disable}/>
                                        </div>
                                    ))}
                        </div>
                        {pagination()}
                        {showButton()}
                    </div>}
        </div>
    );
};

export default Section1HistoryReserve;