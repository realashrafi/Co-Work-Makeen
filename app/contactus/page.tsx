import React from 'react';
import Section1ContactUs from "@/app/contactus/components/Section1ContactUs";
import Section2ContactUs from "@/app/contactus/components/Section2ContactUs";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: 'تماس با ما',
    description: 'فضای کار اشتراکی مکین',
}
const contactUs = () => {
    return (
        <section className={'bg-[#002256]'}>
            <Section1ContactUs />
            <Section2ContactUs />
        </section>
    );
};

export default contactUs;