'use client'
import React, {useState} from 'react';
import {Calendar, DateObject} from "react-multi-date-picker"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
//gregorian calendar & locale
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";

//persian calendar & locale
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Swal from "sweetalert2";
import {current} from "immer";
import axios from "axios";

const DatePeaker = ({dateSelected,setDateSelected}:any) => {
    const [value, setValue] = useState<any>()
    // const [dateSelected, setDateSelected] = useState<any>()
    const style: any = {color: '#EEEFEE', border: 'none', boxShadow: "none"}
    const convert = (date: any, format: any = "YYYY-MM-DD") => {
        // @ts-ignore
        let object = {date, format}

        setValue({
            gregorian: new DateObject(object).convert(gregorian, gregorian_fa).format(),
            persian: new DateObject(object).format(),
            ...object
        })
    }
    const CountDownFunction = (number: any) => {

        const generateCountdown = (startNumber: any) => {
            const countdownArray = [];
            for (let i = startNumber; i >= 1; i--) {
                countdownArray.push(i);
            }
            return countdownArray;
        };

        return generateCountdown(number);
    };
    const currentDate = new DateObject({calendar: persian})

    const countdownNumbers = CountDownFunction(Number(currentDate.format().slice(8, 10)));

    // const reserveLongterm = async (e: any) => {
    //     e.preventDefault()
    //     try {
    //         const token = localStorage?.getItem('userToken');
    //         const res = await axios.post('https://www.cowork.v1r.ir/api/v1/reservation/cowork/reserve/long-term',
    //             {
    //                 dates: dateSelected
    //             },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     Accept: 'application/json',
    //                 }
    //             })
    //         console.log(res)
    //
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    return (
        <div className={'relative w-[100%] flex flex-col mt-[10px] text-white bg-[#002256] rounded-[13px] px-[4px]'}>
            <div className={'flex items-center lg:w-[70%] justify-around mx-auto mt-[16px]'} dir={'rtl'}>
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
                      mapDays={({date}: any) => {


                          // const isBefore = countdownNumbers.includes(date.day)
                          // if (isBefore) return {
                          //     onClick: () => Swal.fire({
                          //         title: "در انتخاب خود کوشا باشید",
                          //         text: "روز های گذشته قابل انتخاب نیستند",
                          //         icon: "warning",
                          //         background: '#002256',
                          //         color: '#EEEFEE',
                          //         confirmButtonColor: "#FF792C",
                          //         confirmButtonText: 'باشه',
                          //         backdrop: '#002256'
                          //     })
                          // }
                          let isWeekend = [6].includes(date.weekDay.index)
                          if (isWeekend) return {
                              disabled: true,
                              style: {color: "#FF792C"},
                              onClick: () => Swal.fire({
                                  title: "در انتخاب خود کوشا باشید",
                                  text: "آخر هفته ها غیر فعال هستند",
                                  icon: "warning",
                                  background: 'transparent',
                                  color: '#EEEFEE',
                                  confirmButtonColor: "#FF792C",
                                  confirmButtonText: 'باشه',
                                  backdrop:'rgba(0,0,0,0.78)'
                              })
                          }
                      }}
                      numberOfMonths={2}
                      plugins={[weekends()]}
                      disableMonthPicker
                      className="custom-calendar"
                      disableYearPicker
                      value={value}
                      onChange={array => {
                          setValue(array)
                      }}
                      multiple
                      calendar={persian}
                      locale={persian_fa}>
                {/*<div className={'w-[1px] bg-white h-[195px] absolute left-1/2 bottom-[170px]'}></div>*/}
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
                    onClick={() => {
                        let cData: any = []
                        // @ts-ignore
                        value?.map(item => {
                            return cData.push(new DateObject(item).convert(gregorian, gregorian_en).format("YYYY-MM-DD"))
                        })
                        console.log(cData)
                        setDateSelected(cData)
                        Swal.fire({
                            title: "ثبت شد",
                            text: "حالا میتوانید پرداخت کنید",
                            icon: "success",
                            background: 'transparent',
                            color: '#EEEFEE',
                            confirmButtonColor: "#FF792C",
                            confirmButtonText: 'باشه',
                            backdrop:'rgba(0,0,0,0.78)'
                        })
                    }}
                    className={'flex cursor-pointer justify-center items-center w-[100px] h-6 rounded-[5px] bg-[#13B86C] text-white text-sm font-bold'}>
                    ثبت
                </div>
                <div
                     className="cursor-pointer text-white text-xs font-normal leading-[8.91px] ml-[45px]">ویرایش
                </div>
            </div>
        </div>
    );
};

export default DatePeaker;