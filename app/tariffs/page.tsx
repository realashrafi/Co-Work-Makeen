import React from 'react';
import Section1Tariffs from "@/app/tariffs/components/Section1Tariffs";
import Section2Tariffs from "@/app/tariffs/components/Section2Tariffs";
import Section3Tariffs from "@/app/tariffs/components/Section3Tariffs";
import Section4Tariffs from "@/app/tariffs/components/Section4Tariffs";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: 'تعرفه ها',
    description: 'فضای کار اشتراکی مکین',
}
const Tariffs = () => {
    return (
        <section>
            <Section1Tariffs />
            <Section2Tariffs />
            <Section3Tariffs />
            <Section4Tariffs />
        </section>
    );
};

export default Tariffs;