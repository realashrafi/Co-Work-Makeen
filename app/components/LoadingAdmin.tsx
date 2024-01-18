import React from 'react';

const LoadingAdmin = () => {
    return (
        <div className={'w-[100%] h-[100vh] bg-[#0C1E41] flex justify-center items-center '}>
        <div
            className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(#FF792C_0deg,#FF792C_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(#0C1E41_0deg,#0C1E41_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#0B99DE_0deg,#0B99DE_180deg,transparent_180deg,transparent_360deg)]"
        >
            <span
                className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#FF792C_0deg,#FF792C_180deg,transparent_180deg,transparent_360deg)]"
            >
            </span>
        </div>
        </div>
    );
};

export default LoadingAdmin;