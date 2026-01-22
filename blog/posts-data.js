// ========================================
// ARTIGOS DO BLOG - APOLO ANALYTICS
// ========================================
// Este arquivo contém todos os artigos do blog
// Para adicionar um novo artigo, copie o template abaixo e preencha os campos

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
    ,
    {
        id: 3,
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
    
];

// ========================================
// TEMPLATE PARA NOVO ARTIGO
// ========================================
/*
{
    id: 7, // Incrementar sempre
    title: "Título do Artigo",
    excerpt: "Breve descrição que aparece no card (máximo 160 caracteres)",
    category: "bi", // Opções: bi, analise-dados, tutoriais, cases
    categoryName: "Business Intelligence", // Nome completo da categoria
    date: "DD Mmm, YYYY", // Exemplo: "15 Jan, 2026"
    readTime: "X min", // Tempo estimado de leitura
    slug: "titulo-do-artigo-sem-espacos", // URL amigável
    image: "https://images.unsplash.com/photo-XXXXXX?w=800", // URL da imagem
    content: `
        <h2>Título da Seção</h2>
        <p>Parágrafo de texto.</p>
        
        <h3>Subtítulo</h3>
        <p>Mais texto aqui.</p>
        
        <ul>
            <li>Item de lista</li>
            <li>Outro item</li>
        </ul>
        
        <p><strong>Texto em negrito:</strong> explicação.</p>
    `
}
*/