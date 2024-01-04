import React from 'react';

const DailySession = () => {
    return (
        <div className={'w-[80%] flex flex-col items-center mx-auto'}>
            <div className={'text-white text-base font-bold mt-[32px]'}>رزرو روزانه اتاق جلسات</div>
            <div className={'text-orange-500 text-sm font-normal mt-[8px]'}>هزینه روزانه 100 تومان</div>

            <button
                className={'flex justify-center items-center text-white text-lg font-medium bg-[#026AE1] w-[408px] h-12 rounded-xl mt-[40px]'}>
                پرداخت
            </button>
        </div>
    );
};

export default DailySession;