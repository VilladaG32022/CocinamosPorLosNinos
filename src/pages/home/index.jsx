import React from "react";
import HomeSection from "../../components/HomeSection/HomeSection";
/* import DailySection from "../../components/DailySection/DailySection"; */
import VolunteerSection from "../../components/VolunteerSection/VolunteerSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import DonationSection from "../../components/DonationSection/DonationSection";


export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <DonationSection />
{/*       <DailySection /> */}
      <VolunteerSection />
    </>
  );
}
