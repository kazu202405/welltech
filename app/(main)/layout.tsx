import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { PageLoader } from "@/components/ui/page-loader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageLoader />
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
