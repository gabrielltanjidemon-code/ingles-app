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
      "I am writing to refer Mr Peterson, a 58-year-old man, for cardiology assessment of a three-week history of exertional chest tightness, which I suspect represents stable angina.\n\n"+
      "The tightness comes on with exertion, radiates to the left arm, and is reliably relieved by rest. His cardiac risk profile is significant: he has known hypertension, is an ex-smoker with a 30 pack-year history, and has a family history of ischaemic heart disease, his father having suffered a myocardial infarction at the age of 60.\n\n"+
      "On examination, his blood pressure was 154/92 mmHg, and an electrocardiogram performed at the surgery showed minor T-wave changes. In view of the typical exertional pattern, I have commenced aspirin and provided a glyceryl trinitrate spray for symptomatic relief, and I have advised him to seek urgent assessment should the pain begin to occur at rest.\n\n"+
      "I would be grateful if you could assess Mr Peterson for coronary artery disease, arrange such further investigation as you consider appropriate, and advise on his ongoing management, including optimisation of his blood-pressure control.\n\n"+
      "Thank you for your assistance. Please do not hesitate to contact me if you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
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
      "I am writing to update you following Mrs Owens' discharge home today after a five-day admission to the medical ward with community-acquired pneumonia affecting the right lower lobe.\n\n"+
      "She was treated initially with intravenous amoxicillin and was subsequently stepped down to the oral route, to which she responded well clinically. She is now afebrile, with oxygen saturations of 96% on room air. Her background history includes chronic obstructive pulmonary disease, which is relevant to her recovery, and osteoarthritis.\n\n"+
      "On discharge, she will complete a further three days of oral amoxicillin 500 mg three times daily to finish the treatment course, alongside her usual inhalers, which remain unchanged.\n\n"+
      "During this admission, her inhaler technique was noted to be suboptimal. I would therefore be grateful if you could review her technique at her next routine appointment, and also arrange a follow-up chest X-ray in approximately six weeks to confirm radiological resolution of the pneumonia.\n\n"+
      "Thank you for your ongoing care of Mrs Owens. Please do not hesitate to contact the ward should you require any further details of her admission or treatment.\n\nYours sincerely,\nDr [Name]\nMedical Registrar",
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
      "I am writing to hand over the care of Mr Bell, an 84-year-old man, who is being transferred to your facility today following a hospital admission with a fall and dehydration. He is now medically stable and has been fully rehydrated.\n\n"+
      "His past medical history includes mild dementia and type 2 diabetes, which is controlled with diet alone and does not currently require medication.\n\n"+
      "In terms of his current needs, his mobility remains reduced, and he requires the assistance of one person to transfer safely. He has occasional urinary incontinence, which is managed with pads.\n\n"+
      "Although his pressure areas are currently intact, his Waterlow score of 16 places him at high risk of skin breakdown. He therefore requires two-hourly repositioning, and falls precautions should remain in place at all times.\n\n"+
      "I would be grateful if your team could continue to encourage oral fluids, given his recent episode of dehydration, and to monitor his skin integrity closely.\n\n"+
      "Thank you for taking over his care. Please do not hesitate to contact the ward should you have any questions about his admission or his ongoing needs.\n\nYours faithfully,\nStaff Nurse [Name]",
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
      "I am writing to refer Ms Ellis, a 46-year-old woman, urgently for colonoscopy to exclude a colorectal malignancy.\n\n"+
      "Over the past six weeks, she has noticed a change in bowel habit towards looser stools, together with intermittent lower abdominal pain and an unintentional weight loss of five kilograms. She has also had a single episode of rectal bleeding. She has had no fever, and her past medical history is unremarkable.\n\n"+
      "These red-flag symptoms are of particular concern in the context of her family history: her mother was diagnosed with colorectal cancer at the age of 55.\n\n"+
      "On examination, there is mild tenderness in the left iliac fossa, with no palpable mass. Blood tests reveal a mild anaemia, with a haemoglobin of 10.8 g/dL, which raises the possibility of chronic gastrointestinal blood loss.\n\n"+
      "In view of these findings, I would be grateful if you could arrange an urgent colonoscopy and any further investigation you consider appropriate. She has been informed of the reason for the urgency of this referral.\n\n"+
      "Thank you for your prompt attention. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência sinalizada logo no início','Sinais de alarme reunidos (sangramento, perda de peso, anemia)',
      'História familiar relevante','Achados de exame/laboratório','Pedido claro (colonoscopia urgente)',
      '180–200 palavras','Tom formal e objetivo'],
    word_count:'≈185' },

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
      "Over the past two months, he has described persistently low mood, loss of interest in activities he previously enjoyed, early-morning waking, and a poor appetite with an associated four-kilogram weight loss. His PHQ-9 score is 19, consistent with moderately severe depression, and he has been signed off work because of his symptoms.\n\n"+
      "With regard to risk, he reports passive thoughts that others would be better off without him, but he denies any plan or intent to act on these thoughts. He has no previous psychiatric history, and there are no immediate concerns for his safety, although ongoing monitoring is clearly required.\n\n"+
      "I have commenced sertraline 50 mg daily and will review him regularly in the surgery while he awaits your assessment.\n\n"+
      "I would be grateful if your team could assess him and consider psychological therapy alongside his medication. I would also welcome your review of his risk in the interim.\n\n"+
      "Thank you for your support. Please do not hesitate to contact me should you require any further information.\n\nYours faithfully,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Diagnóstico e motivo no 1º parágrafo','Avaliação de risco explícita e cuidadosa',
      'Tratamento iniciado (sertralina)','Pedido de avaliação + terapia','Registro sensível e formal',
      'Destinatário genérico → "Dear Colleague" / "Yours faithfully"','180–200 palavras'],
    word_count:'≈190' },

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
      "I am writing to inform you that Mr Nowak was discharged home today in good condition, two days after an uncomplicated laparoscopic appendicectomy for acute appendicitis.\n\n"+
      "His post-operative recovery has been straightforward. He is tolerating a normal diet, his wounds are clean and dry, and his pain is controlled on simple analgesia, with paracetamol and ibuprofen to be taken as required for pain relief.\n\n"+
      "He has been given the following advice: to keep the wounds dry for the first 48 hours, to remove the dressings on day five, and to avoid heavy lifting for the next two weeks. The sutures are dissolvable and will not require removal. A two-week medical certificate has been provided.\n\n"+
      "No routine surgical follow-up has been arranged, and none is required. However, I would be grateful if you could review him should he develop any signs of wound infection, such as increasing redness, discharge from the wound sites, or fever.\n\n"+
      "Thank you for your continued care of Mr Nowak. Please do not hesitate to contact the ward should you require any further information about his operation or his recovery.\n\nYours sincerely,\nDr [Name]\nSurgical Registrar",
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
      "I am writing to refer Mrs Frost, a 52-year-old woman with type 2 diabetes that remains poorly controlled despite maximal oral therapy, for specialist review of her glycaemic control.\n\n"+
      "She currently takes metformin and gliclazide at full doses, yet her most recent HbA1c is 84 mmol/mol, and her body mass index is 34. Of particular concern, she reports increasing symptoms suggestive of peripheral neuropathy, and I am concerned that ongoing hyperglycaemia is contributing to the development of early complications. In addition, her blood pressure remains slightly elevated at 148/88 mmHg despite treatment with ramipril.\n\n"+
      "From her perspective, Mrs Frost is understandably anxious about the prospect of starting insulin and has so far been reluctant to consider it. She would, however, value a specialist discussion of the full range of options available to her, including the newer glucose-lowering agents.\n\n"+
      "I would therefore be grateful if you could review her glycaemic control, discuss the available treatment options with her, and advise on optimisation of her management, taking her preferences into account.\n\n"+
      "Thank you for your assistance. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: mau controle apesar de terapia dupla','HbA1c e medicações atuais',
      'Complicação emergente (neuropatia)','Preferência do paciente registrada','Pedido de otimização especializada','180–200 palavras'],
    word_count:'≈185' },

  { id:'oetW0008', letter_type:'referral', recipient:'Dr Olivia Grant, Consultant Respiratory Physician, City Hospital',
    setting:'GP surgery',
    case_notes:'Mr Peter Small, 67. Persistent cough >6 weeks, now with haemoptysis. 40 pack-year smoker. '+
      'Weight loss 6 kg over 2 months. Chest exam: reduced air entry right base. CXR: right hilar shadowing. '+
      'Two-week-wait suspected lung cancer referral. Needs urgent CT and respiratory review.',
    key_points:['urgent 2-week-wait suspected malignancy','red flags (haemoptysis, weight loss, smoking)',
      'examination and CXR findings','request for urgent CT / review'],
    omit:['non-urgent chronic issues'],
    model_letter_en:"Dear Dr Grant,\n\nRe: Mr Peter Small, DOB [ ]\n\n"+
      "I am writing to make an urgent two-week-wait referral for Mr Small, a 67-year-old man, whose symptoms and chest X-ray findings are suspicious of lung cancer.\n\n"+
      "Mr Small has had a persistent cough for more than six weeks, which has failed to settle and has now progressed to haemoptysis. He has also lost six kilograms in weight unintentionally over the past two months, and he is a smoker with a 40 pack-year history.\n\n"+
      "On examination, air entry is reduced at the right base. A chest X-ray arranged from the surgery has demonstrated right hilar shadowing, which, taken together with his symptoms and his smoking history, is of considerable concern for malignancy.\n\n"+
      "I would be grateful if you could arrange an urgent CT scan of the chest and review Mr Small in your chest clinic at the earliest opportunity, with any further investigation you consider appropriate. He is aware of the seriousness of these symptoms and of the need for prompt investigation.\n\n"+
      "Thank you for your urgent attention to this referral. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência (two-week-wait) no início','Sinais de alarme reunidos','Achados do RX de tórax',
      'Pedido de TC urgente','Nota de que o paciente foi informado','180–200 palavras'],
    word_count:'≈185' },

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
      "I am writing to inform you of Mr Webb's discharge today following an admission to the cardiology ward with a non-ST-elevation myocardial infarction.\n\n"+
      "During his stay, he underwent coronary angiography, which revealed disease in the left anterior descending artery. This was treated successfully with a single stent, and he has remained stable since the procedure.\n\n"+
      "His discharge medications comprise dual antiplatelet therapy with aspirin and ticagrelor, together with atorvastatin, bisoprolol, and ramipril for secondary prevention. It is essential that the dual antiplatelet therapy continues for a full twelve months and is not stopped prematurely.\n\n"+
      "He has been strongly advised to stop smoking and has been referred to the cardiac rehabilitation programme; I would be grateful if you could reinforce both of these messages when you next see him. May I also ask you to monitor his blood pressure at his routine reviews and repeat his lipid profile in three months to assess the response to treatment.\n\n"+
      "Thank you for your continuing care of Mr Webb. Please do not hesitate to contact the ward should you require any further information.\n\nYours sincerely,\nDr [Name]\nCardiology Registrar",
    checklist_pt:['Diagnóstico e procedimento claros','Nova medicação com duração (DAPT 12 meses)',
      'Orientações de estilo de vida','Papel do GP no seguimento','Omitir anatomia angiográfica detalhada','180–200 palavras'],
    word_count:'≈180' },

  { id:'oetW0010', letter_type:'referral', recipient:'Dr Fiona Reid, Consultant Dermatologist, City Hospital',
    setting:'GP surgery',
    case_notes:'Mrs Sofia Marino, 59. Pigmented lesion on the back, changing over 3 months: increased in size, irregular border, '+
      'variable colour, occasional itch. No bleeding. No lymphadenopathy. Fair skin, history of sunburn. '+
      'Two-week-wait suspected melanoma referral. Needs urgent dermatological assessment.',
    key_points:['urgent (suspected melanoma, 2-week-wait)','ABCDE features of the lesion','risk factors',
      'request for urgent assessment'],
    omit:['unrelated benign skin complaints'],
    model_letter_en:"Dear Dr Reid,\n\nRe: Mrs Sofia Marino, DOB [ ]\n\n"+
      "I am writing to refer Mrs Marino, a 59-year-old woman, urgently under the two-week-wait suspected-cancer pathway for assessment of a pigmented lesion that is suspicious of melanoma.\n\n"+
      "Mrs Marino first noticed a change in a pigmented lesion on her back approximately three months ago. Since then, it has steadily increased in size and has developed an irregular border and variable colour. She reports occasional itching, although there has been no bleeding from the lesion. On examination, there is no palpable regional lymphadenopathy.\n\n"+
      "With regard to risk factors, she has fair skin and a history of significant sun exposure, including several episodes of sunburn in the past.\n\n"+
      "The combination of increasing size, irregular border, and colour variation meets the criteria for urgent referral. I would therefore be grateful if you could assess Mrs Marino urgently and arrange an excision biopsy if indicated, together with any further management you consider appropriate. She has been informed of the reason for this urgent referral.\n\n"+
      "Thank you for your prompt attention to this referral. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência sinalizada (melanoma, 2-week-wait)','Características ABCDE descritas',
      'Fatores de risco','Pedido de avaliação urgente + biópsia','180–200 palavras','Registro formal'],
    word_count:'≈180' },

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
      "I am writing to transfer the care of Mrs Lund, a 70-year-old woman, for intensive inpatient rehabilitation ten days after an ischaemic stroke in the territory of the left middle cerebral artery.\n\n"+
      "Her main residual deficits are right-sided weakness, which is gradually improving, and an expressive dysphasia. Her swallow has been formally assessed by our speech and language therapy team and is safe for a soft diet. She is currently mobilising with a frame and the assistance of one person.\n\n"+
      "She is medically stable and ready for transfer, and takes aspirin, atorvastatin, and ramipril for secondary prevention of further stroke.\n\n"+
      "In terms of her rehabilitation needs, Mrs Lund would benefit from intensive physiotherapy to build on the improvement in her right side, and from continued speech and language therapy for her dysphasia. Her progress to date suggests good rehabilitation potential. I would be grateful if your team could continue her rehabilitation with a view to maximising her functional independence.\n\n"+
      "Thank you for accepting her care. Please do not hesitate to contact the ward should you require any further information about her admission.\n\nYours sincerely,\nDr [Name]\nStroke Registrar",
    checklist_pt:['Motivo da transferência (reabilitação)','Déficits atuais e progresso','Deglutição/mobilidade',
      'Necessidades terapêuticas','Estabilidade clínica','180–200 palavras'],
    word_count:'≈180' },

  { id:'oetW0012', letter_type:'referral', recipient:'Dr George Hunt, Consultant Rheumatologist, St Luke\'s Hospital',
    setting:'GP surgery',
    case_notes:'Ms Rachel Dean, 38. 3-month history of symmetrical joint pain and swelling (hands, wrists), '+
      'early-morning stiffness lasting >1 hour. Fatigue. No psoriasis. Rheumatoid factor positive; ESR raised. '+
      'Started on naproxen for symptom relief. Suspected rheumatoid arthritis. Requires early rheumatology review.',
    key_points:['reason (suspected RA, early referral)','pattern of joint involvement and stiffness',
      'investigation results (RF, ESR)','symptomatic treatment started','request for early review'],
    omit:['unrelated minor complaints'],
    model_letter_en:"Dear Dr Hunt,\n\nRe: Ms Rachel Dean, DOB [ ]\n\n"+
      "I am writing to refer Ms Dean, a 38-year-old woman, for early rheumatology assessment of a three-month history of symmetrical inflammatory polyarthritis, with suspected rheumatoid arthritis.\n\n"+
      "Her symptoms began three months ago with pain and swelling affecting the small joints of both hands and her wrists in a strikingly symmetrical distribution. The pain is accompanied by early-morning stiffness lasting more than an hour and by significant fatigue. There is no personal history of psoriasis to suggest a psoriatic arthropathy.\n\n"+
      "Investigations support an inflammatory process: her rheumatoid factor is positive and her erythrocyte sedimentation rate is raised. To provide symptomatic relief while she awaits your review, I have commenced regular naproxen.\n\n"+
      "As you know, early initiation of disease-modifying therapy is critical in preventing irreversible joint damage and preserving long-term function. I would therefore be very grateful if you could review Ms Dean at your earliest opportunity, confirm the diagnosis, and initiate disease-modifying treatment as you consider appropriate. In the meantime, I will continue to review her symptomatic control.\n\n"+
      "Thank you for your assistance. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: suspeita de AR e importância do encaminhamento precoce','Padrão articular e rigidez matinal',
      'Resultados (FR, VHS)','Tratamento sintomático','Pedido de revisão precoce (janela terapêutica)','180–200 palavras'],
    word_count:'≈185' },

  { id:'oetW0013', letter_type:'discharge', recipient:'Dr Nadia Ahmed, General Practitioner, Green Lane Medical Centre',
    setting:'Obstetric ward',
    case_notes:'Mrs Chloe Barnes, 29. Normal vaginal delivery of healthy baby boy 2 days ago. '+
      'Mild postpartum anaemia (Hb 9.5) — started oral iron. Perineal tear (2nd degree) repaired, healing well. '+
      'Breastfeeding established. Mood good, no red flags. GP: routine postnatal check at 6 weeks; recheck Hb.',
    key_points:['delivery outcome and baby status','postnatal issues (anaemia, tear) and treatment',
      'feeding and mood status','GP follow-up (6-week check, recheck Hb)'],
    omit:['detailed labour progress notes'],
    model_letter_en:"Dear Dr Ahmed,\n\nRe: Mrs Chloe Barnes, DOB [ ]\n\n"+
      "I am writing to inform you of the discharge of Mrs Barnes and her baby today, two days after a normal vaginal delivery of a healthy baby boy.\n\n"+
      "Her postnatal recovery has been uncomplicated. She sustained a second-degree perineal tear during the delivery, which was repaired and is healing well. Blood tests identified a mild postpartum anaemia, with a haemoglobin of 9.5 g/dL, and oral iron has been commenced, which she will continue after discharge.\n\n"+
      "Breastfeeding is well established, and the baby is feeding well. Mrs Barnes' mood is good, with no red flags identified on review, and there are no concerns regarding her emotional wellbeing. Both mother and baby are well at the time of discharge.\n\n"+
      "I would be grateful if you could carry out the routine postnatal check at six weeks and recheck her haemoglobin at that appointment to confirm that the anaemia has resolved. Should it remain low, further supplementation or investigation may be required, which I will leave to your judgement.\n\n"+
      "Thank you for your continued care of Mrs Barnes and her family. Please do not hesitate to contact the ward should you require any further information.\n\nYours sincerely,\nDr [Name]\nObstetric Registrar",
    checklist_pt:['Desfecho do parto e estado do bebê','Questões pós-parto e tratamento (anemia, laceração)',
      'Amamentação e humor','Seguimento pelo GP (6 semanas, repetir Hb)','Omitir notas detalhadas do trabalho de parto','180–200 palavras'],
    word_count:'≈190' },

  { id:'oetW0014', letter_type:'referral', recipient:'Dr Marcus Webb, Consultant Urologist, County Hospital',
    setting:'GP surgery',
    case_notes:'Mr Robert Shaw, 66. Painless visible haematuria on two occasions over 2 weeks. '+
      'No infection on urinalysis/culture. Smoker (25 pack-years). No pain, normal renal function. '+
      'Two-week-wait suspected urological cancer referral. Needs urgent cystoscopy and imaging.',
    key_points:['urgent (painless visible haematuria, 2-week-wait)','absence of infection','risk factor (smoking)',
      'request for urgent cystoscopy/imaging'],
    omit:['unrelated stable comorbidities beyond a brief note'],
    model_letter_en:"Dear Dr Webb,\n\nRe: Mr Robert Shaw, DOB [ ]\n\n"+
      "I am writing to refer Mr Shaw, a 66-year-old man, urgently under the two-week-wait pathway for investigation of painless visible haematuria.\n\n"+
      "Mr Shaw first noticed blood in his urine two weeks ago, and it has occurred on two separate occasions since then. On both occasions the urine was visibly blood-stained, and importantly, the bleeding has been entirely painless throughout.\n\n"+
      "Urinalysis and urine culture performed at the surgery have excluded a urinary tract infection as the cause, and his renal function is entirely normal. He is a current smoker with a 25 pack-year history, which is a recognised risk factor for urothelial malignancy. As you know, painless visible haematuria warrants urgent investigation to exclude bladder or renal cancer.\n\n"+
      "I would therefore be grateful if you could see Mr Shaw at the earliest opportunity and arrange cystoscopy, together with appropriate imaging of the upper urinary tract. He has been informed of the reason for this urgent referral and understands the importance of prompt investigation.\n\n"+
      "Thank you for your prompt attention to this referral. Please do not hesitate to contact me should you require any further information.\n\nYours sincerely,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Urgência (hematúria indolor, 2-week-wait)','Infecção excluída','Fator de risco (tabagismo)',
      'Pedido de cistoscopia/imagem urgentes','180–200 palavras','Registro formal'],
    word_count:'≈185' },

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
      "I am writing to request health visitor input for Ella, a nine-month-old infant, whose parents have become increasingly concerned about feeding difficulties and faltering weight gain.\n\n"+
      "Over recent months, Ella's weight has crossed downward through the centiles on her growth chart. Her parents report ongoing difficulties with feeding, which have become particularly pronounced since weaning began. Reassuringly, she is developmentally appropriate for her age, there is no history of vomiting or diarrhoea, and she has no acute illness. I have not identified any red flags.\n\n"+
      "Her mother, in particular, is finding the weaning process stressful, and I believe the family would benefit greatly from practical feeding support and from regular growth monitoring in the home setting.\n\n"+
      "I would therefore be grateful if you could visit the family to offer practical feeding advice and support with weaning, monitor Ella's growth at regular intervals, and refer her back to me promptly should any concerning features develop.\n\n"+
      "Thank you for your support of this family. I would value an update following your first visit, and please do not hesitate to contact me should you require any further information.\n\nYours faithfully,\nDr [Name]\nGeneral Practitioner",
    checklist_pt:['Motivo: crescimento insatisfatório + apoio à alimentação','Padrão de crescimento (cruzando percentis)',
      'Ausência de sinais de alarme','Necessidade de apoio aos pais','Destinatário genérico → "Yours faithfully"','180–200 palavras'],
    word_count:'≈185' }
];
