'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingMinimal from "@/app/components/LoadingMinimal";

const Answer = ({id,setLoading,loading}: any) => {
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [to_panel, setTo_panel] = useState(false)
    const [to_email, setTo_email] = useState(false)
    const replayTicket = async () => {
        setLoading(true)
        try {
            const token = localStorage?.getItem('adminToken');
            const res = await axios.post(`https://www.cowork.v1r.ir/api/v1/tickets/admin/${id}/reply`, {
                "message": message,
                "title": title,
                "methods": {
                    "to_panel": true,
                    "to_email": true
                }
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            Swal.fire({
                title: "موفق بود",
                text: `پاسخ داده شد`,
                icon: "success",
                background: 'transparent',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#00000098'
            })
            setShowModal(false)
            setLoading(false)
        } catch (res: any) {
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
            setLoading(false)
        }
    }
    return (
        <div>
            <button className={'flex items-center ml-[15px]  '} dir={'rtl'} onClick={() => setShowModal(true)}>
                <p className={'ml-[5px] text-justify text-emerald-700 text-sm font-normal'}>پاسخ</p>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                          d="M6.13636 4.19247C15.0361 4.19247 15 15.0929 15 15.0929C15 15.0929 14.1361 10.0619 6.13636 10.0619V14.2544L0 6.96621L6.13636 0V4.19247Z"
                          fill="#02794C"/>
                </svg>
            </button>
            <ReactModal
                style={{
                    overlay: {
                        zIndex: 10,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    content: {
                        width: '42%',
                        height: 618,
                        position: 'absolute',
                        left: '30%',
                        top: '15%',
                        background: '#F8F9FC',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border: 'none'
                    }
                }}
                isOpen={showModal}>
                <div className={'flex flex-col relative'}>
                    <button className={'absolute top-[20px] right-[20px] text-black'}
                            onClick={() => setShowModal(false)}>X
                    </button>
                </div>
                <div
                    className={'w-[70%] h-[91px] flex justify-center items-center border-b-[1px] border-sky-950 mx-auto'}>
                    <div className={'flex items-center text-sky-950 text-base font-medium'}>
                        <svg className={'mr-[15px]'} width="15" height="16" viewBox="0 0 15 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M6.13636 4.49094C15.0361 4.49094 15 15.393 15 15.393C15 15.393 14.1361 10.3613 6.13636 10.3613V14.5543L0 7.26508L6.13636 0.297852V4.49094Z"
                                  fill="#0A2E65"/>
                        </svg>
                        پاسخ به کاربر
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" dir={'rtl'}
                        className={'mt-5 text-sky-950 text-sm font-normal p-4 w-[70%] mx-auto  h-[60px] bg-white rounded-3xl'}
                        placeholder={'عنوان پیام خود را بنویسید...'}/>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="" id="" dir={'rtl'}
                        className={'mt-5 text-sky-950 text-sm font-normal p-4 w-[70%] mx-auto  h-[214.35px] bg-white rounded-3xl'}
                        placeholder={'متن پیام خود را بنویسید...'}
                    />
                </div>
                <div className={'flex w-[70%] flex-col items-end mx-auto mt-[25px]'}>
                    <div className={'flex text-sky-950 text-sm font-bold'}>
                        ارسال به پنل کاربر
                        <input type='checkbox' onChange={() => setTo_panel(!to_panel)} className={'ml-[10px]'}/>
                    </div>
                    <div className={'flex text-sky-950 text-sm font-bold mt-[8px]'}>
                        ارسال به ایمیل کاربر
                        <input type='checkbox' onChange={() => setTo_email(!to_email)} className={'ml-[10px]'}/>
                    </div>
                </div>
                <div className={'flex mt-[40px] justify-center'}>
                    <button disabled={to_panel == false} onClick={replayTicket}
                            className={'w-[215px] h-[48.30px] bg-sky-600 disabled:opacity-50 rounded-xl text-white text-base font-bold flex justify-center items-center'}>
                        {loading ? 'در حال ارسال ... ' : ' ارسال'}
                    </button>
                </div>
            </ReactModal>
        </div>
    );
};

export default Answer;