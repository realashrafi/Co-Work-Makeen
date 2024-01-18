'use client'
import Interface from "@/app/user/components/Interface";
import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";


const User = () => {
    const [data, setData] = useState<any>()
    const [validate, setValidate] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // @ts-ignore
        handleFetch()
    }, []);
    // const handleFetch = (e: any) => {
    //     const token = localStorage?.getItem('userToken');
    //     e?.preventDefault()
    //     axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             Accept: 'application/json',
    //         }
    //     })
    //         // .then((res)=> {
    //         //     res.status !== 200 ? redirect('/') : ''
    //         // })
    //         .then((res) => )
    //         .catch((err) => console.error(err))
    // }
    const handleFetch = async () => {
        try {
            const token = localStorage?.getItem('userToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            setData(response.data)
            if (response.status == 200) {
                setValidate(true)
            } else {
                setValidate(false)
            }
            // if (response.status===200) {
            //     Swal.fire({
            //         title: 'خوش آمدید',
            //         text: "وارد پنل خود شدید",
            //         icon: "success",
            //         background: '#002256',
            //         color: '#EEEFEE',
            //         confirmButtonColor: "#FF792C",
            //         confirmButtonText: 'باشه',
            //         backdrop: '#002256'
            //     })
            // }
        } catch (e) {
            console.log(e)
            Swal.fire({
                title: "خطایی رخ داده",
                text: "لطفا وارد حساب کاربری خود شوید",
                icon: "warning",
                background: '#002256',
                color: '#EEEFEE',
                confirmButtonColor: "#FF792C",
                confirmButtonText: 'باشه',
                backdrop: '#002256'
            })
            router.push('/')
        }

    }
    return (
        <div>
            {validate ?
                <Interface data={data}/>
                :
                <LoadingMakeenLogo bg={'#002256'}/>
            }

        </div>
    );
};

export default User;