
import React, {useState} from 'react';
import Link from "next/link";
import AddSub from "@/app/user/walletuser/components/AddSub";
import AddMoney from "@/app/user/walletuser/components/AddMoney";

const ButtonsOfWallet = () => {

    return (
            <div className={'flex flex-col ml-[10.73%] mt-[112px] '} dir={'rtl'} >
                <AddMoney/>
                <AddSub  />
            </div>


    );
};

export default ButtonsOfWallet;