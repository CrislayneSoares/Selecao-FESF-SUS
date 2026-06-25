import Image from "next/image";

type CardProps = {
    title: string;
    periodo: string;
    imagem: string;
}

export function Card({ title, periodo, imagem }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md w-68 shadow-md min-h-60">
            <Image src={imagem} alt={title} width={100} height={100} />
            <h1 className="text-lg font-bold text-lilas">{title}</h1>
            <p className="text-sm text-gray-500">{periodo}</p>
        </div>
    );
}