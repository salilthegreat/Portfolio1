'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const CustomLink = ({ href, title, className }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${pathname == href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
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
                    className='w-6 mx-3'><PinterestIcon /></MotionLink>
                <MotionLink href={"https://dribbble.com"} target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 ml-3'><DribbbleIcon /></MotionLink>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar