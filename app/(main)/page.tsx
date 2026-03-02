import { Hero } from "@/components/sections/hero";
import { Strengths } from "@/components/sections/strengths";
import { CaseTypes } from "@/components/sections/case-types";
import { PartnerTasks } from "@/components/sections/partner-tasks";
import { IdealPartner } from "@/components/sections/ideal-partner";
import { Flow } from "@/components/sections/flow";
import { Faq } from "@/components/sections/faq";
import { RegistrationForm } from "@/components/sections/registration-form";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider from="#0a1628" to="#ffffff" type="curve" />
      <Strengths />
      <SectionDivider from="#ffffff" to="#f8fafc" type="wave" />
      <CaseTypes />
      <SectionDivider from="#f8fafc" to="#0a1628" type="angle" />
      <PartnerTasks />
      <SectionDivider from="#0a1628" to="#ffffff" type="curve" />
      <IdealPartner />
      <SectionDivider from="#ffffff" to="#f8fafc" type="wave" />
      <Flow />
      <SectionDivider from="#f8fafc" to="#ffffff" type="curve" />
      <Faq />
      <SectionDivider from="#ffffff" to="#152a45" type="angle" />
      <RegistrationForm />
      <SectionDivider from="#152a45" to="#060e1a" type="wave" />
    </>
  );
}
