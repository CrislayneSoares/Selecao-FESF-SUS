import Image from "next/image";

type SocialProps = {
    redesSociais: {
        nome: string;
        url: string;
        icone: string
    }[];
}

export function RedesSociais({ redesSociais }: SocialProps) {
    return (
        <div className="flex gap-4">
            {redesSociais.map((rede) => (
                <a key={rede.nome} href={rede.url} target="_blank" rel="noopener noreferrer"><Image src={rede.icone} alt={rede.nome} width={20} height={20} /></a>
            ))}
        </div>
    );
}