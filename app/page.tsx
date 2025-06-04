import { Header,Experience, Projects, Summary, Education, Footer } from "@/components/sections";
import AchievementsSection from "@/components/sections/Acheivements";
import Featured from "@/components/sections/Featured";

export default function Home() {
  return(
    <div className=" px-4 py-2 flex flex-col gap-8 
    ">
      <Header />
      <Summary/>
      <Experience/>
      <AchievementsSection/>
      <Projects />
      <Featured/>
      <Education/>
      <Footer/>
      <p className='font-mono font-extrabold flex w-full justify-center mt-6 text-sm md:text-base '>... Designed and Developed by Me /...</p>
    </div>
  )
}
