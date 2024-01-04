'use client'
import React, {useState, useEffect} from 'react';

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
const SectionFour = () => {
    const [lights, setLights] = useState(['#FF792C', '#C1C1C1', '#C1C1C1', '#C1C1C1'])
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false,
        })
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setLights(['#FF792C', '#C1C1C1', '#C1C1C1', '#C1C1C1']);
            setTimeout(() => {
                setLights(['#C1C1C1', '#FF792C', '#C1C1C1', '#C1C1C1']);
            }, 1500);
            setTimeout(() => {
                setLights(['#C1C1C1', '#C1C1C1', '#FF792C', '#C1C1C1']);
            }, 3000);
            setTimeout(() => {
                setLights(['#C1C1C1', '#C1C1C1', '#C1C1C1', '#FF792C']);
            }, 4500);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={'bg-[#002256]  pt-[150px]'}>
            <div className={'flex bg-[#F8F9FC] rounded-[12px]'}>
                <div className={'w-1/2 flex justify-end items-center'}>
                    <div className={'pl-[100px]  flex flex-col   h-[544px] '}>
                        <div className={'flex items-center '}>
                            <div
                                className={`w-[236px] h-[66px] mt-[20px] flex justify-center -mr-[20px] border-2 rounded-l-full border-[${lights[0]}]`}>

                                <svg width="45px" height="45pxpx" viewBox="0 -0.5 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.014 8.46835C14.7204 8.17619 14.2455 8.17737 13.9533 8.47099C13.6612 8.76462 13.6624 9.23949 13.956 9.53165L15.014 8.46835ZM16.971 12.5317C17.2646 12.8238 17.7395 12.8226 18.0317 12.529C18.3238 12.2354 18.3226 11.7605 18.029 11.4683L16.971 12.5317ZM18.029 12.5317C18.3226 12.2395 18.3238 11.7646 18.0317 11.471C17.7395 11.1774 17.2646 11.1762 16.971 11.4683L18.029 12.5317ZM13.956 14.4683C13.6624 14.7605 13.6612 15.2354 13.9533 15.529C14.2455 15.8226 14.7204 15.8238 15.014 15.5317L13.956 14.4683ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM13.956 9.53165L16.971 12.5317L18.029 11.4683L15.014 8.46835L13.956 9.53165ZM16.971 11.4683L13.956 14.4683L15.014 15.5317L18.029 12.5317L16.971 11.4683ZM17.5 11.25H3.5V12.75H17.5V11.25Z"
                                        fill="#000000"/>
                                    <path
                                        d="M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9"
                                        stroke={lights[0]} strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path
                                        d="M15.014 8.46835C14.7204 8.17619 14.2455 8.17737 13.9533 8.47099C13.6612 8.76462 13.6624 9.23949 13.956 9.53165L15.014 8.46835ZM16.971 12.5317C17.2646 12.8238 17.7395 12.8226 18.0317 12.529C18.3238 12.2354 18.3226 11.7605 18.029 11.4683L16.971 12.5317ZM18.029 12.5317C18.3226 12.2395 18.3238 11.7646 18.0317 11.471C17.7395 11.1774 17.2646 11.1762 16.971 11.4683L18.029 12.5317ZM13.956 14.4683C13.6624 14.7605 13.6612 15.2354 13.9533 15.529C14.2455 15.8226 14.7204 15.8238 15.014 15.5317L13.956 14.4683ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM13.956 9.53165L16.971 12.5317L18.029 11.4683L15.014 8.46835L13.956 9.53165ZM16.971 11.4683L13.956 14.4683L15.014 15.5317L18.029 12.5317L16.971 11.4683ZM17.5 11.25H3.5V12.75H17.5V11.25Z"
                                        fill={lights[0]}/>
                                    <path
                                        d="M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                {/*<svg width="46" height="46" viewBox="0 0 46 46" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <rect width="45.1338" height="45.1338" fill="url(#pattern0)"/>*/}
                                {/*    <defs>*/}
                                {/*        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"*/}
                                {/*                 height="1">*/}
                                {/*            <use xlinkHref="#image0_807_3441" transform="scale(0.0078125)"/>*/}
                                {/*        </pattern>*/}
                                {/*        <image id="image0_807_3441" width="128" height="128"*/}
                                {/*               xlinkHref="data:image/png;base64,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"/>*/}
                                {/*    </defs>*/}
                                {/*</svg>*/}


                            </div>
                            <div className={'relative'}>
                                <div className={'absolute top-[9%] right-[45%] text-lg font-bold text-white'}>1</div>
                                <svg width="46" height="124" viewBox="0 0 46 124" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 108">
                                        <ellipse id="Ellipse 186" cx="22.7226" cy="24.9495" rx="22.5669" ry="23.9773"
                                                 fill={lights[0]}/>
                                        <path id="Rectangle 266"
                                              d="M9.18243 27.1497C9.18243 21.1673 14.0321 16.3176 20.0145 16.3176H25.4306C31.413 16.3176 36.2627 21.1673 36.2627 27.1497V123.736L30.7694 117.335C26.3531 112.188 18.3474 112.319 14.1021 117.608L9.18243 123.736V27.1497Z"
                                              fill={lights[0]}/>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className={'text-neutral-700 text-base font-medium h-[66px] w-[236px] mt-[20px] ml-[20px] flex items-center'}>
                                ثبت نام در سایت
                            </div>
                        </div>
                        <div  className={'flex items-center'}>
                            <div
                                className={'text-neutral-700 text-base font-medium h-[66px] w-[236px] mt-[20px] -mr-[20px] flex items-center justify-end pr-[40px]'}>
                                تکمیل فرم و ارسال
                            </div>
                            <div className={'relative'}>
                                <div className={'absolute top-[9%] right-[40%] text-lg font-bold text-white'}>2</div>
                                <svg className={'z-[2]'} width="46" height="124" viewBox="0 0 46 124" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 108">
                                        <ellipse id="Ellipse 186" cx="22.7226" cy="24.9495" rx="22.5669" ry="23.9773"
                                                 fill={lights[1]}/>
                                        <path id="Rectangle 266"
                                              d="M9.18243 27.1497C9.18243 21.1673 14.0321 16.3176 20.0145 16.3176H25.4306C31.413 16.3176 36.2627 21.1673 36.2627 27.1497V123.736L30.7694 117.335C26.3531 112.188 18.3474 112.319 14.1021 117.608L9.18243 123.736V27.1497Z"
                                              fill={lights[1]}/>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className={`w-[236px] h-[66px] mt-[20px] flex justify-center items-center  -ml-[20px] border-2 rounded-r-full border-[${lights[1]}]`}>
                                <svg width="46" height="50" viewBox="0 0 46 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 485">
                                        <g id="Group 484">
                                            <rect id="Rectangle 691" x="1.35401" y="1.35401" width="42.4258"
                                                  height="46.9392" rx="9.4781" stroke="#3B3838" strokeWidth="2.70803"/>
                                            <path id="Line 184" d="M9.33801 9.21997H35.0176" stroke="black"
                                                  strokeWidth="1.80535" strokeLinecap="round"/>
                                            <path id="Line 185" d="M9.33801 19.1497H35.0176" stroke="black"
                                                  strokeWidth="1.80535" strokeLinecap="round"/>
                                            <path id="Line 186" d="M9.33801 29.0791H35.0176" stroke="black"
                                                  strokeWidth="1.80535" strokeLinecap="round"/>
                                            <path id="Line 187" d="M9.33801 39.0085H22.5669" stroke="black"
                                                  strokeWidth="1.80535" strokeLinecap="round"/>
                                            <path id="Vector"
                                                  d="M37.8894 33.2738L36.9819 32.7116C36.7308 32.5566 36.3868 32.6161 36.2188 32.8431L31.7705 38.8219L29.7262 36.9587C29.5127 36.7641 29.1647 36.7641 28.9512 36.9587L28.1742 37.6669C27.9607 37.8615 27.9607 38.1786 28.1742 38.375L31.3177 41.2401C31.4937 41.4005 31.7705 41.523 32.0196 41.523C32.2687 41.523 32.5198 41.3806 32.6819 41.1662L38.0357 33.9675C38.2057 33.7405 38.1404 33.4288 37.8894 33.2738Z"
                                                  fill={lights[1]}/>
                                        </g>
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <div  className={'flex items-center '}>
                            <div
                                className={`w-[236px] h-[66px] mt-[20px] flex justify-center items-center -mr-[20px] border-2 rounded-l-full border-[${lights[2]}]`}>
                                <svg width="49" height="38" viewBox="0 0 49 38" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 487">
                                        <rect id="Rectangle 692" x="1.5" y="1.5" width="46" height="35" rx="3.5"
                                              stroke="#3B3838" strokeWidth="3"/>
                                        <line id="Line 188" x1="0.728516" y1="10.1592" x2="48.2715" y2="10.1592"
                                              stroke="black" strokeWidth="3"/>
                                        <rect id="Rectangle 693" x="7.58209" y="25.1819" width="14.8209"
                                              height="4.04545" rx="2" stroke={lights[2]} strokeWidth="2"/>
                                    </g>
                                </svg>

                            </div>
                            <div className={'relative'}>
                                <div className={'absolute top-[9%] right-[38%] text-lg font-bold text-white'}>3</div>
                                <svg width="46" height="124" viewBox="0 0 46 124" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 108">
                                        <ellipse id="Ellipse 186" cx="22.7226" cy="24.9495" rx="22.5669" ry="23.9773"
                                                 fill={lights[2]}/>
                                        <path id="Rectangle 266"
                                              d="M9.18243 27.1497C9.18243 21.1673 14.0321 16.3176 20.0145 16.3176H25.4306C31.413 16.3176 36.2627 21.1673 36.2627 27.1497V123.736L30.7694 117.335C26.3531 112.188 18.3474 112.319 14.1021 117.608L9.18243 123.736V27.1497Z"
                                              fill={lights[2]}/>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className={'text-neutral-700 text-base font-medium h-[66px] w-[236px] mt-[20px] ml-[20px] flex items-center'}>
                                تایید مدارک و پرداخت
                            </div>
                        </div>
                        <div  className={'flex items-center'}>
                            <div
                                className={'text-neutral-700 text-base font-medium h-[66px] w-[236px] mt-[20px] -mr-[20px] flex items-center justify-end pr-[40px]'}>
                                مراجعه حضوری و استقرار
                            </div>
                            <div className={'relative'}>
                                <div className={'absolute top-[9%] right-[38%] text-lg font-bold text-white'}>4</div>
                                <svg className={'z-[2]'} width="46" height="124" viewBox="0 0 46 124" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 108">
                                        <ellipse id="Ellipse 186" cx="22.7226" cy="24.9495" rx="22.5669" ry="23.9773"
                                                 fill={lights[3]}/>
                                        <path id="Rectangle 266"
                                              d="M9.18243 27.1497C9.18243 21.1673 14.0321 16.3176 20.0145 16.3176H25.4306C31.413 16.3176 36.2627 21.1673 36.2627 27.1497V123.736L30.7694 117.335C26.3531 112.188 18.3474 112.319 14.1021 117.608L9.18243 123.736V27.1497Z"
                                              fill={lights[3]}/>
                                    </g>
                                </svg>
                            </div>
                            <div
                                className={`w-[236px] h-[66px] mt-[20px] flex justify-center items-center -ml-[20px] border-2 rounded-r-full border-[${lights[3]}]`}>
                                <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 15.5C6 14.9477 6.44772 14.5 7 14.5H17C17.5523 14.5 18 14.9477 18 15.5C18 16.6046 17.1046 17.5 16 17.5H8C6.89543 17.5 6 16.6046 6 15.5Z"
                                        stroke="black" strokeWidth="1.5"/>
                                    <path
                                        d="M6.62825 6.76581C6.86962 4.75442 6.9903 3.74872 7.57198 3.06161C7.75659 2.84355 7.97139 2.65298 8.2099 2.49567C8.96141 2 9.97432 2 12.0001 2C14.026 2 15.0389 2 15.7904 2.49567C16.0289 2.65298 16.2437 2.84355 16.4283 3.06161C17.01 3.74872 17.1307 4.75442 17.372 6.76581L17.463 7.52342C17.7134 9.61087 17.8387 10.6546 17.2419 11.3273C16.6451 12 15.5939 12 13.4914 12H10.5088C8.40642 12 7.35521 12 6.7584 11.3273C6.1616 10.6546 6.28684 9.61087 6.53734 7.52342L6.62825 6.76581Z"
                                        stroke={lights[3]} strokeWidth="1.5"/>
                                    <path d="M12 12V14" stroke="#black" strokeWidth="1.5"/>
                                    <path
                                        d="M12 22V20M12 20V17.5M12 20L12.4661 20.1165C13.4214 20.3554 14.1886 21.0658 14.5 22M12 20L11.5339 20.1165C10.5786 20.3554 9.81142 21.0658 9.5 22M6 16L5.13484 13.4045C5.06173 13.1852 5.02518 13.0755 4.95424 12.9225C4.8833 12.7695 4.85413 12.7215 4.79579 12.6256C4.33942 11.8752 3.7325 11.5 2 11.5M18 16L18.8652 13.4045C18.9383 13.1852 18.9748 13.0755 19.0458 12.9225C19.1167 12.7695 19.1459 12.7215 19.2042 12.6256C19.6606 11.8752 20.2675 11.5 22 11.5"
                                        stroke='black' strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-1/2 flex justify-end mr-[119px]'}>
                    <div className={'w-[322px]  h-[704px] relative'}>
                        <h2 className={'h-[43px]  w-[302px] text-center text-indigo-800 text-opacity-20 text-[25px] font-extrabold capitalize tracking-[9px] z-40 left-[-125px] top-[130px] -rotate-90  absolute'}>Cowork
                            Makeen</h2>
                        <div
                            className={'ml-[49px] w-[273px] h-[704px] justify-center flex flex-col bg-[#002256] relative bottom-[15px] rounded-b-full'}>
                            <h2 className={'w-[197px] h-[78.68px] text-center text-[#FF792C] text-[22px] font-extrabold mb-[45px] mx-auto'}>مسیر
                                پیوستن به
                                فضای کار اشتراکی</h2>
                            <p className={'pb-56 mx-auto w-[244px] h-[50.73px] text-center text-white text-lg font-medium'}>شما میتونید
                                با 4 قدم از فضای کوورک مکین لذت ببرید</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;