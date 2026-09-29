/* GMVEMSC EMT Protocol question bank - Mega Code, Alerts, and Airway.
   Every item cites the GMVEMSC 2026 Standing Orders section it comes from.
   Source: 2026 GMVEMSC Protocol (last update 07/01/2026) and the
   2026 Standing Orders Training Manual skill evaluation sheets. */

const Q_MEGACODE = [
  /* ---------- Mega Code: CPR & AED ---------- */
  {
    id: "mc-01", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Per GMVEMSC 2002, what is the compression-to-ventilation ratio for a child with TWO OR MORE rescuers and no advanced airway?",
    choices: ["30:2", "15:2", "3:1", "5:1"],
    answer: 1,
    why: "Protocol 2002 lists children and infants as 30:2 for a single rescuer but 15:2 once there are two or more rescuers. Adults stay at 30:2 regardless of rescuer count, and newborns are 3:1."
  },
  {
    id: "mc-02", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "With an advanced airway in place, how often is an adult ventilated under GMVEMSC 2002?",
    choices: ["1 breath every 2-3 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "2 breaths every 30 compressions"],
    answer: 1,
    why: "2002 specifies continuous compressions at 100-120/min with 1 breath every 6 seconds for adults. Pediatric patients with an advanced airway get 1 breath every 2-3 seconds, and newborns 40-60 breaths per minute."
  },
  {
    id: "mc-03", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Without an advanced airway, what is the rescue breathing rate for an adult with a pulse?",
    choices: ["1 breath every 2-3 seconds", "1 breath every 5-6 seconds", "1 breath every 10 seconds", "1 breath every 15 seconds"],
    answer: 1,
    why: "2002 lists adult rescue breathing as 1 breath every 5-6 seconds (10-12/min). Children and infants get 1 every 2-3 seconds (20-30/min). Note this differs from the 1-every-6-second rate used once an advanced airway is in place."
  },
  {
    id: "mc-04", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "GMVEMSC 2002 sets adult compression depth at:",
    choices: ["1 to 1.5 inches", "At least 2 inches", "One third the depth of the chest, about 1.5 inches", "3 inches"],
    answer: 1,
    why: "At least 2 inches for adults. Children are one third the chest depth (about 2 inches) and infants one third the chest depth (about 1.5 inches). Compression rate is 100-120/min for adults and children, 120/min for infants."
  },
  {
    id: "mc-05", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Per the AED skill evaluation sheet, what do you do FIRST on an UNWITNESSED cardiac arrest?",
    choices: [
      "Defibrillate immediately once pads are on",
      "Perform CPR for 2 minutes prior to defibrillation",
      "Perform CPR for 5 minutes prior to defibrillation",
      "Check a blood glucose level"
    ],
    answer: 1,
    why: "The AED skill sheet splits these: witnessed arrest, defibrillate immediately; unwitnessed arrest, 2 minutes of CPR first. Protocol 2002 likewise directs attaching and using the AED after at least 2 minutes of CPR."
  },
  {
    id: "mc-06", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Your AED is programmed differently than current AHA guidelines. Per GMVEMSC 2002, you should:",
    choices: [
      "Override the device to match AHA guidelines",
      "Utilize the AED as it is programmed",
      "Switch to manual defibrillation",
      "Contact MCP before each shock"
    ],
    answer: 1,
    why: "2002 states plainly: 'Utilize AED as it is programmed. (Even if it is not to AHA guidelines).' Follow the device, then repeat cycles of defibrillation and CPR every 2 minutes."
  },
  {
    id: "mc-07", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Interruptions in chest compressions should be limited to less than:",
    choices: ["5 seconds", "10 seconds", "15 seconds", "30 seconds"],
    answer: 1,
    why: "2002 requires interruptions be held under 10 seconds, including before and after each shock. Resume compressions immediately after defibrillation without a pulse check, and change compressors every 2 minutes."
  },
  {
    id: "mc-08", section: "Mega Code", domain: "CPR & AED", ref: "2002",
    q: "Which Hs and Ts is identified in GMVEMSC 2002 as within the EMT's level of consideration?",
    choices: ["Tension pneumothorax", "Hypoxia", "Cardiac tamponade", "Thrombosis"],
    answer: 1,
    why: "2002 tiers the Hs and Ts by certification level. Hypoxia and hypothermia sit at the EMR/EMT level; toxins, hypovolemia and hydrogen ion at AEMT; tension pneumothorax, tamponade and thrombosis at paramedic."
  },
  {
    id: "mc-09", section: "Mega Code", domain: "Resuscitation", ref: "2001",
    q: "Under GMVEMSC 2001, a patient with return of spontaneous circulation (ROSC) should be transported to an interventional facility if transport time is less than:",
    choices: ["10 minutes", "20 minutes", "30 minutes", "45 minutes"],
    answer: 2,
    why: "2001 sets the threshold at 30 minutes for ROSC patients and for a documented STEMI with witnessed arrest. Beyond 30 minutes, consider aeromedical transport."
  },
  {
    id: "mc-10", section: "Mega Code", domain: "Resuscitation", ref: "2001",
    q: "Which statement about field termination of resuscitation is correct under GMVEMSC 2001?",
    choices: [
      "It may be applied to any patient after 20 minutes of resuscitation",
      "It does not apply to pediatric patients and requires MCP approval",
      "An EMT may terminate after three unsuccessful AED analyses",
      "It applies only to patients in ventricular fibrillation"
    ],
    answer: 1,
    why: "2001 states field termination DOES NOT APPLY TO PEDIATRIC PATIENTS and requires MCP approval. The criteria are 18 or older, asystole or PEA with a rate under 40, not hypothermic, advanced airway in place, vascular access in place, and no signs of neurological function."
  },
  {
    id: "mc-11", section: "Mega Code", domain: "Resuscitation", ref: "2001",
    q: "Per GMVEMSC 2001, which finding suggests the patient will require PROLONGED resuscitation efforts?",
    choices: [
      "Asystole with a rate of zero",
      "An upward trending or persistent EtCO2 of 20 mmHg or greater",
      "A capillary refill time over 4 seconds",
      "Fixed and dilated pupils"
    ],
    answer: 1,
    why: "2001 identifies two prolonged-effort indicators: PEA with a rate greater than 40, and an upward trending or persistent EtCO2 at or above 20 mmHg. These are signs of a viable patient, not reasons to stop."
  },
  {
    id: "mc-12", section: "Mega Code", domain: "Resuscitation", ref: "2001",
    q: "Per GMVEMSC 2001, where does a cardiac arrest patient have the BEST chance of resuscitation?",
    choices: [
      "In the ambulance during rapid transport",
      "At the scene, with high quality CPR and code management",
      "At the closest emergency department",
      "Wherever ALS first makes patient contact"
    ],
    answer: 1,
    why: "2001 is explicit that the best chance is at the scene, because CPR quality diminishes during transport. All providers should prioritize on-scene resuscitation regardless of age unless clinically indicated otherwise."
  },
  {
    id: "mc-13", section: "Mega Code", domain: "Resuscitation", ref: "2002",
    q: "Per GMVEMSC 2002, cardiac arrests should NOT be transported unless one of several conditions is met. Which is one of them?",
    choices: [
      "The family requests transport",
      "Return of spontaneous circulation (ROSC)",
      "The patient has been down more than 10 minutes",
      "An AED has been applied"
    ],
    answer: 1,
    why: "2002 lists: at least one defibrillation delivered when indicated, ROSC, the airway cannot be secured, vascular access is not established, or MCP declines to authorize field termination. ROSC is one of them."
  },
  {
    id: "mc-14", section: "Mega Code", domain: "Resuscitation", ref: "2002",
    q: "GMVEMSC 2002 directs which airway maneuver for trauma patients in arrest?",
    choices: ["Head-tilt, chin-lift", "Jaw-thrust", "Hyperextension", "Sniffing position"],
    answer: 1,
    why: "2002's clinical pearls specify the jaw-thrust method to open the airway on trauma patients, along with full chest recoil, compressor changes every 2 minutes, and manual uterine displacement for pregnant patients in arrest."
  },
  {
    id: "mc-15", section: "Mega Code", domain: "Resuscitation", ref: "2002",
    q: "An EMT arrives at a cardiac arrest and no higher-level provider is available. Per GMVEMSC 2001, the EMT should:",
    choices: [
      "Terminate resuscitation after 20 minutes",
      "Continue resuscitation and transport",
      "Wait on scene for ALS regardless of time",
      "Contact MCP for termination authority"
    ],
    answer: 1,
    why: "2001 states the EMT continues resuscitation until handoff to a higher-level provider, and if no higher-level provider is available, then transport. Field termination is not in the EMT's scope."
  },

  /* ---------- Alerts ---------- */
  {
    id: "al-01", section: "Mega Code", domain: "Alerts", ref: "2009",
    q: "What 12-lead finding meets the GMVEMSC Cardiac Alert inclusionary criteria?",
    choices: [
      "ST elevation greater than 1 mm in 2 contiguous leads",
      "ST elevation greater than 2 mm in any single lead",
      "A new left bundle branch block",
      "T wave inversion in the lateral leads"
    ],
    answer: 0,
    why: "Protocol 2009 defines evidence of AMI as greater than 1 mm ST elevation in 2 contiguous leads on a diagnostic 12-lead. The purpose of the program is to cut door-to-balloon time."
  },
  {
    id: "al-02", section: "Mega Code", domain: "Alerts", ref: "2009",
    q: "Which finding EXCLUDES a patient from the GMVEMSC Cardiac Alert Program?",
    choices: [
      "Chest pain radiating to the jaw",
      "A left bundle branch block with QRS greater than 120 milliseconds",
      "Age over 70",
      "A history of prior myocardial infarction"
    ],
    answer: 1,
    why: "2009 lists two exclusions: left bundle branch block (QRS greater than 120 ms) and a pacemaker rhythm. Both obscure the ST segment analysis the alert depends on."
  },
  {
    id: "al-03", section: "Mega Code", domain: "Alerts", ref: "2009",
    q: "Who actually activates a Cardiac Alert under GMVEMSC 2009?",
    choices: [
      "The EMT on scene",
      "The physician, based on provider impression and 12-lead interpretation",
      "The transporting agency's medical director",
      "The charge nurse at the receiving facility"
    ],
    answer: 1,
    why: "2009 has providers make early notification and speak directly with the physician; the physician activates the alert. Acquire serial 12-leads en route, recommended every 5 minutes or with any change in presentation."
  },
  {
    id: "al-04", section: "Mega Code", domain: "Alerts", ref: "4017",
    q: "Per GMVEMSC 4017, a Stroke Alert is called when:",
    choices: [
      "All three Cincinnati findings are abnormal and onset is under 3 hours",
      "One or more Cincinnati findings are abnormal and it is less than 24 hours since last seen normal",
      "The patient has any facial droop regardless of time",
      "The blood glucose is normal and speech is slurred"
    ],
    answer: 1,
    why: "4017 sets the threshold at one or more abnormal CPSS findings with less than 24 hours since the patient was last seen normal, then transport to the closest appropriate Stroke Center."
  },
  {
    id: "al-05", section: "Mega Code", domain: "Alerts", ref: "4017",
    q: "When reporting 'last known well' for a stroke patient, GMVEMSC 4017 requires you to:",
    choices: [
      "Estimate in minutes, such as '20 minutes ago'",
      "State the actual clock time",
      "Report only the time of your arrival",
      "Document it as 'unknown' unless a witness is present"
    ],
    answer: 1,
    why: "4017 is specific: state actual clock time, do not say '20 minutes ago.' Relative times get garbled through handoffs and can cost the patient thrombolytic eligibility."
  },
  {
    id: "al-06", section: "Mega Code", domain: "Alerts", ref: "4017",
    q: "Which finding is a key indicator of a large vessel occlusion (LVO) in GMVEMSC 4017?",
    choices: [
      "Isolated facial droop",
      "Gaze deviation or visual neglect",
      "A headache rated 10 out of 10",
      "Bilateral arm weakness"
    ],
    answer: 1,
    why: "4017 lists gaze deviation, visual neglect, and abnormal eye movement as key LVO findings, along with balance or gait difficulty, visual field cuts, aphasia, and denial/neglect. Abnormal findings in all three CPSS categories also raise LVO probability."
  },
  {
    id: "al-07", section: "Mega Code", domain: "Alerts", ref: "4017",
    q: "Per GMVEMSC 4017, a stroke patient with a SpO2 of 97% should receive:",
    choices: [
      "Oxygen at 15 LPM via nonrebreather",
      "Oxygen at 2 LPM via nasal cannula",
      "No oxygen",
      "CPAP at 10 cm H2O"
    ],
    answer: 2,
    why: "4017 directs oxygen via nasal cannula titrated to 94% only when SpO2 is below 94%. A patient above 94% should not get any oxygen. The same titration rule appears in 2008 for chest pain."
  },
  {
    id: "al-08", section: "Mega Code", domain: "Alerts", ref: "3018",
    q: "Under the GMVEMSC Trauma Triage Guidelines, how is patient age categorized?",
    choices: [
      "Under 18 pediatric, 18-65 adult, over 65 geriatric",
      "Under 16 pediatric, 16-69 adult, over 69 geriatric",
      "Under 15 pediatric, 15-64 adult, over 64 geriatric",
      "Under 12 pediatric, 12-70 adult, over 70 geriatric"
    ],
    answer: 1,
    why: "3018 follows the State of Ohio trauma triage age brackets: less than 16 is pediatric, 16 through 69 is adult, and greater than 69 is geriatric. Geriatric patients have their own lowered physiologic thresholds."
  },
  {
    id: "al-09", section: "Mega Code", domain: "Alerts", ref: "3018",
    q: "Which is an ADULT physiological trauma triage criterion in GMVEMSC 3018?",
    choices: [
      "Respirations less than 10 or greater than 29",
      "Respirations less than 12 or greater than 24",
      "Heart rate greater than 100",
      "SBP less than 110"
    ],
    answer: 0,
    why: "3018 lists adult physiologic criteria including GCS 13 or less, LOC over 5 minutes, respirations under 10 or over 29, need for ventilatory support, pulse over 120 with evidence of hemorrhagic shock, and SBP under 90 or absent radial pulse with a carotid pulse present."
  },
  {
    id: "al-10", section: "Mega Code", domain: "Alerts", ref: "3018",
    q: "Per GMVEMSC 3018, which anatomical finding meets trauma criteria?",
    choices: [
      "A closed forearm fracture",
      "Amputation proximal to the wrist or ankle",
      "A 5% total body surface area first degree burn",
      "An isolated shoulder dislocation"
    ],
    answer: 1,
    why: "3018's anatomical criteria include amputation proximal to the wrist or ankle, penetrating trauma to head/neck/torso, visible crush injuries, flail chest, pelvic fracture evidence, fractures of two or more proximal long bones, and 2nd or 3rd degree burns over 10% BSA."
  },
  {
    id: "al-11", section: "Mega Code", domain: "Alerts", ref: "3018",
    q: "Per GMVEMSC 3018, air medical transport is NOT appropriate for:",
    choices: ["Rural trauma patients", "Cardiac arrest", "Pediatric trauma patients", "Burn patients"],
    answer: 1,
    why: "3018 states cardiac arrest is not appropriate for air transport, and that prolonged scene delays waiting on aeromedical should be avoided. In the rural environment, direct air transfer of trauma patients may be appropriate."
  },

  /* ---------- Airway & Ventilation ---------- */
  {
    id: "aw-01", section: "Airway & Trauma", domain: "Airway", ref: "1008",
    q: "Under GMVEMSC 1008, an EMT may place a rescue airway (King or LMA) in which patient?",
    choices: [
      "Any patient who tolerates an OPA",
      "A pulseless, apneic patient only",
      "Any unresponsive patient without a gag reflex",
      "Any patient with a GCS under 8"
    ],
    answer: 1,
    why: "1008 and the supraglottic airway skill sheet both restrict the EMT to pulseless AND apneic patients. This is one of the most commonly tested scope limits in the region. An AEMT may intubate only if the patient is apneic."
  },
  {
    id: "aw-02", section: "Airway & Trauma", domain: "Airway", ref: "1009",
    q: "How many methods must be used to confirm an advanced airway under GMVEMSC 1009?",
    choices: ["Two methods", "Three methods", "At least five methods", "Only waveform capnography"],
    answer: 2,
    why: "1009 requires waveform capnography PLUS at least 4 other methods, for at least 5 total: continuous EtCO2, auscultation of epigastrium/chest/mid-axillary/epigastrium again, chest rise and fall, condensation in the tube, and patient appearance."
  },
  {
    id: "aw-03", section: "Airway & Trauma", domain: "Airway", ref: "1009",
    q: "Per GMVEMSC 1009, continuous waveform capnography is:",
    choices: [
      "Optional if breath sounds are clear",
      "Mandatory for advanced airway confirmation",
      "Required only for intubated patients over 12",
      "Used only when colorimetric devices are unavailable"
    ],
    answer: 1,
    why: "1009 makes continuous EtCO2 detection mandatory for advanced airway confirmation, says EtCO2 should be used on EVERY advanced airway, and requires maintaining it until care is transferred to ED staff."
  },
  {
    id: "aw-04", section: "Airway & Trauma", domain: "Airway", ref: "1009",
    q: "The D.O.P.E. mnemonic in GMVEMSC 1009 stands for:",
    choices: [
      "Displacement, Obstruction, Pneumothorax, Equipment failure",
      "Desaturation, Oxygenation, Pressure, Exhalation",
      "Depth, Oxygen, Placement, EtCO2",
      "Dislodged, Occluded, Positioned, Edema"
    ],
    answer: 0,
    why: "1009 uses D.O.P.E. for a deteriorating patient with an advanced airway: Displacement of the tube, Obstruction by secretions or kinking, Pneumothorax, and Equipment failure. Disconnect and bag manually to test for equipment failure."
  },
  {
    id: "aw-05", section: "Airway & Trauma", domain: "Airway", ref: "1009",
    q: "Per GMVEMSC 1009, a colorimetric End Tidal CO2 detector may be used for no more than:",
    choices: ["30 minutes", "One hour", "Two hours", "Four hours"],
    answer: 2,
    why: "1009 caps colorimetric device use at two hours. Secretions and emesis can ruin it, large amounts of carbonated beverage in the stomach can give a false positive, and in cardiac arrest a lack of color change requires other confirmation methods."
  },
  {
    id: "aw-06", section: "Airway & Trauma", domain: "Airway", ref: "1007",
    q: "Per GMVEMSC 1007, what oxygen flow rate is used for a patient with COPD who is NOT in severe distress?",
    choices: ["2 LPM by nasal cannula", "4-6 LPM by nasal cannula", "8-10 LPM by nasal cannula", "12-15 LPM by nonrebreather"],
    answer: 0,
    why: "1007 lists 2 LPM NC for COPD or as prescribed, 4-6 LPM NC for other patients, and 12-15 LPM NRB for any patient with increased respiratory rate or effort INCLUDING COPD. A COPD patient in severe distress gets the same devices and flows as anyone else."
  },
  {
    id: "aw-07", section: "Airway & Trauma", domain: "Airway", ref: "1007",
    q: "Nebulized medications should be run with oxygen at what flow rate per GMVEMSC 1007?",
    choices: ["2-4 LPM", "6 LPM", "8-10 LPM", "12-15 LPM"],
    answer: 2,
    why: "1007, 8002 (Albuterol) and 8023 (Ipratropium) all specify nebulization with oxygen at 8-10 LPM. When nebulizing in line with a BVM, the bag gets its own source at 12-15 LPM - preferably two oxygen sources."
  },
  {
    id: "aw-08", section: "Airway & Trauma", domain: "Airway", ref: "1007",
    q: "A 14-month-old has respiratory distress with nasal congestion and rhonchi, and no history of wheezing or breathing treatments. Per GMVEMSC 1007, you should first:",
    choices: [
      "Administer a nebulized albuterol treatment",
      "Perform nasopharyngeal suctioning in both nares for 3-5 seconds",
      "Insert a nasopharyngeal airway",
      "Begin BVM ventilation"
    ],
    answer: 1,
    why: "1007 directs nasopharyngeal suctioning of both nares for 3-5 seconds in patients under 2 with congestion and no reactive airway history, repeated if distress continues. Prolonged or repeated suctioning can cause hypoxia and bradycardia."
  },
  {
    id: "aw-09", section: "Airway & Trauma", domain: "Airway", ref: "1007",
    q: "Per the GMVEMSC oxygen administration skill sheet, a nonrebreather mask is set to:",
    choices: ["4-6 LPM", "8-10 LPM", "12-15 LPM", "25 LPM"],
    answer: 2,
    why: "The skill sheet requires adjusting liter flow to 12-15 LPM for the NRB and prefilling the reservoir before application. Nasal cannula is 4-6 LPM, and the BVM reservoir is set at 12-15 LPM."
  },
  {
    id: "aw-10", section: "Airway & Trauma", domain: "Airway", ref: "1009",
    q: "If signs of cerebral herniation are present, GMVEMSC directs you to ventilate an adult at:",
    choices: [
      "8 per minute to an EtCO2 of 45 mmHg",
      "20 per minute to an EtCO2 of 30 mmHg",
      "30 per minute to an EtCO2 of 20 mmHg",
      "12 per minute with no EtCO2 target"
    ],
    answer: 1,
    why: "1009 and 4017 both specify approximately 20 ventilations per minute targeting an EtCO2 of about 30 mmHg when herniation signs are present. Never ventilate at less than 8 per minute."
  },
  {
    id: "aw-11", section: "Airway & Trauma", domain: "Airway", ref: "Training Manual",
    q: "Per the supraglottic airway skill sheet, after inserting the device you verify placement by auscultation and then confirm with:",
    choices: [
      "Pulse oximetry alone",
      "A secondary device such as capnography, capnometry, or a colorimetric device",
      "Chest x-ray on arrival",
      "Palpation of the cuff in the neck"
    ],
    answer: 1,
    why: "The skill sheet requires auscultation bilaterally over the lungs and over the epigastrium, then secondary confirmation with capnography, capnometry, or a colorimetric device, then securing the device and ventilating while watching capnography and pulse oximetry."
  },
  {
    id: "aw-12", section: "Airway & Trauma", domain: "Airway", ref: "1008",
    q: "Per GMVEMSC 1008, how often must advanced airway placement be reassessed?",
    choices: [
      "Once on arrival at the hospital",
      "Every 5 minutes",
      "Every time the patient is moved",
      "Only if the EtCO2 waveform changes"
    ],
    answer: 2,
    why: "1008 and 1009 both require reassessment every time the patient is moved, at a minimum with EtCO2 and lung sounds. Movement from floor to cot to squad is when tubes get displaced."
  }
];
