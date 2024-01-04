'use client'
import React, {useState} from 'react';
import ModalCancelReserve from "@/app/user/reservehistory/components/ModalCancelReserve";

const historyData = [
    {
        id: 1,
        num: '1603',
        date: '19 آبان 1402',
        sub: 'روزانه کوورک',
        sum: '30',
        status: 'پرداخت شده',
        disable: false
    }, {
        id: 2,
        num: '1602',
        date: '16 آبان 1402',
        sub: 'روزانه اتاق جلسات',
        sum: '30',
        status: 'پرداخت شده',
        disable: false
    }, {
        id: 3,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    },  {
        id: 4,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    },  {
        id: 5,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    }, {
        id: 6,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    },  {
        id: 7,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    },  {
        id: 8,
        num: '1601',
        date: '18 مهر 1402',
        sub: 'ماهانه کوورک',
        sum: '500',
        status: 'پرداخت شده',
        disable: true
    },
]

const Section1HistoryReserve = () => {
    const [length, setLength] = useState(3)
    const showButton = () => {
        if (length !== 3) {
            return (
                <p onClick={() => setLength(3)}
                   className={'text-[#FF792C] cursor-pointer ml-[15px] text-[14px] font-[400] mt-[27px] '}
                   style={{direction: "ltr"}}>نمایش کمتر</p>
            )
        } else {
            return (
                <p onClick={() => setLength(historyData.length)}
                   className={'text-[#FF792C] cursor-pointer ml-[15px] text-[14px] font-[400] mt-[27px] '}
                   style={{direction: "ltr"}}>نمایش همه</p>
            )
        }
    }
    return (
        <div>
            <div className={'flex  '}>
                <select
                    className={'w-[15%] mr-[27px] text-center mt-[45px] ml-[66.3%]  h-[30px] bg-[#FF792C] text-[12px] text-[#FFFFEF] rounded-[12px]'}
                    style={{direction: "rtl"}}>
                    <option>بر اساس جدیدترین</option>
                    <option>بر اساس جدیدترین</option>
                    <option>بر اساس جدیدترین</option>
                </select>
                <p className={' w-[121px]  mt-[45px]  mr-[65px]  text-[#FFFEFF] text-[18px] font-[500] '}
                   style={{direction: "rtl"}}>
                    تاریخچه رزرو ها
                </p>
            </div>
            <div className={'w-[88.27%] mt-[32px] h-[52px] flex mx-auto rounded-[5px] items-center bg-[#0A2E65]'}
                 style={{direction: "rtl"}}>
                <p className={'text-[#FF792C] text-[14px] mr-[7.13%] font-[400]'}>#</p>
                <p className={'text-[#FFFFEF] text-[14px] mr-[16.25%] font-[400]'}>تاریخ</p>
                <p className={'text-[#FFFFEF] text-[14px] mr-[14.76%] font-[400]'}>نوع اشتراک</p>
                <p className={'text-[#FFFFEF] text-[14px] mr-[13.57%] font-[400]'}>مجموع</p>
                <p className={'text-[#FFFFEF] text-[14px] mr-[15.85%] font-[400]'}>وضعیت</p>
            </div>
            <div className={'flex flex-col mt-[16px] mx-auto w-[88.27%]'} style={{direction: "rtl"}}>
                {historyData.slice(0, length).map(item => (
                    <div key={item.id}
                         className={'w-[100%] h-[52px] border-[#FF792C] border-r-[2px] flex items-center mb-[8px] bg-[#0A2E65] rounded-[5px]'}>
                        <div className={' justify-between w-[89%] h-[100%] flex items-center'}>
                            <p className={'mr-[6.14%] text-[#C9C9C9] text-[14px]'}>{item.num}</p>
                            <p className={'text-[#C9C9C9] text-[14px]'}>{item.date}</p>
                            <p className={'text-[#C9C9C9] text-[14px]'}>{item.sub}</p>
                            <p className={'text-[#C9C9C9] text-[14px]'}> {item.sum}تومان </p>
                            <p className={'ml-[3.5%] text-[#C9C9C9] text-[14px]'}>{item.status}</p>
                        </div>
                        <ModalCancelReserve item={item.disable}/>
                    </div>
                ))}
                {showButton()}
            </div>
        </div>
    );
};

export default Section1HistoryReserve;