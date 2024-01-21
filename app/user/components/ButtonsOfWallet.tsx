
import React, {useState} from 'react';
import Link from "next/link";
import AddSub from "@/app/user/walletuser/components/AddSub";
import AddMoney from "@/app/user/walletuser/components/AddMoney";
import AddScPayment from "@/app/user/walletuser/components/AddScPayment";

const ButtonsOfWallet = ({data}:any) => {

    return (
            <div className={'flex flex-col ml-[10.73%] mt-[132px] '} dir={'rtl'} >
                <AddSub  />
                <AddMoney data={data}/>
                <AddScPayment/>
            </div>


    );
};

export default ButtonsOfWallet;