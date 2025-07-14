/* eslint-disable @typescript-eslint/no-require-imports */
// split-by-slug.js

const fs   = require('fs')
const path = require('path')

// 1) Caminho para o JSON “mestre” que contém todos os produtos
const INPUT_JSON = path.join(__dirname, './src/data/products.json')

// 2) Pasta de saída (vai criar caso não exista)
const OUT_DIR = path.join(__dirname, './src/data/products')
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

// 3) Carrega o JSON “mestre”
const data = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf-8'))
if (!Array.isArray(data.products)) {
  console.error('Formato inválido: precisa ter um array products[]')
  process.exit(1)
}

// 4) Para cada produto, grava um arquivo separado
data.products.forEach(prod => {
  if (!prod.slug) {
    console.warn(`Produto ID=${prod.id} não tem slug definido, usando id como nome de arquivo`)
  }
  const filename = `${prod.slug || prod.id}.json`
  const filePath = path.join(OUT_DIR, filename)

  // Escreve o JSON formatado com 2 espaços de indentação
  fs.writeFileSync(filePath, JSON.stringify(prod, null, 2), 'utf-8')
  console.log(`→ Gerado: ${path.relative(process.cwd(), filePath)}`)
})

console.log(`\n✅ Foram gerados ${data.products.length} arquivos em ${OUT_DIR}`)
