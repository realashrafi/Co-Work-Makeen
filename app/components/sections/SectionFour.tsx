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
            <div className={'flex flex-wrap lg:flex-nowrap bg-[#F8F9FC] rounded-[12px]'}>
                <div className={'lg:w-1/2 w-[100%] pt-11 lg:pt-0 lg:mt-[8%] flex lg:justify-end mx-auto justify-center '}>
                    <div className={'lg:pl-[100px] w-[100%]   flex flex-col   h-[544px] '}>
                        <div className={'flex justify-center items-center '}>
                            <div
                                className={`lg:w-[236px] w-1/3 h-[66px] items-center mt-[20px] flex justify-center relative left-4 lg:left-0 lg:-mr-[20px] border-2 rounded-l-full border-[${lights[0]}]`}>

                                <svg width="45px" height="45px" viewBox="0 -0.5 25 25" fill="none"
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
                                className={'text-neutral-700 text-base font-medium h-[66px] w-1/3 lg:w-[236px] mt-[20px] lg:ml-[20px] flex items-center'}>
                                ثبت نام در سایت
                            </div>
                        </div>
                        <div  className={'flex items-center justify-center lg:justify-start '}>
                            <div
                                className={'text-neutral-700 text-base font-medium h-[66px] w-1/3 lg:w-[236px] mt-[20px] lg:-mr-[20px] flex items-center justify-end lg:pr-[40px]'}>
                                تکمیل فرم و ارسال
                            </div>
                            <div className={'relative z-[2]'}>
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
                                className={`lg:w-[236px] w-1/3 h-[66px] mt-[20px] flex justify-center items-center relative right-4 lg:right-0 lg:-ml-[20px] border-2 rounded-r-full border-[${lights[1]}]`}>
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
                        <div  className={'flex items-center justify-center'}>
                            <div
                                className={`lg:w-[236px] w-1/3 h-[66px] mt-[20px] flex justify-center items-center relative left-4 lg:left-0 lg:-mr-[20px] border-2 rounded-l-full border-[${lights[2]}]`}>
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
                                className={'text-neutral-700 text-base font-medium h-[66px]   lg:w-[236px] mt-[20px]  lg:ml-[20px] flex items-center'}>
                                تایید مدارک و پرداخت
                            </div>
                        </div>
                        <div  className={'flex justify-center lg:justify-start items-center'}>
                            <div
                                className={'text-neutral-700 text-right text-base font-medium h-[66px] w-1/3   lg:w-[236px] mt-[20px]  lg:-mr-[20px] flex items-center justify-end lg:pr-[40px]'}>
                                مراجعه حضوری و استقرار
                            </div>
                            <div className={'relative z-[2]'}>
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
                                className={`w-1/3 lg:w-[236px] h-[66px] mt-[20px] flex justify-center items-center relative right-4 lg:right-0 lg:-ml-[20px] border-2 rounded-r-full border-[${lights[3]}]`}>
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
                <div className={'lg:w-1/2 flex w-[90%] lg:justify-end justify-center lg:mr-[200px]'}>
                    <div className={'w-[322px]  lg:h-[704px]  relative'}>
                        <h2 className={'h-[43px]  w-[302px] text-center text-indigo-800 text-opacity-20 text-[25px] font-extrabold capitalize tracking-[9px] z-40 left-[-125px] top-[130px] -rotate-90  absolute'}>Cowork
                            Makeen</h2>
                        <div
                            className={'ml-[49px] w-[273px] h-[400px] pt-28 lg:pt-0 lg:h-[704px] justify-center flex flex-col bg-[#002256] relative lg:bottom-[15px] -bottom-[15px] rounded-t-full lg:rounded-t-none lg:rounded-b-full'}>
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