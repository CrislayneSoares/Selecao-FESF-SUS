type FooterProps = {
    description: string;
    ano: number;
}

export function Footer({description, ano}: FooterProps) {
    return (
        <footer className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <p className="text-gray-600 dark:text-gray-400">© {ano} {description}. Todos os direitos reservados.</p>
        </footer>
    );
};