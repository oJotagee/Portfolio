import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
