import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";
import { workExperience } from '@/Data';
import { Button } from './ui/moving-border';


const Experiencia = () => {
    return (
        <div className='py-40' id='experience'>
            <LampContainer>
                <h1 className='heading text-white'>
                    Minha {''}
                    <span className='text-purple'>Experiencia de Trabalho</span>
                </h1>
            </LampContainer>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 z-50 relative -top-52'>
                {workExperience.map((card) =>
                    <Button key={card.id} borderRadius='1.75rem' duration={Math.floor(Math.random() * 10000) + 10000} className='flex-1 text-white border-[#7E29FC]'>
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default Experiencia