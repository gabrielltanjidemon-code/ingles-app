/* oet_listening.js — OET Listening (Partes A/B/C).
   Part A (type:'note'): consulta médico-paciente → note completion (vários campos).
   Part B/C (type:'mcq'): trechos de contexto de trabalho / palestra → múltipla escolha.
   audio_text é lido pelo TTS (velocidade natural, reduções). Corretude palavra a palavra
   reaproveita o motor de ditado (TextMatch). Áudio toca uma vez no modo prova. */
window.OET_LISTENING = [
  /* ---------------- Part A: consultations (note completion) ---------------- */
  { id:'oetL0001', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: Good morning, come and take a seat. What's brought you in today? "+
      "Patient: Well, doctor, I've had this pain in my chest since yesterday afternoon. "+
      "Doctor: I see. Can you describe the pain for me? "+
      "Patient: It's a tight, heavy feeling, right in the middle. And it spreads down my left arm. "+
      "Doctor: Does anything bring it on? "+
      "Patient: It comes when I walk up the stairs, and it eases off when I sit and rest. "+
      "Doctor: On a scale of nought to ten, how bad is it? "+
      "Patient: I'd say about seven when it's at its worst. "+
      "Doctor: And have you noticed anything else with it? "+
      "Patient: Yes, I get a bit sweaty and short of breath.",
    fields:[
      { label:'Presenting complaint', answer:'chest pain since yesterday afternoon', accept:['chest pain since yesterday'] },
      { label:'Character of pain', answer:'tight heavy feeling in the middle', accept:['tight, heavy feeling in the middle','tight heavy central'] },
      { label:'Radiation', answer:'down the left arm', accept:['left arm','to the left arm'] },
      { label:'Aggravating factor', answer:'walking up the stairs', accept:['walking up stairs','exertion','climbing stairs'] },
      { label:'Relieving factor', answer:'sitting and resting', accept:['rest','resting','sitting down'] },
      { label:'Severity out of 10', answer:'seven', accept:['7'] },
      { label:'Associated symptoms', answer:'sweating and shortness of breath', accept:['sweaty and short of breath','sweating and breathlessness'] }
    ],
    pt:'Foque nas reduções ("it\'s", "I\'d say") e nos sinais de alarme cardíaco.',
    focus:['symptom description','reduced forms','cardiac red flags'] },

  { id:'oetL0002', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: Hello, Mrs Adams. I understand you've been feeling unwell. "+
      "Patient: Yes, I've had a cough for about three weeks now, and it's just not shifting. "+
      "Doctor: Is the cough dry, or are you bringing anything up? "+
      "Patient: I'm coughing up green phlegm, and this morning there were a few streaks of blood. "+
      "Doctor: Right. Any fever or night sweats? "+
      "Patient: I've been quite feverish, and I wake up drenched in sweat. "+
      "Doctor: Have you lost any weight? "+
      "Patient: About four kilos, without trying. "+
      "Doctor: And do you smoke? "+
      "Patient: I gave up two years ago, but I smoked for thirty years before that.",
    fields:[
      { label:'Duration of cough', answer:'about three weeks', accept:['three weeks','3 weeks'] },
      { label:'Sputum', answer:'green phlegm with streaks of blood', accept:['green phlegm with blood','green sputum, blood-streaked'] },
      { label:'Systemic symptoms', answer:'fever and night sweats', accept:['feverish and night sweats','fever, night sweats'] },
      { label:'Weight change', answer:'lost about four kilos', accept:['four kilos weight loss','4 kg weight loss'] },
      { label:'Smoking history', answer:'ex-smoker, 30 years, quit two years ago', accept:['ex-smoker','smoked 30 years, quit 2 years ago'] }
    ],
    pt:'Sinais de alarme respiratórios: hemoptise, perda de peso, sudorese noturna.',
    focus:['red flags','weight loss','smoking history'] },

  { id:'oetL0003', part:'A', type:'note', speakers:['nurse','patient'],
    audio_text:"Nurse: Hi there, I'm the practice nurse. What can I help you with today? "+
      "Patient: I've come about my sugar levels. My monitor's been reading high all week. "+
      "Nurse: How high are we talking? "+
      "Patient: Mostly in the teens — around fourteen or fifteen before meals. "+
      "Nurse: And how have you been feeling in yourself? "+
      "Patient: Really thirsty, and I'm up two or three times a night to pass water. "+
      "Nurse: Are you taking your metformin as usual? "+
      "Patient: I have to admit I've missed a few doses — I keep forgetting the evening one. "+
      "Nurse: Okay, that's useful to know. Any changes to your diet? "+
      "Patient: I've been snacking more than usual, biscuits mostly.",
    fields:[
      { label:'Reason for visit', answer:'high blood sugar readings', accept:['high sugar levels','high glucose readings'] },
      { label:'Typical readings', answer:'fourteen to fifteen before meals', accept:['around 14-15 before meals','in the teens'] },
      { label:'Symptoms', answer:'thirst and nocturia', accept:['thirsty and passing water at night','thirst and getting up to urinate'] },
      { label:'Medication issue', answer:'missing evening metformin doses', accept:['forgetting evening metformin','missed metformin doses'] },
      { label:'Dietary change', answer:'snacking more, mostly biscuits', accept:['more snacking','eating more biscuits'] }
    ],
    pt:'Adesão medicamentosa e registro leigo de números ("in the teens").',
    focus:['adherence','numbers','patient language'] },

  { id:'oetL0004', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: What seems to be the trouble today? "+
      "Patient: It's my waterworks, doctor. It burns when I go, and I'm rushing to the toilet all the time. "+
      "Doctor: How long has this been going on? "+
      "Patient: Since about two days ago. "+
      "Doctor: Have you noticed any blood in your urine? "+
      "Patient: Yes, it was a bit pink yesterday. "+
      "Doctor: Any pain in your back or a temperature? "+
      "Patient: No back pain, but I did feel a bit shivery last night. "+
      "Doctor: Have you had this kind of infection before? "+
      "Patient: A couple of times a year, usually the same thing.",
    fields:[
      { label:'Presenting complaint', answer:'burning and urinary frequency', accept:['burning on passing urine and frequency','dysuria and frequency'] },
      { label:'Duration', answer:'two days', accept:['about two days','2 days'] },
      { label:'Urine finding', answer:'blood in the urine (pink)', accept:['pink urine','haematuria'] },
      { label:'Systemic symptom', answer:'feeling shivery', accept:['shivery','chills'] },
      { label:'Past history', answer:'recurrent UTIs, a couple a year', accept:['recurrent urinary infections','a couple of infections a year'] }
    ],
    pt:'"Waterworks" é gíria de paciente para sintomas urinários. "Pink" = hematúria.',
    focus:['lay terms','urinary symptoms','recurrence'] },

  { id:'oetL0005', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: Come in. How can I help? "+
      "Patient: I keep getting these headaches, and the painkillers aren't touching them. "+
      "Doctor: Whereabouts is the pain? "+
      "Patient: It's mostly on the right side, behind my eye. "+
      "Doctor: And what's it like? "+
      "Patient: A throbbing pain. Bright light makes it much worse, so I have to lie down in the dark. "+
      "Doctor: How often are they happening? "+
      "Patient: Two or three times a month, and each one lasts most of the day. "+
      "Doctor: Do you get any warning before they start? "+
      "Patient: Yes — I see zigzag lines for about twenty minutes first.",
    fields:[
      { label:'Site of headache', answer:'right side, behind the eye', accept:['right-sided, behind the eye','behind the right eye'] },
      { label:'Character', answer:'throbbing', accept:['throbbing pain','pulsating'] },
      { label:'Aggravating factor', answer:'bright light', accept:['light','photophobia'] },
      { label:'Frequency', answer:'two or three times a month', accept:['2-3 times a month'] },
      { label:'Warning / aura', answer:'zigzag lines for twenty minutes', accept:['visual aura','seeing zigzag lines'] }
    ],
    pt:'Enxaqueca com aura visual; "zigzag lines" = aura descrita pelo paciente.',
    focus:['migraine','aura','patient description'] },

  { id:'oetL0006', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: Take a seat. What's been happening? "+
      "Patient: My ankles have swollen up, and I'm getting out of breath doing very little. "+
      "Doctor: When did you first notice the swelling? "+
      "Patient: Over the last fortnight, and it's worse by the evening. "+
      "Doctor: And the breathlessness? "+
      "Patient: I can't lie flat any more — I need three pillows to sleep. "+
      "Doctor: Do you ever wake up gasping for air? "+
      "Patient: Yes, once or twice, and I have to sit on the edge of the bed. "+
      "Doctor: Any chest pain? "+
      "Patient: No pain, just the breathlessness.",
    fields:[
      { label:'Presenting complaints', answer:'ankle swelling and breathlessness', accept:['swollen ankles and shortness of breath','oedema and dyspnoea'] },
      { label:'Duration of swelling', answer:'over the last fortnight', accept:['two weeks','last two weeks'] },
      { label:'Orthopnoea', answer:'needs three pillows to sleep', accept:['can\'t lie flat, three pillows','sleeps on three pillows'] },
      { label:'PND', answer:'wakes up gasping for air', accept:['waking breathless at night','paroxysmal nocturnal dyspnoea'] }
    ],
    pt:'Ortopneia e DPN em linguagem de paciente — sinais de insuficiência cardíaca.',
    focus:['heart failure','orthopnoea','functional description'] },

  { id:'oetL0007', part:'A', type:'note', speakers:['doctor','parent'],
    audio_text:"Doctor: Hello, and who have we got here? "+
      "Parent: This is Leo. He's been off his food and really clingy since last night. "+
      "Doctor: Has he had a temperature? "+
      "Parent: Yes, it hit thirty-nine and a half despite the Calpol. "+
      "Doctor: Any rash or vomiting? "+
      "Parent: He was sick twice, and there's a rash on his tummy that came up this morning. "+
      "Doctor: Does the rash fade when you press on it? "+
      "Parent: I tried the glass test — it doesn't fade. "+
      "Doctor: Is he drinking anything? "+
      "Parent: Only tiny sips, and he's had one wet nappy all day.",
    fields:[
      { label:'Presenting complaint', answer:'off food and clingy since last night', accept:['poor feeding and irritable','not eating, clingy'] },
      { label:'Temperature', answer:'39.5 despite Calpol', accept:['39.5','fever of 39.5 not settling'] },
      { label:'Rash', answer:'non-blanching rash on the tummy', accept:['rash that does not fade','non-blanching rash'] },
      { label:'Hydration', answer:'tiny sips, one wet nappy all day', accept:['poor fluid intake, one wet nappy','reduced wet nappies'] }
    ],
    pt:'"Glass test" e "non-blanching rash" = alarme para meningococcemia. "Nappy" = fralda (UK).',
    focus:['paediatric red flags','non-blanching rash','dehydration'] },

  { id:'oetL0008', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: How have things been since we last met? "+
      "Patient: Not great, to be honest. My mood's been really low, and I've lost interest in everything. "+
      "Doctor: How's your sleep? "+
      "Patient: I wake at four every morning and can't drop off again. "+
      "Doctor: And your appetite? "+
      "Patient: I'm barely eating — I've lost my appetite completely. "+
      "Doctor: Are you able to enjoy anything at the moment? "+
      "Patient: No, even things I used to love feel pointless. "+
      "Doctor: I need to ask — have you had any thoughts of harming yourself? "+
      "Patient: Sometimes I think everyone would be better off without me, but I wouldn't act on it.",
    fields:[
      { label:'Mood', answer:'low mood with loss of interest', accept:['low mood, anhedonia','depressed mood, lost interest'] },
      { label:'Sleep', answer:'early morning waking at four', accept:['waking at 4am','early waking'] },
      { label:'Appetite', answer:'reduced, barely eating', accept:['poor appetite','lost appetite'] },
      { label:'Risk', answer:'passive thoughts, no intent to act', accept:['passive suicidal thoughts, no plan','thoughts others better off, no intent'] }
    ],
    pt:'Rastreio de humor e risco; note o registro sensível e a resposta empática.',
    focus:['depression','risk assessment','sensitive questioning'] },

  /* ---------------- Part B: workplace extracts (short MCQ) ---------------- */
  { id:'oetL0101', part:'B', type:'mcq', speakers:['nurse','doctor'],
    audio_text:"Nurse: Before you go off shift, a quick handover on bed four. Mrs Khan's post-op day one. "+
      "Her pain's now controlled on oral morphine, but her urine output has dropped to twenty mls an hour. "+
      "I've flagged it to the reg — she wants a fluid challenge and repeat bloods in the morning.",
    question:'What is the main concern in this handover?',
    options:['Uncontrolled pain','Low urine output','A wound infection','A high temperature'],
    answer:1,
    pt:'Handovers são densos; a informação-chave costuma vir depois de "but".',
    focus:['handover','oliguria','listening for the key point'] },

  { id:'oetL0102', part:'B', type:'mcq', speakers:['pharmacist','doctor'],
    audio_text:"Pharmacist: I'm calling about the warfarin prescription for Mr Doyle. "+
      "His latest INR came back at five point two, which is well above target. "+
      "I'd suggest omitting tonight's dose and rechecking tomorrow before he takes any more.",
    question:'What does the pharmacist recommend?',
    options:['Increase the warfarin dose','Stop warfarin permanently','Omit tonight\'s dose and recheck','Switch to a different tablet'],
    answer:2,
    pt:'INR alto = risco de sangramento; a recomendação é omitir e reavaliar.',
    focus:['medication safety','recommendation','numbers'] },

  { id:'oetL0103', part:'B', type:'mcq', speakers:['physio','patient'],
    audio_text:"Physiotherapist: Right, before you head home, remember the golden rule with the new hip. "+
      "Don't bend it past ninety degrees, don't cross your legs, and don't twist on it for the first six weeks. "+
      "Use the raised toilet seat and the grabber we gave you.",
    question:'What is the patient advised to avoid?',
    options:['Walking on the hip','Bending past ninety degrees','Using the grabber','Sitting on a raised seat'],
    answer:1,
    pt:'Instruções pós-artroplastia de quadril; foco na precaução principal.',
    focus:['patient instructions','precautions'] },

  { id:'oetL0104', part:'B', type:'mcq', speakers:['team-lead'],
    audio_text:"Team lead: Quick briefing before the ward round. We've had two cases of norovirus on the bay, "+
      "so we're closing it to admissions. Please use soap and water, not just gel — alcohol doesn't kill this bug. "+
      "And anyone with symptoms should stay off for forty-eight hours after they settle.",
    question:'Why must staff use soap and water rather than alcohol gel?',
    options:['It is quicker','Alcohol gel is out of stock','Alcohol does not kill norovirus','It is required for all patients'],
    answer:2,
    pt:'Briefing de equipe; a justificativa ("because") é a resposta.',
    focus:['infection control','rationale'] },

  { id:'oetL0105', part:'B', type:'mcq', speakers:['doctor','patient'],
    audio_text:"Doctor: I'm starting you on this inhaler as a preventer. It won't help in an attack — "+
      "that's what your blue reliever is for. Take two puffs of the brown one morning and night, every day, "+
      "and rinse your mouth afterwards to avoid a sore throat.",
    question:'What is the purpose of the brown inhaler?',
    options:['To relieve a sudden attack','To prevent attacks daily','To treat a sore throat','To use only when breathless'],
    answer:1,
    pt:'Preventer (marrom) vs reliever (azul) — distinção clássica na asma.',
    focus:['asthma inhalers','preventer vs reliever'] },

  { id:'oetL0106', part:'B', type:'mcq', speakers:['midwife','patient'],
    audio_text:"Midwife: Your blood pressure today is a little up, at one-forty over ninety-five, "+
      "and there's a trace of protein in your urine. On its own it's not alarming, "+
      "but I'd like to bring you back in two days to keep an eye on it.",
    question:'What is the midwife\'s plan?',
    options:['Admit to hospital now','Start medication today','Review again in two days','No follow-up needed'],
    answer:2,
    pt:'PA elevada + proteinúria na gestação: vigilância próxima (pré-eclâmpsia).',
    focus:['antenatal','monitoring plan'] },

  /* ---------------- Part C: longer talk / interview (MCQ) ---------------- */
  { id:'oetL0201', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: In today's session on antimicrobial stewardship, the central message is restraint. "+
      "For decades we reached for broad-spectrum antibiotics as a safety net, but that habit has driven resistance. "+
      "The evidence now favours narrow-spectrum agents wherever the likely organism is known, "+
      "reserving the powerful drugs for when cultures truly demand them. "+
      "The single biggest change any clinician can make is to review every prescription at forty-eight hours "+
      "and stop or de-escalate the moment results allow.",
    question:'According to the speaker, what is the most important change clinicians can make?',
    options:['Always start broad-spectrum antibiotics','Never use antibiotics','Review and de-escalate at 48 hours','Wait for cultures before treating'],
    answer:2,
    pt:'Em Part C, a tese principal costuma ser reforçada ("the single biggest change").',
    focus:['main idea','stewardship','inference'] },

  { id:'oetL0202', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: Dr Owens, why do so many patients stop taking their blood-pressure tablets? "+
      "Specialist: It's rarely simple forgetfulness. Because hypertension has no symptoms, patients feel perfectly well, "+
      "so the tablets seem to offer nothing but side effects. If we don't explain that we're treating a future risk — "+
      "a stroke they can't feel coming — adherence collapses. The consultation, not the prescription, is where "+
      "the real treatment happens.",
    question:'What does Dr Owens suggest is the main reason patients stop their tablets?',
    options:['They simply forget','They feel well and see no benefit','The tablets are too expensive','They dislike the taste'],
    answer:1,
    pt:'A causa é atribuída à ausência de sintomas — ouça a explicação após "Because".',
    focus:['cause and reasoning','adherence','interview'] },

  { id:'oetL0203', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: When we break bad news, the instinct is to fill silence with information. "+
      "Resist it. After the words 'I'm afraid it's cancer', the patient hears almost nothing for the next minute — "+
      "their mind is elsewhere. So pause. Let the silence sit. Then, and only then, ask what they'd like to know. "+
      "The pace must be set by the patient, never by our own discomfort.",
    question:'What is the speaker\'s main advice after delivering bad news?',
    options:['Give as much detail as possible','Pause and let the patient set the pace','Reassure them immediately','Change the subject'],
    answer:1,
    pt:'A tese: respeitar o silêncio e deixar o paciente ditar o ritmo (SPIKES).',
    focus:['breaking bad news','main message','SPIKES'] },

  { id:'oetL0204', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: What's the commonest mistake juniors make with sepsis? "+
      "Specialist: Waiting. They see a soft blood pressure and a mild fever and decide to observe. "+
      "But sepsis is a time-critical emergency — every hour of delay in antibiotics measurably increases mortality. "+
      "The moment you suspect it, start the sepsis six: cultures, lactate, fluids, antibiotics, oxygen and monitor output. "+
      "You can always step back later; you cannot buy back a lost hour.",
    question:'What is the specialist\'s key message about sepsis?',
    options:['Observe before treating','Delay is dangerous — treat promptly','Antibiotics are rarely needed','Only seniors should treat it'],
    answer:1,
    pt:'"Time-critical" e "cannot buy back a lost hour" reforçam a mensagem central.',
    focus:['sepsis','urgency','main idea'] },

  /* ---------------- Part B: mais trechos de contexto de trabalho ---------------- */
  { id:'oetL0107', part:'B', type:'mcq', speakers:['nurse','doctor'],
    audio_text:"Nurse: Handover on Mr Price in bed six. He's day two post-hip replacement. "+
      "Pain's fine, but he hasn't passed urine since the catheter came out eight hours ago and he's uncomfortable. "+
      "I've done a bladder scan — there's 700 mls sitting there. I think he needs re-catheterising.",
    question:'What problem has the nurse identified?',
    options:['Post-operative bleeding','Urinary retention','A wound infection','Uncontrolled pain'],
    answer:1,
    pt:'Bexiga cheia (700 mL) + não urinou = retenção urinária.',
    focus:['handover','urinary retention'] },
  { id:'oetL0108', part:'B', type:'mcq', speakers:['doctor','patient'],
    audio_text:"Doctor: I'm prescribing you an antibiotic called doxycycline. One thing to remember — "+
      "don't take it with milk, antacids, or iron tablets, as they stop it being absorbed. "+
      "Take it with a full glass of water and stay upright for half an hour afterwards.",
    question:'What should the patient avoid taking with doxycycline?',
    options:['A glass of water','Milk or antacids','Any food at all','Painkillers'],
    answer:1,
    pt:'Interação medicamentosa: laticínios/antiácidos reduzem a absorção.',
    focus:['medication counselling','drug interaction'] },
  { id:'oetL0109', part:'B', type:'mcq', speakers:['team-lead'],
    audio_text:"Team lead: A reminder before discharge planning. Every patient going home on a new anticoagulant "+
      "must leave with an alert card and a clear explanation of bleeding risks. Missing this is our most "+
      "common safety incident, so please do not treat it as optional paperwork.",
    question:'What must patients on a new anticoagulant receive before discharge?',
    options:['A repeat prescription only','An alert card and bleeding-risk advice','A follow-up scan','A dietary leaflet'],
    answer:1,
    pt:'Segurança na alta: cartão de alerta + orientação sobre sangramento.',
    focus:['discharge safety','anticoagulation'] },
  { id:'oetL0110', part:'B', type:'mcq', speakers:['midwife','patient'],
    audio_text:"Midwife: Your baby's latch looks much better today. If you do feel any sharp, ongoing pain while feeding, "+
      "that's usually a sign the latch has slipped — break the seal gently with your little finger and try again. "+
      "Pain that lingers between feeds, though, we'd want to check for thrush.",
    question:'What does lingering pain between feeds suggest, according to the midwife?',
    options:['A poor latch','Possible thrush','Normal feeding','Low milk supply'],
    answer:1,
    pt:'Diferencie: dor ao mamar (pega) vs dor entre as mamadas (candidíase/thrush).',
    focus:['breastfeeding advice','distinguishing causes'] },

  /* ---------------- Part C: mais palestras/entrevistas ---------------- */
  { id:'oetL0205', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: The single most powerful tool in preventing hospital infection isn't a new antibiotic "+
      "or an expensive device. It's hand hygiene — and yet compliance rarely rises above sixty per cent. "+
      "The barrier is almost never knowledge; staff know they should. It's time pressure and forgetfulness "+
      "in the flow of a busy shift. That is why we design the environment to prompt the behaviour, "+
      "rather than simply telling people to try harder.",
    question:'According to the speaker, why is hand-hygiene compliance often low?',
    options:['Staff lack knowledge','Time pressure and forgetfulness','Gel is unavailable','Patients object'],
    answer:1,
    pt:'A causa não é falta de conhecimento, mas pressão de tempo — ouça após "It\'s".',
    focus:['infection prevention','cause','main idea'] },
  { id:'oetL0206', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: Dr Hale, what do patients most often get wrong about antibiotics? "+
      "Specialist: The belief that they help with colds and flu. The vast majority of those are viral, "+
      "and antibiotics do nothing against viruses. Prescribing them anyway doesn't just waste a resource — "+
      "it exposes the patient to side effects for no benefit and fuels resistance. The hardest, and most "+
      "important, consultation skill is explaining why the answer is sometimes 'no antibiotic'.",
    question:'Why does Dr Hale say antibiotics should not be used for most colds?',
    options:['They are too expensive','Colds are usually viral','Patients dislike them','They work too slowly'],
    answer:1,
    pt:'Resfriados são virais; antibióticos não agem sobre vírus.',
    focus:['antibiotic resistance','patient education'] },
  { id:'oetL0207', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: When a patient says 'I'm fine', believe the words at your peril. In palliative care especially, "+
      "distress is often carried in what is not said — the averted gaze, the too-quick reassurance, the family member "+
      "who answers for them. Our task is to create enough safety that the real question can surface. Sometimes that "+
      "means sitting with silence long enough for the patient to fill it.",
    question:'What is the speaker\'s main point?',
    options:['Always accept what patients say','Attend to non-verbal cues and create safety','Ask family members instead','Avoid silence in consultations'],
    answer:1,
    pt:'A tese: atenção ao não-dito e criar segurança para a verdadeira questão surgir.',
    focus:['communication','non-verbal cues','main idea'] },
  { id:'oetL0208', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: Why is medication reconciliation such a priority on admission? "+
      "Specialist: Because the moment a patient moves between settings is when errors creep in. "+
      "A drug gets dropped, a dose is copied wrongly, a herbal remedy goes unmentioned. Reconciling the list — "+
      "checking what they actually take against what's written — catches these before they cause harm. "+
      "It's unglamorous work, but it prevents more harm than most of what we do.",
    question:'When are medication errors most likely to occur, according to the specialist?',
    options:['During surgery','When a patient moves between settings','Only in the community','When new drugs launch'],
    answer:1,
    pt:'Transições de cuidado são o ponto crítico para erros de medicação.',
    focus:['medication safety','transitions of care'] }
];
