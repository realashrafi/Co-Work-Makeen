'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import logoMakeen from "@/app/user/components/data/logo-makeen.png";
import Image from "next/image";
import RegisterModalStep4 from "@/app/components/RegisterModalStep4";
import axios from "axios";
import Countdown from "react-countdown";

const RegisterModalStep3 = ({number}: any) => {
    const [showModal, setShowModal] = useState(false)
    const [code, setCode] = useState('')
    const [timer, setTimer] = useState(59000)
    const [rerender, setRerender] = useState<any>()
    const handleResetPassword = async (e: any) => {
        e.preventDefault()
        await axios.post('https://www.cowork.v1r.ir/api/v1/auth/user/reset-password/send-sms', {
            phone_number: number
        })
            .then((response) => response.status == 200 ? setShowModal(true) : setShowModal(false))
            .catch((err) => console.error(err))

    }
    const handleResetPasswordAgain = async (e: any) => {
        e.preventDefault()
        await axios.post('https://www.cowork.v1r.ir/api/v1/auth/user/reset-password/send-sms', {
            phone_number: number
        })
            .then((response) => response.status == 200 ? setRerender(rerender):'')
            .catch((err) => console.error(err))

    }
    const Completionist = () => <span className={'cursor-pointer'} onClick={handleResetPasswordAgain}>ارسال مجدد</span>;
    const renderer = ({seconds, completed}: any) => {
        if (completed) {
            return <Completionist/>;
        } else {
            return <span>ارسال مجدد کد تا {seconds} ثانیه دیگر</span>;
        }
    }
    return (
        <div>
            <div onClick={handleResetPassword}
                 className={'flex cursor-pointer justify-end w-[80%] mx-auto text-orange-500 text-sm font-normal mt-[8px]'}>
                رمز عبور خود را فراموش کرده ام
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
                        backgroundColor: ''
                    },
                    content: {
                        width: '90%',
                        height: 516,
                        position: 'absolute',
                        left: '5%',
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
                <div className={'lg:mx-[400px]'}>
                    <div className={'flex justify-end pr-[24px] mt-[24px]'}>
                        <div className={'cursor-pointer text-white'} onClick={() => setShowModal(false)}>X</div>
                    </div>
                    <div className={'flex justify-center mt-[20px]'}>
                        <Image src={logoMakeen} alt={''}/>
                    </div>
                    <div className={'flex justify-end pr-[50px] mt-[62px]'}>
                        <div dir={'rtl'} className={'text-orange-500 text-[15px] font-bold '}>بازیابی رمز عبور برای :
                        </div>
                    </div>
                    <div className={'flex justify-between w-[80%] mx-auto mt-[8px]'}>
                        <svg onClick={() => setShowModal(false)} className={'cursor-pointer'} width="24" height="16"
                             viewBox="0 0 24 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M7.83191 0.00219898C7.86218 0.0078678 7.89245 0.0163699 7.91997 0.0248728C8.18415 0.0730545 8.39604 0.271451 8.47035 0.535034C8.54465 0.801452 8.46759 1.08487 8.27221 1.27193L2.43818 7.2805H23.969V7.77932C24.0103 7.92103 24.0103 8.06841 23.969 8.21012V8.73162H2.43818L8.27221 14.7402C8.5529 15.0293 8.5529 15.4941 8.27221 15.7832C7.99151 16.0723 7.5402 16.0723 7.25951 15.7832L0.214649 8.52756C0.0770531 8.39151 0 8.20162 0 8.00606C0 7.8105 0.0770531 7.6206 0.214649 7.48456L7.25951 0.228937C7.40536 0.0673864 7.61726 -0.014806 7.83191 0.00219898Z"
                                  fill="#FFFEFF"/>
                        </svg>
                        <div className={'text-white text-base font-normal'}>{number}</div>
                    </div>
                    <div className={'flex justify-center mt-[16px]'}>
                        <input
                            onChange={(e) => setCode(e.target.value)}
                            className={'rounded-xl h-10 w-[79%] px-[16px] bg-[#0A2E65]'}
                            type="text"
                            dir={'rtl'}
                            placeholder={'کد تایید را وارد نمایید'}/>
                    </div>
                    <div className={'mt-[8px] flex justify-center text-orange-500 text-xs font-normal'}>

                        <Countdown date={Date.now() + timer} renderer={renderer} onComplete={rerender}/>
                    </div>
                    <RegisterModalStep4 code={code} number={number}/>
                </div>
            </ReactModal>
        </div>
    );
};

export default RegisterModalStep3;