
export function Social() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <h2>Contato</h2>
            <form action="" method="post" className="flex flex-col items-center justify-center gap-4">
                <input type="text" name="nome" placeholder="Nome" className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-700" />
                <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-700" />
                <input type="tel" name="telefone" placeholder="Telefone" className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-700" />
                <textarea name="mensagem" placeholder="Mensagem" className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-700"></textarea>
                <button type="submit" className="w-full p-2 rounded-md border border-gray-300 dark:border-zinc-700">Enviar</button>
            </form>
        </section>
    );
}