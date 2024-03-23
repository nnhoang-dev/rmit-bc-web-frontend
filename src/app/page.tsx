import WhatWeDo from "@/components/Home/WhatWeDo";
import NationalProjects from "@/components/Home/NationalProjects";
import OurPartner from "@/components/Home/OurPartner";
import Banner from "@/components/Home/Banner";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <div className='max-w-screen-lg mx-auto px-2 text-black pt-10 text-base sm:text-xs md:text-sm lg:text-xl' >
        <WhatWeDo />
        <NationalProjects />
        <OurPartner />
      </div>
    </div>
  );
}
