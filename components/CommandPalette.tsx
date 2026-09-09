'use client';

import { useEffect, useState } from 'react';
import { FaArrowRight, FaTerminal, FaTimes } from 'react-icons/fa';

const commands = [
  { label: 'sobre', description: 'como eu penso e trabalho', target: 'about' },
  { label: 'projetos', description: 'ver construções selecionadas', target: 'projects' },
  { label: 'experiência', description: 'minha trajetória profissional', target: 'experience' },
  { label: 'contato', description: 'iniciar uma conversa', target: 'contact' },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const goTo = (target: string) => {
    setOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <>
    <button className='command-trigger' onClick={() => setOpen(true)} aria-label='Abrir central de comandos'>
      <FaTerminal /><span>&gt;_</span>
    </button>

    {open && <div className='command-overlay' onClick={() => setOpen(false)}>
      <div className='command-window' onClick={(event) => event.stopPropagation()} role='dialog' aria-modal='true' aria-label='Central de comandos'>
        <div className='command-header'><div><p className='command-kicker'>HENDRYCK OS / NAVEGAÇÃO</p><h2>O que você quer explorar?</h2></div><button onClick={() => setOpen(false)} aria-label='Fechar'><FaTimes /></button></div>
        <div className='command-prompt'><span>$</span><span className='text-white-200'>digite um comando ou escolha uma opção</span><kbd>ESC</kbd></div>
        <div className='command-list'>{commands.map((command) => <button key={command.target} onClick={() => goTo(command.target)} className='command-item'><span className='command-symbol'>&gt;_</span><span><strong>{command.label}</strong><small>{command.description}</small></span><FaArrowRight className='command-arrow' /></button>)}</div>
        <p className='command-footer'>atalho <kbd>⌘</kbd><kbd>K</kbd> para abrir em qualquer lugar</p>
      </div>
    </div>}
  </>;
};

export default CommandPalette;
