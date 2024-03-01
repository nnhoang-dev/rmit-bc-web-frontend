'use client';
import DetailProject from "@/components/DetailProject";
import { usePathname } from "next/navigation";
export default function Page() {
    const pathname = usePathname();
    return (
        <div>
            <div className="w-full h-96 bg-gray-300">Banner</div>
            <DetailProject />
        </div>
    );

}