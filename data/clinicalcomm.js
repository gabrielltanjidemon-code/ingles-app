/* clinicalcomm.js — Comunicação clínica: frases funcionais por etapa.
   Schema: { id, function, phase, en, pt, register, framework, audio }
   Frameworks: SOCRATES, ICE, SPIKES, teach-back, safety-netting, SOAP.
   register: 'patient-facing' (com o paciente) ou 'professional' (equipe/prontuário). */
window.CLINICALCOMM = [
  /* ============ Abertura e rapport ============ */
  { id:'com0001', function:'opening — greeting', phase:'opening', en:'Hello, I’m Dr. Silva. Can I check your name and date of birth?', pt:'Olá, sou o Dr. Silva. Posso confirmar seu nome e data de nascimento?', register:'patient-facing', framework:null, audio:true },
  { id:'com0002', function:'opening — rapport', phase:'opening', en:'What would you like me to call you?', pt:'Como você gostaria que eu o(a) chamasse?', register:'patient-facing', framework:null, audio:true },
  { id:'com0003', function:'opening — open question', phase:'opening', en:'What’s brought you in today?', pt:'O que o(a) trouxe aqui hoje?', register:'patient-facing', framework:null, audio:true },
  { id:'com0004', function:'opening — invite story', phase:'opening', en:'Tell me a bit more about what’s been happening.', pt:'Conte-me um pouco mais sobre o que tem acontecido.', register:'patient-facing', framework:null, audio:true },
  { id:'com0005', function:'opening — active listening', phase:'opening', en:'Take your time — I’m listening.', pt:'Fique à vontade — estou ouvindo.', register:'patient-facing', framework:null, audio:true },
  { id:'com0006', function:'opening — signpost', phase:'opening', en:'I’d like to ask you a few questions, then examine you. Is that okay?', pt:'Gostaria de lhe fazer algumas perguntas e depois examiná-lo(a). Tudo bem?', register:'patient-facing', framework:null, audio:true },

  /* ============ SOCRATES — caracterizar a dor ============ */
  { id:'com0007', function:'history — site', phase:'HPC', en:'Where exactly do you feel the pain?', pt:'Onde exatamente você sente a dor?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0008', function:'history — site', phase:'HPC', en:'Can you point to where it hurts most?', pt:'Você consegue apontar onde dói mais?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0009', function:'history — onset', phase:'HPC', en:'When did the pain start?', pt:'Quando a dor começou?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0010', function:'history — onset', phase:'HPC', en:'Did it come on suddenly or gradually?', pt:'Ela surgiu de repente ou aos poucos?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0011', function:'history — onset', phase:'HPC', en:'What were you doing when it started?', pt:'O que você estava fazendo quando começou?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0012', function:'history — character', phase:'HPC', en:'How would you describe the pain — sharp, dull, or crushing?', pt:'Como você descreveria a dor — pontada, peso ou aperto?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0013', function:'history — character', phase:'HPC', en:'Is it constant, or does it come and go?', pt:'Ela é constante ou vai e volta?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0014', function:'history — radiation', phase:'HPC', en:'Does the pain spread anywhere, like to your arm or back?', pt:'A dor irradia para algum lugar, como o braço ou as costas?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0015', function:'history — associations', phase:'HPC', en:'Have you noticed anything else along with it, like nausea or sweating?', pt:'Você notou mais alguma coisa junto, como náusea ou sudorese?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0016', function:'history — timing', phase:'HPC', en:'How long does the pain last each time?', pt:'Quanto tempo a dor dura de cada vez?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0017', function:'history — timing', phase:'HPC', en:'Is there a time of day when it’s worse?', pt:'Há um horário do dia em que ela piora?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0018', function:'history — exacerbating', phase:'HPC', en:'Is there anything that makes it worse?', pt:'Há algo que a piora?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0019', function:'history — relieving', phase:'HPC', en:'Does anything make it better?', pt:'Algo faz melhorar?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0020', function:'history — severity', phase:'HPC', en:'On a scale of 0 to 10, how bad is the pain?', pt:'Numa escala de 0 a 10, qual a intensidade da dor?', register:'patient-facing', framework:'SOCRATES', audio:true },
  { id:'com0021', function:'history — severity', phase:'HPC', en:'Is the pain stopping you from doing your usual activities?', pt:'A dor está impedindo suas atividades habituais?', register:'patient-facing', framework:'SOCRATES', audio:true },

  /* ============ ICE — ideas, concerns, expectations ============ */
  { id:'com0022', function:'ICE — ideas', phase:'ICE', en:'What do you think might be causing this?', pt:'O que você acha que pode estar causando isso?', register:'patient-facing', framework:'ICE', audio:true },
  { id:'com0023', function:'ICE — concerns', phase:'ICE', en:'Is there anything in particular you’re worried about?', pt:'Há algo específico que o(a) preocupa?', register:'patient-facing', framework:'ICE', audio:true },
  { id:'com0024', function:'ICE — concerns', phase:'ICE', en:'What’s worrying you most about these symptoms?', pt:'O que mais o(a) preocupa nesses sintomas?', register:'patient-facing', framework:'ICE', audio:true },
  { id:'com0025', function:'ICE — expectations', phase:'ICE', en:'What were you hoping we could do for you today?', pt:'O que você esperava que pudéssemos fazer hoje?', register:'patient-facing', framework:'ICE', audio:true },
  { id:'com0026', function:'ICE — expectations', phase:'ICE', en:'Was there a particular treatment you had in mind?', pt:'Havia algum tratamento específico em mente?', register:'patient-facing', framework:'ICE', audio:true },

  /* ============ Past history / meds / allergies ============ */
  { id:'com0027', function:'history — PMH', phase:'PMH', en:'Do you have any medical conditions we should know about?', pt:'Você tem alguma condição médica que devamos saber?', register:'patient-facing', framework:null, audio:true },
  { id:'com0028', function:'history — PMH', phase:'PMH', en:'Have you ever been admitted to hospital or had any operations?', pt:'Você já foi internado(a) ou fez alguma cirurgia?', register:'patient-facing', framework:null, audio:true },
  { id:'com0029', function:'history — medications', phase:'DH', en:'Are you taking any medications, including anything from the pharmacy?', pt:'Você toma algum medicamento, incluindo os de farmácia?', register:'patient-facing', framework:null, audio:true },
  { id:'com0030', function:'history — adherence', phase:'DH', en:'How are you getting on with taking your tablets?', pt:'Como você está se saindo em tomar seus comprimidos?', register:'patient-facing', framework:null, audio:true },
  { id:'com0031', function:'history — allergies', phase:'DH', en:'Do you have any allergies to medicines?', pt:'Você tem alguma alergia a medicamentos?', register:'patient-facing', framework:null, audio:true },
  { id:'com0032', function:'history — allergy detail', phase:'DH', en:'What happens when you take it?', pt:'O que acontece quando você o toma?', register:'patient-facing', framework:null, audio:true },

  /* ============ Family & social history ============ */
  { id:'com0033', function:'history — family', phase:'FHx', en:'Do any conditions run in your family?', pt:'Alguma doença é comum na sua família?', register:'patient-facing', framework:null, audio:true },
  { id:'com0034', function:'history — smoking', phase:'SHx', en:'Do you smoke, or have you ever smoked?', pt:'Você fuma ou já fumou?', register:'patient-facing', framework:null, audio:true },
  { id:'com0035', function:'history — alcohol', phase:'SHx', en:'How much alcohol do you drink in a typical week?', pt:'Quanto álcool você bebe numa semana típica?', register:'patient-facing', framework:null, audio:true },
  { id:'com0036', function:'history — occupation', phase:'SHx', en:'What do you do for work?', pt:'Qual é o seu trabalho?', register:'patient-facing', framework:null, audio:true },
  { id:'com0037', function:'history — home', phase:'SHx', en:'Who’s at home with you, and how are you managing day to day?', pt:'Quem mora com você e como está se virando no dia a dia?', register:'patient-facing', framework:null, audio:true },

  /* ============ Signposting & summarising ============ */
  { id:'com0038', function:'structure — signpost', phase:'structure', en:'Now I’d like to ask about your past health.', pt:'Agora gostaria de perguntar sobre sua saúde no passado.', register:'patient-facing', framework:null, audio:true },
  { id:'com0039', function:'structure — summarise', phase:'structure', en:'Let me make sure I’ve understood — you’ve had chest pain for two days, worse on exertion.', pt:'Deixe-me confirmar se entendi — você está com dor no peito há dois dias, pior aos esforços.', register:'patient-facing', framework:null, audio:true },
  { id:'com0040', function:'structure — check', phase:'structure', en:'Have I got that right?', pt:'É isso mesmo?', register:'patient-facing', framework:null, audio:true },
  { id:'com0041', function:'structure — transition', phase:'structure', en:'Is there anything else you’d like to add before we move on?', pt:'Há algo mais que gostaria de acrescentar antes de continuarmos?', register:'patient-facing', framework:null, audio:true },

  /* ============ Examination — instructions ============ */
  { id:'com0042', function:'examination — consent', phase:'examination', en:'I’d like to examine your tummy now. Is that alright?', pt:'Gostaria de examinar seu abdome agora. Tudo bem?', register:'patient-facing', framework:null, audio:true },
  { id:'com0043', function:'examination — instruction', phase:'examination', en:'Could you take a deep breath in and out for me?', pt:'Você poderia inspirar e expirar fundo para mim?', register:'patient-facing', framework:null, audio:true },
  { id:'com0044', function:'examination — comfort', phase:'examination', en:'Let me know if anything I do is uncomfortable.', pt:'Avise-me se algo que eu fizer for desconfortável.', register:'patient-facing', framework:null, audio:true },
  { id:'com0045', function:'examination — warn', phase:'examination', en:'This might feel a little cold.', pt:'Isto pode parecer um pouco frio.', register:'patient-facing', framework:null, audio:true },

  /* ============ Explaining diagnosis & plan (plain language) ============ */
  { id:'com0046', function:'explaining — findings', phase:'explanation', en:'From what you’ve told me and my examination, I think this is likely to be a chest infection.', pt:'Pelo que você me contou e pelo exame, acho que isto provavelmente é uma infecção respiratória.', register:'patient-facing', framework:null, audio:true },
  { id:'com0047', function:'explaining — avoid jargon', phase:'explanation', en:'In simple terms, the lining of your stomach is inflamed.', pt:'Em termos simples, o revestimento do seu estômago está inflamado.', register:'patient-facing', framework:null, audio:true },
  { id:'com0048', function:'explaining — chunk & check', phase:'explanation', en:'Is it okay if I explain what I think is going on?', pt:'Posso explicar o que acho que está acontecendo?', register:'patient-facing', framework:null, audio:true },
  { id:'com0049', function:'explaining — plan', phase:'explanation', en:'What I’d suggest is a course of antibiotics and plenty of fluids.', pt:'O que eu sugeriria é um ciclo de antibióticos e bastante líquido.', register:'patient-facing', framework:null, audio:true },
  { id:'com0050', function:'explaining — options', phase:'explanation', en:'There are a couple of options — we could try tablets first, or refer you for a scan.', pt:'Há algumas opções — podemos tentar comprimidos primeiro ou encaminhá-lo(a) para um exame de imagem.', register:'patient-facing', framework:null, audio:true },
  { id:'com0051', function:'explaining — shared decision', phase:'explanation', en:'How do you feel about that plan?', pt:'O que você acha desse plano?', register:'patient-facing', framework:null, audio:true },
  { id:'com0052', function:'explaining — uncertainty', phase:'explanation', en:'I can’t be completely certain yet, so I’d like to run a few tests.', pt:'Ainda não posso ter certeza total, então gostaria de fazer alguns exames.', register:'patient-facing', framework:null, audio:true },
  { id:'com0053', function:'explaining — timeframe', phase:'explanation', en:'You should start to feel better within a few days.', pt:'Você deve começar a se sentir melhor em alguns dias.', register:'patient-facing', framework:null, audio:true },

  /* ============ Teach-back — confirmar entendimento ============ */
  { id:'com0054', function:'teach-back', phase:'explanation', en:'Just so I know I’ve explained it clearly, could you tell me how you’ll take the medication?', pt:'Só para eu saber se expliquei bem, você poderia me dizer como vai tomar o medicamento?', register:'patient-facing', framework:'teach-back', audio:true },
  { id:'com0055', function:'teach-back', phase:'explanation', en:'What will you do if the symptoms come back?', pt:'O que você fará se os sintomas voltarem?', register:'patient-facing', framework:'teach-back', audio:true },
  { id:'com0056', function:'teach-back', phase:'explanation', en:'Can I check you’re happy with everything we’ve discussed?', pt:'Posso confirmar que você está tranquilo(a) com tudo o que discutimos?', register:'patient-facing', framework:'teach-back', audio:true },

  /* ============ Reassurance & empathy ============ */
  { id:'com0057', function:'empathy — validate', phase:'empathy', en:'I can see this has been really worrying for you.', pt:'Percebo que isto tem sido muito preocupante para você.', register:'patient-facing', framework:null, audio:true },
  { id:'com0058', function:'empathy — acknowledge', phase:'empathy', en:'That sounds like it’s been very difficult.', pt:'Parece que tem sido muito difícil.', register:'patient-facing', framework:null, audio:true },
  { id:'com0059', function:'empathy — honest reassurance', phase:'empathy', en:'The good news is that this is very treatable.', pt:'A boa notícia é que isto tem tratamento eficaz.', register:'patient-facing', framework:null, audio:true },
  { id:'com0060', function:'empathy — support', phase:'empathy', en:'We’ll go through this together, step by step.', pt:'Vamos passar por isso juntos, passo a passo.', register:'patient-facing', framework:null, audio:true },
  { id:'com0061', function:'empathy — permission', phase:'empathy', en:'Would it help to talk through what happens next?', pt:'Ajudaria conversarmos sobre o que vem a seguir?', register:'patient-facing', framework:null, audio:true },

  /* ============ SPIKES — breaking bad news ============ */
  { id:'com0062', function:'SPIKES — setting', phase:'bad-news', en:'Is now a good time to talk? Would you like anyone with you?', pt:'É um bom momento para conversarmos? Gostaria de ter alguém com você?', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0063', function:'SPIKES — perception', phase:'bad-news', en:'What’s your understanding of the tests so far?', pt:'O que você já entendeu sobre os exames até agora?', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0064', function:'SPIKES — invitation', phase:'bad-news', en:'Are you the sort of person who likes all the details, or the broad picture?', pt:'Você prefere todos os detalhes ou uma visão geral?', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0065', function:'SPIKES — warning shot', phase:'bad-news', en:'I’m afraid I have some difficult news to share.', pt:'Infelizmente, tenho uma notícia difícil para compartilhar.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0066', function:'SPIKES — knowledge', phase:'bad-news', en:'The results show that this is cancer. I’m very sorry.', pt:'Os resultados mostram que se trata de um câncer. Sinto muito.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0067', function:'SPIKES — silence', phase:'bad-news', en:'Take all the time you need.', pt:'Leve o tempo que precisar.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0068', function:'SPIKES — empathy', phase:'bad-news', en:'I can only imagine how much of a shock this must be.', pt:'Só posso imaginar o choque que isto deve ser.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0069', function:'SPIKES — strategy', phase:'bad-news', en:'When you’re ready, we can talk about what happens next and the support available.', pt:'Quando você estiver pronto(a), podemos falar sobre os próximos passos e o apoio disponível.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0070', function:'SPIKES — check', phase:'bad-news', en:'Is there anything you’d like to ask me right now?', pt:'Há algo que gostaria de me perguntar agora?', register:'patient-facing', framework:'SPIKES', audio:true },

  /* ============ Counselling — medication & lifestyle ============ */
  { id:'com0071', function:'counselling — how to take', phase:'counselling', en:'Take one tablet twice a day, with food.', pt:'Tome um comprimido duas vezes ao dia, com alimento.', register:'patient-facing', framework:null, audio:true },
  { id:'com0072', function:'counselling — course', phase:'counselling', en:'It’s important to finish the whole course, even if you feel better.', pt:'É importante completar todo o ciclo, mesmo que você melhore.', register:'patient-facing', framework:null, audio:true },
  { id:'com0073', function:'counselling — side effects', phase:'counselling', en:'It may upset your stomach; taking it with food usually helps.', pt:'Pode incomodar o estômago; tomar com alimento geralmente ajuda.', register:'patient-facing', framework:null, audio:true },
  { id:'com0074', function:'counselling — interaction', phase:'counselling', en:'Avoid alcohol while you’re taking this.', pt:'Evite álcool enquanto estiver tomando isto.', register:'patient-facing', framework:null, audio:true },
  { id:'com0075', function:'counselling — lifestyle', phase:'counselling', en:'Cutting down on salt would really help your blood pressure.', pt:'Reduzir o sal ajudaria muito sua pressão.', register:'patient-facing', framework:null, audio:true },
  { id:'com0076', function:'counselling — smoking', phase:'counselling', en:'Stopping smoking is the single best thing you can do for your health.', pt:'Parar de fumar é a melhor coisa que você pode fazer pela sua saúde.', register:'patient-facing', framework:null, audio:true },
  { id:'com0077', function:'counselling — motivational', phase:'counselling', en:'What would make it easier for you to make that change?', pt:'O que facilitaria para você fazer essa mudança?', register:'patient-facing', framework:null, audio:true },

  /* ============ Safety-netting & closing ============ */
  { id:'com0078', function:'safety-netting', phase:'closing', en:'If the pain gets worse or you develop a fever, please come straight back.', pt:'Se a dor piorar ou surgir febre, volte imediatamente.', register:'patient-facing', framework:'safety-netting', audio:true },
  { id:'com0079', function:'safety-netting', phase:'closing', en:'If you feel breathless or notice blood, call 999 / go to A&E.', pt:'Se sentir falta de ar ou notar sangue, ligue para a emergência / vá ao pronto-socorro.', register:'patient-facing', framework:'safety-netting', audio:true },
  { id:'com0080', function:'safety-netting', phase:'closing', en:'I’d expect this to settle within a week; if not, book another appointment.', pt:'Espero que isto melhore em uma semana; se não, marque outra consulta.', register:'patient-facing', framework:'safety-netting', audio:true },
  { id:'com0081', function:'closing — follow-up', phase:'closing', en:'Let’s arrange to see you again in two weeks.', pt:'Vamos marcar para vê-lo(a) novamente em duas semanas.', register:'patient-facing', framework:null, audio:true },
  { id:'com0082', function:'closing — questions', phase:'closing', en:'Before you go, do you have any questions for me?', pt:'Antes de ir, você tem alguma pergunta para mim?', register:'patient-facing', framework:null, audio:true },
  { id:'com0083', function:'closing — reassure access', phase:'closing', en:'If anything worries you before then, don’t hesitate to get in touch.', pt:'Se algo o(a) preocupar antes disso, não hesite em entrar em contato.', register:'patient-facing', framework:null, audio:true },
  { id:'com0084', function:'closing — thanks', phase:'closing', en:'Thank you for coming in today. Take care.', pt:'Obrigado por vir hoje. Cuide-se.', register:'patient-facing', framework:null, audio:true },

  /* ============ Handover & professional (SBAR / SOAP) ============ */
  { id:'com0085', function:'handover — SBAR situation', phase:'handover', en:'This is Mr Jones, a 68-year-old man admitted with central chest pain.', pt:'Este é o Sr. Jones, 68 anos, internado com dor torácica central.', register:'professional', framework:'SBAR', audio:true },
  { id:'com0086', function:'handover — SBAR background', phase:'handover', en:'His background includes hypertension and a previous MI.', pt:'A história dele inclui hipertensão e infarto prévio.', register:'professional', framework:'SBAR', audio:true },
  { id:'com0087', function:'handover — SBAR assessment', phase:'handover', en:'He’s currently haemodynamically stable but still in pain.', pt:'No momento está hemodinamicamente estável, mas ainda com dor.', register:'professional', framework:'SBAR', audio:true },
  { id:'com0088', function:'handover — SBAR recommendation', phase:'handover', en:'I’d recommend a repeat troponin and cardiology review.', pt:'Eu recomendaria repetir a troponina e avaliação da cardiologia.', register:'professional', framework:'SBAR', audio:true },
  { id:'com0089', function:'documentation — SOAP subjective', phase:'documentation', en:'S: 2-day history of productive cough and fever.', pt:'S: história de 2 dias de tosse produtiva e febre.', register:'professional', framework:'SOAP', audio:false },
  { id:'com0090', function:'documentation — SOAP objective', phase:'documentation', en:'O: T 38.5, RR 24, crackles at the right base.', pt:'O: T 38,5, FR 24, estertores na base direita.', register:'professional', framework:'SOAP', audio:false },
  { id:'com0091', function:'documentation — SOAP assessment', phase:'documentation', en:'A: Community-acquired pneumonia, right lower lobe.', pt:'A: Pneumonia adquirida na comunidade, lobo inferior direito.', register:'professional', framework:'SOAP', audio:false },
  { id:'com0092', function:'documentation — SOAP plan', phase:'documentation', en:'P: Oral amoxicillin, review in 48 hours, safety-net advice given.', pt:'P: Amoxicilina oral, retorno em 48 horas, orientações de alarme fornecidas.', register:'professional', framework:'SOAP', audio:false },

  /* ============ Managing difficult moments ============ */
  { id:'com0093', function:'difficult — angry patient', phase:'difficult', en:'I can see you’re frustrated, and I’d like to understand what’s happened.', pt:'Percebo que você está frustrado(a), e gostaria de entender o que aconteceu.', register:'patient-facing', framework:null, audio:true },
  { id:'com0094', function:'difficult — apology', phase:'difficult', en:'I’m sorry that you’ve had to wait so long.', pt:'Lamento que você tenha tido de esperar tanto.', register:'patient-facing', framework:null, audio:true },
  { id:'com0095', function:'difficult — boundaries', phase:'difficult', en:'I do want to help, and it’s easier if we talk calmly.', pt:'Eu quero ajudar, e fica mais fácil se conversarmos com calma.', register:'patient-facing', framework:null, audio:true },
  { id:'com0096', function:'difficult — breaking uncertainty', phase:'difficult', en:'I don’t have all the answers yet, but I won’t hide anything from you.', pt:'Ainda não tenho todas as respostas, mas não vou esconder nada de você.', register:'patient-facing', framework:null, audio:true },

  /* ============ Screening & sensitive questions ============ */
  { id:'com0097', function:'sensitive — permission', phase:'sensitive', en:'Some of these questions are personal — is that okay?', pt:'Algumas destas perguntas são pessoais — tudo bem?', register:'patient-facing', framework:null, audio:true },
  { id:'com0098', function:'sensitive — mood', phase:'sensitive', en:'How have you been feeling in yourself, in your mood?', pt:'Como você tem se sentido, em relação ao seu humor?', register:'patient-facing', framework:null, audio:true },
  { id:'com0099', function:'sensitive — risk', phase:'sensitive', en:'Have you ever had thoughts of harming yourself?', pt:'Você já teve pensamentos de se machucar?', register:'patient-facing', framework:null, audio:true },
  { id:'com0100', function:'sensitive — normalise', phase:'sensitive', en:'These are questions I ask everyone, so please don’t feel singled out.', pt:'São perguntas que faço a todos, então não se sinta apontado(a).', register:'patient-facing', framework:null, audio:true },

  /* ============ Extra history & clarification ============ */
  { id:'com0101', function:'history — clarify', phase:'HPC', en:'When you say “dizzy”, do you mean lightheaded or that the room spins?', pt:'Quando você diz “tonto”, quer dizer cabeça leve ou que o quarto gira?', register:'patient-facing', framework:null, audio:true },
  { id:'com0102', function:'history — quantify', phase:'HPC', en:'How many times a day is that happening?', pt:'Quantas vezes por dia isso acontece?', register:'patient-facing', framework:null, audio:true },
  { id:'com0103', function:'history — impact', phase:'HPC', en:'How is this affecting your daily life and your sleep?', pt:'Como isto está afetando seu dia a dia e seu sono?', register:'patient-facing', framework:null, audio:true },
  { id:'com0104', function:'history — red flags', phase:'HPC', en:'Have you had any weight loss, night sweats, or blood you’ve noticed?', pt:'Você teve perda de peso, sudorese noturna ou notou algum sangramento?', register:'patient-facing', framework:null, audio:true },
  { id:'com0105', function:'history — travel', phase:'HPC', en:'Have you travelled abroad recently?', pt:'Você viajou para o exterior recentemente?', register:'patient-facing', framework:null, audio:true },
  { id:'com0106', function:'history — diet', phase:'HPC', en:'Has there been any change in your appetite or diet?', pt:'Houve alguma mudança no seu apetite ou alimentação?', register:'patient-facing', framework:null, audio:true },
  { id:'com0107', function:'history — bowels', phase:'HPC', en:'Have you noticed any change in your bowel habit?', pt:'Você notou alguma mudança no hábito intestinal?', register:'patient-facing', framework:null, audio:true },
  { id:'com0108', function:'history — waterworks', phase:'HPC', en:'Any problems passing water — burning, or going more often?', pt:'Algum problema para urinar — ardência ou ir com mais frequência?', register:'patient-facing', framework:null, audio:true },

  /* ============ Explaining tests & procedures ============ */
  { id:'com0109', function:'explaining — blood test', phase:'explanation', en:'We’ll take some blood to check for infection and your kidney function.', pt:'Vamos coletar sangue para verificar infecção e a função dos rins.', register:'patient-facing', framework:null, audio:true },
  { id:'com0110', function:'explaining — imaging', phase:'explanation', en:'The scan is painless and takes about fifteen minutes.', pt:'O exame de imagem é indolor e leva cerca de quinze minutos.', register:'patient-facing', framework:null, audio:true },
  { id:'com0111', function:'explaining — consent', phase:'explanation', en:'I’ll explain the risks and benefits so you can decide.', pt:'Vou explicar os riscos e benefícios para você decidir.', register:'patient-facing', framework:null, audio:true },
  { id:'com0112', function:'explaining — results wait', phase:'explanation', en:'The results should be back in about three days.', pt:'Os resultados devem sair em cerca de três dias.', register:'patient-facing', framework:null, audio:true },
  { id:'com0113', function:'explaining — referral', phase:'explanation', en:'I’m going to refer you to a specialist who deals with this.', pt:'Vou encaminhá-lo(a) a um especialista que cuida disso.', register:'patient-facing', framework:null, audio:true },

  /* ============ Phone / remote consultation ============ */
  { id:'com0114', function:'remote — opening', phase:'opening', en:'I can’t see you in person, so I’ll ask a few extra questions.', pt:'Como não posso vê-lo(a) presencialmente, farei algumas perguntas extras.', register:'patient-facing', framework:null, audio:true },
  { id:'com0115', function:'remote — safety', phase:'safety-netting', en:'If you feel worse before I call back, please seek help straight away.', pt:'Se você piorar antes de eu retornar a ligação, procure ajuda imediatamente.', register:'patient-facing', framework:'safety-netting', audio:true },

  /* ============ Working with interpreters / carers ============ */
  { id:'com0116', function:'communication — interpreter', phase:'opening', en:'I’ll speak in short sentences so the interpreter can help.', pt:'Vou falar em frases curtas para o intérprete ajudar.', register:'patient-facing', framework:null, audio:true },
  { id:'com0117', function:'communication — carer', phase:'opening', en:'It’s helpful to hear from you both — can I check with the patient first?', pt:'É útil ouvir os dois — posso confirmar primeiro com o(a) paciente?', register:'patient-facing', framework:null, audio:true },

  /* ============ More empathy & rapport ============ */
  { id:'com0118', function:'empathy — normalise fear', phase:'empathy', en:'It’s completely understandable to feel anxious about this.', pt:'É totalmente compreensível sentir-se ansioso(a) com isto.', register:'patient-facing', framework:null, audio:true },
  { id:'com0119', function:'empathy — reflect', phase:'empathy', en:'So it sounds like the pain is really affecting your work.', pt:'Então parece que a dor está mesmo afetando seu trabalho.', register:'patient-facing', framework:null, audio:true },
  { id:'com0120', function:'empathy — check feelings', phase:'empathy', en:'How are you coping with all of this?', pt:'Como você está lidando com tudo isso?', register:'patient-facing', framework:null, audio:true },

  /* ============ Advice & self-care ============ */
  { id:'com0121', function:'advice — rest & fluids', phase:'counselling', en:'For now, rest, drink plenty of fluids, and take paracetamol for the fever.', pt:'Por enquanto, descanse, beba bastante líquido e tome paracetamol para a febre.', register:'patient-facing', framework:null, audio:true },
  { id:'com0122', function:'advice — when to worry', phase:'safety-netting', en:'The warning signs to watch for are chest pain, confusion, or a rash that doesn’t fade.', pt:'Os sinais de alerta são dor no peito, confusão ou uma erupção que não some.', register:'patient-facing', framework:'safety-netting', audio:true },
  { id:'com0123', function:'advice — sick note', phase:'counselling', en:'I can give you a note for a few days off work.', pt:'Posso lhe dar um atestado para alguns dias de afastamento.', register:'patient-facing', framework:null, audio:true },
  { id:'com0124', function:'advice — follow instructions', phase:'counselling', en:'Try to keep mobile and do the exercises the physio showed you.', pt:'Tente se manter em movimento e fazer os exercícios que o fisioterapeuta mostrou.', register:'patient-facing', framework:null, audio:true },

  /* ============ Consent, chaperone, dignity ============ */
  { id:'com0125', function:'examination — chaperone', phase:'examination', en:'For this examination I’ll ask a colleague to be present as a chaperone.', pt:'Para este exame, vou pedir que um colega esteja presente como acompanhante.', register:'patient-facing', framework:null, audio:true },
  { id:'com0126', function:'examination — dignity', phase:'examination', en:'I’ll give you some privacy to get changed, and cover you as much as possible.', pt:'Vou lhe dar privacidade para se trocar e cobrirei o máximo possível.', register:'patient-facing', framework:null, audio:true },

  /* ============ Negotiating & shared plans ============ */
  { id:'com0127', function:'shared — negotiate', phase:'explanation', en:'I hear that you’d prefer to avoid antibiotics — shall we agree a plan if things don’t improve?', pt:'Entendo que você prefere evitar antibióticos — combinamos um plano caso não melhore?', register:'patient-facing', framework:null, audio:true },
  { id:'com0128', function:'shared — respect autonomy', phase:'explanation', en:'It’s your decision, and I’ll support whatever you choose.', pt:'A decisão é sua, e vou apoiar o que você escolher.', register:'patient-facing', framework:null, audio:true },
  { id:'com0129', function:'shared — recommend', phase:'explanation', en:'On balance, my advice would be to start treatment now.', pt:'Ponderando tudo, minha recomendação seria iniciar o tratamento agora.', register:'patient-facing', framework:null, audio:true },
  { id:'com0130', function:'closing — summary plan', phase:'closing', en:'So, to summarise: antibiotics for five days, rest, and review if no better by Friday.', pt:'Então, resumindo: antibiótico por cinco dias, repouso e retorno se não melhorar até sexta.', register:'patient-facing', framework:null, audio:true },

  /* ============ Frases adicionais por função ============ */
  { id:'com0131', function:'opening — own words', phase:'opening', en:'Just to start, could you talk me through what’s been happening in your own words?', pt:'Para começar, você poderia me contar, com suas próprias palavras, o que tem acontecido?', register:'patient-facing', framework:null, audio:true },
  { id:'com0132', function:'history — previous episodes', phase:'HPC', en:'Has anything like this ever happened before?', pt:'Algo assim já aconteceu antes?', register:'patient-facing', framework:null, audio:true },
  { id:'com0133', function:'history — trajectory', phase:'HPC', en:'Is it getting better, worse, or staying about the same?', pt:'Está melhorando, piorando ou mais ou menos igual?', register:'patient-facing', framework:null, audio:true },
  { id:'com0134', function:'history — OTC medicines', phase:'DH', en:'Do you take anything you buy over the counter, or any supplements?', pt:'Você toma algo comprado sem receita ou algum suplemento?', register:'patient-facing', framework:null, audio:true },
  { id:'com0135', function:'explaining — take seriously', phase:'explanation', en:'I want to reassure you that we’re taking this seriously.', pt:'Quero lhe assegurar que estamos levando isto a sério.', register:'patient-facing', framework:null, audio:true },
  { id:'com0136', function:'explaining — signpost next', phase:'explanation', en:'Here’s what I suggest we do next.', pt:'Veja o que sugiro que façamos em seguida.', register:'patient-facing', framework:null, audio:true },
  { id:'com0137', function:'teach-back — check clarity', phase:'explanation', en:'Does that make sense so far, or shall I go over anything again?', pt:'Isso faz sentido até aqui, ou quer que eu revise algo?', register:'patient-facing', framework:'teach-back', audio:true },
  { id:'com0138', function:'explaining — likely cause', phase:'explanation', en:'At this stage, the most likely explanation is a viral infection, but we’ll keep it under review.', pt:'Neste momento, a explicação mais provável é uma infecção viral, mas manteremos sob observação.', register:'patient-facing', framework:null, audio:true },
  { id:'com0139', function:'empathy — apologise for suffering', phase:'empathy', en:'I’m sorry you’ve been going through this.', pt:'Sinto muito que você esteja passando por isso.', register:'patient-facing', framework:null, audio:true },
  { id:'com0140', function:'empathy — permission to feel', phase:'empathy', en:'It’s okay to feel upset — this is a lot to take in.', pt:'Tudo bem se sentir abalado(a) — é muita coisa para absorver.', register:'patient-facing', framework:null, audio:true },
  { id:'com0141', function:'empathy — validate coming in', phase:'empathy', en:'You’ve done the right thing by coming in.', pt:'Você fez a coisa certa em procurar ajuda.', register:'patient-facing', framework:null, audio:true },
  { id:'com0142', function:'sensitive — recreational drugs', phase:'sensitive', en:'Do you use any recreational drugs? I ask everyone this.', pt:'Você usa alguma droga recreativa? Faço esta pergunta a todos.', register:'patient-facing', framework:null, audio:true },
  { id:'com0143', function:'shared — what matters', phase:'explanation', en:'As we decide together, what matters most to you?', pt:'Ao decidirmos juntos, o que é mais importante para você?', register:'patient-facing', framework:null, audio:true },
  { id:'com0144', function:'counselling — tell me if struggling', phase:'counselling', en:'If you ever have trouble taking it, please tell me rather than just stopping.', pt:'Se tiver dificuldade em tomar, por favor me avise em vez de simplesmente parar.', register:'patient-facing', framework:null, audio:true },
  { id:'com0145', function:'closing — write to GP', phase:'closing', en:'I’ll write to your GP so everyone is kept in the loop.', pt:'Vou escrever ao seu clínico geral para manter todos informados.', register:'patient-facing', framework:null, audio:true },
  { id:'com0146', function:'examination — reassuring findings', phase:'examination', en:'Your examination is reassuring — everything sounds and feels normal.', pt:'Seu exame é tranquilizador — tudo parece normal à ausculta e à palpação.', register:'patient-facing', framework:null, audio:true },
  { id:'com0147', function:'empathy — acknowledge carer effort', phase:'empathy', en:'You’re clearly doing a great deal to support them.', pt:'Você está claramente fazendo muito para apoiá-lo(a).', register:'patient-facing', framework:null, audio:true },
  { id:'com0148', function:'SPIKES — not alone', phase:'bad-news', en:'I’ll make sure you’re not going through this alone — there is support available.', pt:'Vou garantir que você não passe por isto sozinho(a) — há apoio disponível.', register:'patient-facing', framework:'SPIKES', audio:true },
  { id:'com0149', function:'counselling — follow-up plan', phase:'counselling', en:'Let’s agree a clear plan so you know exactly what to do and when.', pt:'Vamos combinar um plano claro para você saber exatamente o que fazer e quando.', register:'patient-facing', framework:null, audio:true },
  { id:'com0150', function:'closing — open door', phase:'closing', en:'My door is always open if new questions come up.', pt:'Minha porta está sempre aberta se surgirem novas dúvidas.', register:'patient-facing', framework:null, audio:true }
];
