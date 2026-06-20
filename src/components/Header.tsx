import Link from "next/link";

type HeaderProps = {
    title: string;
    description: string;
}

export function Header({ title, description }: HeaderProps) {
    return (
        <header className="flex items-center justify-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/projetos">Projetos</Link>
            </nav>
        </header>
    );
}