/* oet_writing.js — OET Writing: case notes → carta profissional.
   Schema: { id, letter_type, recipient, setting, case_notes, key_points, omit,
             model_letter_en, checklist_pt, word_count }
   Corpo de 180–200 palavras, registro formal. Correção por IA opcional (AI.correctWriting). */
window.OET_WRITING = [
  { id:'oetW0001', letter_type:'referral', recipient:'Dr Helen Carter, Cardiologist, City Hospital',
    setting:'GP surgery',
    case_notes:'Mr John Peterson, 58. Presents with exertional chest tightness for 3 weeks, radiating to left arm, '+
      'relieved by rest. Risk factors: hypertension, ex-smoker (30 pack-years), father had MI at 60. '+
      'BP 154/92. ECG: minor T-wave changes. Started on aspirin and GTN spray. Requires cardiology assessment for suspected stable angina.',
    key_points:['reason for referral (suspected stable angina)','symptom pattern and relief by rest',
      'cardiac risk factors','current examination and ECG','treatment already started','clear request for assessment'],
    omit:['irrelevant social detail not affecting the referral'],
    model_letter_en:"Dear Dr Carter,\n\nRe: Mr John Peterson, DOB [ ]\n\n"+
      "I am writing to refer Mr Peterson, a 58-year-old man, for assessment of suspected stable angina.\n\n"+
      "Over the past three weeks, Mr Peterson has experienced tightness in the chest on exertion, radiating to the left arm and relieved by rest. His cardiac risk factors are significant: he has hypertension, a 30 pack-year smoking history, and a family history of myocardial infarction in his father at the age of 60.\n\n"+
      "On examination, his blood pressure was 154/92 mmHg. An ECG showed minor T-wave changes. In view of these findings, I have commenced aspirin and provided a GTN spray for symptomatic relief.\n\n"+
      "Given the typical exertional pattern and his risk profile, I would be grateful if you could assess Mr Peterson for coronary artery disease and advise on further investigation and management.\n\n"+
      "Thank you for your assistance. Please do not hesitate to contact me if you require further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Saudação e destinatário corretos (Dr Carter, Cardiologist)',
      'Motivo do encaminhamento no 1º parágrafo (suspected stable angina)',
      'História relevante selecionada (padrão da dor + fatores de risco)',
      'Achados de exame e ECG incluídos','Tratamento já iniciado mencionado',
      'Pedido claro ao final','180–200 palavras no corpo','Registro formal e gramática precisa'],
    word_count:'≈190' },

  { id:'oetW0002', letter_type:'discharge', recipient:'Dr Amina Farah, General Practitioner, Riverside Surgery',
    setting:'Medical ward',
    case_notes:'Mrs Grace Owens, 72. Admitted 5 days with community-acquired pneumonia (right lower lobe). '+
      'Treated with IV then oral amoxicillin, completing course at home (3 more days). '+
      'Now afebrile, sats 96% on air. PMH: COPD, osteoarthritis. New: needs GP review of inhaler technique. '+
      'Discharge meds: amoxicillin 500 mg tds x3 days, usual inhalers. Follow-up chest X-ray in 6 weeks.',
    key_points:['reason for admission and diagnosis','treatment given and current status',
      'discharge medication (course to complete)','required GP follow-up (inhaler review, CXR)'],
    omit:['detailed daily observations','unchanged long-term medications beyond a summary'],
    model_letter_en:"Dear Dr Farah,\n\nRe: Mrs Grace Owens, DOB [ ]\n\n"+
      "I am writing to update you following Mrs Owens' discharge today after a five-day admission with community-acquired pneumonia affecting the right lower lobe.\n\n"+
      "She was treated with intravenous and subsequently oral amoxicillin, to which she responded well. She is now afebrile, with oxygen saturations of 96% on air. Her background includes COPD and osteoarthritis.\n\n"+
      "On discharge, she will complete a further three days of amoxicillin 500 mg three times daily, alongside her usual inhalers. During this admission, her inhaler technique was noted to be suboptimal.\n\n"+
      "I would be grateful if you could review her inhaler technique at her next appointment and arrange a follow-up chest X-ray in six weeks to confirm resolution.\n\n"+
      "Thank you for your ongoing care. Please contact me should you require any further details.\n\nYours sincerely,\nDr [Name]\nMedical Registrar",
    checklist_pt:['Destinatário: GP (Dr Farah)','Motivo da internação e diagnóstico no início',
      'Tratamento e estado atual','Medicação de alta com curso a completar',
      'Pedidos de seguimento claros (inaladores + RX em 6 semanas)',
      'Omitir observações diárias irrelevantes','180–200 palavras','Registro formal'],
    word_count:'≈180' },

  { id:'oetW0003', letter_type:'transfer', recipient:'Charge Nurse, Meadow View Nursing Home',
    setting:'Geriatric ward',
    case_notes:'Mr Arthur Bell, 84. Transferring to nursing home after admission for a fall and dehydration. '+
      'Now medically stable, rehydrated. Reduced mobility, needs assistance of one to transfer. '+
      'History: mild dementia, type 2 diabetes (diet-controlled). Continence: occasional urinary incontinence, uses pads. '+
      'Pressure areas intact but at risk (Waterlow 16). Needs: falls precautions, 2-hourly repositioning, encourage fluids.',
    key_points:['reason for transfer and current status','mobility and transfer needs',
      'relevant history (dementia, diabetes, continence)','pressure-area / falls risk and care required'],
    omit:['acute admission investigations no longer relevant'],
    model_letter_en:"Dear Charge Nurse,\n\nRe: Mr Arthur Bell, DOB [ ]\n\n"+
      "I am writing to hand over the care of Mr Bell, an 84-year-old man being transferred to your facility following an admission for a fall and dehydration. He is now medically stable and fully rehydrated.\n\n"+
      "Mr Bell has mild dementia and diet-controlled type 2 diabetes. His mobility is reduced, and he requires the assistance of one person to transfer safely. He has occasional urinary incontinence, managed with pads.\n\n"+
      "Although his pressure areas are currently intact, his Waterlow score of 16 places him at high risk. He therefore requires two-hourly repositioning and ongoing falls precautions.\n\n"+
      "I would be grateful if your team could continue to encourage oral fluids and monitor his skin integrity closely.\n\n"+
      "Thank you for taking over his care. Please do not hesitate to contact the ward with any questions.\n\nYours faithfully,\nStaff Nurse [Name]",
    checklist_pt:['Destinatário genérico → "Dear Charge Nurse" + "Yours faithfully"',
      'Motivo da transferência e estado atual','Necessidades de mobilidade/transferência',
      'História relevante (demência, diabetes, continência)','Riscos e cuidados (Waterlow 16, reposicionamento, quedas)',
      'Pedidos de cuidado contínuo','180–200 palavras','Registro formal'],
    word_count:'≈185' },

  { id:'oetW0004', letter_type:'referral', recipient:'Dr Raj Mehta, Consultant Gastroenterologist, St Luke\'s Hospital',
    setting:'GP surgery',
    case_notes:'Ms Karen Ellis, 46. 6-week history of altered bowel habit (looser stools), intermittent lower abdominal pain, '+
      'and unintentional weight loss of 5 kg. Reports one episode of rectal bleeding. No fever. PMH: nil significant. '+
      'FHx: mother had colorectal cancer at 55. Examination: mild left iliac fossa tenderness, no mass. Bloods: mild anaemia (Hb 10.8). '+
      'Requires urgent colonoscopy to exclude malignancy.',
    key_points:['urgent nature and reason (exclude colorectal cancer)','red-flag symptoms',
      'relevant family history','examination and blood findings','clear request for colonoscopy'],
    omit:['minor unrelated complaints'],
    model_letter_en:"Dear Dr Mehta,\n\nRe: Ms Karen Ellis, DOB [ ]\n\n"+
      "I am writing to refer Ms Ellis, a 46-year-old woman, urgently for colonoscopy to exclude colorectal malignancy.\n\n"+
      "Over the past six weeks, she has reported a change in bowel habit towards looser stools, intermittent lower abdominal pain, and unintentional weight loss of five kilograms. She has also had a single episode of rectal bleeding. These red-flag symptoms are of particular concern given her family history: her mother was diagnosed with colorectal cancer at the age of 55.\n\n"+
      "On examination, she has mild tenderness in the left iliac fossa, with no palpable mass. Blood tests reveal a mild anaemia, with a haemoglobin of 10.8 g/dL.\n\n"+
      "In view of these findings, I would be grateful if you could arrange an urgent colonoscopy and further investigation as appropriate.\n\n"+
      "Thank you for your prompt attention to this referral.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência sinalizada logo no início','Sinais de alarme reunidos (sangramento, perda de peso, anemia)',
      'História familiar relevante','Achados de exame/laboratório','Pedido claro (colonoscopia urgente)',
      '180–200 palavras','Tom formal e objetivo'],
    word_count:'≈190' },

  { id:'oetW0005', letter_type:'referral', recipient:'Community Mental Health Team, Northgate Centre',
    setting:'GP surgery',
    case_notes:'Mr David Cole, 34. 2-month history of low mood, anhedonia, early-morning waking, poor appetite (weight loss 4 kg). '+
      'Passive thoughts that others would be better off without him, but denies plan or intent. PHQ-9 score 19 (moderately severe). '+
      'Function: signed off work. No prior psychiatric history. Started on sertraline 50 mg. Requests CMHT assessment and psychological therapy.',
    key_points:['reason for referral (moderately severe depression)','symptom cluster and duration',
      'risk assessment (passive thoughts, no plan)','treatment started','request for assessment and therapy'],
    omit:['unnecessary personal detail unrelated to risk or diagnosis'],
    model_letter_en:"Dear Colleague,\n\nRe: Mr David Cole, DOB [ ]\n\n"+
      "I am writing to refer Mr Cole, a 34-year-old man, for assessment and psychological therapy in the context of moderately severe depression.\n\n"+
      "Over the past two months, he has described persistent low mood, loss of interest, early-morning waking, and a poor appetite with a four-kilogram weight loss. His PHQ-9 score is 19. He reports passive thoughts that others would be better off without him but denies any plan or intent to act, and has no access to means of concern.\n\n"+
      "He has no previous psychiatric history and has been signed off work. I have commenced sertraline 50 mg daily.\n\n"+
      "I would be grateful if your team could assess him and consider psychological therapy alongside his medication. I would welcome a review of his risk in the interim.\n\n"+
      "Thank you for your support.\n\nYours faithfully,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Diagnóstico e motivo no 1º parágrafo','Avaliação de risco explícita e cuidadosa',
      'Tratamento iniciado (sertralina)','Pedido de avaliação + terapia','Registro sensível e formal',
      'Destinatário genérico → "Dear Colleague" / "Yours faithfully"','180–200 palavras'],
    word_count:'≈180' },

  { id:'oetW0006', letter_type:'discharge', recipient:'Dr Simon Beckett, General Practitioner, Elm Park Practice',
    setting:'Surgical ward',
    case_notes:'Mr Tomasz Nowak, 41. Admitted with acute appendicitis; underwent laparoscopic appendicectomy (uncomplicated). '+
      'Recovered well, tolerating diet, wounds clean. Discharge day 2 post-op. Analgesia: paracetamol and ibuprofen PRN. '+
      'Advice given: keep wounds dry 48h, remove dressings day 5, no heavy lifting 2 weeks. Sutures dissolvable. '+
      'GP to review only if signs of wound infection. Sick note for 2 weeks provided.',
    key_points:['diagnosis and procedure','post-op recovery and current status',
      'discharge advice and analgesia','when GP review is needed'],
    omit:['intraoperative technical detail','routine unchanged medications'],
    model_letter_en:"Dear Dr Beckett,\n\nRe: Mr Tomasz Nowak, DOB [ ]\n\n"+
      "I am writing to inform you that Mr Nowak was discharged today, two days after an uncomplicated laparoscopic appendicectomy for acute appendicitis.\n\n"+
      "His post-operative recovery has been straightforward. He is tolerating a normal diet, and his wounds are clean and dry. He has been discharged on simple analgesia, taking paracetamol and ibuprofen as required.\n\n"+
      "He has been advised to keep the wounds dry for 48 hours and to remove the dressings on day five. The sutures are dissolvable and do not require removal. He should avoid heavy lifting for two weeks, and I have provided a two-week medical certificate.\n\n"+
      "No routine follow-up is required. However, I would be grateful if you could review him should he develop any signs of wound infection, such as increasing redness, discharge, or fever.\n\n"+
      "Thank you for your continued care.\n\nYours sincerely,\nDr [Name]\nSurgical Registrar",
    checklist_pt:['Procedimento e diagnóstico claros','Estado pós-operatório','Orientações de alta e analgesia',
      'Critérios para revisão pelo GP (sinais de infecção)','Omitir detalhes cirúrgicos técnicos','180–200 palavras'],
    word_count:'≈185' },

  { id:'oetW0007', letter_type:'referral', recipient:'Dr Priya Nair, Consultant Endocrinologist, County Hospital',
    setting:'GP surgery',
    case_notes:'Mrs Linda Frost, 52. Poorly controlled type 2 diabetes despite metformin and gliclazide (HbA1c 84 mmol/mol). '+
      'BMI 34. Increasing peripheral neuropathy symptoms. BP 148/88 on ramipril. Reluctant to start insulin. '+
      'Requires specialist review of glycaemic control and consideration of newer agents / insulin.',
    key_points:['reason (poor glycaemic control despite two agents)','current medications and HbA1c',
      'complications emerging (neuropathy)','patient concern (insulin reluctance)','request for specialist optimisation'],
    omit:['unrelated minor symptoms'],
    model_letter_en:"Dear Dr Nair,\n\nRe: Mrs Linda Frost, DOB [ ]\n\n"+
      "I am writing to refer Mrs Frost, a 52-year-old woman with type 2 diabetes that remains poorly controlled despite maximal oral therapy.\n\n"+
      "She currently takes metformin and gliclazide, yet her most recent HbA1c is 84 mmol/mol. Her body mass index is 34. She has recently developed symptoms suggestive of peripheral neuropathy, and I am concerned that ongoing hyperglycaemia is contributing to early complications. Her blood pressure is 148/88 mmHg on ramipril.\n\n"+
      "Mrs Frost is understandably anxious about starting insulin and would value a specialist discussion of her options, including newer agents.\n\n"+
      "I would be grateful if you could review her glycaemic control and advise on optimisation of her treatment, taking into account her preferences.\n\n"+
      "Thank you for your assistance.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: mau controle apesar de terapia dupla','HbA1c e medicações atuais',
      'Complicação emergente (neuropatia)','Preferência do paciente registrada','Pedido de otimização especializada','180–200 palavras'],
    word_count:'≈180' },

  { id:'oetW0008', letter_type:'referral', recipient:'Dr Olivia Grant, Consultant Respiratory Physician, City Hospital',
    setting:'GP surgery',
    case_notes:'Mr Peter Small, 67. Persistent cough >6 weeks, now with haemoptysis. 40 pack-year smoker. '+
      'Weight loss 6 kg over 2 months. Chest exam: reduced air entry right base. CXR: right hilar shadowing. '+
      'Two-week-wait suspected lung cancer referral. Needs urgent CT and respiratory review.',
    key_points:['urgent 2-week-wait suspected malignancy','red flags (haemoptysis, weight loss, smoking)',
      'examination and CXR findings','request for urgent CT / review'],
    omit:['non-urgent chronic issues'],
    model_letter_en:"Dear Dr Grant,\n\nRe: Mr Peter Small, DOB [ ]\n\n"+
      "I am writing to make an urgent two-week-wait referral for Mr Small, a 67-year-old man, with symptoms and findings suspicious of lung cancer.\n\n"+
      "He has had a persistent cough for more than six weeks, which has now progressed to haemoptysis. He is a 40 pack-year smoker and has lost six kilograms unintentionally over the past two months. On examination, air entry is reduced at the right base.\n\n"+
      "A chest X-ray has demonstrated right hilar shadowing, which is of considerable concern in this clinical context.\n\n"+
      "I would be grateful if you could arrange an urgent CT scan of the chest and review Mr Small at the earliest opportunity. He is aware of the seriousness of these symptoms and the need for prompt investigation.\n\n"+
      "Thank you for your urgent attention.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência (two-week-wait) no início','Sinais de alarme reunidos','Achados do RX de tórax',
      'Pedido de TC urgente','Nota de que o paciente foi informado','180–200 palavras'],
    word_count:'≈180' },

  { id:'oetW0009', letter_type:'discharge', recipient:'Dr Marta Sousa, General Practitioner, Bridge Street Surgery',
    setting:'Cardiology ward',
    case_notes:'Mr Ian Webb, 63. Admitted with NSTEMI. Underwent coronary angiography + PCI to LAD (one stent). '+
      'Started on dual antiplatelet therapy (aspirin + ticagrelor), atorvastatin, bisoprolol, ramipril. '+
      'Advised cardiac rehab, smoking cessation. Stable at discharge. GP to monitor BP and repeat lipids in 3 months. '+
      'Continue dual antiplatelets 12 months.',
    key_points:['diagnosis (NSTEMI) and procedure (PCI/stent)','new medications and their duration',
      'lifestyle advice (rehab, smoking)','GP monitoring role (BP, lipids, antiplatelet duration)'],
    omit:['detailed angiographic anatomy'],
    model_letter_en:"Dear Dr Sousa,\n\nRe: Mr Ian Webb, DOB [ ]\n\n"+
      "I am writing to inform you of Mr Webb's discharge following an admission with a non-ST-elevation myocardial infarction.\n\n"+
      "He underwent coronary angiography, which revealed disease in the left anterior descending artery, treated successfully with a single stent. He has remained stable since the procedure.\n\n"+
      "He has been commenced on dual antiplatelet therapy with aspirin and ticagrelor, which should continue for twelve months, together with atorvastatin, bisoprolol, and ramipril. He has been referred to cardiac rehabilitation and given firm advice regarding smoking cessation.\n\n"+
      "I would be grateful if you could monitor his blood pressure, repeat his lipid profile in three months, and ensure the antiplatelet therapy is not stopped prematurely.\n\n"+
      "Thank you for your continuing care of Mr Webb.\n\nYours sincerely,\nDr [Name]\nCardiology Registrar",
    checklist_pt:['Diagnóstico e procedimento claros','Nova medicação com duração (DAPT 12 meses)',
      'Orientações de estilo de vida','Papel do GP no seguimento','Omitir anatomia angiográfica detalhada','180–200 palavras'],
    word_count:'≈185' },

  { id:'oetW0010', letter_type:'referral', recipient:'Dr Fiona Reid, Consultant Dermatologist, City Hospital',
    setting:'GP surgery',
    case_notes:'Mrs Sofia Marino, 59. Pigmented lesion on the back, changing over 3 months: increased in size, irregular border, '+
      'variable colour, occasional itch. No bleeding. No lymphadenopathy. Fair skin, history of sunburn. '+
      'Two-week-wait suspected melanoma referral. Needs urgent dermatological assessment.',
    key_points:['urgent (suspected melanoma, 2-week-wait)','ABCDE features of the lesion','risk factors',
      'request for urgent assessment'],
    omit:['unrelated benign skin complaints'],
    model_letter_en:"Dear Dr Reid,\n\nRe: Mrs Sofia Marino, DOB [ ]\n\n"+
      "I am writing to refer Mrs Marino, a 59-year-old woman, urgently under the two-week-wait pathway for a pigmented lesion suspicious of melanoma.\n\n"+
      "Over the past three months, she has noticed a lesion on her back that has increased in size and developed an irregular border and variable colour. She reports occasional itching but no bleeding. There is no palpable lymphadenopathy.\n\n"+
      "Relevant risk factors include fair skin and a history of significant sun exposure with episodes of sunburn.\n\n"+
      "Given the evolving nature and concerning features of this lesion, I would be grateful if you could assess Mrs Marino urgently and arrange excision biopsy if indicated.\n\n"+
      "Thank you for your prompt attention to this referral.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência sinalizada (melanoma, 2-week-wait)','Características ABCDE descritas',
      'Fatores de risco','Pedido de avaliação urgente + biópsia','180–200 palavras','Registro formal'],
    word_count:'≈175' },

  { id:'oetW0011', letter_type:'transfer', recipient:'Dr Hassan Ali, Rehabilitation Consultant, Oakwood Rehabilitation Unit',
    setting:'Stroke ward',
    case_notes:'Mrs Beatrice Lund, 70. 10 days post ischaemic stroke (left MCA). Right-sided weakness improving, '+
      'expressive dysphasia present. Swallow assessed safe for soft diet. Mobilising with frame + one assistant. '+
      'On aspirin, atorvastatin, ramipril. Requires intensive physiotherapy, speech and language therapy. '+
      'Medically stable for transfer to rehab.',
    key_points:['reason for transfer (stroke rehab)','current deficits and progress','swallow/mobility status',
      'therapy needs','medically stable'],
    omit:['acute imaging detail no longer needed'],
    model_letter_en:"Dear Dr Ali,\n\nRe: Mrs Beatrice Lund, DOB [ ]\n\n"+
      "I am writing to transfer the care of Mrs Lund, a 70-year-old woman, for intensive rehabilitation ten days after a left middle cerebral artery ischaemic stroke.\n\n"+
      "She has residual right-sided weakness, which is gradually improving, and expressive dysphasia. Her swallow has been assessed by our speech and language team as safe for a soft diet. She is currently mobilising with a frame and the assistance of one person.\n\n"+
      "She is medically stable and takes aspirin, atorvastatin, and ramipril for secondary prevention.\n\n"+
      "Mrs Lund would benefit greatly from intensive physiotherapy and continued speech and language therapy. I would be grateful if your team could continue her rehabilitation with a view to maximising her independence.\n\n"+
      "Thank you for accepting her care. Please contact the ward with any queries.\n\nYours sincerely,\nDr [Name]\nStroke Registrar",
    checklist_pt:['Motivo da transferência (reabilitação)','Déficits atuais e progresso','Deglutição/mobilidade',
      'Necessidades terapêuticas','Estabilidade clínica','180–200 palavras'],
    word_count:'≈185' },

  { id:'oetW0012', letter_type:'referral', recipient:'Dr George Hunt, Consultant Rheumatologist, St Luke\'s Hospital',
    setting:'GP surgery',
    case_notes:'Ms Rachel Dean, 38. 3-month history of symmetrical joint pain and swelling (hands, wrists), '+
      'early-morning stiffness lasting >1 hour. Fatigue. No psoriasis. Rheumatoid factor positive; ESR raised. '+
      'Started on naproxen for symptom relief. Suspected rheumatoid arthritis. Requires early rheumatology review.',
    key_points:['reason (suspected RA, early referral)','pattern of joint involvement and stiffness',
      'investigation results (RF, ESR)','symptomatic treatment started','request for early review'],
    omit:['unrelated minor complaints'],
    model_letter_en:"Dear Dr Hunt,\n\nRe: Ms Rachel Dean, DOB [ ]\n\n"+
      "I am writing to refer Ms Dean, a 38-year-old woman, for early assessment of suspected rheumatoid arthritis.\n\n"+
      "Over the past three months, she has developed symmetrical pain and swelling affecting the small joints of both hands and her wrists. She describes early-morning stiffness lasting more than an hour, accompanied by significant fatigue. There is no history of psoriasis.\n\n"+
      "Investigations reveal a positive rheumatoid factor and a raised ESR, supporting an inflammatory arthritis. I have started naproxen for symptomatic relief.\n\n"+
      "Given the importance of early treatment in preserving joint function, I would be grateful if you could review Ms Dean as soon as possible and consider disease-modifying therapy.\n\n"+
      "Thank you for your assistance.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: suspeita de AR e importância do encaminhamento precoce','Padrão articular e rigidez matinal',
      'Resultados (FR, VHS)','Tratamento sintomático','Pedido de revisão precoce (janela terapêutica)','180–200 palavras'],
    word_count:'≈175' },

  { id:'oetW0013', letter_type:'discharge', recipient:'Dr Nadia Ahmed, General Practitioner, Green Lane Medical Centre',
    setting:'Obstetric ward',
    case_notes:'Mrs Chloe Barnes, 29. Normal vaginal delivery of healthy baby boy 2 days ago. '+
      'Mild postpartum anaemia (Hb 9.5) — started oral iron. Perineal tear (2nd degree) repaired, healing well. '+
      'Breastfeeding established. Mood good, no red flags. GP: routine postnatal check at 6 weeks; recheck Hb.',
    key_points:['delivery outcome and baby status','postnatal issues (anaemia, tear) and treatment',
      'feeding and mood status','GP follow-up (6-week check, recheck Hb)'],
    omit:['detailed labour progress notes'],
    model_letter_en:"Dear Dr Ahmed,\n\nRe: Mrs Chloe Barnes, DOB [ ]\n\n"+
      "I am writing to inform you of the discharge of Mrs Barnes, two days after a normal vaginal delivery of a healthy baby boy.\n\n"+
      "Her recovery has been uncomplicated. She sustained a second-degree perineal tear, which was repaired and is healing well. She has a mild postpartum anaemia, with a haemoglobin of 9.5 g/dL, for which oral iron has been commenced.\n\n"+
      "Breastfeeding is well established, and her mood is good, with no features of concern. Both mother and baby are well.\n\n"+
      "I would be grateful if you could carry out the routine postnatal check at six weeks and recheck her haemoglobin to confirm resolution of her anaemia.\n\n"+
      "Thank you for your continued care of Mrs Barnes and her baby.\n\nYours sincerely,\nDr [Name]\nObstetric Registrar",
    checklist_pt:['Desfecho do parto e estado do bebê','Questões pós-parto e tratamento (anemia, laceração)',
      'Amamentação e humor','Seguimento pelo GP (6 semanas, repetir Hb)','Omitir notas detalhadas do trabalho de parto','180–200 palavras'],
    word_count:'≈175' },

  { id:'oetW0014', letter_type:'referral', recipient:'Dr Marcus Webb, Consultant Urologist, County Hospital',
    setting:'GP surgery',
    case_notes:'Mr Robert Shaw, 66. Painless visible haematuria on two occasions over 2 weeks. '+
      'No infection on urinalysis/culture. Smoker (25 pack-years). No pain, normal renal function. '+
      'Two-week-wait suspected urological cancer referral. Needs urgent cystoscopy and imaging.',
    key_points:['urgent (painless visible haematuria, 2-week-wait)','absence of infection','risk factor (smoking)',
      'request for urgent cystoscopy/imaging'],
    omit:['unrelated stable comorbidities beyond a brief note'],
    model_letter_en:"Dear Dr Webb,\n\nRe: Mr Robert Shaw, DOB [ ]\n\n"+
      "I am writing to refer Mr Shaw, a 66-year-old man, urgently under the two-week-wait pathway for painless visible haematuria.\n\n"+
      "He has passed visibly blood-stained urine on two separate occasions over the past fortnight. Importantly, this has been painless. Urinalysis and culture have excluded a urinary tract infection, and his renal function is normal. He is a smoker with a 25 pack-year history, which is a recognised risk factor for urothelial malignancy.\n\n"+
      "Given that painless visible haematuria warrants urgent investigation to exclude bladder or renal cancer, I would be grateful if you could arrange cystoscopy and appropriate imaging at the earliest opportunity.\n\n"+
      "Thank you for your prompt attention to this referral.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência (hematúria indolor, 2-week-wait)','Infecção excluída','Fator de risco (tabagismo)',
      'Pedido de cistoscopia/imagem urgentes','180–200 palavras','Registro formal'],
    word_count:'≈175' },

  { id:'oetW0015', letter_type:'referral', recipient:'Health Visitor, Sunnyside Children\'s Centre',
    setting:'GP surgery',
    case_notes:'Baby Ella Watson, 9 months. Parents concerned about feeding difficulties and slow weight gain '+
      '(crossing centiles downward). Otherwise developmentally appropriate, no vomiting/diarrhoea. '+
      'Mother finding weaning stressful; would benefit from feeding support and monitoring. '+
      'No acute illness. Requests health visitor input for feeding advice and growth monitoring.',
    key_points:['reason (faltering growth, feeding support)','growth pattern','no red flags / developmentally normal',
      'parental support needs','request for HV input'],
    omit:['unrelated maternal history'],
    model_letter_en:"Dear Health Visitor,\n\nRe: Baby Ella Watson, DOB [ ]\n\n"+
      "I am writing to request your input for Ella, a nine-month-old infant, in relation to feeding difficulties and faltering weight gain.\n\n"+
      "Over recent months, Ella's weight has crossed downward through the centiles, and her parents report ongoing difficulties with feeding, particularly during weaning. Reassuringly, she is otherwise developing appropriately, and there is no history of vomiting, diarrhoea, or acute illness.\n\n"+
      "Her mother is finding the weaning process stressful and would greatly benefit from practical feeding support and regular growth monitoring.\n\n"+
      "I would be grateful if you could visit the family to offer feeding advice and monitor Ella's growth, referring back to me should any concerning features develop.\n\n"+
      "Thank you for your support of this family.\n\nYours faithfully,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: crescimento insatisfatório + apoio à alimentação','Padrão de crescimento (cruzando percentis)',
      'Ausência de sinais de alarme','Necessidade de apoio aos pais','Destinatário genérico → "Yours faithfully"','180–200 palavras'],
    word_count:'≈175' }
];
