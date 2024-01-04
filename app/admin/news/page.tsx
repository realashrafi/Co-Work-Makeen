import React from 'react';
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import DoItemList from "@/app/admin/settingreserve/components/DoItemList";
import AddNews from "@/app/admin/news/components/AddNews";

const data = [
    {
        id: 1,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: true,
    }, {
        id: 2,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: true,
    }, {
        id: 3,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: false,
    }, {
        id: 4,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: true,
    }, {
        id: 5,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: true,
    }, {
        id: 6,
        title: 'چرا برنامه نویسی ؟',
        dateCreate: '1402/07/12',
        hourCreate: '15 : 20',
        status: true,
    },
]
const News = () => {
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            <div className={'flex flex-col w-[81.25%]'}>
                <NavbarAdminPanel/>
                <div className={'w-[100%]  flex justify-center h-[1726px]'}>
                    <div className={'w-[88.97%] flex flex-col h-[1570px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                        <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>اخبار سایت</p>
                            <div className={'relative flex items-center'}>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 61"
                                          d="M18 10.6094C13.8214 10.6094 9.42857 17.276 9 20.6094C9 15.4308 3 11.1451 0 10.6094C4.17857 10.6094 8.19643 3.94271 9 0.609375C9 4.71652 15 9.65699 18 10.6094Z"
                                          fill="#FF792C"/>
                                </svg>
                                <svg className={'absolute top-0 -right-1'} width="8" height="9" viewBox="0 0 8 9"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector 62"
                                          d="M8 4.60938C6.14286 4.60938 4.19048 7.27604 4 8.60938C4 6.53795 1.33333 4.82366 0 4.60938C1.85714 4.60938 3.64286 1.94271 4 0.609375C4 2.25223 6.66667 4.22842 8 4.60938Z"
                                          fill="#0075FF"/>
                                </svg>
                            </div>
                        </div>
                        <div className={'flex justify-end mt-[8px] pr-[67px]'}>
                            <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم ، شما در این
                                بخش می توانید اخبار موجود در سایت را مشاهده ، ویرایش و حذف کنید
                            </p>
                        </div>
                        <div
                            className={'w-[92.31%] mx-auto mt-[40px] flex flex-col pb-[15px] bg-neutral-100 rounded-[18.20px] backdrop-blur-[109.18px]'}>
                            <div className={'flex items-center mt-[25px] px-[30px] justify-between'}>
                                <AddNews/>
                                <div className={'flex items-center'}>
                                    <div className={'text-blue-600 text-base font-normal'}>اخبار موجود سایت</div>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="more_vert" clipPath="url(#clip0_84_1663)">
                                            <path id="Vector"
                                                  d="M9.10229 6.14501C9.93628 6.14501 10.6186 5.46265 10.6186 4.62866C10.6186 3.79466 9.93628 3.1123 9.10229 3.1123C8.2683 3.1123 7.58594 3.79466 7.58594 4.62866C7.58594 5.46265 8.2683 6.14501 9.10229 6.14501ZM9.10229 7.66136C8.2683 7.66136 7.58594 8.34372 7.58594 9.17771C7.58594 10.0117 8.2683 10.6941 9.10229 10.6941C9.93628 10.6941 10.6186 10.0117 10.6186 9.17771C10.6186 8.34372 9.93628 7.66136 9.10229 7.66136ZM9.10229 12.2104C8.2683 12.2104 7.58594 12.8928 7.58594 13.7268C7.58594 14.5608 8.2683 15.2431 9.10229 15.2431C9.93628 15.2431 10.6186 14.5608 10.6186 13.7268C10.6186 12.8928 9.93628 12.2104 9.10229 12.2104Z"
                                                  fill="#0075FF"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_84_1663">
                                                <rect width="18.1962" height="18.1962" fill="white"
                                                      transform="translate(0.00488281 0.0800781)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className={'w-[95.63%] h-[56px] flex items-center justify-between border-b-[1px] border-sky-950 border-opacity-20 mx-auto mt-[35px]'}>
                                <div className={'text-neutral-700 text-sm font-bold'}>عملیات</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>وضعیت نمایش</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>زمان درج خبر</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>تاریخ درج خبر</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>تیتر خبر</div>
                            </div>
                            <div className={'w-[95.63%] flex-col mx-auto'}>
                                {data.map(item => (
                                    <div
                                        className={'flex h-[56px] justify-between items-center border-b-[1px] border-sky-950 border-opacity-20'}
                                        key={item.id}>
                                        <div dir={'rtl'}><DoItemList/></div>
                                        <div className={'w-[50px]  h-[20px]'}>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input className="sr-only peer" value="" 
                                                       type="checkbox"/>
                                                <div
                                                    className="group peer ring-0 [box-shadow:1px_3px_0px_0px_#000]  bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-1000 after:duration-300 w-[50px] h-[20px]  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none  after:h-[20px] after:w-[20px]  after:top-0 after: peer-checked:after:translate-x-[30px] peer-hover:after:scale-150 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">
                                                </div>
                                            </label>
                                        </div>
                                        <div className={'text-center text-neutral-700 text-xs font-normal pl-[5%]'}>{item.hourCreate}</div>
                                        <div className={'text-center text-neutral-700 text-xs font-normal pl-[5%] -mr-[5%]'}>{item.dateCreate}</div>
                                        <div className={'text-center text-neutral-700 text-xs font-normal '}>{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <SideBarAdminPanel/>
        </div>
    );
};

export default News;