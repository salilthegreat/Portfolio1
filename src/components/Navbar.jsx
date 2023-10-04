'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'

const MotionLink = motion(Link)

const CustomLink = ({ href, title, className }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${pathname == href ? 'w-full' : 'w-0'} dark:bg-light `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className, toggle }) => {
    const pathname = usePathname()
    const router = useRouter()
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${pathname == href ? 'w-full' : 'w-0'} dark:bg-dark `}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:bg-dark dark:text-light relative lg:px-16 md:px-12 sm:px-8' onClick={handleClick}>
            <button className=' flex-col justify-center items-center hidden lg:flex'>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            {/* Desktop Menu */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title={"Home"} className="mr-4" />
                    <CustomLink href="/about" title={"About"} className="mx-4" />
                    <CustomLink href="/projects" title={"Projects"} className="mx-4" />
                    <CustomLink href="/articles" title={"Articles"} className="ml-4" />
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <MotionLink href={"https://twitter.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'
                    ><TwitterIcon /></MotionLink>
                    <MotionLink href={"https://github.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'><GithubIcon /></MotionLink>
                    <MotionLink href={"https://linkedin.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'><LinkedInIcon /></MotionLink>
                    <MotionLink href={"https://pintrest.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 bg-light rounded-full'><PinterestIcon /></MotionLink>
                    <MotionLink href={"https://dribbble.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 ml-3'><DribbbleIcon /></MotionLink>
                    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-6 flex items-center justify-center rounded-full  ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                        {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
                    </button>
                </nav>
            </div>
            {/* Mobile Menu */}
            {isOpen && <motion.div 
            initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
            animate={{scale:1,opacity:1}}
            className='min-w-[70vw] z-30  flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 hidden lg:flex'>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href="/" title={"Home"}  toggle={handleClick} />
                    <CustomMobileLink href="/about" title={"About"}  toggle={handleClick} />
                    <CustomMobileLink href="/projects" title={"Projects"}  toggle={handleClick} />
                    <CustomMobileLink href="/articles" title={"Articles"}  toggle={handleClick} />
                </nav>
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <MotionLink href={"https://twitter.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3 sm:mx-1'
                    ><TwitterIcon /></MotionLink>
                    <MotionLink href={"https://github.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3  bg-light rounded-full dark:bg-dark sm:mx-1'><GithubIcon /></MotionLink>
                    <MotionLink href={"https://linkedin.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 sm:mx-1'><LinkedInIcon /></MotionLink>
                    <MotionLink href={"https://pintrest.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 bg-light rounded-full sm:mx-1 '><PinterestIcon /></MotionLink>
                    <MotionLink href={"https://dribbble.com"} target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 ml-3 sm:mx-1'><DribbbleIcon /></MotionLink>
                    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-6 sm:mx-1 flex items-center justify-center rounded-full  ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}` }>
                        {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
                    </button>
                </nav>
            </motion.div>}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar