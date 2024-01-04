'use client'
import ReactModal from "react-modal";
import {useState} from "react";
import React from 'react';

const AddWorkShops = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className={'flex ml-[66px] mt-[36px] justify-start '}>
                <button onClick={() => setShowModal(true)}
                        className={'w-[25.45%] h-[40px] bg-blue-600 rounded-[5px] flex items-center justify-center text-zinc-100 text-base font-normal'}>
                    افزودن ورکشاپ
                </button>
                <ReactModal
                    style={{
                        overlay: {
                            zIndex: 10,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
                        },
                        content: {
                            width: '80%',
                            height: 756,
                            position: 'absolute',
                            left: '11%',
                            top: '4%',
                            background: '#F8F9FC',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '24px',
                            outline: 'none',
                            padding: '0px',
                            border: 'none'
                        }
                    }}
                    isOpen={showModal}>
                    <div className={'flex flex-col relative'}>
                        <button className={'absolute top-[20px] right-[20px] text-black'}
                                onClick={() => setShowModal(false)}>X
                        </button>
                    </div>
                    <div className={'w-[100%] flex justify-end mt-[60px]  pr-[48px]'}>
                        <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>ورکشاپ ها</p>
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
                    <div className={'flex justify-end mt-[8px] pr-[77px]'}>
                        <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>لطفا اطلاعات مقاله های خود
                            را درلطفا اطلاعات ورکشاپ های خود را در قسمت های زیر را وارد کنید
                        </p>
                    </div>
                    <div className={'flex w-[85%] justify-between mx-auto'}>
                        <div className={'flex w-[50%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'}
                             dir={'rtl'}>
                            مدت ورکشاپ
                            <select
                                className={'mt-[8px] w-[90%] h-[40px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] px-4'}
                            >
                                <option value="aa">لطفا مدت زمان ورکشاپ را وارد کنید</option>
                                <option value="aa">لطفا مدت زمان ورکشاپ را وارد کنید</option>
                                <option value="aa">لطفا مدت زمان ورکشاپ را وارد کنید</option>
                            </select>
                        </div>
                        <div className={'flex w-[50%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'}
                             dir={'rtl'}>
                            نام ورکشاپ
                            <select
                                className={'mt-[8px] w-[90%] h-[40px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] px-4'}
                            >
                                <option value="aa">لطفا نام ورکشاپ را وارد کنید</option>
                                <option value="aa">لطفا نام ورکشاپ را وارد کنید</option>
                                <option value="aa">لطفا نام ورکشاپ را وارد کنید</option>
                            </select>
                        </div>
                    </div>
                    <div className={'flex w-[85%] justify-between mx-auto'}>
                        <div className={'flex w-[50%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'}
                             dir={'rtl'}>
                            تاریخ پایان ورکشاپ
                            <select
                                className={'mt-[8px] w-[90%] h-[40px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] px-4'}
                            >
                                <option value="aa">تاریخ پایان را وارد کنید</option>
                                <option value="aa">تاریخ پایان را وارد کنید</option>
                                <option value="aa">تاریخ پایان را وارد کنید</option>
                            </select>
                        </div>
                        <div className={'flex w-[50%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'}
                             dir={'rtl'}>
                            تاریخ شروع ورکشاپ
                            <select
                                className={'mt-[8px] w-[90%] h-[40px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] px-4'}
                            >
                                <option value="aa">تاریخ شروع را وارد کنید</option>
                                <option value="aa">تاریخ شروع را وارد کنید</option>
                                <option value="aa">تاریخ شروع را وارد کنید</option>
                            </select>
                        </div>
                    </div>
                    <div className={'flex w-[85%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'}
                         dir={'rtl'}>
                        متن مقاله
                        <textarea
                            className={'mt-[8px] w-[95%] h-[90px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] p-2'}
                            placeholder={'لطفا متن مورد نظر را وارد نمایید'}/>
                    </div>
                    <div
                        className={'flex cursor-pointer flex-col w-[85%] mx-auto text-black text-sm font-normal mt-[40px]'}
                        dir={'rtl'}>
                        بارگذاری تصویر
                        <div
                            className={'w-[155px] mt-[8px] h-[104px] rounded-[5px] flex justify-center items-center border border-stone-300'}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.719 0.259333L12.875 0.25C13.2016 0.250043 13.5168 0.369942 13.7608 0.586954C14.0049 0.803966 14.1608 1.103 14.199 1.42733L14.2083 1.58333V10.9167H23.5417C23.8682 10.9167 24.1834 11.0366 24.4275 11.2536C24.6715 11.4706 24.8275 11.7697 24.8657 12.094L24.875 12.25C24.875 12.5766 24.7551 12.8918 24.538 13.1358C24.321 13.3799 24.022 13.5358 23.6977 13.574L23.5417 13.5833H14.2083V22.9167C14.2083 23.2432 14.0884 23.5584 13.8714 23.8025C13.6544 24.0465 13.3553 24.2025 13.031 24.2407L12.875 24.25C12.5484 24.25 12.2332 24.1301 11.9892 23.913C11.7451 23.696 11.5892 23.397 11.551 23.0727L11.5417 22.9167V13.5833H2.20833C1.88176 13.5833 1.56655 13.4634 1.3225 13.2464C1.07846 13.0294 0.922543 12.7303 0.884333 12.406L0.875 12.25C0.875043 11.9234 0.994942 11.6082 1.21195 11.3642C1.42897 11.1201 1.728 10.9642 2.05233 10.926L2.20833 10.9167H11.5417V1.58333C11.5417 1.25676 11.6616 0.941551 11.8786 0.697504C12.0956 0.453457 12.3947 0.297543 12.719 0.259333Z"
                                    fill="#504E4E"/>
                            </svg>
                        </div>
                    </div>
                    <div className={'flex w-[85%] mx-auto mt-[40px] justify-end'}>
                        <button onClick={() => setShowModal(false)}
                                className={'w-[265px] h-[40px] flex justify-center items-center bg-[#0075FF] rounded-[5px] text-white'}>
                            ذخیره
                        </button>
                    </div>
                </ReactModal>
            </div>
        </div>
    );
};

export default AddWorkShops;