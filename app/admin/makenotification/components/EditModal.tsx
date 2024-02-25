'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";
import LoadingMinimal from "@/app/components/LoadingMinimal";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
//@ts-ignore
import transition from "react-element-popper/animations/transition"
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

const Answer = ({id,refetch}: any) => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [to_panel, setTo_panel] = useState(false)
    const [to_email, setTo_email] = useState(false)
    const [state, setState] = useState({format: "MM-DD-YYYY"})
    const [date, setDate] = useState<any>()
    //@ts-ignore
    const convert = (date, format = state.format = "YYYY-MM-DD"): any => {
        let object = {date, format}
        setState({
            //@ts-ignore
            gregorian: new DateObject(object).convert(gregorian, gregorian_en).format("YYYY-MM-DD"),
            persian: new DateObject(object).format(),
            ...object
        })
        //@ts-ignore
        setDate(state.gregorian)
    }
    const replayTicket = async () => {
        setLoading(true)
        refetch()
        try {
            const token = localStorage?.getItem('adminToken');
            const res = await axios.put(`https://www.cowork.v1r.ir/api/v1/notices/${id}`, {
                "text": message,
                "date": date,
                "title": title
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            Swal.fire({
                title: "موفق بود",
                text: `اصلاح شد`,
                icon: "success",
                background: 'transparent',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#00000098'
            })
            setShowModal(false)
            setLoading(false)
            refetch()
        } catch (res: any) {
            console.log(res)
            // Swal.fire({
            //     title: "خطایی رخ داده",
            //     text: `${res.data.message}`,
            //     icon: "warning",
            //     background: '#002256',
            //     color: '#EEEFEE',
            //     confirmButtonColor: "#FF792C",
            //     confirmButtonText: 'باشه',
            //     backdrop: '#002256'
            // })
            setLoading(false)
        }
    }
    return (
        <div>
            <svg className={'cursor-pointer '} onClick={()=>setShowModal(true)} width="18" height="19" viewBox="0 0 18 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path id="Vector"
                      d="M15.3208 0C14.6352 0 13.9495 0.262778 13.4261 0.789526L12.3159 1.90678L16.1054 5.72034L17.2156 4.60309C18.2615 3.55054 18.2615 1.84302 17.2156 0.789526C16.6922 0.262778 16.0065 0 15.3208 0ZM10.8948 3.33686L0 14.3008V18.1144H3.7895L14.6843 7.15042L10.8948 3.33686Z"
                      fill="#02794C"/>
            </svg>
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
                       اصلاح اعلان
                    </div>
                </div>
                <div className={'flex flex-col relative'}>
                    <div className={'absolute text-gray-600 right-[17%] top-9'}>تاریخ را انتخاب کنید</div>
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
                        inputClass="ml-[15%] mt-5 text-sky-950 text-sm font-normal p-4 w-[70%] mx-auto  h-[60px] bg-white rounded-3xl"
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-center"
                    />
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
                        className={'mt-5 text-sky-950 text-sm font-normal p-4 w-[70%] mx-auto  h-[114.35px] bg-white rounded-3xl'}
                        placeholder={'متن پیام خود را بنویسید...'}
                    />
                </div>
                <div className={'flex w-[70%] flex-col items-end mx-auto mt-[25px]'}>
                    <div className={'flex text-sky-950 text-sm font-bold'}>
                        ارسال به پنل کاربر
                        <input type='checkbox' checked={to_panel} onChange={() => setTo_panel(!to_panel)} className={'ml-[10px]'}/>
                    </div>
                    <div className={'flex text-sky-950 text-sm font-bold mt-[8px]'}>
                        ارسال به ایمیل کاربر
                        <input type='checkbox' checked={to_email} onChange={() => setTo_email(!to_email)} className={'ml-[10px]'}/>
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