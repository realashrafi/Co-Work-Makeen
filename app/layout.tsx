import React from "react";
import type {Metadata} from 'next'
import './globals.css'
import 'atropos/css'
import localFont from 'next/font/local'
import {StoreProvider} from "@/app/store/redux/StoreProvider";
import {ReactQueryProvider} from "@/app/store/react-query/ReactQueryProvider";

const myFont = localFont({
    src: './static-Font/IRANYekanRegularFaNum.ttf',
    display: 'swap'
})
export const metadata: Metadata = {
    title: 'فضای کار اشتراکی مکین',
    description: 'فضای کار اشتراکی مکین',
    manifest:"/manifest.webmanifest"
}

// export const metadata: Metadata = {
//     manifest: "/manifest.json", // we are accessing our manifest file here
//     title: "فضای کار اشتراکی مکین",
//
// };

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <StoreProvider>
                <html lang="en">
                <body className={myFont.className}>
                {children}
                </body>
                </html>
            </StoreProvider>
        </ReactQueryProvider>
    )
}
