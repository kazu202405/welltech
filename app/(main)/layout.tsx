import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
