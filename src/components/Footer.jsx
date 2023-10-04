import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light dark:bg-dark'>
            <div className='flex items-center justify-around w-full py-8 sm:text-base lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center lg:py-2'>
                    Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp; <Link href={"https://www.instagram.com/salilthegreat"} target='_blank' className='underline underline-offset-2'>Salil Das</Link>
                </div>
                <Link href={"https://www.instagram.com/salilthegreat"} target={'_blank'} className='underline underline-offset-2'
                >Say hello</Link>
            </div>
        </footer>
    )
}

export default Footer