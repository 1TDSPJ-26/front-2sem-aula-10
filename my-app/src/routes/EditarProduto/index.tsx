import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaProdutos";

export default function EditarProduto() {

    const {id} = useParams<string>()

    const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

    const[clicando, setClicando] = useState<number>(0);

    useEffect(() => {
        const prodEncontrado = listaProdutos.find((i) => i.id === Number(id));
        setProduto(prodEncontrado!);
    },[])

    return (
        <main>
            <section>
                <h2>Editar produtos</h2>
                <p>ID: {id}</p>
                {produto ?(<div>
                    <p>Nome do produto: {produto.nome}</p>
                    <p>Preço do produto: {produto.preco}</p>
                </div>) :
                (<div>
                    <p>Produto não encontrado</p>
                </div>)}
            </section>
        </main>
    )
}