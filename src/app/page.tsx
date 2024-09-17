import HomeHeader from "@/components/atoms/home-header/homeheader";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="px-16  h-screen bg-[#eff5f5] ">
      <div className="  h-full overflow-hidden">
        <HomeHeader />
        <main>
          <div className="flex flex-col items-center py-14 gap-20">
            <h2 className="text-xl font-medium text-slate-300">
              Optimize Growth
            </h2>
            <h1 className="text-5xl text-center font-black text-neutral-600 w-[776px]">
              Streamline Your Goals with Our KPI & Projrct Management Platform
            </h1>
            <p className="text-xl text-center font-black text-neutral-600 w-[776px]">
              Our innovative platform offers a robust solution to help you stay
              organized, focused, and on track to schieve your strategic
              objectives
            </p>
            <div className="flex gap-12">
              <Button className="text-xl text-center h-10 font-bold w-[145px]">
                Try it free
              </Button>
              <Button
                variant="secondary"
                className="text-xl text-center h-10 font-bold w-[145px]"
              >
                Register
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
