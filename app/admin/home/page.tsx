'use client'
import React from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import Section1HomeAdmin from "@/app/admin/home/components/Section1HomeAdmin";
import Section2HomeAdmin from "@/app/admin/home/components/Section2HomeAdmin";

const Home = () => {
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            <div className={'flex flex-col w-[100%] lg:w-[81.25%]'}>
                <NavbarAdminPanel/>
                <div className={'w-[100%] h-[846px]'}>
                    <Section1HomeAdmin/>
                    <Section2HomeAdmin/>
                </div>
            </div>
            <SideBarAdminPanel/>
        </div>
    );
};

export default Home;