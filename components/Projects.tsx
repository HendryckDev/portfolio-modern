import { projects } from '@/Data';
import Link from 'next/link';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

const Projects = () => <Reveal><section className='pt-32' id='projects'>
  <div className='mb-12 max-w-2xl'><p className='eyebrow'>Trabalho selecionado</p><h1 className='mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl'>Projetos que <span className='text-purple'>resolvem algo.</span></h1><p className='mt-5 leading-7 text-white-100'>Não apenas telas bonitas: aqui está o raciocínio, a tecnologia e o resultado por trás de cada construção.</p></div>
  <div className='space-y-8'>{projects.map(({ id, title, des, img, iconLists, challenge, outcome, category }) => <article key={id} className='case-card group grid overflow-hidden lg:grid-cols-[.92fr_1.08fr]'>
    <div className='relative min-h-[270px] overflow-hidden bg-[#16072f] p-8'><span className='tag-chip'>{category}</span><img src={img} alt={`Preview do projeto ${title}`} className='absolute bottom-0 right-0 w-[88%] origin-bottom-right transition duration-500 group-hover:scale-105' /></div>
    <div className='p-7 md:p-10'><h2 className='text-2xl font-bold text-white md:text-3xl'>{title}</h2><p className='mt-3 leading-7 text-white-100'>{des}</p><dl className='my-7 grid gap-5 border-y border-white/10 py-6 sm:grid-cols-2'><div><dt>O desafio</dt><dd>{challenge}</dd></div><div><dt>O foco</dt><dd>{outcome}</dd></div></dl><div className='flex flex-wrap items-center justify-between gap-5'><div className='flex -space-x-2'>{iconLists.map((icon) => <span key={icon} className='tech-icon'><img src={icon} alt='' /></span>)}</div><Link href='https://github.com/HendryckDev' target='_blank' className='project-link'>Ver código <FaGithub /> <FaArrowRight className='text-purple' /></Link></div></div>
  </article>)}</div>
</section></Reveal>;

export default Projects;
