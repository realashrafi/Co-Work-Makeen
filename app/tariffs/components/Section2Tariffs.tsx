'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import blueChair from '../components/data/desk-chair.png'
import LoginForBuy from "@/app/buy/components/LoginForBuy";
import AOS from "aos";

const Section2Tariffs = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false,
        })
    }, []);
    return (
        <section className={'bg-[#002256] flex flex-col   pt-[53px]'}>
            <div data-aos={'fade-up'} data-aos-delay="400"
                className={'lg:w-[14%]  mx-auto  px-3 h-[53px] bg-[#FF792C] flex justify-center ml-[33%] items-center text-center rounded-[40px] -mb-[18px] lg:ml-[70%] z-10'}>
                <p data-aos={'fade-up'} data-aos-delay="450" className={'text-[#FFFEFF] text-[14px]'}>دانشجویان مکینی</p>
            </div>
            <div data-aos={'fade-up'}  className={'bg-[#0A2E65] items-center justify-center mx-auto mt-2 lg:mt-0 lg:flex-nowrap flex-wrap-reverse  flex lg:w-[71%] w-[90%] h-[120px] rounded-[24px]'}>
                <LoginForBuy orderData={1}/>
                <div data-aos={'fade-up'} className={'lg:ml-[19%] ml-8 '}>
                    <p className={'text-[#FF792C]  text-[18px]'}>30 تومان</p>
                </div>
                <div data-aos={'fade-up'} className={'flex flex-col lg:ml-[14%]'} style={{direction: "rtl"}}>
                    <p className={'text-[16px] text-[#FFFFFF] '}>اشتراک روزانه</p>
                    <p className={'text-[14px] text-[#FFFFFF] '}>تنها برای یک روز قابل استفاده است</p>
                </div>
                <div data-aos={'fade-up'} className={'lg:ml-6 ml-8 lg:mr-6'}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                         href="http://www.w3.org/1999/xlink">
                        <rect width="50" height="50" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_1459_1455" transform="scale(0.0078125)"/>
                            </pattern>
                            <image id="image0_1459_1455" width="128" height="128"
                                   href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnCwMRAxyAONmuAAAKLUlEQVR42u3dfWyV1R0H8O/vaUuVYigCbkCrRJeJ0KILSMFtoKA14AvG2E4WZ8yGaMFWcSr0+lKLwVYQGW3CIihZnEFsO2LHpLitxrfIbqsDaWEKdnOxgAbwjTK00Oe3P5hASqTn7j5PT+89388//MG57e88uffbc85z7nkAIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIkoIYruAZKEaGTvmuZtvBvwq7Lj6aqhMwriMDNt1JQ3RzXj30CEA7VK7aZNI5S2tbS++aLusRMcAiJNq6YaczEgEwNvIWrzYdj3u0HNxRSQiUlnUWl1RYbuaROXZLiAJrMH9d91luwj3yJ/x/eJi21UkOgZA/EbhhWHDbBfhIF73ADAAiByWarsAhwzU6ObNUMzHxvZ228X0WYLlmJGVBeBLyZs0yXY5yY4B0FtUP/fyli8XrzK9pbW21nY5fZX6Cxfk5hQUQMRTMADCxikAkcMYAEQOYwAQOYwBQOQwBgCRwxgARA5jABA5jAFA5DAGAJHDGABEDmMAEDmMAUDkMAYAkcMYAEQO49eBe43k+nMmTlR/4YLcVbZr6cuOXScA24XXKXQMgN4i2C6r7r0XEE9t19K38YPfizgFIHIYAyBeisvQfuiQ7TIc9AcM7uiwXUSiYwDES7AcHzQ02C7DQWfo+o0bbReR6BgA8dLOLzofLioCEEVjXR34lyks317Xl/X1mhpoZ+qR0nnzbBeV6PhkoF6ifuk3Y2praiB4VMoLCr67IR7Vstpa8SrStxcUFtqum/1PbhwBEDks5tuA6pfpFE1NhXQ+sn92Xh5UO73o8OG2O9L36UF/UHZ2z4MuPYhB2dnHj8dOGq73PyQi/fy8PXug/RYNeSYaFa9cXpejR41fbtpQ/Qd+eOEvzzoLSPk07fVXX4VgLs4cP952/4kIAHQx7mhqgvqjjmy58krxluz8YM3Bgz29ynwKIN5vUm8sKeEHn6gvkgfx9IQJkJRlaevNH5oawxqA/Egeys213U0iOq05mG3+OTUPAMXZ+qDHRUOivkzxkealpJg25weayGHBfxmI93GJAme8jyJGHAEQOYwBQOQwBgCRwxgARA5jABA5jAFA5DAGAJHDGABEDmMAEDkshGPB+X1uouCZnqcQm+ADQGSZ3DNxIgBPUVPTS1eHKNktk3uC/6GcAhA5LIYDQXQz3uX590R9mmAphpifSh3DCMC7Rsby/HuiPk3xK91n/rwE4wAQefxQ689ragA9F1dEIgBuw9I9e2z3l8hx//scqoosXChexbAdhXV1pi8O/LkAx1f/RYwWAUUqKlpbJemfT+D6ufiu9/87u6ulpTk52vPzYlV9QWGheJVPtLTW1gb1+7kISOQwPh48IKqlU0fNGzwYkEjamAkToP5fsHLAgJNaOH4ufpz9F+8qzO3oANKmdQ2JRkXKZUfhZ5/Z7lWiYwDESf0FjbnzJk8GcK1fVl8PaKNOzcyESPfRldl93OTdRxFn/7URKwGgc4t34PPP1S/dMPaimTPFq7hu2z/efNN25xIVpwDxEm+EflxVBeAemZqZabscB3yGwYMGARjqV69YYbuYRMcAiN9AvS0nx3YRzhGcp1+NHWu7jETHAIhflTxifg47BYbXPQAMACKHcRGwt4R0HzfZxLqPhOLDEQCRwxgARA5jABA5jAFA5DAuAvYWkUF+dP589Uu/GbMxmbb4Bkyw3J+RlQXgS8mzXUzyYwD0ni8lb9IkCB61XUifV267AHdwCkDkMAZA/N7HrL17bRfhoKg+u3u37SISHQMgbpqPT6qrbVfhHp3gzeZ1jxfXAOIkUlnUWl1RoRrJyFnb1gb4L+u26dOhMgnjMjIgmC6TRQDkYdpNNxn8yEtwcXMzFDfoDR99ZLt/wV0ovCQvjRwJYCveu/RSg1dE0VhXB0WDvqF6/LBL1YNecUODeJVPtLRwR2W8GAABOXFmIi7HSVtY1S/de8kbQ4dCUHUUBgGg3ixte+wx8Rb72ws2bLDdr6Colt49uub66wH0996rr+/5BZ1fdD5cVCTesvSdq/bvt11/suIUIGwi3/g3Zmebt++60K9ub7dddggXYn7q3Bj6JWmHU26P4brR/4UBELquNJ0ewxtZj5zZtfrjj21XHTjVdG99DP3SlA+84qws22UnOwZA6FLO8zcYvZGjmP3115Blf9+56sAB21UHTiqGbZ28f//xfvbY3t+NGgZA2BgAodObsczojTwTu9rbjx2QbnBMdII53i/FG3jB5PadXC2bRoywXXeyYwCE73Z8z2gKUI+MJBz6dye4Qf9mshbgv4h9XAMIGwMgfNW4xmgEMA/RZFz8605XodMg6FQykcspQNgYAGFTXCtpBn/JVH6r9S4EgJTgeYN+ClZrBwMgbAyAkBybxYtAkItbDeay4j+ESicCYB1+bdTPP+InDICwMQDCovfdMnbp0KEA6tCUnt5z+5SpeM2BNQB0/du7zigArpIZ/furlunomrPPtl11smIAhEVSs/Q5bgA6VcoRaYhlP8CRu71dHAmEhQEQGi3GJTG8cZN1A9Ap/ex8CAti2RGIe7GTdwPCwgAIi4qPOqM3bnJvAOpOnnx+2/379sF0Q5DqJ/gFRwBhYQCERbwH/KncANRdzBuCRGbqSm4ICgsDIDR6J4oMAkAxB1tcmPt3Y7whSIvB7wSEhgEQGsnHIIMpgGAj0hyY+5+qGC8bBIDiRgzkGkBYGABhUX1appiMAFzZAHSK1fjUKPielcs5AggLAyBg3ABkynhD0OXwOAIICwMgaBopyVl8zjngBqAeGG4IEryNrIwM1TK9WDMzbVedbBgAQRO/v6yLYcjqzAagUzpeja0x9FuPXKxPcioQNAZA0DRliZ8xfLh5+6Pj0l5z8HhrPdout8Yy8vHLu34Ww3UlIwyAoIm/WyJffWXQ8j+6ct++kzbGuOVEv1NxncEGKEl51Ws1uq4UAwZA4D4suej3b70FxUocfued0zQcLf2fesqVDUDdnei33od/ne58f12MO5qagNSqlhlNTbbrTjY8FjxgIrW1tbVdXeqX6Q+qpk0DOledcdncuVBZg+YLLoDoEs1uaBCpmLJ9/Pr1tuu1r3Jg67pFi4DIzNxFu3YBOkNn5OcD+mOZ2tYGTZfDumKFeOUC+L7tapMNAyAk4pXLhyXfDlkrK0/6rym2a+tLTowEHq9veWTtWgD1OPbvCSW2q0xenAIQOYwBQOQwBgCRwxgARA4LPgBE+vl5e/YYtOTz3YmA9zFr794eW4k0a2PwO0aDDwDtt2jIM9Hoifu339mQz3cngubjk9N8DhQj8btoFNqvcfA5zc1B/3YJrVt+mY6uGTAA0vknb05JCYC/YvL550P1DPnnK6+IV/lESyuf704EAKqRjJy1hYWAzsa6/HxAR+G8tjZo+p3+T6urxSuXHYUdHbbrJCIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiJL/gt8ucwQ4ntkrwAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>
                </div>
            </div>
            <div data-aos={'fade-up'} data-aos-delay="200" className={'bg-[#0A2E65] relative mt-[18px] items-center justify-center mx-auto flex-wrap-reverse lg:flex-nowrap flex lg:w-[71%] w-[90%] h-[120px] rounded-[24px]'}>
                {/*<div className={'absolute right-0 top:1/3 lg:-right-14 lg:top-0 flex flex-col items-center justify-center'}>*/}
                {/*    <div className={'text-neutral-50 text-lg font-bold origin-top-left rotate-[-10.52deg]'} dir={'rtl'}>3 روز رایگان</div>*/}
                {/*    <div className={'-mt-2'}>*/}
                {/*        <svg width="53" height="21" viewBox="0 0 53 21" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*            <path id="Vector 76"*/}
                {/*                  d="M51.5459 1.41658C51.5459 1.41658 0.0852882 12.5535 1.22538 16.3863C2.36547 20.2191 59.2544 2.77633 48.2702 9.69424C37.286 16.6122 14.8273 16.5145 17.1194 18.9612C19.4115 21.408 39.2951 18.1024 39.2951 18.1024"*/}
                {/*                  stroke="white" strokeWidth="1.5" stroke-linecap="round"/>*/}
                {/*        </svg>*/}

                {/*    </div>*/}
                {/*</div>*/}
                <LoginForBuy orderData={2}/>
                <div data-aos={'fade-up'} className={'lg:ml-[18%] ml-8'}>
                    <p className={'text-[#FF792C] text-[18px]'}>500 تومان</p>
                </div>
                <div data-aos={'fade-up'} className={'flex flex-col lg:ml-[14%]'} style={{direction: "rtl"}}>
                    <p className={'text-[16px] text-[#FFFFFF] '}> اشتراک بلند مدت</p>
                    <p className={'text-[14px] text-[#FFFFFF] '}> برای 30 یک روز قابل استفاده است</p>
                </div>
                <div data-aos={'fade-up'} className={'lg:ml-6 ml-8 lg:mr-6'}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                         href="http://www.w3.org/1999/xlink">
                        <rect width="50" height="50" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_1459_1455" transform="scale(0.0078125)"/>
                            </pattern>
                            <image id="image0_1459_1455" width="128" height="128"
                                   href="data:image/png;base64,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"/>
                        </defs>
                    </svg>

                </div>
            </div>

            <div data-aos={'fade-up'} data-aos-delay="400"
                className={'lg:w-[14%] mx-auto px-3 h-[53px] bg-[#44C0ED] mt-8 lg:mt-[66px] flex justify-center items-center text-center rounded-[40px] -mb-[18px] lg:ml-[70%] z-10'}>
                <p data-aos={'fade-up'} data-aos-delay="450" className={'text-[#FFFEFF] text-[14px]'}>دانشجویان آزاد</p>
            </div>
            <div data-aos={'fade-up'} data-aos-delay="300" className={'bg-[#0A2E65] items-center  flex-wrap-reverse justify-center lg:flex-nowrap mx-auto mt-1  flex lg:w-[71%] w-[90%] h-[120px] rounded-[24px]'}>
               <LoginForBuy orderData={1}/>
                <div data-aos={'fade-up'} className={'lg:ml-[19%] ml-8 '}>
                    <p className={'text-[#44C0ED] text-[18px]'}>40 تومان</p>
                </div>
                <div data-aos={'fade-up'} className={'flex flex-col lg:ml-[14%]'} style={{direction: "rtl"}}>
                    <p className={'text-[16px] text-[#FFFFFF] '}>اشتراک روزانه</p>
                    <p className={'text-[14px] text-[#FFFFFF] '}>تنها برای یک روز قابل استفاده است</p>
                </div>
                <div data-aos={'fade-up'} className={'lg:ml-6 ml-8 lg:mr-6'}>
                    <Image src={blueChair} alt={''}/>
                </div>
            </div>
            <div data-aos={'fade-up'} data-aos-delay="500"
                className={'bg-[#0A2E65] mt-[18px] relative justify-center lg:flex-nowrap flex-wrap-reverse items-center mx-auto flex lg:w-[71%] w-[90%] h-[120px] rounded-[24px]'}>
                <div data-aos={'fade-down'} data-aos-delay="700"
                    className={'absolute right-0 top:1/3 lg:-right-14 lg:top-0 flex flex-col items-center justify-center'}>
                    <div className={'text-neutral-50 text-lg font-bold origin-top-left rotate-[-10.52deg]'}
                         dir={'rtl'}>3 روز رایگان
                    </div>
                    <div className={'-mt-2'}>
                        <svg width="53" height="21" viewBox="0 0 53 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 76"
                                  d="M51.5459 1.41658C51.5459 1.41658 0.0852882 12.5535 1.22538 16.3863C2.36547 20.2191 59.2544 2.77633 48.2702 9.69424C37.286 16.6122 14.8273 16.5145 17.1194 18.9612C19.4115 21.408 39.2951 18.1024 39.2951 18.1024"
                                  stroke="white" strokeWidth="1.5" stroke-linecap="round"/>
                        </svg>

                    </div>
                </div>
                <LoginForBuy orderData={2}/>
                <div data-aos={'fade-up'} className={'lg:ml-[18%] ml-8'}>
                    <p className={'text-[#44C0ED] text-[18px]'}>650 تومان</p>
                </div>
                <div data-aos={'fade-up'} className={'flex flex-col ml-8 lg:ml-[14%]'} style={{direction: "rtl"}}>
                    <p className={'text-[16px] text-[#FFFFFF] '}> اشتراک بلند مدت</p>
                    <p className={'text-[14px] text-[#FFFFFF] '}> برای 30 یک روز قابل استفاده است</p>
                </div>
                <div data-aos={'fade-up'} className={'lg:ml-6 ml-8 lg:mr-6'}>
                    <Image src={blueChair} alt={''}/>
                </div>
            </div>
        </section>
    );
};

export default Section2Tariffs;