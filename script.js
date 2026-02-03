// ========== CONFIGURAÇÃO DE TRADUÇÃO (i18next) ==========
const resources = {
    "pt-BR": {
        translation: {
            "nav_inicio": "Início",
            "nav_proposta": "Nossa Proposta",
            "nav_servicos": "Serviços",
            "nav_sobre": "Sobre",
            "nav_blog": "Blog",
            "nav_precos": "Preços",
            "nav_contato": "Contato",
            "hero_titulo": "Apolo Analytics",
            "hero_subtitulo": "Transforme dados em decisões estratégicas para o seu negócio",
            "hero_btn": "Entre em Contato",
            "prop_titulo": "Nossa Proposta",
            "passo1_titulo": "Consulta Inicial",
            "passo2_titulo": "Diagnóstico",
            "passo3_titulo": "Proposta",
            "passo4_titulo": "Execução",
            "passo5_titulo": "Entrega"
        }
    },
    "en": {
        translation: {
            "nav_inicio": "Home",
            "nav_proposta": "Our Proposal",
            "nav_servicos": "Services",
            "nav_sobre": "About",
            "nav_blog": "Blog",
            "nav_precos": "Pricing",
            "nav_contato": "Contact",
            "hero_titulo": "Apolo Analytics",
            "hero_subtitulo": "Transform data into strategic decisions for your business",
            "hero_btn": "Contact Us",
            "prop_titulo": "Our Proposal",
            "passo1_titulo": "Initial Consultation",
            "passo2_titulo": "Diagnosis",
            "passo3_titulo": "Proposal",
            "passo4_titulo": "Execution",
            "passo5_titulo": "Delivery"
        }
    }
};

// Função para aplicar a tradução
function atualizarTextos() {
    const localize = locI18next.init(i18next);
    localize('body');
}

// Inicializa o i18next
i18next.init({
    lng: localStorage.getItem('userLang') || 'pt-BR',
    resources
}, (err, t) => {
    atualizarTextos();
    const switcher = document.getElementById('language-switcher');
    if(switcher) switcher.value = i18next.language;
});

// Evento do Seletor de Idioma
document.addEventListener('change', (e) => {
    if (e.target.id === 'language-switcher') {
        const novoIdioma = e.target.value;
        i18next.changeLanguage(novoIdioma, () => {
            atualizarTextos();
            localStorage.setItem('userLang', novoIdioma);
            document.documentElement.lang = novoIdioma;
        });
    }
});

// ========== MENU HAMBÚRGUER ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuLinks = document.querySelectorAll('.nav-links a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    menuLinks.forEach((link) => {
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

// ========== SCROLL SUAVE PARA LINKS ÂNCORA ==========
const navLinksAnchor = document.querySelectorAll('a[href^="#"]');

navLinksAnchor.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// ========== FORMULÁRIO GOOGLE ==========
document.addEventListener('DOMContentLoaded', () => {
    const formularios = document.querySelectorAll('.google-form');

    if (formularios.length === 0) return;

    formularios.forEach((formulario) => {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const btnEnviar = formulario.querySelector('button[type="submit"]');
            const msgSucesso = formulario.querySelector('.mensagem-sucesso');

            if (btnEnviar) {
                // Aqui usamos o i18next para o feedback do botão também!
                btnEnviar.innerText = i18next.language === 'en' ? 'Sending...' : 'Enviando...';
                btnEnviar.disabled = true;
            }

            const dados = new FormData(formulario);

            fetch(formulario.action, {
                method: 'POST',
                body: dados,
                mode: 'no-cors',
            })
                .then(() => {
                    formulario.style.display = 'none';
                    if (msgSucesso) msgSucesso.style.display = 'block';
                })
                .catch((error) => {
                    console.error('Erro!', error.message);
                    if (btnEnviar) {
                        btnEnviar.innerText = 'Erro';
                        btnEnviar.disabled = false;
                    }
                });
        });
    });
});