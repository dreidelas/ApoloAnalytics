// ========================================
// FORMULÁRIO DE CONTATO (Google Apps Script)
// Usado na página inicial e no blog
// ========================================

const CONTATO_WHATSAPP = 'https://wa.me/5548988769823?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';
const CONTATO_EMAIL = 'contato@apoloanalytics.com.br';

function mostrarMensagemFormulario(elemento, tipo, html) {
    if (!elemento) return;
    elemento.className = `form-message ${tipo}`;
    elemento.innerHTML = html;
    elemento.hidden = false;
}

document.querySelectorAll('.google-form').forEach((formulario) => {
    // A mensagem fica logo após o formulário (fora dele), para continuar visível quando o formulário é ocultado
    const mensagem = formulario.parentElement.querySelector('.form-message');
    const btnEnviar = formulario.querySelector('button[type="submit"]');
    const textoBotao = btnEnviar ? btnEnviar.textContent.trim() : '';

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (btnEnviar) {
            btnEnviar.textContent = 'Enviando...';
            btnEnviar.disabled = true;
        }
        if (mensagem) mensagem.hidden = true;

        // 'no-cors' não permite ler a resposta do Apps Script: só falhas de rede caem no catch
        fetch(formulario.action, {
            method: 'POST',
            body: new FormData(formulario),
            mode: 'no-cors',
        })
            .then(() => {
                formulario.hidden = true;
                mostrarMensagemFormulario(
                    mensagem,
                    'success',
                    'Obrigado! Sua mensagem foi enviada e responderemos em até 1 dia útil.<br>' +
                    `Se preferir, fale com a gente pelo <a href="${CONTATO_WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`
                );
            })
            .catch((error) => {
                console.error('Erro ao enviar formulário:', error);
                mostrarMensagemFormulario(
                    mensagem,
                    'error',
                    'Não foi possível enviar sua mensagem. Tente novamente ou fale com a gente pelo ' +
                    `<a href="${CONTATO_WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a> ` +
                    `ou pelo e-mail <a href="mailto:${CONTATO_EMAIL}">${CONTATO_EMAIL}</a>.`
                );
                if (btnEnviar) {
                    btnEnviar.textContent = textoBotao;
                    btnEnviar.disabled = false;
                }
            });
    });
});
