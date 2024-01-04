'use client'
import React, {useState} from 'react';
import {Calendar} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"

const DatePeaker = () => {
    const [value, setValue] = useState<any>()
    const style:any = {color:'white',border:'none',boxShadow:"none"}
    console.table(value)
    return (
        <div className={'relative flex flex-col mt-[10px] text-white bg-[#002256] rounded-[13px] px-[4px]'}>
            <div className={'flex items-center w-[70%] justify-around mx-auto mt-[16px]'} dir={'rtl'}>
                <div className={'flex items-center'}>
                    <div className={'w-[11px] h-[11px] rounded-full bg-[#F6F6F6]'}></div>
                    <div className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تاریخ
                        فعلی
                    </div>
                </div>
                <div className={'flex items-center'}>
                    <div className={'w-[11px] h-[11px] rounded-full bg-[#13B86C]'}></div>
                    <div className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تاریخ
                        رزرو و اعتبار
                    </div>
                </div>
                <div className={'flex items-center'}>
                    <div className={'w-[11px] h-[11px] rounded-full bg-[#545973]'}></div>
                    <div className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تکمیل
                        ظرفیت
                    </div>
                </div>
                <div className={'flex items-center'} style={{}}>
                    <div className={'w-[11px] h-[11px] rounded-full bg-[#FF792C]'}></div>
                    <div className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تعطیل
                    </div>
                </div>
            </div>
    {/*// @ts-ignore*/}
            <Calendar style={style}
                numberOfMonths={2}
                plugins={[weekends()]}
                disableMonthPicker
                className="custom-calendar"
                disableYearPicker
                value={value}
                onChange={array => { //آرایه ای از دیت آبجکت ها
                    // alert("تاریخ های انتخاب شده :\n" + array.join(",\n"))
                    setValue(array)
                }}
                multiple
                calendar={persian}
                locale={persian_fa}>
                <div className={'w-[1px] bg-white h-[195px] absolute left-1/2 bottom-[170px]'}></div>
            </Calendar>
            <div className={'flex mt-[24px] justify-end'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div
                        className=" text-emerald-500 text-xs font-medium  leading-[8.91px]">تاریخ
                        اعتبار
                    </div>
                    <div
                        className=" text-white text-sm font-medium  leading-[8.91px] mt-[8px]">1402/2/24
                    </div>
                </div>
                <div className={'flex flex-col justify-center items-center ml-[30px] mr-[26px]'}>
                    <div
                        className=" text-emerald-500 text-xs font-medium  leading-[8.91px]">
                        تاریخ رزرو
                    </div>
                    <div
                        className=" text-white text-sm font-medium  leading-[8.91px] mt-[8px]">1402/2/04
                    </div>
                </div>
            </div>
            <div className={'flex justify-start items-center mt-[30px] pl-[19px] pb-[24px]'}>
                <div
                    className={'flex justify-center items-center w-[100px] h-6 rounded-[5px] bg-[#13B86C] text-white text-sm font-bold'}>
                    ثبت
                </div>
                <div
                    className=" text-white text-xs font-normal leading-[8.91px] ml-[45px]">ویرایش
                </div>
            </div>
        </div>
    );
};

export default DatePeaker;