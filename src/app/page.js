import Image from 'next/image'
import ProfilePic from "../../public/images/profile/developer-pic-1.png"
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <div className="flex items-center justify-center text-dark w-full h-[calc(100vh-4rem)] dark:bg-dark dark:text-light ">
      <div className='flex items-center justify-between w-full p-14'>
        <div className='w-1/2'>
          <Image src={ProfilePic} alt='profilePic' className='h-full' priority 
          sizes='(max-width:768px) 100vw
          (max-width:1200px) 50vw
          50vw
          '  />
        </div>
        <div className='w-1/2 flex flex-col items-center self-center'>
          <h1></h1>
          <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='!text-6xl !text-left' />
          <p className='my-4 text-base font-medium'> As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
          <div className='flex items-center self-start mt-2'>
            <Link href={"/Salil Kumar Das.pdf"} target={"_blank"}
            className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
            border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'
            download={true}
            >Resume <LinkArrow className={"w-6 ml-1"}/>

            </Link>
            <Link href={"mailto:salilkumardas22@gmail.com"} target={"_blank"}
            className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
            >Contact</Link>
          </div>
        </div>
      </div>
      <HireMe/>
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={LightBulb} alt='' className='w-full h-auto'/>
      </div>
    </div>
  )
}
