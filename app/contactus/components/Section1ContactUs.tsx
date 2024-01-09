import React from 'react';
import Navbar from "@/app/components/Navbar";

const Section1ContactUs = () => {
    return (
        <div>
            <Navbar/>
            <div className={'lg:w-[76.6%] h-[869px]  bg-[#0A2E65] rounded-[8px] mx-auto lg:mt-[64px]'}>
                <p className={'text-[#FF792C] text-[16px] pt-[16px] text-center'}>تماس با ما</p>
                <p className={'text-[#FFFEFF] text-[16px] pt-[33px] text-center'}>شما میتوانید در این قسمت با ما در تماس
                    باشید
                </p>
                <div className={'lg:w-[66%] w-[90%] lg:flex-nowrap flex-wrap flex justify-between mx-auto mt-[39px] h-[56px]'}>
                    <input className={'lg:w-[48%] w-[90%] mx-auto h-[56px] bg-[#002256] rounded-[12px] px-[16px] text-[#F8F9FC]'}
                           placeholder={'ایمیل'} type={'text'} style={{direction: "rtl"}}/>
                    <input className={'lg:w-[48%] w-[90%] lg:mt-0 mt-2 mx-auto h-[56px] bg-[#002256] rounded-[12px] px-[16px] text-[#F8F9FC]'}
                           placeholder={'نام و نام خانوادگی'} type={'text'} style={{direction: "rtl"}}/>
                </div>
                <textarea
                    className={'lg:w-[66%] w-[80%]  mx-[10%] lg:mx-[17%] h-[188px] bg-[#002256] rounded-[12px] mt-20 lg:mt-[24px] p-[16px] text-[#F8F9FC]'}
                    placeholder={'پیام های خود را در اینجا بنویسید'} style={{direction: "rtl"}}/>
                <div className={'lg:w-[37%] w-[50%] h-[48px] rounded-[12px] hover:bg-[#FF792C] bg-[#44C0ED] mx-auto mt-[24px]'}>
                    <p className={'text-[18px] text-[#FFFEFF]  text-center p-[9px]'}>ثبت تماس</p>
                </div>
                <div className={'mt-[40px] rounded-b-[12px]'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.754232090451!2d51.49608354127637!3d35.73449877022321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03ea78184fc3%3A0x650bba9962fd1a8b!2z2YXZiNiz2LPZhyDYp9uM2K_ZhyDYotmEINix2LPYp9mG2Ycg2YXaqduM2YY!5e0!3m2!1sen!2sde!4v1701169362449!5m2!1sen!2sde"
                        style={{border: 12, width: '100%', height: 345, borderRadius: '0px 0px 8px 8px'}} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


        </div>
    );
};

export default Section1ContactUs;