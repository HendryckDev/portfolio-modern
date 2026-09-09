import { FaArrowDown, FaCode, FaLocationArrow } from 'react-icons/fa';
import ShimerButton from './ui/ShimerButton';

const Main = () => <section className='hero-shell relative isolate min-h-[760px] overflow-hidden pb-20 pt-32 md:pt-44' id='home'>
  <div className='hero-orb hero-orb-one' /><div className='hero-orb hero-orb-two' />
  <div className='relative z-10 mx-auto grid max-w-6xl items-end gap-12 px-2 lg:grid-cols-[1.2fr_.8fr]'>
    <div className='text-white'>
      <p className='mb-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[.24em] text-purple'><span className='h-2 w-2 rounded-full bg-purple shadow-[0_0_14px_#CBACF9]' />Disponível para novos desafios</p>
      <p className='mb-5 font-mono text-sm text-white-200'>{'<Hendryck Nickolas />'}</p>
      <h1 className='max-w-3xl text-5xl font-bold leading-[.98] tracking-[-.06em] sm:text-6xl lg:text-8xl'>Ideias digitais,<br /><span className='text-gradient'>feitas para acontecer.</span></h1>
      <p className='mt-8 max-w-xl text-base leading-7 text-white-100 md:text-lg'>Desenvolvedor front-end que transforma interfaces complexas em experiências claras, rápidas e memoráveis.</p>
      <div className='mt-9 flex flex-wrap items-center gap-4'><a href='#projects'><ShimerButton title='Explorar projetos' icon={<FaLocationArrow />} position='right' /></a><a href='#about' className='inline-flex items-center gap-2 px-4 py-3 text-sm text-white-200 transition hover:text-white'>Conheça meu processo <FaArrowDown className='text-purple' /></a></div>
    </div>
    <aside className='terminal-card text-white'>
      <div className='mb-8 flex items-center justify-between border-b border-white/10 pb-4'><div className='flex gap-1.5'><i /><i /><i /></div><span className='font-mono text-[10px] uppercase tracking-[.2em] text-white-200'>agora.ts</span></div>
      <p className='font-mono text-sm text-purple'>$ status</p><p className='mt-2 text-lg font-semibold'>Construindo experiências web.</p><p className='mt-6 font-mono text-sm text-purple'>$ stack</p>
      <div className='mt-3 flex flex-wrap gap-2'>{['React', 'Next.js', 'TypeScript', 'UI'].map((item) => <span key={item} className='tag-chip'>{item}</span>)}</div>
      <div className='mt-9 grid grid-cols-2 gap-4 border-t border-white/10 pt-5'><div><strong>2024</strong><span>primeiro portfólio</span></div><div><strong><FaCode className='inline text-purple' /> 03</strong><span>frentes de atuação</span></div></div>
    </aside>
  </div>
</section>;

export default Main;
