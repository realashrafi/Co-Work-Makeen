'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import logoMakeen from "@/app/user/components/data/logo-makeen.png";
import Image from "next/image";
import RegisterModalStep2 from "@/app/components/RegisterModalStep2";
import gifIcon from "@/app/components/data/movedIcon.gif";

const RegisterModalStep1 = ({statusLogin, statusRegister}: any) => {
    const [showModal, setShowModal] = useState(false)
    const [checked, setChecked] = useState(false)
    const [number, setNumber] = useState<any>('')
    const validation = () => {
        if (number.length < 11) {
            return (
                <div className={' text-orange-500 font-light text-[10px] mt-2 relative mr-4 '}>شماره موبایل 11 رقمی خود
                    را وارد کنید</div>
            )
        }
    }
    const handleInput = (e: any) => {
        const inputValue: any = e.target.value
        const numericValue =
            inputValue.replace(/[^0-9]/g, '')
        if (numericValue <= 11) {
            e.target.value = numericValue
        } else {
            e.target.value = numericValue.slice(0, 11)
        }
    }
    return (
        <div>
            <div className={'cursor-pointer pt-[5px] group'} onClick={() => setShowModal(true)}>
                <div className={'flex lg:justify-center justify-evenly items-center  '}>
                    <div className="text-white text-sm font-normal mr-[1%] group-hover:text-orange-500 -mt-[3px]">ثبت
                        نام
                    </div>
                    <svg className={'lg:mx-[4%]'} width="2" height="22" viewBox="0 0 2 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="Line 202" d="M1.25 0.99707L1.25 21.0033" stroke="#FF792C" strokeLinecap="round"/>
                    </svg>
                    <div
                         className="text-white text-sm font-normal ml-[1%] -mt-[3px] group-hover:text-orange-500">ورود
                    </div>
                </div>
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
                isOpen={showModal} className={'w-[90%] mt-20 mx-auto lg:w-[38%] h-[465px]'}>
                <Image src={gifIcon} alt={''}
                       className={'absolute opacity-50 lg:top-20 -top-[17%] scale-[90%] lg:-left-12'}/>
                <div className={' z-[2]'}>

                    <div className={'flex justify-end pr-[24px] mt-[24px]'}>
                        <div className={'cursor-pointer text-white'} onClick={() => setShowModal(false)}>X</div>
                    </div>
                    <div className={'flex justify-center mt-[20px]'}>
                        <Image src={logoMakeen} alt={''}/>
                    </div>
                    <div className={'flex justify-end items-center pr-[49px] mt-[32px]'}>
                        <div className="text-orange-500 text-base font-bold">ثبت نام</div>
                        <svg className={'mx-[2%]'} width="2" height="22" viewBox="0 0 2 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Line 202" d="M1.25 0.99707L1.25 21.0033" stroke="#FF792C" strokeLinecap="round"/>
                        </svg>
                        <div className="text-orange-500 text-base font-bold">ورود</div>
                    </div>
                    <div className={'flex flex-col items-end pr-[50px] mt-[32px]'}>
                        <div className={'text-slate-50 text-sm font-medium'}>ابتدا شماره موبایل خود را وارد نمایید</div>
                        <input type={'text'} maxLength={11} onInput={handleInput}
                               className={`w-[88%] h-10 bg-[#0A2E65] mt-[16px] ${number.length > 10 ? 'text-green-500' : 'text-orange-500'} px-[16px] rounded-xl`}
                               dir={'rtl'}
                               onChange={(e) => setNumber(e.target.value)}
                               placeholder={'مثال 09367674845'}/>
                        {validation()}
                    </div>
                    <RegisterModalStep2
                        number={number}
                        checked={checked}
                        statusLogin={statusLogin}
                        statusregister={statusRegister}
                    />
                </div>
            </ReactModal>
        </div>
    );
};

export default RegisterModalStep1;