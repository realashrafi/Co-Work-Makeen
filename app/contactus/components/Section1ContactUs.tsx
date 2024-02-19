'use client'
import React, {useEffect, useState} from 'react';
import Navbar from "@/app/components/Navbar";
import AOS from "aos";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingMinimal from "@/app/components/LoadingMinimal";

const Section1ContactUs = () => {
    const [email, setEmail] = useState<any>('')
    const [name, setName] = useState<any>('')
    const [message, setMessage] = useState<any>('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    const sendTicket = async () => {
        setLoading(true)
        try {
            const res = await axios.post('https://www.cowork.v1r.ir/api/v1/tickets/gust-user', {
                "message": message,
                "email": email,
                "name": name
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            if (res.status === 201) {
                Swal.fire({
                    title: "پیام شما دریافت شد",
                    text: "از طریق ایمیل میتوانید پیگیری کنید",
                    icon: "success",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: '#002256'
                })
                setMessage('')
                setName('')
                setEmail('')
                setLoading(false)
            }

        } catch (res: any) {
            setLoading(false)
            Swal.fire({
                title: "خطایی رخ داده",
                text: `${res.response.data.message}`,
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
        }
    }
    return (
        <div>
            <Navbar/>
            <form data-aos={'fade-up'}
                  className={'lg:w-[76.6%] h-[869px]  bg-[#0A2E65] mt-10 rounded-[8px] mx-auto lg:mt-[44px]'}>
                <p data-aos={'fade-up'} className={'text-[#FF792C] text-[16px] pt-[16px] text-center'}>تماس با ما</p>
                <p data-aos={'fade-up'} className={'text-[#FFFEFF] text-[16px] pt-[33px] text-center'}>شما میتوانید در
                    این قسمت با ما در تماس
                    باشید
                </p>
                <div data-aos={'fade-up'}
                     className={'lg:w-[66%] w-[90%] lg:flex-nowrap flex-wrap flex justify-between mx-auto mt-[39px] h-[56px]'}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                           className={'lg:w-[49%] lg:-ml-[1px] w-[90%] mx-auto h-[56px]  bg-[#002256] rounded-[12px] px-[16px] text-[#F8F9FC]'}
                           placeholder={'ایمیل'} type={'text'} style={{direction: "rtl"}}/>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                           className={'lg:w-[49%] lg:-mr-[1px] w-[90%] lg:mt-0 mt-2 mx-auto  h-[56px] bg-[#002256] rounded-[12px] px-[16px] text-[#F8F9FC]'}
                           placeholder={'نام و نام خانوادگی'} type={'text'} style={{direction: "rtl"}}/>
                </div>
                <textarea data-aos={'fade-up'} value={message} onChange={(e) => setMessage(e.target.value)}
                          className={'lg:w-[66%] w-[80%]  mx-[10%] lg:mx-[17%] h-[188px] bg-[#002256] rounded-[12px] mt-20 lg:mt-[24px] p-[16px] text-[#F8F9FC]'}
                          placeholder={'پیام های خود را در اینجا بنویسید'} style={{direction: "rtl"}}/>
                <button disabled={name.length===0||message.length===0||email.length===0} onClick={sendTicket}
                     className={'lg:w-[37%]  disabled:opacity-50 w-[50%] h-[48px] flex justify-center items-center rounded-[12px] hover:bg-[#FF792C] bg-[#44C0ED] mx-auto mt-[24px]'}>
                    {loading ? <LoadingMinimal /> :
                        <span className={'text-[18px] text-[#FFFEFF]  text-center p-[9px]'}>ثبت تماس</span>}
                </button>
                <div data-aos={'fade-up'} className={'mt-[40px] rounded-b-[12px]'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.754232090451!2d51.49608354127637!3d35.73449877022321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03ea78184fc3%3A0x650bba9962fd1a8b!2z2YXZiNiz2LPZhyDYp9uM2K_ZhyDYotmEINix2LPYp9mG2Ycg2YXaqduM2YY!5e0!3m2!1sen!2sde!4v1701169362449!5m2!1sen!2sde"
                        style={{border: 12, width: '100%', height: 345, borderRadius: '0px 0px 8px 8px'}} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </form>


        </div>
    );
};

export default Section1ContactUs;