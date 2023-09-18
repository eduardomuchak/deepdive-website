"use client";
import { FoundersSection } from "@/components/FoundersSection";
import { GlobalTrendsSection } from "@/components/GlobalTrendsSection";
import { HomeOrangeCard } from "@/components/HomeOrangeCard";
import { JourneySection } from "@/components/JourneySection";
import { NewCTASection } from "@/components/NewCTASection";
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
        <JourneySection />
        <HomeOrangeCard />
        <GlobalTrendsSection />
        {/* <SpecialistsTeamSection /> */}
        <FoundersSection />
        <WhoWeAreSection />
      </main>
      <Background />
    </>
  );
}
