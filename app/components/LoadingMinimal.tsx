import React from 'react';

const LoadingMinimal = () => {
    return (
        <div className={'w-[30px] h-[30px] mx-auto flex justify-center items-center '}>
            <div className="flex justify-center items-center h-screen">
                <div
                    className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#FF792C]"></div>
                {/*<div*/}
                {/*    className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#FF792C] ml-3"></div>*/}
                {/*<div*/}
                {/*    className="animate-spin ease-linear rounded-full w-4 h-4 border-t-2 border-b-2 border-[#FF792C] ml-3"></div>*/}
            </div>

        </div>
    );
};

export default LoadingMinimal;