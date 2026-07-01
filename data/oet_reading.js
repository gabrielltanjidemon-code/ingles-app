/* oet_reading.js — OET Reading (Partes A/B/C).
   Part A (type:'short'): textos curtos de saúde, cronômetro de 15 min, skim/scan.
   Part B (type:'mcq'): trechos de contexto de trabalho (memorandos, políticas).
   Part C (type:'mcq'): textos longos; compreensão detalhada e inferência.
   Glossário clicável reaproveita MEDVOCAB. */
window.OET_READING = [
  /* ---------------- Part A: expeditious short-answer ---------------- */
  { id:'oetR0001', part:'A', source:'Text 1 — Oral glucose replacement',
    text_en:'For a conscious adult with hypoglycaemia, give 15–20 g of fast-acting carbohydrate: for example, '+
      '150–200 mL of pure fruit juice, 3–4 heaped teaspoons of sugar dissolved in water, or 4–5 glucose tablets. '+
      'Recheck blood glucose after 15 minutes and repeat if still below 4 mmol/L.',
    question_en:'How many glucose tablets provide fast-acting carbohydrate?',
    type:'short', answer:'4-5 tablets', accept:['4 to 5 tablets','4–5 glucose tablets','four to five tablets'],
    pt:'Parte A é cronometrada: procure o número diretamente na frase, sem ler tudo.' },
  { id:'oetR0002', part:'A', source:'Text 1 — Oral glucose replacement',
    text_en:'For a conscious adult with hypoglycaemia, give 15–20 g of fast-acting carbohydrate. '+
      'Recheck blood glucose after 15 minutes and repeat if still below 4 mmol/L.',
    question_en:'After how long should blood glucose be rechecked?',
    type:'short', answer:'15 minutes', accept:['after 15 minutes','fifteen minutes'],
    pt:'Escaneie por números e unidades de tempo.' },
  { id:'oetR0003', part:'A', source:'Text 2 — Paracetamol dosing (adult)',
    text_en:'Adults and children over 16: 500 mg to 1 g every 4–6 hours as required, to a maximum of 4 g in 24 hours. '+
      'Do not exceed the stated dose. Reduce the maximum in adults under 50 kg or with hepatic impairment.',
    question_en:'What is the maximum daily dose of paracetamol for a healthy adult?',
    type:'short', answer:'4 g in 24 hours', accept:['4 grams in 24 hours','4g/day','4 g per day'],
    pt:'Tabelas de dose: o "maximum" é a informação mais procurada.' },
  { id:'oetR0004', part:'A', source:'Text 2 — Paracetamol dosing (adult)',
    text_en:'Reduce the maximum in adults under 50 kg or with hepatic impairment.',
    question_en:'Name one situation in which the maximum dose should be reduced.',
    type:'short', answer:'body weight under 50 kg', accept:['hepatic impairment','liver impairment','weight below 50 kg','under 50 kg'],
    pt:'Duas respostas são aceitáveis (peso <50 kg OU insuficiência hepática).' },
  { id:'oetR0005', part:'A', source:'Text 3 — Wound dressing selection',
    text_en:'Choose a hydrocolloid dressing for lightly to moderately exuding wounds; it maintains a moist environment '+
      'and can be left in place for up to 5–7 days. For heavily exuding wounds, use an alginate, which is changed daily.',
    question_en:'Which dressing is recommended for a heavily exuding wound?',
    type:'short', answer:'an alginate', accept:['alginate','alginate dressing'],
    pt:'Matching: relacione o tipo de ferida ao curativo correto.' },
  { id:'oetR0006', part:'A', source:'Text 3 — Wound dressing selection',
    text_en:'A hydrocolloid dressing can be left in place for up to 5–7 days.',
    question_en:'How long can a hydrocolloid dressing be left in place?',
    type:'short', answer:'up to 5-7 days', accept:['5 to 7 days','five to seven days','up to 7 days'],
    pt:'Procure o intervalo de tempo diretamente.' },
  { id:'oetR0007', part:'A', source:'Text 4 — Adult basic life support',
    text_en:'If the adult is unresponsive and not breathing normally, call for help and start CPR. '+
      'Give 30 chest compressions at a rate of 100–120 per minute and a depth of 5–6 cm, '+
      'followed by 2 rescue breaths. Continue at a ratio of 30:2 until help arrives.',
    question_en:'What is the compression-to-ventilation ratio in adult CPR?',
    type:'short', answer:'30:2', accept:['30 to 2','thirty to two'],
    pt:'Números-chave de RCP: taxa, profundidade e razão.' },
  { id:'oetR0008', part:'A', source:'Text 4 — Adult basic life support',
    text_en:'Give 30 chest compressions at a rate of 100–120 per minute and a depth of 5–6 cm.',
    question_en:'At what rate should chest compressions be given?',
    type:'short', answer:'100-120 per minute', accept:['100 to 120 per minute','100–120/min'],
    pt:'Escaneie por "rate" e "per minute".' },
  { id:'oetR0009', part:'A', source:'Text 5 — Anaphylaxis: adrenaline',
    text_en:'In anaphylaxis, give intramuscular adrenaline (1:1000) into the anterolateral thigh. '+
      'The adult dose is 500 micrograms (0.5 mL). Repeat after 5 minutes if there is no improvement.',
    question_en:'What is the adult intramuscular dose of adrenaline in anaphylaxis?',
    type:'short', answer:'500 micrograms', accept:['500 mcg','0.5 mL','500 micrograms (0.5 mL)'],
    pt:'Doses de emergência exigem precisão — não arredonde.' },
  { id:'oetR0010', part:'A', source:'Text 5 — Anaphylaxis: adrenaline',
    text_en:'Repeat after 5 minutes if there is no improvement.',
    question_en:'When should the adrenaline dose be repeated?',
    type:'short', answer:'after 5 minutes if no improvement', accept:['after 5 minutes','5 minutes if no improvement'],
    pt:'Condição + tempo: "if there is no improvement".' },
  { id:'oetR0011', part:'A', source:'Text 6 — Pressure ulcer risk',
    text_en:'The Waterlow score assesses pressure-ulcer risk. A score of 10–14 indicates "at risk", '+
      '15–19 "high risk", and 20 or above "very high risk". Reassess after any change in condition.',
    question_en:'What Waterlow score indicates "very high risk"?',
    type:'short', answer:'20 or above', accept:['20 or more','≥20','twenty or above'],
    pt:'Faixas de pontuação: relacione número a categoria.' },
  { id:'oetR0012', part:'A', source:'Text 6 — Pressure ulcer risk',
    text_en:'Reassess after any change in condition.',
    question_en:'When should the Waterlow score be reassessed?',
    type:'short', answer:'after any change in condition', accept:['after a change in condition','when condition changes'],
    pt:'Respostas curtas devem copiar a expressão exata do texto.' },

  /* ---------------- Part B: workplace texts (MCQ) ---------------- */
  { id:'oetR0101', part:'B', source:'Ward memo — controlled drugs',
    text_en:'All controlled drugs must be checked and signed by two registered practitioners at each administration. '+
      'The running balance in the register must be reconciled at the end of every shift. Any discrepancy, however small, '+
      'must be reported to the ward manager immediately and must not wait until the following day.',
    question_en:'The memo emphasises that a discrepancy in controlled drugs should be:',
    type:'mcq', options:['recorded and reviewed weekly','reported immediately, not deferred','ignored if small','signed by one practitioner'],
    answer:1,
    pt:'Palavras como "immediately" e "must not wait" indicam a resposta.' },
  { id:'oetR0102', part:'B', source:'Policy extract — sharps injury',
    text_en:'Following a needlestick injury, encourage the wound to bleed, wash it with soap and running water, and do not scrub. '+
      'Report the incident and attend occupational health the same day so that risk can be assessed and, if indicated, '+
      'post-exposure prophylaxis started without delay.',
    question_en:'According to the policy, what should you NOT do to a needlestick wound?',
    type:'mcq', options:['Wash it with water','Encourage it to bleed','Scrub it','Report it'],
    answer:2,
    pt:'Questões "NOT" exigem localizar a instrução negativa ("do not scrub").' },
  { id:'oetR0103', part:'B', source:'Guideline note — VTE prophylaxis',
    text_en:'On admission, assess every patient for venous thromboembolism risk and for bleeding risk. '+
      'Where the risk of clot outweighs the risk of bleeding, offer pharmacological prophylaxis. '+
      'Mechanical prophylaxis alone is preferred when bleeding risk is high.',
    question_en:'When is mechanical prophylaxis alone preferred?',
    type:'mcq', options:['When clot risk is highest','When bleeding risk is high','For all patients','Only after surgery'],
    answer:1,
    pt:'Compare as duas condições e ligue à recomendação correta.' },
  { id:'oetR0104', part:'B', source:'Email — discharge summaries',
    text_en:'Please ensure discharge summaries are completed before the patient leaves the ward, not retrospectively. '+
      'The summary must reach the GP within 24 hours. Delays leave the GP unable to follow up results safely, '+
      'and are the most common source of complaints about our department.',
    question_en:'Why does the email stress timely discharge summaries?',
    type:'mcq', options:['To reduce paperwork','So the GP can follow up safely','To speed up admissions','To satisfy auditors only'],
    answer:1,
    pt:'A justificativa aparece após "Delays leave the GP unable to...".' },
  { id:'oetR0105', part:'B', source:'Notice — hand hygiene audit',
    text_en:'This month\'s audit showed compliance fell after gloves were introduced at the bedside: staff assumed gloves '+
      'replaced hand hygiene. They do not. Hands must be decontaminated before putting gloves on and again after removing them.',
    question_en:'What misunderstanding did the audit reveal?',
    type:'mcq', options:['Gloves were unavailable','Staff thought gloves replaced hand hygiene','Handwashing was too frequent','Alcohol gel was ineffective'],
    answer:1,
    pt:'"They do not" contradiz a suposição da equipe — chave da questão.' },
  { id:'oetR0106', part:'B', source:'Protocol — blood transfusion checks',
    text_en:'Immediately before transfusion, two staff must perform the final bedside check, confirming the patient\'s '+
      'identity against the wristband and the compatibility label. This check is the last barrier against a fatal '+
      'ABO-incompatible transfusion and must never be delegated to a single person.',
    question_en:'The final bedside check before transfusion must be:',
    type:'mcq', options:['done by one nurse','skipped in emergencies','performed by two staff','done after starting'],
    answer:2,
    pt:'"must never be delegated to a single person" = exige duas pessoas.' },
  { id:'oetR0107', part:'B', source:'Memo — insulin prescribing',
    text_en:'Insulin doses must be written in full: the word "units" must be spelled out, never abbreviated to "U" or "IU". '+
      'A trailing "U" has been misread as a zero, resulting in a tenfold overdose. Use of a specific insulin chart is mandatory.',
    question_en:'Why must the word "units" be spelled out in full?',
    type:'mcq', options:['To save time','"U" can be misread as a zero','It looks more professional','To match the chart colour'],
    answer:1,
    pt:'Segurança medicamentosa: a razão é o risco de leitura errada.' },
  { id:'oetR0108', part:'B', source:'Update — antibiotic allergy labels',
    text_en:'Review every "penicillin allergy" label. Many record only a childhood rash or a family report, not a true allergy. '+
      'An unverified label denies patients first-line antibiotics and drives use of broader, less effective agents. '+
      'Take an allergy history and delabel where the reaction was clearly not allergic.',
    question_en:'What problem does an unverified penicillin-allergy label cause?',
    type:'mcq', options:['Faster recovery','Use of broader, less effective antibiotics','Lower drug costs','Shorter admissions'],
    answer:1,
    pt:'Consequência descrita: encaminha a antibióticos "broader, less effective".' },

  /* ---------------- Part C: longer texts (MCQ, inference) ---------------- */
  { id:'oetR0201', part:'C', source:'Feature — the placebo response in practice',
    text_en:'The placebo response is often dismissed as trickery, yet it reflects something real: the therapeutic power of '+
      'context. A warm consultation, a confident explanation and a clear plan measurably reduce symptoms, even when the '+
      'pill itself is inert. This does not license deception. Rather, it reminds clinicians that how a treatment is given '+
      'is part of the treatment. The ritual of care — attention, reassurance, expectation — is not a substitute for effective '+
      'medicine, but neglecting it discards a genuine and ethical source of benefit.',
    question_en:'What is the writer\'s main point about the placebo response?',
    type:'mcq', options:[
      'Clinicians should prescribe inert pills',
      'The manner of care is itself therapeutic',
      'Placebos are pure trickery',
      'Reassurance can replace medicine'],
    answer:1,
    pt:'Distinga a tese ("how a treatment is given is part of the treatment") das armadilhas.' },
  { id:'oetR0202', part:'C', source:'Feature — the placebo response in practice',
    text_en:'This does not license deception. Rather, it reminds clinicians that how a treatment is given is part of the '+
      'treatment. The ritual of care is not a substitute for effective medicine, but neglecting it discards a genuine '+
      'and ethical source of benefit.',
    question_en:'The phrase "This does not license deception" implies that the writer:',
    type:'mcq', options:[
      'encourages lying to patients',
      'rejects using placebos deceptively',
      'thinks medicine is unnecessary',
      'opposes reassurance'],
    answer:1,
    pt:'Inferência a partir de linguagem cautelosa ("does not license").' },
  { id:'oetR0203', part:'C', source:'Essay — diagnostic uncertainty',
    text_en:'Medical training rewards the confident answer, and students quickly learn to present a single diagnosis. '+
      'Yet much of real practice is spent in a fog of probability. The skilled clinician is not the one who is never '+
      'uncertain, but the one who can act wisely despite uncertainty — ordering the test that will change management, '+
      'safety-netting against the dangerous miss, and revisiting the diagnosis as new information arrives. '+
      'Certainty, paradoxically, can be the more dangerous state of mind.',
    question_en:'According to the essay, the skilled clinician is characterised by:',
    type:'mcq', options:[
      'never feeling uncertain',
      'acting wisely despite uncertainty',
      'avoiding all tests',
      'committing early to one diagnosis'],
    answer:1,
    pt:'A tese contraria a intuição: certeza pode ser mais perigosa.' },
  { id:'oetR0204', part:'C', source:'Essay — diagnostic uncertainty',
    text_en:'Certainty, paradoxically, can be the more dangerous state of mind.',
    question_en:'Why might certainty be "the more dangerous state of mind"?',
    type:'mcq', options:[
      'It slows the clinician down',
      'It can close the mind to revising a wrong diagnosis',
      'It always leads to more tests',
      'It reassures the patient too much'],
    answer:1,
    pt:'Inferência: excesso de certeza impede revisar diagnósticos errados.' },
  { id:'oetR0205', part:'C', source:'Article — shared decision-making',
    text_en:'Shared decision-making is sometimes caricatured as handing patients a menu and asking them to choose. '+
      'Done well, it is the opposite of abdication. The clinician contributes expertise about options and outcomes; '+
      'the patient contributes expertise about their own values and life. Neither alone is sufficient. The doctor who '+
      'simply lists options without a recommendation has not empowered the patient but abandoned them.',
    question_en:'The writer suggests that offering options without a recommendation:',
    type:'mcq', options:[
      'fully empowers the patient',
      'amounts to abandoning the patient',
      'is the ideal approach',
      'saves consultation time'],
    answer:1,
    pt:'Nuance: "empowered" vs "abandoned" — leia a última frase com atenção.' },
  { id:'oetR0206', part:'C', source:'Article — shared decision-making',
    text_en:'The clinician contributes expertise about options and outcomes; the patient contributes expertise about '+
      'their own values and life. Neither alone is sufficient.',
    question_en:'What does the writer mean by "Neither alone is sufficient"?',
    type:'mcq', options:[
      'Only the doctor\'s view matters',
      'Both forms of expertise are needed together',
      'Patients should decide alone',
      'Expertise is unnecessary'],
    answer:1,
    pt:'"Neither alone" = os dois saberes precisam se combinar.' }
];
