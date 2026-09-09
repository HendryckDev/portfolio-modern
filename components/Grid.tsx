import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/Data'
import Reveal from './Reveal'

const Grid = () => {
    return (
        <Reveal>
        <section className='lg:pt-72 sm:pt-10' id='about'>
            <BentoGrid>
                {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (<BentoGridItem id={id} key={id} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg} />))}
            </BentoGrid>
        </section>
        </Reveal>
    )
}

export default Grid
