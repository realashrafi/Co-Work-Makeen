import React from 'react';
import NavbarAdminPanel from "@/app/admin/components/NavbarAdminPanel";
import SideBarAdminPanel from "@/app/admin/components/SideBarAdminPanel";
import DoItemList from "@/app/admin/settingreserve/components/DoItemList";
import AddWorkShops from "@/app/admin/workshops/components/AddWorkShops";
const data =[
    {
        id:1,
        name:'چرا برنامه نویسی ؟',
        startDate:'1402/07/10',
        endDate:'1402/07/12',
        period:'2 روز',
    },{
        id:2,
        name:'چرا برنامه نویسی ؟',
        startDate:'1402/07/10',
        endDate:'1402/07/12',
        period:'2 روز',
    },{
        id:3,
        name:'چرا برنامه نویسی ؟',
        startDate:'1402/07/10',
        endDate:'1402/07/12',
        period:'2 روز',
    },
]
const WorkShop = () => {
    return (
        <div className={'bg-[#F8F9FC] flex'}>
            <div className={'flex flex-col w-[81.25%]'}>
                <NavbarAdminPanel/>
                <div className={'w-[100%] flex justify-center h-[1726px]'}>
                    <div className={'w-[88.97%] flex flex-col h-[1570px] mt-[56px] rounded-[12px] bg-[#FFFEFF]'}>
                        <div className={'w-[100%] flex justify-end mt-[24px]  pr-[38px]'}>
                            <p className={'text-[#000000] text-lg font-medium pr-[10px]'}>لیست ورکشاپ ها</p>
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
                            <p className={'text-neutral-600 text-base font-normal'} dir={'rtl'}>کاربر محترم ، در این بخش
                                می
                                توانید ورکشاپ های موجود در سایت را مشاهده ، ویرایش و حذف کنید
                            </p>
                        </div>
                        <AddWorkShops/>
                        <div
                            className={'w-[87.22%] pb-[15px] flex flex-col bg-neutral-100 rounded-xl border border-sky-950 border-opacity-10 mx-auto mt-[40px]'}>
                            <div
                                className={'flex justify-between items-center h-[73px] w-[94.16%]  mx-auto border-b-[1px] border-sky-950 border-opacity-20 '} dir={'rtl'}>
                                <div className={'text-neutral-700 text-sm font-bold'}>ردیف</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>نام ورکشاپ</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>تاریخ شروع</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>تاریخ پایان</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>مدت دوره</div>
                                <div className={'text-neutral-700 text-sm font-bold'}>عملیات</div>
                            </div>
                            <div className={'flex w-[94.16%] mx-auto flex-col'}>
                                {data.map(item=>(
                                    <div key={item.id} className={'flex h-[70px] justify-between items-center border-b-[1px] border-sky-950 border-opacity-20'} dir={'rtl'}>
                                        <div className={'pr-[5px]  text-center text-neutral-700 text-xs font-normal'}>{item.id}</div>
                                        <div className={' text-center text-neutral-700 text-xs font-normal'}>{item.name}</div>
                                        <div className={'pl-[15px] text-center text-neutral-700 text-xs font-normal'}>{item.startDate}</div>
                                        <div className={'pl-[15px] text-center text-neutral-700 text-xs font-normal'}>{item.endDate}</div>
                                        <div className={' text-center text-neutral-700 text-xs font-normal'}>{item.period}</div>
                                        <div className={''}><DoItemList/></div>
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

export default WorkShop;