import WhatWeDo from "@/components/Home/WhatWeDo";
import NationalProjects from "@/components/Home/NationalProjects";

import OurPartner from "@/components/Home/OurPartner";
import Banner from "@/components/Home/Banner";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <div className='max-w-screen-xl mx-auto px-2 text-black pt-10 text-base' >
        <WhatWeDo />
        <NationalProjects />
        {/* <OurPartner /> */}
      </div>
    </div>
  );
}
