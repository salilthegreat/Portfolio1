import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <div className='flex items-center justify-around w-full py-8'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    Built with <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp; <Link href={"https://www.instagram.com/salilthegreat"} target='_blank' className='underline underline-offset-2'>Salil Das</Link>
                </div>
                <Link href={"https://www.instagram.com/salilthegreat"} target={'_blank'} className='underline underline-offset-2'
                >Say hello</Link>
            </div>
        </footer>
    )
}

export default Footer