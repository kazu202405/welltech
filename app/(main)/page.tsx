import { Hero } from "@/components/sections/hero";
import { Strengths } from "@/components/sections/strengths";
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
      <Strengths />
      <CaseTypes />
      <PartnerTasks />
      <IdealPartner />
      <Flow />
      <Faq />
      <RegistrationForm />
    </>
  );
}
