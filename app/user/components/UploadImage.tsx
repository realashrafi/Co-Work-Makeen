'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";
import Compressor from 'compressorjs';
import useMe from "@/app/store/react-query/useMe";
import LoadingSmall from "@/app/components/LoadingSmall";

const UploadImage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState<any>(false)
    const {data} = useMe()
    console.log('upload', data)
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleFileUpload = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        console.log(selectedFile);

        if (selectedFile) {
            try {
                const token = localStorage?.getItem('userToken');
                console.log(token);

                new Compressor(selectedFile, {
                    quality: 0.5, // میزان کیفیت فایل خروجی
                    success: async (compressedFile) => {
                        const formData = new FormData();
                        formData.append('picture', compressedFile);

                        const response = await axios.post(
                            'https://www.cowork.v1r.ir/api/v1/user/set-picture/avatar',
                            formData,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                    Accept: 'application/json',
                                },
                            }
                        );

                        window.location.reload();
                        console.log(response);

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
    };

    return (
        <div>
            <div className={'relative cursor-pointer'} onClick={() => setShowModal(true)}>
                <div className={'absolute bottom-0'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 665">
                            <rect id="Rectangle 742" width="24" height="24" rx="5" fill="#F5F4F4"/>
                            <path id="Vector"
                                  d="M17.1688 5C16.9668 5 16.7646 5.07695 16.6106 5.23129L15.263 6.57895L18.4209 9.73684L19.7685 8.38919C20.0772 8.0805 20.0772 7.58072 19.7685 7.27282L17.727 5.23129C17.5727 5.07695 17.3708 5 17.1688 5ZM14.0788 7.76316L5 16.8421V20H8.15785L17.2367 10.9211L14.0788 7.76316Z"
                                  fill="#FF792C"/>
                        </g>
                    </svg>
                </div>
                {data?.profile_picture == null ?
                    <svg width="90px" height="90px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#494c4e"
                              d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"/>
                    </svg>
                    :
                    <img src={data?.profile_picture} className={'w-[90px] h-[90px] rounded-full'} alt={''}/>
                }
            </div>
            <ReactModal
                style={{
                    overlay: {
                        zIndex: 10,
                        position: 'fixed',
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
                isOpen={showModal} className={'w-[90%] mt-[34%] lg:mt-32 mx-auto lg:w-[38%] h-[235px]'}>
                <div className={'flex flex-col items-center'}>
                    <div className={'text-xl cursor-pointer text-white self-end mr-4 mt-3'} onClick={() => setShowModal(false)}>X</div>
                    <div className="grid w-full max-w-xs items-center gap-1.5 mt-4" dir={'rtl'}>
                        <label
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">تصویر</label>
                        <input id="picture" type="file" onChange={handleFileChange}
                               className="flex h-10 w-full rounded-md border border-input bg-[#0A2E65] px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
                    </div>
                </div>
                <p className={'text-white text-sm mt-2 self-center text-center'}>آپلود عکس ممکن است زمان بر باشد </p>
                <p className={'text-white text-sm mt-2 self-center text-center'}> پس لطفا شکیبا باشید</p>
                <div className={'flex justify-center items-center mt-3'}>
                    <button disabled={selectedFile == null ? true : false}
                            className={'disabled:opacity-30 rounded-xl text-white px-10 py-2 bg-orange-500'}
                            onClick={handleFileUpload}>{loading ?
                        <div
                            className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#44C0ED]">

                        </div>
                        : "آپلود"}
                    </button>
                </div>
            </ReactModal>
        </div>
    );
};

export default UploadImage;