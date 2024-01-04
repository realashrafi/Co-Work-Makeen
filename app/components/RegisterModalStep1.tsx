'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import logoMakeen from "@/app/user/components/data/logo-makeen.png";
import Image from "next/image";
import RegisterModalStep2 from "@/app/components/RegisterModalStep2";

const RegisterModalStep1 = () => {
    const [showModal, setShowModal] = useState(false)
    const [checked, setChecked] = useState(false)
    const [number, setNumber] = useState('')

    return (
        <div>
            <div className={'cursor-pointer pt-[5px] group-hover'} onClick={() => setShowModal(true)}>
                <div className={'flex justify-center items-center  '}>
                    <div className="text-white text-base font-normal mr-[1%] hover:text-orange-500 -mt-[3px]">ثبت نام</div>
                    <svg className={'mx-[4%]'} width="2" height="22" viewBox="0 0 2 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="Line 202" d="M1.25 0.99707L1.25 21.0033" stroke="#EEEFEE" strokeLinecap="round"/>
                    </svg>
                    <div className="text-white text-base font-normal ml-[1%] -mt-[3px] hover:text-orange-500">ورود</div>
                </div>
            </div>
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
                        width: '36%',
                        height: 465,
                        position: 'absolute',
                        left: '32%',
                        top: '20%',
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
                <div>
                    <div className={'flex justify-end pr-[24px] mt-[24px]'}>
                        <div className={'cursor-pointer'} onClick={() => setShowModal(false)}>X</div>
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
                        <input className={'w-[88%] h-10 bg-[#0A2E65] mt-[16px] px-[16px] rounded-xl'} dir={'rtl'}
                               onChange={(e) => setNumber(e.target.value)}
                               placeholder={'مثال 09367674845'}/>
                    </div>
                    <RegisterModalStep2 number={number} checked={checked}/>
                    <div className={'flex justify-end pr-[50px] mt-[10px]'}>
                        <div className={' text-right text-white text-xs mr-[10px] font-normal'}>قوانین و شرایط عضویت در
                            آکادمی مکین را می پذیرم
                        </div>
                        <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)}/>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

export default RegisterModalStep1;