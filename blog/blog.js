// ========================================
// BLOG APOLO ANALYTICS - JavaScript com Modal
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

    postsGrid.innerHTML = postsToRender.map(post => `
        <article class="post-card" onclick="openPostModal(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-category">${post.categoryName}</span>
                    <span>${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-footer">
                    <span class="read-time">⏱️ ${post.readTime} de leitura</span>
                    <a href="#" class="read-more" onclick="event.stopPropagation(); openPostModal(${post.id})">
                        Ler mais →
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// ========== FUNÇÃO: ABRIR MODAL DO POST ==========
function openPostModal(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    // Cria o modal se não existir
    let modal = document.getElementById('postModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'postModal';
        modal.className = 'post-modal';
        document.body.appendChild(modal);
    }

    // Preenche o conteúdo do modal
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closePostModal()">&times;</button>
            <div class="modal-header">
                <img src="${post.image}" alt="${post.title}" class="modal-image">
                <div class="modal-meta">
                    <span class="post-category">${post.categoryName}</span>
                    <span>${post.date}</span>
                    <span>⏱️ ${post.readTime} de leitura</span>
                </div>
                <h1>${post.title}</h1>
            </div>
            <div class="modal-body">
                ${post.content}
            </div>
            <div class="modal-footer">
                <button onclick="closePostModal()" class="btn-voltar">← Voltar ao Blog</button>
            </div>
        </div>
    `;

    // Exibe o modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ========== FUNÇÃO: FECHAR MODAL ==========
function closePostModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
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

// ========== FORMULÃRIO DE CONTATO ==========
const contatoForm = document.getElementById('contatoForm');

if (contatoForm) {
    contatoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contatoForm.querySelector('button[type="submit"]');
        const messageDiv = document.getElementById('formMessage');
        
        // Desabilita o botão durante o envio
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // Remove mensagens anteriores
        if (messageDiv) {
            messageDiv.remove();
        }
        
        // Coleta os dados do formulário
        const formData = {
            nome: contatoForm.querySelector('#nome').value,
            email: contatoForm.querySelector('#email').value,
            telefone: contatoForm.querySelector('#telefone').value,
            timestamp: new Date().toLocaleString('pt-BR')
        };
        
        try {
            // URL do Google Apps Script Web App
            const scriptURL = 'https://docs.google.com/spreadsheets/d/1C1tai7nayaGoGjcQSkQ_foFu5vB_X4Tz0v7lxsCPeg8/edit?gid=0#gid=0';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            // Mostra mensagem de sucesso
            showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            contatoForm.reset();
            
        } catch (error) {
            console.error('Erro:', error);
            showFormMessage('Erro ao enviar mensagem. Por favor, tente novamente.', 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';
        }
    });
}

function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'formMessage';
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    contatoForm.appendChild(messageDiv);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

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