export const toCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

// utils/formatDescription.ts
export function formatDescription(description: string): string {
  // 1) converte as barras literais em quebras reais
  const normalized = description
    .replace(/\\r\\n/g, '\n')
    .replace(/\\r/g, '\n');
  
  // 2) separa em parágrafos (duas ou mais quebras consecutivas)
  const paras = normalized.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

  // 3) cada parágrafo vira <p>…</p>, e quebras simples viram <br>
  return paras
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
}
