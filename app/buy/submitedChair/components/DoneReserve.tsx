'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import doneImage from './data/doneImage.png'
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";
import ProgressBar from "@ramonak/react-progress-bar";

const DoneReserve = () => {
    const [Ftype, setFtype] = useState<any>()
    const [FLDay, setFLDay] = useState<any>()
    const [Fprice, setFprice] = useState<any>()
    const [Fcreated_at, setFcreated_at] = useState<any>('')
    const [loading, setLoading] = useState(true)
    const [complete, setComplete] = useState(0)
    useEffect(() => {
        setTimeout(()=>setComplete(10),100)
        setFtype(localStorage?.getItem('Ftype'))
        setTimeout(()=>setComplete(25),200)
        setFLDay(localStorage?.getItem('FLDay'))
        setTimeout(()=>setComplete(50),300)
        setFprice(localStorage?.getItem('Fprice'))
        setTimeout(()=>setComplete(75),400)
        //@ts-ignore
        setFcreated_at(localStorage?.getItem('Fcreated_at').slice(0,10))
        setTimeout(()=>setComplete(85),500)
        setTimeout(()=>setComplete(100),600)
        setTimeout(()=>setLoading(false),1500)
    }, []);
    return (
        <div className={'flex flex-col w-[100%]'}>
            <div className={'flex justify-center  '}>
                <div className={'text-white text-base font-bold'}>فاکتور شما</div>
            </div>
            {loading?
                <ProgressBar className={'w-[80%] mt-10 mx-auto '}  barContainerClassName="bg-[#0A2E65]"  completed={complete} customLabel="در حال چاپ" />:
            <div className={'w-[90%] mx-auto rounded-xl  mt-[43px] flex flex-col h-[776px] bg-[#0A2E65]'}>
                <div className={'relative'}>
                    <div
                        className="absolute z-[2] -bottom-7 w-[100%] lg:right-[22%] lg:w-[458px] h-14 bg-[#13B86C] rounded-3xl flex justify-center items-center">
                        <div className="text-white text-base font-normal mr-[8px]" dir={'rtl'}>رزرو شما با موفقیت ثبت شد .
                        </div>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M18.5 0C8.28337 0 0 8.28337 0 18.5C0 28.7166 8.28337 37 18.5 37C28.7166 37 37 28.7166 37 18.5C37 8.28337 28.7166 0 18.5 0ZM28.84 14.965L17.185 26.62C16.8951 26.9098 16.5035 27.0717 16.095 27.0717C15.6865 27.0717 15.2933 26.9098 15.005 26.62L9.68167 21.2966C9.07887 20.6938 9.07887 19.7195 9.68167 19.1167C10.2845 18.5139 11.2588 18.5139 11.8616 19.1167L16.095 23.3501L26.66 12.785C27.2628 12.1823 28.2372 12.1823 28.84 12.785C29.4428 13.3878 29.4428 14.3622 28.84 14.965Z"
                                  fill="#FFFEFF"/>
                        </svg>
                    </div>
                    <Image className={'brightness-75'} src={doneImage} alt={''}/>
                </div>
                <div
                    className="w-[65%]  mx-auto h-10 bg-[#0A2E65]  items-center rounded-xl shadow-xl flex justify-between px-[24px] mt-[83px]">
                    <div className={'text-white text-sm font-bold'}>{Ftype}</div>
                    <div className={'text-white text-sm font-bold'}>نوع اشتراک</div>
                </div>
                <div
                    className="w-[65%] mx-auto h-10 bg-[#0A2E65] items-center rounded-xl shadow-xl flex justify-between px-[24px] mt-[8px]">
                <div className={'text-white text-sm font-bold'}>{FLDay} روز</div>
                    <div className={'text-white text-sm font-bold'}>تعداد روزهای انتخابی</div>
                </div>
                <div
                    className="w-[65%] mx-auto h-10 bg-[#0A2E65] items-center rounded-xl shadow-xl flex justify-between px-[24px] mt-[8px]">
                    <div className={'text-white text-sm font-bold'}>{Fprice} تومان</div>
                    <div className={'text-white text-sm font-bold'}>مبلغ پرداختی</div>
                </div>
                <div
                    className="w-[65%] mx-auto h-10 bg-[#0A2E65] items-center rounded-xl shadow-xl flex justify-between px-[24px] mt-[8px]">
                    <div className={'text-white text-sm font-bold'}>{Fcreated_at.slice(0.10)}</div>
                    <div className={'text-white text-sm font-bold'}>تاریخ خرید</div>
                </div>
                <div
                    className="w-[195px] h-[45px] bg-[#13B86C] mx-auto mt-[61px] flex justify-center items-center rounded-3xl">
                    <div className={'text-white text-sm font-bold mr-[7px]'}>ذخیره</div>
                    <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 571">
                            <path id="Vector"
                                  d="M17.2579 0.805556L25.0707 7.5835V28.1944H0.928545V0.805556H17.2579ZM17.6424 0H0V29H25.9993V7.25L17.6424 0Z"
                                  fill="#FFFEFF"/>
                            <path id="Vector_2"
                                  d="M17.6435 1.13906L24.6875 7.25H17.6435V1.13906ZM17.6435 0H16.715V8.05556H26.0004V7.25L17.6435 0ZM5.61328 12.5143C6.05991 12.4305 6.66347 12.3782 7.26702 12.3782C8.20857 12.3782 8.95697 12.4942 9.47603 12.9235C9.95887 13.2901 10.1762 13.8765 10.1762 14.4734C10.1762 15.2379 9.91059 15.7824 9.4881 16.1699C8.98111 16.6412 8.17235 16.8506 7.50844 16.8506C7.3998 16.8506 7.30323 16.8506 7.19459 16.8401V19.4687H5.61328V12.5143ZM7.19459 15.7293C7.27909 15.7406 7.36359 15.7406 7.46016 15.7406C8.25685 15.7406 8.60691 15.2484 8.60691 14.5878C8.60691 13.9699 8.31721 13.489 7.58087 13.489C7.43602 13.489 7.29116 13.5092 7.19459 13.5406V15.7293ZM11.1298 12.5143C11.5281 12.4305 12.1075 12.3782 12.7352 12.3782C13.7613 12.3782 14.4735 12.5884 14.9925 13.0065C15.6926 13.5511 16.0548 14.4831 16.0548 15.8549C16.0548 17.28 15.6323 18.295 14.9201 18.8395C14.3648 19.2906 13.5681 19.521 12.4455 19.521C11.9385 19.521 11.4436 19.4783 11.1298 19.4373V12.5143ZM12.7111 18.3796C12.7956 18.3997 12.9042 18.3997 12.9887 18.3997C13.7492 18.3997 14.4131 17.7504 14.4131 15.8026C14.4131 14.3574 13.9785 13.4769 13.0249 13.4769C12.9163 13.4769 12.8076 13.4769 12.7111 13.5084V18.3796ZM17.0567 12.4096H20.5935V13.6034H18.638V15.4151H20.4728V16.5566H18.638V19.4679H17.0567V12.4096Z"
                                  fill="#FFFEFF"/>
                        </g>
                    </svg>
                </div>
            </div>}
        </div>
    );
};

export default DoneReserve;