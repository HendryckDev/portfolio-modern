import { workExperience } from '@/Data';
import Reveal from './Reveal';

const Experiencia = () => <Reveal><section className='py-32' id='experience'>
  <p className='eyebrow'>Minha trajetória</p><h1 className='mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl'>Experiência em <span className='text-purple'>movimento.</span></h1>
  <div className='relative mt-14 space-y-4 border-l border-purple/40 pl-7 md:pl-12'>{workExperience.map((card) => <article key={card.id} className='timeline-card relative p-6 md:p-8'><span className='timeline-dot' /><div className='mb-4 flex flex-wrap items-center justify-between gap-2'><p className='font-mono text-xs uppercase tracking-[.18em] text-purple'>0{card.id} / experiência</p><span className='text-sm text-white-200'>Construção & evolução</span></div><div className='flex gap-5'><img src={card.thumbnail} alt='' className='h-14 w-14 object-contain' /><div><h2 className='text-xl font-bold text-white md:text-2xl'>{card.title}</h2><p className='mt-2 max-w-2xl leading-7 text-white-100'>{card.desc}</p></div></div></article>)}</div>
</section></Reveal>;

export default Experiencia;
