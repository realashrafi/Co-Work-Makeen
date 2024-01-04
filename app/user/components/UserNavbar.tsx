import React from 'react';
import Image from "next/image";
// import userImage from "@/app/user/components/data/userimage.png";
import notifLogo from "@/app/user/components/data/Vector (8).png";
import Link from "next/link";
import IconHandShake from "@/app/user/components/IconHandShake";

const UserNavbar = () => {
    return (
        <div className={'fixed w-[100%]  z-[3] '}>
            <div className={'flex items-center  justify-between h-[156px] w-[79.93%] bg-[#0A2E65] '}>
                <div className={'ml-[4.7%]'}>
                    <Image src={''} width={60} height={60} alt={'userImage'}/>
                </div>
                <Link className={'ml-[5.2%]'} href={'/user/notifications'}>
                    <div className={' relative'}>
                        <Image src={notifLogo} width={24} height={24} alt={'userImage'}/>
                        <div className={'w-[13px] h-[13px] rounded-full bg-[#FF792C] absolute top-0 right-0'}></div>
                    </div>
                </Link>
                <div className={'flex items-center ml-[30%] h-[56px]'}>
                    <p className={'h-[56px] text-[14px]  text-[#FFFEFF]  pt-[15px] border-r-[2px] border-[#002256]  pr-[40px] mr-[35px]'}>پنجشنبه 11 آبان
                        1402</p>
                    <IconHandShake/>
                    <p className={'ml-[17px] text-[16px]  text-[#FFFEFF] '}>شکیلا شاهرضایی عزیز ، خوش اومدی</p>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;