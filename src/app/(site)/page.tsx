import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import HomeServicesTeaser from "@/components/HomeServicesTeaser";
import HomeTransformTeaser from "@/components/HomeTransformTeaser";
import HomeTimelapseSection from "@/components/HomeTimelapseSection";
import HomeReferenzenTeaser from "@/components/HomeReferenzenTeaser";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "TRAVEDACH Bedachungen: Handwerk mit Höhe | Demo-Website",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <HomeServicesTeaser />
      <HomeTransformTeaser />
      <HomeTimelapseSection />
      <HomeReferenzenTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
