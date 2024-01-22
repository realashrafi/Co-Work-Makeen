'use client'
import React, {useState} from 'react';
import ReactModal from 'react-modal'
import Link from "next/link";
import axios from "axios";
import {headers} from "next/headers";
import Swal from "sweetalert2";
import Image from "next/image";
import gifIcon from "@/app/components/data/movedIcon.gif";
//@ts-ignore
const AddMoney = ({id, balance, first_name, last_name}: any) => {
    const [showModalMoney, setShowModalMoney] = useState(false)
    const [profit, setProfit] = useState<any>()
    const addMoney = async (e: any) => {
        e.preventDefault()
        const axios = require('axios');
        const token = localStorage?.getItem('adminToken');
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://www.cowork.v1r.ir/api/v1/user/${id}/add-balance/${profit}`,
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
                    text: `در کیف پول ${first_name + ' ' + last_name} نشست`,
                    icon: "success",
                    background: 'transparent',
                    color: '#EEEFEE',
                    confirmButtonColor: "#FF792C",
                    confirmButtonText: 'باشه',
                    backdrop: 'rgba(0,0,0,0.78)'
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
            <div
                className={'w-fit mr-[3.5%] ml-3 flex justify-between items-center'}>
                <p className={'w-[120px] text-neutral-500 relative right-5 text-[11px] font-bold'}>موجودی
                    : {balance} تومان</p>
                <div className={'w-[2px] mx-2 h-[30px] bg-[#BFBFBF] rounded'}></div>
                <div onClick={() => setShowModalMoney(true)}
                     className={'w-[67px] h-[24px] cursor-pointer bg-[#01B574] flex justify-center items-center rounded-3xl text-white text-xs font-bold'}>شارژ
                </div>
            </div>
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
                        background: '#0C1E41',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '24px',
                        outline: 'none',
                        padding: '0px',
                        border: 'none'
                    }
                }}
                isOpen={showModalMoney} className={'transition-transform w-[90%] mt-20 mx-auto lg:w-[38%] h-[609px] '}>
                <div>
                    <Image src={gifIcon} alt={''}
                           className={'absolute lg:opacity-60 opacity-25 lg:top-20 -top-[17%] scale-[90%] lg:-left-12'}/>
                    <div className={'lg:w-[80%] border-b-[1px] border-[#CCCCCC22] py-8 mx-auto   items-center flex'}>
                        <div className={'flex lg:pr-[33px] pl-4  text-[#FFFEFF] text-[16px] '}
                             style={{direction: 'rtl'}}>
                            <Link href={''} onClick={() => setShowModalMoney(false)}>X</Link>
                        </div>
                        <p className={'text-center text-[#FFFEFF] text-[16px] pl-[30%] lg:pl-[25%] '}>افزایش موجودی</p>
                    </div>
                    <div
                        className={'lg:w-[383px] w-[90%] flex-col flex justify-center items-center h-[87px] bg-[#026AE1] mx-auto mt-[42px] border-b-[6px] border-[#44C0ED] rounded-[12px]'}>
                        <p className={'text-[#FFFEFF] text-[12px] '}>: موجودی کیف پول </p>
                        <p className={'text-[#FFFEFF] mt-[10px] text-[12px] '}>{balance} تومان</p>
                    </div>
                    <div className={'flex items-center text-white justify-center mt-[16px]'}>{first_name} {last_name}</div>
                    <div className={'lg:w-[383px] w-[90%] mt-[33px] h-[76px] flex flex-col mx-auto justify-between'}>
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