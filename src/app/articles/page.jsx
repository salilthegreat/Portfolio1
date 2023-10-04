'use client'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from "../../../public/images/articles/form validation in reactjs using custom react hook.png"
import article2 from "../../../public/images/articles/smooth scrolling in reactjs.png"
import { easeInOut, motion, useMotionValue } from 'framer-motion'
import article3 from "../../../public/images/articles/What is higher order component in React.jpg"
import article4 from "../../../public/images/articles/create loading screen in react js.jpg"
import article5 from "../../../public/images/articles/create modal component in react using react portals.png"
import article6 from "../../../public/images/articles/pagination component in reactjs.jpg"
import article7 from "../../../public/images/articles/todo list app built using react redux and framer motion.png"
import article8 from "../../../public/images/articles/What is Redux with easy explanation.png"
import TransitionEffect from '@/components/TransitionEffect'

// export const metadata = {
//     title: "Salil Das | Articles",
//     description: "A protfolio website made with NextJs"
// }

const FramerImage = motion(Image)

const MovingImage = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)
    function handleMouse(event) {
        // console.log(event.pageX);
        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event) {
        // console.log(event.pageX);
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }
    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline '>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                initial={{ opacity: 0 }}
                ref={imgRef} src={img}
                priority
                sizes='(max-width:768px) 100vw
             (max-width:1200px) 50vw
             33vw'
                alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 '

            />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
            viewport={{ once: true }}
        >
            <MovingImage title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <FramerImage
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg  '>{title}</h2>
            </Link>
            <p className='text-sm mb-2 '>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
        <TransitionEffect/>
        <div className='w-full flex flex-col items-center justify-center overflow-hidden dark:bg-dark dark:text-light'>

            <div className='p-14'>
                <AnimatedText text={'Words Can Change The World!'} className={"mb-16 lg:!text-7xl sm:!6xl xs:!text-4xl sm:!mb-8"} />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                    <FeaturedArticle
                        link="/"
                        img={article1}
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        time="9 min read"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    />
                    <FeaturedArticle
                        link="/"
                        img={article2}
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        time="9 min read"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article3}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article4}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article5}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article6}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article7}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article8}
                        date={"March 26, 2023"}
                        link="/"
                    />
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={article2}
                        date={"March 26, 2023"}
                        link="/"
                    />
                </ul>
            </div>
        </div>
        </>
    )
}

export default Articles