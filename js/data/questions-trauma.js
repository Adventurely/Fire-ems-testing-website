/* GMVEMSC EMT Protocol question bank - Trauma Care, 3000 series.
   EMT scope only. Source: 2026 GMVEMSC Standing Orders. */

const Q_TRAUMA = [
  /* ---------- 3001 General Trauma Management ---------- */
  {
    id: "tr-01", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Per GMVEMSC 3001, on-scene time for a major trauma patient should be limited to:",
    choices: ["5 minutes or less", "10 minutes or less", "15 minutes or less", "20 minutes or less"],
    answer: 1,
    why: "3001 sets on-scene time at 10 minutes or less except for extenuating circumstances. Major trauma patients are transported as soon as possible to the nearest appropriate facility."
  },
  {
    id: "tr-02", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Which procedure takes precedence over transport of a major trauma patient under GMVEMSC 3001?",
    choices: [
      "Obtaining a full set of vital signs",
      "Exsanguinating hemorrhage control",
      "Splinting all suspected fractures",
      "Completing a detailed secondary assessment"
    ],
    answer: 1,
    why: "3001 lists only four things that take precedence over transport: airway management, stabilization of the neck/back or obvious femur and pelvic fractures on a backboard, exsanguinating hemorrhage control, and extrication. Everything else happens en route."
  },
  {
    id: "tr-03", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "The MIVT report given to the receiving facility under GMVEMSC 3001 stands for:",
    choices: [
      "Mechanism of injury, Injuries, Vital signs, Treatment",
      "Medical history, Injuries, Vitals, Transport",
      "Mechanism, Intervention, Volume, Time",
      "Motor, Iris, Verbal, Touch"
    ],
    answer: 0,
    why: "3001 requires reporting Mechanism of Injury, Injuries, Vital signs and Treatment (MIVT), along with the GCS broken into components and an ETA."
  },
  {
    id: "tr-04", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Per GMVEMSC 3001, how often are vital signs repeated on trauma patients, and how is the blood pressure taken?",
    choices: [
      "Every 15 minutes, automated is fine",
      "Every 5 minutes, with a manual BP",
      "Every 10 minutes, automated is fine",
      "Once on scene and once at the hospital"
    ],
    answer: 1,
    why: "3001 requires a manual BP on all trauma patients and repeat vitals every 5 minutes. Automated cuffs are unreliable in the poorly perfused, moving patient this protocol is written for."
  },
  {
    id: "tr-05", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Per GMVEMSC 3001, minor trauma patients:",
    choices: [
      "Must always go to a trauma center",
      "May be transported to non-trauma centers",
      "Must be transported by air",
      "Require MCP contact before transport"
    ],
    answer: 1,
    why: "3001 allows minor trauma patients to be transported to non-trauma centers. Major trauma goes to the nearest appropriate facility, and if 3018 criteria are met you call a Trauma Alert."
  },
  {
    id: "tr-06", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Why does GMVEMSC 3001 emphasize maintaining body temperature in trauma patients?",
    choices: [
      "Cold patients cannot be intubated",
      "Hypothermia is a significant and frequent problem in shock, and worsens coagulopathy and mortality",
      "It keeps the patient comfortable",
      "It prevents fever at the hospital"
    ],
    answer: 1,
    why: "3001's clinical pearls call hypothermia a significant and frequent problem in shock. With increased fluid, it drives dilution, lower temperature and coagulopathy - all raising mortality. This is the H in the MARCH mnemonic."
  },

  /* ---------- 3002 Major Trauma ---------- */
  {
    id: "tr-07", section: "Trauma Care", domain: "Major Trauma", ref: "3002",
    q: "The M.A.R.C.H. mnemonic in GMVEMSC 3002 stands for:",
    choices: [
      "Massive hemorrhage, Airway, Respirations, Circulation, Hypothermia",
      "Mechanism, Assessment, Rescue, Circulation, Head",
      "Monitor, Airway, Rate, Capnography, Heart",
      "Move, Assess, Resuscitate, Control, Handoff"
    ],
    answer: 0,
    why: "3002 uses Massive Hemorrhage, Airway, Respirations, Circulation, Hypothermia to set treatment priorities. Note bleeding comes before airway - in penetrating trauma, exsanguination kills faster."
  },
  {
    id: "tr-08", section: "Trauma Care", domain: "Major Trauma", ref: "3002",
    q: "Per GMVEMSC 3002, an open pneumothorax (sucking chest wound) is covered with:",
    choices: [
      "A moist sterile dressing",
      "An occlusive dressing taped down on three sides",
      "An occlusive dressing sealed on all four sides",
      "A bulky dry dressing"
    ],
    answer: 1,
    why: "3002 directs covering the wound with an occlusive dressing taped down on three sides, creating a flutter valve that lets air escape but not enter. Sealing all four sides can create a tension pneumothorax."
  },
  {
    id: "tr-09", section: "Trauma Care", domain: "Major Trauma", ref: "3002",
    q: "A patient with an occlusive dressing develops signs of a tension pneumothorax. Per GMVEMSC 3002, the EMT should:",
    choices: [
      "Perform needle decompression",
      "Lift one side of the occlusive dressing",
      "Remove the dressing entirely and pack the wound",
      "Apply a second occlusive dressing"
    ],
    answer: 1,
    why: "3002 directs lifting one side of any occlusive dressing to release trapped air - a BLS intervention available to the EMT. Needle decompression is an AEMT and paramedic skill."
  },
  {
    id: "tr-10", section: "Trauma Care", domain: "Major Trauma", ref: "3002",
    q: "Per GMVEMSC 3002, a flail chest segment is managed by:",
    choices: [
      "Taping the segment down tightly to restrict all movement",
      "Stabilizing immediately with a gloved hand, then immobilizing with a bulky dressing or towels taped to the chest",
      "Applying an occlusive dressing",
      "Positioning the patient on the uninjured side"
    ],
    answer: 1,
    why: "3002 directs immediate stabilization with a gloved hand followed by a bulky dressing or towels taped to the chest. Watch ventilation closely - the underlying pulmonary contusion is usually the bigger threat."
  },
  {
    id: "tr-11", section: "Trauma Care", domain: "Major Trauma", ref: "3002",
    q: "Patients meeting criteria for transport to a Trauma Center are considered:",
    choices: ["Stay and play", "Load and go", "Treat and release", "Delayed priority"],
    answer: 1,
    why: "3002 calls them 'Load and Go.' Contact medical control with MIVT, ETA and GCS components. Pre-arrival notification is described in 3001 as essential."
  },

  /* ---------- 3004 Trauma Arrest ---------- */
  {
    id: "tr-12", section: "Trauma Care", domain: "Trauma Arrest", ref: "3004",
    q: "Per GMVEMSC 3004, a mechanical CPR device is contraindicated in traumatic arrest when there is injury or mechanism of injury to the:",
    choices: [
      "Extremities",
      "Neck, thoracic cavity, or abdominal cavity",
      "Head only",
      "Pelvis only"
    ],
    answer: 1,
    why: "3004 contraindicates mechanical CPR with injury or mechanism to the neck, thoracic cavity (anterior or posterior), or abdominal cavity. Minor injuries to those areas or to the extremities do not apply."
  },
  {
    id: "tr-13", section: "Trauma Care", domain: "Trauma Arrest", ref: "3004",
    q: "Per GMVEMSC 3004, traumatic cardiac arrest care follows:",
    choices: [
      "A completely separate algorithm from medical arrest",
      "The same algorithm as other cardiac arrest scenarios",
      "Transport only, with no resuscitation",
      "Only hemorrhage control"
    ],
    answer: 1,
    why: "3004 states traumatic cardiac arrest care follows the same algorithm as other arrests, starting with BLS per 2002, plus internal and external hemorrhage control such as tourniquets and pelvic binders."
  },
  {
    id: "tr-14", section: "Trauma Care", domain: "Trauma Arrest", ref: "3004",
    q: "Per GMVEMSC 3004, an organized rhythm with a rate greater than 40 in a trauma arrest should be:",
    choices: [
      "Treated as asystole",
      "Continued treatment, because of the potential for pseudo-PEA",
      "Grounds for immediate termination",
      "Ignored until ALS arrives"
    ],
    answer: 1,
    why: "3004 directs continuing to treat any organized rhythm over 40 because of possible pseudo-PEA - the patient may not truly be in arrest, just too poorly perfused to have a palpable pulse."
  },
  {
    id: "tr-15", section: "Trauma Care", domain: "Trauma Arrest", ref: "3004",
    q: "Which level may NOT terminate a traumatic cardiac arrest under GMVEMSC 3004?",
    choices: ["Emergency Medical Responders (EMRs)", "EMTs", "AEMTs", "Paramedics"],
    answer: 0,
    why: "3004 states EMRs may not terminate a trauma cardiac arrest. Termination requires MCP contact, and the crew must be ready to report duration of resuscitation, downtime before arrival, whether it was witnessed, and capnography values."
  },

  /* ---------- 3005 Burns ---------- */
  {
    id: "tr-16", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "When estimating total body surface area burned under GMVEMSC 3005, you include:",
    choices: [
      "All burns including superficial",
      "Only full and partial thickness burns",
      "Only full thickness burns",
      "Only burns to the trunk"
    ],
    answer: 1,
    why: "3005 states BSA estimates should include only full and partial thickness burns. Superficial (first degree) burns are not counted - including them inflates the estimate and can misdirect care."
  },
  {
    id: "tr-17", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "Per GMVEMSC 3005, burns should be covered with:",
    choices: [
      "Wet sterile dressings",
      "Clean, dry sheets or dressings",
      "Ice packs",
      "Antibiotic ointment and gauze"
    ],
    answer: 1,
    why: "3005 directs covering superficial, partial and full thickness burns with clean, dry sheets or dressings, and keeping the patient warm. Burn patients lose heat fast and hypothermia worsens outcomes."
  },
  {
    id: "tr-18", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "A bystander applied ice to a burn before your arrival. Per GMVEMSC 3005 you should:",
    choices: [
      "Leave it in place for pain control",
      "Remove it",
      "Add more ice",
      "Replace it with a cold pack"
    ],
    answer: 1,
    why: "3005 says do not apply ice or ice packs to burns, and if ice was applied prior to arrival, remove it. Ice deepens the injury and accelerates heat loss."
  },
  {
    id: "tr-19", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "Per GMVEMSC 3005, clothing and jewelry on burned areas should be:",
    choices: [
      "Always left in place",
      "Removed, except items which have adhered to the skin",
      "Cut away including adhered items",
      "Removed only at the hospital"
    ],
    answer: 1,
    why: "3005 directs removing clothing and jewelry from injured parts but not removing items that have adhered to the skin. Jewelry must come off early because swelling makes it a tourniquet."
  },
  {
    id: "tr-20", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "Which finding should raise concern for an inhalation injury under GMVEMSC 3005?",
    choices: [
      "Burns limited to the hands",
      "Singed facial or nasal hair, hoarseness, and sooty sputum",
      "A blood pressure of 100 systolic",
      "Pain out of proportion to the burn"
    ],
    answer: 1,
    why: "3005 lists respiratory distress, stridor, hoarseness, sooty sputum, singed eyebrows and nares, and burns of the face or airway. Inhalation burns get high flow oxygen by nonrebreather, and an inhalation injury with an unsecured airway goes to the nearest facility."
  },
  {
    id: "tr-21", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "Per GMVEMSC 3005, chemical burns are:",
    choices: [
      "Treated identically to thermal burns on scene",
      "Hazardous material situations requiring gross decontamination at the scene",
      "Irrigated only at the hospital",
      "Covered with an occlusive dressing"
    ],
    answer: 1,
    why: "3005 treats chemical burns as hazmat situations that must be grossly decontaminated at the scene. Radiation burns with radioactive material on the patient also require decontamination, treating critical medical conditions first."
  },
  {
    id: "tr-22", section: "Trauma Care", domain: "Burns", ref: "3005",
    q: "GMVEMSC 3005 recommends calling for the nearest cyanide antidote cache at dispatch when:",
    choices: [
      "Any structure fire is reported",
      "A person is trapped with exposure to fire or smoke in an enclosed area",
      "Any burn over 10% BSA is reported",
      "A patient has facial burns"
    ],
    answer: 1,
    why: "3005 lists three dispatch triggers: a person trapped with fire or smoke exposure in an enclosed area, an incident involving cyanide, or a Mayday/firefighter down with smoke exposure in an enclosed area. Calling early beats waiting for symptoms."
  },

  /* ---------- 3019 SALT Triage ---------- */
  {
    id: "tr-23", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "SALT triage stands for:",
    choices: [
      "Sort, Assess, Lifesaving interventions, Treatment/Transport",
      "Survey, Alert, Locate, Transport",
      "Scene, Airway, Load, Triage",
      "Sort, Alert, Log, Track"
    ],
    answer: 0,
    why: "3019 defines SALT as Sort, Assess, Life-Saving Intervention, and Treatment/Transport. It was developed by the CDC and proposed as the national MCI triage standard, and is the fastest system available."
  },
  {
    id: "tr-24", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "During INITIAL triage at an MCI, GMVEMSC 3019 directs you to use:",
    choices: [
      "Treatment tags",
      "Triage ribbons",
      "Permanent marker on the forehead",
      "Whatever is available"
    ],
    answer: 1,
    why: "3019 requires color-coded triage ribbons for initial triage - treatment tags slow the process and are applied later, in the treatment area or transport group. Tags are still needed eventually as documentation of assessment and treatment."
  },
  {
    id: "tr-25", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "Where should a triage ribbon be placed per GMVEMSC 3019?",
    choices: [
      "On the patient's clothing",
      "Tied to an upper extremity in a visible location, on the right wrist if possible",
      "On the left ankle",
      "Anywhere on the body"
    ],
    answer: 1,
    why: "3019 specifies tying the ribbon to an upper extremity in a VISIBLE location, on the right wrist if possible - so the next provider finds it in the same place every time."
  },
  {
    id: "tr-26", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "In SALT triage, the GRAY category means:",
    choices: [
      "Dead", "Expectant - unlikely to survive given current resources", "Delayed", "Contaminated"
    ],
    answer: 1,
    why: "3019 lists RED immediate, YELLOW delayed, GREEN minimal, GRAY expectant (unlikely to survive given current resources), and BLACK dead - printed as a black and white zebra stripe so it is visible in low light."
  },
  {
    id: "tr-27", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "What does an ORANGE and polka-dot ribbon indicate in GMVEMSC SALT triage?",
    choices: [
      "A pediatric patient",
      "The victim has been contaminated with a hazardous material",
      "An expectant patient",
      "A patient requiring air transport"
    ],
    answer: 1,
    why: "3019 uses the orange and polka-dot ribbon IN ADDITION to a triage category ribbon to mark contamination. Each contaminated patient carries two ribbons; the orange one is removed after decontamination - and you decontaminate under the ribbons."
  },
  {
    id: "tr-28", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "The first global sorting step in SALT is to announce that everyone who can hear you should move to a designated area. Those who walk over are:",
    choices: [
      "Tagged red and assessed first",
      "The last priority for individual assessment",
      "Released from the scene",
      "Tagged gray"
    ],
    answer: 1,
    why: "3019's Action 1 groups ambulatory patients by voice command; they become the last priority for individual assessment. Action 2 asks those needing help to wave, identifying non-ambulatory patients who can follow commands. Still patients and those with obvious life threats are priority 1."
  },
  {
    id: "tr-29", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "Per GMVEMSC 3019, over-triage at an MCI:",
    choices: [
      "Is always safer than under-triage",
      "Can be as harmful as under-triage",
      "Is required when in doubt",
      "Only affects documentation"
    ],
    answer: 1,
    why: "3019 warns that over-triage can be as harmful as under-triage: if everyone is tagged red, the truly red patients get delayed treatment, transport and definitive care. Get the reds out, and re-triage often."
  },
  {
    id: "tr-30", section: "Trauma Care", domain: "SALT Triage", ref: "3019",
    q: "In an MCI, GMVEMSC 3019 says trauma patients:",
    choices: [
      "Must all go to trauma centers",
      "May be transported to non-trauma centers as necessary",
      "Should wait for trauma center capacity",
      "Go only to Level I centers"
    ],
    answer: 1,
    why: "3019 directs transporting trauma patients to non-Trauma Centers as necessary during an MCI - all hospitals will accept and stabilize trauma patients. Do not overload any single hospital, and consider sending green patients to satellite EDs."
  },
  {
    id: "tr-31", section: "Trauma Care", domain: "Hemorrhage Control", ref: "3015",
    q: "A trauma patient in shock needs their temperature maintained. Which mnemonic step does this correspond to?",
    choices: ["The M in MARCH", "The H in MARCH", "The C in MARCH", "The R in MARCH"],
    answer: 1,
    why: "H is Hypothermia - treated prophylactically, not once the patient is already cold. 3001 notes hypothermia is a frequent problem in major trauma shock and contributes to coagulopathy and mortality."
  },
  {
    id: "tr-32", section: "Trauma Care", domain: "General Trauma", ref: "3001",
    q: "Per GMVEMSC 3001, if a trauma patient is transported by helicopter, the crew must ensure:",
    choices: [
      "The patient is intubated first",
      "A copy of the patient care report gets to the receiving facility",
      "The flight crew signs the run sheet",
      "MCP approves the flight"
    ],
    answer: 1,
    why: "3001 requires ensuring a copy of the patient care report reaches the receiving facility when transporting by helicopter. Air transport bypasses the usual handoff, so the documentation has to be deliberately routed."
  }
];
