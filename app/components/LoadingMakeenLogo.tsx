import React from 'react';
import Image from "next/image";
import textLogo from './data/logo-makeen-text.png'
import logoLogo from './data/logo-makeen-logo.png'

const LoadingMakeenLogo = () => {
    return (
        <div className={'w-[100%] h-[100vh] animate-pulse bg-[#002256] flex justify-center items-center '}>
            <Image src={textLogo} className={'w-[180px] -mb-4 animate-bounce'} alt={''}/>
            <Image src={logoLogo} className={'animate-spin  w-[80px]'} alt={''}/>
        </div>
    );
};

export default LoadingMakeenLogo;