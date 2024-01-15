import React from 'react';
import Image from "next/image";
import { MdOutlineUpdate } from "react-icons/md";
const data = [
    {
        id: 1,
        img: "/cardDoc3.png",
        title: 'خلق آثار هنری در طراحی رابط کاربری',
        content: 'اخیرا از هوش مصنوعی به عنوان ابزاری که سرعت کار یک طراح را بالا میبرد رونمایی شده است.',
        date: '14 مهر 1402',
        link: ''
    }, {
        id: 2,
        img: "/cardDoc2.png",
        title: 'هوش مصنوعی دستیار برنامه نویسان',
        content: 'اخیرا از هوش مصنوعی به عنوان ابزاری که سرعت کار یک طراح را بالا میبرد رونمایی شده است.',
        date: '14 مهر 1402',
        link: ''
    }, {
        id: 3,
        img: "/cardDoc1.png",
        title: 'خلق آثار هنری در طراحی رابط کاربری',
        content: 'اخیرا از هوش مصنوعی به عنوان ابزاری که سرعت کار یک طراح را بالا میبرد رونمایی شده است.',
        date: '14 مهر 1402',
        link: ''
    },
]
const Section2News = () => {
    return (
        <div className={''}>
            <div className={'flex justify-end mr-[7.6%] pb-[24px]'}>
                <p className={'text-[#FFFEFF] text-[22px] border-r-[2px] pr-[13px] border-[#FF792C]'}>مقالات</p>
            </div>
            <div
                className={'lg:w-[85%] flex lg:h-[541px] bg-[#0A2E65] justify-center lg:flex-nowrap flex-wrap rounded-[12px] mx-auto pt-[40px] pb[40px] lg:pr-[20px] lg:pl-[20px]'}>
                {data.map(card => (
                    <div key={card.id} className={'flex-col lg:w-[32.3%] lg:mx-[16px] my-4 w-[90%] bg-[#002256] h-[461px] rounded-[12px]'}>
                        <div className={'w-[100%] rounded-t-[12px] h-[266px]'}>
                            <Image src={card.img} width={372} height={266} alt={''}/>
                        </div>
                        <div className={'pt-[15px] text-[#0B99DE] text-[18px] pr-[25px]'} style={{direction:"rtl"}}>{card.title}</div>
                        <div className={'pt-[16px]  text-[#FFFEFF] text-[16px] px-[25px]'} style={{direction:"rtl"}}>{card.content}</div>
                        <div className={' flex justify-between pt-[10%] px-[25px]'}>
                            <div className={'flex items-center text-white text-xs font-normal'} dir={'rtl'}><MdOutlineUpdate className={' w-5 h-5 ml-[5px]'}/>{card.date}</div>
                            <div>
                                <svg width="104" height="24" viewBox="0 0 104 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.165 16H30.8914C30.4841 16 30.1087 15.9194 29.765 15.7582C29.765 16.3521 29.6823 16.8824 29.5169 17.3491C29.3514 17.8158 29.1096 18.2103 28.7914 18.5327C28.4732 18.8594 28.0808 19.1076 27.6141 19.2773C27.1517 19.447 26.6193 19.5318 26.0169 19.5318H25.1387V18.3291H26.0169C26.4538 18.3291 26.8314 18.2761 27.1496 18.17C27.472 18.0682 27.7372 17.9091 27.945 17.6927C28.1572 17.4764 28.312 17.2006 28.4096 16.8655C28.5114 16.5303 28.5623 16.1315 28.5623 15.6691V11.6982H29.765V13.8045C29.765 14.0421 29.8138 14.2288 29.9114 14.3645C30.0132 14.4961 30.1299 14.5936 30.2614 14.6573C30.3929 14.7209 30.5181 14.7612 30.6369 14.7782C30.7599 14.7909 30.8447 14.7973 30.8914 14.7973H31.165V16ZM37.8531 14.7973V16H36.7394C36.3534 16 36.0119 15.9448 35.7149 15.8345C35.4222 15.7242 35.1867 15.5588 35.0085 15.3382C34.5673 15.7794 33.914 16 33.0485 16H30.8849V14.7973H33.0485C33.354 14.7973 33.5958 14.7676 33.774 14.7082C33.9522 14.6445 34.0858 14.5682 34.1749 14.4791C34.2682 14.3858 34.3276 14.2839 34.3531 14.1736C34.3828 14.0591 34.3976 13.9509 34.3976 13.8491V11.6982H35.594V13.8045C35.594 13.9615 35.6173 14.0952 35.664 14.2055C35.7149 14.3158 35.7764 14.4091 35.8485 14.4855C35.9206 14.5576 36.0012 14.6148 36.0903 14.6573C36.1837 14.6997 36.2728 14.7315 36.3576 14.7527C36.4425 14.7739 36.5188 14.7867 36.5867 14.7909C36.6546 14.7952 36.7055 14.7973 36.7394 14.7973H37.8531ZM35.7913 10.1455L34.7858 9.12727L35.7785 8.09636L36.8094 9.12727L35.7913 10.1455ZM33.354 10.1327L32.3485 9.11455L33.3413 8.08364L34.3722 9.11455L33.354 10.1327ZM48.7568 16C48.3495 16 47.9889 15.9427 47.6749 15.8282C47.361 15.7094 47.098 15.5333 46.8859 15.3H46.8795L46.784 15.4018C46.5762 15.6012 46.3407 15.7518 46.0777 15.8536C45.8146 15.9512 45.5325 16 45.2313 16C44.438 16 43.8228 15.7709 43.3859 15.3127C43.1737 15.5376 42.9298 15.7073 42.654 15.8218C42.3783 15.9321 42.0983 15.9915 41.814 16H41.7313C40.9804 15.9873 40.3949 15.7667 39.9749 15.3382C39.9495 15.3721 39.9198 15.4018 39.8859 15.4273C39.4574 15.8091 38.8528 16 38.0722 16H37.5759V14.7973H38.0722C38.3437 14.7973 38.5622 14.7718 38.7277 14.7209C38.8974 14.67 39.0289 14.5958 39.1222 14.4982C39.2155 14.3964 39.2771 14.2755 39.3068 14.1355C39.3407 13.9912 39.3577 13.8279 39.3577 13.6455V11.7045H40.5604V13.6136C40.5604 14.0252 40.6601 14.3242 40.8595 14.5109C41.0589 14.6976 41.3707 14.793 41.7949 14.7973C41.8713 14.793 41.9646 14.7782 42.0749 14.7527C42.1895 14.7273 42.2977 14.6742 42.3995 14.5936C42.5055 14.513 42.5968 14.3985 42.6731 14.25C42.7495 14.0973 42.7877 13.8958 42.7877 13.6455V11.7045H43.984V13.6136C43.984 14.0252 44.0816 14.3264 44.2768 14.5173C44.4762 14.7039 44.7943 14.7973 45.2313 14.7973C45.3543 14.7973 45.4774 14.7782 45.6004 14.74C45.7234 14.7018 45.8337 14.6382 45.9313 14.5491C46.0289 14.46 46.1095 14.3455 46.1731 14.2055C46.2368 14.0612 46.2728 13.8852 46.2813 13.6773V11.7045H47.484V13.6773C47.4925 14.0676 47.6007 14.3518 47.8086 14.53C48.0165 14.7082 48.3325 14.7973 48.7568 14.7973H49.1449V16H48.7568ZM44.2513 7.31364L43.3477 8.19818L42.4568 7.31364L43.3731 6.40364L44.2513 7.31364ZM44.5631 10.19L43.5577 9.17182L44.5504 8.14091L45.5813 9.17182L44.5631 10.19ZM42.1259 10.1773L41.1204 9.15909L42.1131 8.12818L43.144 9.15909L42.1259 10.1773ZM55.8453 14.7973V16H54.7316C54.3456 16 54.004 15.9448 53.7071 15.8345C53.4143 15.7242 53.1789 15.5588 53.0007 15.3382C52.5595 15.7794 51.9062 16 51.0407 16H48.8771V14.7973H51.0407C51.3462 14.7973 51.588 14.7676 51.7662 14.7082C51.9443 14.6445 52.078 14.5682 52.1671 14.4791C52.2604 14.3858 52.3198 14.2839 52.3453 14.1736C52.375 14.0591 52.3898 13.9509 52.3898 13.8491V11.6982H53.5862V13.8045C53.5862 13.9615 53.6095 14.0952 53.6562 14.2055C53.7071 14.3158 53.7686 14.4091 53.8407 14.4855C53.9128 14.5576 53.9934 14.6148 54.0825 14.6573C54.1759 14.6997 54.265 14.7315 54.3498 14.7527C54.4346 14.7739 54.511 14.7867 54.5789 14.7909C54.6468 14.7952 54.6977 14.7973 54.7316 14.7973H55.8453ZM54.0889 18.4627L53.058 19.4936L52.0653 18.4627L53.0707 17.4445L54.0889 18.4627ZM51.6516 18.4755L50.6207 19.5064L49.628 18.4755L50.6334 17.4573L51.6516 18.4755ZM58.9917 10.82C59.0002 10.8455 59.0171 10.9133 59.0426 11.0236C59.068 11.1339 59.0956 11.2718 59.1253 11.4373C59.1593 11.5985 59.1953 11.7788 59.2335 11.9782C59.2717 12.1733 59.3056 12.3727 59.3353 12.5764C59.365 12.7758 59.3905 12.9688 59.4117 13.1555C59.4329 13.3421 59.4435 13.5055 59.4435 13.6455C59.4435 14.0527 59.3756 14.4048 59.2399 14.7018C59.1083 14.9945 58.9344 15.2385 58.718 15.4336C58.5059 15.6245 58.2662 15.7667 57.9989 15.86C57.7317 15.9533 57.4623 16 57.1908 16H55.568V14.7973H57.1908C57.2544 14.7973 57.3435 14.7888 57.458 14.7718C57.5768 14.7506 57.6935 14.7018 57.808 14.6255C57.9268 14.5491 58.0286 14.4345 58.1135 14.2818C58.2026 14.1291 58.2471 13.917 58.2471 13.6455C58.2471 13.5521 58.2386 13.4355 58.2217 13.2955C58.2089 13.1512 58.1899 12.9985 58.1644 12.8373C58.1432 12.6718 58.1177 12.5042 58.088 12.3345C58.0583 12.1606 58.0286 11.9973 57.9989 11.8445C57.9693 11.6918 57.9417 11.5561 57.9162 11.4373C57.8908 11.3185 57.8696 11.2294 57.8526 11.17L58.9917 10.82ZM56.7899 18.31L57.8717 17.2155L58.9789 18.3227L57.8844 19.4173L56.7899 18.31ZM72.4769 16H72.3178C71.639 16 71.0451 15.8558 70.536 15.5673C70.0312 15.2745 69.643 14.8673 69.3715 14.3455C69.2357 14.5321 69.0724 14.6955 68.8815 14.8355C68.6948 14.9712 68.4827 15.0921 68.2451 15.1982C68.1093 15.2533 67.9524 15.2979 67.7742 15.3318C67.596 15.3658 67.4072 15.3827 67.2078 15.3827C67.0084 15.3827 66.8027 15.3594 66.5906 15.3127C66.3827 15.2661 66.179 15.1876 65.9796 15.0773C65.6742 14.9161 65.4281 14.7039 65.2415 14.4409C65.059 14.1736 64.9381 13.8597 64.8787 13.4991C64.849 13.3336 64.8342 13.1703 64.8342 13.0091C64.8342 12.7376 64.8872 12.4342 64.9933 12.0991C65.1036 11.7639 65.3242 11.4245 65.6551 11.0809C66.2363 10.487 67.0572 10.033 68.1178 9.71909L67.9969 9.03182L69.1678 8.78364C69.2696 9.20788 69.3587 9.58545 69.4351 9.91636C69.5115 10.243 69.5793 10.5379 69.6387 10.8009C69.6515 10.8518 69.6706 10.9367 69.696 11.0555C69.7257 11.1742 69.7596 11.3121 69.7978 11.4691C69.836 11.6218 69.8763 11.7873 69.9187 11.9655C69.9612 12.1436 70.0036 12.3176 70.046 12.4873C70.0884 12.657 70.1287 12.8161 70.1669 12.9645C70.2051 13.113 70.239 13.2361 70.2687 13.3336C70.3536 13.6518 70.4787 13.9085 70.6442 14.1036C70.8096 14.2945 70.9899 14.443 71.1851 14.5491C71.3803 14.6509 71.5775 14.7188 71.7769 14.7527C71.9806 14.7824 72.1609 14.7973 72.3178 14.7973H72.4769V16ZM68.436 10.8773C68.016 11.0003 67.6448 11.1467 67.3224 11.3164C66.9999 11.4861 66.7327 11.6748 66.5206 11.8827C66.3127 12.0864 66.1642 12.307 66.0751 12.5445C66.0157 12.7015 65.986 12.8627 65.986 13.0282C65.986 13.113 65.9945 13.2 66.0115 13.2891C66.0412 13.4673 66.1048 13.6179 66.2024 13.7409C66.2999 13.8597 66.4145 13.9552 66.546 14.0273C66.6393 14.0824 66.7412 14.1227 66.8515 14.1482C66.9618 14.1694 67.0721 14.18 67.1824 14.18H67.246C67.3351 14.18 67.4263 14.1736 67.5196 14.1609C67.613 14.1439 67.6999 14.1185 67.7806 14.0845C68.3151 13.8639 68.6269 13.463 68.716 12.8818C68.733 12.7461 68.7415 12.6188 68.7415 12.5C68.7415 12.4364 68.7351 12.3473 68.7224 12.2327C68.7096 12.1182 68.6969 12.0312 68.6842 11.9718L68.436 10.8773ZM78.1131 16C78.041 16 77.9583 15.9915 77.8649 15.9745C77.7716 15.9533 77.6613 15.9152 77.534 15.86C77.4067 15.8048 77.2604 15.7264 77.0949 15.6245C76.9295 15.5227 76.7364 15.3891 76.5158 15.2236C76.0237 15.4909 75.4489 15.6882 74.7913 15.8155C74.1337 15.9385 73.3998 16 72.5895 16H72.2204V14.7973H72.5895C73.2004 14.7973 73.7477 14.7633 74.2313 14.6955C74.7149 14.6233 75.1243 14.5215 75.4595 14.39C75.2389 14.2033 75.0183 14.0103 74.7977 13.8109C74.5813 13.6115 74.3819 13.4248 74.1995 13.2509C74.0171 13.0727 73.858 12.92 73.7222 12.7927C73.5907 12.6612 73.5016 12.57 73.4549 12.5191V12.2645C73.4549 12.1839 73.4592 12.097 73.4677 12.0036C73.4761 11.9061 73.4931 11.8064 73.5186 11.7045C73.544 11.6027 73.5822 11.5009 73.6331 11.3991C73.684 11.293 73.7519 11.1912 73.8367 11.0936C74.1592 10.733 74.6725 10.5527 75.3767 10.5527H77.4831C77.8352 10.5527 78.1534 10.6397 78.4377 10.8136C78.7219 10.9833 78.9298 11.2188 79.0613 11.52C79.1589 11.7152 79.2055 11.9082 79.2013 12.0991C79.2013 12.2858 79.1652 12.4703 79.0931 12.6527C79.0252 12.8309 78.9298 13.0048 78.8067 13.1745C78.688 13.34 78.5564 13.5012 78.4122 13.6582C78.268 13.8109 78.1195 13.9573 77.9667 14.0973C77.8183 14.2373 77.6804 14.3688 77.5531 14.4918C77.6464 14.5555 77.7271 14.6085 77.7949 14.6509C77.8628 14.6891 77.918 14.7188 77.9604 14.74C78.0071 14.7612 78.041 14.7761 78.0622 14.7845C78.0877 14.7888 78.1046 14.793 78.1131 14.7973H80.4422V16H78.1131ZM74.6704 12.0355C74.7552 12.1161 74.874 12.2285 75.0267 12.3727C75.1795 12.5127 75.3449 12.6655 75.5231 12.8309C75.7055 12.9964 75.888 13.1618 76.0704 13.3273C76.2571 13.4927 76.4246 13.637 76.5731 13.76C76.8022 13.5776 77.0207 13.3845 77.2286 13.1809C77.4407 12.9773 77.6528 12.7418 77.8649 12.4745C77.9116 12.4152 77.9519 12.3452 77.9858 12.2645C77.9986 12.2348 78.0049 12.203 78.0049 12.1691C78.0049 12.1182 77.9922 12.0673 77.9667 12.0164C77.9328 11.9527 77.8777 11.8933 77.8013 11.8382C77.7249 11.783 77.6189 11.7555 77.4831 11.7555H75.3767C75.2537 11.7555 75.1519 11.7618 75.0713 11.7745C74.9949 11.783 74.9313 11.7958 74.8804 11.8127C74.8337 11.8297 74.7977 11.8467 74.7722 11.8636C74.751 11.8764 74.7361 11.8891 74.7277 11.9018C74.7149 11.9103 74.7043 11.9273 74.6958 11.9527C74.6874 11.9739 74.6789 12.0015 74.6704 12.0355ZM79.5485 14.7973H79.7649C80.1552 14.7973 80.4585 14.7697 80.6749 14.7145C80.8955 14.6552 81.0652 14.5661 81.184 14.4473C81.2688 14.3667 81.3303 14.2542 81.3685 14.11C81.4109 13.9615 81.4321 13.7664 81.4321 13.5245V6.91273H82.6285V13.5245C82.6285 13.6688 82.6221 13.8194 82.6094 13.9764C82.5967 14.1291 82.5691 14.2839 82.5267 14.4409C82.4843 14.5979 82.4228 14.7527 82.3421 14.9055C82.2615 15.0539 82.1534 15.1939 82.0176 15.3255C81.8946 15.44 81.7609 15.5397 81.6167 15.6245C81.4767 15.7052 81.3155 15.7752 81.1331 15.8345C80.9506 15.8897 80.747 15.9321 80.5221 15.9618C80.2973 15.9873 80.0449 16 79.7649 16H79.5485V14.7973ZM87.3871 16C86.9417 15.9958 86.5726 15.9661 86.2798 15.9109C85.9914 15.8515 85.7453 15.7688 85.5417 15.6627C85.3423 15.5524 85.1811 15.4167 85.058 15.2555C84.9392 15.09 84.8459 14.8991 84.778 14.6827C84.7101 14.4621 84.6656 14.2161 84.6444 13.9445C84.6232 13.673 84.6126 13.3718 84.6126 13.0409V6.91909H85.8153V13.0409C85.8153 13.41 85.8259 13.7091 85.8471 13.9382C85.8726 14.1673 85.9341 14.3455 86.0317 14.4727C86.1335 14.5958 86.2841 14.6806 86.4835 14.7273C86.6871 14.7697 86.9883 14.793 87.3871 14.7973V16ZM96.6882 16H87.1364V14.7973H88.5619C88.6679 14.6361 88.7719 14.4664 88.8737 14.2882C88.9755 14.11 89.0816 13.9382 89.1919 13.7727V6.91909H90.3882V12.0545C90.5706 11.8382 90.7594 11.6367 90.9546 11.45C91.154 11.2591 91.3619 11.0958 91.5782 10.96C91.7988 10.8242 92.0279 10.7182 92.2655 10.6418C92.5073 10.5612 92.7597 10.5209 93.0228 10.5209C93.3325 10.5209 93.6379 10.5782 93.9391 10.6927C94.2403 10.8073 94.5076 10.9833 94.7409 11.2209C94.9785 11.4585 95.1694 11.7597 95.3137 12.1245C95.4579 12.4894 95.53 12.9221 95.53 13.4227C95.53 13.707 95.5003 13.9615 95.4409 14.1864C95.3858 14.4112 95.3073 14.6148 95.2055 14.7973H96.6882V16ZM92.9528 14.7973C93.1479 14.7973 93.3282 14.7697 93.4937 14.7145C93.6634 14.6594 93.8097 14.5767 93.9328 14.4664C94.0558 14.3518 94.1512 14.2097 94.2191 14.04C94.2912 13.8661 94.3273 13.6603 94.3273 13.4227C94.3273 12.8839 94.2128 12.4661 93.9837 12.1691C93.7546 11.8679 93.4343 11.7173 93.0228 11.7173C92.8276 11.7173 92.6367 11.7618 92.45 11.8509C92.2634 11.9358 92.0788 12.0545 91.8964 12.2073C91.7182 12.3558 91.5443 12.5318 91.3746 12.7355C91.2049 12.9348 91.0394 13.1491 90.8782 13.3782C90.7212 13.603 90.5685 13.8364 90.42 14.0782C90.2716 14.3158 90.1294 14.547 89.9937 14.7718C89.9852 14.7803 89.9809 14.7888 89.9809 14.7973H92.9528ZM101.047 15.1027C101.077 15.1027 101.117 15.1006 101.168 15.0964C101.223 15.0921 101.28 15.0752 101.34 15.0455C101.403 15.0158 101.465 14.9712 101.524 14.9118C101.588 14.8482 101.643 14.7612 101.69 14.6509C101.741 14.5364 101.781 14.3921 101.811 14.2182C101.844 14.04 101.861 13.8236 101.861 13.5691C101.861 13.5224 101.857 13.4482 101.849 13.3464C101.84 13.2445 101.821 13.1321 101.791 13.0091C101.762 12.8818 101.717 12.7524 101.658 12.6209C101.603 12.4894 101.526 12.3685 101.429 12.2582C101.331 12.1479 101.212 12.0588 101.072 11.9909C100.932 11.9188 100.763 11.8827 100.563 11.8827C100.377 11.8827 100.218 11.9167 100.086 11.9845C99.9587 12.0482 99.8505 12.1373 99.7615 12.2518C99.6724 12.3664 99.5981 12.5021 99.5387 12.6591C99.4793 12.8118 99.4242 12.9794 99.3733 13.1618C99.3224 13.34 99.2715 13.5288 99.2205 13.7282C99.1696 13.9233 99.1102 14.1185 99.0424 14.3136C99.263 14.4239 99.4666 14.5279 99.6533 14.6255C99.8399 14.723 100.014 14.8079 100.175 14.88C100.336 14.9479 100.487 15.003 100.627 15.0455C100.771 15.0836 100.911 15.1027 101.047 15.1027ZM100.563 10.6864C100.979 10.6864 101.34 10.767 101.645 10.9282C101.955 11.0852 102.211 11.2973 102.415 11.5645C102.619 11.8318 102.769 12.1394 102.867 12.4873C102.969 12.8352 103.02 13.1958 103.02 13.5691C103.02 13.9806 102.984 14.3348 102.911 14.6318C102.844 14.9288 102.752 15.1791 102.638 15.3827C102.523 15.5821 102.394 15.7433 102.25 15.8664C102.11 15.9894 101.965 16.0827 101.817 16.1464C101.673 16.21 101.533 16.2524 101.397 16.2736C101.261 16.2948 101.144 16.3055 101.047 16.3055C100.839 16.3055 100.64 16.2842 100.449 16.2418C100.258 16.1994 100.063 16.1379 99.8633 16.0573C99.6639 15.9809 99.4539 15.8855 99.2333 15.7709C99.0169 15.6564 98.7772 15.527 98.5142 15.3827C98.1663 15.7942 97.7187 16 97.1715 16H96.4396V14.7973H97.1715C97.3327 14.7973 97.4642 14.7379 97.566 14.6191C97.6721 14.5003 97.7633 14.3455 97.8396 14.1545C97.916 13.9636 97.986 13.7452 98.0496 13.4991C98.1133 13.253 98.1854 13.0006 98.266 12.7418C98.3508 12.483 98.4505 12.2306 98.5651 11.9845C98.6796 11.7385 98.8239 11.52 98.9978 11.3291C99.176 11.1382 99.3902 10.9833 99.6405 10.8645C99.8951 10.7458 100.203 10.6864 100.563 10.6864Z" fill="#FF792C"/>
                                    <path d="M6.69246 5.88755C6.75057 5.9572 6.79667 6.03992 6.82812 6.13096C6.85957 6.222 6.87576 6.31959 6.87576 6.41814C6.87576 6.5167 6.85957 6.61429 6.82812 6.70533C6.79667 6.79637 6.75057 6.87908 6.69246 6.94873L2.13402 12.4177H14.375C14.5408 12.4177 14.6997 12.4968 14.8169 12.6374C14.9342 12.778 15 12.9688 15 13.1677C15 13.3666 14.9342 13.5573 14.8169 13.698C14.6997 13.8386 14.5408 13.9176 14.375 13.9176H2.13402L6.69246 19.3866C6.80973 19.5274 6.87561 19.7182 6.87561 19.9172C6.87561 20.1162 6.80973 20.3071 6.69246 20.4478C6.57519 20.5885 6.41613 20.6676 6.25029 20.6676C6.08444 20.6676 5.92539 20.5885 5.80811 20.4478L0.183298 13.6983C0.12519 13.6286 0.0790919 13.5459 0.0476403 13.4549C0.0161886 13.3638 0 13.2662 0 13.1677C0 13.0691 0.0161886 12.9715 0.0476403 12.8805C0.0790919 12.7895 0.12519 12.7067 0.183298 12.6371L5.80811 5.88755C5.86616 5.81782 5.93509 5.76251 6.01096 5.72477C6.08683 5.68703 6.16816 5.6676 6.25029 5.6676C6.33242 5.6676 6.41375 5.68703 6.48962 5.72477C6.56549 5.76251 6.63442 5.81782 6.69246 5.88755Z" fill="#FF792C"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2News;