# Inglês Médico — USMLE + OET

PWA **offline-first** (vanilla JS, sem build) para treino de **inglês médico**, com preparação
dedicada para o **USMLE** (o inglês que sustenta o Step 2 CK e a residência) e para o
**OET Medicine** (os quatro sub-testes). Interface em **PT-BR**, alvo em **inglês**.

Implementa o **Módulo 18** do PROMPT v3 (adendo médico) reaproveitando a infraestrutura da v3:
SRS, TTS/STT, motor de diálogos ramificados e tutor de IA opcional.

## Como rodar

É um site estático. Sirva a pasta por HTTP (o service worker/PWA exige `http(s)://`, não `file://`):

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Ou qualquer servidor estático (`npx serve`, Nginx, GitHub Pages, etc.). Depois do primeiro
carregamento, funciona **offline** (instalável como app).

## Módulos (grupo "Inglês Médico (USMLE + OET)")

| # | Módulo | O que faz |
|---|--------|-----------|
| 18 | **Vocabulário médico** | Flashcards técnico ↔ leigo ↔ PT (IPA + áudio), SRS e 4 quizzes |
| 19 | **Comunicação clínica** | Frases por função (SOCRATES/ICE/SPIKES/teach-back); ouvir (TTS) e praticar (STT) |
| 20 | **OET Listening** | Consultas → note completion (correção palavra a palavra) + MCQ; áudio uma vez |
| 21 | **OET Reading** | Part A cronometrada (15 min, skim/scan) + MCQ de inferência |
| 22 | **OET Writing** | Case notes → carta (referral/discharge/transfer); contador 180–200, checklist, carta-modelo, correção por IA opcional |
| 23 | **OET Speaking** | Role-plays: modo offline (diálogo ramificado) e modo voz (STT+TTS + IA) com feedback |
| 24 | **USMLE / clínico** | Termos de alto rendimento em enunciados, patient notes (SOAP), abreviações |
| 25 | **Simulado OET** | Mock dos 4 sub-testes → 0–500 por skill + grade A–E; verifica metas ECFMG (350/350/350/300) |

Mais: **Estatísticas** (domínio de vocabulário, acerto por módulo, placar OET vs ECFMG, ofensiva,
XP, conquistas) e **Configurações**.

## Estrutura

```
index.html            shell (carrega tudo, sem bundler)
css/styles.css        tema clínico responsivo
manifest.webmanifest  PWA
sw.js                 service worker (cache-first, offline)
icons/                ícones (svg + png)
data/                 conteúdo separado da lógica (extensível)
  medvocab · medabbrev · clinicalcomm · oet_listening · oet_reading
  oet_writing · oet_speaking · usmle_clinical
js/core/              storage · srs (SM-2) · tts · stt · textmatch · ui · router · progress · badges · ai
js/modules/           common · home · vocab · comm · listening · reading · writing · speaking · usmle · oet_mock · stats · settings
js/app.js             bootstrap (rotas, navegação, service worker)
```

## Tutor de IA (opcional, online)

O núcleo funciona **100% offline**. Apenas dois recursos usam IA: **correção das cartas do
Writing** e **role-play por voz no Speaking**. Para habilitá-los, adicione uma chave da
**Claude API (Anthropic)** em **Configurações** (a chave fica só no seu navegador). Sem chave,
tudo o mais continua funcionando.

## Princípios

- **Corretude clínica é inegociável**: nenhum termo, dose, IPA ou fato clínico foi inventado.
  Priorizou-se qualidade sobre quantidade.
- **Registro duplo**: técnico ↔ leigo ↔ PT em todo o vocabulário.
- **Fidelidade ao formato do OET** em cada sub-teste.
- É **treino de inglês**: não substitui o estudo clínico nem garante aprovação no OET/USMLE.
