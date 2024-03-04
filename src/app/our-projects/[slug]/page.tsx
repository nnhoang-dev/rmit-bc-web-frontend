'use client';
import Agenda from "@/components/DetailProject/Agenda";
import InforProject from "@/components/DetailProject/InforProject";
import KeyTakeaways from "@/components/DetailProject/KeyTakeaways";
import PartnerSponsor from "@/components/DetailProject/PartnerSponsor";
import Recap from "@/components/DetailProject/Recap";
import Speaker from "@/components/DetailProject/Speaker";
import { usePathname } from "next/navigation";
export default function Page() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col">
            <div className="w-full h-96 bg-gray-300">Banner</div>
            <InforProject />
            <KeyTakeaways />
            <Speaker />
            <Agenda />
            <Recap />
            <PartnerSponsor />
        </div>
    );

}