"use client";
import { FoundersSection } from "@/components/FoundersSection";
import { HowToApplySection } from "@/components/HowToApplySection";
import { NewCTASection } from "@/components/NewCTASection";
import { NewHomeOrangeCard } from "@/components/NewHomeOrangeCard";
import { RoleSection } from "@/components/RoleSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { WhyChooseDeepdiveSection } from "@/components/WhyChooseDeepdiveSection";
import Background from "./background";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto mt-[90px] w-full">
        {/* <CTASection /> */}
        <NewCTASection />
        <WhyChooseDeepdiveSection />
        <RoleSection />
        {/* <JourneySection /> */}
        <HowToApplySection />
        {/* <HomeOrangeCard /> */}
        <NewHomeOrangeCard />
        {/* <GlobalTrendsSection /> */}
        {/* <SpecialistsTeamSection /> */}
        <FoundersSection />
        <WhoWeAreSection />
      </main>
      <Background />
    </>
  );
}
