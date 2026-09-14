/* GMVEMSC EMT Protocol question bank - CPAP, trauma skills, and miscellaneous skills.
   Drawn from the 2026 Standing Orders and the skill evaluation sheets in the
   2026 Standing Orders Training Manual. */

const Q_SKILLS = [
  /* ---------- CPAP ---------- */
  {
    id: "cp-01", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "Per the GMVEMSC CPAP skill sheet, what is the minimum systolic blood pressure required before applying CPAP?",
    choices: ["90 systolic", "100 systolic", "110 systolic", "120 systolic"],
    answer: 1,
    why: "The skill sheet requires assuring an adequate blood pressure of 100 systolic during patient preparation, and lists hypotension with a systolic under 100 as a contraindication."
  },
  {
    id: "cp-02", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "What is the minimum age for CPAP under the GMVEMSC skill sheet?",
    choices: ["12 years or older", "14 years or older", "16 years or older", "18 years or older"],
    answer: 2,
    why: "The contraindication list states the patient must be age 16 or older. This mirrors the age cutoff used for other adult-only interventions in the region, such as Sedate to Intubate."
  },
  {
    id: "cp-03", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "Per the GMVEMSC CPAP skill sheet, treatment MUST end at what pressure?",
    choices: ["5 cm H2O", "7.5 cm H2O", "10 cm H2O", "15 cm H2O"],
    answer: 2,
    why: "The sheet allows starting at 5 cm H2O but requires ending at 10 cm H2O for treatment. 'Sets device parameters, if applicable (end at 10 cm H2O)' is a graded step."
  },
  {
    id: "cp-04", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "Which of the following is an INDICATION for CPAP on the GMVEMSC skill sheet?",
    choices: ["Closed head injury", "Congestive heart failure", "Cardiogenic shock", "Nausea and vomiting"],
    answer: 1,
    why: "The four listed indications are asthma, congestive heart failure, pulmonary edema, and COPD. Closed head injury, cardiogenic shock, and nausea/vomiting all appear on the contraindication list."
  },
  {
    id: "cp-05", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "Which is a CONTRAINDICATION to CPAP on the GMVEMSC skill sheet?",
    choices: ["Wheezing", "Suspected pneumothorax", "A respiratory rate of 28", "SpO2 of 90%"],
    answer: 1,
    why: "Suspected pneumothorax is on the contraindication list, along with penetrating chest trauma, facial anomalies/trauma/burns, closed head injury, active upper GI bleeding or recent gastric surgery, cardiogenic shock, nausea/vomiting, and inability to sit up."
  },
  {
    id: "cp-06", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "A patient in respiratory arrest with agonal respirations should receive:",
    choices: [
      "CPAP starting at 5 cm H2O",
      "CPAP at 10 cm H2O immediately",
      "BVM ventilation - CPAP is contraindicated",
      "CPAP with an OPA in place"
    ],
    answer: 2,
    why: "Respiratory arrest or agonal respiration is an explicit contraindication, as is being unconscious, unresponsive, unable to protect the airway, or unable to speak. CPAP requires a patient who can breathe and cooperate."
  },
  {
    id: "cp-07", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "What SpO2 target does the GMVEMSC CPAP skill sheet list as a desired effect?",
    choices: ["Greater than 88%", "Greater than 92%", "Greater than 94%", "100%"],
    answer: 1,
    why: "The reassessment section lists SpO2 greater than 92%, along with decreased ventilatory distress, decreased adventitious lung sounds, and absence of reactions such as barotrauma or pneumothorax."
  },
  {
    id: "cp-08", section: "Airway & Trauma", domain: "CPAP", ref: "Skill Sheet p7",
    q: "When placing the CPAP mask on a patient who already has EtCO2 monitoring, you should:",
    choices: [
      "Remove the EtCO2 before applying the mask",
      "Leave the EtCO2 in place",
      "Switch to colorimetric EtCO2",
      "Discontinue EtCO2 until the patient stabilizes"
    ],
    answer: 1,
    why: "The skill sheet step reads: 'Places mask over patients mouth and nose (leave EtCO2 in place, if applicable).' Capnography remains useful for trending the patient's response to CPAP."
  },
  {
    id: "cp-09", section: "Airway & Trauma", domain: "CPAP", ref: "4013",
    q: "Per GMVEMSC 4013, in pulmonary edema CPAP should be used:",
    choices: [
      "Only after three doses of nitroglycerin",
      "Prior to the initiation of drug therapy",
      "Only if nitroglycerin is contraindicated",
      "Only with MCP approval"
    ],
    answer: 1,
    why: "4013 states CPAP use is encouraged PRIOR to the initiation of drug therapy in pulmonary edema. It also notes albuterol and ipratropium may be administered nebulized in line with CPAP where indicated."
  },
  {
    id: "cp-10", section: "Airway & Trauma", domain: "CPAP", ref: "1007",
    q: "Per GMVEMSC 1007, CPAP is best described as:",
    choices: [
      "An advanced airway",
      "A form of non-invasive ventilation that may avoid the need for intubation",
      "A replacement for the nonrebreather mask",
      "A method of oxygen delivery for cardiac arrest"
    ],
    answer: 1,
    why: "1007's clinical pearls call CPAP and BiPAP forms of non-invasive ventilation - aggressive ventilatory support that avoids or eliminates the need for intubation."
  },

  /* ---------- Tourniquet & hemorrhage ---------- */
  {
    id: "tq-01", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "Per the GMVEMSC tourniquet skill sheet, what is the indication for tourniquet use?",
    choices: [
      "Any bleeding from an extremity",
      "Uncontrollable bleeding after the application of direct pressure",
      "Any amputation",
      "Bleeding that soaks one dressing"
    ],
    answer: 1,
    why: "The sheet lists the indication as uncontrollable bleeding after the application of direct pressure. Apply firm direct pressure first; if bleeding fails to slow or stop, go to the tourniquet."
  },
  {
    id: "tq-02", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "How tight should a tourniquet band be per the GMVEMSC application guidance?",
    choices: [
      "Snug enough to slow the bleeding",
      "Tight enough that the tips of 3 fingers cannot slide under the band",
      "Tight enough to leave a visible indentation",
      "As tight as the patient can tolerate"
    ],
    answer: 1,
    why: "The application guide states the band should be tight enough that the tips of 3 fingers cannot slide under it. Then twist the rod until bleeding stops and secure the rod in the clips."
  },
  {
    id: "tq-03", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "Where should a tourniquet be placed on the limb?",
    choices: [
      "Directly over the wound",
      "As proximal to the torso as possible",
      "Two inches distal to the wound",
      "Over the nearest joint for stability"
    ],
    answer: 1,
    why: "Route the band around the limb as proximal as possible to the torso. Never place a tourniquet over a joint such as a knee or elbow, and never over items in clothing."
  },
  {
    id: "tq-04", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "Bleeding continues and a distal pulse is still present after your tourniquet is applied. You should:",
    choices: [
      "Loosen and reapply the tourniquet",
      "Tighten the band further, or apply a second tourniquet side-by-side with the first",
      "Remove it and return to direct pressure",
      "Elevate the extremity above the heart"
    ],
    answer: 1,
    why: "The guide directs tightening the band or applying a second tourniquet adjacent to the first, placed side-by-side with the rods not interfering with each other. A second is often needed on a larger limb."
  },
  {
    id: "tq-05", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "After securing the tourniquet rod in the clips, the GMVEMSC skill sheet requires you to:",
    choices: [
      "Cover the tourniquet with a bandage",
      "Record the time of application on the time strap",
      "Recheck it every 10 minutes and loosen if needed",
      "Document the estimated blood loss only"
    ],
    answer: 1,
    why: "Clip the rod, secure with the time strap, and record the time of application with a marker on the strap. The sheet also requires preventing heat loss and indicating the need for immediate transport."
  },
  {
    id: "tq-06", section: "Airway & Trauma", domain: "Hemorrhage Control", ref: "Skill Sheet p47",
    q: "What potential complication does the GMVEMSC tourniquet skill sheet list?",
    choices: ["Severe tissue damage", "Hypothermia", "Compartment syndrome only", "Air embolism"],
    answer: 0,
    why: "The sheet lists severe tissue damage as the potential complication the candidate must state. It also requires listing indications and required equipment - bandages, tourniquet, blankets, and oxygen."
  },

  /* ---------- Spinal Motion Restriction ---------- */
  {
    id: "smr-01", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "Per GMVEMSC 3017, a patient with PENETRATING trauma requires:",
    choices: [
      "Full spinal motion restriction with collar and board",
      "A cervical collar only",
      "Neither a cervical collar nor a backboard",
      "A vacuum splint"
    ],
    answer: 2,
    why: "3017 states patients with penetrating trauma do not need immobilization with either a cervical collar or backboard, and that delays in transport place them at greater risk."
  },
  {
    id: "smr-02", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "Which patient requires FULL spinal motion restriction (C-collar AND a spinal restriction device) under GMVEMSC 3017?",
    choices: [
      "An alert patient with a GCS of 15 and midline neck tenderness",
      "A patient with an altered level of consciousness after a fall",
      "A patient with a gunshot wound to the abdomen",
      "An alert patient involved in a high speed MVC with no complaints"
    ],
    answer: 1,
    why: "3017 requires full immobilization for clinical indications of spinal injury and/or altered level of consciousness, GCS under 15 including confusion and intoxication, neurologic deficits, and patients under 3 with a GCS under 15."
  },
  {
    id: "smr-03", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "An alert patient with a GCS of 15 has neck pain after a fall from 12 feet. Per GMVEMSC 3017, this patient should get:",
    choices: [
      "No spinal precautions",
      "A C-collar and be moved in-line as a unit to the cot, without a backboard",
      "Full immobilization on a long spine board",
      "A KED for extrication then no further restriction"
    ],
    answer: 1,
    why: "3017's middle tier covers GCS 15 patients with neck pain, midline tenderness, pain on motion, or a high risk mechanism (high speed MVC, fall over 10 feet, axial loading). They get a collar and careful in-line movement - no backboard."
  },
  {
    id: "smr-04", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "An immobilized patient needs intubation. Per GMVEMSC 3017, the cervical collar:",
    choices: [
      "Must remain in place throughout",
      "May be removed during the intervention with in-line stabilization maintained, then reapplied",
      "Should be replaced with a KED",
      "May be removed permanently once the airway is secured"
    ],
    answer: 1,
    why: "3017 allows collar removal during airway or ventilatory intervention as long as in-line stabilization is maintained, and requires reapplication once the intervention is accomplished or abandoned."
  },
  {
    id: "smr-05", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "Per GMVEMSC 3017, patients greater than 69 years old should be:",
    choices: [
      "Exempted from spinal restriction due to fragility",
      "Considered high risk, leaning toward applying a cervical collar",
      "Always fully immobilized on a long board",
      "Assessed the same as any adult patient"
    ],
    answer: 1,
    why: "3017 classes patients over 69 as high risk for spinal injury requiring closer assessment, and says to lean toward applying a cervical collar. A patient meeting Trauma Alert criteria should get a collar at minimum."
  },
  {
    id: "smr-06", section: "Miscellaneous Skills", domain: "Spinal Motion Restriction", ref: "3017",
    q: "A football player with a suspected spinal injury requires transport. Per GMVEMSC 3017, protective equipment should be:",
    choices: [
      "Left in place and removed at the hospital",
      "Removed prior to transport to an emergency facility",
      "Removed only if the patient is in arrest",
      "Cut away only if the airway is compromised"
    ],
    answer: 1,
    why: "3017 states that in equipment intensive sports such as football, hockey and lacrosse, the protective equipment shall be removed prior to transport. Helmets that prevent effective SMR or airway management should be removed."
  },

  /* ---------- 12-Lead, EtCO2, glucometer, misc ---------- */
  {
    id: "ms-01", section: "Miscellaneous Skills", domain: "12-Lead EKG", ref: "Skill Sheet p33",
    q: "Per the GMVEMSC 12-lead acquisition skill sheet, all ten leads must be placed within:",
    choices: ["30 seconds", "One minute", "Two minutes", "Five minutes"],
    answer: 2,
    why: "The skill sheet grades speed explicitly: all ten leads must be placed within two minutes. It also grades limb and precordial lead placement with no deviation, and hair removal."
  },
  {
    id: "ms-02", section: "Miscellaneous Skills", domain: "12-Lead EKG", ref: "Skill Sheet p33",
    q: "The 12-lead skill sheet identifies a negative complex in which lead as a 'test' for correct lead placement?",
    choices: ["Lead II", "aVR", "V1", "Lead I"],
    answer: 1,
    why: "A negative complex in aVR is the quick check that the limb leads are on correctly. A positive aVR usually means reversed limb leads."
  },
  {
    id: "ms-03", section: "Miscellaneous Skills", domain: "12-Lead EKG", ref: "Skill Sheet p33",
    q: "Per the GMVEMSC 12-lead skill sheet, ST segment analysis must be performed using:",
    choices: [
      "The monitor screen in monitor quality mode",
      "The printed EKG",
      "The transmitted image on the hospital's system",
      "Any view, as long as the rate is under 100"
    ],
    answer: 1,
    why: "The sheet distinguishes monitor quality from diagnostic quality and requires using the printed EKG for ST segment analysis. Monitor-quality frequency response filters the signal in ways that distort ST segments."
  },
  {
    id: "ms-04", section: "Miscellaneous Skills", domain: "12-Lead EKG", ref: "2008",
    q: "Per GMVEMSC 2008, when should the 12-lead be acquired on a suspected ACS patient?",
    choices: [
      "After moving the patient to the cot",
      "Supine, prior to moving the patient",
      "Only after arrival at the hospital",
      "Only if the patient's pain exceeds 7 out of 10"
    ],
    answer: 1,
    why: "2008 directs acquiring a supine 12-lead on all patients with ACS symptoms PRIOR to moving the patient, then transmitting with two identifiers to MCP. Movement introduces artifact and delays the diagnosis."
  },
  {
    id: "ms-05", section: "Miscellaneous Skills", domain: "EtCO2", ref: "1007",
    q: "Per GMVEMSC 1007, EtCO2 monitoring may be used on:",
    choices: [
      "Intubated patients only",
      "Patients with adequate perfusion only",
      "All patients, with or without artificial airways and with or without adequate perfusion",
      "Cardiac arrest patients only"
    ],
    answer: 2,
    why: "1007 states EtCO2 monitors can be used on all patients with or without adequate perfusion, and with or without artificial airways. The training manual notes side stream sensors come in BVM and nasal cannula adaptors."
  },
  {
    id: "ms-06", section: "Miscellaneous Skills", domain: "EtCO2", ref: "Training Manual",
    q: "The GMVEMSC training manual calls which device the 'gold standard' of tube placement confirmation?",
    choices: ["Colorimetric detector", "Capnography or capnometry", "Esophageal detector device", "Pulse oximetry"],
    answer: 1,
    why: "The manual names capnography/capnometry the gold standard, with waveform EtCO2 the preferred confirmation device. It can be used on intubated or non-intubated patients."
  },
  {
    id: "ms-07", section: "Miscellaneous Skills", domain: "Glucometer", ref: "4008",
    q: "Per GMVEMSC 8039, oral glucose may be repeated in 10 minutes if the blood glucose level remains below:",
    choices: ["50 mg/dl", "60 mg/dl", "70 mg/dl", "80 mg/dl"],
    answer: 1,
    why: "The oral glucose formulary entry gives 1 tube, repeated in 10 minutes if BGL remains less than 60 mg/dl, for both adults and pediatrics. 60 mg/dl is the region's hypoglycemia threshold."
  },
  {
    id: "ms-08", section: "Miscellaneous Skills", domain: "Glucometer", ref: "8039",
    q: "What is the contraindication to oral glucose in GMVEMSC 8039?",
    choices: [
      "Blood glucose above 200 mg/dl",
      "Inability to control the airway",
      "A history of type 1 diabetes",
      "Age under 12"
    ],
    answer: 1,
    why: "8039 lists inability to control the airway as the contraindication, and advises caution when giving to unresponsive patients. Indications include hypoglycemia, generalized hypothermia without arrest, and altered LOC of unknown cause."
  },
  {
    id: "ms-09", section: "Miscellaneous Skills", domain: "Medication Administration", ref: "Training Manual",
    q: "How many 'Rights of Medication Administration' does the GMVEMSC training manual list?",
    choices: ["Four", "Five", "Six", "Eight"],
    answer: 2,
    why: "The manual lists six: Right Medication, Right Patient, Right Dose, Right Route, Right Time, and Right Documentation. Documentation includes medication, dose, time, duration, route, and patient response."
  },
  {
    id: "ms-10", section: "Miscellaneous Skills", domain: "Medication Administration", ref: "Skill Sheet p27",
    q: "Per the GMVEMSC intranasal medication skill sheet, the dose is delivered:",
    choices: [
      "All in one nostril for maximum absorption",
      "Half the medication up each nostril",
      "One third per nostril with one third sublingual",
      "Slowly over 30 seconds into one nostril"
    ],
    answer: 1,
    why: "The sheet directs inserting the mucosal atomizer device (MAD) into the nostril and briskly depressing the plunger, half the medication up each nostril. Naloxone's formulary entry repeats this requirement."
  },
  {
    id: "ms-11", section: "Miscellaneous Skills", domain: "Medication Administration", ref: "Skill Sheet p30",
    q: "Per the GMVEMSC intramuscular injection skill sheet, the needle is inserted at what angle?",
    choices: ["15 degrees", "45 degrees", "90 degrees", "Whatever angle the site allows"],
    answer: 2,
    why: "The sheet requires stretching the skin, warning the patient, and inserting at a 90 degree angle while maintaining sterility. Afterward apply direct pressure, cover the site, and observe for effects and adverse reactions."
  },
  {
    id: "ms-12", section: "Miscellaneous Skills", domain: "Medication Administration", ref: "Skill Sheet p28",
    q: "Per the GMVEMSC EpiPen assist skill sheet, which step must be performed before administering the patient's auto-injector?",
    choices: [
      "Confirm it is prescribed to the patient and check for expiration and discoloration",
      "Obtain a 12-lead EKG",
      "Establish IV access",
      "Confirm the patient has used it before"
    ],
    answer: 0,
    why: "The sheet requires evaluating for signs and symptoms of anaphylaxis, obtaining the patient's auto-injector, assuring it is prescribed to the patient, and checking the expiration date and for cloudiness or discoloration before use. The injection site is the anterolateral thigh."
  },

  /* ---------- IV Setup (handwritten addition to the testing summary sheet) ---------- */
  {
    id: "iv-01", section: "Miscellaneous Skills", domain: "IV Setup", ref: "Premier Health B.Braun Guide",
    q: "Per the B.Braun IV catheter quick guide distributed through GMVEMSC, what is the FIRST setup step?",
    choices: [
      "Start the IV, then attach the hub",
      "Connect the green locking hub to the J loop, attach the saline flush, and prefill the J loop with saline",
      "Spike the bag and prime the drip chamber",
      "Connect the J loop directly to the catheter"
    ],
    answer: 1,
    why: "The guide's order is: (1) connect the green locking hub to the J loop, attach the normal saline flush to the hub and prefill the J loop with saline, (2) start the IV, (3) connect the J loop to the IV catheter. The line is assembled and primed BEFORE the stick."
  },
  {
    id: "iv-02", section: "Miscellaneous Skills", domain: "IV Setup", ref: "Premier Health B.Braun Guide",
    q: "You cross-thread the saline flush on the locking hub. The guide's fix is to:",
    choices: [
      "Discard the hub and start over with a new one",
      "Turn the flush counter-clockwise a quarter turn, then clockwise until the threads are completely flush with the hub",
      "Force it clockwise until it seats",
      "Use a J loop without a locking hub"
    ],
    answer: 1,
    why: "Back it off counter-clockwise a quarter turn to let the threads reseat, then turn clockwise until the threads sit completely flush with the hub. Forcing a cross-threaded connection damages it and can leak."
  },
  {
    id: "iv-03", section: "Miscellaneous Skills", domain: "IV Setup", ref: "Premier Health B.Braun Guide",
    q: "The saline flush will not twist onto the locking hub. Per the guide, you should:",
    choices: [
      "Lubricate the threads",
      "Depress the flush firmly against the hub before attempting to twist",
      "Twist counter-clockwise instead",
      "Attach the flush to the J loop instead"
    ],
    answer: 1,
    why: "The guide's troubleshooting note for a connecting problem is to depress the NS flush firmly against the hub BEFORE attempting to twist. The luer connection has to be seated before the threads will engage."
  },
  {
    id: "iv-04", section: "Miscellaneous Skills", domain: "IV Setup", ref: "1012",
    q: "Per GMVEMSC 1012, intraosseous (IO) insertion is:",
    choices: [
      "An EMT skill with medical control approval",
      "Not an EMR or EMT skill",
      "An EMT skill in cardiac arrest only",
      "Available to all levels after department training"
    ],
    answer: 1,
    why: "1012 states plainly that IO insertion is not an EMR skill and is not an EMT skill. It belongs to the AEMT and Paramedic. As an EMT you may set up and prime the line and assist, but you do not place the IO."
  },
  {
    id: "iv-05", section: "Miscellaneous Skills", domain: "IV Setup", ref: "1012",
    q: "For an ADULT in cardiac arrest, GMVEMSC 1012 gives the preferable order of vascular access as:",
    choices: [
      "Proximal tibia IO, then antecubital IV, then external jugular",
      "External jugular IV, then antecubital IV, then proximal humeral head or distal femur IO",
      "Any IO site first, since it is fastest",
      "Central line, then antecubital IV"
    ],
    answer: 1,
    why: "1012 lists external jugular (EJ) vein IV first, then antecubital (AC) vein IV, then proximal humeral head or distal femur IO. If the distal femur is used, better access should be sought as the arrest progresses."
  },
  {
    id: "iv-06", section: "Miscellaneous Skills", domain: "IV Setup", ref: "1012",
    q: "Per GMVEMSC 1012, IO access is limited to patients who are:",
    choices: [
      "Any patient needing fluids",
      "Unresponsive or hemodynamically unstable, and only when less invasive means are ineffective or unavailable",
      "In cardiac arrest only",
      "Under 12 years old"
    ],
    answer: 1,
    why: "1012's general guideline restricts IO use to unresponsive or hemodynamically unstable patients, and then only when less invasive means are ineffective or not available. It is not a shortcut around a difficult IV on a stable patient."
  },
  {
    id: "iv-07", section: "Miscellaneous Skills", domain: "IV Setup", ref: "1013",
    q: "Per GMVEMSC 1013, who may use alternate vascular access routes such as a PICC line or dialysis fistula?",
    choices: [
      "Any certification level in cardiac arrest",
      "AEMT and Paramedic",
      "Paramedics only",
      "EMT with medical control approval"
    ],
    answer: 2,
    why: "1013 opens by stating the guideline is not for EMR, EMT or AEMT - only Paramedics may use alternative vascular routes. Note also that paramedics are NOT permitted to access a subcutaneously implanted port."
  }
];
