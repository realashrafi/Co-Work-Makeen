'use client'
import React, {useEffect} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import AOS from "aos";
const SidebarBuy = () => {
    const pathname = usePathname()
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
        })
    }, []);
    return (
        <div data-aos={'fade-down'} className={'flex lg:w-[25%] w-full flex-col'}>
            <Link href={''}
                className={`${pathname=== '/buy'?'bg-[#0B99DE]':''} my-[8px] flex items-center justify-center lg:justify-end lg:rounded-l-full lg:pr-[18.7%]  lg:w-[319px] h-[53px]`}>
                <div className={'flex items-center '}>
                    <p className={` text-base font-normal ${pathname=== '/buy'?'text-white':'text-[#FF792C]'}`}>تکمیل اطلاعات</p>
                    <svg className={'ml-[24px]'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector"
                              d="M23.8639 22.5396C22.1083 19.3834 19.4029 17.1201 16.2455 16.0472C17.8073 15.0804 19.0207 13.6072 19.6994 11.8538C20.378 10.1004 20.4845 8.16383 20.0023 6.34145C19.5202 4.51906 18.4762 2.91164 17.0305 1.76604C15.5849 0.620441 13.8176 0 12 0C10.1825 0 8.41515 0.620441 6.9695 1.76604C5.52385 2.91164 4.47979 4.51906 3.99765 6.34145C3.51552 8.16383 3.62196 10.1004 4.30065 11.8538C4.97933 13.6072 6.19272 15.0804 7.75448 16.0472C4.59714 17.1189 1.89168 19.3822 0.136065 22.5396C0.071683 22.6488 0.0289793 22.7703 0.0104728 22.8969C-0.00803369 23.0235 -0.00196803 23.1527 0.0283119 23.2768C0.0585918 23.4009 0.112473 23.5175 0.186775 23.6196C0.261078 23.7218 0.354297 23.8074 0.460934 23.8714C0.56757 23.9355 0.685463 23.9767 0.807656 23.9926C0.92985 24.0085 1.05387 23.9988 1.1724 23.964C1.29092 23.9293 1.40156 23.8702 1.49777 23.7903C1.59399 23.7103 1.67384 23.6112 1.7326 23.4986C3.90435 19.5955 7.74296 17.2652 12 17.2652C16.257 17.2652 20.0957 19.5955 22.2674 23.4986C22.3262 23.6112 22.406 23.7103 22.5022 23.7903C22.5984 23.8702 22.7091 23.9293 22.8276 23.964C22.9461 23.9988 23.0702 24.0085 23.1923 23.9926C23.3145 23.9767 23.4324 23.9355 23.5391 23.8714C23.6457 23.8074 23.7389 23.7218 23.8132 23.6196C23.8875 23.5175 23.9414 23.4009 23.9717 23.2768C24.002 23.1527 24.008 23.0235 23.9895 22.8969C23.971 22.7703 23.9283 22.6488 23.8639 22.5396ZM5.54469 8.63422C5.54469 7.30652 5.92329 6.00863 6.63261 4.90469C7.34193 3.80075 8.35011 2.94033 9.52966 2.43224C10.7092 1.92416 12.0072 1.79122 13.2594 2.05024C14.5116 2.30926 15.6618 2.94861 16.5646 3.88743C17.4674 4.82626 18.0822 6.02239 18.3313 7.32458C18.5804 8.62677 18.4525 9.97652 17.9639 11.2032C17.4753 12.4298 16.6479 13.4782 15.5864 14.2158C14.5248 14.9535 13.2767 15.3472 12 15.3472C10.2885 15.3453 8.64764 14.6374 7.43743 13.3789C6.22722 12.1204 5.54652 10.414 5.54469 8.63422Z"
                              fill={pathname=== '/buy'?'#EEEFEE':'#FF792C'}/>
                    </svg>
                </div>
            </Link>
            <Link href={''}
                className={`${pathname=== '/buy/subscribtions'?'bg-[#0B99DE]':''} my-[8px] flex items-center justify-center lg:justify-end lg:rounded-l-full  lg:pr-[18.7%]  lg:w-[319px] h-[53px]`}>
                <div className={'flex items-center '}>
                    <p className={` text-base font-normal ${pathname=== '/buy/subscribtions'?'text-white':'text-[#FF792C]'} `}>خرید اشتراک</p>
                    <svg className={'ml-[24px]'} width="24" height="17" viewBox="0 0 24 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector"
                              d="M2.6087 0C1.17391 0 0 1.19531 0 2.65625V14.3438C0 15.8047 1.17391 17 2.6087 17H21.3913C22.8261 17 24 15.8047 24 14.3438V2.65625C24 1.19531 22.8261 0 21.3913 0H2.6087ZM2.6087 1.0625H21.3913C22.2615 1.0625 22.9565 1.77014 22.9565 2.65625V3.71875H1.04348V2.65625C1.04348 1.77014 1.73845 1.0625 2.6087 1.0625ZM1.04348 6.375H22.9565V14.3438C22.9565 15.2299 22.2615 15.9375 21.3913 15.9375H2.6087C1.73845 15.9375 1.04348 15.2299 1.04348 14.3438V6.375ZM3.65217 7.96875V9.03125H12V7.96875H3.65217Z"
                              fill={pathname=== '/buy/subscribtions'?'#EEEFEE':'#FF792C'}/>
                    </svg>
                </div>
            </Link>
            <Link href={''}
                className={`${pathname=== '/buy/submitedChair'?'bg-[#0B99DE]':''} my-[8px] flex items-center justify-center lg:justify-end lg:rounded-l-full lg:pr-[18.7%]  lg:w-[319px] h-[53px]`}>
                <div className={'flex items-center '}>
                    <p className={'text-white text-base font-normal '}>ثبت صندلی</p>
                    <svg className={'ml-[24px]'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector"
                              d="M11.9772 0C8.37153 0 6.11115 0.627717 4.70685 1.54891C3.30255 2.47011 2.80071 3.70924 2.80071 4.69565C2.80071 5.91236 3.42906 7.05774 4.21766 8.52717C4.90927 9.81318 5.74215 11.3417 6.52865 13.3533C6.19128 13.1984 5.88764 12.9721 5.66835 12.6685L3.71161 9.96196C3.35526 9.47079 2.81336 9.19565 2.24405 9.14674C1.67473 9.09783 1.08012 9.27717 0.641538 9.70109L0.590932 9.75C-0.0943506 10.4124 -0.19767 11.4579 0.354773 12.2283L3.22242 16.2391C4.1291 17.5068 5.62618 18.2609 7.22026 18.2609H11.4374V19.8261H10.8301L10.7626 19.8424L6.37683 21C5.22134 21.3037 4.42008 22.3207 4.42008 23.4783V24H6.10693L6.15754 23.9837L10.8976 22.9565H13.0568L17.7968 23.9837L17.8474 24H19.5343V23.4783C19.5343 22.3207 18.733 21.3037 17.5775 21L13.1917 19.8424L13.1242 19.8261H12.517V18.2609H17.1221C18.8089 18.2609 20.3714 17.4151 21.2549 16.0272L23.7008 12.1957C24.1879 11.4293 24.0719 10.4348 23.414 9.79891C22.4968 8.91236 20.9259 9.09783 20.2596 10.1739L18.7752 12.5543C18.461 13.0598 17.9444 13.4001 17.3582 13.5163C18.1616 11.4253 19.0282 9.84579 19.7367 8.52717C20.5253 7.05774 21.1536 5.91236 21.1536 4.69565C21.1536 3.70924 20.6518 2.47011 19.2475 1.54891C17.8432 0.627717 15.5828 0 11.9772 0ZM11.9772 1.04348C15.45 1.04348 17.4953 1.66304 18.6402 2.41304C19.7852 3.16304 20.0741 4.02514 20.0741 4.69565C20.0741 5.54552 19.5596 6.59307 18.7752 8.05435C18.033 9.43614 17.0799 11.2276 16.2112 13.5652H7.74318C6.87445 11.2296 5.92138 9.43614 5.17917 8.05435C4.39478 6.59307 3.88029 5.54552 3.88029 4.69565C3.88029 4.02514 4.16916 3.16304 5.31411 2.41304C6.45906 1.66304 8.50437 1.04348 11.9772 1.04348ZM1.94041 10.1739C2.00578 10.1658 2.07747 10.1678 2.14283 10.1739C2.4043 10.1963 2.66576 10.3308 2.83444 10.5652L4.79119 13.2717C5.35629 14.0543 6.25875 14.5312 7.23712 14.5924C7.3046 14.5965 7.36996 14.6087 7.43955 14.6087H16.9196C18.0562 14.6087 19.1189 14.034 19.703 13.0924L21.1874 10.6957C21.5058 10.18 22.2164 10.1087 22.6549 10.5326C22.9628 10.8302 23.0176 11.2826 22.7899 11.6413L20.344 15.4728C19.6566 16.553 18.4357 17.2174 17.1221 17.2174H7.22026C5.97831 17.2174 4.82282 16.6223 4.11645 15.6359L1.2488 11.6413C0.993668 11.2846 1.0253 10.8118 1.33315 10.5L1.40062 10.4348C1.55665 10.284 1.74432 10.1963 1.94041 10.1739ZM10.9651 20.8696H12.9893L17.2908 22.0109C17.7863 22.1413 18.092 22.5163 18.2691 22.9565H17.9149L13.1748 21.9293L13.1242 21.913H10.8301L10.7795 21.9293L6.03946 22.9565H5.68522C5.86234 22.5163 6.16808 22.1413 6.6636 22.0109L10.9651 20.8696Z"
                              fill="#FFFEFF"/>
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default SidebarBuy;