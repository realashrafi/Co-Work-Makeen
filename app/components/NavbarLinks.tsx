'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavbarLinks = () => {
    const pathName= usePathname()
    return (
        <div className={'  pb-12 w-[90%] pt-10  lg:pt-[5px]'}>
                <ul className={'flex  mx-auto absolute justify-between left-4 lg:left-0 lg:top-0 top-20 lg:relative  lg:flex-nowrap lg:justify-center text-white items-center w-[90%]  mt-2'}>
                    <Link href={'/contactus'} className={'lg:w-fit transition-transform hover:scale-[110%]  lg:my-0 my-3 '}>
                        <li className={`${pathName === '/contactus' ? 'text-[#44C0ED]' : ''} lg:mx-4  hover:text-[#44C0ED] focus:text-[#44C0ED]`}>تماس
                            با ما
                        </li>
                    </Link>
                    <Link href={'/newsco'} className={'lg:w-fit transition-transform hover:scale-[110%]  lg:my-0 my-3 '}>
                        <li className={`${pathName === '/newsco' ? 'text-[#44C0ED]' : ''} lg:mx-4   hover:text-[#44C0ED] focus:text-[#44C0ED]`}>اخبار
                            کوورک
                        </li>
                    </Link>
                    <Link href={'/tariffs'} className={'lg:w-fit transition-transform hover:scale-[110%]  lg:my-0 my-3 '}>
                        <li className={`${pathName === '/tariffs' ? 'text-[#44C0ED]' : ''} lg:mx-4   hover:text-[#44C0ED] focus:text-[#44C0ED]`}>تعرفه
                            ها
                        </li>
                    </Link>
                    <Link href={'/'} className={'lg:w-fit transition-transform hover:scale-[110%]  lg:my-0 my-3 '}>
                        <li className={`${pathName === '/' ? 'text-[#44C0ED]' : ''} lg:mx-4  hover:text-[#44C0ED] focus:text-[#44C0ED] `}>صفحه
                            اصلی
                        </li>
                    </Link>
                </ul>
        </div>
    );
};

export default NavbarLinks;