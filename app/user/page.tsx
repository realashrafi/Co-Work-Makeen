'use client'
import Interface from "@/app/user/components/Interface";
import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingMakeenLogo from "@/app/components/LoadingMakeenLogo";


const User = () => {
    // const [data, setData] = useState<any>()
    const [validate, setValidate] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // @ts-ignore
        handleFetch()
    }, []);
    const handleFetch = async () => {
        try {
            const token = localStorage?.getItem('userToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            // setData(response.data)
            if (response.status == 200) {
                setValidate(true)
            } else {
                setValidate(false)
            }
        } catch (e) {
            //console.log(e)
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
                <Interface />
                :
                <LoadingMakeenLogo bg={'#002256'}/>
            }

        </div>
    );
};

export default User;