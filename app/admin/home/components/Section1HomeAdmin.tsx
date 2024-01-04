import React from 'react';
import {CChart} from "@coreui/react-chartjs";

const Section1HomeAdmin = () => {
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
                            labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", 'آذر', 'دی', 'بهمن', 'اسفند'],
                            datasets: [
                                {
                                    label: '',
                                    tension: 0.3,
                                    backgroundColor: "#165BAA",
                                    borderColor: "#165BAA",
                                    pointBackgroundColor: "#165BAA",
                                    pointBorderColor: "#165BAA",
                                    data: [10, 160, 190, 129, 180, 380, 410, 320, 340, 370, 240, 100]
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
                            labels: ['1', '2', '3', '4', '5', '6'],
                            datasets: [
                                {
                                    label: 'مکینی',
                                    backgroundColor: '#FF792C',
                                    borderRadius: 10,
                                    barPercentage: 0.5,
                                    data: [50, 70, 80, 60, 40, 90],
                                },
                                {
                                    label: 'غیر مکینی',
                                    borderRadius: 10,
                                    barPercentage: 0.5,
                                    backgroundColor: '#026AE1',
                                    data: [70, 50, 40, 34, 67, 76],
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