'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker, {DateObject} from "react-multi-date-picker"
//@ts-ignore
import transition from "react-element-popper/animations/transition"
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

//persian calendar & locale
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import gregorian_en from "react-date-object/locales/gregorian_en";
import AOS from "aos";


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
    const [validate, setValidate] = useState(false)
    const [state, setState] = useState({ format: "MM-DD-YYYY" })
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
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
            setUserID(response.data.id)
            setFirst_name(response.data.first_name)
            setLast_name(response.data.last_name)
            setEmail(response.data.email)
            setNational_code(response.data.national_code)
            if (response.status == 200) {
                setValidate(true)
            } else {
                setValidate(false)
            }
        } catch (e) {
            //console.log(e)
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
                //@ts-ignore
                dob: state.gregorian,
                gender: gender,
                national_code: national_code,
                education: education,
                // password: "12345678",
                // password_confirmation: "12345678",
                // current_password: "12345678"
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            if (response.status == 200) {
                Swal.fire({
                    title: "انجام شد",
                    text: "حالا میتوانید خرید کنید",
                    icon: "success",
                    background: 'transparent',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop:'rgba(0,0,0,0.78)'
                })
                router.back()
            }
        } catch (e:any) {
            //console.log(e)
            Swal.fire({
                title: `${e.response.data.message} خطا`,
                text:`کنسول را چک کنید`,
                icon: "error",
                background: 'transparent',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: 'rgba(0,0,0,0.78)'
            })
        }
    }
    //@ts-ignore
    const convert = (date, format = state.format="YYYY-MM-DD"):any => {
        let object = { date, format }
        setState({
            //@ts-ignore
            gregorian: new DateObject(object).convert(gregorian, gregorian_en).format("YYYY-MM-DD"),
            persian: new DateObject(object).format(),
            ...object
        })
    //@ts-ignore
        setDob(state.gregorian)
    }
    //console.log(dob)
    return (
         <div data-aos={'fade-up'} className={'flex w-[100%] mt-4 lg:mt-0 flex-col  '}>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 '}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*نام خانوادگی :</p>
                    <input type="text" onChange={(e) => setLast_name(e.target.value)} value={last_name}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'نام خانوادگی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*نام :</p>
                    <input type="text" onChange={(e) => setFirst_name(e.target.value)} value={first_name}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'نام'}
                           dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*تاریخ تولد :</p>
                    <DatePicker
                        animations={[
                            transition({
                                from: 35,
                                transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                            }),
                        ]}
                        //@ts-ignore
                        value={state.date}
                        //@ts-ignore
                        onChange={convert}
                        inputClass="w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white"
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-center"
                    />
                    {/*<input type="text" onChange={(e) => setDob(e.target.value)} value={dob}*/}
                    {/*       className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}*/}
                    {/*       placeholder={'تاریخ تولد'} dir={'rtl'}/>*/}
                </div>

                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*کد ملی :</p>
                    <input type="text" onChange={(e) => setNational_code(e.target.value)} value={national_code}
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'کد ملی'} dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>ساکن منطقه :</p>
                    <input type="text"
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'ساکن منطقه'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*جنسیت :</p>
                    <select className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                            value={gender}
                            dir={'rtl'} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>رشته تحصیلی :</p>
                    <input type="text"
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'رشته تحصیلی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>*مدرک تحصیلی :</p>
                    <select onChange={(e) => setEducation(e.target.value)} value={education}
                            className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                            dir={'rtl'}>
                        <option value="دیپلم">دیپلم</option>
                        <option value="فوق دیپلم">فوق دیپلم</option>
                        <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                        <option value="دکترا">دکترا</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>مهارت تحصیلی :</p>
                    <input type="text"
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'مهارت تحصیلی'} dir={'rtl'}/>
                </div>
                <div className={'w-[45%]'}>
                    <p className={'text-white text-sm font-normal'} dir={'rtl'}>دانشگاه :</p>
                    <input type="text"
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                           placeholder={'دانشگاه'} dir={'rtl'}/>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[100%]'}>
                    <div dir={'rtl'}>
                        <span className="text-white text-sm font-normal ">در صورتی که </span><span
                        className="text-orange-500 text-sm font-normal ">دانشجوی مکین </span><span
                        className="text-white text-sm font-normal ">هستین ، کد دانشجویی خود را وارد کنید :</span>
                    </div>
                    <input type="text"
                           className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}/>
                </div>
            </div>
            <div className={'flex justify-between lg:mr-[87px] lg:px-[48px] px-2 mt-[54px]'}>
                <div className={'w-[100%]'}>
                    <div className="text-white text-sm font-normal " dir={'rtl'}>جهت اطلاع رسانی برگزاری ورکشاپ
                        های مرتبط ، علائق خود را انتخاب کنید :
                    </div>
                    <select className={'w-[100%] h-10 bg-[#0A2E65] rounded-xl mt-[16px] px-[16px] text-white'}
                            dir={'rtl'}>
                        <option value="null">علائق خود را انتخاب کنید</option>
                    </select>
                </div>
            </div>
            <div className={'flex justify-end lg:mr-[87px] lg:px-[48px] px-2 mt-[74px]'}>
                <div className={'lg:w-[25%] relative mr-[18%]'}>
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
                <div className={'lg:w-[25%] relative'}>
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
            <div className={'flex lg:mr-[87px] lg:px-[48px] px-2 mt-[65px]'} dir={'rtl'}>
                <input type="checkbox"/>
                <p className={'text-white text-sm font-normal mr-[1%]'}>قوانین و شرایط عضویت در آکادمی مکین را می
                    پذیرم</p>
            </div>
            <div className={'flex justify-end lg:mr-[87px] lg:px-[48px] px-2 mt-[77px]'}>
                <div
                    className={'lg:w-[408px] cursor-pointer  w-[280px] lg:mx-0 mx-auto h-12 rounded-xl flex justify-center items-center text-stone-50 text-lg font-medium bg-[#026AE1]'}
                    onClick={handleupdate}>ثبت
                </div>
            </div>
        </div>
    );
};

export default CompleteInformation;