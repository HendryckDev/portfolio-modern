import { projects } from '@/Data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";


const Projects = () => {
    return (
        <div className='pt-40' id='projects'>
            <h1 className='heading text-white'>
                Meus {''}
                <span className='text-purple'>Projetos Recentes</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-[#130036] relative group/card border-[#4C298D] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl md:text-xl text-base line-clamp-1 font-bold text-white dark:text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-10">
                                    <img src='/bg.png' alt='bg-img' />
                                    <img
                                        src={img}
                                        alt={title}
                                        className='absolute bottom-0'
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="text-white lg:text-base font-light text-sm mt-3 dark:text-neutral-300"
                                >
                                    {des}
                                </CardItem>
                                <div className="flex justify-between items-center mt-7 mb-3">
                                    <CardItem
                                        translateZ={20}
                                        className="flex items-center px-4 py-2 rounded-xl text-xs font-normal"
                                    >
                                       {iconLists.map((icon) =>
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-[#0F0129] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    )}
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="https://github.com/HendryckDev"
                                        target="__blank"
                                        className="px-6 py-4 rounded-xl bg-[#0F0129] dark:bg-white text-white text-sm font-bold flex justify-center items-center"
                                    >
                                        View code
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects