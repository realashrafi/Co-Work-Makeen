import React from 'react';
import Image from "next/image";
import notifLogo from "@/app/user/components/data/Vector (8).png";
import Link from "next/link";
import IconHandShake from "@/app/user/components/IconHandShake";
import {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import DropDownNavbar from "@/app/components/DropDownNavbar";
const UserNavbar = ({data}: any) => {
    const date = new DateObject({calendar:persian})

    // //console.log(date.format( ))
    return (
        <div className={'fixed w-[100%]   z-[3] '}>
            <div className={'flex items-center px-2 w-[100%] justify-between  lg:h-[156px] lg:w-[79.93%] bg-[#0A2E65] '}>
                <div className={'lg:ml-[4.7%]'}>
                    <DropDownNavbar/>
                </div>
                <Link className={'lg:ml-[5.2%]'} href={'/user/notifications'}>
                    <div className={'lg:visible invisible group mt-2 relative'}>
                        <Image src={notifLogo} width={24} height={24} className={'group-hover:rotate-[20deg] transition-all'} alt={'userImage'}/>
                        <div className={'w-[13px] h-[13px] rounded-full group-hover:bg-[#44C0ED] bg-[#FF792C] absolute transition-all group-hover:top-0 group-hover:-right-1 -top-1 right-0'}></div>
                    </div>
                </Link>
                <div className={'flex items-center  lg:ml-[30%] lg:mr-[1%]  h-[56px]'}>
                    <p className={'h-[56px] text-[14px] pr-2 text-[#FFFEFF]   pt-[18px] border-r-[2px] border-[#002256]  lg:pr-[40px] lg:mr-[35px]'}>
                        {date.format()}
                    </p>
                    <IconHandShake/>
                    <p className={' lg:ml-[17px] flex-wrap text-[14px] lg:text-[16px]  w-fit text-[#FFFEFF] '}>
                        {data?.first_name} {data?.last_name} <span className={'lg:visible invisible absolute lg:relative'}>عزیز ، خوش اومدی</span> </p>
                </div>

            </div>
        </div>
    );
};

export default UserNavbar;