export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Criação de sites responsivos para a melhor visualização em todas as resoluções.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Meu conhecimento",
      description: "Eu constantemente tento melhorar",
      className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Entusiasta de tecnologia e apaixonado por desenvolvimento.",
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
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Discord bot - Javascript",
      des: "Bot de discord feito totalmente em javascript com diversas funcionalidades.",
      img: "/p2.png",
      iconLists: ["/js.png", "/git.svg",],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend - AdaptEd",
      desc: "Trabalhei como front end na Adapt Edtech, em criações de sites para falcudades/universidades",
      className: "md:col-span-2",
      thumbnail: "/front-end.png",
    },
    {
      id: 2,
      title: "Backend - Discord bot",
      desc: "Já desenvolvi um bot de discord para um cliente feito 100% em javascript",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/backend.png",
    },
    {
      id: 3,
      title: "Freelance Frontend",
      desc: "Tenho experiencia como freelancer para projetos como landing page",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/freelancer.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];