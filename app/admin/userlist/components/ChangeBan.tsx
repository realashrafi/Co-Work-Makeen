'use client'
import React, {useState} from 'react';
import LoadingMinimal from "@/app/components/LoadingMinimal";

const ChangeBan = ({id,bg,lable}:any) => {
    const [loading, setLoading] = useState(false)
    const changeBan =async ()=>{
        setLoading(true)
        const axios = require('axios');
        const token = localStorage?.getItem('adminToken');
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://www.cowork.v1r.ir/api/v1/user/${id}/change-ban`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`,
            }
        };
        axios.request(config)
            //@ts-ignore
            .then(() => {
                window.location.reload()
            })
            //@ts-ignore
            .catch((error) => {
                setLoading(false)
                alert(error);
            });

    }
    return (
        <div>
            {loading
                ?
                <LoadingMinimal/>
                :
                <div onClick={changeBan}
                     className={`w-[67px] h-[24px] bg-[${bg ? '#026AE1' : '#01B574'}] rounded-[12px] flex items-center justify-center text-white`}>{lable}
                </div>
            }
        </div>
    );
};

export default ChangeBan;