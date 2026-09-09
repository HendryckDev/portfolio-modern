export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Interfaces responsivas que parecem nativas em qualquer tela.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/bg-1.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Aprendizado contínuo",
      description: "Testo, estudo e refino a cada projeto.",
      className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tecnologia com intenção — não só tecnologia pela tecnologia.",
      className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "/grid.svg",
      spareImg: "b4.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Formulário - ReactJs",
      des: "Formulario feito totalmente em ReactJS em propósito para aperfeiçoar minhas técnicas de programação.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
      category: "Interface & formulário",
      challenge: "Criar uma experiência de preenchimento simples e sem distrações.",
      outcome: "Componentes reutilizáveis e interface responsiva em React.",
    },
    {
      id: 2,
      title: "Discord bot - Javascript",
      des: "Bot de discord feito totalmente em javascript com diversas funcionalidades.",
      img: "/p2.png",
      iconLists: ["/js.png", "/git.svg",],
      category: "Automação & comunidade",
      challenge: "Organizar recursos úteis em uma experiência prática para Discord.",
      outcome: "Funcionalidades sob medida, escritas em JavaScript puro.",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend - AdaptEd",
      desc: "Atuei no front-end da Adapt Edtech, criando sites para faculdades e universidades.",
      className: "md:col-span-2",
      thumbnail: "/front-end.png",
    },
    {
      id: 2,
      title: "Backend - Discord bot",
      desc: "Desenvolvi um bot para Discord sob demanda, com funcionalidades construídas em JavaScript.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/backend.png",
    },
    {
      id: 3,
      title: "Freelance Frontend",
      desc: "Crio landing pages como freelancer, do layout à entrega responsiva.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/freelancer.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/HendryckDev",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/hendrycknickolas/",
    },
  ];
