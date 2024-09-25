import React from 'react'
import { TextHoverEffect } from './ui/text-hover-effect'
import ShimerButton from './ui/ShimerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'

const Footer = () => {
    return (
        <footer className='w-full pb-10 z-50' id='contact'>
            <div className='w-full absolute left-0 -bottom-32 min-h-96 z-40'>
                <TextHoverEffect className="w-full h-full" text="HENDRYCK" />
            </div>
            <div className='flex flex-col items-center relative'>
                <h1 className='text-white heading lg:max-w-[45vw]'>
                    Tem uma <span className='text-purple'>pergunta</span> ou <span className='text-purple'>proposta</span>, ou apenas deseja dizer oi? Vá em frente.
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Entre em contato comigo hoje e vamos discutir como posso ajudá-lo a atingir seus objetivos.</p>
                <a className='z-50' href="mailto:contatohendrycklima@hotmail.com">
                    <ShimerButton
                        title="Me contate agora!"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light text-white'>Copyright © 2024 Hendryck Nickolas</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='z-50 w-10 h-10 cursor-pointer flex justify-center items-center background-filter background-blur-lg saturate-180 bg-opacity-75 bg-[#0F0129] rounded-lg border border-[#4C298D]'>
                            <a href={profile.link} target='__blank'><img src={profile.img} alt={profile.id} width={20} height={20} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer