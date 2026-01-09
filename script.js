// ========== MENU HAMBÚRGUER ========== 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuLinks = document.querySelectorAll('.nav-links a');

// Toggle do menu ao clicar no hambúrguer
if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ========== SCROLL SUAVE PARA LINKS ÂNCORA ========== 
const navLinksAnchor = document.querySelectorAll('a[href^="#"]');

navLinksAnchor.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== FORMULÁRIO DE CONTATO ========== 
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meu-formulario');
    const btnEnviar = document.getElementById('btn-enviar');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            btnEnviar.innerText = "Enviando...";
            btnEnviar.disabled = true;

            const dados = new FormData(formulario);

            fetch(formulario.action, {
                method: 'POST',
                body: dados,
                mode: 'no-cors'
            })
            .then(() => {
                formulario.style.display = 'none';
                msgSucesso.style.display = 'block';
            })
            .catch(error => {
                console.error('Erro!', error.message);
                btnEnviar.innerText = "Erro ao enviar. Tente novamente.";
                btnEnviar.disabled = false;
            });
        });
    }
});