import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundBeams } from './ui/background-beams'
import ShimerButton from './ui/ShimerButton';
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


const Main = () => {
    const words = [
        {
          text: "Olá,",
        },
        {
          text: "meu",
        },
        {
          text: "nome",
        },
        {
          text: "é",
        },
        {
          text: "<Hendryck/>",
          className: "text-white-300",
        },
      ];
    

  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[5vw]' fill='blue' />
        </div>
        <div>
            <BackgroundBeams className="h-screen w-full antialiased" />
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white'>
                {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Olá, meu nome é &lt;Hendryck/&gt;</h2> */}
                <TypewriterEffectSmooth className='text-center text-[40px] md:text-5xl lg:text-6xl' words={words} />
                <p className='tracking-widest text-base text-center mb-4 text-blue-100'>Desenvolvendo projetos em Javascript, ReactJs e NextJs.</p>
                <a href='#about'>
                  <ShimerButton 
                    title="Veja meus projetos"
                    icon={<FaLocationArrow />}
                    position='right' 
                  />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Main