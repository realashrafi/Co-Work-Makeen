'use client'
import React, {useState} from 'react';
import ReactModal from "react-modal";
import gifIcon from "@/app/components/data/movedIcon.gif";
import Image from "next/image";

const ImagePre = ({me}: any) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <img onClick={()=>setShowModal(true)}
                src={me?.profile_picture}
                className={'w-[60px]  cursor-pointer h-[60px] rounded-full mr-3'}
                alt={''}
            />
            <ReactModal style={{
                overlay: {
                    zIndex: 10,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#00000020',
                    backdropFilter: 'blur(5px)'
                },
                content: {
                    background: '#002256',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '24px',
                    outline: 'none',
                    padding: '0px',
                    border: 'none',
                }
            }} isOpen={showModal} className={'w-[90%] mt-20 mx-auto lg:w-[38%] '}>
                <Image src={gifIcon} alt={''}
                       className={'absolute opacity-50 lg:top-20 -top-[17%] scale-[90%] lg:-left-12'}/>
                <div className={'relative'}>
                    <div className={'text-orange-500 cursor-pointer absolute hover:scale-110 right-4 top-4 '} onClick={()=>setShowModal(false)}>X</div>
                    <img
                        src={me?.profile_picture}
                        className={'w-[100%] h-[100%] '}
                        alt={''}
                    />
                </div>
            </ReactModal>
        </div>
    );
};

export default ImagePre;