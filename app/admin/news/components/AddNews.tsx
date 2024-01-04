'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";

const AddNews = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <button onClick={() => setShowModal(true)}
                    className={'flex items-center justify-center w-[150px] h-8 bg-white rounded-[5px] text-black text-sm font-bold'}>
                درج خبر جدید
                <svg className={'ml-[8px]'} width="24" height="25" viewBox="0 0 24 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="fluent:add-24-filled">
                        <path id="Vector"
                              d="M11.883 3.61637L12 3.60938C12.2449 3.60941 12.4813 3.69933 12.6644 3.86209C12.8474 4.02485 12.9643 4.24912 12.993 4.49237L13 4.60938V11.6094H20C20.2449 11.6094 20.4813 11.6993 20.6644 11.8621C20.8474 12.0248 20.9643 12.2491 20.993 12.4924L21 12.6094C21 12.8543 20.91 13.0907 20.7473 13.2737C20.5845 13.4568 20.3603 13.5737 20.117 13.6024L20 13.6094H13V20.6094C13 20.8543 12.91 21.0907 12.7473 21.2737C12.5845 21.4568 12.3603 21.5737 12.117 21.6024L12 21.6094C11.7551 21.6093 11.5187 21.5194 11.3356 21.3567C11.1526 21.1939 11.0357 20.9696 11.007 20.7264L11 20.6094V13.6094H4C3.75507 13.6093 3.51866 13.5194 3.33563 13.3567C3.15259 13.1939 3.03566 12.9696 3.007 12.7264L3 12.6094C3.00003 12.3644 3.08996 12.128 3.25272 11.945C3.41547 11.762 3.63975 11.645 3.883 11.6164L4 11.6094H11V4.60938C11 4.36444 11.09 4.12804 11.2527 3.945C11.4155 3.76197 11.6397 3.64503 11.883 3.61637Z"
                              fill="#0075FF"/>
                    </g>
                </svg>
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
                    <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>درج خبر</p>
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
                    <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم ، شما در اینجا لطفا
                        اطلاعات خبر های خود را در قسمت های زیر را وارد کنید
                    </p>
                </div>
                <div className={'flex w-[85%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'} dir={'rtl'}>
                    تیتر خبر
                    <input type="text"
                           className={'mt-[8px] w-[45%] h-[40px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] px-4'}
                           placeholder={'لطفا تیتر خبر را وارد کنید'}/>
                </div>
                <div className={'flex w-[85%] flex-col mt-[34px] text-black text-sm font-normal mx-auto'} dir={'rtl'}>
                    متن مقاله
                    <textarea
                        className={'mt-[8px] w-[100%] h-[90px] rounded-[5px] border border-stone-300 bg-[#C4C4C420] p-2'}
                        placeholder={'لطفا متن مورد نظر را وارد نمایید'}/>
                </div>
                <div className={'flex w-[85%] justify-between mt-[80px] mx-auto'}>
                    <div className="w-[40%] flex justify-between px-[24px] h-[130px] bg-white rounded-xl">
                        <div className={'flex justify-center items-center'}>
                            <div
                                className={'w-[100px] h-20 cursor-pointer border border-dashed flex justify-center items-center border-black'}>
                                <div
                                    className={'w-[35px] h-[35px] flex justify-center items-center bg-[#7F7C7C] rounded-full'}>
                                    <svg width="24" className={'ml-[-2px]'} height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="fluent:add-24-filled">
                                            <path id="Vector"
                                                  d="M13.883 3.007L14 3C14.2449 3.00003 14.4813 3.08996 14.6644 3.25272C14.8474 3.41547 14.9643 3.63975 14.993 3.883L15 4V11H22C22.2449 11 22.4813 11.09 22.6644 11.2527C22.8474 11.4155 22.9643 11.6397 22.993 11.883L23 12C23 12.2449 22.91 12.4813 22.7473 12.6644C22.5845 12.8474 22.3603 12.9643 22.117 12.993L22 13H15V20C15 20.2449 14.91 20.4813 14.7473 20.6644C14.5845 20.8474 14.3603 20.9643 14.117 20.993L14 21C13.7551 21 13.5187 20.91 13.3356 20.7473C13.1526 20.5845 13.0357 20.3603 13.007 20.117L13 20V13H6C5.75507 13 5.51866 12.91 5.33563 12.7473C5.15259 12.5845 5.03566 12.3603 5.007 12.117L5 12C5.00003 11.7551 5.08996 11.5187 5.25272 11.3356C5.41547 11.1526 5.63975 11.0357 5.883 11.007L6 11H13V4C13 3.75507 13.09 3.51866 13.2527 3.33563C13.4155 3.15259 13.6397 3.03566 13.883 3.007Z"
                                                  fill="#504E4E"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex mt-[12px] text-zinc-800 text-base font-normal items-center '}>
                                بارگذاری تصویر خبر
                                <div className={'w-5 ml-[8px] h-[18px] bg-neutral-500 rounded-full'}></div>
                            </div>
                            <div className={'flex justify-evenly mt-[54px] text-black text-sm font-normal'}>
                                <p>ابعاد</p>
                                <p>ابعاد</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] flex justify-between px-[24px] h-[130px] bg-white rounded-xl">
                        <div className={'flex justify-center items-center'}>
                            <div
                                className={'w-[100px] h-20 cursor-pointer border border-dashed flex justify-center items-center border-black'}>
                                <div
                                    className={'w-[35px] h-[35px] flex justify-center items-center bg-[#7F7C7C] rounded-full'}>
                                    <svg width="24" className={'ml-[-2px]'} height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="fluent:add-24-filled">
                                            <path id="Vector"
                                                  d="M13.883 3.007L14 3C14.2449 3.00003 14.4813 3.08996 14.6644 3.25272C14.8474 3.41547 14.9643 3.63975 14.993 3.883L15 4V11H22C22.2449 11 22.4813 11.09 22.6644 11.2527C22.8474 11.4155 22.9643 11.6397 22.993 11.883L23 12C23 12.2449 22.91 12.4813 22.7473 12.6644C22.5845 12.8474 22.3603 12.9643 22.117 12.993L22 13H15V20C15 20.2449 14.91 20.4813 14.7473 20.6644C14.5845 20.8474 14.3603 20.9643 14.117 20.993L14 21C13.7551 21 13.5187 20.91 13.3356 20.7473C13.1526 20.5845 13.0357 20.3603 13.007 20.117L13 20V13H6C5.75507 13 5.51866 12.91 5.33563 12.7473C5.15259 12.5845 5.03566 12.3603 5.007 12.117L5 12C5.00003 11.7551 5.08996 11.5187 5.25272 11.3356C5.41547 11.1526 5.63975 11.0357 5.883 11.007L6 11H13V4C13 3.75507 13.09 3.51866 13.2527 3.33563C13.4155 3.15259 13.6397 3.03566 13.883 3.007Z"
                                                  fill="#504E4E"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex mt-[12px] text-zinc-800 text-base font-normal items-center '}>
                                بارگذاری تصویر خبر
                                <div className={'w-5 ml-[8px] h-[18px] bg-neutral-500 rounded-full'}></div>
                            </div>
                            <div className={'flex justify-evenly mt-[54px] text-black text-sm font-normal'}>
                                <p>ابعاد</p>
                                <p>ابعاد</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={'flex mt-[70px] justify-center'}>
                        <button onClick={()=>setShowModal(false)} className={'w-[265px] h-10 bg-blue-600 rounded-[5px] text-white text-base font-normal flex justify-center items-center'}>
                            درج خبر
                        </button>
                    </div>
            </ReactModal>
        </div>
    );
};

export default AddNews;