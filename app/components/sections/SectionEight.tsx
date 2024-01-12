import React from 'react';

const data = [
    {
        id: 1,
        title: 'چرا از فضای کار اشتراکی استفاده کنیم؟',
        content: 'فضای کار اشتراکی مکین امکانات زیادی از جمله استفاده ار منتور را فراهم میکند .'
    }, {
        id: 2,
        title: 'چرا از فضای کار اشتراکی استفاده کنیم؟',
        content: 'فضای کار اشتراکی مکین امکانات زیادی از جمله استفاده ار منتور را فراهم میکند .'
    }, {
        id: 3,
        title: 'چرا از فضای کار اشتراکی استفاده کنیم؟',
        content: 'فضای کار اشتراکی مکین امکانات زیادی از جمله استفاده ار منتور را فراهم میکند .'
    }, {
        id: 4,
        title: 'چرا از فضای کار اشتراکی استفاده کنیم؟',
        content: 'فضای کار اشتراکی مکین امکانات زیادی از جمله استفاده ار منتور را فراهم میکند .'
    },
]
const SectionEight = () => {
    return (
        <section className={'bg-[#002256] bg-fixed bg-cover  bg-no-repeat bg-[url("/SectionLanding.png")] '}>
            <div
                className={'lg:h-[820px] h-fit lg:pb-0 pb-12 bg-gradient-to-t from-[#000A19] via-[#000A1950] to-[#000A19] backdrop-brightness-[30%] '}>
                <h2 className={'text-[22px] text-center pt-[108px] text-[#FF792C] pb-[52px]'}>سوالات متداول</h2>
                {data.map(item => (

                    <div className="collapse lg:w-[515px] w-[95%] collapse-arrow mx-auto lg:ml-[70px] mb-[18px] "
                         key={item.id}>
                        <input type="checkbox" className="peer"/>
                        <div
                            className="collapse-title  bg-[#002256] text-white-content peer-checked:bg-white peer-checked:text-black"
                            style={{direction: "rtl"}}>
                            {item.title}
                        </div>

                        <div
                            className="collapse-content   bg-[#002256] text-white-content peer-checked:bg-white peer-checked:text-black"
                            style={{direction: "rtl"}}>
                            <p className={'pt-4 border-t-2 '}>{item.content}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default SectionEight;