import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Strengths } from "@/components/sections/strengths";
import { Works } from "@/components/sections/works";
import { CaseTypes } from "@/components/sections/case-types";
import { PartnerTasks } from "@/components/sections/partner-tasks";
import { IdealPartner } from "@/components/sections/ideal-partner";
import { Flow } from "@/components/sections/flow";
import { Faq } from "@/components/sections/faq";
import { RegistrationForm } from "@/components/sections/registration-form";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Strengths />
      <Works />
      <CaseTypes />
      <PartnerTasks />
      <IdealPartner />
      <Flow />
      <Faq />
      <RegistrationForm />
    </>
  );
}
