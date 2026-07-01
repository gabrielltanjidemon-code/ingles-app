/* medabbrev.js — Abreviações médicas de alto rendimento.
   Schema: { id, abbr, full, meaning_en, pt, context, example_en }
   Cobrindo prescrição, sinais vitais, história e achados. */
window.MEDABBREV = [
  /* Prescription / dosing */
  { id:'abbr_bid', abbr:'bid', full:'bis in die', meaning_en:'twice a day', pt:'duas vezes ao dia', context:'prescription', example_en:'Take 1 tablet PO bid.' },
  { id:'abbr_tid', abbr:'tid', full:'ter in die', meaning_en:'three times a day', pt:'três vezes ao dia', context:'prescription', example_en:'Amoxicillin 500 mg PO tid.' },
  { id:'abbr_qid', abbr:'qid', full:'quater in die', meaning_en:'four times a day', pt:'quatro vezes ao dia', context:'prescription', example_en:'Rinse qid after meals.' },
  { id:'abbr_od', abbr:'od', full:'omni die', meaning_en:'once a day', pt:'uma vez ao dia', context:'prescription', example_en:'Ramipril 5 mg PO od.' },
  { id:'abbr_prn', abbr:'PRN', full:'pro re nata', meaning_en:'as needed', pt:'se necessário', context:'prescription', example_en:'Paracetamol 1 g PRN for pain.' },
  { id:'abbr_stat', abbr:'stat', full:'statim', meaning_en:'immediately', pt:'imediatamente', context:'prescription', example_en:'Give adrenaline stat.' },
  { id:'abbr_po', abbr:'PO', full:'per os', meaning_en:'by mouth', pt:'via oral', context:'route', example_en:'Metformin 500 mg PO bid.' },
  { id:'abbr_iv', abbr:'IV', full:'intravenous', meaning_en:'into a vein', pt:'via intravenosa', context:'route', example_en:'Start IV fluids.' },
  { id:'abbr_im', abbr:'IM', full:'intramuscular', meaning_en:'into a muscle', pt:'via intramuscular', context:'route', example_en:'Give the vaccine IM.' },
  { id:'abbr_sc', abbr:'SC', full:'subcutaneous', meaning_en:'under the skin', pt:'via subcutânea', context:'route', example_en:'Insulin is given SC.' },
  { id:'abbr_sl', abbr:'SL', full:'sublingual', meaning_en:'under the tongue', pt:'via sublingual', context:'route', example_en:'GTN spray SL for angina.' },
  { id:'abbr_pr', abbr:'PR', full:'per rectum', meaning_en:'via the rectum', pt:'via retal', context:'route', example_en:'Diclofenac PR post-op.' },
  { id:'abbr_neb', abbr:'NEB', full:'nebuliser', meaning_en:'given by nebuliser', pt:'nebulização', context:'route', example_en:'Salbutamol 5 mg NEB.' },
  { id:'abbr_mane', abbr:'mane', full:'mane', meaning_en:'in the morning', pt:'pela manhã', context:'prescription', example_en:'Prednisolone 20 mg mane.' },
  { id:'abbr_nocte', abbr:'nocte', full:'nocte', meaning_en:'at night', pt:'à noite', context:'prescription', example_en:'Simvastatin 40 mg nocte.' },
  { id:'abbr_gtt', abbr:'gtt', full:'guttae', meaning_en:'drops', pt:'gotas', context:'prescription', example_en:'2 gtt each eye qid.' },
  { id:'abbr_mg', abbr:'mg', full:'milligram', meaning_en:'milligram', pt:'miligrama', context:'dosing', example_en:'Aspirin 75 mg od.' },
  { id:'abbr_mcg', abbr:'mcg', full:'microgram', meaning_en:'microgram', pt:'micrograma', context:'dosing', example_en:'Levothyroxine 50 mcg od.' },

  /* History abbreviations */
  { id:'abbr_hx', abbr:'Hx', full:'history', meaning_en:'clinical history', pt:'história (clínica)', context:'history', example_en:'Hx of asthma since childhood.' },
  { id:'abbr_dx', abbr:'Dx', full:'diagnosis', meaning_en:'diagnosis', pt:'diagnóstico', context:'history', example_en:'Working Dx: pneumonia.' },
  { id:'abbr_ddx', abbr:'DDx', full:'differential diagnosis', meaning_en:'differential diagnosis', pt:'diagnóstico diferencial', context:'history', example_en:'DDx includes PE and pneumonia.' },
  { id:'abbr_rx', abbr:'Rx', full:'treatment / prescription', meaning_en:'treatment or prescription', pt:'tratamento / receita', context:'history', example_en:'Rx: oral antibiotics.' },
  { id:'abbr_tx', abbr:'Tx', full:'treatment', meaning_en:'treatment', pt:'tratamento', context:'history', example_en:'Tx started in ED.' },
  { id:'abbr_sx', abbr:'Sx', full:'symptoms', meaning_en:'symptoms', pt:'sintomas', context:'history', example_en:'Sx resolved after 3 days.' },
  { id:'abbr_pmh', abbr:'PMH', full:'past medical history', meaning_en:'past medical history', pt:'história patológica pregressa', context:'history', example_en:'PMH: hypertension, T2DM.' },
  { id:'abbr_fhx', abbr:'FHx', full:'family history', meaning_en:'family history', pt:'história familiar', context:'history', example_en:'FHx of ischaemic heart disease.' },
  { id:'abbr_shx', abbr:'SHx', full:'social history', meaning_en:'social history', pt:'história social', context:'history', example_en:'SHx: lives alone, ex-smoker.' },
  { id:'abbr_dh', abbr:'DH', full:'drug history', meaning_en:'drug (medication) history', pt:'história medicamentosa', context:'history', example_en:'DH: ramipril, metformin.' },
  { id:'abbr_nkda', abbr:'NKDA', full:'no known drug allergies', meaning_en:'no known drug allergies', pt:'sem alergias medicamentosas conhecidas', context:'history', example_en:'Allergies: NKDA.' },
  { id:'abbr_co', abbr:'c/o', full:'complains of', meaning_en:'complains of', pt:'queixa-se de', context:'history', example_en:'Pt c/o chest pain.' },
  { id:'abbr_hpc', abbr:'HPC', full:'history of presenting complaint', meaning_en:'history of the presenting complaint', pt:'história da queixa atual', context:'history', example_en:'HPC: 2-day history of fever.' },
  { id:'abbr_pc', abbr:'PC', full:'presenting complaint', meaning_en:'presenting complaint', pt:'queixa principal', context:'history', example_en:'PC: shortness of breath.' },
  { id:'abbr_ros', abbr:'ROS', full:'review of systems', meaning_en:'review of systems', pt:'revisão de sistemas', context:'history', example_en:'ROS otherwise unremarkable.' },

  /* Examination / findings */
  { id:'abbr_oe', abbr:'O/E', full:'on examination', meaning_en:'on examination', pt:'ao exame', context:'exam', example_en:'O/E: chest clear, HS normal.' },
  { id:'abbr_nad', abbr:'NAD', full:'no abnormality detected', meaning_en:'no abnormality detected', pt:'nada digno de nota', context:'exam', example_en:'Abdomen: NAD.' },
  { id:'abbr_wnl', abbr:'WNL', full:'within normal limits', meaning_en:'within normal limits', pt:'dentro dos limites normais', context:'exam', example_en:'Bloods WNL.' },
  { id:'abbr_hs', abbr:'HS', full:'heart sounds', meaning_en:'heart sounds', pt:'bulhas cardíacas', context:'exam', example_en:'HS I + II + 0 (no murmurs).' },
  { id:'abbr_jvp', abbr:'JVP', full:'jugular venous pressure', meaning_en:'jugular venous pressure', pt:'pressão venosa jugular', context:'exam', example_en:'JVP not raised.' },
  { id:'abbr_pearl', abbr:'PEARL', full:'pupils equal and reactive to light', meaning_en:'pupils equal and reactive to light', pt:'pupilas isocóricas e fotorreagentes', context:'exam', example_en:'PEARL, GCS 15.' },
  { id:'abbr_gcs', abbr:'GCS', full:'Glasgow Coma Scale', meaning_en:'Glasgow Coma Scale', pt:'escala de coma de Glasgow', context:'exam', example_en:'GCS 14/15 on arrival.' },
  { id:'abbr_cn', abbr:'CN', full:'cranial nerves', meaning_en:'cranial nerves', pt:'nervos cranianos', context:'exam', example_en:'CN II–XII intact.' },

  /* Vital signs & measures */
  { id:'abbr_bp', abbr:'BP', full:'blood pressure', meaning_en:'blood pressure', pt:'pressão arterial', context:'vitals', example_en:'BP 150/95 mmHg.' },
  { id:'abbr_hr', abbr:'HR', full:'heart rate', meaning_en:'heart rate', pt:'frequência cardíaca', context:'vitals', example_en:'HR 110 bpm.' },
  { id:'abbr_rr', abbr:'RR', full:'respiratory rate', meaning_en:'respiratory rate', pt:'frequência respiratória', context:'vitals', example_en:'RR 24/min.' },
  { id:'abbr_temp', abbr:'T', full:'temperature', meaning_en:'temperature', pt:'temperatura', context:'vitals', example_en:'T 38.5 °C.' },
  { id:'abbr_spo2', abbr:'SpO₂', full:'oxygen saturation', meaning_en:'oxygen saturation', pt:'saturação de oxigênio', context:'vitals', example_en:'SpO₂ 92% on air.' },
  { id:'abbr_bmi', abbr:'BMI', full:'body mass index', meaning_en:'body mass index', pt:'índice de massa corporal', context:'vitals', example_en:'BMI 31 kg/m².' },
  { id:'abbr_bm', abbr:'BM', full:'blood glucose (bedside)', meaning_en:'bedside blood glucose', pt:'glicemia capilar', context:'vitals', example_en:'BM 3.2 — treat hypo.' },
  { id:'abbr_uo', abbr:'UO', full:'urine output', meaning_en:'urine output', pt:'débito urinário', context:'vitals', example_en:'UO 20 mL/h — oliguric.' },

  /* Common conditions */
  { id:'abbr_sob', abbr:'SOB', full:'shortness of breath', meaning_en:'shortness of breath', pt:'falta de ar', context:'symptom', example_en:'SOB on exertion.' },
  { id:'abbr_sobar', abbr:'SOBOE', full:'shortness of breath on exertion', meaning_en:'breathless on exertion', pt:'dispneia aos esforços', context:'symptom', example_en:'SOBOE after one flight of stairs.' },
  { id:'abbr_htn', abbr:'HTN', full:'hypertension', meaning_en:'high blood pressure', pt:'hipertensão', context:'condition', example_en:'Known HTN on ramipril.' },
  { id:'abbr_dm', abbr:'DM', full:'diabetes mellitus', meaning_en:'diabetes', pt:'diabetes mellitus', context:'condition', example_en:'T2DM diet-controlled.' },
  { id:'abbr_mi', abbr:'MI', full:'myocardial infarction', meaning_en:'heart attack', pt:'infarto do miocárdio', context:'condition', example_en:'Previous MI in 2019.' },
  { id:'abbr_cva', abbr:'CVA', full:'cerebrovascular accident', meaning_en:'stroke', pt:'AVC', context:'condition', example_en:'Right-sided weakness post-CVA.' },
  { id:'abbr_copd', abbr:'COPD', full:'chronic obstructive pulmonary disease', meaning_en:'chronic lung disease', pt:'DPOC', context:'condition', example_en:'Infective exacerbation of COPD.' },
  { id:'abbr_uti', abbr:'UTI', full:'urinary tract infection', meaning_en:'water/bladder infection', pt:'infecção urinária', context:'condition', example_en:'UTI confirmed on urinalysis.' },
  { id:'abbr_dvt', abbr:'DVT', full:'deep vein thrombosis', meaning_en:'clot in a leg vein', pt:'trombose venosa profunda', context:'condition', example_en:'Left leg DVT on Doppler.' },
  { id:'abbr_pe', abbr:'PE', full:'pulmonary embolism', meaning_en:'clot in the lung', pt:'embolia pulmonar', context:'condition', example_en:'CTPA confirmed PE.' },
  { id:'abbr_af', abbr:'AF', full:'atrial fibrillation', meaning_en:'irregular heartbeat', pt:'fibrilação atrial', context:'condition', example_en:'New AF on ECG.' },
  { id:'abbr_ckd', abbr:'CKD', full:'chronic kidney disease', meaning_en:'long-term kidney disease', pt:'doença renal crônica', context:'condition', example_en:'CKD stage 3.' },
  { id:'abbr_aki', abbr:'AKI', full:'acute kidney injury', meaning_en:'sudden kidney impairment', pt:'lesão renal aguda', context:'condition', example_en:'AKI secondary to dehydration.' },
  { id:'abbr_uri', abbr:'URTI', full:'upper respiratory tract infection', meaning_en:'a cold / throat infection', pt:'infecção das vias aéreas superiores', context:'condition', example_en:'Self-limiting URTI.' },

  /* Care settings */
  { id:'abbr_ed', abbr:'ED', full:'emergency department', meaning_en:'emergency department / A&E', pt:'pronto-socorro', context:'setting', example_en:'Presented to ED overnight.' },
  { id:'abbr_icu', abbr:'ICU', full:'intensive care unit', meaning_en:'intensive care unit', pt:'unidade de terapia intensiva', context:'setting', example_en:'Transferred to ICU.' },
  { id:'abbr_opd', abbr:'OPD', full:'outpatient department', meaning_en:'outpatient clinic', pt:'ambulatório', context:'setting', example_en:'Review in OPD in 6 weeks.' },
  { id:'abbr_gp', abbr:'GP', full:'general practitioner', meaning_en:'family doctor', pt:'clínico geral', context:'setting', example_en:'Refer back to GP.' },
  { id:'abbr_nbm', abbr:'NBM', full:'nil by mouth', meaning_en:'nothing to eat or drink', pt:'jejum (nada por via oral)', context:'orders', example_en:'Keep NBM before surgery.' }
];
