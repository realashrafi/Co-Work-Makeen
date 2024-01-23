'use client'
import React, {useEffect, useState} from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";
import LoadingAdmin from "@/app/components/LoadingAdmin";
import AddMoneyAdmin from "@/app/admin/userlist/components/AddMoneyAdmin";
import ChangeBan from "@/app/admin/userlist/components/ChangeBan";
import useUserList from "@/app/store/react-query/useUserList";

// const userList = [
//     {
//         id: 1,
//         fullName: 'محسن عزیزی',
//         callNumber: '0936875492',
//         status: true,
//         age: '26',
//         ability: 'طراح',
//         lovers: 'هنر',
//         balance:500
//     }, {
//         id: 2,
//         fullName: 'علی احمدی',
//         callNumber: '0936875492',
//         status: true,
//         age: '18',
//         ability: 'برنامه نویس',
//         lovers: 'کامپیوتر',
//         balance:430
//     }, {
//         id: 3,
//         fullName: 'مریم حیدری',
//         callNumber: '0936875492',
//         status: false,
//         age: '29',
//         ability: 'طراح',
//         lovers: 'هنر',
//         balance:500
//     }, {
//         id: 4,
//         fullName: 'شهاب رمضانی',
//         callNumber: '0936875492',
//         status: true,
//         age: '26',
//         ability: 'برنامه نویس',
//         lovers: 'هنر',
//         balance:500
//     }, {
//         id: 5,
//         fullName: 'فاطمه حسینی',
//         callNumber: '0936875492',
//         status: true,
//         age: '22',
//         ability: 'برنامه نویس',
//         lovers: 'کامپیوتر',
//         balance:500
//     }, {
//         id: 6,
//         fullName: 'لیلا خانی',
//         callNumber: '0936875492',
//         status: false,
//         age: '20',
//         ability: 'طراح',
//         lovers: 'هنر',
//         balance:500
//     },
// ]
// @ts-ignore
const UserList = () => {
    const {data} =useUserList()
    const [protect, setProtect] = useState(false)
    console.log('Quser',data)
    useEffect(() => {
        handleProtect()
        // getUserList()
    }, []);
    const router = useRouter()
    const handleProtect = async () => {

        try {
            const token = localStorage?.getItem('adminToken');
            const response = await axios.get('https://www.cowork.v1r.ir/api/v1/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                }
            })
            // setData(response.data)
            if (response.status == 200) {
                setProtect(true)
            } else {
                setProtect(false)
            }
        } catch (e) {
            console.log(e)
            Swal.fire({
                title: "خطایی رخ داده",
                text: "شما ادمین نیستید",
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
    // const getUserList = async () => {
    //   try {
    //       const token = localStorage?.getItem('adminToken');
    //       const res = await axios.get('https://www.cowork.v1r.ir/api/v1/user',{
    //           headers:{
    //               Accept: 'application/json',
    //               Authorization: `Bearer ${token}`
    //           }
    //       })
    //       console.log('userList',res)
    //   }catch (e) {
    //       console.log(e)
    //   }
    // }


    return (
        <div className={'bg-[#F8F9FC] flex'}>
            {protect ?
                <div className={'flex w-[100%]'}>
                    <div className={'flex flex-col w-[81.25%]'}>
                        <NavbarAdminPanel/>
                        <div className={'w-[100%] h-[1626px] flex justify-center'}>
                            <div
                                className={'w-[88.97%] flex flex-col h-[1288px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                                <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                                    <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>لیست کاربران</p>
                                    <div className={'relative flex items-center'}>
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path id="Vector 61"
                                                  d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                                  fill="#FF792C"/>
                                        </svg>
                                        <svg className={'absolute top-0 -right-1'} width="8" height="9"
                                             viewBox="0 0 8 9"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path id="Vector 62"
                                                  d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                                  fill="#0075FF"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={'flex justify-end mt-[8px] pr-[67px]'}>
                                    <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم شما
                                        می
                                        توانید در این بخش ساعت کاری مرکز را مشخص
                                        کنید.
                                    </p>
                                </div>
                                <div
                                    className={'bg-[#F6F6F6] rounded-[12.8px] flex flex-col mx-auto mt-[34px]  w-[98.36%] pb-4'}>
                                    <div className={'flex justify-between mt-[17px]'}>
                                        <div className={'flex ml-[22px]'}>
                                            <div
                                                className={'w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3774)">
                                                        <path id="Vector"
                                                              d="M20 11.6094H7.83L13.42 6.01937L12 4.60938L4 12.6094L12 20.6094L13.41 19.1994L7.83 13.6094H20V11.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3774">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="translate(0 0.609375)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div
                                                className={'w-[150px] h-[32px] rounded-[5px] text-black text-sm font-normal mx-[10px] bg-[#FFFEFF] flex justify-center items-center'}>
                                                سه شنبه 1402/07/12
                                            </div>
                                            <div
                                                className={'w-[45px] h-[32px] bg-[#FFFEFF] rounded-[5px] flex justify-center items-center'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g id="arrow_back" clipPath="url(#clip0_664_3778)">
                                                        <path id="Vector"
                                                              d="M4 13.6094H16.17L10.58 19.1994L12 20.6094L20 12.6094L12 4.60938L10.59 6.01937L16.17 11.6094H4V13.6094Z"
                                                              fill="#0075FF"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_664_3778">
                                                            <rect width="24" height="24" fill="white"
                                                                  transform="matrix(-1 0 0 -1 24 24.6094)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={'flex items-center mr-[29px]'}>
                                            <p className={'text-[#0075FF] text-base font-normal mr-[8px]'}>لیست
                                                کاربران</p>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="more_vert" clipPath="url(#clip0_664_3783)">
                                                    <path id="Vector"
                                                          d="M9.0979 6.67431C9.93189 6.67431 10.6142 5.99195 10.6142 5.15795C10.6142 4.32396 9.93189 3.6416 9.0979 3.6416C8.2639 3.6416 7.58154 4.32396 7.58154 5.15795C7.58154 5.99195 8.2639 6.67431 9.0979 6.67431ZM9.0979 8.19066C8.2639 8.19066 7.58154 8.87302 7.58154 9.70701C7.58154 10.541 8.2639 11.2234 9.0979 11.2234C9.93189 11.2234 10.6142 10.541 10.6142 9.70701C10.6142 8.87302 9.93189 8.19066 9.0979 8.19066ZM9.0979 12.7397C8.2639 12.7397 7.58154 13.4221 7.58154 14.2561C7.58154 15.0901 8.2639 15.7724 9.0979 15.7724C9.93189 15.7724 10.6142 15.0901 10.6142 14.2561C10.6142 13.4221 9.93189 12.7397 9.0979 12.7397Z"
                                                          fill="#2086FF"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_664_3783">
                                                        <rect width="18.1962" height="18.1962" fill="white"
                                                              transform="translate(0 0.609375)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-[97.16%] h-[37px] flex items-center  mb-[10px] mt-[18px] mx-auto '}
                                        dir={'rtl'}>
                                        <p className={'text-[#222222] text-base font-normal '}>نام و نام خانوادگی</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[3%]'}>شماره تماس</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[8%]'}>وضعیت</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[6%]'}>سن</p>
                                        <p className={'text-[#222222] text-base font-normal mr-[7%]'}>مهارت</p>
                                        <p className={'text-[#222222] flex text-base font-normal mr-[9%]'}>علائق <span>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
<g id="keyboard_arrow_down" clipPath="url(#clip0_2421_1637)">
<path id="Vector" d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill="#2E2E2E"/>
</g>
<defs>
<clipPath id="clip0_2421_1637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                                </span></p>
                                        <p className={'text-[#222222] text-base font-normal mr-[12%]'}>مالی</p>
                                    </div>
                                    <div className={'w-[97.16%] flex  flex-col  mx-auto  '} dir={'rtl'}>
                                        {/*//@ts-ignore*/}
                                        {data?.map(item => (
                                            <div
                                                className={'odd:bg-[#026AE114] even:bg-[#FF792C14] mb-[5px] w-[100%] h-[40px] flex  items-center '}
                                                key={item.id}>
                                                <div className={'text-[#222222] mr-1 text-sm font-normal'}>{item.id}</div>
                                                <p className={'text-[#222222] text-sm font-normal w-[120px] mr-[1%]'}>{item.first_name} {item.last_name}</p>
                                                <p className={'text-[#222222] text-sm font-normal w-[83px] mr-[5.3%]'}>{item.phone_number}</p>
                                                <button
                                                    className={'text-[#222222] text-sm font-normal text-center  w-[76px] h-[24px] mr-[7%]'}>{item.is_ban ?
                                                    <ChangeBan id={item.id} bg={item.is_ban} lable={'غیرفعال'}/> :
                                                    <ChangeBan id={item.id} bg={item.is_ban} lable={'فعال'}/>}
                                                </button>
                                                <p className={'text-[#222222] text-sm font-normal w-[26px] mr-[6%]'}>{item.age}</p>
                                                <p className={'text-[#222222] text-sm font-normal text-center w-[75px] mr-[6%]'}>{item.education}</p>
                                                <p className={'text-[#222222] text-sm font-normal text-center w-[60px] mr-[7%]'}>{item.latest_favorite}</p>
                                                <AddMoneyAdmin first_name={item.first_name} last_name={item.last_name} balance={item.balance} id={item.id}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SideBarAdminPanel/>
                </div>
                :
                <LoadingAdmin/>
            }
        </div>
    );
};

export default UserList;