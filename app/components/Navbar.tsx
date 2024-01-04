import React from 'react';
import Link from "next/link";
import Image from "next/image";
import iconNavbar from "@/public/images/logo-makeen 8.png";
import DropDownNavbar from "@/app/components/DropDownNavbar";
import NavbarLinks from "@/app/components/NavbarLinks";

const Navbar = () => {
    return (
        <div>
            <div className={''}>
                <div className={'flex justify-between w-full pt-[35px]'}>
                    <DropDownNavbar/>
                    <NavbarLinks/>
                    <Link className={'mr-[8%] '} href={'/'}>
                        <Image src={iconNavbar} alt={'iconNavbar'}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;