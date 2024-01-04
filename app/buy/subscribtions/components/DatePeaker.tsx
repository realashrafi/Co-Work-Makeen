'use client'
import React, {useState} from 'react';
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
const DatePeaker = () => {
    const [value, setValue] = useState<any>()
    console.table(value)
    return (
        <div className={'flex mt-[10px] text-white'} >
            <Calendar
                numberOfMonths={2}
                plugins={[weekends()]}
                disableMonthPicker
                className="custom-calendar"
                disableYearPicker
                value={value}
                onChange={array => { //آرایه ای از دیت آبجکت ها
                    // alert("تاریخ های انتخاب شده :\n" + array.join(",\n"))
                    setValue(array)
                }}
                multiple
                calendar={persian}
                locale={persian_fa}>
            </Calendar>
        </div>
    );
};

export default DatePeaker;