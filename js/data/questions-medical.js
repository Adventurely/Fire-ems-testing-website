/* GMVEMSC EMT Protocol question bank - Medical, OB and Pediatric, 4000/5000 series.
   EMT scope only. Source: 2026 GMVEMSC Standing Orders. */

const Q_MEDICAL = [
  /* ---------- 4014 Seizures ---------- */
  {
    id: "md-01", section: "Medical & OB", domain: "Seizures", ref: "4014",
    q: "Per GMVEMSC 4014, once a seizure has stopped the patient should be placed:",
    choices: ["Supine and flat", "In the recovery position during assessment and transport", "In Trendelenburg", "Sitting upright"],
    answer: 1,
    why: "4014 directs placing the patient in the recovery position during assessment and transport - the postictal patient cannot protect their own airway and vomiting is common."
  },
  {
    id: "md-02", section: "Medical & OB", domain: "Seizures", ref: "4014",
    q: "During an active seizure, GMVEMSC 4014 supports the EMT using:",
    choices: [
      "An oropharyngeal airway forced past clenched teeth",
      "BVM and a nasopharyngeal airway as needed",
      "A bite block",
      "Restraints on all four extremities"
    ],
    answer: 1,
    why: "4014 lists BVM and a nasopharyngeal airway during the seizure as needed. An NPA is tolerated by a clenched-jaw patient; an OPA is not. Never force anything between the teeth."
  },
  {
    id: "md-03", section: "Medical & OB", domain: "Seizures", ref: "4014",
    q: "A seizure patient has a blood glucose of 52 mg/dl. Per GMVEMSC 4014, you should:",
    choices: [
      "Treat the seizure only and transport",
      "Follow the 4008 Hypoglycemia protocol",
      "Wait for ALS before treating",
      "Give oxygen and reassess in 10 minutes"
    ],
    answer: 1,
    why: "4014 directs following 4008 when glucose is under 60, or when there is strong suspicion of hypoglycemia despite the glucometer reading. Hypoglycemia is a reversible cause of seizure that an EMT can fix."
  },
  {
    id: "md-04", section: "Medical & OB", domain: "Seizures", ref: "4014",
    q: "Per GMVEMSC 4014, Refractory Status Epilepticus includes generalized tonic/clonic seizures lasting longer than:",
    choices: ["2 minutes", "5 minutes", "10 minutes", "20 minutes"],
    answer: 1,
    why: "4014 defines RSE as seizures continuing despite first-line medications, with generalized tonic/clonic activity over 5 minutes, focal motor over 10 minutes, absences over 10 minutes, or recurrent seizures without a lucid interval."
  },

  /* ---------- 4016 Shock ---------- */
  {
    id: "md-05", section: "Medical & OB", domain: "Shock", ref: "4016",
    q: "GMVEMSC 4016 defines shock as:",
    choices: ["A systolic BP under 90", "Inadequate tissue perfusion", "A heart rate over 120", "Loss of consciousness from blood loss"],
    answer: 1,
    why: "4016 defines shock as inadequate tissue perfusion and instructs providers to be proactive - do not wait for symptoms to present. Hypotension is a late sign, not the definition."
  },
  {
    id: "md-06", section: "Medical & OB", domain: "Shock", ref: "4016",
    q: "An EMT has a patient in shock. Per GMVEMSC 4016, the EMT should:",
    choices: [
      "Wait on scene for ALS regardless of ETA",
      "Transport immediately unless ALS intercept is less than 5 minutes",
      "Transport only after two sets of vitals",
      "Request air transport in all cases"
    ],
    answer: 1,
    why: "4016 gives the EMT a clear rule: transport immediately unless ALS intercept is under 5 minutes. Waiting longer than that for ALS costs the patient more than the intercept gains."
  },
  {
    id: "md-07", section: "Medical & OB", domain: "Shock", ref: "4016",
    q: "Per GMVEMSC 4016, the blood pressure on a patient with signs of shock should be:",
    choices: ["Automated for speed", "Manual", "Palpated only", "Taken once and trended by pulse"],
    answer: 1,
    why: "4016's clinical pearl requires a manual BP on all patients presenting with signs and symptoms of shock. The same requirement appears in 3001 for all trauma patients."
  },
  {
    id: "md-08", section: "Medical & OB", domain: "Shock", ref: "4016",
    q: "Per GMVEMSC 4016, pediatric patients in shock:",
    choices: [
      "Decompensate faster than adults",
      "Compensate longer than adults",
      "Show hypotension earliest",
      "Follow the adult presentation exactly"
    ],
    answer: 1,
    why: "4016 notes pediatric patients compensate longer than adults, so apparent signs and symptoms of shock indicate a critical patient. 3001 makes the same point - children present decompensated shock late."
  },

  /* ---------- 4007 Childbirth with Complications ---------- */
  {
    id: "md-09", section: "Medical & OB", domain: "Childbirth", ref: "4007",
    q: "In all complicated childbirth scenarios, GMVEMSC 4007 directs you to place the mother on:",
    choices: ["A nasal cannula at 4 LPM", "Oxygen by nonrebreather mask", "CPAP", "Room air unless hypoxic"],
    answer: 1,
    why: "4007 states that in all complicated childbirth scenarios the mother goes on oxygen by nonrebreather mask. These guidelines apply to all certification levels except where noted."
  },
  {
    id: "md-10", section: "Medical & OB", domain: "Childbirth", ref: "4007",
    q: "You feel a nuchal cord as the baby's head delivers and it is too tight to slip over the head. Per GMVEMSC 4007:",
    choices: [
      "Pull firmly to stretch the cord",
      "Clamp the cord in two places and cut between the clamps",
      "Push the head back in",
      "Wait for the next contraction"
    ],
    answer: 1,
    why: "4007 says to first try slipping the cord over the baby's head; if too tight, clamp in two places and cut between the clamps. Leaving a tight nuchal cord strangles the infant during delivery."
  },
  {
    id: "md-11", section: "Medical & OB", domain: "Childbirth", ref: "4007",
    q: "You find a prolapsed umbilical cord. Per GMVEMSC 4007 you should:",
    choices: [
      "Attempt to reinsert the cord",
      "Transport immediately with hips elevated, a moist dressing around the cord, and two fingers displacing the presenting part off the cord",
      "Clamp and cut the cord",
      "Have the mother push to speed delivery"
    ],
    answer: 1,
    why: "4007 directs checking the cord for a pulse, transporting immediately with hips elevated and a moist dressing around the cord, and inserting two fingers to hold the presenting part off the cord. Do NOT attempt to reinsert the cord."
  },
  {
    id: "md-12", section: "Medical & OB", domain: "Childbirth", ref: "4007",
    q: "An appendage or the buttocks presents first in a delivery. Per GMVEMSC 4007, your initial action is to:",
    choices: [
      "Coach the mother to push hard",
      "Position the patient to discourage delivery, coach her to avoid pushing, and transport immediately",
      "Perform fundal pressure",
      "Attempt to rotate the baby"
    ],
    answer: 1,
    why: "4007 directs discouraging delivery and transporting immediately for a breech presentation. If delivery is in progress, support the body; if the head is caught, apply gentle pressure above the pubic symphysis, and if it still will not deliver, form a V with two fingers around the mouth and nose to create an airway."
  },
  {
    id: "md-13", section: "Medical & OB", domain: "Childbirth", ref: "4007",
    q: "Per GMVEMSC 4007, excessive postpartum bleeding is managed by treating for shock and:",
    choices: [
      "Packing the vagina with gauze",
      "Massaging the uterus firmly and putting the baby to the mother's breast",
      "Applying a pelvic binder",
      "Elevating the legs only"
    ],
    answer: 1,
    why: "4007 directs firm uterine massage post-delivery and putting the baby to the breast, both of which promote uterine contraction. TXA is an AEMT and paramedic option under 3015."
  },

  /* ---------- 5002 Newborn Care ---------- */
  {
    id: "md-14", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Per GMVEMSC 5002, a newborn's airway is best maintained by placing them in the sniffing position using:",
    choices: ["A pillow under the head", "A 1 inch towel under the shoulders", "Full neck extension", "Chin to chest"],
    answer: 1,
    why: "5002 specifies the sniffing position with a 1 inch towel under the shoulders. A newborn's large occiput flexes the neck and closes the airway if laid flat."
  },
  {
    id: "md-15", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Per GMVEMSC 5002, at what heart rate does a newborn require chest compressions?",
    choices: ["Less than 100 bpm", "Less than 80 bpm", "Less than 60 bpm", "Less than 40 bpm"],
    answer: 2,
    why: "5002 starts BVM ventilation at 40-60/min if the heart rate is under 100 or for apnea or persistent central cyanosis, and begins CPR if the rate is under 60 - compressing at 120/min with a 3:1 compression to ventilation ratio."
  },
  {
    id: "md-16", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Meconium staining is present and the newborn is vigorous with strong respirations, good tone and a heart rate of 140. Per GMVEMSC 5002 you should:",
    choices: [
      "Suction deeply before doing anything else",
      "Monitor the patient and maintain a patent airway",
      "Intubate and suction the trachea",
      "Begin BVM ventilation"
    ],
    answer: 1,
    why: "5002 splits on vigor: a vigorous newborn is monitored with a patent airway maintained. A depressed newborn - poor respiratory effort, decreased tone, or heart rate under 100 - gets the airway cleared by suctioning before other resuscitative steps."
  },
  {
    id: "md-17", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Per GMVEMSC 5002, if drying and suctioning have not provided enough tactile stimulation, you should:",
    choices: [
      "Hold the infant upside down",
      "Flick the infant's feet or rub the infant's back",
      "Apply a cold compress",
      "Begin compressions"
    ],
    answer: 1,
    why: "5002 directs flicking the feet or rubbing the back. Note also the warning against applying cool oxygen directly to the face, which can cause respiratory depression through the mammalian dive reflex present immediately after birth."
  },
  {
    id: "md-18", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Per GMVEMSC 5002, APGAR scores are obtained at:",
    choices: ["1 and 5 minutes", "1, 5 and 10 minutes", "5 and 10 minutes", "Birth and 5 minutes"],
    answer: 1,
    why: "5002 requires APGAR scores at 1, 5 and 10 minutes post-delivery - note the region adds the 10 minute score. Use a length-based resuscitation tape on all neonatal resuscitations."
  },
  {
    id: "md-19", section: "Medical & OB", domain: "Newborn", ref: "5002",
    q: "Per GMVEMSC 5002, mechanical suction may be used on infants only if the pressure does not exceed:",
    choices: ["60 mmHg", "100 mmHg", "150 mmHg", "200 mmHg"],
    answer: 1,
    why: "5002 caps mechanical suction at 100 mmHg (136 cmH2O) for infants, and states bulb suctioning is preferred. Suction only infants in distress, until the airway is clear."
  },

  /* ---------- 4008 Hypoglycemia ---------- */
  {
    id: "md-20", section: "Medical & OB", domain: "Diabetic Emergencies", ref: "4008",
    q: "What blood glucose level does GMVEMSC treat as the hypoglycemia threshold?",
    choices: ["Less than 40 mg/dl", "Less than 60 mg/dl", "Less than 70 mg/dl", "Less than 80 mg/dl"],
    answer: 1,
    why: "60 mg/dl is the regional threshold, used in 4008, in 4014 for seizures, in 4017 for stroke mimics, and in the oral glucose formulary entry 8039 for repeat dosing."
  },
  {
    id: "md-21", section: "Medical & OB", domain: "Diabetic Emergencies", ref: "4008",
    q: "Which presentation best fits hyperglycemia rather than hypoglycemia?",
    choices: [
      "Rapid onset, cool clammy skin, tachycardia",
      "Gradual onset, warm dry skin, Kussmaul respirations and fruity breath",
      "Sudden combativeness with diaphoresis",
      "Seizure with a glucose of 45"
    ],
    answer: 1,
    why: "Hypoglycemia comes on fast with cool clammy skin and tachycardia; hyperglycemia is gradual with warm dry skin, Kussmaul respirations, fruity breath, and polyuria/polydipsia. When you cannot tell and the reading is borderline, treat the low."
  },

  /* ---------- 4002 / 4003 Allergy and Respiratory ---------- */
  {
    id: "md-22", section: "Medical & OB", domain: "Anaphylaxis", ref: "4002",
    q: "Which finding distinguishes anaphylaxis from a simple allergic reaction?",
    choices: [
      "Hives alone",
      "Airway involvement or hypotension - wheezing, stridor, swelling, or shock",
      "Itching at the exposure site",
      "A known allergy history"
    ],
    answer: 1,
    why: "Anaphylaxis is a systemic reaction involving the airway or circulation. Hives alone are a local allergic reaction; add wheezing, stridor, facial or airway swelling, or hypotension and it becomes the emergency that epinephrine treats (8017/8018)."
  },
  {
    id: "md-23", section: "Medical & OB", domain: "Asthma/COPD", ref: "4003",
    q: "Per GMVEMSC 4003 and formulary 8002, the EMT's treatment for bronchospasm in asthma or COPD is:",
    choices: [
      "Epinephrine IM under standing order",
      "Nebulized albuterol with ipratropium on the first dose, which requires an MCP order for the EMT",
      "CPAP only",
      "Oxygen only - EMTs cannot nebulize"
    ],
    answer: 1,
    why: "Albuterol 2.5 mg with ipratropium 0.5 mg on the first treatment, nebulized at 8-10 LPM. Protocol 1007 requires the EMT to obtain an MCP order to administer nebulized medications, and 8017/8018 bar the EMT from treating asthma with epinephrine."
  },
  {
    id: "md-24", section: "Medical & OB", domain: "Asthma/COPD", ref: "1007",
    q: "A COPD patient is in severe respiratory distress with an SpO2 of 84%. Per GMVEMSC 1007, you should apply:",
    choices: [
      "2 LPM by nasal cannula to avoid knocking out their drive",
      "12-15 LPM by nonrebreather mask",
      "Room air and monitor",
      "4-6 LPM by nasal cannula"
    ],
    answer: 1,
    why: "1007 is explicit: COPD patients in severe respiratory distress or with chest pain need the same oxygen devices and flow rates as any other patient in that condition. The 2 LPM figure applies to the COPD patient who is NOT in distress."
  },

  /* ---------- 4012 Overdose ---------- */
  {
    id: "md-25", section: "Medical & OB", domain: "Overdose", ref: "4012",
    q: "An unresponsive patient has pinpoint pupils and a respiratory rate of 4. Your first priority is:",
    choices: [
      "Administer naloxone immediately",
      "Ventilate the patient",
      "Check a blood glucose",
      "Apply a nonrebreather mask"
    ],
    answer: 1,
    why: "Ventilation is what saves the opioid overdose patient - the death is respiratory. Naloxone (8033, up to 4 mg IN for the EMT, half per nostril) follows, with an onset of about 2 minutes. Transport is encouraged even if the patient wakes up."
  },
  {
    id: "md-26", section: "Medical & OB", domain: "Overdose", ref: "8033",
    q: "Per GMVEMSC 8033, a patient who becomes alert after naloxone:",
    choices: [
      "May be released on scene",
      "Should still be transported - transport is encouraged",
      "Requires no further monitoring",
      "Must sign a refusal immediately"
    ],
    answer: 1,
    why: "8033 states that after administration, patient transport by EMS is encouraged even if the patient becomes responsive. Naloxone's duration is often shorter than the opioid's, so the patient can re-narcotize after you leave."
  },

  /* ---------- 4004 Behavioral ---------- */
  {
    id: "md-27", section: "Medical & OB", domain: "Behavioral", ref: "4004",
    q: "Per GMVEMSC 4004, severe agitation should be regarded as:",
    choices: [
      "A law enforcement problem",
      "A medical emergency that should be treated",
      "A reason to refuse transport",
      "Normal for psychiatric patients"
    ],
    answer: 1,
    why: "4004 states severe agitation is a medical emergency and should be treated, referring to 4005 for combative patients and emergency sedation. Agitation can be the presentation of hypoxia, hypoglycemia, head injury or toxicity - assess before assuming psychiatric."
  },
  {
    id: "md-28", section: "Medical & OB", domain: "Behavioral", ref: "4004",
    q: "Per GMVEMSC 4004, a patient being taken to Kettering Behavioral Health Center:",
    choices: [
      "May be transported there directly by EMS",
      "Must go through an emergency department first",
      "Requires police transport",
      "Requires MCP approval only"
    ],
    answer: 1,
    why: "4004 states there is no direct transport to Kettering Behavioral Health Center - the patient must go through the ED. Behavioral patients need medical clearance before a psychiatric facility will accept them."
  },

  /* ---------- 4015 Sepsis / 4001 Abdominal ---------- */
  {
    id: "md-29", section: "Medical & OB", domain: "Sepsis", ref: "4015",
    q: "Why does GMVEMSC 4015 emphasize early recognition of sepsis?",
    choices: [
      "Sepsis is rare in the prehospital setting",
      "Sepsis carries a high mortality rate and early recognition improves outcomes in septic shock",
      "It changes the transport destination",
      "It requires a trauma alert"
    ],
    answer: 1,
    why: "4015 notes sepsis is often associated with high mortality, and the key to improving outcomes in septic shock is early recognition and notification so the receiving facility can start time-sensitive care."
  },
  {
    id: "md-30", section: "Medical & OB", domain: "Nausea", ref: "8038",
    q: "An EMT may treat nausea and active vomiting under GMVEMSC 8038 with:",
    choices: [
      "Ondansetron 4 mg orally dissolving tablet",
      "Ondansetron 4 mg IV",
      "Nothing - it is an ALS-only medication",
      "Oral glucose"
    ],
    answer: 0,
    why: "8038 allows the EMT, AEMT and Paramedic to give the 4 mg orally dissolving tablet; the pediatric tablet applies at 12 years and older. Remember it is not to be given prophylactically alongside naloxone."
  },

  /* ---------- Assessment fundamentals used region-wide ---------- */
  {
    id: "md-31", section: "Medical & OB", domain: "Assessment", ref: "1005",
    q: "Per GMVEMSC 1005, which history tools are collected on every patient?",
    choices: [
      "OPQRST and SAMPLE",
      "DCAP-BTLS only",
      "AVPU only",
      "GCS and pupils only"
    ],
    answer: 0,
    why: "1005 directs obtaining the chief complaint, OPQRST, SAMPLE history and other pertinent information, along with vital signs and monitoring devices as appropriate."
  },
  {
    id: "md-32", section: "Medical & OB", domain: "Stroke", ref: "4017",
    q: "A stroke patient has a glucose of 48 mg/dl. Per GMVEMSC 4017 you should:",
    choices: [
      "Call the stroke alert anyway and transport",
      "Follow the 4008 Hypoglycemia protocol",
      "Withhold all treatment until arrival",
      "Give oxygen only"
    ],
    answer: 1,
    why: "4017 directs following 4008 when glucose is under 60 or there is strong suspicion of hypoglycemia despite the reading. Hypoglycemia is a classic stroke mimic and is listed in 4017's differential as a toxic/metabolic cause."
  },
  {
    id: "md-33", section: "Medical & OB", domain: "Stroke", ref: "4017",
    q: "Per GMVEMSC 4017, a stroke patient should be transported:",
    choices: [
      "Sitting fully upright at all times",
      "With the bed flat if tolerated, but not flat if showing signs of increased ICP",
      "In the recovery position always",
      "In Trendelenburg"
    ],
    answer: 1,
    why: "4017 directs transporting with the bed flat if the patient tolerates it, to support cerebral perfusion - but not flat if there are signs of increased intracranial pressure."
  }
];
