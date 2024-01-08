'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

const CompleteInformation = () => {
    const router = useRouter()
    const [me, setMe] = useState<any>()
    const [userID, setUserID] = useState<any>()
    const [first_name, setFirst_name] = useState<any>()
    const [last_name, setLast_name] = useState<any>()
    const [dob, setDob] = useState<any>()
    const [national_code, setNational_code] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [gender, setGender] = useState<any>()
    const [education, setEducation] = useState<any>()
    useEffect(() => {
        //@ts-ignore
        handleFetch()
    }, []);
    const handleFetch = async () => {
        const token = localStorage?.getItem('userToken');
        try {
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setMe(response.data)
            setUserID(response.data.user.id)
            setFirst_name(response.data.user.first_name)
            setLast_name(response.data.user.last_name)
            setEmail(response.data.user.email)
            setNational_code(response.data.user.national_code)
        } catch (e) {
            console.log(e)
            Swal.fire({
                title: "خطایی رخ داده",
                text: "لطفا وارد حساب کاربری خود شوید",
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
            router.push('/')
        }
    }
    const handleupdate = async (e: any) => {
        const token = localStorage?.getItem('userToken');
        e.preventDefault()
        try {
            const response = await axios.put(`https://www.cowork.v1r.ir/api/v1/user/${userID}`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                dob: dob,
                gender: gender,
                national_code: national_code,
                education: education,
                password: "12345678",
                password_confirmation: "12345678",
                current_password: "12345678"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
           if (response.status==200){
               Swal.fire({
                   title: "انجام شد",
                   text: "حالا میتوانید خرید کنید",
                   icon: "success",
                   background: '#002256',
                   color: '#EEEFEE',
                   confirmButtonColor: "#FF792C",
                   confirmButtonText: 'باشه',
                   backdrop: '#002256'
               })
               router.back()
           }
        } catch (e) {
            console.log(e)
        }
    }
    console.log(me)
    console.log()
    return (
        <div className={'flex w-[100%] flex-col  '}>
            <div className={'flex justify-between mr-[87px] px-[48px] '}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*نام خانوادگی :</p>
                    <input type="text" onChange={(e) => setLast_name(e.target.value)} value={last_name}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'نام خانوادگی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*نام :</p>
                    <input type="text" onChange={(e) => setFirst_name(e.target.value)} value={first_name}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'} placeholder={'نام'}
                           dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*تاریخ تولد :</p>
                    <input type="text" onChange={(e) => setDob(e.target.value)} value={dob}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'تاریخ تولد'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*کد ملی :</p>
                    <input type="text" onChange={(e) => setNational_code(e.target.value)} value={national_code}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'کد ملی'} dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>ساکن منطقه :</p>
                    <input type="text" className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'ساکن منطقه'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*جنسیت :</p>
                    <select className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'} value={gender}
                            dir={'rtl'} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>رشته تحصیلی :</p>
                    <input type="text" className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'رشته تحصیلی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*مدرک تحصیلی :</p>
                    <select onChange={(e) => setEducation(e.target.value)} value={education}
                            className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'} dir={'rtl'}>
                        <option value="دیپلم">دیپلم</option>
                        <option value="فوق دیپلم">فوق دیپلم</option>
                        <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                        <option value="دکترا">دکترا</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>مهارت تحصیلی :</p>
                    <input type="text" className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'مهارت تحصیلی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>دانشگاه :</p>
                    <input type="text" className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}
                           placeholder={'دانشگاه'} dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[100%]'}>
                    <div dir={'rtl'}>
                        <span className="text-white text-sm font-normal ">در صورتی که </span><span
                        className="text-orange-500 text-sm font-normal ">دانشجوی مکین </span><span
                        className="text-white text-sm font-normal ">هستین ، کد دانشجویی خود را وارد کنید :</span>
                    </div>
                    <input type="text" className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'}/>
                </div>
            </div>
            <div className={'flex justify-between mr-[87px] px-[48px] mt-[54px]'}>
                <div className={'w-[100%]'}>
                    <div className="text-white text-sm font-normal " dir={'rtl'}>جهت اطلاع رسانی برگزاری ورکشاپ
                        های مرتبط ، علائق خود را انتخاب کنید :
                    </div>
                    <select className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px]'} dir={'rtl'}>
                        <option value="null">علائق خود را انتخاب کنید</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-end mr-[87px] px-[48px] mt-[74px]'}>
                <div className={'w-[25%] relative mr-[18%]'}>
                    <div className={'absolute top-[45%] right-[30%]'}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="fluent:add-24-filled">
                                    <path id="Vector"
                                          d="M11.883 3.007L12 3C12.2449 3.00003 12.4813 3.08996 12.6644 3.25272C12.8474 3.41547 12.9643 3.63975 12.993 3.883L13 4V11H20C20.2449 11 20.4813 11.09 20.6644 11.2527C20.8474 11.4155 20.9643 11.6397 20.993 11.883L21 12C21 12.2449 20.91 12.4813 20.7473 12.6644C20.5845 12.8474 20.3603 12.9643 20.117 12.993L20 13H13V20C13 20.2449 12.91 20.4813 12.7473 20.6644C12.5845 20.8474 12.3603 20.9643 12.117 20.993L12 21C11.7551 21 11.5187 20.91 11.3356 20.7473C11.1526 20.5845 11.0357 20.3603 11.007 20.117L11 20V13H4C3.75507 13 3.51866 12.91 3.33563 12.7473C3.15259 12.5845 3.03566 12.3603 3.007 12.117L3 12C3.00003 11.7551 3.08996 11.5187 3.25272 11.3356C3.41547 11.1526 3.63975 11.0357 3.883 11.007L4 11H11V4C11 3.75507 11.09 3.51866 11.2527 3.33563C11.4155 3.15259 11.6397 3.03566 11.883 3.007Z"
                                          fill="#FFFEFF"/>
                                </g>
                            </svg>
                            <div className="text-white text-sm font-normal font-['IRANYekan']">بارگذاری تصویر</div>
                        </div>
                    </div>
                    <p className={'text-white text-sm font-normal '} dir={'rtl'}>تصویر کارت ملی :</p>
                    <input type="text" className={'w-[100%] h-40 bg-[#0A2E65] rounded-xl mt-[16px]'}/>
                </div>
                <div className={'w-[25%] relative'}>
                    <div className={'absolute top-[45%] right-[30%]'}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="fluent:add-24-filled">
                                    <path id="Vector"
                                          d="M11.883 3.007L12 3C12.2449 3.00003 12.4813 3.08996 12.6644 3.25272C12.8474 3.41547 12.9643 3.63975 12.993 3.883L13 4V11H20C20.2449 11 20.4813 11.09 20.6644 11.2527C20.8474 11.4155 20.9643 11.6397 20.993 11.883L21 12C21 12.2449 20.91 12.4813 20.7473 12.6644C20.5845 12.8474 20.3603 12.9643 20.117 12.993L20 13H13V20C13 20.2449 12.91 20.4813 12.7473 20.6644C12.5845 20.8474 12.3603 20.9643 12.117 20.993L12 21C11.7551 21 11.5187 20.91 11.3356 20.7473C11.1526 20.5845 11.0357 20.3603 11.007 20.117L11 20V13H4C3.75507 13 3.51866 12.91 3.33563 12.7473C3.15259 12.5845 3.03566 12.3603 3.007 12.117L3 12C3.00003 11.7551 3.08996 11.5187 3.25272 11.3356C3.41547 11.1526 3.63975 11.0357 3.883 11.007L4 11H11V4C11 3.75507 11.09 3.51866 11.2527 3.33563C11.4155 3.15259 11.6397 3.03566 11.883 3.007Z"
                                          fill="#FFFEFF"/>
                                </g>
                            </svg>
                            <div className="text-white text-sm font-normal font-['IRANYekan']">بارگذاری تصویر</div>
                        </div>
                    </div>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>تصویر پروفایل :</p>
                    <input type="text" className={'w-[100%] h-40 bg-[#0A2E65] rounded-xl mt-[16px]'}/>
                </div>
            </div>
            <div className={'flex mr-[87px] px-[48px] mt-[65px]'} dir={'rtl'}>
                <input type="checkbox"/>
                <p className={'text-white text-sm font-normal mr-[1%]'}>قوانین و شرایط عضویت در آکادمی مکین را می
                    پذیرم</p>
            </div>
            <div className={'flex justify-end mr-[87px] px-[48px] mt-[77px]'}>
                <div
                    className={'w-[408px] h-12 rounded-xl flex justify-center items-center text-stone-50 text-lg font-medium bg-[#026AE1]'}
                    onClick={handleupdate}>ثبت
                </div>
            </div>
        </div>
    );
};

export default CompleteInformation;