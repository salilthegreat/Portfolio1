'use client'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { usePathname } from 'next/navigation'

// export const metadata = {
//     title: "Salil Das | Projects",
//     description: "A portfolio website made with NextJs"
// }

const FramerImage = motion(Image)


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full p-12 flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2
            sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
                <FramerImage whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} src={img} alt={title}
                priority
                sizes='(max-width:768px) 100vw
                (max-width:1200px) 50vw
                50vw'
                 className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark py-2 px-6 text-lg font-semibold   md:p-2 md:px-2 md:text-base'>Visit Project</Link>
                </div>

            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <FramerImage whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}  src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark '>{summary}</p> */}
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className=' rounded-lg text-dark dark:text-light   text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
                </div>

            </div>
        </article>
    )
}

const Projects = () => {
    const pathname = usePathname()
    console.log(pathname.split("/")[1])
    return (
        <>
        <TransitionEffect/>
        <div className='w-full  flex flex-col items-center justify-center dark:bg-dark'>
            <div className='p-14'>
                <AnimatedText text={"Imagination Trumps Knowledge!"} className={'mb-16 lg:!text-7xl sm:!6xl xs:!text-4xl sm:!mb-8'} />
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title='Crypto Screener Application'
                            summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />
                    </div>

                    <div className='col-span-6 md:col-span-12'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title='Crypto Screener Application'
                            summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />                    </div>
                    <div className='col-span-6 md:col-span-12'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            type='Featured Project'
                            img={project1}
                            github='https://github.com' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects