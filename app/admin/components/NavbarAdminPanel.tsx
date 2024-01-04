import React from 'react';
import Link from "next/link";

const NavbarAdminPanel = () => {
    return (
        <section className={'w-[96%] justify-center border-[#120FA335] border-b-[1px] h-[95px] mx-auto   flex items-center'}>
            <input type="text"
                   className={'lg:ml-[5.3%] flex  justify-center border border-sky-950 border-opacity-10 backdrop-blur-[71.48px]  items-center text-center text-black text-sm font-normal w-[144px] h-[40px] rounded-[12px]  bg-[#FFFEFF]'}
                   placeholder={'جست و جو 🔍'}/>
            <Link href={'/admin/settingreserve'} className={'ml-[2.56%]'} >
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="icon-park-solid:setting">
                    <g id="Mask group">
                        <mask id="mask0_30_2899" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                            <g id="Group">
                                <g id="Group_2">
                                    <path id="Vector"
                                          d="M18.343 7.5855C18.9806 8.49884 19.4121 9.53988 19.6075 10.6365H22V13.3635H19.6075C19.4121 14.4601 18.9806 15.5012 18.343 16.4145L20.0355 18.107L18.107 20.0355L16.4145 18.343C15.5012 18.9806 14.4601 19.4121 13.3635 19.6075V22H10.6365V19.6075C9.53988 19.4121 8.49884 18.9806 7.5855 18.343L5.893 20.0355L3.9645 18.107L5.657 16.4145C5.01937 15.5012 4.58791 14.4601 4.3925 13.3635H2V10.6365H4.3925C4.58791 9.53988 5.01937 8.49884 5.657 7.5855L3.9645 5.893L5.893 3.9645L7.5855 5.657C8.49884 5.01937 9.53988 4.58791 10.6365 4.3925V2H13.3635V4.3925C14.4601 4.58791 15.5012 5.01937 16.4145 5.657L18.107 3.9645L20.0355 5.893L18.343 7.5855Z"
                                          fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                    <path id="Vector_2"
                                          d="M12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.76339 10.7011 9.5 11.337 9.5 12C9.5 12.663 9.76339 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5Z"
                                          fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                                </g>
                            </g>
                        </mask>
                        <g mask="url(#mask0_30_2899)">
                            <path id="Vector_3" d="M0 0H24V24H0V0Z" fill="#959595"/>
                        </g>
                    </g>
                </g>
            </svg>
            </Link>
           <Link href={'/admin/support'} className={'ml-[3.54%] mb-[0.6%]'}>
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="fluent:alert-32-filled" clipPath="url(#clip0_651_3275)">
                    <path id="Vector"
                          d="M6.64246 17C6.64246 14.6131 7.59532 12.3239 9.29141 10.636C10.9875 8.94821 13.2879 8 15.6865 8C18.0852 8 20.3856 8.94821 22.0817 10.636C23.7778 12.3239 24.7306 14.6131 24.7306 17V20.807L26.6681 25.629C26.729 25.7807 26.7516 25.9449 26.734 26.1073C26.7164 26.2697 26.6591 26.4253 26.5671 26.5605C26.4751 26.6958 26.3512 26.8066 26.2062 26.8832C26.0613 26.9598 25.8997 26.9999 25.7355 27H5.63756C5.47343 26.9999 5.31183 26.9598 5.16687 26.8832C5.02191 26.8066 4.89802 26.6958 4.80602 26.5605C4.71401 26.4253 4.65671 26.2697 4.6391 26.1073C4.62149 25.9449 4.64413 25.7807 4.70502 25.629L6.64246 20.807V17ZM11.7926 29C12.0139 29.8598 12.5169 30.6217 13.2222 31.165C13.9275 31.7083 14.7946 32.0022 15.6865 32C16.5785 32.0022 17.4456 31.7083 18.1509 31.165C18.8562 30.6217 19.3592 29.8598 19.5805 29H11.7926Z"
                          fill="#9F9F9F"/>
                </g>
                <defs>
                    <clipPath id="clip0_651_3275">
                        <rect width="32.1568" height="32" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
           </Link>
            <div className={'ml-[1%] lg:ml-[52.96%] flex flex-col'}>
                <p className={'text-black text-sm font-normal'} dir={'rtl'}>کیمیا پیشداد</p>
                <p className={'text-black text-sm font-normal'} dir={'rtl'}>بخش رواط عمومی</p>
            </div>
            <svg className={'ml-[0.79%] lg:mr-0 mr-[5%]'} width="29" height="29" viewBox="0 0 29 29" fill="none"
                 xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
                <rect width="29" height="29" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_30_2936" transform="scale(0.0104167)"/>
                    </pattern>
                    <image id="image0_30_2936" width="96" height="96"
                           href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADPElEQVR4nO2cy2oUQRSGPxeSKFF0ISQICmqCeAmoK+/gM2hMwBcQUXHvfaEQssnGS2IeQXwBXSiYSHAhuIm6MN7QJBvFieYClhSpwXEMIeN096me/j/4NzMhp89/eqq7+lQ1CCGEEEIIIYQQQggRH2uBHmAQGAUmgbmgyfDZANANrLE+2EaiAxgCpgG3TPm/vQe0Wx98nlkF9AHzNRhfLf/r6AWarZPJG+3AyzqMr9YI0GadVF7YE8Z0l7A+AJ3WyeXhzJ9MwfzKIrRaJxkrzcCLFM0v63m4vogq+jIwv6xr1cGLTkeddzu16ruGor8ZytD8sm4ZnWxRznCnDQpQ0ox5gR4D88s6GY6h0AwaFuCudfIxMGpYAD9DLjxThgWYKLz7wKxhAWZUAFQAa6Y0BNkyqouwLQOGBbhjnHsUdBsW4IR18jHQEh4LZG1+KcQWLDTQsy6AH/pERSdsLkPz/dxjSzm4WKA3wwLcDDFFVUtyJAPzh4GmysDiD75h/j5F8z8BGyviiUXoDKsXkjbfF3b3YgHFv2wAHic87Gg5So00hdULpTrvdm5ozK+P1tBAr6UQpdDt0q1mgrSEHq5/fvMsNFNmgybCZ7eBLs1whRBCCCGEEEIIIYQQUT/7PwLsyiCW74odVo8A9gGXgEfAj/Ac/zOwKUXzNwNfQiwf8yFwEdhLQdgJXAVeLdFMeQtsTcn8N0vEHQf6gUPAChqI9cAF4HUNHa2PwIEEj+Fg+J/LjT8GnAfWkWO2hyWH/7sFdS70hOt5rcBq4Hodm8BLYQmj30ieG9pCPzapne/jwNka24z+jVnngHcJHcN8aHdGvbJiJXAlxZXOJeA+cBrYH8xoDmoNQ5b/7kGKG7/9MVwOuUaFv8A9TSlpF6H8rp5tRIJfqfAtAlNcxvoKHLc2398p/IrADGckn/sZK/O7Cm6+qyjCKYsJ1UwEybtI9BPYkWUBhiNI2kWmJ1mZfyyCZF2kOtqob7dyOVEmG/9qeaZTNI1lUQCL14u5nMjPlFPHOkkXuVQAVADzs9DpF2BvhNMQZG+GM5CuAagA5meh0y/A3ginIcjeDGcgXQNo8AIIIYQQQgghhBBCCHLJb/bnPNZybY9WAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>

        </section>
    );
};

export default NavbarAdminPanel;