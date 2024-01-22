import React from 'react';

const ChangeBan = ({id,bg,lable}:any) => {
    const changeBan =async ()=>{
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
            .then((response) => {
                console.log(response.data);
                window.location.reload()
            })
            //@ts-ignore
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div>
            <div onClick={changeBan}
                className={`w-[67px] h-[24px] bg-[${bg?'#026AE1':'#01B574'}] rounded-[12px] flex items-center justify-center text-white`}>{lable}
            </div>
        </div>
    );
};

export default ChangeBan;