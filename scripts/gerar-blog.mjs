// ========================================
// GERADOR DO BLOG - APOLO ANALYTICS
// Uso (na raiz do projeto):  node scripts/gerar-blog.mjs
//
// Lê blog/posts-data.js e:
//   1. cria uma página para cada artigo em blog/<slug>/index.html
//      (páginas próprias são indexadas pelo Google e por buscadores com IA)
//   2. escreve a lista de artigos já pronta no HTML de blog/index.html
//   3. atualiza o sitemap.xml
// Rode sempre que adicionar ou editar um artigo.
// ========================================

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://apoloanalytics.com.br';
const WHATSAPP = '5548988769823';

const lerArquivo = (arquivo) => fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');

// ---------- Artigos ----------
const contexto = {};
vm.runInNewContext(`${lerArquivo('blog/posts-data.js')}\n;this.posts = posts;`, contexto);
const posts = contexto.posts;

const MESES = { jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6, jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12 };

function dataISO(post) {
    const partes = post.date.match(/(\d{1,2})\s+([A-Za-zç]{3})[a-zç]*,?\s+(\d{4})/i);
    const mes = partes && MESES[partes[2].toLowerCase()];
    if (!mes) throw new Error(`Data inválida no artigo ${post.id}: "${post.date}" (use o formato "15 Jan, 2026")`);
    return `${partes[3]}-${String(mes).padStart(2, '0')}-${partes[1].padStart(2, '0')}`;
}

function validar(post) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(post.slug)) {
        throw new Error(`Slug inválido no artigo ${post.id}: "${post.slug}" (use minúsculas, sem acentos, com hífens)`);
    }
    if (['img'].includes(post.slug)) throw new Error(`O slug "${post.slug}" é reservado`);
}

const escapar = (texto) => String(texto)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const imagemAbsoluta = (post) => (/^https?:/.test(post.image) ? post.image : `${SITE}/blog/${post.image}`);
const imagemRelativa = (post) => (/^https?:/.test(post.image) ? post.image : `../${post.image}`);

// ---------- Trechos reaproveitados de blog/index.html ----------
const indiceBlog = lerArquivo('blog/index.html').replace(/\r\n/g, '\n');

function trecho(inicio, fim) {
    const a = indiceBlog.indexOf(inicio);
    const b = indiceBlog.indexOf(fim, a);
    if (a < 0 || b < 0) throw new Error(`Trecho não encontrado em blog/index.html: ${inicio}`);
    return indiceBlog.slice(a, b + fim.length);
}

const googleTag = trecho('    <!-- INÍCIO: Google Tag', '<!-- FIM: Google Tag (Analytics) -->');
const rodape = trecho('    <footer>', '</footer>')
    .replace(/href="\.\.\//g, 'href="../../')
    .replace(/href="index\.html"/g, 'href="../"');
const botaoWhatsapp = trecho('    <a href="https://wa.me/', '</a>');

// ---------- Página de cada artigo ----------
function paginaArtigo(post) {
    const url = `${SITE}/blog/${post.slug}/`;
    const iso = dataISO(post);
    const dadosEstruturados = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: imagemAbsoluta(post),
        datePublished: iso,
        inLanguage: 'pt-BR',
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'Apolo Analytics', url: `${SITE}/` },
        publisher: { '@type': 'Organization', name: 'Apolo Analytics', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
    };
    const whatsappDiagnostico = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Li o artigo "${post.title}" no blog e gostaria de agendar o diagnóstico gratuito.`)}`;

    return `<!DOCTYPE html>
<!-- Página gerada por scripts/gerar-blog.mjs a partir de blog/posts-data.js. Não edite à mão. -->
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapar(post.title)} | Blog Apolo Analytics</title>
    <meta name="description" content="${escapar(post.excerpt)}">
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${escapar(post.title)}">
    <meta property="og:description" content="${escapar(post.excerpt)}">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:site_name" content="Apolo Analytics">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${escapar(imagemAbsoluta(post))}">
    <meta property="article:published_time" content="${iso}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" type="image/x-icon" href="../../favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../blog-main.css">

${googleTag}

    <script type="application/ld+json">
    ${JSON.stringify(dadosEstruturados, null, 4).replace(/\n/g, '\n    ')}
    </script>
</head>
<body>
    <header>
        <nav class="nav-container">
            <a href="../../index.html" class="logo">
                <img src="../../logomarca.png" alt="Apolo Analytics" class="logo-img">
            </a>

            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul class="nav-links" id="navLinks">
                <li><a href="../../index.html">Início</a></li>
                <li><a href="../../index.html#precos">Ofertas</a></li>
                <li><a href="../../index.html#sobre">Quem somos</a></li>
                <li><a href="../" class="active">Blog</a></li>
                <li><a href="../../index.html#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main class="artigo-pagina">
        <nav class="artigo-breadcrumb" aria-label="Você está em">
            <a href="../">Blog</a> › ${escapar(post.categoryName)}
        </nav>

        <article class="artigo">
            <div class="artigo-header">
                <img src="${escapar(imagemRelativa(post))}" alt="" class="artigo-image">
                <div class="artigo-meta">
                    <span class="post-category">${escapar(post.categoryName)}</span>
                    <time datetime="${iso}">${escapar(post.date)}</time>
                    <span>⏱️ ${escapar(post.readTime)} de leitura</span>
                </div>
                <h1>${escapar(post.title)}</h1>
            </div>

            <div class="artigo-body">
${post.content.replace(/\r\n/g, '\n').trim().replace(/^/gm, '                ')}
            </div>

            <aside class="artigo-cta">
                <h2>Quer aplicar isso na sua empresa?</h2>
                <p>Agende um diagnóstico gratuito de 30 minutos e descubra onde os seus dados podem economizar tempo e dinheiro.</p>
                <a href="${whatsappDiagnostico}" class="js-cta-diagnostico" data-origem="artigo" target="_blank" rel="noopener noreferrer">Agendar diagnóstico gratuito</a>
            </aside>

            <div class="artigo-footer">
                <a href="../" class="btn-voltar">← Voltar ao Blog</a>
            </div>
        </article>
    </main>

${rodape}

${botaoWhatsapp}

    <script src="../../analytics.js" data-raiz="../../"></script>
    <script>
        // Menu hambúrguer
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    </script>
</body>
</html>
`;
}

// ---------- Lista pronta em blog/index.html (mesmo HTML que o blog.js gera) ----------
function cardArtigo(post) {
    return `                <a class="post-card" href="${post.slug}/">
                    <img src="${escapar(post.image)}" alt="" class="post-image" loading="lazy">
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="post-category">${escapar(post.categoryName)}</span>
                            <span>${escapar(post.date)}</span>
                        </div>
                        <h3>${escapar(post.title)}</h3>
                        <p class="post-excerpt">${escapar(post.excerpt)}</p>
                        <div class="post-footer">
                            <span class="read-time">⏱️ ${escapar(post.readTime)} de leitura</span>
                            <span class="read-more">Ler mais →</span>
                        </div>
                    </div>
                </a>`;
}

// ---------- Execução ----------
posts.forEach(validar);
const slugs = posts.map((p) => p.slug);
const repetido = slugs.find((s, i) => slugs.indexOf(s) !== i);
if (repetido) throw new Error(`Slug repetido: ${repetido}`);

for (const post of posts) {
    const pasta = path.join(RAIZ, 'blog', post.slug);
    fs.mkdirSync(pasta, { recursive: true });
    fs.writeFileSync(path.join(pasta, 'index.html'), paginaArtigo(post));
    console.log(`✓ blog/${post.slug}/index.html`);
}

// Remove páginas de artigos que saíram do posts-data.js
for (const item of fs.readdirSync(path.join(RAIZ, 'blog'), { withFileTypes: true })) {
    const pagina = path.join(RAIZ, 'blog', item.name, 'index.html');
    if (item.isDirectory() && !slugs.includes(item.name) && fs.existsSync(pagina)
        && fs.readFileSync(pagina, 'utf8').includes('Página gerada por scripts/gerar-blog.mjs')) {
        fs.rmSync(path.join(RAIZ, 'blog', item.name), { recursive: true });
        console.log(`✗ blog/${item.name}/ removido (artigo não existe mais)`);
    }
}

const arquivoIndice = path.join(RAIZ, 'blog', 'index.html');
const indiceOriginal = fs.readFileSync(arquivoIndice, 'utf8');
const quebra = indiceOriginal.includes('\r\n') ? '\r\n' : '\n';
const inicio = indiceOriginal.indexOf('-->', indiceOriginal.indexOf('<!-- POSTS:INICIO')) + 3;
const fim = indiceOriginal.lastIndexOf('\n', indiceOriginal.indexOf('<!-- POSTS:FIM')) + 1;
if (inicio < 3 || fim <= inicio) throw new Error('Marcadores POSTS:INICIO / POSTS:FIM não encontrados em blog/index.html');
const lista = `\n${posts.map(cardArtigo).join('\n')}\n`.replace(/\n/g, quebra);
fs.writeFileSync(arquivoIndice, indiceOriginal.slice(0, inicio) + lista + indiceOriginal.slice(fim));
console.log('✓ blog/index.html (lista de artigos)');

const hoje = new Date().toISOString().slice(0, 10);
const maisRecente = posts.map(dataISO).sort().pop() || hoje;
const urls = [
    { loc: `${SITE}/`, lastmod: hoje },
    { loc: `${SITE}/blog/`, lastmod: maisRecente },
    ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: dataISO(p) })),
    { loc: `${SITE}/privacidade.html`, lastmod: hoje },
];
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `    <url>\n        <loc>${u.loc}</loc>\n        <lastmod>${u.lastmod}</lastmod>\n    </url>`).join('\n')}
</urlset>
`);
console.log('✓ sitemap.xml');
