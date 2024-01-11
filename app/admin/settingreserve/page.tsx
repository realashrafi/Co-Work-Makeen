'use client'
import React from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";

const SettingReserve = () => {
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            <div className={'flex flex-col w-[81.25%]'}>
                <NavbarAdminPanel/>
                <div className={'w-[100%] h-[1724px] flex justify-center'}>
                    <div className={'w-[88.97%] flex flex-col h-[1570px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                        <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>تنظیمات رزرو صندلی های
                                کوورک</p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 62"
                                          d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                          fill="#0075FF"/>
                                </svg>
                            </div>
                        </div>
                        <div className={'flex justify-end mt-[8px] pr-[67px]'}>
                            <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم شما می
                                توانید در این بخش ساعت کاری مرکز را مشخص
                                کنید.
                            </p>
                        </div>
                        <div className={'flex  mt-[41px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>ساعت پایان</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">ساعت پایان را وارد کنید</option>
                                    <option value="unk">ساعت پایان را وارد کنید</option>
                                    <option value="unk">ساعت پایان را وارد کنید</option>

                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>ساعت شروع</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">ساعت شروع را وارد کنید</option>
                                    <option value="unk">ساعت شروع را وارد کنید</option>
                                    <option value="unk">ساعت شروع را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex  mt-[35px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>انتخاب تاریخ</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>تعداد کل صندلی های کوورک</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex  mt-[35px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>هزینه اشتراک بلند مدت کوورک</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">هزینه اشتراک بلند مدت کوورک را وارد کنید</option>
                                    <option value="unk">هزینه اشتراک بلند مدت کوورک را وارد کنید</option>
                                    <option value="unk">هزینه اشتراک بلند مدت کوورک را وارد کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>هزینه روزانه کوورک</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">هزینه روزانه کوورک را وارد کنید</option>
                                    <option value="unk">هزینه روزانه کوورک را وارد کنید</option>
                                    <option value="unk">هزینه روزانه کوورک را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex mr-[67px] mt-[48px] justify-end'}>
                            <button
                                className={'w-[25.45%] h-[40px] rounded-[5px] flex justify-center items-center bg-[#0075FF] text-stone-50 text-base font-normal'}>ذخیره
                            </button>
                        </div>
                        <div className={'w-[100%] flex justify-end mt-[80px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>
                                تنظیمات رزرو اتاق جلسات
                            </p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 62"
                                          d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                          fill="#0075FF"/>
                                </svg>
                            </div>
                        </div>
                        <div className={'flex  mt-[39px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>ساعت پایان رزرو روزانه</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">ساعت پایان رزرو روزانه را وارد کنید</option>
                                    <option value="unk">ساعت پایان رزرو روزانه را وارد کنید</option>
                                    <option value="unk">ساعت پایان رزرو روزانه را وارد کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>ساعت شروع رزرو روزانه</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">ساعت شروع رزرو روزانه را وارد کنید</option>
                                    <option value="unk">ساعت شروع رزرو روزانه را وارد کنید</option>
                                    <option value="unk">ساعت شروع رزرو روزانه را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex  mt-[35px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>انتخاب تاریخ</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>تعداد کل صندلی های کوورک</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                    <option value="unk">تعداد صندلی را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex  mt-[35px] mx-[67px] justify-end'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>انتخاب بازه ساعتی اتاق
                                    جلسات</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">بازه ساعتی مورد نظر را انتخاب کنید</option>
                                    <option value="unk">بازه ساعتی مورد نظر را انتخاب کنید</option>
                                    <option value="unk">بازه ساعتی مورد نظر را انتخاب کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex mr-[67px] mt-[48px] justify-end'}>
                            <button
                                className={'w-[25.45%] h-[40px] rounded-[5px] flex justify-center items-center bg-[#0075FF] text-stone-50 text-base font-normal'}>ذخیره
                            </button>
                        </div>
                        <div className={'w-[100%] mt-[50px] '}>
                        <svg width="97%" className={'mx-auto'} height="4" viewBox="0 0 1011 4" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2H1011" stroke="url(#paint0_linear_34_3033)" strokeWidth="3"/>
                            <defs>
                                <linearGradient id="paint0_linear_34_3033" x1="0" y1="2" x2="1001.25" y2="2"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E2E0E0" stopOpacity="0"/>
                                    <stop offset="0.5" stopColor="#E0E1E2"/>
                                    <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        </div>
                        <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>
                                ثبت تعطیلی کوورک مکین
                            </p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 62"
                                          d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                          fill="#0075FF"/>
                                </svg>
                            </div>
                        </div>
                        <div className={'flex justify-end mt-[8px] pr-[67px]'}>
                            <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم شما می
                                توانید در این بخش ساعت کاری مرکز را مشخص
                                کنید.
                            </p>
                        </div>
                        <div className={'flex  mt-[39px] mx-[67px] justify-between'}>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>انتخاب تاریخ</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                    <option value="unk">تاریخ را انتخاب کنید</option>
                                </select>
                            </div>
                            <div className={'w-[39.57%]'}>
                                <p className={'text-black text-sm font-normal'} dir={'rtl'}>تیتر مد نظر را وارد کنید</p>
                                <select
                                    className={'w-[100%] px-4 mt-[8px] h-[40px] border-[#C4C4C4] bg-[#FFFEFF] border-[1px] rounded-[5px]'}
                                    dir={'rtl'}>
                                    <option value="unk">تیتر را وارد کنید</option>
                                    <option value="unk">تیتر را وارد کنید</option>
                                    <option value="unk">تیتر را وارد کنید</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex mr-[67px] mt-[48px] justify-end'}>
                            <button
                                className={'w-[25.45%] h-[40px] rounded-[5px] flex justify-center items-center bg-[#0075FF] text-stone-50 text-base font-normal'}>ذخیره
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SideBarAdminPanel/>
        </div>
    );
};

export default SettingReserve;