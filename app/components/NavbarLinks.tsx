'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavbarLinks = () => {
    const pathName= usePathname()
    return (
        <div className={'pt-[5px]'}>
            <ul className={'flex text-white mt-2'}>
                <Link href={'/contactus'}>
                    <li className={`${pathName==='/contactus'?'text-[#44C0ED]':''} mx-6 hover:text-[#44C0ED] focus:text-[#44C0ED]`}>تماس با ما</li>
                </Link>
                <Link href={'/newsco'}>
                    <li className={`${pathName==='/newsco'?'text-[#44C0ED]':''} mx-6 hover:text-[#44C0ED] focus:text-[#44C0ED]`}>اخبار کوورک</li>
                </Link>
                <Link href={'/tariffs'}>
                    <li className={`${pathName==='/tariffs'?'text-[#44C0ED]':''} mx-6 hover:text-[#44C0ED] focus:text-[#44C0ED]`}>تعرفه ها</li>
                </Link>
                <Link href={'/'}>
                    <li className={`${pathName==='/'?'text-[#44C0ED]':''} mx-6 hover:text-[#44C0ED] focus:text-[#44C0ED] `}>صفحه اصلی</li>
                </Link>
            </ul>
        </div>
    );
};

export default NavbarLinks;