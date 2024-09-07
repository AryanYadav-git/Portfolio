import { Header, Projects, Summary } from "@/components/sections";
import Featured from "@/components/sections/Featured";

export default function Home() {
  return(
    <div className=" px-4 py-2 flex flex-col gap-8 
    ">
      <Header />
      <Summary/>
      <Projects />
      <Featured/>
    </div>
  )
}
