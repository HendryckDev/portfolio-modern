import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Main />
        <Grid />
        <Projects />
        <Experiencia />
        <Footer />
      </div>
    </main>
  );
}
