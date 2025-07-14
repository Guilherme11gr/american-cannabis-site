// update-image-paths.js
// Executar na raiz do projeto: `node update-image-paths.js`

const fs = require('fs');
const path = require('path');

// 1) Pasta onde estão os JSONs de produto
const productsDir = path.join(__dirname, 'src/data/products');

// 2) Função para prefixar "/imgs/" caso não exista
function prefixImg(rawPath) {
  if (typeof rawPath !== 'string') return rawPath;
  // remove qualquer barra inicial
  const sanitized = rawPath.replace(/^\/+/, '');
  // se já começa com "imgs/", considera ok
  if (sanitized.startsWith('imgs/')) {
    return '/' + sanitized;
  }
  // caso contrário, prefixa
  return '/imgs/' + sanitized;
}

// 3) Lê todos os arquivos .json na pasta
const files = fs
  .readdirSync(productsDir)
  .filter((f) => f.endsWith('.json'));

files.forEach((filename) => {
  const filePath = path.join(productsDir, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error(`✖ Erro ao parsear ${filename}:`, err);
    return;
  }

  let changed = false;

  // 4) Atualiza mainPhoto.image
  if (data.mainPhoto && typeof data.mainPhoto.image === 'string') {
    const newPath = prefixImg(data.mainPhoto.image);
    if (newPath !== data.mainPhoto.image) {
      data.mainPhoto.image = newPath;
      changed = true;
    }
  }

  // 5) Atualiza cada images[].image
  if (Array.isArray(data.images)) {
    data.images = data.images.map((img) => {
      if (img && typeof img.image === 'string') {
        const newPath = prefixImg(img.image);
        if (newPath !== img.image) {
          changed = true;
          return { ...img, image: newPath };
        }
      }
      return img;
    });
  }

  // 6) Se algo mudou, reescreve o arquivo
  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✔ Atualizado: ${filename}`);
  } else {
    console.log(`→ Sem mudança: ${filename}`);
  }
});

console.log(`\n✅ Processados ${files.length} arquivos em ${productsDir}`);
