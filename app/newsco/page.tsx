import React from 'react';
import Section1News from "@/app/newsco/components/Section1News";
import Section2News from "@/app/newsco/components/Section2News";
import Section3News from "@/app/newsco/components/Section3News";
import Section4News from "@/app/newsco/components/Section4News";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: 'اخبار کوورک',
    description: 'فضای کار اشتراکی مکین',
}
const News = () => {
    return (
        <section className={'bg-[#002256]'}>
            <Section1News/>
            <Section2News/>
            <Section3News/>
            <Section4News/>
        </section>
    );
};

export default News;