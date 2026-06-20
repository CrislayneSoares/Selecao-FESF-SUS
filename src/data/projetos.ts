export type Projeto = {
    id: string;
    title: string;
    description: string;
    techs: string[];
    githubUrl: string;
    liveUrl: string;
};

export const projetos: Projeto[] = [
    {
        id: "1",
        title: "Loja Virtual",
        description: "Loja de produtos eletrônicos",
        techs: ["Python", "FastAPI", "MySQL" ],
        githubUrl: "https://github.com/CrislayneSoares/projeto1",
        liveUrl: "https://projeto1.com",
    },
    {
        id: "2",
        title: "Login e Cadastro de Usuário",
        description: "Login e cadastro de usuário com validação de email e senha",
        techs: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/CrislayneSoares/projeto2",
        liveUrl: "https://projeto2.com",
    },
];