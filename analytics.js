// ========================================
// COOKIES (LGPD) E EVENTOS DO GOOGLE ANALYTICS
// Usado em todas as páginas. O Google Analytics começa com o consentimento
// negado (ver o <head> de cada página) e só grava cookies se o visitante aceitar.
// Nas páginas em subpastas, informe o caminho até a raiz: data-raiz="../"
// ========================================

(function () {
    const CHAVE = 'apoloCookies';
    const raiz = (document.currentScript && document.currentScript.dataset.raiz) || '';

    function lerEscolha() {
        try { return localStorage.getItem(CHAVE); } catch (e) { return null; }
    }

    function salvarEscolha(valor) {
        try { localStorage.setItem(CHAVE, valor); } catch (e) { /* navegação privada */ }
    }

    function atualizarConsentimento(aceito) {
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', { analytics_storage: aceito ? 'granted' : 'denied' });
        }
    }

    // Envia um evento ao GA4 (ex.: rastrearEvento('generate_lead', { origem: 'formulario' }))
    window.rastrearEvento = function (nome, parametros) {
        if (typeof window.gtag === 'function') window.gtag('event', nome, parametros || {});
    };

    // ---------- Aviso de cookies ----------
    const estilo = document.createElement('style');
    estilo.textContent = `
        .cookie-banner { position: fixed; left: 1rem; right: 1rem; bottom: 1rem; z-index: 2000;
            max-width: 720px; margin: 0 auto; padding: 1.25rem 1.5rem; border-radius: 12px;
            background: #0d1a24; color: #eaf1f1; border: 1px solid rgba(1, 175, 255, 0.4);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4); display: flex; gap: 1rem 1.5rem;
            align-items: center; flex-wrap: wrap; font-size: 0.95rem; line-height: 1.5; }
        .cookie-banner[hidden] { display: none; }
        .cookie-banner p { flex: 1 1 320px; margin: 0; }
        .cookie-banner a { color: #5dd5ff; }
        .cookie-botoes { display: flex; gap: 0.75rem; }
        .cookie-botoes button { font: inherit; font-weight: 600; padding: 0.6rem 1.4rem; border-radius: 50px;
            cursor: pointer; border: 2px solid #01afff; }
        .cookie-recusar { background: transparent; color: #eaf1f1; }
        .cookie-aceitar { background: #01afff; color: #fff; }
        .cookie-botoes button:hover { filter: brightness(1.1); }
    `;
    document.head.appendChild(estilo);

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.hidden = true;
    banner.innerHTML = `
        <p>Usamos cookies do Google Analytics para entender como o site é usado e melhorá-lo.
        Você pode aceitar ou recusar. <a href="${raiz}privacidade.html">Saiba mais</a></p>
        <div class="cookie-botoes">
            <button type="button" class="cookie-recusar">Recusar</button>
            <button type="button" class="cookie-aceitar">Aceitar</button>
        </div>`;

    function escolher(aceito) {
        salvarEscolha(aceito ? 'aceito' : 'recusado');
        atualizarConsentimento(aceito);
        banner.hidden = true;
    }

    banner.querySelector('.cookie-aceitar').addEventListener('click', () => escolher(true));
    banner.querySelector('.cookie-recusar').addEventListener('click', () => escolher(false));

    function montarBanner() {
        document.body.appendChild(banner);
        if (!lerEscolha()) banner.hidden = false;
    }

    if (document.body) montarBanner();
    else document.addEventListener('DOMContentLoaded', montarBanner);

    // ---------- Cliques que interessam ao funil ----------
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a, button');
        if (!link) return;

        if (link.classList.contains('js-abrir-cookies')) {
            e.preventDefault();
            banner.hidden = false;
            return;
        }

        const secao = link.closest('section');
        const origem = link.dataset.origem || (secao && secao.id) || (link.classList.contains('whatsapp-float') ? 'botao-flutuante' : 'rodape');

        if (link.classList.contains('js-cta-diagnostico')) {
            window.rastrearEvento('clique_diagnostico', { origem });
        } else if (link.classList.contains('js-cta-fundadores')) {
            window.rastrearEvento('clique_fundadores', { origem });
        } else if (link.id === 'calcCta') {
            window.rastrearEvento('clique_calculadora', { origem });
        } else if ((link.getAttribute('href') || '').includes('wa.me')) {
            window.rastrearEvento('clique_whatsapp', { origem });
        }
    });
})();
