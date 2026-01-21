// ========================================
// BLOG APOLO ANALYTICS - JavaScript com Modal
// ========================================

// ========== DADOS DOS POSTS ==========
const posts = [
    {
        id: 1,
        title: "Como Criar Dashboards Eficientes em Business Intelligence",
        excerpt: "Descubra as melhores práticas para desenvolver dashboards que realmente agregam valor ao negócio e facilitam a tomada de decisão.",
        category: "bi",
        categoryName: "Business Intelligence",
        date: "15 Jan, 2026",
        readTime: "8 min",
        slug: "como-criar-dashboards-eficientes",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        content: `
            <h2>Introdução</h2>
            <p>Dashboards eficientes são fundamentais para transformar dados em insights acionáveis. Neste artigo, vamos explorar as melhores práticas para criar dashboards que realmente fazem a diferença.</p>
            
            <h2>1. Conheça seu público</h2>
            <p>Antes de criar qualquer dashboard, é essencial entender quem vai utilizá-lo. Gestores executivos precisam de visões macro, enquanto analistas necessitam de detalhes granulares.</p>
            
            <h2>2. Defina KPIs claros</h2>
            <p>Escolha métricas que realmente importam para o negócio. Evite poluição visual com dados irrelevantes.</p>
            
            <h2>3. Design e Usabilidade</h2>
            <p>Um bom dashboard deve ser intuitivo e fácil de navegar. Use cores estrategicamente e mantenha uma hierarquia visual clara.</p>
            
            <h2>4. Performance</h2>
            <p>Dashboards lentos não são utilizados. Otimize consultas e considere agregações pré-calculadas para grandes volumes de dados.</p>
            
            <h2>Conclusão</h2>
            <p>Criar dashboards eficientes é uma arte que combina conhecimento técnico com entendimento do negócio. Coloque o usuário no centro do desenvolvimento e itere constantemente com base no feedback.</p>
        `
    },
    {
        id: 2,
        title: "Introdução à Análise Exploratória de Dados",
        excerpt: "Aprenda os fundamentos da análise exploratória e como extrair insights valiosos dos seus dados antes de modelagens complexas.",
        category: "analise-dados",
        categoryName: "Análise de Dados",
        date: "10 Jan, 2026",
        readTime: "6 min",
        slug: "introducao-analise-dados",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        content: `
            <h2>O que é Análise Exploratória de Dados?</h2>
            <p>A Análise Exploratória de Dados (EDA) é o primeiro passo crucial em qualquer projeto de análise. É onde você conhece seus dados intimamente.</p>
            
            <h2>Etapas principais</h2>
            <p><strong>1. Importação e limpeza:</strong> Garanta que seus dados estejam estruturados e livres de inconsistências.</p>
            <p><strong>2. Estatísticas descritivas:</strong> Calcule médias, medianas, desvios padrão e identifique outliers.</p>
            <p><strong>3. Visualizações:</strong> Crie gráficos que revelem padrões, tendências e anomalias.</p>
            
            <h2>Ferramentas recomendadas</h2>
            <p>Python com pandas, matplotlib e seaborn são excelentes para EDA. Para análises mais simples, Excel e Power BI também são ótimas opções.</p>
            
            <h2>Dica final</h2>
            <p>Nunca pule a etapa de EDA. Os insights descobertos aqui orientarão todo o resto do seu projeto.</p>
        `
    },
    {
        id: 3,
        title: "Power BI vs Looker Studio: Qual Escolher?",
        excerpt: "Comparativo detalhado entre as duas principais ferramentas de BI do mercado, com casos de uso e recomendações práticas.",
        category: "tutoriais",
        categoryName: "Tutoriais",
        date: "5 Jan, 2026",
        readTime: "10 min",
        slug: "power-bi-vs-looker",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        content: `
            <h2>Comparação completa</h2>
            <p>Escolher entre Power BI e Looker Studio pode ser desafiador. Vamos analisar os pontos fortes de cada ferramenta.</p>
            
            <h2>Power BI</h2>
            <p><strong>Vantagens:</strong></p>
            <ul>
                <li>Integração nativa com ecossistema Microsoft</li>
                <li>DAX para cálculos avançados</li>
                <li>Melhor para grandes volumes de dados</li>
                <li>Mais recursos de modelagem</li>
            </ul>
            
            <h2>Looker Studio</h2>
            <p><strong>Vantagens:</strong></p>
            <ul>
                <li>Gratuito e baseado em nuvem</li>
                <li>Integração perfeita com Google Ads, Analytics, Sheets</li>
                <li>Colaboração em tempo real</li>
                <li>Mais fácil para iniciantes</li>
            </ul>
            
            <h2>Quando escolher cada um?</h2>
            <p><strong>Power BI:</strong> Empresas que já usam Microsoft 365, precisam de análises complexas e têm grandes volumes de dados.</p>
            <p><strong>Looker Studio:</strong> Startups, equipes de marketing digital, empresas focadas em Google Workspace.</p>
        `
    },
    {
        id: 4,
        title: "Case: Redução de 40% nos Custos com Análise de Dados",
        excerpt: "Conheça como uma empresa de varejo utilizou análise de dados para otimizar processos e reduzir custos significativamente.",
        category: "cases",
        categoryName: "Cases",
        date: "28 Dez, 2025",
        readTime: "7 min",
        slug: "case-reducao-custos",
        image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800",
        content: `
            <h2>O Desafio</h2>
            <p>Uma rede de varejo com 50 lojas estava enfrentando custos operacionais crescentes e margens em queda.</p>
            
            <h2>A Solução</h2>
            <p>Implementamos um sistema de análise de dados que monitorava:</p>
            <ul>
                <li>Fluxo de estoque em tempo real</li>
                <li>Padrões de venda por região e horário</li>
                <li>Custos de logística e distribuição</li>
            </ul>
            
            <h2>Resultados</h2>
            <p><strong>40% de redução de custos</strong> através de:</p>
            <ul>
                <li>Otimização de rotas de entrega (-25% em combustível)</li>
                <li>Redução de 30% em produtos vencidos</li>
                <li>Melhor alocação de estoque entre lojas</li>
            </ul>
            
            <h2>Conclusão</h2>
            <p>Dados bem utilizados podem transformar completamente a operação de uma empresa. O investimento em análise se pagou em apenas 4 meses.</p>
        `
    },
    {
        id: 5,
        title: "5 Erros Comuns em Projetos de BI",
        excerpt: "Evite os principais erros que podem comprometer seu projeto de Business Intelligence e garantir o sucesso da implementação.",
        category: "bi",
        categoryName: "Business Intelligence",
        date: "20 Dez, 2025",
        readTime: "5 min",
        slug: "erros-comuns-bi",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        content: `
            <h2>Erro #1: Não definir objetivos claros</h2>
            <p>Muitos projetos falham porque não há clareza sobre o que se quer alcançar. Defina KPIs específicos desde o início.</p>
            
            <h2>Erro #2: Ignorar a qualidade dos dados</h2>
            <p>Garbage in, garbage out. Dados ruins geram insights ruins. Invista tempo na limpeza e validação.</p>
            
            <h2>Erro #3: Complexidade excessiva</h2>
            <p>Dashboards com 50+ métricas não são usados. Comece simples e evolua gradualmente.</p>
            
            <h2>Erro #4: Esquecer os usuários finais</h2>
            <p>Envolva os usuários no processo. Um dashboard técnico demais será abandonado.</p>
            
            <h2>Erro #5: Falta de governança de dados</h2>
            <p>Sem regras claras sobre propriedade, acesso e qualidade dos dados, o caos se instala.</p>
            
            <h2>Conclusão</h2>
            <p>Evitando esses erros comuns, você aumenta drasticamente as chances de sucesso do seu projeto de BI.</p>
        `
    },
    {
        id: 6,
        title: "ETL: Automatizando a Coleta de Dados",
        excerpt: "Entenda como processos de ETL podem automatizar a coleta, transformação e carga de dados de múltiplas fontes.",
        category: "tutoriais",
        categoryName: "Tutoriais",
        date: "15 Dez, 2025",
        readTime: "9 min",
        slug: "etl-automatizacao",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
        content: `
            <h2>O que é ETL?</h2>
            <p>ETL significa Extract, Transform, Load (Extrair, Transformar, Carregar). É o processo de mover dados de várias fontes para um data warehouse.</p>
            
            <h2>Extract (Extrair)</h2>
            <p>Colete dados de diferentes fontes: bancos de dados, APIs, planilhas, arquivos CSV, etc.</p>
            
            <h2>Transform (Transformar)</h2>
            <p>Limpe, normalize e estruture os dados. Esta é a etapa mais crítica do processo.</p>
            <p>Exemplos de transformações:</p>
            <ul>
                <li>Padronização de formatos de data</li>
                <li>Remoção de duplicatas</li>
                <li>Cálculo de métricas agregadas</li>
                <li>Enriquecimento com dados externos</li>
            </ul>
            
            <h2>Load (Carregar)</h2>
            <p>Carregue os dados transformados no destino final, geralmente um data warehouse ou data lake.</p>
            
            <h2>Ferramentas populares</h2>
            <ul>
                <li>Apache Airflow (código aberto)</li>
                <li>Talend</li>
                <li>Microsoft SSIS</li>
                <li>Python com pandas</li>
            </ul>
            
            <h2>Conclusão</h2>
            <p>Automatizar o ETL economiza tempo, reduz erros e garante que seus dados estejam sempre atualizados.</p>
        `
    }
];

// ========== VARIÁVEIS GLOBAIS ==========
let filteredPosts = [...posts];
let currentCategory = 'all';
let searchTerm = '';

// ========== ELEMENTOS DO DOM ==========
const postsGrid = document.getElementById('postsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const newsletterForm = document.getElementById('newsletterForm');

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

// Newsletter
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    alert(`Obrigado por se inscrever! Em breve você receberá nossas atualizações no e-mail: ${email}`);
    
    e.target.reset();
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    const modal = document.getElementById('postModal');
    if (e.target === modal) {
        closePostModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePostModal();
    }
});

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

// ========== ANIMAÇÃO NO SCROLL (MENU) ==========
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(posts);
});