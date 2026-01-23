// ========================================
// ARTIGOS DO BLOG - APOLO ANALYTICS
// ========================================
// Este arquivo contém todos os artigos do blog
// Para adicionar um novo artigo, copie o template abaixo e preencha os campos

const posts = [
    {
        id: 1,
        title: "Não acredita no poder dos Dados?",
        excerpt: "O judiciário dá o exemplo",
        category: "bi",
        categoryName: "Business Intelligence & Data-Driven",
        date: "23 Jan, 2026",
        readTime: "8 min",
        slug: "Data-Driven e Judiciário",
        image: "https://media.istockphoto.com/id/2235904794/pt/foto/senior-project-manager-using-scrum-software.webp?a=1&b=1&s=612x612&w=0&k=20&c=0hlABYeUCjh7yyOQtP39PLfJSX0FyWW9OLDMsb7pJCo=",
        content: `
            <h2>Introdução</h2>
            <p>O poder judiciário de santa catarina decidiu aplicar a 
            cultura Data-Driven na gestão do órgão, a iniciativa faz
             parte do projeto Poder Judiciário do Amanhã, e os efeitos 
             dessa medida já são perceptíveis como aponta o presidente
              do TJSC, Francisco Oliveira Neto, que ao falar dos resultados 
              da atual gestão destacou que o acervo processual da corte caiu 
              de 105 mil para 69 mil em aproximadamente um ano. 
              E mencionou que o resultado apenas foi possível 
              por conta do uso inteligente de dados
               “ A decisão mais acertada foi criar as câmaras de
                enfrentamento de acervo, o que só foi possível porque
                 soubemos olhar para frente e agir com base em dados concretos”,
                  afirmou. 
            </p>
            
            </p> A cultura data driven é fundamental para
             a sobrevivência da eficiência tanto dentro de 
             um órgão ou empresa, deixar de basear decisões
              em “Eu acho”, para guiar se através de informações e 
              dados, deixou há tempos de ser opção e se tornou o 
              básico.</p> 

        
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