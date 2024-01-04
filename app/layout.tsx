import React from "react";
import type {Metadata} from 'next'
import './globals.css'
import localFont from 'next/font/local'
import {StoreProvider} from "@/app/store/StoreProvider";

const myFont = localFont({
    src: './static-Font/IRANYekanRegularFaNum.ttf',
    display: 'swap'
})
export const metadata: Metadata = {
    title: 'فضای کار اشتراکی مکین',
    description: 'فضای کار اشتراکی مکین',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <StoreProvider>
            <html lang="en">
            <body className={myFont.className}>
            {children}
            </body>
            </html>
        </StoreProvider>
    )
}
