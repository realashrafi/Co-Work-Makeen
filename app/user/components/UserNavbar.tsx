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
                    <div className={'lg:visible invisible relative'}>
                        <Image src={notifLogo} width={24} height={24} alt={'userImage'}/>
                        <div className={'w-[13px] h-[13px] rounded-full bg-[#FF792C] absolute top-0 right-0'}></div>
                    </div>
                </Link>
                <div className={'flex items-center  ml-[40%] lg:ml-[30%] mr-[1%]  h-[56px]'}>
                    <p className={'h-[56px] text-[14px]  text-[#FFFEFF]  pt-[15px] border-r-[2px] border-[#002256]  lg:pr-[40px] lg:mr-[35px]'}>
                        {date.format()}
                    </p>
                    <IconHandShake/>
                    <p className={'lg:visible invisible lg:ml-[17px] flex-wrap text-[16px]  text-[#FFFEFF] '}>
                        {data?.first_name} {data?.last_name} عزیز ، خوش اومدی </p>
                </div>

            </div>
        </div>
    );
};

export default UserNavbar;