export type Projeto = {
    id: string;
    title: string;
    description: string;
    techs: string[];
    githubUrl: string;
    imagemUrl: string;
};

export const projetos: Projeto[] = [
    {
        id: "1",
        title: "Pokedex",
        description: "Projeto construido com HTML, CSS e JavaScript",
        techs: ["HTML", "CSS", "JavaScript" ],
        githubUrl: "https://pokedex-xi-flax.vercel.app/",
        imagemUrl: "/projetos/pokedex.png",
    },
    {
        id: "2",
        title: "Loja de Eletrônicos",
        description: "Loja de produtos eletrônicos contruida com Next.js, TailwindCSS, Python, FastAPI e MySQL",
        techs: ["Next.js", "TailwindCSS", "Python", "FastAPI", "MySQL" ],
        githubUrl: "https://github.com/CrislayneSoares/loja",
        imagemUrl: "/projetos/loja-eletronicos.jpeg",
    },
    {
        id: "3",
        title: "Calculadora",
        description: "Calculadora com operações básicas contruida em React, Sass e JavaScript",
        techs: ["React", "Sass", "JavaScript" ],
        githubUrl: "https://react-calculadora-lime.vercel.app/",
        imagemUrl: "/projetos/calculadora.png",
    },
    {
        id: "4",
        title: "La Pizza",
        description: "Site de uma pizzaria contruido com React, Styled Components",
        techs: ["React", "Styled Components", "JavaScript"],
        githubUrl: "https://la-pizza-react-gfuf.vercel.app/",
        imagemUrl: "/projetos/la-pizza.png",
    },
    {
        id: "5",
        title: "Fantastika PetShop",
        description: "Site construido com HTML, CSS3, responsivo e semântico",
        techs: ["HTML", "CSS3"],
        githubUrl: "https://aulas-vnw.vercel.app/",
        imagemUrl: "/projetos/fantastika.png",
    },
    {
        id: "6",
        title: "NFT",
        description: "Card de NFT contruido com HTML, CSS. Um desafio proposto por FrontEnd Mentor",
        techs: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://frontend-mentor-1m9s.vercel.app/",
        imagemUrl: "/projetos/nft.png",
    },
    {
        id: "7",
        title: "Loja Saflcare",
        description: "Loja de produtos naturais",
        techs: [ "HTML", "CSS", "JavaScript" ],
        githubUrl: "https://ecommerce-one-sandy.vercel.app/",
        imagemUrl: "/projetos/loja-produtos.png",
    },
];