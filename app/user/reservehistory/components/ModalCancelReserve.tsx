'use client'
import React, {useState} from 'react';
import ReactModal from 'react-modal'
import Link from "next/link";

const ModalCancelReserve = ({item}: any) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <button onClick={() => setShowModal(true)} disabled={item}
                    className={'bg-[#002256] disabled:bg-[#0B2855] disabled:opacity-[40%] w-[] text-[#44C0ED] rounded-[12px] lg:ml-[16px] h-[30px] px-[10px] text-[11px] '}>امکان
                لغو رزرو
            </button>
            <ReactModal
                style={{
                    overlay: {
                        zIndex: 10,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    content: {
                        width: '90%',
                        height: 327,
                        position: 'absolute',
                        left: '5%',
                        top: '25%',
                        background: '#002256',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border: 'none'
                    }
                }}
                isOpen={showModal}>
                <div className={'w-[100%]  flex-col'}>
                    <div className={'mr-[24px] mt-[24px]'} style={{direction: 'rtl'}}>
                        <Link onClick={() => setShowModal(false)} href={''}>
                            x
                        </Link>
                    </div>
                    <div className={'w-[100%] mt-[12px] flex justify-center'}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50 25C50 38.8063 38.8063 50 25 50C11.1938 50 0 38.8063 0 25C0 11.1938 11.1938 0 25 0C38.8063 0 50 11.1938 50 25Z"
                                fill="#4CAF50"/>
                            <path
                                d="M33.5459 17.1562C31.0234 19.7744 21.2745 29.4232 21.2745 29.4232C21.2745 29.4232 18.1583 26.3585 16.2205 24.3728C14.2826 22.3871 11.7564 25.0034 13.6971 26.8962C15.6377 28.7889 21.2745 34.4772 21.2745 34.4772C21.2745 34.4772 33.3149 22.5657 36.0684 19.6796C38.8219 16.7935 36.0684 14.5381 33.5459 17.1562Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div
                        className={'flex lg:px-[10%] mt-[32px] w-[100%] justify-center text-center text-[#FFFEFF] text-[16px] '}>
                        لغو رزرو شما با موفقیت انجام شد و مبلغ آن به کیف پول حساب کاربری تان منتقل شد.
                    </div>
                    <div className={'w-[100%] flex '}>
                        <Link onClick={() => setShowModal(false)}
                              className={'bg-[#44C0ED] mt-[58px] mx-auto rounded-[12px] text-[#FFFEFF] text-[16px] w-[126px] h-[40px] flex justify-center items-center'}
                              href={''}>
                            تایید
                        </Link>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

export default ModalCancelReserve;