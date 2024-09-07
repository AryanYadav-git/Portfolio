import { IconBrandNextjs, IconBrandTwilio, IconBrandTypescript } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({project}:{project: ProjectCardParams}) => {
  const {title, description, url, github, readMore, stack, imgSrc} = project
  return (
    <div className="border flex flex-col gap-3 border-dark-500 p-4 rounded-xl">
      <Image src={imgSrc!} alt="" height={1000} width={1000} className=" rounded-xl " />
      <div className="flex flex-col  p-1">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-dark-600">{description}</p>
      </div>
      <div className="flex w-full gap-4">
        {url && <Link href={url} className="text-green-300 ">Website</Link>}
        <Link href={github!} className="text-blue-300 ">Github</Link>
        {readMore && <Link href={readMore} className="text-pink-300 ">Read More</Link>}
      </div>
      <div className="flex w-full gap-1 md:gap-2 ">
        {stack!.map(icon => (
          <div key={icon} className="flex items-center  text-xs md:text-sm  text-cyan-300">
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard