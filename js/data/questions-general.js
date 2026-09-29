/* GMVEMSC EMT Protocol question bank - General Patient Management, 1000 series.
   EMT scope only. Source: 2026 GMVEMSC Standing Orders. */

const Q_GENERAL = [
  /* ---------- 1003 Non-Initiation of Care ---------- */
  {
    id: "gp-01", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "Which certification levels may determine that a patient is deceased under GMVEMSC 1003?",
    choices: ["All levels including EMR", "EMT, AEMT and Paramedic only", "Paramedic only", "AEMT and Paramedic only"],
    answer: 1,
    why: "1003 states the protocol may be applied by EMT, AEMT and Paramedic providers only - the EMR cannot determine that a patient is deceased. All patient ages may meet the criteria."
  },
  {
    id: "gp-02", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "Which finding meets GMVEMSC 1003 criteria for non-initiation of care?",
    choices: ["Asystole on the monitor", "Rigor mortis, tissue decomposition, or severe dependent lividity", "Fixed and dilated pupils", "A family member stating the patient did not want CPR"],
    answer: 1,
    why: "1003 lists deep penetrating cranial injuries, massive truncal wounds, a valid DNR, a frozen body, rigor mortis/decomposition/severe dependent lividity, and triage demands. Asystole and fixed pupils alone are not criteria, and a verbal family statement is not a valid DNR."
  },
  {
    id: "gp-03", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "For a patient in arrest from blunt or penetrating trauma, GMVEMSC 1003 says to consider not initiating care when the arrest has been prolonged - defined as greater than:",
    choices: ["5 minutes", "10 minutes", "20 minutes", "30 minutes"],
    answer: 1,
    why: "1003 gives prolonged arrest as greater than 10 minutes for injuries obviously incompatible with life, and reminds providers to consider the possibility of mixed mechanisms."
  },
  {
    id: "gp-04", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "Which condition EXCLUDES a traumatic arrest patient from non-initiation of care under GMVEMSC 1003?",
    choices: ["Age over 69", "Known pregnancy greater than 24 weeks", "Arrest lasting more than 10 minutes", "Massive truncal wounds"],
    answer: 1,
    why: "1003's exclusions are: known pregnancy over 24 weeks or a fundus palpable at/above the umbilicus, possible medical etiology, arrest witnessed by EMS, lightning strike, signs of hypothermia, and focused blunt chest trauma (commotio cordis). These all get resuscitated."
  },
  {
    id: "gp-05", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "A traumatic arrest was witnessed by your EMS crew on arrival. Per GMVEMSC 1003, you should:",
    choices: ["Apply non-initiation criteria as normal", "Begin resuscitation - an EMS-witnessed arrest is an exclusion", "Contact MCP before deciding", "Transport without resuscitation"],
    answer: 1,
    why: "An arrest witnessed by EMS providers is on the exclusionary list, so non-initiation does not apply. Lightning strike, hypothermia and commotio cordis are excluded for the same reason - they are potentially reversible."
  },
  {
    id: "gp-06", section: "Patient Management", domain: "Non-Initiation of Care", ref: "1003",
    q: "Per GMVEMSC 1003, an inquiry about organ donation should be directed to:",
    choices: ["The receiving hospital", "Life Connection of Ohio", "The county coroner", "The agency medical director"],
    answer: 1,
    why: "1003 directs organ donation inquiries to Life Connection of Ohio at 1-800-535-9206."
  },

  /* ---------- 1004 Do Not Resuscitate ---------- */
  {
    id: "gp-07", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "What are the two valid Ohio DNR orders recognized by GMVEMSC 1004?",
    choices: [
      "DNR: Full Code and DNR: Partial Code",
      "DNR: Comfort Care and DNR: Comfort Care Arrest",
      "Living Will and Durable Power of Attorney",
      "DNR: Hospital and DNR: Prehospital"
    ],
    answer: 1,
    why: "1004 recognizes DNR: Comfort Care (DNR-CC) and DNR: Comfort Care Arrest (DNR-CCA), per Ohio Revised Code 2133.01-2133.26."
  },
  {
    id: "gp-08", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "A patient has a valid DNR: Comfort Care ARREST (DNR-CCA) order. Per GMVEMSC 1004, what care may you provide?",
    choices: [
      "Only comfort measures from this moment on",
      "Any GMVEMSC protocol treatment until the patient goes into cardiac or respiratory arrest",
      "No treatment at all",
      "Full resuscitation, since CCA means arrest care is permitted"
    ],
    answer: 1,
    why: "DNR-CCA permits any protocol treatment until the patient arrests; only then do the restricted comfort-care rules apply. DNR-CC, by contrast, takes effect the moment it is signed by the physician."
  },
  {
    id: "gp-09", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "A DNR: Comfort Care (DNR-CC) order takes effect:",
    choices: [
      "Only when the patient arrests",
      "At the moment it is signed by the patient's physician",
      "When the family confirms it",
      "On hospital admission"
    ],
    answer: 1,
    why: "1004 states the DNR-CC order is initiated at the moment it is signed by the patient's physician. It permits treatment to diminish pain or discomfort, but nothing used to postpone death."
  },
  {
    id: "gp-10", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "Which treatment IS permitted once a DNR order is valid and in effect?",
    choices: ["Inserting an airway adjunct", "Suctioning or clearing an airway obstruction", "Defibrillation", "Initiating continuous cardiac monitoring"],
    answer: 1,
    why: "1004 permits initial assessment, basic medical care, clearing an obstruction or suctioning, oxygen/CPAP/BiPAP for comfort, and IV access for hydration or pain relief. Airway adjuncts, CPR, resuscitation medications, defibrillation and continuous cardiac monitoring are not permitted."
  },
  {
    id: "gp-11", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "Your patient has a valid DNR and an altered mental status. Per GMVEMSC 1004, checking a blood glucose and treating hypoglycemia is:",
    choices: [
      "Prohibited by the DNR",
      "Acceptable even with a valid DNR",
      "Allowed only with MCP permission",
      "Allowed only if the family consents"
    ],
    answer: 1,
    why: "1004 explicitly states blood glucose checks and treatment under 4008 Diabetic Emergencies are acceptable even with a valid DNR. A DNR is not an order to withhold comfort or correctable problems."
  },
  {
    id: "gp-12", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "You find two different DNR documents for the same patient. Per GMVEMSC 1004:",
    choices: [
      "Neither is valid - begin resuscitation",
      "The most recent supersedes the previous",
      "The one with a physician signature always wins",
      "Contact law enforcement"
    ],
    answer: 1,
    why: "1004 states the most recent declaration supersedes the previous. A DPOA-HC's authority supersedes the DNR if that person previously consented to it. When documents are confusing, keep the patient's intent in mind and call MCP."
  },
  {
    id: "gp-13", section: "Patient Management", domain: "DNR", ref: "1004",
    q: "You are presented with an out-of-state DNR order. Per GMVEMSC 1004, you should:",
    choices: [
      "Honor it exactly as an Ohio DNR",
      "Disregard it and resuscitate",
      "Contact MCP and request permission to honor it",
      "Honor it only if a family member is present"
    ],
    answer: 2,
    why: "1004 treats out-of-state DNR orders and pediatric DNR orders as special situations: contact MCP and request to honor the DNR with physician permission."
  },

  /* ---------- 1005 General Patient Management ---------- */
  {
    id: "gp-14", section: "Patient Management", domain: "EMT Assisting ALS", ref: "1005",
    q: "Per GMVEMSC 1005.3, which skill may an EMT set up for and assist an advanced provider with?",
    choices: [
      "Performing the intubation itself",
      "Setting up an IV administration kit",
      "Pushing IV medications",
      "Interpreting a 12-lead EKG"
    ],
    answer: 1,
    why: "1005.3 lists what an EMT may set up for and assist with: endotracheal intubation, intravenous access, IV fluid administration, saline locks, placement of 4 and/or 12/15 lead EKG for monitoring, and accessing the drug bag to locate drugs or assemble pre-jects."
  },
  {
    id: "gp-15", section: "Patient Management", domain: "EMT Assisting ALS", ref: "1005",
    q: "Under GMVEMSC 1005.3, an EMT may prepare ALS equipment:",
    choices: [
      "At any time to save time on scene",
      "Only under the direct supervision of an AEMT or Paramedic",
      "Only after contacting medical control",
      "Only during a cardiac arrest"
    ],
    answer: 1,
    why: "1005.3 permits the EMT to assist with skills outside their scope per Ohio Revised Code, but only to prepare ALS equipment under the direct supervision of the AEMT or Paramedic."
  },
  {
    id: "gp-16", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Per GMVEMSC 1005, a pediatric patient is defined as a patient less than:",
    choices: ["12 years old", "14 years old", "16 years old", "18 years old"],
    answer: 2,
    why: "1005 defines pediatric patients as less than 16 years old, matching the trauma triage brackets in 3018. A length-based resuscitation tape or Pedi-Wheel may be used for equipment sizing and vital sign references."
  },
  {
    id: "gp-17", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Unless a protocol specifies otherwise, GMVEMSC 1005 sets the maximum pediatric medication dose as:",
    choices: ["Half the adult dose", "The adult dose", "Weight-based with no ceiling", "Whatever the length-based tape indicates"],
    answer: 1,
    why: "1005 states that unless otherwise specified, the maximum dose for pediatric medication administration is the adult dose. A weight-based calculation never exceeds what an adult would receive."
  },
  {
    id: "gp-18", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Per GMVEMSC 1005, how often should vital signs be reassessed?",
    choices: ["Every 2 minutes", "Every 5 to 15 minutes per patient condition", "Every 20 minutes", "Only on arrival and at the hospital"],
    answer: 1,
    why: "1005 directs reassessing vitals every 5 to 15 minutes depending on patient condition. Note that trauma patients get vitals every 5 minutes under 3001, and shock and trauma patients get a manual blood pressure."
  },
  {
    id: "gp-19", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "An unresponsive patient has gasping breaths and poor color. Per GMVEMSC 1005, this patient should receive:",
    choices: ["Oxygen by nasal cannula at 4 LPM", "Supplemental oxygen via BVM", "A nonrebreather mask only", "CPAP"],
    answer: 1,
    why: "1005 states an unresponsive patient with gasping breaths and poor color should get supplemental oxygen via BVM. Gasping is not adequate breathing - it requires assisted ventilation, and in a pulseless patient it is a cardiac arrest sign."
  },
  {
    id: "gp-20", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Per GMVEMSC 1005, EMRs are limited to obtaining what kind of blood pressure?",
    choices: ["Automated only", "Manual only", "Palpated only", "They may not obtain blood pressures"],
    answer: 1,
    why: "1005 notes EMRs are limited to obtaining manual blood pressures. Manual BPs are also required on all trauma patients (3001) and all patients with signs of shock (4016)."
  },
  {
    id: "gp-21", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Except in suspected cerebral herniation, GMVEMSC 1005 says the rate and depth of ventilation should:",
    choices: [
      "Be guided by the EtCO2 reading alone",
      "Not be guided by the EtCO2 reading alone",
      "Always target an EtCO2 of 30 mmHg",
      "Be set at 20 per minute"
    ],
    answer: 1,
    why: "1005 warns against using EtCO2 alone to drive ventilation, and notes permissive hypercapnia is appropriate in most cases, especially in chronic lung disease patients who retain CO2. Herniation is the exception: about 20/min targeting an EtCO2 of 30 mmHg."
  },
  {
    id: "gp-22", section: "Patient Management", domain: "General Management", ref: "1005",
    q: "Your patient was discharged from a hospital in the last 24 hours. Per GMVEMSC 1005, it is recommended that you:",
    choices: [
      "Transport to the closest facility regardless",
      "Return to the same facility, or at least the same hospital network",
      "Transport to a trauma center",
      "Let the patient choose any hospital in the region"
    ],
    answer: 1,
    why: "1005's clinical pearls recommend returning to the same facility or at least the same network, so the treating team has the records. The same applies to complications from a recent surgery - go back to where the surgery was performed if practical."
  },

  /* ---------- 1006 Abuse and Neglect ---------- */
  {
    id: "gp-23", section: "Patient Management", domain: "Abuse & Neglect", ref: "1006",
    q: "Per GMVEMSC 1006 and Ohio Revised Code, reporting suspected abuse or neglect is:",
    choices: [
      "Optional, at the provider's discretion",
      "Mandatory by law for EMS providers",
      "Required only for pediatric patients",
      "The responsibility of the receiving hospital"
    ],
    answer: 1,
    why: "1006 states EMS providers MUST, by law, report all alleged or suspected pediatric and adult abuse or neglect. See ORC 5101.63 for adults and ORC 2151.421 for pediatrics."
  },
  {
    id: "gp-24", section: "Patient Management", domain: "Abuse & Neglect", ref: "1006",
    q: "You report your suspicion of abuse to the emergency department staff at the receiving hospital. Per GMVEMSC 1006, this:",
    choices: [
      "Satisfies your mandated reporting responsibility",
      "Does NOT meet your mandated EMS reporting responsibility",
      "Satisfies it only if documented on the run report",
      "Satisfies it for adults but not children"
    ],
    answer: 1,
    why: "1006 is explicit: simply notifying hospital personnel does not meet mandated EMS reporting responsibilities. You must report to the county protective services agency or law enforcement yourself."
  },
  {
    id: "gp-25", section: "Patient Management", domain: "Abuse & Neglect", ref: "1006",
    q: "Suspected abuse of a 72-year-old patient is reported to:",
    choices: [
      "The county public children services agency",
      "The county adult protective services agency, or law enforcement",
      "The Ohio Department of Health",
      "The agency medical director"
    ],
    answer: 1,
    why: "1006 routes patients over 60 years old to the county's adult protective services agency; children go to the county public children services agency. Law enforcement is an option for both."
  },
  {
    id: "gp-26", section: "Patient Management", domain: "Abuse & Neglect", ref: "1006",
    q: "Per GMVEMSC 1006, what must be documented on the patient care report about an abuse report?",
    choices: [
      "Only that a report was made",
      "The agency notified, the method used, and the name of the person contacted",
      "The suspected perpetrator's name",
      "Nothing - reporting is confidential"
    ],
    answer: 1,
    why: "1006 requires documenting all efforts EMS made to report, including the name of the agency notified, the method used, and the name of the person contacted."
  },

  /* ---------- 3003 Glasgow Coma Score ---------- */
  {
    id: "gp-27", section: "Patient Management", domain: "Glasgow Coma Score", ref: "3003",
    q: "Per GMVEMSC 3003, how many Glasgow Coma Scores should be recorded?",
    choices: ["Only if the patient is unresponsive", "At least one, on all patients", "Only on trauma patients", "One every five minutes on all patients"],
    answer: 1,
    why: "3003 states all patients should have at least one recorded and reported GCS. Trauma reports under 3001 require GCS with its individual components, not just the total."
  },
  {
    id: "gp-28", section: "Patient Management", domain: "Glasgow Coma Score", ref: "3003",
    q: "In the adult Glasgow Coma Score, what is the maximum motor score and what earns it?",
    choices: ["5, localizes pain", "6, obeys commands", "4, withdraws to pain", "6, normal movements"],
    answer: 1,
    why: "Adult motor runs 1-6 with 6 for obeying commands and 5 for localizing pain. Eyes are 1-4 and verbal 1-5, for a maximum total of 15 and a minimum of 3."
  },
  {
    id: "gp-29", section: "Patient Management", domain: "Glasgow Coma Score", ref: "3003",
    q: "GMVEMSC 3003 uses a different GCS verbal scale for patients under what age?",
    choices: ["Under 1 year", "Under 2 years", "Under 5 years", "Under 8 years"],
    answer: 1,
    why: "3003 gives a separate scale for patients less than 2 years old, where verbal runs coos/babbles 5, irritable consolable cry 4, cries to pain 3, moans to pain 2, no response 1, and motor 6 is normal movements rather than obeying commands."
  },
  {
    id: "gp-30", section: "Patient Management", domain: "Glasgow Coma Score", ref: "3003",
    q: "A trauma patient's GCS is 13. Per GMVEMSC 3018, this:",
    choices: [
      "Is within normal limits",
      "Meets adult physiologic trauma criteria",
      "Requires an airway adjunct",
      "Excludes them from a trauma center"
    ],
    answer: 1,
    why: "3018 sets the adult physiologic criterion at a GCS less than or equal to 13, so 13 meets criteria. Decorticate flexion scores 3 on motor and decerebrate extension scores 2 - extension is the worse finding."
  }
];
