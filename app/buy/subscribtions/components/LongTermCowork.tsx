import React from 'react';
import DatePeaker from "@/app/buy/subscribtions/components/DatePeaker";

const LongTermCowork = () => {
    return (
        <div className={'w-[90%] flex flex-col items-center mx-auto'}>
            <div className={'text-white text-base font-bold mt-[32px]'}>خرید اشتراک بلند مدت کوورک</div>
            <div className={'text-white text-xs font-normal mt-[8px]'}>هزینه بلند مدت 450 تومان</div>
            <div className={'w-[100%] flex justify-end mt-[40px]'}>
                <div><span className="text-orange-500 text-sm font-bold ">توجه :</span><span
                    className="text-white text-sm font-bold "> </span><span
                    className="text-white text-sm font-normal ">جهت دریافت تخفیف ، </span><span
                    className="text-white text-sm font-normal ">دانشجویان مکین میتوانند اشتراک بلند مدت خود را</span><span
                    className="text-white text-sm font-normal "> </span><span
                    className="text-white text-sm font-normal ">به مدت </span><span
                    className="text-orange-500 text-sm font-bold fo">18</span><span
                    className="text-orange-500 text-sm font-normal "> </span><span
                    className="text-orange-500 text-sm font-medium ">روز به بالا</span><span
                    className="text-white text-sm font-normal "> </span><span
                    className="text-white text-sm font-normal ">رزرو کنند</span></div>
            </div>
            <div className={'w-full flex lg:flex-nowrap flex-wrap justify-center lg:justify-between items-center mt-[17px]'}>
                <div className={'flex items-center lg:my-0 my-1'}>
                    <div><span className="text-white text-xs font-normal">ساعت اداری :</span><span
                        className="text-white text-sm font-normal"> </span><span
                        className="text-white text-sm font-normal ">8</span><span
                        className="text-white text-sm font-normal"> </span><span
                        className="text-white text-xs font-normal">الی</span><span
                        className="text-white text-sm font-normal"> </span><span
                        className="text-white text-sm font-normal f">16</span></div>
                </div>
                <div className={'flex items-center relative lg:my-0 my-1'}>
                    <div
                        className={'w-[124px] h-[32px] flex items-center justify-center bg-[#002256] rounded-l-xl border-r-[1.5px] border-[#0A2E65]'}>تاریخ
                        اعتبار
                    </div>
                    <div
                        className={' absolute right-[45.2%] w-6 h-6 rounded-full bg-[#0A2E65] flex justify-center items-center'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 786">
                                <circle id="Ellipse 397" cx="12" cy="12" r="12" fill="#0A2E65"/>
                                <path id="Vector" opacity="0.9"
                                      d="M15.3492 12.7453C15.254 12.6321 15.1032 12.6321 15.0159 12.7453C14.9206 12.8585 14.9206 13.0377 15.0159 13.1415L16.1905 14.5472H9.77778C9.64286 14.5472 9.53968 14.6698 9.53968 14.8302C9.53968 14.9906 9.64286 15.1132 9.77778 15.1132H16.1905L15.0079 16.5189C14.9127 16.6321 14.9127 16.8113 15.0079 16.9151C15.0556 16.9717 15.119 17 15.1746 17C15.2302 17 15.2937 16.9717 15.3413 16.9151L16.9286 15.0283C17.0238 14.9151 17.0238 14.7358 16.9286 14.6321L15.3492 12.7453ZM14.4683 9.16981C14.4683 9.00943 14.3651 8.88679 14.2302 8.88679H7.80952L8.99206 7.48113C9.0873 7.36792 9.0873 7.18868 8.99206 7.08491C8.89683 6.9717 8.74603 6.9717 8.65873 7.08491L7.07143 8.9717C6.97619 9.08491 6.97619 9.26415 7.07143 9.36792L8.65873 11.2547C8.70635 11.3113 8.76984 11.3396 8.8254 11.3396C8.88095 11.3396 8.94444 11.3113 8.99206 11.2547C9.0873 11.1415 9.0873 10.9623 8.99206 10.8585L7.80952 9.45283H14.2222C14.3571 9.45283 14.4683 9.33019 14.4683 9.16981Z"
                                      fill="#FF792C"/>
                            </g>
                        </svg>

                    </div>
                    <div
                        className={'w-[124px] lg:my-0 my-1 h-[32px] flex items-center justify-center bg-[#002256] rounded-r-xl border-l-[1.5px] border-[#0A2E65]'}>تاریخ
                        رزرو
                    </div>
                </div>
                <input className="w-[122px] h-8 bg-[#002256] rounded-lg px-[16px]" dir={'rtl'}
                       placeholder={'تعداد روز :'}/>
            </div>
            <div className={'flex justify-center lg:scale-100 scale-[85%]'}>
            <DatePeaker/>
            </div>
            <div className={'flex w-full justify-end mt-[56px]'}>
                <div dir={'rtl'}><span className="text-orange-500 text-sm font-bold">توجه : </span><span
                    className="text-orange-500 text-sm font-medium">در تاریخ های غیر فعال به دلیل تکمیل ظرفیت ، امکان رزرو وجود ندارد.</span>
                </div>
            </div>
            <div className={'flex w-full justify-end mt-[13px]'}>
                <div className="text-center"><span className="text-white text-sm font-bold ">توجه</span><span
                    className="text-white text-sm font-extrabold "> :</span><span
                    className="text-white text-sm font-bold "> </span><span
                    className="text-white text-sm font-normal ">قوانین و شرایط </span><span
                    className="text-white text-sm font-normal ">لغو رزرو</span><span
                    className="text-white text-sm font-normal "> را از</span><span
                    className="text-orange-500 text-sm font-normal "> </span><span
                    className="text-orange-500 text-sm font-bold ">اینجا</span><span
                    className="text-orange-500 text-sm font-normal "> </span><span
                    className="text-white text-sm font-normal ">مشاهده کنید</span></div>
            </div>
            <div className={'flex w-full justify-end mt-[12px]'}>
                <div><span className="text-white text-sm font-bold ">مبلغ قابل پرداخت : </span><span
                    className="text-white text-base font-bold fo">450</span><span
                    className="text-white text-sm font-bold "> </span><span
                    className="text-white text-sm font-normal ">تومان</span></div>
            </div>
            <button
                className={'flex justify-center items-center text-white text-lg font-medium bg-[#026AE1] w-[40%] lg:w-[408px] h-12 rounded-xl mt-[40px]'}>
                پرداخت
            </button>
        </div>
    );
};

export default LongTermCowork;