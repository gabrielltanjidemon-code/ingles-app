/* oet_speaking.js — OET Speaking: role-plays médico-paciente.
   Você é o médico; o app/IA é o paciente/cuidador.
   Schema: { id, setting, your_role, patient_card_pt, tasks, useful_language, assessor_focus_pt, dialogue }
   dialogue: turnos do paciente com escolhas do médico (modo OFFLINE ramificado por escolhas).
   Modo VOZ (online): STT+TTS + AI.rolePlayReply / AI.speakingFeedback. */
window.OET_SPEAKING = [
  { id:'oetS0001', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Homem, 55 anos, com dor no peito, ansioso, com medo de estar tendo um infarto.',
    tasks:['Acolher a preocupação do paciente','Explicar a causa provável em linguagem simples','Orientar próximos passos e exames'],
    useful_language:['I can see this is really worrying you…','Let me explain what might be going on…',
      'We’ll need to run a few tests to be sure…','Do you have any questions so far?'],
    assessor_focus_pt:['Relacionamento com o paciente','Clareza da explicação','Empatia','Estrutura'],
    dialogue:[
      { patient:"Doctor, I’m really scared — my dad died of a heart attack. Is that what’s happening to me?", pt:"Doutor, estou muito assustado — meu pai morreu de infarto. É isso que está acontecendo comigo?",
        choices:[
          { text:"I can see this is really frightening for you. Let’s work through it together and I’ll be honest with you.", quality:'good', feedback_pt:'Ótimo: valida o medo e oferece parceria (relacionamento + empatia).' },
          { text:"Let’s not jump to conclusions. Tell me about the pain.", quality:'ok', feedback_pt:'Aceitável, mas primeiro reconheça o medo antes de ir aos fatos.' },
          { text:"Most chest pain isn’t a heart attack, so try not to worry.", quality:'poor', feedback_pt:'Evite tranquilizar antes de avaliar; soa como minimizar a preocupação.' }
        ] },
      { patient:"Okay… so what do you think is causing it?", pt:"Certo… então o que você acha que está causando?",
        choices:[
          { text:"There are a few possible causes. To be safe, I’d like to do an ECG and some blood tests now.", quality:'good', feedback_pt:'Explica com honestidade e propõe conduta clara (estrutura + segurança).' },
          { text:"It’s probably just muscle strain.", quality:'poor', feedback_pt:'Não descarte causas graves sem avaliar; pode dar falsa segurança.' }
        ] },
      { patient:"Will the tests take long?", pt:"Os exames vão demorar?",
        choices:[
          { text:"The ECG is quick and painless; bloods take a little longer. I’ll stay updated and keep you informed.", quality:'good', feedback_pt:'Fecha com clareza e teach-back implícito; mantém o paciente informado.' },
          { text:"Not too long. Try not to worry while we wait.", quality:'ok', feedback_pt:'Responde, mas "try not to worry" pouco acolhe; dê informação concreta do que vai acontecer.' },
          { text:"I can’t say — it depends how busy we are today.", quality:'poor', feedback_pt:'Vago e impessoal; aumenta a ansiedade de quem está com medo de infarto.' }
        ] }
    ] },

  { id:'oetS0002', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 34 anos, com enxaqueca frequente; frustrada porque os analgésicos não funcionam.',
    tasks:['Explorar o impacto na vida dela','Explicar a diferença entre alívio e prevenção','Acordar um plano de tratamento'],
    useful_language:['That sounds exhausting…','There are two types of treatment we can use…',
      'How would you feel about trying…?','Let’s agree a plan together.'],
    assessor_focus_pt:['Empatia','Explicação de opções','Decisão compartilhada','Clareza'],
    dialogue:[
      { patient:"I’ve tried everything and nothing helps. These headaches are ruining my life.", pt:"Já tentei de tudo e nada ajuda. Essas dores estão acabando com minha vida.",
        choices:[
          { text:"That sounds absolutely exhausting. Can you tell me how it’s affecting your day-to-day life?", quality:'good', feedback_pt:'Empatia + pergunta aberta sobre impacto (ICE).' },
          { text:"Have you tried taking the tablets earlier?", quality:'ok', feedback_pt:'Pergunta útil, mas reconheça a frustração primeiro.' }
        ] },
      { patient:"I miss work at least twice a month. Painkillers just don’t touch it.", pt:"Falto ao trabalho pelo menos duas vezes por mês. Os analgésicos não fazem efeito.",
        choices:[
          { text:"There are two kinds of treatment: one to stop an attack, and one taken daily to prevent them. Shall I explain both?", quality:'good', feedback_pt:'Signposting claro entre alívio e prevenção.' },
          { text:"You just need a stronger painkiller.", quality:'poor', feedback_pt:'Simplista; ignora a prevenção, que é o ponto-chave aqui.' }
        ] },
      { patient:"A preventer sounds good, but will I have to take it forever?", pt:"O preventivo parece bom, mas terei que tomar para sempre?",
        choices:[
          { text:"Not necessarily — we’d review it after a few months and decide together. How does that sound?", quality:'good', feedback_pt:'Decisão compartilhada + tranquiliza com honestidade.' },
          { text:"Let’s not think about forever — the first step is just to start it.", quality:'ok', feedback_pt:'Desvia da pergunta; responda com honestidade antes de propor o passo.' },
          { text:"Yes, migraine preventers are usually for life.", quality:'poor', feedback_pt:'Impreciso: preventivos são revisados e muitas vezes retirados; fecha a decisão sem a paciente.' }
        ] }
    ] },

  { id:'oetS0003', setting:'Hospital ward', your_role:'doctor',
    patient_card_pt:'Homem, 68 anos, recém-diagnosticado com diabetes tipo 2; confuso sobre o que isso significa.',
    tasks:['Verificar o que ele já entende','Explicar o diagnóstico sem jargão','Orientar os primeiros passos'],
    useful_language:['What do you already know about diabetes?','In simple terms…',
      'The good news is that a lot of this is manageable…','What questions do you have?'],
    assessor_focus_pt:['Verificar entendimento prévio','Evitar jargão','Tranquilizar','Teach-back'],
    dialogue:[
      { patient:"They said my sugar is high. Does that mean I’ll need injections?", pt:"Disseram que meu açúcar está alto. Isso significa que vou precisar de injeções?",
        choices:[
          { text:"Good question. Before I explain, can I ask what you already know about diabetes?", quality:'good', feedback_pt:'Verifica o entendimento prévio antes de explicar (ICE).' },
          { text:"No, not yet. Let me explain the disease.", quality:'ok', feedback_pt:'OK, mas checar o conhecimento prévio dá uma explicação mais sob medida.' }
        ] },
      { patient:"I don’t really know much, to be honest.", pt:"Sinceramente, não sei muita coisa.",
        choices:[
          { text:"In simple terms, your body isn’t handling sugar as well as it should. We can often manage it with diet, tablets, and activity.", quality:'good', feedback_pt:'Explicação sem jargão + mensagem tranquilizadora.' },
          { text:"You have insulin resistance with beta-cell dysfunction.", quality:'poor', feedback_pt:'Jargão demais; o paciente não vai entender.' }
        ] },
      { patient:"So what should I do first?", pt:"Então o que devo fazer primeiro?",
        choices:[
          { text:"Let’s start with small diet changes and I’ll arrange a diabetes nurse. Could you tell me back what you’ll change first?", quality:'good', feedback_pt:'Primeiros passos claros + teach-back.' },
          { text:"Cut down on sugar and lose some weight — that’s the main thing.", quality:'ok', feedback_pt:'Direção certa, mas vaga; sem plano concreto, apoio nem teach-back.' },
          { text:"I’ll give you a leaflet — it’s all explained in there.", quality:'poor', feedback_pt:'Delegar tudo ao folheto não é aconselhar; combine o primeiro passo com ele.' }
        ] }
    ] },

  { id:'oetS0004', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 60 anos, com hipertensão, que parou os remédios porque "se sente bem".',
    tasks:['Explorar por que ela parou','Explicar por que o tratamento importa mesmo sem sintomas','Negociar um plano'],
    useful_language:['Help me understand what led you to stop…','High blood pressure often has no symptoms…',
      'What matters to me is keeping you well long-term…','Could we agree to…?'],
    assessor_focus_pt:['Explorar sem julgar','Explicar risco futuro','Negociação','Respeito à autonomia'],
    dialogue:[
      { patient:"I stopped the tablets months ago. I feel completely fine without them.", pt:"Parei os comprimidos há meses. Me sinto perfeitamente bem sem eles.",
        choices:[
          { text:"Thanks for being honest. Help me understand what led you to stop?", quality:'good', feedback_pt:'Sem julgamento + explora as razões (ideas/concerns).' },
          { text:"You really shouldn’t have done that.", quality:'poor', feedback_pt:'Tom paternalista; prejudica o vínculo.' }
        ] },
      { patient:"Well, if I feel fine, why take medicine that gives me side effects?", pt:"Se me sinto bem, por que tomar remédio que me dá efeitos colaterais?",
        choices:[
          { text:"That’s a fair point. High blood pressure usually has no symptoms — we treat it to prevent a stroke you can’t feel coming.", quality:'good', feedback_pt:'Explica o risco futuro em linguagem acessível.' },
          { text:"Because I told you to.", quality:'poor', feedback_pt:'Autoritário; não respeita a autonomia.' }
        ] },
      { patient:"I see. Maybe I could try again if the side effects are manageable.", pt:"Entendo. Talvez eu tente de novo se os efeitos forem toleráveis.",
        choices:[
          { text:"Could we agree to restart a low dose and review it in two weeks? We’ll find one that suits you.", quality:'good', feedback_pt:'Negociação e plano combinado (decisão compartilhada).' },
          { text:"Good. Make sure you take it every day this time.", quality:'ok', feedback_pt:'Aceita, mas em tom de cobrança; falta combinar dose, revisão e parceria.' },
          { text:"It’s up to you — come back if you get problems again.", quality:'poor', feedback_pt:'Joga a decisão para a paciente sem plano nem retorno marcado.' }
        ] }
    ] },

  { id:'oetS0005', setting:'Emergency department', your_role:'doctor',
    patient_card_pt:'Homem, 40 anos, com entorse de tornozelo, ansioso para voltar ao trabalho amanhã.',
    tasks:['Explicar a lesão e o manejo (RICE)','Definir expectativas de recuperação','Dar orientações de retorno (safety-netting)'],
    useful_language:['The good news is nothing is broken…','For the first 48 hours…',
      'It should settle over…','Come back if…'],
    assessor_focus_pt:['Clareza das instruções','Expectativas realistas','Safety-netting','Empatia com a rotina'],
    dialogue:[
      { patient:"Is it broken, doctor? I really need to be at work tomorrow.", pt:"Está quebrado, doutor? Preciso muito trabalhar amanhã.",
        choices:[
          { text:"The good news is the X-ray shows nothing is broken — it’s a sprain. I know timing is tricky with work.", quality:'good', feedback_pt:'Tranquiliza com fato + reconhece a preocupação com o trabalho.' },
          { text:"It’s just a sprain, you’ll be fine.", quality:'ok', feedback_pt:'Correto, mas seco; falta empatia e orientação.' }
        ] },
      { patient:"So what do I do with it?", pt:"E o que faço com ele?",
        choices:[
          { text:"For the first 48 hours: rest, ice, compression, and keep it elevated. Simple painkillers will help.", quality:'good', feedback_pt:'Instruções RICE claras e memoráveis.' },
          { text:"Rest it and take painkillers if you need them.", quality:'ok', feedback_pt:'Parcialmente certo, mas incompleto: faltam gelo, compressão e elevação.' },
          { text:"Nothing much — these things sort themselves out.", quality:'poor', feedback_pt:'Minimiza e não orienta o autocuidado; perde a consulta.' }
        ] },
      { patient:"When can I go back to normal?", pt:"Quando volto ao normal?",
        choices:[
          { text:"Most sprains settle over one to two weeks. Come back if it’s no better, or you can’t bear weight at all.", quality:'good', feedback_pt:'Expectativa realista + safety-netting.' },
          { text:"Give it some time and see how it feels.", quality:'ok', feedback_pt:'Vago; dê um prazo realista e diga quando procurar ajuda.' },
          { text:"Keep off it completely for a month, just to be safe.", quality:'poor', feedback_pt:'Incorreto: imobilização prolongada atrasa a recuperação de entorses leves.' }
        ] }
    ] },

  { id:'oetS0006', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 45 anos, fumante, que você precisa aconselhar a parar de fumar (ela é ambivalente).',
    tasks:['Perguntar permissão para falar sobre o tabagismo','Explorar prós e contras percebidos','Oferecer apoio, sem pressionar'],
    useful_language:['Would it be okay to talk about smoking?','What do you enjoy about it, and what worries you?',
      'There’s support available whenever you’re ready…','It’s your decision, and I’m here to help.'],
    assessor_focus_pt:['Entrevista motivacional','Respeito à autonomia','Empatia','Oferecer apoio concreto'],
    dialogue:[
      { patient:"I know smoking’s bad, but it’s the one thing that helps me relax.", pt:"Sei que fumar faz mal, mas é a única coisa que me relaxa.",
        choices:[
          { text:"Would it be okay if we talked about it for a moment? I’m not here to lecture you.", quality:'good', feedback_pt:'Pede permissão + reduz a defensividade (entrevista motivacional).' },
          { text:"You have to stop now, it’s dangerous.", quality:'poor', feedback_pt:'Confronto direto tende a aumentar a resistência.' }
        ] },
      { patient:"I’ve tried before and failed, so what’s the point?", pt:"Já tentei antes e falhei, então qual é o sentido?",
        choices:[
          { text:"Most people try several times before it sticks — that’s normal, not failure. What made it hard last time?", quality:'good', feedback_pt:'Normaliza recaídas + explora barreiras.' },
          { text:"This time will be different if you really commit to it.", quality:'ok', feedback_pt:'Bem-intencionado, mas soa a sermão; explore o que dificultou da última vez.' },
          { text:"If you don’t want to quit, that’s your choice.", quality:'poor', feedback_pt:'Confunde respeitar a autonomia com desengajar; não explora a ambivalência.' }
        ] },
      { patient:"Maybe I could try again with some help.", pt:"Talvez eu tente de novo com alguma ajuda.",
        choices:[
          { text:"There’s good support — nicotine replacement and a stop-smoking service. It’s your decision, and I’ll help whenever you’re ready.", quality:'good', feedback_pt:'Oferece apoio concreto respeitando a autonomia.' },
          { text:"Great. I’ll book you a follow-up and we’ll sort it out then.", quality:'ok', feedback_pt:'Aproveita a abertura, mas adia; nomeie já os apoios disponíveis.' },
          { text:"Remember, in the end it all comes down to willpower.", quality:'poor', feedback_pt:'Contraria a evidência (apoio + fármacos dobram as chances) e culpabiliza.' }
        ] }
    ] },

  { id:'oetS0007', setting:'Hospital ward', your_role:'doctor',
    patient_card_pt:'Cuidador (filho) de paciente idosa com demência; ansioso sobre a alta e como vai cuidar em casa.',
    tasks:['Reconhecer a ansiedade do cuidador','Explicar o plano de alta e apoios','Verificar entendimento e dúvidas'],
    useful_language:['I can see you’re concerned about coping at home…','We won’t send her home without support…',
      'Let me explain what will be in place…','What worries you most about managing?'],
    assessor_focus_pt:['Empatia com o cuidador','Clareza sobre apoios','Estrutura','Teach-back'],
    dialogue:[
      { patient:"I’m worried, doctor. How am I supposed to look after Mum on my own?", pt:"Estou preocupado, doutor. Como vou cuidar da minha mãe sozinho?",
        choices:[
          { text:"I can hear how much you care, and it’s a big responsibility. We won’t discharge her without support in place.", quality:'good', feedback_pt:'Valida o cuidador + tranquiliza sobre apoio.' },
          { text:"There’s nothing to worry about, she’s fine to go home.", quality:'poor', feedback_pt:'Minimiza a preocupação legítima do cuidador.' }
        ] },
      { patient:"What kind of help would there be?", pt:"Que tipo de ajuda haveria?",
        choices:[
          { text:"We can arrange carers to visit, aids at home, and a follow-up. Let me go through each one.", quality:'good', feedback_pt:'Explica os apoios com estrutura (signposting).' },
          { text:"Don’t worry — social services will take care of everything.", quality:'ok', feedback_pt:'Tranquiliza demais e não explica; o cuidador precisa conhecer cada apoio.' },
          { text:"That’s something the discharge team deals with, not me.", quality:'poor', feedback_pt:'Empurra a responsabilidade e quebra a confiança no momento da dúvida.' }
        ] },
      { patient:"That helps. I just don’t want to get it wrong.", pt:"Isso ajuda. Só não quero errar.",
        choices:[
          { text:"That’s completely understandable. Could you tell me what you’ll do if she becomes unwell overnight?", quality:'good', feedback_pt:'Teach-back gentil para confirmar segurança.' },
          { text:"You’ll be fine — it’s easier than it sounds.", quality:'ok', feedback_pt:'Gentil, mas não verifica o entendimento; o teach-back daria segurança real.' },
          { text:"It’s all written in the discharge letter.", quality:'poor', feedback_pt:'Papel não substitui a checagem de compreensão com quem está inseguro.' }
        ] }
    ] },

  { id:'oetS0008', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Homem, 30 anos, com dor lombar mecânica há 1 semana; quer uma ressonância "para ter certeza".',
    tasks:['Explorar a preocupação por trás do pedido de exame','Explicar por que a imagem não é necessária agora','Combinar um plano e safety-netting'],
    useful_language:['What’s making you keen on a scan?','For back pain like this, a scan rarely helps early on…',
      'What usually works best is…','If any of these red flags appear, we’ll act quickly.'],
    assessor_focus_pt:['Explorar ICE','Explicar sem soar defensivo','Decisão compartilhada','Safety-netting'],
    dialogue:[
      { patient:"I really want an MRI scan, doctor. I need to know what’s wrong.", pt:"Quero muito uma ressonância, doutor. Preciso saber o que há de errado.",
        choices:[
          { text:"Of course you want answers. Can I ask what’s worrying you most about the pain?", quality:'good', feedback_pt:'Explora a preocupação por trás do pedido (ICE).' },
          { text:"You don’t need a scan.", quality:'poor', feedback_pt:'Recusa seca; parece defensivo e fecha o diálogo.' }
        ] },
      { patient:"I’m scared it could be something serious in my spine.", pt:"Tenho medo de ser algo grave na coluna.",
        choices:[
          { text:"That’s a natural fear. For this kind of back pain, early scans often show harmless changes and can cause more worry, not less.", quality:'good', feedback_pt:'Explica com honestidade por que a imagem não ajuda agora.' },
          { text:"A scan wouldn’t show anything useful at this stage.", quality:'ok', feedback_pt:'A mensagem é essa, mas dita seca soa a recusa; acolha o medo e explique o porquê.' },
          { text:"You definitely don’t need a scan — let’s move on.", quality:'poor', feedback_pt:'Descarta o medo sem explicar; o paciente sai convencido do contrário.' }
        ] },
      { patient:"Okay… so what’s the plan then?", pt:"Certo… então qual é o plano?",
        choices:[
          { text:"Keep gently active, simple painkillers, and I’ll review you in two weeks. If you get leg weakness or bladder problems, come straight back.", quality:'good', feedback_pt:'Plano claro + safety-netting específico.' },
          { text:"Painkillers and plenty of rest, and come back if it doesn’t settle.", quality:'ok', feedback_pt:'"Rest" contraria a orientação atual (manter-se ativo); safety-netting vago.' },
          { text:"There isn’t much to do — back pain just happens sometimes.", quality:'poor', feedback_pt:'Niilismo terapêutico; há plano claro e sinais de alarme a ensinar.' }
        ] }
    ] },

  { id:'oetS0009', setting:'Antenatal clinic', your_role:'doctor',
    patient_card_pt:'Gestante, 28 anos, 30 semanas, preocupada porque a pressão está um pouco alta hoje.',
    tasks:['Tranquilizar sem minimizar','Explicar o plano de monitorização','Orientar sinais de alarme'],
    useful_language:['Your reading is a little up today…','On its own it’s not alarming, but we’ll keep an eye…',
      'I’d like to see you again in…','Contact us straight away if…'],
    assessor_focus_pt:['Tranquilizar com honestidade','Clareza do plano','Safety-netting','Empatia'],
    dialogue:[
      { patient:"Is my blood pressure dangerous for the baby, doctor?", pt:"Minha pressão é perigosa para o bebê, doutor?",
        choices:[
          { text:"Your reading is a little up today. On its own it isn’t alarming, but it’s right to keep a close eye on it.", quality:'good', feedback_pt:'Honesto e tranquilizador ao mesmo tempo.' },
          { text:"It’s nothing, don’t worry.", quality:'poor', feedback_pt:'Minimiza; pode passar despercebido um quadro de pré-eclâmpsia.' }
        ] },
      { patient:"What happens now?", pt:"O que acontece agora?",
        choices:[
          { text:"I’d like to check your urine and see you again in two days to track it. Most of the time it settles.", quality:'good', feedback_pt:'Plano de monitorização claro.' },
          { text:"We’ll keep an eye on it at your next routine appointment.", quality:'ok', feedback_pt:'Intervalo longo demais para PA elevada na gestação; a revisão deve ser em dias.' },
          { text:"Nothing for now — it’s probably just a blip.", quality:'poor', feedback_pt:'Minimiza um possível sinal de pré-eclâmpsia sem plano de vigilância.' }
        ] },
      { patient:"Should I be watching for anything?", pt:"Devo ficar atenta a algo?",
        choices:[
          { text:"Yes — contact us straight away if you get a bad headache, blurred vision, or swelling in your face and hands.", quality:'good', feedback_pt:'Safety-netting específico para pré-eclâmpsia.' },
          { text:"Just come in if you feel unwell in yourself.", quality:'ok', feedback_pt:'Genérico; liste sintomas específicos (cefaleia forte, visão turva, edema).' },
          { text:"No — try not to think about it too much.", quality:'poor', feedback_pt:'Nega a orientação de segurança que ela pediu; arriscado na gestação.' }
        ] }
    ] },

  { id:'oetS0010', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 50 anos, com resultado de exame normal, mas ainda muito ansiosa e insatisfeita.',
    tasks:['Reconhecer a ansiedade persistente','Explicar o resultado com clareza','Combinar seguimento e apoio'],
    useful_language:['I can see the worry hasn’t gone away…','The results are reassuring, and here’s what they mean…',
      'Let’s plan how we keep an eye on things…','You can always come back if…'],
    assessor_focus_pt:['Validar sentimentos','Explicação clara de exame normal','Não descartar a pessoa','Plano'],
    dialogue:[
      { patient:"You say it’s normal, but I still feel something’s wrong.", pt:"Você diz que está normal, mas ainda sinto que algo está errado.",
        choices:[
          { text:"I can see the worry hasn’t gone away, and that’s important to me. Let’s talk it through properly.", quality:'good', feedback_pt:'Valida a ansiedade em vez de descartar.' },
          { text:"The test is normal, so there’s nothing wrong.", quality:'poor', feedback_pt:'Fecha a conversa e ignora o sofrimento real.' }
        ] },
      { patient:"So what does the result actually mean?", pt:"Então o que o resultado significa de fato?",
        choices:[
          { text:"It means the serious causes we worried about are very unlikely. It doesn’t mean your symptoms aren’t real.", quality:'good', feedback_pt:'Explica exame normal sem invalidar sintomas.' },
          { text:"It means everything is fine.", quality:'ok', feedback_pt:'"Fine" invalida sintomas reais; diga o que o exame exclui e o que não exclui.' },
          { text:"It means there’s nothing wrong with you.", quality:'poor', feedback_pt:'Soa a "você está inventando"; quebra a relação terapêutica.' }
        ] },
      { patient:"Alright. What if it gets worse?", pt:"Está bem. E se piorar?",
        choices:[
          { text:"Let’s review in a month, and you can always come back sooner if things change. You won’t be dismissed.", quality:'good', feedback_pt:'Plano + porta aberta reduzem a ansiedade.' },
          { text:"Then we would think about doing more tests.", quality:'ok', feedback_pt:'Aceitável, mas vago; combine prazo de revisão e deixe a porta aberta explícita.' },
          { text:"It won’t get worse — the test was normal.", quality:'poor', feedback_pt:'Promessa que não se pode fazer; sem plano se algo mudar.' }
        ] }
    ] },

  { id:'oetS0011', setting:'Hospital ward', your_role:'doctor',
    patient_card_pt:'Homem, 72 anos, que vai receber alta após pneumonia; precisa entender a medicação e o retorno.',
    tasks:['Explicar a medicação de alta','Confirmar entendimento (teach-back)','Orientar quando procurar ajuda'],
    useful_language:['You’ll take this antibiotic for…','It’s important to finish the whole course…',
      'Just so I’ve explained clearly, could you tell me…?','If your breathing gets worse…'],
    assessor_focus_pt:['Clareza da medicação','Teach-back','Safety-netting','Estrutura'],
    dialogue:[
      { patient:"So I’m allowed home? What do I need to take?", pt:"Então posso ir para casa? O que preciso tomar?",
        choices:[
          { text:"Yes. You’ll take one antibiotic tablet three times a day for three more days, with food.", quality:'good', feedback_pt:'Instrução de dose clara e específica.' },
          { text:"Just carry on with your tablets.", quality:'poor', feedback_pt:'Vago; o paciente não saberá o que fazer.' }
        ] },
      { patient:"Do I need to finish them even if I feel better?", pt:"Preciso terminar mesmo se me sentir melhor?",
        choices:[
          { text:"Yes, it’s important to finish the whole course. Just so I’ve explained clearly, how will you take them?", quality:'good', feedback_pt:'Reforça adesão + teach-back.' },
          { text:"Yes, you need to finish them.", quality:'ok', feedback_pt:'Correto, mas seco; explique o porquê e confirme o entendimento.' },
          { text:"If you’re feeling better, you can stop them early.", quality:'poor', feedback_pt:'Contraria a prescrição do curso; mina a adesão e o tratamento.' }
        ] },
      { patient:"Got it. And if I feel unwell again?", pt:"Entendi. E se eu me sentir mal de novo?",
        choices:[
          { text:"If your breathing gets worse, you cough up blood, or the fever returns, come straight back.", quality:'good', feedback_pt:'Safety-netting específico.' },
          { text:"Just come back whenever you like.", quality:'ok', feedback_pt:'Porta aberta, mas sem os sinais específicos de alarme.' },
          { text:"You won’t be — the antibiotics will sort it out.", quality:'poor', feedback_pt:'Garantia indevida e nenhum safety-netting.' }
        ] }
    ] },

  { id:'oetS0012', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Adolescente, 16 anos, com acne, envergonhado; preocupado com a aparência e com o que os colegas pensam.',
    tasks:['Criar vínculo e reduzir o constrangimento','Explicar as opções de tratamento','Combinar um plano com expectativas realistas'],
    useful_language:['Thanks for coming in — this is really common…','There are several treatments we can try…',
      'It can take a few weeks to work…','How does that sound to you?'],
    assessor_focus_pt:['Vínculo com adolescente','Normalizar sem minimizar','Expectativas realistas','Autonomia'],
    dialogue:[
      { patient:"It’s embarrassing… everyone at school stares at my skin.", pt:"É constrangedor… todo mundo na escola fica olhando minha pele.",
        choices:[
          { text:"Thanks for coming in — I know it can feel really personal. Acne is very common and, importantly, treatable.", quality:'good', feedback_pt:'Reduz o constrangimento + normaliza sem minimizar.' },
          { text:"It’s just teenage skin, it’ll pass.", quality:'poor', feedback_pt:'Minimiza algo que afeta muito a autoestima.' }
        ] },
      { patient:"Can you actually do something about it?", pt:"Você consegue fazer algo por isso?",
        choices:[
          { text:"Yes. We can start with a cream, and if needed step up to tablets. Shall I explain how each works?", quality:'good', feedback_pt:'Oferece opções com estrutura.' },
          { text:"There are treatments, yes. Let’s try something simple first.", quality:'ok', feedback_pt:'Ok, mas perde a chance de explicar as opções e envolver o adolescente.' },
          { text:"Acne can’t really be cured — you’ll grow out of it.", quality:'poor', feedback_pt:'Desanima e é impreciso: há tratamento eficaz em escada.' }
        ] },
      { patient:"How fast will it work?", pt:"Em quanto tempo funciona?",
        choices:[
          { text:"It usually takes six to eight weeks to see a real difference, so try to stick with it. How does that sound?", quality:'good', feedback_pt:'Expectativa realista + decisão compartilhada.' },
          { text:"Quite quickly for most people.", quality:'ok', feedback_pt:'Expectativa irreal (são semanas); frustração leva ao abandono do tratamento.' },
          { text:"Hard to say — everyone’s different.", quality:'poor', feedback_pt:'Não orienta; sem expectativa realista nem incentivo à adesão.' }
        ] }
    ] },

  { id:'oetS0013', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 26 anos, buscando contracepção; quer entender as opções e efeitos.',
    tasks:['Explorar preferências e estilo de vida','Explicar 2–3 opções em linguagem simples','Apoiar a decisão dela'],
    useful_language:['Let’s find something that fits your life…','Broadly, there are a few options…',
      'Each has pros and cons…','What matters most to you?'],
    assessor_focus_pt:['Decisão compartilhada','Clareza das opções','Sem jargão','Respeito às preferências'],
    dialogue:[
      { patient:"I want to go on contraception but I don’t know what to choose.", pt:"Quero começar a contracepção, mas não sei o que escolher.",
        choices:[
          { text:"Let’s find something that fits your life. Can I ask what matters most to you — convenience, no daily pill, or hormones?", quality:'good', feedback_pt:'Explora preferências antes de propor (decisão compartilhada).' },
          { text:"Just take the pill, it’s easiest.", quality:'poor', feedback_pt:'Impõe uma opção sem considerar a pessoa.' }
        ] },
      { patient:"I keep forgetting to take things every day.", pt:"Sempre esqueço de tomar coisas todo dia.",
        choices:[
          { text:"In that case, longer-acting options like an implant or coil might suit you better. Shall I explain those?", quality:'good', feedback_pt:'Adapta as opções ao estilo de vida.' },
          { text:"You could set a daily alarm on your phone for the pill.", quality:'ok', feedback_pt:'Ajuda prática, mas ignora os métodos que não dependem de memória (LARC).' },
          { text:"You’ll just have to be more careful about remembering.", quality:'poor', feedback_pt:'Culpabiliza; não adapta o método à vida real dela.' }
        ] },
      { patient:"The implant sounds good. Is that okay?", pt:"O implante parece bom. Tudo bem?",
        choices:[
          { text:"Absolutely — it’s your choice, and it’s a good fit for what you’ve told me. I’ll go through what to expect.", quality:'good', feedback_pt:'Apoia a decisão dela e prepara expectativas.' },
          { text:"Yes, that’s fine. I’ll book the fitting for you.", quality:'ok', feedback_pt:'Atende, mas sem preparar expectativas (efeitos, o que esperar do implante).' },
          { text:"Are you sure? Most women just take the pill.", quality:'poor', feedback_pt:'Questiona a escolha informada dela sem motivo clínico.' }
        ] }
    ] },

  { id:'oetS0014', setting:'Emergency department', your_role:'doctor',
    patient_card_pt:'Homem, 48 anos, com cólica renal intensa; com dor e irritado com a espera.',
    tasks:['Reconhecer a dor e a espera','Explicar o manejo (analgesia + exames)','Definir os próximos passos'],
    useful_language:['I’m sorry you’ve been in so much pain and had to wait…','Let’s get your pain under control first…',
      'We’ll do a urine test and a scan…','Here’s what happens next…'],
    assessor_focus_pt:['Reconhecer a dor/espera','Priorizar analgesia','Clareza dos próximos passos','Manter a calma'],
    dialogue:[
      { patient:"I’ve been waiting for an hour in agony — this is ridiculous!", pt:"Estou esperando há uma hora com dor terrível — isto é um absurdo!",
        choices:[
          { text:"I’m sorry you’ve been in so much pain and had to wait. Let’s get your pain under control right now.", quality:'good', feedback_pt:'Reconhece + prioriza analgesia (não se defende).' },
          { text:"We’re very busy, you’ll have to be patient.", quality:'poor', feedback_pt:'Defensivo; agrava a frustração.' }
        ] },
      { patient:"Thank you. What’s actually causing this?", pt:"Obrigado. O que está causando isso?",
        choices:[
          { text:"This is likely a kidney stone. We’ll do a urine test and a scan to confirm and check the size.", quality:'good', feedback_pt:'Explica a causa provável + plano.' },
          { text:"Some kind of pain around the kidney — the tests will tell us more.", quality:'ok', feedback_pt:'Vago; dê a hipótese provável e o plano em linguagem simples.' },
          { text:"Too early to say. Let’s just wait for the results.", quality:'poor', feedback_pt:'Não explica nem estrutura; paciente com dor precisa de plano claro.' }
        ] },
      { patient:"And then what?", pt:"E depois?",
        choices:[
          { text:"Small stones often pass with fluids and pain relief; larger ones may need a specialist. I’ll keep you updated.", quality:'good', feedback_pt:'Próximos passos claros + manter informado.' },
          { text:"We’ll decide once the results are back.", quality:'ok', feedback_pt:'Aceitável, mas perde a chance de antecipar os cenários (pedra pequena × grande).' },
          { text:"You might well need surgery for this.", quality:'poor', feedback_pt:'Salta ao pior cenário sem contexto; assusta desnecessariamente.' }
        ] }
    ] },

  { id:'oetS0015', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 55 anos, com sintomas de menopausa afetando o sono e o humor; hesitante quanto à terapia hormonal.',
    tasks:['Validar os sintomas','Explicar opções (incluindo THS) com equilíbrio','Apoiar a decisão informada'],
    useful_language:['These symptoms are very real and treatable…','There are hormonal and non-hormonal options…',
      'Let’s weigh up the benefits and risks for you…','What are your thoughts?'],
    assessor_focus_pt:['Validar sintomas','Explicar riscos/benefícios','Decisão informada','Empatia'],
    dialogue:[
      { patient:"The hot flushes and poor sleep are wearing me down, but I’ve heard HRT is dangerous.", pt:"As ondas de calor e o sono ruim estão me esgotando, mas ouvi que a THS é perigosa.",
        choices:[
          { text:"These symptoms are very real and very treatable. The picture on HRT is more balanced than the headlines suggest — shall we go through it?", quality:'good', feedback_pt:'Valida + corrige mito com equilíbrio.' },
          { text:"HRT is fine, just take it.", quality:'poor', feedback_pt:'Ignora as preocupações e simplifica riscos reais.' }
        ] },
      { patient:"Are there options without hormones?", pt:"Existem opções sem hormônios?",
        choices:[
          { text:"Yes — lifestyle measures and some non-hormonal medicines can help too. Each has pros and cons.", quality:'good', feedback_pt:'Apresenta alternativas de forma equilibrada.' },
          { text:"HRT really is the most effective option, though.", quality:'ok', feedback_pt:'Pode ser verdade, mas não responde ao que ela perguntou; explore o pedido dela.' },
          { text:"Not really — it’s HRT or putting up with it.", quality:'poor', feedback_pt:'Incorreto: existem medidas e fármacos não hormonais com benefício.' }
        ] },
      { patient:"I think I’d like to consider HRT after all.", pt:"Acho que gostaria de considerar a THS, afinal.",
        choices:[
          { text:"That’s a reasonable choice for your symptoms. Let’s weigh the benefits and risks for you specifically and decide together.", quality:'good', feedback_pt:'Decisão informada e individualizada.' },
          { text:"Sure — I’ll write the prescription for you now.", quality:'ok', feedback_pt:'Atende, mas pula a conversa individualizada de benefícios e riscos.' },
          { text:"I thought you didn’t want hormones?", quality:'poor', feedback_pt:'Tom de censura; mudar de ideia após informação é o objetivo da consulta.' }
        ] }
    ] },

  { id:'oetS0016', setting:'Hospital ward', your_role:'doctor',
    patient_card_pt:'Homem, 65 anos, no pós-operatório, recusando a fisioterapia porque tem medo de sentir dor.',
    tasks:['Explorar o medo da dor','Explicar por que a mobilização precoce importa','Negociar um primeiro passo pequeno'],
    useful_language:['I understand you’re worried it’ll hurt…','Getting moving early actually helps prevent…',
      'We’ll go at your pace and manage the pain…','Could we try just…?'],
    assessor_focus_pt:['Explorar o medo','Explicar benefício','Negociar','Manejo da dor'],
    dialogue:[
      { patient:"I don’t want the physio today — it’s going to hurt too much.", pt:"Não quero fisioterapia hoje — vai doer demais.",
        choices:[
          { text:"I understand you’re worried it’ll hurt. Can you tell me what you’re most afraid of?", quality:'good', feedback_pt:'Explora o medo em vez de insistir.' },
          { text:"You have to do it, doctor’s orders.", quality:'poor', feedback_pt:'Autoritário; ignora o medo legítimo.' }
        ] },
      { patient:"Last time I moved, the pain was awful.", pt:"Da última vez que me movi, a dor foi terrível.",
        choices:[
          { text:"Let’s make sure your pain relief is working first. Moving early actually helps prevent clots and stiffness.", quality:'good', feedback_pt:'Manejo da dor + explica o porquê da mobilização.' },
          { text:"The physiotherapists will help you with that later today.", quality:'ok', feedback_pt:'Adia e terceiriza; trate a barreira (dor) e explique o porquê de mobilizar.' },
          { text:"You have to get up anyway — doctor’s orders.", quality:'poor', feedback_pt:'Impõe sem manejar a dor nem negociar; gera mais resistência.' }
        ] },
      { patient:"I suppose I could try a little.", pt:"Acho que posso tentar um pouco.",
        choices:[
          { text:"Could we try just sitting on the edge of the bed today? We’ll go at your pace and stop if you need to.", quality:'good', feedback_pt:'Negocia um passo pequeno e alcançável.' },
          { text:"Great — let’s get you walking down the corridor.", quality:'ok', feedback_pt:'Salto grande demais; comece com um passo pequeno e alcançável.' },
          { text:"If it hurts too much, just stay in bed for now.", quality:'poor', feedback_pt:'Desfaz o combinado e reforça o imobilismo (risco de trombose e rigidez).' }
        ] }
    ] },

  { id:'oetS0017', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Mulher, 32 anos, com sintomas de ansiedade; preocupada em ser "julgada" por procurar ajuda.',
    tasks:['Criar segurança e normalizar','Explorar sintomas e impacto','Combinar um plano de apoio'],
    useful_language:['I’m really glad you came in…','Lots of people experience this…',
      'Can you tell me how it’s affecting you?','There are things that genuinely help…'],
    assessor_focus_pt:['Segurança e não julgamento','Escuta ativa','Normalizar','Plano de apoio'],
    dialogue:[
      { patient:"I feel silly being here — it’s probably nothing.", pt:"Me sinto boba de estar aqui — provavelmente não é nada.",
        choices:[
          { text:"I’m really glad you came in. What you’re feeling matters, and there’s nothing silly about it.", quality:'good', feedback_pt:'Cria segurança e reduz o estigma.' },
          { text:"Everyone gets stressed, it’s normal.", quality:'poor', feedback_pt:'Normaliza demais e pode invalidar o sofrimento.' }
        ] },
      { patient:"My heart races and I can’t switch my mind off.", pt:"Meu coração dispara e não consigo desligar a mente.",
        choices:[
          { text:"That sounds exhausting. Can you tell me how it’s affecting your sleep, work, and relationships?", quality:'good', feedback_pt:'Escuta ativa + explora o impacto.' },
          { text:"That’s classic anxiety — very common and not dangerous.", quality:'ok', feedback_pt:'Rotula rápido demais; primeiro escute e explore o impacto na vida dela.' },
          { text:"Have you tried just relaxing a bit more?", quality:'poor', feedback_pt:'Minimiza; "relaxa" não é plano terapêutico e soa a julgamento.' }
        ] },
      { patient:"So is there anything that helps?", pt:"Então há algo que ajude?",
        choices:[
          { text:"Yes — talking therapies help a lot, and we can consider other support together. Let’s start with a plan.", quality:'good', feedback_pt:'Oferece esperança e plano concreto.' },
          { text:"We could start a tablet to take the edge off.", quality:'ok', feedback_pt:'Vai direto ao fármaco; terapias psicológicas são parte central do plano aqui.' },
          { text:"Not much, honestly — some people are just anxious.", quality:'poor', feedback_pt:'Falso e desesperançoso; há tratamentos eficazes para ansiedade.' }
        ] }
    ] },

  { id:'oetS0018', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Homem, 58 anos, com sintomas urinários (jato fraco, noctúria); constrangido em falar do assunto.',
    tasks:['Facilitar o relato sensível','Explorar sintomas urinários','Explicar próximos passos (exames)'],
    useful_language:['These are common questions, so please don’t feel awkward…','Can you tell me about your waterworks?',
      'We’ll check a few things…','This is very treatable.'],
    assessor_focus_pt:['Abordar tema sensível','Perguntas específicas','Tranquilizar','Clareza dos próximos passos'],
    dialogue:[
      { patient:"It’s a bit embarrassing… it’s to do with, you know, going to the toilet.", pt:"É meio constrangedor… é sobre, sabe, ir ao banheiro.",
        choices:[
          { text:"These are questions I ask a lot, so please don’t feel awkward. Take your time.", quality:'good', feedback_pt:'Normaliza e reduz o constrangimento.' },
          { text:"Go on then, out with it.", quality:'poor', feedback_pt:'Impaciente; aumenta o desconforto.' }
        ] },
      { patient:"My flow is weak and I’m up several times at night.", pt:"Meu jato é fraco e levanto várias vezes à noite.",
        choices:[
          { text:"Thank you for telling me. How many times a night, and is there any pain or blood?", quality:'good', feedback_pt:'Perguntas específicas e sinais de alarme.' },
          { text:"That’s very common at your age — nothing to be embarrassed about.", quality:'ok', feedback_pt:'Normaliza (bom), mas não colhe os dados: frequência, dor, sangue.' },
          { text:"It’ll just be your age — nothing to worry about.", quality:'poor', feedback_pt:'Descarta sem avaliar; sintomas urinários persistentes pedem investigação.' }
        ] },
      { patient:"No blood. What happens now?", pt:"Sem sangue. E agora?",
        choices:[
          { text:"We’ll check your urine, do a blood test, and examine the prostate. It’s common and very treatable.", quality:'good', feedback_pt:'Próximos passos claros + tranquiliza.' },
          { text:"We’ll run a few tests and take it from there.", quality:'ok', feedback_pt:'Ok, mas vago; diga quais exames e tranquilize sobre a tratabilidade.' },
          { text:"Let’s just wait and see how it develops.", quality:'poor', feedback_pt:'Não investiga sintomas persistentes; perde a janela de tratar e tranquilizar.' }
        ] }
    ] },

  { id:'oetS0019', setting:'Hospital ward', your_role:'doctor',
    patient_card_pt:'Mulher, 70 anos, que precisa iniciar anticoagulante para fibrilação atrial; preocupada com sangramento.',
    tasks:['Explicar por que o anticoagulante é necessário','Abordar o medo de sangramento','Orientar segurança e monitorização'],
    useful_language:['This medicine lowers your risk of a stroke…','It’s a balance of benefit and risk…',
      'Signs to watch for are…','We’ll monitor you closely.'],
    assessor_focus_pt:['Explicar benefício/risco','Abordar o medo','Safety-netting','Teach-back'],
    dialogue:[
      { patient:"A blood thinner? I’m scared I’ll bleed to death from a small cut.", pt:"Um anticoagulante? Tenho medo de sangrar até morrer por um cortezinho.",
        choices:[
          { text:"That’s a common worry. This medicine mainly lowers your risk of a stroke, which for you is the bigger danger.", quality:'good', feedback_pt:'Aborda o medo + explica o benefício principal.' },
          { text:"You won’t bleed to death, don’t be dramatic.", quality:'poor', feedback_pt:'Desdenha do medo do paciente.' }
        ] },
      { patient:"But what if I do have a bleed?", pt:"Mas e se eu tiver um sangramento?",
        choices:[
          { text:"Minor bruising can happen. The signs to watch for are blood in urine or stools, or a nosebleed that won’t stop.", quality:'good', feedback_pt:'Safety-netting específico e honesto.' },
          { text:"Serious bleeding is rare, so I really wouldn’t worry.", quality:'ok', feedback_pt:'Estatística sem instrução prática; ela precisa saber o que observar e fazer.' },
          { text:"If it worries you that much, maybe we shouldn’t start it.", quality:'poor', feedback_pt:'Recuar sem pesar o risco de AVC não é decisão informada.' }
        ] },
      { patient:"Okay. How will you keep me safe?", pt:"Certo. Como vocês vão me manter segura?",
        choices:[
          { text:"We’ll monitor you and review the dose. Could you tell me back what signs would make you call us?", quality:'good', feedback_pt:'Monitorização + teach-back para segurança.' },
          { text:"We’ll see you in the clinic from time to time.", quality:'ok', feedback_pt:'Vago; explique a monitorização e confirme o entendimento (teach-back).' },
          { text:"The tablet is very safe — you don’t need anything special.", quality:'poor', feedback_pt:'Falso conforto; anticoagulação exige vigilância combinada com a paciente.' }
        ] }
    ] },

  { id:'oetS0020', setting:'GP clinic', your_role:'doctor',
    patient_card_pt:'Homem, 45 anos, com colesterol alto; resistente a começar estatina por ter lido coisas negativas online.',
    tasks:['Explorar o que ele leu e suas preocupações','Explicar benefícios e efeitos com equilíbrio','Negociar um plano'],
    useful_language:['Tell me what you’ve read — I’d like to understand your concerns…','Statins do have side effects, but for most people…',
      'The aim is to lower your long-term risk…','How about we try…?'],
    assessor_focus_pt:['Explorar sem descartar','Equilíbrio nas informações','Respeito à autonomia','Negociação'],
    dialogue:[
      { patient:"I don’t want a statin — I’ve read they cause all sorts of problems.", pt:"Não quero estatina — li que causam vários problemas.",
        choices:[
          { text:"Tell me what you’ve read — I’d genuinely like to understand your concerns before I give my view.", quality:'good', feedback_pt:'Explora as fontes/ideias sem descartar.' },
          { text:"That’s all misinformation online.", quality:'poor', feedback_pt:'Descarta as preocupações e soa arrogante.' }
        ] },
      { patient:"They said it causes muscle pain and memory problems.", pt:"Disseram que causa dor muscular e problemas de memória.",
        choices:[
          { text:"Muscle aches can occur in a minority, and we’d check for that. The memory link isn’t supported by good evidence.", quality:'good', feedback_pt:'Corrige com equilíbrio, sem minimizar o real.' },
          { text:"You shouldn’t believe everything you read online.", quality:'ok', feedback_pt:'Desqualifica a fonte, não o argumento; responda ao conteúdo com evidência.' },
          { text:"Those side effects are made up — statins are completely harmless.", quality:'poor', feedback_pt:'Impreciso (mialgia ocorre numa minoria); minar a confiança piora a adesão.' }
        ] },
      { patient:"I’m still not sure.", pt:"Ainda não tenho certeza.",
        choices:[
          { text:"That’s fair. How about we try it for three months and review, checking your bloods and how you feel? It’s your call.", quality:'good', feedback_pt:'Negocia um teste com revisão + respeita a autonomia.' },
          { text:"Well, it’s your heart at risk — I’d take it if I were you.", quality:'ok', feedback_pt:'Pressiona pela autoridade; não constrói decisão compartilhada.' },
          { text:"Fine — let’s forget about the statin then.", quality:'poor', feedback_pt:'Abandona o tema sem plano nem porta aberta para retomar.' }
        ] }
    ] }
];
