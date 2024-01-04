import React from 'react';

const DoItemList = () => {
    return (
        <div className={'flex items-center  '}>
            <svg className={'ml-[35px] cursor-pointer'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="delete" clipPath="url(#clip0_2539_1796)">
                    <path id="Vector"
                          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
                          fill="#F53C2B"/>
                </g>
                <defs>
                    <clipPath id="clip0_2539_1796">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <svg className={'cursor-pointer'} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector"
                      d="M15.3208 0C14.6352 0 13.9495 0.262736 13.4261 0.789399L12.3159 1.90647L16.1054 5.71942L17.2156 4.60234C18.2615 3.54997 18.2615 1.84272 17.2156 0.789399C16.6922 0.262736 16.0065 0 15.3208 0ZM10.8948 3.33633L0 14.2985V18.1115H3.7895L14.6843 7.14927L10.8948 3.33633Z"
                      fill="#02794C"/>
            </svg>
        </div>
    );
};

export default DoItemList;