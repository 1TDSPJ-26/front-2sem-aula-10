import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaProdutos";

// interface Produto{
//     id: number;
//     nome: string;
//     preco: number
// }


export default function EditarProdutos() {

    const { id } = useParams<string>();

    // const[produto, setProduto] = useState<id: number, nome: string, preco: number>();
    const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

    useEffect(() => {
        const prodEncontrado = listaProdutos.find( (p) => p.id === Number(id) );
        setProduto(prodEncontrado!);

    },[]); //executa só uma vez a princípio, mas depende do que colocar nesse array aqui

    return (
        <main>
            <h2>Editar Produtos</h2>
            
            {produto?(
                <div>
                    <p>Nome do Produto: {produto.nome}</p>
                    <p>Preço do Produto: {produto.preco}</p>
                </div>) :
                (<p>Produto não encontrado.</p>)
                }

        </main>
    )
}