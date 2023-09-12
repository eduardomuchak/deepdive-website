"use client";
import { CTASection } from "@/components/CTASection";
import { GlobalTrendsSection } from "@/components/GlobalTrendsSection";
import { HomeOrangeCard } from "@/components/HomeOrangeCard";
import { JourneySection } from "@/components/JourneySection";
import { SpecialistsTeamSection } from "@/components/SpecialistsTeamSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { WhyChooseDeepdiveSection } from "@/components/WhyChooseDeepdiveSection";
import Background from "./background";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto mt-[90px] w-full">
        <CTASection />
        <WhyChooseDeepdiveSection />
        <JourneySection />
        <HomeOrangeCard />
        <GlobalTrendsSection />
        <SpecialistsTeamSection />
        <WhoWeAreSection />
      </main>
      <Background />
    </>
  );
}
