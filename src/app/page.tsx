import WhatWeDo from "@/components/Home/WhatWeDo";
import NationalProjects from "@/components/Home/NationalProjects";
import OurPartner from "@/components/Home/OurPartner";
import Banner from "@/components/Home/Banner";

export default function Home() {
  return (
    <div className=" w-full ">
      <Banner />
      <div className='max-w-screen-lg mx-auto text-black pt-20 px-2'>
        <WhatWeDo />
        <NationalProjects />
        <OurPartner />
      </div>
    </div>
  );
}
