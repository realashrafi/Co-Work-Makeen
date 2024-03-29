'use client'
import React, {useState} from 'react';
import Link from "next/link";
import ReactModal from "react-modal"
import Image from "next/image";
import gifIcon from "@/app/components/data/movedIcon.gif";
import axios from "axios";
import Swal from "sweetalert2";

const ModalConnectAdmin = ({refetch}:any) => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const sendTicket = async () => {
        const token=localStorage?.getItem('userToken')
        try {
            const res = await axios.post('https://www.cowork.v1r.ir/api/v1/tickets/user', {
                title:title,
                message:message
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            console.log(res)
            Swal.fire({
                title: "تیکت شما ارسال شد",
                text: `در سریع ترین زمان ممکن پاسخ میدهیم`,
                icon: "success",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
            setMessage('')
            setTitle('')
            setShowModal(false)
            refetch()
        } catch (res:any) {
            Swal.fire({
                title: "خطایی رخ داده",
                text: `${res.data.message}`,
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
        <div className={'mr-[24px]'}>
            <Link onClick={() => setShowModal(true)} href={''}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0C5.38324 0 0 5.38324 0 12C0 18.6168 5.38324 24 12 24C18.6168 24 24 18.6168 24 12C24 5.38324 18.6168 0 12 0ZM12 1.8C17.644 1.8 22.2 6.35603 22.2 12C22.2 17.644 17.644 22.2 12 22.2C6.35603 22.2 1.8 17.644 1.8 12C1.8 6.35603 6.35603 1.8 12 1.8ZM11.9859 5.98711C11.7474 5.99084 11.5202 6.08907 11.3541 6.26024C11.188 6.4314 11.0966 6.66151 11.1 6.9V11.1H6.9C6.78074 11.0983 6.66233 11.1203 6.55166 11.1648C6.44099 11.2093 6.34026 11.2753 6.25533 11.3591C6.1704 11.4428 6.10295 11.5426 6.05692 11.6526C6.01089 11.7626 5.98718 11.8807 5.98718 12C5.98718 12.1193 6.01089 12.2374 6.05692 12.3474C6.10295 12.4574 6.1704 12.5572 6.25533 12.6409C6.34026 12.7247 6.44099 12.7907 6.55166 12.8352C6.66233 12.8797 6.78074 12.9017 6.9 12.9H11.1V17.1C11.0983 17.2193 11.1203 17.3377 11.1648 17.4483C11.2093 17.559 11.2753 17.6597 11.3591 17.7447C11.4428 17.8296 11.5426 17.897 11.6526 17.9431C11.7626 17.9891 11.8807 18.0128 12 18.0128C12.1193 18.0128 12.2374 17.9891 12.3474 17.9431C12.4574 17.897 12.5572 17.8296 12.6409 17.7447C12.7247 17.6597 12.7907 17.559 12.8352 17.4483C12.8797 17.3377 12.9017 17.2193 12.9 17.1V12.9H17.1C17.2193 12.9017 17.3377 12.8797 17.4483 12.8352C17.559 12.7907 17.6597 12.7247 17.7447 12.6409C17.8296 12.5572 17.897 12.4574 17.9431 12.3474C17.9891 12.2374 18.0128 12.1193 18.0128 12C18.0128 11.8807 17.9891 11.7626 17.9431 11.6526C17.897 11.5426 17.8296 11.4428 17.7447 11.3591C17.6597 11.2753 17.559 11.2093 17.4483 11.1648C17.3377 11.1203 17.2193 11.0983 17.1 11.1H12.9V6.9C12.9017 6.77954 12.8793 6.65996 12.8339 6.54835C12.7886 6.43673 12.7213 6.33535 12.6361 6.25022C12.5508 6.16509 12.4493 6.09794 12.3377 6.05274C12.226 6.00754 12.1064 5.98523 11.9859 5.98711Z"
                        fill="#FF792C"/>
                </svg>
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
                isOpen={showModal} className={'w-[90%] mt-20 mx-auto lg:w-[40%] h-[609px]'}>
                <Image src={gifIcon} alt={''}
                       className={'absolute opacity-25 lg:opacity-60 lg:top-20 -top-[17%] scale-[90%] lg:-left-20 '}/>
                <div className={'w-[100%]  flex-col '}>
                    <div className={'flex justify-between  border-[#0A2E65] mx-[24px] pb-[24px] border-b-[1px] '}>
                        <Link className={'ml-[21px] font-bold text-white mt-[45px]'} onClick={() => setShowModal(false)}
                              href={''}>
                            X
                        </Link>
                        <p className={'text-[#FFFEFF] ml-[165px] mt-[45px] text-[16px] text-center'}>ارتباط با
                            پشتیبانی</p>
                    </div>
                    <div className={'w-[100%] flex flex-col pt-[36px]'}>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className={'outline-none lg:w-[70.67%] w-[90%]  h-[60px]  mx-auto bg-[#0A2E65] text-[#FFFEFF] text-[16px] rounded-[24px] p-[20px]'}
                            dir='rtl'
                            placeholder={'عنوان پیام خود را بنویسید...'}/>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={'outline-none lg:w-[70.67%] mt-3 w-[90%] lg:h-[227px] h-[370px]  mx-auto bg-[#0A2E65] text-[#FFFEFF] text-[16px] rounded-[24px] p-[20px]'}
                            dir='rtl'
                            placeholder={'متن پیام خود را بنویسید...'}>
                    </textarea>
                    </div>
                    <div className={'w-[100%] flex lg:-mt-0 -mt-8 lg:pt-[76px] z-50'}>
                        <button
                            onClick={sendTicket}
                            disabled={title.length === 0 || message.length === 0}
                            className={'w-[38%] mx-auto disabled:opacity-50 h-[48px] text-[#FFFEFF] flex justify-center items-center bg-[#44C0ED] rounded-[24px]'}>
                            ارسال
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

export default ModalConnectAdmin;