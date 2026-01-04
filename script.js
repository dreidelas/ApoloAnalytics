// FUNÇÃO PARA SCROLL SUAVE ATÉ O CONTATO
// Esta função é chamada quando o botão "Entre em Contato" é clicado
function scrollToContact() {
    // Busca o elemento com id 'contato' no documento
    document.getElementById('contato').scrollIntoView({
        behavior: 'smooth', // Faz o scroll ser suave (animado) ao invés de instantâneo
        block: 'start' // Posiciona o elemento no início da viewport (topo da tela)
    });
}

// EVENTO QUE AGUARDA O CARREGAMENTO COMPLETO DO DOM
// DOMContentLoaded dispara quando o HTML foi completamente carregado e parseado
document.addEventListener('DOMContentLoaded', function() {
    
    // MANIPULAÇÃO DO FORMULÁRIO DE CONTATO
    // Busca o formulário pelo id 'contactForm'
    const form = document.getElementById('contactForm');
    
    // Adiciona um listener para o evento 'submit' (envio do formulário)
    form.addEventListener('submit', function(e) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();
        
        // AQUI VOCÊ PODE ADICIONAR LÓGICA PARA ENVIAR OS DADOS
        // Por exemplo: enviar para um backend com fetch/axios
        // fetch('/api/contato', { method: 'POST', body: formData })
        
        // Exibe um alerta de confirmação para o usuário
        alert('Obrigado pelo contato! Em breve retornaremos sua mensagem.');
        
        // Limpa todos os campos do formulário
        form.reset();
    });
    
    // NAVEGAÇÃO SUAVE PARA LINKS ÂNCORA
    // Seleciona todos os links que começam com '#' (links âncora)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Itera sobre cada link âncora encontrado
    navLinks.forEach(anchor => {
        // Adiciona listener de clique para cada link
        anchor.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link (pular direto para seção)
            e.preventDefault();
            
            // Pega o valor do atributo href (ex: "#servicos")
            const targetId = this.getAttribute('href');
            
            // Busca o elemento alvo usando o id
            const target = document.querySelector(targetId);
            
            // Verifica se o elemento existe na página
            if (target) {
                // Faz scroll suave até o elemento
                target.scrollIntoView({
                    behavior: 'smooth', // Animação suave
                    block: 'start' // Posiciona no topo da viewport
                });
            }
        });
    });
});