import Descricao from "@/src/components/descricao/Descricao";
import { produtos } from "@/src/data/velas";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Produto não encontrado</h1>
        <p>Desculpe, o produto que você está procurando não existe.</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <Descricao
          icon={undefined}
          label="Vela aromática de alta qualidade com fragrância fresca e duradoura. Perfeita para ambientes aconchegantes."
          title={produto.title}
          price={produto.price}
          img={produto.img}
          imgs={produto.imgs ?? []}
          tipo={produto.tipo}
          id={produto.id}
        />
      </div>
    </>
  );
};

export default page;
