import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaProdutos";

// Criando uma interface para o tipo de dado que o componente vai receber
// interface Produto {
//     id: number;
//     nome: string;
//     preco: number;
// }

export default function EditarProdutos() {

  const { id } = useParams<string>();

  const[produto, setProduto] = useState<TipoProduto>({} as TipoProduto);

  // const [clicando, setClicando] = useState<number>(0);

  // useEffect(() => {
  //   console.log("TESTE"); // Só executa quando carrega o componente
  // },[]);

  useEffect(() => {
    const prodEncontrado = listaProdutos.find((p) => p.id === Number(id));
     setProduto(prodEncontrado!);
  },[]);


  return (
    <main>
        <h2>
            Editar Produto
        </h2>
        {produto ? (<div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
        </div>) : (<p>Produto não encontrado</p>)}

        <div>
          {/* <p>Valor do state: {clicando}</p>
          <button onClick={() => setClicando(clicando + 1)}>Clicou {clicando} vezes
          </button> */}
        </div>

        
    </main>
  )
}
