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
    focus:['medication safety','transitions of care'] },

  /* ---------------- Part A: mais consultas (note completion) ---------------- */
  { id:'oetL0009', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: How's the asthma been treating you lately? "+
      "Patient: Not brilliantly. I'm reaching for the blue inhaler three or four times a day now. "+
      "Doctor: And at night? "+
      "Patient: I've been waking up coughing a couple of nights a week. "+
      "Doctor: Have you noticed anything that sets it off? "+
      "Patient: My daughter's new cat, I think. And it's worse when the pollen's high. "+
      "Doctor: Are you using the brown preventer inhaler every day? "+
      "Patient: Honestly? Only when I remember — maybe half the time.",
    fields:[
      { label:'Reliever use', answer:'three or four times a day', accept:['3-4 times a day','three to four times daily'] },
      { label:'Night symptoms', answer:'waking up coughing a couple of nights a week', accept:['waking coughing twice a week','night cough two nights a week'] },
      { label:'Triggers', answer:'the cat and high pollen', accept:['cat and pollen','daughter\'s cat, pollen'] },
      { label:'Preventer adherence', answer:'only when she remembers, about half the time', accept:['about half the time','uses preventer irregularly'] }
    ],
    pt:'Controle da asma: uso do reliever, sintomas noturnos, gatilhos e adesão ao preventer.',
    focus:['asthma control','adherence','triggers'] },

  { id:'oetL0010', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: I hear your back's been playing up. What happened? "+
      "Patient: I was lifting boxes at work two days ago and felt something go, right across my lower back. "+
      "Doctor: Does the pain move anywhere? "+
      "Patient: It shoots down the back of my right leg, as far as the knee. "+
      "Doctor: What makes it worse? "+
      "Patient: Sitting for any length of time. Walking about actually helps a bit. "+
      "Doctor: Any numbness around your back passage, or trouble controlling your bladder? "+
      "Patient: No, nothing like that. "+
      "Doctor: What have you taken for it? "+
      "Patient: Just ibuprofen from the chemist, but it's barely touching it.",
    fields:[
      { label:'Onset', answer:'lifting boxes at work two days ago', accept:['lifting at work, two days ago','two days ago while lifting boxes'] },
      { label:'Radiation', answer:'down the back of the right leg to the knee', accept:['down the right leg to the knee','right leg as far as the knee'] },
      { label:'Aggravating factor', answer:'sitting', accept:['sitting for any length of time','prolonged sitting'] },
      { label:'Red flags', answer:'none — no saddle numbness or bladder problems', accept:['no red flags','no numbness or bladder trouble'] },
      { label:'Current medication', answer:'ibuprofen, with little effect', accept:['ibuprofen barely helping','over-the-counter ibuprofen'] }
    ],
    pt:'Lombalgia mecânica com ciática; note o rastreio de cauda equina ("back passage", "bladder").',
    focus:['back pain','red-flag screening','lay anatomy'] },

  { id:'oetL0011', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: Tell me about this pain you've been getting. "+
      "Patient: It's up here, under my ribs on the right side. It comes on an hour or so after dinner. "+
      "Doctor: Any particular kind of dinner? "+
      "Patient: Now you mention it, it's always after something fatty — fish and chips, or a takeaway. "+
      "Doctor: Does the pain spread anywhere? "+
      "Patient: Round to my back, up by my right shoulder blade. "+
      "Doctor: How long does it last? "+
      "Patient: A couple of hours, then it wears off on its own. "+
      "Doctor: Anything else with it? "+
      "Patient: I feel sick with it, but I've not actually been sick. And no, my skin's not gone yellow — my wife checked.",
    fields:[
      { label:'Site of pain', answer:'under the ribs on the right side', accept:['right upper abdomen','under the right ribs'] },
      { label:'Trigger', answer:'fatty food', accept:['fatty meals','after fatty dinners'] },
      { label:'Radiation', answer:'to the right shoulder blade', accept:['round to the back, right shoulder blade','right shoulder blade'] },
      { label:'Duration', answer:'a couple of hours', accept:['about two hours','2 hours'] },
      { label:'Associated symptoms', answer:'nausea, no vomiting, no jaundice', accept:['feels sick but not been sick, no yellowing','nausea without vomiting or jaundice'] }
    ],
    pt:'Cólica biliar clássica: dor pós-prandial gordurosa irradiando à escápula. "Been sick" = vomitar.',
    focus:['biliary colic','feel sick vs be sick','radiation'] },

  { id:'oetL0012', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: You mentioned dizzy spells on the phone. Describe one for me. "+
      "Patient: The whole room spins, like I've just stepped off a roundabout. "+
      "Doctor: When does it happen? "+
      "Patient: Mostly when I roll over in bed, or when I tip my head back to hang the washing. "+
      "Doctor: How long does the spinning last? "+
      "Patient: Less than a minute — maybe thirty seconds — then it settles. "+
      "Doctor: Any sickness with it? "+
      "Patient: I feel queasy, but I've never actually been sick. "+
      "Doctor: And your hearing? Any ringing in the ears? "+
      "Patient: No, hearing's fine, no ringing. It all started after that heavy cold last month.",
    fields:[
      { label:'Character', answer:'the room spinning', accept:['spinning sensation','true vertigo'] },
      { label:'Trigger', answer:'rolling over in bed or tipping the head back', accept:['turning in bed, looking up','head position changes'] },
      { label:'Duration of episode', answer:'less than a minute', accept:['about thirty seconds','under a minute'] },
      { label:'Hearing', answer:'normal, no tinnitus', accept:['fine, no ringing','no hearing change or ringing'] },
      { label:'Onset', answer:'after a heavy cold last month', accept:['following a cold','after a cold a month ago'] }
    ],
    pt:'VPPB: vertigem posicional breve, audição normal. Note a linguagem do paciente ("roundabout", "queasy").',
    focus:['vertigo','positional trigger','patient metaphors'] },

  { id:'oetL0013', part:'A', type:'note', speakers:['nurse','patient'],
    audio_text:"Nurse: Before your operation I need to run through allergies. Are you allergic to any medicines? "+
      "Patient: Penicillin. I came out in hives all over as a child. "+
      "Nurse: Any food allergies? "+
      "Patient: Peanuts. Last year my lips swelled up and my throat felt tight within minutes. "+
      "Nurse: That sounds serious. Do you carry anything for it? "+
      "Patient: Yes, I've got an EpiPen in my bag wherever I go. "+
      "Nurse: Have you ever had an anaesthetic before? "+
      "Patient: Twice, and no problems either time. "+
      "Nurse: Perfect, I'll flag the allergies on your wristband.",
    fields:[
      { label:'Drug allergy', answer:'penicillin — hives as a child', accept:['penicillin, came out in hives','penicillin rash'] },
      { label:'Food allergy', answer:'peanuts — lip swelling and tight throat', accept:['peanuts with swelling of lips and throat tightness','peanut anaphylaxis'] },
      { label:'Emergency device', answer:'carries an EpiPen', accept:['EpiPen','adrenaline auto-injector'] },
      { label:'Previous anaesthetics', answer:'two, with no problems', accept:['twice, no problems','no anaesthetic reactions'] }
    ],
    pt:'Checagem pré-operatória de alergias: reação, gravidade e dispositivo de emergência.',
    focus:['allergy history','anaphylaxis features','pre-op checks'] },

  { id:'oetL0014', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: You said you wanted to talk about your drinking. Tell me what a typical evening looks like. "+
      "Patient: Most nights it's three or four cans of the strong lager. More at the weekend, if I'm honest. "+
      "Doctor: Have you ever tried to cut down? "+
      "Patient: Last year. I managed two weeks and then it crept back up. "+
      "Doctor: Some people notice shakes in the morning until they've had a drink. Does that happen to you? "+
      "Patient: Lately, yes. My hands are shaky till the first can. "+
      "Doctor: Has the drinking caused any problems at work or at home? "+
      "Patient: I've had a warning at work for missing shifts. That's really why I'm here.",
    fields:[
      { label:'Typical intake', answer:'three or four cans of strong lager most nights', accept:['3-4 cans of strong lager nightly','three or four strong lagers most evenings'] },
      { label:'Pattern', answer:'more at the weekend', accept:['heavier at weekends','increases at the weekend'] },
      { label:'Withdrawal feature', answer:'morning shakes until the first drink', accept:['shaky hands in the morning','morning tremor relieved by drinking'] },
      { label:'Impact', answer:'a warning at work for missing shifts', accept:['work warning for missed shifts','disciplinary warning at work'] }
    ],
    pt:'História de álcool sem julgamento: quantidade, tentativas de reduzir, abstinência matinal, impacto.',
    focus:['alcohol history','withdrawal','non-judgemental tone'] },

  { id:'oetL0015', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: What's brought you in today? "+
      "Patient: My throat. It's been raw for four days and it's getting worse, not better. "+
      "Doctor: Are you able to eat and drink? "+
      "Patient: Swallowing food really hurts. I'm managing sips of water and that's about it. "+
      "Doctor: Any fever? "+
      "Patient: Last night I measured thirty-eight point two. "+
      "Doctor: Your voice sounds a little muffled. Have you looked at your throat? "+
      "Patient: My flatmate had a look with a torch — she said there are white spots all over my tonsils.",
    fields:[
      { label:'Duration', answer:'four days, getting worse', accept:['4 days and worsening','four days'] },
      { label:'Swallowing', answer:'painful — managing only sips of water', accept:['can only manage sips of water','painful swallowing, fluids only'] },
      { label:'Temperature', answer:'38.2 last night', accept:['thirty-eight point two','38.2'] },
      { label:'Throat appearance', answer:'white spots on the tonsils', accept:['white spots over the tonsils','exudate on tonsils'] }
    ],
    pt:'Amigdalite: disfagia progressiva e exsudato. "Muffled voice" é sinal de alerta (abscesso).',
    focus:['sore throat','swallowing','red flags'] },

  { id:'oetL0016', part:'A', type:'note', speakers:['doctor','patient'],
    audio_text:"Doctor: I understand you had a fall at home. Talk me through what happened. "+
      "Patient: I got up in the night to spend a penny and tripped over the rug in the bedroom. "+
      "Doctor: Did you feel anything before you went down — dizzy, or your heart racing? "+
      "Patient: I did feel a bit light-headed when I first stood up from the bed. "+
      "Doctor: Did you black out at all? "+
      "Patient: No, I remember the whole thing, start to finish. "+
      "Doctor: Were you hurt? "+
      "Patient: I've a nasty bruise on my hip, but I didn't hit my head. "+
      "Doctor: Have your tablets changed recently? "+
      "Patient: The doctor started me on a new blood-pressure tablet last month. "+
      "Doctor: And is there anyone at home with you? "+
      "Patient: No, I've lived alone since my husband passed.",
    fields:[
      { label:'Circumstances', answer:'tripped over the bedroom rug at night', accept:['tripped on the rug getting up at night','fell over a rug at night'] },
      { label:'Warning symptom', answer:'light-headed on standing', accept:['felt light-headed when standing up','dizziness on standing'] },
      { label:'Loss of consciousness', answer:'none — remembers the whole event', accept:['no blackout','did not black out'] },
      { label:'Injury', answer:'bruised hip, no head injury', accept:['hip bruise, did not hit head','bruise on the hip only'] },
      { label:'Medication change', answer:'new blood-pressure tablet last month', accept:['recently started antihypertensive','new BP tablet a month ago'] },
      { label:'Social situation', answer:'lives alone', accept:['alone at home','widowed, lives alone'] }
    ],
    pt:'Queda no idoso: circunstância, hipotensão postural, medicação nova e rede de apoio. "Spend a penny" = ir ao banheiro.',
    focus:['falls assessment','postural symptoms','euphemisms'] },

  /* ---------------- Part B: mais trechos de contexto de trabalho ---------------- */
  { id:'oetL0111', part:'B', type:'mcq', speakers:['radiographer','patient'],
    audio_text:"Radiographer: A few instructions for Thursday's abdominal ultrasound. Please don't eat anything "+
      "for six hours beforehand — an empty stomach gives us much clearer pictures of the gallbladder. "+
      "You can drink still water, and do take your usual tablets with a small sip.",
    question:'What must the patient do before the ultrasound?',
    options:['Stop all medication','Avoid food for six hours','Drink a litre of milk','Arrive fasted for 24 hours'],
    answer:1,
    pt:'Instrução de preparo: jejum de 6 h, água e medicações habituais permitidas.',
    focus:['test preparation','instructions'] },
  { id:'oetL0112', part:'B', type:'mcq', speakers:['doctor','patient'],
    audio_text:"Doctor: This is your GTN spray for the angina. When the chest pain comes on, sit yourself down first, "+
      "then one spray under the tongue. It works fast, but it can drop your blood pressure and make you dizzy — "+
      "that's why I want you sitting. If the pain hasn't gone five minutes after a second spray, call an ambulance.",
    question:'Why should the patient sit down before using the spray?',
    options:['It works better lying down','It can cause dizziness','To count the sprays','To time five minutes'],
    answer:1,
    pt:'GTN vasodilata → hipotensão e tontura; por isso, sentar antes de usar.',
    focus:['medication counselling','rationale'] },
  { id:'oetL0113', part:'B', type:'mcq', speakers:['nurse','doctor'],
    audio_text:"Nurse: Quick update on Mr Field in bed two. His oxygen sats slipped from ninety-six to eighty-eight "+
      "on air overnight, and his breathing rate's up at twenty-four. I've started him on two litres via nasal cannula, "+
      "which has brought him back up to ninety-four, and the outreach team will review him within the hour.",
    question:'What action has already been taken?',
    options:['He has been intubated','Oxygen has been started','Antibiotics were given','He was moved to intensive care'],
    answer:1,
    pt:'Em handovers, separe o que JÁ foi feito (oxigênio) do que está planejado (revisão).',
    focus:['handover','actions taken vs planned'] },
  { id:'oetL0114', part:'B', type:'mcq', speakers:['physio','patient'],
    audio_text:"Physiotherapist: With this ankle fracture, the rule for the next two weeks is no weight at all through "+
      "the left foot — the crutches do the work, the foot just floats. After your clinic review, we'll likely move to "+
      "putting some weight through it as pain allows. And when you're sitting, keep the leg up on a stool to help the swelling.",
    question:'What must the patient avoid for the first two weeks?',
    options:['Using the crutches','Putting weight through the left foot','Sitting with the leg raised','Attending the clinic review'],
    answer:1,
    pt:'"Non-weight-bearing": nenhum peso no pé por 2 semanas; depois, progressão conforme a dor.',
    focus:['mobility instructions','weight-bearing status'] },

  /* ---------------- Part C: mais palestras/entrevistas ---------------- */
  { id:'oetL0209', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: Professor, why do you say a fall in an older person is 'never just a trip'? "+
      "Specialist: Because when we look closely, there's almost always a stack of contributing factors: "+
      "four or five medications interacting, fading eyesight, weaker muscles, a loose rug at home. "+
      "The fall is simply the moment they all line up. And of that whole stack, the piece we can change "+
      "most quickly is the medication list — one structured review often removes two or three culprits, "+
      "especially sedatives and blood-pressure tablets that drop the pressure on standing.",
    question:'Which contributing factor does the specialist say can be changed most quickly?',
    options:['Home hazards like rugs','Muscle weakness','The medication list','Failing eyesight'],
    answer:2,
    pt:'Quedas são multifatoriais; a revisão de medicações é o fator reversível mais rápido.',
    focus:['falls','multifactorial causes','key detail'] },
  { id:'oetL0210', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: Ask a patient 'Do you understand?' and you will almost always hear yes — "+
      "it's the polite answer, not the true one. Teach-back turns the question around. We say: "+
      "'I want to be sure I explained that clearly. Could you tell me, in your own words, how you'll take "+
      "this medicine?' Notice where the responsibility sits — with my explanation, not their memory. "+
      "Framed that way, patients don't feel tested, and the gaps in understanding surface while we can still fix them.",
    question:'How should teach-back be framed, according to the speaker?',
    options:["As a test of the patient's memory",'As a check of the clinician\'s explanation','As a written questionnaire','As a task for the family'],
    answer:1,
    pt:'Teach-back: a responsabilidade é da explicação do clínico — o paciente não está sendo testado.',
    focus:['teach-back','framing','main idea'] },
  { id:'oetL0211', part:'C', type:'mcq', speakers:['interviewer','specialist'],
    audio_text:"Interviewer: Why does the classic advice — eat less, move more — so often fail? "+
      "Specialist: Because it ignores the life the patient actually lives. Tell a night-shift worker with two jobs "+
      "to cook fresh meals and join a gym, and you've prescribed something impossible. What works is almost "+
      "embarrassingly modest: one small, specific change the patient chooses — swapping the sugary drinks, "+
      "a ten-minute walk after lunch — written down, and reviewed at the next visit. Small and kept "+
      "beats ambitious and abandoned, every time.",
    question:'What approach does the specialist recommend for lifestyle change?',
    options:['A strict diet and gym plan','One small, patient-chosen change with review','Referring everyone to a dietitian','Repeating the advice more firmly'],
    answer:1,
    pt:'Mudança de estilo de vida: pequena, específica, escolhida pelo paciente e revisada.',
    focus:['lifestyle counselling','behaviour change','main idea'] },
  { id:'oetL0212', part:'C', type:'mcq', speakers:['presenter'],
    audio_text:"Presenter: Early illness rarely shows its full face at the first visit, so uncertainty isn't a failure "+
      "of the consultation — it's built into it. Safety netting is how we share that uncertainty honestly with "+
      "the patient. It has three parts: what to watch for, how soon to come back, and what we'll do next if "+
      "things change. 'It looks like a simple infection today. But if the fever isn't settling in forty-eight hours, "+
      "or the rash spreads, I need to see you again.' That single sentence turns uncertainty into a shared plan.",
    question:'What is safety netting, according to the speaker?',
    options:['Admitting patients whenever unsure','Ordering every available test','Telling the patient what to watch for and when to return','Avoiding a diagnosis at the first visit'],
    answer:2,
    pt:'Safety netting: o que observar, quando voltar e o que acontece depois — plano compartilhado.',
    focus:['safety netting','uncertainty','structure of advice'] }
];
