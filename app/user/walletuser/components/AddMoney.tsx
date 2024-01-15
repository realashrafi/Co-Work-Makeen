'use client'
import React, {useState} from 'react';
import ReactModal from 'react-modal'
import Link from "next/link";
import axios from "axios";
import {headers} from "next/headers";
import Swal from "sweetalert2";

const AddMoney = ({data}: any) => {
    const [showModalMoney, setShowModalMoney] = useState(false)
    const [profit, setProfit] = useState<any>()
    const addMoney = async (e: any) => {
        e.preventDefault()
        const axios = require('axios');
        const token = localStorage?.getItem('userToken');
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://www.cowork.v1r.ir/api/v1/user/${data?.id}/add-balance/${profit}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            //@ts-ignore
            .then((response) => {
                console.log(JSON.stringify(response.data));
                Swal.fire({
                    title: "انجام شد",
                    text: "در کیف پول شما نشست",
                    icon: "success",
                    background: '#002256',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: '#002256'
                })
                window.location.reload()
            })
                //@ts-ignore
            .catch((error) => {
                console.log(error);
            });
        // try {
        //     const token = localStorage?.getItem('userToken');
        //     const res = await axios.put(`https://www.cowork.v1r.ir/api/v1/user/${data?.id}/add-balance/${profit}`,
        //          {
        //             headers: {
        //                 Authorization: `Bearer ${token}`,
        //                 Accept: 'application/json',
        //             }
        //         })
        //     console.log(res)
        // } catch (e) {
        //     console.log(e)
        // }
    }
    return (
        <div style={{zIndex: 2}}>
            <Link href={''} onClick={() => setShowModalMoney(true)}>
                <div className={'flex items-center ]'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.5 0.000373278C17.0536 0.00691877 16.5603 0.102917 15.9464 0.262187C14.1853 0.715999 4.05357 3.45632 4.05357 3.45632C4.03571 3.46068 4.01786 3.46723 4 3.47377C2.39509 4.06504 1.38393 4.62139 0.767857 5.42865C0.15625 6.23155 0.0200891 7.1959 0.0178571 8.34352C0.0178571 8.35006 0.0178571 8.35443 0.0178571 8.36097V8.71006C0.0111606 8.77987 0 8.84969 0 8.91951V20.8582C0 22.584 1.44866 24 3.21429 24H20.7857C22.5513 24 24 22.584 24 20.8582V8.83224C24 7.0519 22.3705 5.56829 20.5714 5.56829H3.42857C2.78795 5.56829 2.21205 5.74719 1.73214 6.03955C2.14732 5.53992 2.9308 5.06866 4.35714 4.53848C4.37277 4.53194 4.37723 4.52758 4.39286 4.52103C4.45759 4.50358 14.529 1.78289 16.2321 1.34435C16.7991 1.19817 17.2232 1.12181 17.5179 1.11745C17.8125 1.11308 17.9509 1.15672 18.0179 1.20472C18.0848 1.25272 18.1406 1.34653 18.1964 1.57126C18.2522 1.79598 18.2857 2.13852 18.2857 2.58361V4.45121H19.4286V2.58361C19.4286 2.09925 19.3973 1.68907 19.3036 1.30944C19.2098 0.929814 19.0268 0.556728 18.6964 0.31455C18.3661 0.072372 17.9464 -0.00617221 17.5 0.000373278ZM3.42857 6.68536H20.5714C21.6853 6.68536 22.8571 7.76753 22.8571 8.83224V20.8582C22.8571 21.9797 21.933 22.8829 20.7857 22.8829H3.21429C2.06473 22.8829 1.14286 21.9818 1.14286 20.8582V9.73986L1.16071 8.81478C1.1942 8.43515 1.39286 7.89407 1.76786 7.4708C2.17634 7.00826 2.73437 6.68536 3.42857 6.68536ZM19.7143 13.3878C18.9241 13.3878 18.2857 14.0118 18.2857 14.7841C18.2857 15.5565 18.9241 16.1805 19.7143 16.1805C20.5022 16.1805 21.1429 15.5565 21.1429 14.7841C21.1429 14.0118 20.5022 13.3878 19.7143 13.3878Z"
                            fill="#00B570"/>
                    </svg>
                    <p className={'text-[#FFFEFF] mx-[8px] text-[16px] '}>افزایش موجودی</p>
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
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    content: {
                        width: '90%',
                        height: 609,
                        position: 'absolute',
                        left: '5%',
                        top: '15%',
                        background: '#002256',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border: 'none'
                    }
                }}
                isOpen={showModalMoney}>
                <div>
                    <div className={'lg:w-[80%] border-b-[1px] border-[#CCCCCC22] py-4 mx-auto   items-center flex'}>
                        <div className={'flex lg:pr-[33px] pl-4  text-[#FFFEFF] text-[16px] '}
                             style={{direction: 'rtl'}}>
                            <Link href={''} onClick={() => setShowModalMoney(false)}>X</Link>
                        </div>
                        <p className={'text-center text-[#FFFEFF] text-[16px] pl-[33%] '}>افزایش موجودی</p>
                    </div>
                    <div
                        className={'lg:w-[383px] w-[90%] flex-col flex justify-center items-center h-[87px] bg-[#026AE1] mx-auto mt-[42px] border-b-[6px] border-[#44C0ED] rounded-[12px]'}>
                        <p className={'text-[#FFFEFF] text-[12px] '}>: موجودی کیف پول </p>
                        <p className={'text-[#FFFEFF] mt-[10px] text-[12px] '}>{data?.balance} تومان</p>
                    </div>
                    <div className={'lg:w-[383px] w-[90%] mt-[49px] h-[76px] flex flex-col mx-auto justify-between'}>
                        <p className={'text-[#FFFEFF] text-[14px] '} dir={'rtl'}>مبلغ مورد نظرت را انتخاب یا وارد کن</p>
                        <input value={profit}
                               className={'h-[44px] rounded-[12px] text-[#FFFEFF] bg-[#0A2E65] text-center'}
                               placeholder={'مبلغ ( تومان)'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfit(e.target.value)}/>
                    </div>
                    <div className={'lg:w-[383px] mt-[34px] flex justify-around h-[38px] mx-auto '}>
                        <div onClick={() => setProfit(500000)}
                             className={'w-[94px] cursor-pointer justify-center h-[38px] bg-[#0A2E65] text-[14px] rounded-[8px] text-center flex items-center text-[#E6E6E6]'}>
                            500 تومان
                        </div>
                        <div onClick={() => setProfit(200000)}
                             className={'w-[94px] cursor-pointer justify-center h-[38px] bg-[#0A2E65] text-[14px] rounded-[8px] text-center flex items-center text-[#E6E6E6]'}>
                            200 تومان
                        </div>
                        <div onClick={() => setProfit(100000)}
                             className={'w-[94px] cursor-pointer justify-center h-[38px] bg-[#0A2E65] text-[14px] rounded-[8px] text-center flex items-center text-[#E6E6E6]'}>
                            100 تومان
                        </div>
                    </div>
                    <p className={'text-[#C3C3C3] text-[14px] text-center mx-auto mt-[16px]'}>حداکثر موجودی کیف پول 3
                        میلیون تومان می باشد</p>
                    <Link href={'/user/walletuser'} onClick={addMoney}
                          className={'w-[289px] cursor-pointer h-[40px] bg-[#026AE1] mt-[50px] justify-center mx-auto text-[#FFFEFF] flex items-center text-center rounded-[12px]'}>
                        افزایش موجودی
                    </Link>
                </div>
            </ReactModal>
        </div>
    );
};

export default AddMoney;