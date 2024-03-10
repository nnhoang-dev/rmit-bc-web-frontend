'use client';
import Agenda from "@/components/DetailProject/Agenda";
import InforProject from "@/components/DetailProject/InforProject";
import KeyTakeaways from "@/components/DetailProject/KeyTakeaways";
import PartnerSponsor from "@/components/DetailProject/PartnerSponsor";
import Recap from "@/components/DetailProject/Recap";
import Speaker from "@/components/DetailProject/Speaker";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { allEvents } from "@/lib/data";
import { event } from "@/lib/interface";

export default function Page() {
    const pathname = usePathname();
    const href = pathname.split('/')[2];

    const data: event[] = allEvents.filter((v) => v.slug == href);
    return (
        <>
            <Image alt="Picture of the author"
                width={500}
                height={500}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                }}
                loader={() => data[0].picture}
                src={'me.png'}
            />
            <div className="max-w-screen-xl mx-auto flex flex-col">
                <InforProject project={data[0]} />
                <KeyTakeaways project={data[0]} />
                <Speaker project={data[0]} />
                <Agenda project={data[0]} />
                <Recap project={data[0]} />
                <PartnerSponsor project={data[0]} />
            </div>
        </>
    );

}