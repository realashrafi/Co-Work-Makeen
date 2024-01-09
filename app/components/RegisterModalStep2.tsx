'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import logoMakeen from "@/app/user/components/data/logo-makeen.png";
import Image from "next/image";
import RegisterModalStep3 from "@/app/components/RegisterModalStep3";
import axios from "axios";
import {redirect, useRouter} from 'next/navigation'
import Swal from "sweetalert2";


const RegisterModalStep2 = ({checked, number, statusLogin, statusRegister}: any) => {
    const [showModal, setShowModal] = useState(false)
    const [userExist, setUserExist] = useState()
    const [userPasswordToLogin, setUserPasswordToLogin] = useState('')
    const [registerCode, setRegisterCode] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [passForRegister, setPassForRegister] = useState('')
    const [lastChecked, setLastChecked] = useState(checked)
    const [rolls, setRolls] = useState(false)
    const router = useRouter()
    const finalCheck = ()=>{
        if (number.length>10){
            !lastChecked
        }
        else lastChecked
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await axios.post('https://www.cowork.v1r.ir/api/v1/auth/user/check-phone-number', {
            phone_number: number
        })
            .then((response) => setUserExist(response.data.user_exits))
            .catch((err) => console.error(err))
        setShowModal(true)
    }
    const handleUserLogin = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://www.cowork.v1r.ir/api/v1/auth/user/login', {
                phone_number: number,
                password: userPasswordToLogin
            })
            statusLogin.setUserLoginStatus(response.status)
            localStorage.setItem('userToken', response.data.token)
            if (response?.status == 200) {
                //@ts-ignore
                // localStorage.setItem('loginStatus', 200)
                Swal.fire({
                    title: `${response.data.user.first_name} عزیز وارد شدید `,
                    text: "میتوانید از قسمت ورود به حساب کاربری خود وارد شوید",
                    icon: "success",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: '<button >باشه</button>'
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleRegisterNewMember = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://www.cowork.v1r.ir/api/v1/auth/user/register', {
                code: registerCode,
                phone_number: number,
                first_name: firstName,
                last_name: lastName,
                password: passForRegister,
                email: email
            })
            statusRegister.setUserRegisterStatus(response.status)
            localStorage.setItem('userToken', response.data.token)
            if (response?.status == 200) {
                //@ts-ignore
                // localStorage.setItem('loginStatus', 200)
                Swal.fire({
                    title: `${response.data.user.first_name} عزیز وارد شدید `,
                    text: "میتوانید از قسمت ورود به حساب کاربری خود وارد شوید",
                    icon: "success",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: '<button >باشه</button>'
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <div className={'flex justify-center  mt-[48px]'} onClick={handleSubmit}>
                <button disabled={number.length > 10 ? lastChecked : !lastChecked}
                        className={'w-[79%] disabled:opacity-50 h-10 bg-sky-400 rounded-xl flex items-center justify-center text-white text-base font-bold'}>ادامه
                </button>
            </div>
            {userExist ?
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
                            <div className={'cursor-pointer'} onClick={() => setShowModal(false)}>X</div>
                        </div>
                        <div className={'flex justify-center mt-[20px]'}>
                            <Image src={logoMakeen} alt={''}/>
                        </div>
                        <div className={'flex justify-center text-white text-[15px] font-bold mt-[30px]'}>شما عضو سامانه
                            ی آکادمی مکین هستید
                        </div>
                        <div className={'flex justify-between w-[80%] mx-auto mt-[46px]'}>
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
                                onChange={(e) => setUserPasswordToLogin(e.target.value)}
                                className={'rounded-xl h-10 w-[79%] px-[16px] bg-[#0A2E65]'}
                                type="password"
                                dir={'rtl'}
                                placeholder={'رمز عبور حساب کاربری خود را وارد کنید'}/>
                        </div>
                        <RegisterModalStep3 number={number}/>
                        <button onClick={handleUserLogin}
                                className={'flex w-[80%] mx-auto justify-center items-center bg-[#44C0ED] rounded-xl text-white h-10 mt-[56px] '}>
                            ورود
                        </button>
                        {statusLogin?.userLoginStatus == 200 ? redirect('/') : ''}
                    </div>
                </ReactModal>
                :
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
                            height: 766,
                            position: 'absolute',
                            left: '5%',
                            top: '2%',
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
                            <div className={'cursor-pointer'} onClick={() => setShowModal(false)}>X</div>
                        </div>
                        <div className={'flex justify-center mt-[20px]'}>
                            <Image src={logoMakeen} alt={''}/>
                        </div>
                        <div className={'flex flex-col items-center mt-[32px]'}>
                            <div dir={'rtl'} className={'text-white text-[15px] font-bold '}>ایجاد حساب کاربری جدید برای
                                :
                            </div>
                            <div className={'flex  items-center mr-[140px] mt-[8px]'}>
                                <svg className={'mr-[120px] cursor-pointer'} onClick={() => setShowModal(false)}
                                     width="24"
                                     height="16" viewBox="0 0 24 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector"
                                          d="M7.83191 0.00219898C7.86218 0.0078678 7.89245 0.0163699 7.91997 0.0248728C8.18415 0.0730545 8.39604 0.271451 8.47035 0.535034C8.54465 0.801452 8.46759 1.08487 8.27221 1.27193L2.43818 7.2805H23.969V7.77932C24.0103 7.92103 24.0103 8.06841 23.969 8.21012V8.73162H2.43818L8.27221 14.7402C8.5529 15.0293 8.5529 15.4941 8.27221 15.7832C7.99151 16.0723 7.5402 16.0723 7.25951 15.7832L0.214649 8.52756C0.0770531 8.39151 0 8.20162 0 8.00606C0 7.8105 0.0770531 7.6206 0.214649 7.48456L7.25951 0.228937C7.40536 0.0673864 7.61726 -0.014806 7.83191 0.00219898Z"
                                          fill="#FF792C"/>
                                </svg>
                                <div className={'text-orange-500 text-base font-normal '}>{number}</div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-end mt-[51px] pr-[56px] '}>
                            <div className={'text-slate-50 text-xs font-normal'} dir={'rtl'}>حساب کاربری با شماره
                                موبایل {number} وجود ندارد.
                            </div>
                            <div className={'text-slate-50 text-xs font-normal'} dir={'rtl'}>برای ساخت حساب جدید ، کد
                                تایید
                                برای این شماره ارسال گردید.
                            </div>
                        </div>
                        <div className={'flex justify-center mt-[16px]'}>
                            <input type="text" className={'w-[79%] px-[16px] h-10 bg-[#0A2E65] rounded-xl'} dir={'rtl'}
                                   placeholder={'کد تایید را وارد نمایید'}
                                   onChange={(e) => setRegisterCode(e.target.value)}
                            />
                        </div>
                        <div className={'flex justify-center'}>
                            <div className={'text-orange-500 text-xs font-normal mt-[8px]'}>ارسال مجدد کد تایید</div>
                        </div>
                        <div className={'flex flex-col items-center mt-[45px]  mr-[52px]'}>
                            <div className={'self-end items-center text-white text-[15px] flex font-bold'}>
                                فرم ثبت نام
                                <svg className={'ml-[8px]'} width="3" height="20" viewBox="0 0 3 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 201" d="M1.5 1L1.5 19" stroke="#FF792C" strokeWidth="2"
                                          strokeLinecap="round"/>
                                </svg>
                            </div>
                            <input type="text"
                                   onChange={(e) => setFirstName(e.target.value)}
                                   className={'self-end w-[89%] h-10 bg-[#0A2E65] rounded-xl mt-[18px] px-[16px]'}
                                   dir={'rtl'} placeholder={'نام خود را وارد نمایید'}/>
                            <input type="text"
                                   onChange={(e) => setLastName(e.target.value)}
                                   className={'self-end w-[89%] h-10 bg-[#0A2E65] rounded-xl mt-[8px] px-[16px]'}
                                   dir={'rtl'} placeholder={'نام خانوادگی خود را وارد نمایید'}/>
                            <input type="password"
                                   onChange={(e) => setPassForRegister(e.target.value)}
                                   className={'self-end w-[89%] h-10 bg-[#0A2E65] rounded-xl mt-[8px] px-[16px]'}
                                   dir={'rtl'}
                                   placeholder={'رمز عبوری برای حساب کاربری خود وارد نمایید'}/>
                            <input type="text"
                                   onChange={(e) => setEmail(e.target.value)}
                                   className={'self-end w-[89%] h-10 bg-[#0A2E65] rounded-xl mt-[8px] px-[16px]'}
                                   dir={'rtl'} placeholder={'برای بازیابی رمز عبور ایمیل خود را وارد کنید'}/>
                            <div className={'self-end flex justify-end  mt-[20px]'}>
                                <div className={' text-right text-white text-xs mr-[10px] font-normal'}>قوانین و شرایط
                                    عضویت در
                                    آکادمی مکین را می پذیرم
                                </div>
                                <input type="checkbox" checked={rolls}
                                       onClick={() => setRolls(!rolls)}/>
                            </div>
                            <button onClick={handleRegisterNewMember} disabled={!rolls}
                                    className={'self-end cursor-pointer w-[89%] disabled:opacity-50 h-10 bg-sky-400 rounded-xl mt-[8px] flex justify-center items-center text-white text-base font-bold'}
                            >ثبت
                            </button>
                        </div>
                        {statusRegister?.userRegisterStatus == 200 ? redirect('/') : ''}
                    </div>
                </ReactModal>}
        </div>
    );
};

export default RegisterModalStep2;