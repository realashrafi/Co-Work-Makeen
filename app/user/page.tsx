'use client'
import Interface from "@/app/user/components/Interface";
import axios from "axios";
import {useEffect, useState} from "react";


const User = () => {
    const [data, setData] = useState<any>()
    // @ts-ignore
    useEffect((e:any) => {
            const token = localStorage.getItem('token');
            e?.preventDefault()
            axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
                // .then((res)=> {
                //     res.status !== 200 ? redirect('/') : ''
                // })
                .then((res) => setData(res.data))
                .catch((err) => console.error(err))
    }, []);
    return (
        <div>
            {}
            <Interface data={data}/>
        </div>
    );
};

export default User;