'use client'
import React, {useState} from 'react';
// @ts-ignore
import ReactModal from 'react-modal'
import Link from "next/link";
import LoginForBuy from "@/app/buy/components/LoginForBuy";
import Image from "next/image";
import gifIcon from "@/app/components/data/movedIcon.gif";
import axios from "axios";
import Compressor from "compressorjs";
import Swal from "sweetalert2";

const AddSub = () => {
    const [showModalSub, setShowModalSub] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const fileChange = (e:any) => {
      const file=e.target.files[0];
      setSelectedFile(file)
    }
    const fileUpload =async (e:any) => {
        setLoading(true)
        if (selectedFile) {
            try {
                const token = localStorage?.getItem('userToken');
                //console.log(token);

                new Compressor(selectedFile, {
                    quality: 0.5, // میزان کیفیت فایل خروجی
                    success: async (compressedFile) => {
                        const formData = new FormData();
                        formData.append('image', compressedFile);
                        formData.append('title', 'ارسال فیش بانکی');
                        formData.append('message', message);
                        const response = await axios.post(
                            'https://www.cowork.v1r.ir/api/v1/tickets/user',
                            formData,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                    Accept: 'application/json',
                                },
                            }
                        );

                        window.location.reload();
                        // console.log(response);

                        if (response.status === 200) {
                            Swal.fire({
                                title: 'انجام شد',
                                text: 'عکس شما اپلود شد',
                                icon: 'success',
                                background: 'transparent',
                                color: '#EEEFEE',
                                confirmButtonColor: '#FF792C',
                                confirmButtonText: 'باشه',
                                backdrop: 'rgba(0,0,0,0.78)'
                            });
                            setLoading(false)
                        } else {
                            console.error('خطا در آپلود');
                        }
                    },
                    error: (err) => {
                        console.error('خطا در فشرده‌سازی:', err.message);
                    },
                });
            } catch (error) {
                console.error('خطا در ارسال درخواست:', error);
            }
        }
    }
    return (
        <div className={'my-2'} style={{zIndex: 2}}>
            <Link href={''} onClick={() => setShowModalSub(true)} style={{zIndex: 2}}>
                <div className={'flex items-center ]'}>
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector"
                              d="M23.4401 0C22.2795 0 21.1189 0.451498 20.2314 1.35414C18.4563 3.13656 18.4563 6.03845 20.2314 7.82088C22.0065 9.6033 24.8964 9.6033 26.6715 7.82088C28.4466 6.03845 28.4466 3.13656 26.6488 1.35414C25.7613 0.451498 24.6007 0 23.4401 0ZM23.9037 2.06245C24.0772 2.06245 24.2479 2.13109 24.3731 2.2682L26.1937 4.09633C26.3302 4.23344 26.3986 4.39331 26.3986 4.57613C26.3986 4.66753 26.376 4.75885 26.3532 4.8274C26.3077 4.91881 26.2619 4.98737 26.1937 5.05592L24.3731 6.88405C24.1 7.15827 23.6678 7.15827 23.4174 6.88405C23.1444 6.60983 23.1444 6.17583 23.4174 5.92446L24.0775 5.26167H21.1644C20.7775 5.26167 20.4816 4.9646 20.4816 4.57613C20.4816 4.18765 20.7775 3.89058 21.1644 3.89058H24.0775L23.4174 3.22779C23.1444 2.95357 23.1444 2.51957 23.4174 2.2682C23.554 2.13109 23.7302 2.06245 23.9037 2.06245ZM2.95846 3.86781C1.31993 3.89067 0 5.21597 0 6.86129V21.0293C0 22.6746 1.31993 24 2.95846 24H21.1644C22.7346 24 24.1228 22.7203 24.1228 21.2578V12.597C24.1228 12.1628 23.7133 11.8428 23.3037 11.9342H23.281C22.9624 12.0027 22.7574 12.277 22.7574 12.597V21.2578C22.7574 21.8977 22.0519 22.6289 21.1644 22.6289H2.95846C2.07092 22.6289 1.36544 21.9205 1.36544 21.0293V6.86129C1.36544 5.97007 2.07092 5.26167 2.95846 5.26167H15.4977C15.8618 5.26167 16.1804 4.9646 16.1804 4.57613V4.55336C16.1804 4.18774 15.8846 3.86781 15.4977 3.86781H2.95846ZM3.78608 9.56644C3.61256 9.55215 3.43637 9.60348 3.29982 9.71774C3.00398 9.96911 2.98113 10.4031 3.2087 10.6773C3.41352 10.9287 8.10163 16.459 12.0614 16.459C14.4282 16.459 17.0451 14.4939 18.8202 12.8714C19.1843 12.5287 19.0705 11.9345 18.5926 11.7289C18.3423 11.6146 18.0694 11.6832 17.8645 11.8431C17.637 12.0488 17.3868 12.277 17.1365 12.4827C15.1566 14.1966 13.4041 15.0879 12.0614 15.0879C10.7187 15.0879 8.96632 14.1965 6.96367 12.5055C5.39341 11.1801 4.25545 9.83209 4.25545 9.80924C4.13029 9.6607 3.95961 9.58072 3.78608 9.56644Z"
                              fill="#026AE1"/>
                    </svg>
                    <p className={'text-[#FFFEFF] mx-[8px] text-[16px] '}>ارسال فیش واریزی</p>
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0529 0.000277263C9.81505 0.00559788 9.58974 0.0800865 9.42345 0.206451L0.26822 7.01684C-0.0894065 7.28287 -0.0894065 7.71384 0.26822 7.97987L9.42345 14.7903C9.65233 14.9685 9.99386 15.0403 10.3157 14.9778C10.6358 14.9153 10.8861 14.7291 10.9702 14.491C11.0542 14.2516 10.9577 13.9975 10.7181 13.8272L2.21013 7.49836L10.7181 1.16948C10.9881 0.97395 11.0703 0.674666 10.9237 0.415285C10.7753 0.157235 10.4302 -0.00770383 10.0529 0.000277263Z"
                            fill="white"/>
                    </svg>
                </div>
            </Link>
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
                        border: 'none'
                    }
                }}
                isOpen={showModalSub} className={'w-[90%] mt-20 mx-auto lg:w-[40%] h-[609px]'}>
                <Image src={gifIcon} alt={''}
                       className={'absolute opacity-25 lg:opacity-60 lg:top-20 -top-[17%] scale-[90%] lg:-left-20 '}/>
                <div className={'w-[100%]  flex-col '}>
                    <div className={'flex justify-between  border-[#0A2E65] mx-[24px] pb-[24px] border-b-[1px] '}>
                        <Link className={'ml-[21px] mt-[45px]'} onClick={() => setShowModalSub(false)} href={''}>
                            x
                        </Link>
                        <p className={'text-[#FFFEFF] ml-[165px] mt-[45px] text-[16px] text-center'}>ارسال فیش واریزی</p>
                    </div>
                    <div className={'w-[100%] flex flex-col '}>
                        <input
                            value={'ارسال فیش بانکی'}
                            type="text" dir={'rtl'}
                            className={'mt-5 text-white text-sm font-normal p-4 w-[70%] mx-auto  h-[60px] bg-[#0A2E65] rounded-3xl'}
                            />
                        <input onChange={fileChange}
                            type="file" dir={'rtl'}
                            className={'mt-5 file:bg-[#0A2E70] file:rounded-xl file:border-none text-white text-sm font-normal p-4 w-[70%] mx-auto  h-[60px] bg-[#0A2E65] rounded-3xl'}
                            />
                        <textarea onChange={(e)=>setMessage(e.target.value)}
                            name="" id="" dir={'rtl'} value={message}
                            className={'mt-5 text-white text-sm font-normal p-4 w-[70%] mx-auto  h-[214.35px] bg-[#0A2E65] rounded-3xl'}
                            placeholder={'متن پیام خود را بنویسید...'}
                        />
                    </div>
                    <div className={'w-[100%] justify-center flex lg:-mt-0 -mt-8 lg:pt-[35px] z-50'}>
                        <button onClick={fileUpload} className={'w-48 h-10 bg-blue-400 rounded-2xl text-white'}>{loading ?
                            <div
                                className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#44C0ED]">

                            </div>
                            : "ارسال"}
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

export default AddSub;