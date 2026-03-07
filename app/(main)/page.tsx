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
import { LineAccent } from "@/components/ui/line-accent";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LineAccent />
      <Strengths />
      <Works />
      <CaseTypes />
      <LineAccent />
      <PartnerTasks />
      <LineAccent variant="gray" />
      <IdealPartner />
      <LineAccent />
      <Flow />
      <LineAccent variant="gray" />
      <Faq />
      <RegistrationForm />
    </>
  );
}
