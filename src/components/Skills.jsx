import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y})=>{
  return(
    <motion.div 
    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}} //everytime the viewport will view this animation will happen, used insteadOf animate property
    transition={{duration:1.5}}
    viewport={{once:true}} //this property let the animation happen once
    >{name}</motion.div>
  )
}

const Skills = () => {
  return (
    <div>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div 
        className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
        whileHover={{scale:1.05}}
        >Web</motion.div>
        <Skill name={'HTML'} x={'-20vw'} y={'2vw'}/>
        <Skill name={'CSS'} x={'-5vw'} y={'-11.5vw'}/>
        <Skill name={'JavaScript'} x={'20vw'} y={'11vw'}/>
        <Skill name={'ReactJS'} x={'0vw'} y={'8vw'}/>
        <Skill name={'NextJS'} x={'-23vw'} y={'-15vw'}/>
        <Skill name={'Angular'} x={'15vw'} y={'-13.5vw'}/>
        <Skill name={'Prisma'} x={'32vw'} y={'-5vw'}/>
        <Skill name={'Figma'} x={'0vw'} y={'-20vw'}/>
        <Skill name={'NodeJS'} x={'-30vw'} y={'12vw'}/>

      </div>
    </div>
  )
}

export default Skills