import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";

const UseUserList = () => {
    const {data} = useQuery({
        queryKey: ['userList'],
        queryFn: async function () {
            const token = localStorage?.getItem('adminToken');
            const res = await axios.get('https://www.cowork.v1r.ir/api/v1/user', {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            return res.data
        },
    })
    return {data}
};

export default UseUserList;