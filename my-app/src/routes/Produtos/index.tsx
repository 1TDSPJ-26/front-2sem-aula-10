import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaprodutos";
import { Link } from "react-router/internal/react-server-client";

export default function Produtos() {

  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    setProdutos(listaProdutos);
  }, []);

  return (
    <main>
      <h2>Produtos</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
              <td><Link to={`/editar-produtos/${p.id}`}>EDITAR</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Quantidade de produtos: {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}
