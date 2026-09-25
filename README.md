# Apolo Analytics — site

Site estático (HTML, CSS e JavaScript puros) publicado em https://apoloanalytics.com.br.

## Antes de publicar

- [ ] **Quem somos** (`index.html`, seção `#sobre`): trocar os textos com contorno laranja tracejado (classe `preencher`) pelo nome, experiência e LinkedIn de cada sócio e depois remover a classe `preencher`. Para usar foto, coloque o arquivo na raiz (ex.: `socio1.jpg`) e troque `<span>S1</span>` por `<img src="socio1.jpg" alt="Nome do sócio">`.
- [ ] **Ferramentas** (`#sobre`, bloco `.ferramentas`): deixar só as que vocês dominam.
- [ ] **Condições comerciais**: conferir os prazos das ofertas, as garantias (pagamento 50/50, ajustes, NDA), o desconto de 30% do programa Clientes Fundadores e as respostas da seção de dúvidas (`#faq`). Se mudar uma resposta, ela aparece em dois lugares: no HTML e no bloco `FAQPage` dos dados estruturados, no `<head>`.
- [ ] **Google Apps Script** do formulário: salvar as novas colunas `whatsapp`, `segmento`, `necessidade` e `consentimento`.

## Onde editar

| O quê | Onde |
| --- | --- |
| Preços das ofertas ("a partir de") | `PRECOS`, no início de `script.js` (vazio = "Sob consulta") |
| Vagas do programa Clientes Fundadores | `VAGAS_FUNDADORES`, no início de `script.js` (0 esconde a seção) |
| Textos das seções | `index.html` |
| Estilos das seções comerciais | `css/comercial.css` |
| Aviso de cookies e eventos do Google Analytics | `analytics.js` |
| Envio do formulário de contato | `form-contato.js` |
| Política de Privacidade | `privacidade.html` |

## Blog

Os artigos ficam em `blog/posts-data.js`. Depois de adicionar ou editar um artigo, rode na raiz do projeto (precisa do Node.js instalado):

```
node scripts/gerar-blog.mjs
```

O script cria a página de cada artigo em `blog/<slug>/index.html`, atualiza a lista de `blog/index.html` e o `sitemap.xml`. Não edite essas páginas geradas à mão: a próxima execução sobrescreve.

## Eventos do Google Analytics

O Analytics só grava cookies depois que o visitante aceita o aviso. Eventos enviados:

| Evento | Quando |
| --- | --- |
| `generate_lead` | formulário de contato enviado |
| `clique_diagnostico` | clique em "Agendar diagnóstico" |
| `clique_fundadores` | clique em "Quero uma vaga" |
| `clique_calculadora` | clique no botão da calculadora |
| `clique_whatsapp` | clique em qualquer outro link de WhatsApp |

Para contar os envios do formulário como conversão, marque `generate_lead` como evento principal no GA4 (Administrador → Eventos).
