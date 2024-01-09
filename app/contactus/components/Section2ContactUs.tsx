import React from 'react';
import SectionNine from "@/app/components/sections/SectionNine";

const Section2ContactUs = () => {
    return (
        <div className={'lg:mt-[32px] mt-20'}>
            <div className={'flex w-[100%] px-[10%] items-center lg: lg:justify-between justify-center lg:flex-nowrap flex-wrap   pb-[17px]'}>
                <div className={'flex  lg:w-[30%]  justify-between lg:mx-8 items-center mx-auto  lg:pr-20'} style={{direction:'rtl'}}>
                    <p className={'text-[14px] flex text-[#FFFEFF] text-center '}>
                        <svg width="20" className={'  ml-2'} height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.4878 0 0 4.57884 0 10.2029C0 12.7277 0.907827 15.0431 2.3989 16.8235L2.40349 16.8282L2.40694 16.8329C2.40694 16.8329 6.66102 21.7856 8.17555 23.2601C9.18975 24.2466 10.8091 24.2466 11.8233 23.2601C13.5496 21.5801 17.5942 16.8305 17.5942 16.8305L17.5965 16.827L17.6 16.8235C19.0923 15.0431 20 12.7277 20 10.2029C20 4.57884 15.5122 0 10 0ZM10 1.80051C14.5584 1.80051 18.2353 5.55202 18.2353 10.2029C18.2353 12.2886 17.4903 14.1836 16.258 15.6536C16.25 15.663 12.1118 20.4919 10.6055 21.9578C10.2561 22.2976 9.74272 22.2976 9.39338 21.9578C8.13446 20.7321 3.75359 15.6684 3.74081 15.6536L3.73966 15.6525C2.50902 14.1825 1.76471 12.288 1.76471 10.2029C1.76471 5.55202 5.44162 1.80051 10 1.80051ZM10 6.60186C8.89706 6.60186 7.95813 7.05627 7.35524 7.74828C6.75235 8.44029 6.47059 9.32763 6.47059 10.2029C6.47059 11.0781 6.75235 11.9655 7.35524 12.6575C7.95813 13.3495 8.89706 13.8039 10 13.8039C11.1029 13.8039 12.0419 13.3495 12.6448 12.6575C13.2476 11.9655 13.5294 11.0781 13.5294 10.2029C13.5294 9.32763 13.2476 8.44029 12.6448 7.74828C12.0419 7.05627 11.1029 6.60186 10 6.60186ZM10 8.40237C10.6618 8.40237 11.0464 8.62315 11.3258 8.94393C11.6053 9.26471 11.7647 9.72775 11.7647 10.2029C11.7647 10.678 11.6053 11.1411 11.3258 11.4618C11.0464 11.7826 10.6618 12.0034 10 12.0034C9.33824 12.0034 8.95364 11.7826 8.67417 11.4618C8.39471 11.1411 8.23529 10.678 8.23529 10.2029C8.23529 9.72775 8.39471 9.26471 8.67417 8.94393C8.95364 8.62315 9.33824 8.40237 10 8.40237Z" fill="#EEEEEE"/>
                        </svg>
                        آدرس:
                    </p>
                    <p className={'lg:w-[90%] w-[90%] text-[14px] text-[#FFFEFF] text-center'}>
                        تهران ، مترو علم و صنعت ، خیابان فرجام ، پلاک 45 ، طبقه پنجم
                    </p>
                </div>
                <div className={'flex pt-[12px] lg:w-[30%] justify-between   items-center mx-auto lg:pr-20'}>
                    <p className={'text-[#FFFEFF] text-[14px]'}>info@makeen.ir  :ایمیل </p>
                    <svg width="24" className={'ml-2'} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.9 0C1.75684 0 0 2.19605 0 4.875V19.125C0 21.804 1.75684 24 3.9 24H20.1C22.2432 24 24 21.804 24 19.125V4.875C24 2.19605 22.2432 0 20.1 0H3.9ZM3.9 2.25H20.1C21.27 2.25 22.2 3.41245 22.2 4.875V5.7041L12 12.5962L1.8 5.7041V4.875C1.8 3.41245 2.72996 2.25 3.9 2.25ZM1.8 8.26172L11.5723 14.8652C11.7037 14.9539 11.8507 15.0004 12 15.0004C12.1493 15.0004 12.2963 14.9539 12.4277 14.8652L22.2 8.26172V19.125C22.2 20.5875 21.27 21.75 20.1 21.75H3.9C2.72996 21.75 1.8 20.5875 1.8 19.125V8.26172Z" fill="#EEEEEE"/>
                    </svg>
                </div>
                <div className={'flex pt-[12px] lg:w-[30%] justify-between  items-center mx-auto  lg:pr-20'}>
                    <p className={'text-[#FFFEFF] text-[14px]'}>021 - 77188185 -6  :شماره تلفن </p>
                    <svg width="24" className={'ml-2'} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.77781 0.00889078C7.26815 -0.0198395 6.74592 0.0205256 6.23382 0.137786L4.40099 0.558451C2.44794 1.00602 0.921942 2.20674 0.405656 3.72223C-0.740703 7.09258 0.570687 11.0819 3.98361 15.5724C7.39173 20.0566 11.2752 22.9066 15.6611 23.8369C17.6362 24.2557 19.7663 23.8556 21.2624 22.7787L22.6567 21.7769C24.2169 20.6545 24.4495 18.785 23.189 17.4566L21.1747 15.3368C20.095 14.2004 18.1916 13.7166 16.4414 14.124L13.2899 14.8552C13.1576 14.8852 12.8411 14.7456 12.5656 14.5611L12.564 14.5599C12.0734 14.2293 11.3935 13.5611 10.6662 12.6054V12.6043C9.88629 11.5779 9.55365 10.9067 9.4201 10.5103C9.28649 10.1137 9.31892 10.0655 9.33844 9.93145C9.34859 9.86456 9.38961 9.80259 9.45942 9.75334L9.46093 9.75217L11.811 8.08708C13.1573 7.13338 13.5638 5.6093 12.8045 4.32687L11.3875 1.93177V1.9306C10.7204 0.803836 9.30641 0.0950577 7.77781 0.00889078ZM7.60996 1.80404C8.32088 1.8452 8.97554 2.17563 9.27493 2.6817L10.6934 5.0768C11.0367 5.6566 10.8645 6.32009 10.2443 6.75946L7.89426 8.42338C7.4125 8.76374 7.10442 9.2278 7.03077 9.72873V9.7299C7.01158 9.86164 6.96624 10.3515 7.17292 10.965C7.3796 11.5784 7.80631 12.3898 8.66399 13.5182H8.6655C9.46577 14.57 10.2221 15.369 11.0412 15.9204H11.0427C11.3087 16.0988 12.4236 16.9268 13.9402 16.5836L13.9447 16.5824L17.1098 15.8477C17.9317 15.6564 18.8105 15.8849 19.3041 16.4043L21.3184 18.524C21.8888 19.1262 21.7891 19.9447 21.0764 20.4575L19.6821 21.4605C18.7905 22.1026 17.4663 22.3533 16.2736 22.1003C12.7279 21.3483 9.21934 18.9141 5.98581 14.6595C2.74779 10.3992 1.73504 6.87548 2.65133 4.18157C2.95422 3.29248 3.88224 2.55444 5.06032 2.28447L6.89164 1.8638C7.1302 1.80918 7.37298 1.79032 7.60996 1.80404Z" fill="#EDEDED"/>
                    </svg>
                </div>
            </div>
            <SectionNine/>
        </div>
    );
};

export default Section2ContactUs;