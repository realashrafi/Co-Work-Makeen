'use client'

import React, {useEffect, useState} from 'react';

import ReactModal from 'react-modal'
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        AOS.init({
            duration:300,
            once:false
        })
    }, []);
    return (
        <div className={''}>
            <Link className={''} href={''}>
                <div onClick={() => setShowModal(true)}
                     className={'w-[253px] mb-[31px] rounded-[12px] flex items-center h-[43px] mr-[12px] hover:bg-[#002256] ml-[32px] '}
                     style={{direction: "rtl"}}>
                    <svg width="24" className={'mr-[31px]'} height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1905 0C5.48571 0 0 5.4 0 12C0 18.6 5.48571 24 12.1905 24C16.6766 24 20.6051 21.576 22.7222 18H20.2897C18.4317 20.421 15.4921 22 12.1905 22C6.60318 22 2.03175 17.5 2.03175 12C2.03175 6.5 6.60318 2 12.1905 2C15.4931 2 18.4317 3.579 20.2897 6H22.7222C20.6051 2.424 16.6766 0 12.1905 0ZM18.2857 8V11H9.14286V13H18.2857V16L24 12L18.2857 8Z"
                            fill="#FFFEFF"/>
                    </svg>
                    <p className={'text-[14px] font-[400] text-[#FFFEFF] mr-[20px]'}>خروج از حساب کاربری</p>
                </div>
            </Link>
            <ReactModal
                style={{
                    overlay: {
                        zIndex: 10,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    content: {
                        width: '45%',
                        height: 235,
                        position: 'absolute',
                        left: '30%',
                        top: '30%',
                        background: '#002256',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border:'none'
                    }
                }}
                isOpen={showModal}>
                <div data-aos={'fade'}>
                    <div  className={'w-[100%]  flex-col'}>
                        <div className={'flex pr-[33px]  text-[#FFFEFF] text-[16px] pt-[22px] pb-[3px]'}
                             style={{direction: 'rtl'}}>
                            <Link href={''} onClick={() => setShowModal(false)}>X</Link>
                        </div>
                        <p className={'text-center text-[#FFFEFF] text-[16px]  '}>? آیا از خروج خود اطمینان دارید </p>
                    </div>
                    <div className={'w-[63%] mx-auto pt-[59px] flex'}>

                        <Link onClick={()=>localStorage.setItem('token',"")}
                            className={'w-[100%] mr-[20px] h-[40px] text-[#FF792C] flex justify-center items-center border-[#FF792C] hover:bg-[#FF792C] hover:text-white border-[1px] rounded-[24px]'}
                            href={'/'}>
                            خروج
                        </Link>
                        <Link  onClick={() => setShowModal(false)}
                               className={'w-[100%] h-[40px] ml-[20px] flex justify-center text-[#FFFEFF] items-center border-[#FFFEFF] hover:bg-[#FFFEFF] hover:text-[#002256] border-[1px] rounded-[24px]'}
                               href={''}>
                            انصراف
                        </Link>
                    </div>
                </div>

            </ReactModal>
        </div>
    );
};

export default Modal;