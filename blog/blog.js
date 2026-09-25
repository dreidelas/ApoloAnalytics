// ========================================
// BLOG APOLO ANALYTICS - Lista de artigos
// ========================================



// ========== VARIÁVEIS GLOBAIS ==========
let filteredPosts = [...posts];
let currentCategory = 'all';
let searchTerm = '';

// ========== ELEMENTOS DO DOM ==========
const postsGrid = document.getElementById('postsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');


// ========== FUNÇÃO: RENDERIZAR POSTS ==========
function renderPosts(postsToRender) {
    if (postsToRender.length === 0) {
        postsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    postsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    // Cada card leva à página própria do artigo (gerada por scripts/gerar-blog.mjs)
    postsGrid.innerHTML = postsToRender.map(post => `
        <a class="post-card" href="${post.slug}/">
            <img src="${post.image}" alt="" class="post-image" loading="lazy">
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-category">${post.categoryName}</span>
                    <span>${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-footer">
                    <span class="read-time">⏱️ ${post.readTime} de leitura</span>
                    <span class="read-more">Ler mais →</span>
                </div>
            </div>
        </a>
    `).join('');
}

// ========== FUNÇÃO: FILTRAR POSTS ==========
function filterPosts() {
    filteredPosts = posts.filter(post => {
        const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    renderPosts(filteredPosts);
}

// ========== EVENT LISTENERS ==========

// Filtro por categoria
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.getAttribute('data-category');
        filterPosts();
    });
});

// Busca
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterPosts();
});

// Formulário de contato: ver ../form-contato.js

// ========== MENU HAMBÚRGUER ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}



// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(posts);
});