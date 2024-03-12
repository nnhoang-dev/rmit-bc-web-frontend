'use client';
import Agenda from "@/components/DetailProject/Agenda";
import KeyTakeaways from "@/components/DetailProject/KeyTakeaways";
import PartnerSponsor from "@/components/DetailProject/PartnerSponsor";
import Recap from "@/components/DetailProject/Recap";
import Speaker from "@/components/DetailProject/Speaker";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { allEvents } from "@/lib/data";
import { event } from "@/lib/interface";
import IntroProject from "@/components/DetailProject/InforProject";

export default function Page() {
    const pathname = usePathname();
    const href = pathname.split('/')[2];

    const data: event = allEvents.filter((v) => v.slug == href)[0];
    return (
        <>
            <Image alt="Picture of the author"
                width={500}
                height={500}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                }}
                loader={() => data.picture}
                src={'me.png'}
            />
            <div className="max-w-screen-lg mx-auto flex flex-col">
                {data.introduction && <IntroProject project={data} />}
                {data.keyTakeaways.length != 0 && <KeyTakeaways project={data} />}
                {data.speakers.length != 0 && <Speaker project={data} />}
                {data.agenda.length != 0 && <Agenda project={data} />}
                {data.recap && <Recap project={data} />}
                {data.partner && <PartnerSponsor project={data} />}
            </div>
        </>
    );

}