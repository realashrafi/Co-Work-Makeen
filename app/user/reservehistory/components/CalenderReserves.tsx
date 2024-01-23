'use client'
import React, {useState} from 'react';
import Image from "next/image";
import gifIcon from "@/app/components/data/movedIcon.gif";
import ReactModal from "react-modal";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import useCalendarData from "@/app/store/react-query/useCalendarData";

const CalenderReserves = () => {
    const {data}=useCalendarData()
    const reserved:any= []
    //@ts-ignore
    data?.data.map(item=>{
        return reserved.push(
            [new DateObject({ calendar: persian, locale: persian_fa}).setDay(item.days_after_first_day_of_this_month).format(), new DateObject({ calendar: persian, locale: persian_fa}).setDay(item.days_after_first_day_of_this_month).format()],
        )
    })
    // const reservedc = [
    //     [new DateObject({ calendar: persian, locale: persian_fa}).setDay(1).format(), new DateObject({ calendar: persian, locale: persian_fa}).setDay(1).format()],
    //     [new DateObject({ calendar: persian, locale: persian_fa}).setDay(15).format(), new DateObject({ calendar: persian, locale: persian_fa}).setDay(15).format()],
    // ];

    const inService = [
        [new DateObject({ calendar: persian, locale: persian_fa}).setDay(12).format(), new DateObject({ calendar: persian, locale: persian_fa}).setDay(13).format()],
        [new DateObject({ calendar: persian, locale: persian_fa}).setDay(27).format(), new DateObject({ calendar: persian, locale: persian_fa}).setDay(27).format()],
    ];


const handle = () => {
  setShowModal(true)
    setValues([...reserved])
}
    function isReserved(strDate: string | number) {
        //@ts-ignore
        return reserved.some(([start, end]) => strDate >= start && strDate <= end);
    }

    function isInService(strDate:string | number) {
        return inService.some(([start, end]) => strDate >= start && strDate <= end);
    }
    const [showModal, setShowModal] = useState(false)
    const [values, setValues] = useState<any>();

    const style: any = {color: '#EEEFEE', marginTop:24,border: 'none', boxShadow: "none"}
// console.log('cal',reservedc)
console.log('cal2',reserved)
console.log('data',data)
    // @ts-ignore
    return (
        <div style={{}}>
            <div onClick={handle}
                className="w-36 cursor-pointer px-3 mt-[45px] lg:ml-[65px] h-10 bg-[#0A2E65] flex items-center justify-around rounded-[10px]">
                <p className={'text-orange-500 text-sm font-bold'}>تقویم جاری</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="24" height="24" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_2508_1575" transform="scale(0.0078125)"/>
                        </pattern>
                        <image id="image0_2508_1575" width="128" height="128"
                               xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </div>
            <ReactModal
                style={{
                    overlay: {
                        zIndex: 10,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#00000020',
                        backdropFilter: 'blur(5px)'
                    },
                    content: {
                        background: '#002256',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border: 'none',
                    }
                }}
                isOpen={showModal} className={'w-[98%] mt-20 mx-auto lg:w-[40%] h-[500px]'}>
                <Image src={gifIcon} alt={''} onClick={() => setShowModal(false)}
                       className={'absolute opacity-50 lg:top-20 -top-[17%] scale-[90%] lg:-left-12'}/>
                <div
                    className={'cursor-pointer mt-20  text-orange-500 font-bold text-lg absolute top-4 left-4 lg:left-[31.6%] '}
                    onClick={() => setShowModal(false)}>X
                </div>

                <div
                    className="w-36 mx-auto  px-3 mt-[24px] h-10 flex items-center justify-around rounded-[10px]">
                    <p className={'text-orange-500 text-sm font-bold'}>تقویم جاری</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="24" height="24" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_2508_1575" transform="scale(0.0078125)"/>
                            </pattern>
                            <image id="image0_2508_1575" width="128" height="128"
                                   xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                </div>
                <div className={'flex items-center lg:w-[70%] justify-around mx-auto mt-[16px]'} dir={'rtl'}>
                    <div className={'flex items-center'}>
                        <div className={'w-[11px] h-[11px] rounded-full bg-[#F6F6F6]'}></div>
                        <div
                            className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تاریخ
                            فعلی
                        </div>
                    </div>
                    <div className={'flex items-center'}>
                        <div className={'w-[11px] h-[11px] rounded-full bg-[#13B86C]'}></div>
                        <div
                            className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تاریخ
                            رزرو و اعتبار
                        </div>
                    </div>
                    <div className={'flex items-center'}>
                        <div className={'w-[11px] h-[11px] rounded-full bg-[#545973]'}></div>
                        <div
                            className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تکمیل
                            ظرفیت
                        </div>
                    </div>
                    <div className={'flex items-center'} style={{}}>
                        <div className={'w-[11px] h-[11px] rounded-full bg-[#FF792C]'}></div>
                        <div
                            className={'text-center text-white text-[10px] font-medium leading-[14.84px] mr-[8px]'}>تعطیل
                        </div>
                    </div>
                </div>
                {/*// @ts-ignore*/}
                <Calendar style={style}
                          multiple
                          range
                          calendar={persian}
                          locale={persian_fa}
                          plugins={[weekends()]}
                          numberOfMonths={2}
                          value={values}
                          onChange={(ranges) => {
                              const isClickedOutsideUnAvailbleDates = values.every(
                                  //@ts-ignore
                                  ([start, end]) => ranges.some((range) => range[0]?.format?.() === start && range[1]?.format?.() === end)
                              );

                              if (!isClickedOutsideUnAvailbleDates) return false;

                              setValues(ranges);
                          }}
                          mapDays={({date}) => {
                              let className;
                              const strDate = date.format();

                              if (isReserved(strDate)) className = "reserved";
                              if (isInService(strDate)) className = "in-service";
                              if (className) return {className};
                          }}
                />
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
            </ReactModal>
        </div>
    );
};

export default CalenderReserves;