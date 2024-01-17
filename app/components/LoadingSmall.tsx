import React from 'react';

const LoadingSmall = () => {
    return (
        <div className={'w-[50px] h-[50px] mx-auto flex justify-center items-center '}>
            <div className="flex justify-center items-center h-screen">
                <div
                    className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#FF792C]"></div>
            </div>

        </div>
    );
};

export default LoadingSmall;