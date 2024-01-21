import React, {useEffect, useState} from 'react';
import {CChart} from "@coreui/react-chartjs";
import axios from "axios";

const Section1HomeAdmin = () => {
    const [transactios, setTransactios] = useState<any>()
    const [reserves, setReserves] = useState<any>()
    const [today, setToday] = useState<any>()
    useEffect(() => {
        getReserve()
        getTransactions()
    }, []);
    const getTransactions = async () => {
        const token = localStorage?.getItem('adminToken')
        try {
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/reports/transactions/amount/12-month',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            console.log('trans', res)
            setTransactios(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const getReserve = async () => {
        const token = localStorage?.getItem('adminToken')
        try {
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/reports/reservations/student-usage/12-month',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            console.log('reserve', res)
            setReserves(res.data)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={' w-[96%] flex justify-between mt-[40px] mx-auto'}>
            <div
                className={'z-[2] w-[52.38%] relative object-cover h-[265px] bg-white rounded-xl border border-sky-950 border-opacity-10 backdrop-blur-[71.48px] '}>
                <div
                    className={' justify-between items-center right-0 flex w-[100%] rounded-xl px-4 h-[26px] bg-white backdrop-blur-[71.48px] absolute'}>
                    <p className={'text-blue-600 text-xs font-normal'}>مشاهده بیشتر</p>
                    <div className={'flex items-center text-zinc-800 text-xs font-medium'}> میزان پرداختی ها
                        <div className={'w-[10px] h-[10px] ml-[10px] rounded-full bg-[#165BAA]'}></div>
                    </div>
                </div>
                <div className={'w-[98%] mx-auto'}>
                    <CChart
                        type="line"
                        data={{
                            labels: transactios?.key,
                            datasets: [
                                {
                                    label: '',
                                    tension: 0.3,
                                    backgroundColor: "#165BAA",
                                    borderColor: "#165BAA",
                                    pointBackgroundColor: "#165BAA",
                                    pointBorderColor: "#165BAA",
                                    data: transactios?.values
                                },
                            ],

                        }}
                    />
                </div>
            </div>
            <div
                className=" z-[2] w-[45.42%] relative h-[265px] bg-white rounded-xl border border-sky-950 border-opacity-10 backdrop-blur-[71.48px] ">
                <div
                    className={' justify-between items-start pt-1 right-0 flex w-[100%]  rounded-xl px-4 h-[56px] bg-white backdrop-blur-[71.48px] absolute'}>
                    <div className={'flex items-center '}>
                        <div className={'flex items-center text-zinc-800 text-[10px] font-normal'}>
                            <div className={'w-[8px] h-[8px] rounded-full bg-[#FF792C] mr-[10px]'}></div>
                            مکینی
                        </div>
                        <div
                            className={'flex items-center text-zinc-800 text-[10px] font-normal ml-[15px]'}>
                            <div className={'w-[8px] h-[8px] rounded-full bg-[#026AE1] mr-[10px]'}></div>
                            غیر مکینی
                        </div>
                    </div>
                    <div className={'flex items-center text-zinc-800 text-xs font-medium'}> میزان استفاده از
                        کوورک (شش ماهه)
                        <div className={'w-[10px] h-[10px] ml-[10px] rounded-full bg-[#165BAA]'}></div>
                    </div>
                </div>
                <div className={'w-[98%] mt-[34px] mx-auto'}>
                    <CChart
                        type="bar"
                        data={{
                            labels: reserves?.key,
                            datasets: [
                                {
                                    label: 'مکینی',
                                    backgroundColor: '#FF792C',
                                    borderRadius: 10,
                                    barPercentage: 0.5,
                                    data: [reserves?.values[0].students, reserves?.values[1].students, reserves?.values[2].students, reserves?.values[3].students, reserves?.values[4].students, reserves?.values[5].students, reserves?.values[6].students, reserves?.values[7].students, reserves?.values[8].students, reserves?.values[9].students, reserves?.values[10].students, reserves?.values[11].students],
                                },
                                {
                                    label: 'غیر مکینی',
                                    borderRadius: 10,
                                    barPercentage: 0.5,
                                    backgroundColor: '#026AE1',
                                    data: [reserves?.values[0].not_student, reserves?.values[1].not_student, reserves?.values[2].not_student, reserves?.values[3].not_student, reserves?.values[4].not_student, reserves?.values[5].not_student, reserves?.values[6].not_student, reserves?.values[7].not_student, reserves?.values[8].not_student, reserves?.values[9].not_student, reserves?.values[10].not_student, reserves?.values[11].not_student],
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1HomeAdmin;