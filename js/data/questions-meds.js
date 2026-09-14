/* GMVEMSC EMT Protocol question bank - Medications and scope of practice.
   Doses and medical control requirements are taken from the 8000-series
   EMS Drug Formulary in the 2026 GMVEMSC Standing Orders. */

const Q_MEDS = [
  /* ---------- Albuterol / Ipratropium ---------- */
  {
    id: "rx-01", section: "Medications", domain: "Albuterol", ref: "8002",
    q: "What is the adult albuterol dose in GMVEMSC 8002?",
    choices: ["1.25 mg (1.5 ml) nebulized", "2.5 mg (3 ml) nebulized with O2 at 8-10 LPM", "5 mg (6 ml) nebulized", "2.5 mg IM"],
    answer: 1,
    why: "8002 gives 2.5 mg in 3 ml, nebulized with oxygen at 8-10 LPM, for both adults and pediatrics. The drug bag carries four ampules. It may be repeated up to 2 times for a total of 3 doses."
  },
  {
    id: "rx-02", section: "Medications", domain: "Albuterol", ref: "8002",
    q: "How many total albuterol doses may be given under GMVEMSC 8002 (outside of crush syndrome)?",
    choices: ["One", "Two", "Three", "Four"],
    answer: 2,
    why: "8002 allows repeating albuterol up to 2 times for a total of 3 doses. All 4 doses are given only for hyperkalemia, which is a paramedic-level indication in crush syndrome."
  },
  {
    id: "rx-03", section: "Medications", domain: "Ipratropium", ref: "8023",
    q: "When is ipratropium (Atrovent) given relative to albuterol in GMVEMSC 8023?",
    choices: [
      "Combined with the first dose of albuterol",
      "Combined with every dose of albuterol",
      "After the third albuterol dose",
      "Only if albuterol fails"
    ],
    answer: 0,
    why: "8023 gives ipratropium 0.5 mg in 2.5 ml nebulized at 8-10 LPM, combined with the FIRST dose of albuterol only. The drug bag carries one ampule, which is why it is not repeated."
  },
  {
    id: "rx-04", section: "Medications", domain: "Albuterol", ref: "1007",
    q: "Per GMVEMSC 1007, an EMT who wants to administer a nebulized medication must:",
    choices: [
      "Administer it under standing orders with no contact",
      "Obtain an MCP order",
      "Wait for an AEMT or paramedic to arrive",
      "Contact the agency medical director directly"
    ],
    answer: 1,
    why: "1007's consult section states the EMT needs MCP orders to administer nebulized medications. Knowing which drugs an EMT can give on standing order versus which require a call is heavily tested."
  },
  {
    id: "rx-05", section: "Medications", domain: "Albuterol", ref: "8002",
    q: "Which is a listed contraindication to albuterol in GMVEMSC 8002?",
    choices: [
      "Wheezing in a COPD patient",
      "Cardiac dysrhythmias associated with tachycardia",
      "Age over 65",
      "A history of hypertension"
    ],
    answer: 1,
    why: "8002 lists prior hypersensitivity to albuterol and cardiac dysrhythmias associated with tachycardia. Side effects include restlessness, palpitations, tachycardia, and it may precipitate angina pectoris."
  },

  /* ---------- Aspirin ---------- */
  {
    id: "rx-06", section: "Medications", domain: "Aspirin", ref: "8004",
    q: "What is the GMVEMSC aspirin dose for suspected AMI?",
    choices: ["81 mg swallowed", "162 mg chewed", "324 mg chewed (four 81 mg tablets)", "650 mg chewed"],
    answer: 2,
    why: "8004 gives 324 mg chewed - four 81 mg tablets from the blister pack in the drug bag. The patient must chew the tablets; swallowing them whole delays absorption."
  },
  {
    id: "rx-07", section: "Medications", domain: "Aspirin", ref: "2008",
    q: "Per GMVEMSC 2008, aspirin is given to ACS patients who are greater than what age?",
    choices: ["16 years old", "18 years old", "25 years old", "35 years old"],
    answer: 2,
    why: "2008 directs giving aspirin to every patient greater than 25 years old with ACS symptoms. Administering it to a patient 25 or younger requires MCP permission."
  },
  {
    id: "rx-08", section: "Medications", domain: "Aspirin", ref: "8004",
    q: "Does an EMT need medical control to administer aspirin under GMVEMSC 8004?",
    choices: [
      "No, it is a standing order at all levels",
      "Yes - for EMTs, medical control is required",
      "Only if the patient is over 65",
      "Only if the patient has taken aspirin already that day"
    ],
    answer: 1,
    why: "8004's medical control row reads: for AEMT and Paramedic, No (unless the patient is 25 or younger); for EMTs, Yes. 2008 also lists aspirin, nitroglycerin, and accessing the GMVEMSC Drug Bag as requiring MCP orders for the EMT."
  },
  {
    id: "rx-09", section: "Medications", domain: "Aspirin", ref: "8004",
    q: "Which is a contraindication to aspirin in GMVEMSC 8004?",
    choices: ["Third trimester pregnancy", "Age over 70", "Diabetes", "A prior myocardial infarction"],
    answer: 0,
    why: "8004 lists hypersensitivity to salicylates, active ulcer disease, bleeding disorders, and third trimester pregnancy. No significant field change in patient condition should be expected from aspirin - it is an anti-platelet, not an analgesic."
  },

  /* ---------- Nitroglycerin ---------- */
  {
    id: "rx-10", section: "Medications", domain: "Nitroglycerin", ref: "8034",
    q: "What is the GMVEMSC nitroglycerin dosing regimen for cardiac chest pain?",
    choices: [
      "0.4 mg SL every 5 minutes, up to a total of 3 tablets",
      "0.4 mg SL every 3 minutes, up to 5 tablets",
      "0.8 mg SL once",
      "0.4 mg SL every 10 minutes until pain free"
    ],
    answer: 0,
    why: "8034 and 2008 both give 0.4 mg sublingual every 5 minutes for continued chest pain, to a total of 3 tablets, with vital signs between doses. Systolic BP must be greater than 100."
  },
  {
    id: "rx-11", section: "Medications", domain: "Nitroglycerin", ref: "8034",
    q: "Which is a contraindication to nitroglycerin under GMVEMSC 8034?",
    choices: [
      "Chest pain lasting over an hour",
      "Head injury",
      "A heart rate over 90",
      "Prior CABG surgery"
    ],
    answer: 1,
    why: "8034 lists hypersensitivity, hypotension, use of sexual enhancement drugs (Viagra, Cialis, Levitra) in the last 24 hours, taking Revatio, and head injury. Nitroglycerin's vasodilation worsens intracranial bleeding."
  },
  {
    id: "rx-12", section: "Medications", domain: "Nitroglycerin", ref: "8034",
    q: "Nitroglycerin should only be used on patients who are greater than 25 years old OR:",
    choices: [
      "Have a systolic BP over 140",
      "Have been prescribed nitroglycerin",
      "Have a history of CHF",
      "Are being transported to a cath lab"
    ],
    answer: 1,
    why: "8034's precautions read: use only on patients greater than 25 years old or who have been prescribed nitroglycerin. Side effects include transient headache, reflex tachycardia, hypotension, and postural syncope."
  },

  /* ---------- Epinephrine ---------- */
  {
    id: "rx-13", section: "Medications", domain: "Epinephrine", ref: "8017",
    q: "A 35 kg patient is in anaphylaxis. Per GMVEMSC 8017, the EpiPen dose is:",
    choices: [
      "EpiPen Jr 0.15 mg only",
      "Adult EpiPen 0.3 mg only",
      "BOTH the adult EpiPen 0.3 mg AND the EpiPen Jr 0.15 mg",
      "Two adult EpiPens 0.3 mg each"
    ],
    answer: 2,
    why: "8017 is counterintuitive and heavily tested: at 30 kg or more, give BOTH the adult EpiPen 0.3 mg and the EpiPen Jr 0.15 mg, for 0.45 mg total. Between 15 and 30 kg give the adult 0.3 mg; under 15 kg give the Jr 0.15 mg."
  },
  {
    id: "rx-14", section: "Medications", domain: "Epinephrine", ref: "8017",
    q: "Per GMVEMSC 8017, epinephrine dosing for asthma, allergies and anaphylaxis is based on:",
    choices: ["Age", "Weight", "Severity of symptoms", "Blood pressure"],
    answer: 1,
    why: "8017 and 8018 both state dosing is based on weight, not age. The protocol notes that any patient 30 kg or greater gets both auto-injectors no matter what their age."
  },
  {
    id: "rx-15", section: "Medications", domain: "Epinephrine", ref: "8017",
    q: "Per GMVEMSC 8017, may an EMT administer epinephrine for ASTHMA?",
    choices: [
      "Yes, under standing orders",
      "No - the EMR and EMT cannot treat asthma with epinephrine",
      "Yes, but only the EpiPen Jr",
      "Yes, with an MCP order"
    ],
    answer: 1,
    why: "8017 and 8018 both state the EMR and EMT cannot treat asthma with epinephrine - that indication belongs to the AEMT and Paramedic. The EMT's epinephrine indication is anaphylaxis or allergic reaction."
  },
  {
    id: "rx-16", section: "Medications", domain: "Epinephrine", ref: "8017",
    q: "An EMT gave an EpiPen for anaphylaxis 10 minutes ago and symptoms persist. Per GMVEMSC 8017, a repeat dose:",
    choices: [
      "Is a standing order for the EMT",
      "Requires medical control for the EMR/EMT",
      "Is never permitted prehospital",
      "Requires waiting a full 20 minutes"
    ],
    answer: 1,
    why: "8017's medical control row: initial dose at all levels is No, but for allergies/anaphylaxis, repeat doses by EMR/EMTs require medical control - Yes. AEMTs and paramedics do not need MCP for follow-up dosing."
  },
  {
    id: "rx-17", section: "Medications", domain: "Epinephrine", ref: "8019",
    q: "Epinephrine 1:10,000 in the GMVEMSC formulary (8019) is indicated for:",
    choices: [
      "Anaphylaxis at the EMT level",
      "V-Fib, pulseless V-Tach, asystole and PEA - paramedic only",
      "Asthma at the AEMT level",
      "Any patient with hypotension"
    ],
    answer: 1,
    why: "8019 is paramedic-only: 1 mg IV repeated every 3-5 minutes for VF, pulseless VT, asystole and PEA, plus pediatric bradycardia. The EMT's epinephrine is the auto-injector (8017) or, with medical director authorization, 1:1,000 IM (8018)."
  },

  /* ---------- Naloxone ---------- */
  {
    id: "rx-18", section: "Medications", domain: "Naloxone", ref: "8033",
    q: "What is the EMT's adult naloxone dose and route in GMVEMSC 8033?",
    choices: [
      "2 mg IV",
      "Up to 4 mg IN, half the dose per nostril",
      "0.4 mg IM",
      "4 mg IM only"
    ],
    answer: 1,
    why: "8033 gives the EMR and EMT up to 4 mg intranasal, half the dose per nostril. The AEMT and paramedic may also use 2 mg IV, or up to 4 mg IM if no IV. The vial is 2 mg in 2 ml, four in the drug bag."
  },
  {
    id: "rx-19", section: "Medications", domain: "Naloxone", ref: "8033",
    q: "Per GMVEMSC 8033, the onset of action for naloxone is:",
    choices: ["30 seconds", "Two minutes", "Five minutes", "Ten minutes"],
    answer: 1,
    why: "8033 states onset is two minutes; if there is no response two minutes after dosing, give additional doses. For pediatrics on the IN route, if respirations do not improve after 2 minutes, establish an IV and administer that way."
  },
  {
    id: "rx-20", section: "Medications", domain: "Naloxone", ref: "8033",
    q: "Which is a contraindication to naloxone in GMVEMSC 8033?",
    choices: ["Newborn patients", "Patients over 65", "Pregnancy", "Respiratory rate under 8"],
    answer: 0,
    why: "8033 lists hypersensitivity and newborn patients. Use caution in narcotic-dependent patients who may go into withdrawal, including neonates of narcotic-dependent mothers. Transport is encouraged even if the patient becomes responsive."
  },
  {
    id: "rx-21", section: "Medications", domain: "Naloxone", ref: "8038",
    q: "Per GMVEMSC 8038, ondansetron (Zofran) and naloxone:",
    choices: [
      "Should always be given together to prevent vomiting",
      "Zofran is NOT to be given prophylactically with naloxone",
      "Must be given in opposite nostrils",
      "Are interchangeable for opioid overdose"
    ],
    answer: 1,
    why: "8038 states explicitly that ondansetron is not to be given prophylactically with naloxone. It is a specific, easily missed line in the formulary."
  },

  /* ---------- Ondansetron / Oral glucose ---------- */
  {
    id: "rx-22", section: "Medications", domain: "Ondansetron", ref: "8038",
    q: "What ondansetron (Zofran) form and dose may an EMT give under GMVEMSC 8038?",
    choices: [
      "4 mg slow IV",
      "4 mg orally dissolving tablet",
      "8 mg orally dissolving tablet",
      "4 mg IM"
    ],
    answer: 1,
    why: "8038 allows the EMT, AEMT and Paramedic to give the 4 mg PO dissolving tablet. IV/IO administration is AEMT and paramedic only. For pediatrics, the EMT may give the 4 mg tablet if the patient is 12 or older."
  },
  {
    id: "rx-23", section: "Medications", domain: "Ondansetron", ref: "8038",
    q: "An unusual side effect specifically noted for ondansetron in GMVEMSC 8038 is:",
    choices: [
      "Sudden blindness of 2-3 minutes duration",
      "Permanent hearing loss",
      "Severe hypertension",
      "Bronchospasm"
    ],
    answer: 0,
    why: "8038 lists sudden blindness lasting 2-3 minutes, noting the speed of delivery may contribute to it. Other side effects are constipation or diarrhea, fever, and headache."
  },
  {
    id: "rx-24", section: "Medications", domain: "Oral Glucose", ref: "8039",
    q: "Per GMVEMSC 8039, does an EMT need medical control to give oral glucose?",
    choices: ["Yes, for all patients", "Yes, for pediatrics only", "No", "Only if BGL is above 60"],
    answer: 2,
    why: "8039's medical control row is No for both adults and pediatrics. Oral glucose is also not carried in the drug bag - it comes off the squad, so accessing it does not trigger the drug bag rule."
  },
  {
    id: "rx-25", section: "Medications", domain: "Oral Glucose", ref: "8039",
    q: "Which is a listed indication for oral glucose in GMVEMSC 8039?",
    choices: [
      "Any patient with a headache",
      "Seizures with a BGL less than 60 mg/dl, or suspicion of hypoglycemia despite the BGL reading",
      "Nausea and vomiting",
      "Suspected stroke with normal glucose"
    ],
    answer: 1,
    why: "8039 lists hypoglycemia, generalized hypothermia without arrest, altered LOC of unknown cause, and seizures with BGL under 60 (or no monitor available, or suspicion of hypoglycemia despite the reading)."
  },

  /* ---------- Scope of practice ---------- */
  {
    id: "sc-01", section: "Medications", domain: "Scope & Medical Control", ref: "2008",
    q: "Per GMVEMSC 2008, which action requires an MCP order for an EMT?",
    choices: [
      "Applying oxygen by nonrebreather",
      "Accessing the GMVEMSC Drug Bag",
      "Obtaining vital signs",
      "Applying an AED"
    ],
    answer: 1,
    why: "2008's consult section lists three things requiring MCP orders for the EMT: aspirin administration, nitroglycerin administration, and accessing the GMVEMSC Drug Bag."
  },
  {
    id: "sc-02", section: "Medications", domain: "Scope & Medical Control", ref: "8018",
    q: "Under what condition may an EMT administer epinephrine 1:1,000 IM per GMVEMSC 8018?",
    choices: [
      "Never - it is AEMT and above",
      "Only after authorization and training from their medical director",
      "Any time anaphylaxis is suspected, under standing order",
      "Only when an auto-injector is unavailable"
    ],
    answer: 1,
    why: "8018 brackets the EMT in optional-skill notation: the EMT may only administer 1:1,000 IM after authorization and training from their medical director. Braces and brackets in GMVEMSC protocols mark optional skills requiring medical director approval."
  },
  {
    id: "sc-03", section: "Medications", domain: "Scope & Medical Control", ref: "1008",
    q: "Per GMVEMSC 1008, an AEMT may intubate only when the patient is:",
    choices: ["Unresponsive", "Apneic", "Pulseless and apneic", "In respiratory distress"],
    answer: 1,
    why: "1008 restricts the AEMT to intubating apneic patients. Compare this with the EMT, who may place a rescue airway only in a patient who is both pulseless AND apneic. The distinction is a common test question."
  },
  {
    id: "sc-04", section: "Medications", domain: "Scope & Medical Control", ref: "1001",
    q: "When a situation is not addressed by the GMVEMSC standing orders, the protocol's stated approach is to:",
    choices: [
      "Default to the nearest national guideline",
      "Contact online medical direction",
      "Transport without intervention",
      "Defer to the highest-certified provider on scene"
    ],
    answer: 1,
    why: "The standing orders' introduction states online medical direction is always an acceptable approach when items are not addressed or do not align with the current situation. The document is described as supportive by design, not punitive."
  },

  /* ---------- Epinephrine IM, Atrovent and Zofran: the routes and drugs
       written in by hand on the testing summary sheet ---------- */
  {
    id: "rx-26", section: "Medications", domain: "Epinephrine", ref: "8018",
    q: "A 40 kg patient in anaphylaxis is to receive epinephrine 1:1,000 IM. Per GMVEMSC 8018, the dose is:",
    choices: ["0.15 mg IM", "0.3 mg IM", "0.5 mg IM", "1.0 mg IM"],
    answer: 2,
    why: "8018 doses by weight: 30 kg or more gets 0.5 mg IM, 15 to under 30 kg gets 0.3 mg IM, and under 15 kg gets 0.15 mg IM. May repeat at the weight-appropriate dose after 10 minutes."
  },
  {
    id: "rx-27", section: "Medications", domain: "Epinephrine", ref: "8018",
    q: "Per GMVEMSC 8018, a 20 kg pediatric patient in anaphylaxis receives epinephrine 1:1,000:",
    choices: ["0.15 mg IM", "0.3 mg IM", "0.5 mg IM", "0.01 mg/kg IV"],
    answer: 1,
    why: "At 15 kg or more but under 30 kg the IM dose is 0.3 mg. Do not confuse the 1:1,000 IM ladder (0.15 / 0.3 / 0.5 mg) with the auto-injector rule, where 30 kg or more gets BOTH pens."
  },
  {
    id: "rx-28", section: "Medications", domain: "Epinephrine", ref: "8018",
    q: "What are the listed contraindications to epinephrine in the GMVEMSC formulary?",
    choices: [
      "Hypertension and tachycardia",
      "Age over 65",
      "None in the emergency setting",
      "Known cardiac history"
    ],
    answer: 2,
    why: "8017, 8018 and 8019 all list contraindications as 'None in the emergency setting.' Side effects are real - tachycardia, hypertension, dysrhythmias, and increased myocardial oxygen demand - but they do not stop you treating anaphylaxis."
  },
  {
    id: "rx-29", section: "Medications", domain: "Ipratropium", ref: "8023",
    q: "What are the contraindications to ipratropium (Atrovent) in GMVEMSC 8023?",
    choices: [
      "Narrow-angle glaucoma and lactation",
      "None in the emergency setting, though use caution in narrow-angle glaucoma and lactating mothers",
      "Any patient over 65",
      "Tachycardia above 120"
    ],
    answer: 1,
    why: "8023 lists no contraindications in the emergency setting, but advises caution in patients with narrow-angle glaucoma and in lactating mothers. Note the distinction between a contraindication and a precaution - the test uses both words."
  },
  {
    id: "rx-30", section: "Medications", domain: "Ipratropium", ref: "8023",
    q: "How does ipratropium (Atrovent) produce bronchodilation?",
    choices: [
      "Beta-2 agonist effect",
      "Anticholinergic effect",
      "Direct smooth muscle relaxation",
      "Antihistamine effect"
    ],
    answer: 1,
    why: "8023 describes the therapeutic action as bronchodilation by anticholinergic effect. Albuterol (8002) is the bronchodilator working through beta stimulation - the two are combined on the first treatment because the mechanisms differ."
  },
  {
    id: "rx-31", section: "Medications", domain: "Ondansetron", ref: "8038",
    q: "What is the indication for ondansetron (Zofran) in GMVEMSC 8038?",
    choices: [
      "Abdominal pain of any cause",
      "Nausea or active vomiting",
      "Vertigo",
      "Prophylaxis before any medication administration"
    ],
    answer: 1,
    why: "8038's indication is simply nausea or active vomiting. Its listed protocol is 4001 Abdominal Pain. Remember it is specifically NOT to be given prophylactically alongside naloxone."
  },
  {
    id: "rx-32", section: "Medications", domain: "Ondansetron", ref: "8038",
    q: "Per GMVEMSC 8038, for a patient who is ACTIVELY vomiting, the preferred route (AEMT/Paramedic) is:",
    choices: [
      "The orally dissolving tablet",
      "Slow IV/IO, since the patient may also need hydration",
      "Intranasal",
      "Intramuscular"
    ],
    answer: 1,
    why: "8038 names 4 mg slow IV/IO the preferred route for active vomiting, because the patient may need hydration as well. An actively vomiting patient is also unlikely to keep a dissolving tablet down."
  }
];
