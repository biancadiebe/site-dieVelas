export const valoresPersonalizadosGrande = [
  { id: "pacote10", label: "10", preco: "427,50" },
  { id: "pacote30", label: "30", preco: "1.188,00" },
  { id: "pacote50", label: "50", preco: "1.845,00" },
];

export const valoresPersonalizadosMedia = [
  { id: "pacote10", label: "10", preco: "171,00" },
  { id: "pacote30", label: "30", preco: "475,20" },
  { id: "pacote50", label: "50", preco: "738,00" },
];

export const valoresPersonalizadosLatinha = [
  { id: "pacote10", label: "10", preco: "57,00" },
  { id: "pacote30", label: "30", preco: "158,40" },
  { id: "pacote50", label: "50", preco: "246,00" },
];

const valoresPersonalizadosPorProduto = {
  "7": valoresPersonalizadosGrande,
  "8": valoresPersonalizadosLatinha,
  "13": valoresPersonalizadosMedia,
  "14": valoresPersonalizadosGrande,
};

export function precoMinimoPersonalizado(id: string, precoPadrao: string) {
  const valores =
    valoresPersonalizadosPorProduto[
      id as keyof typeof valoresPersonalizadosPorProduto
    ];

  if (!valores) return precoPadrao;

  const menorValor = Math.min(
    ...valores.map((valor) =>
      Number(valor.preco.replace(/\./g, "").replace(",", ".")),
    ),
  );

  return menorValor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
