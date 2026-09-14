/* Practical skill evaluation checklists, transcribed from the
   2026 GMVEMSC Standing Orders Training Manual.
   These are the sheets a proctor grades you against, in order. */

const SKILL_SHEETS = [
  {
    id: "cpap",
    name: "CPAP Assessment and Application",
    page: "Training Manual p7",
    levels: "EMT / AEMT / Paramedic",
    groups: [
      { title: "Prepares patient", steps: [
        "Takes or verbalizes appropriate PPE precautions",
        "Assures adequate blood pressure 100 systolic",
        "Positions patient in a position that will optimize ease of ventilation"
      ]},
      { title: "Identifies INDICATIONS for CPAP", steps: [
        "Asthmatic", "Congestive heart failure", "Pulmonary edema", "COPD"
      ]},
      { title: "Identifies CONTRAINDICATIONS for CPAP", steps: [
        "Patient must be age 16 or older",
        "Unconscious, unresponsive, inability to protect airway or inability to speak",
        "Inability to sit up",
        "Respiratory arrest or agonal respiration",
        "Nausea/vomiting",
        "Hypotension - systolic under 100",
        "Suspected pneumothorax",
        "Cardiogenic shock",
        "Penetrating chest trauma",
        "Facial anomalies/trauma/burns",
        "Closed head injury",
        "Active upper GI bleeding or history of recent gastric surgery"
      ]},
      { title: "Selects, checks and assembles equipment", steps: [
        "Assembles mask and tubing according to manufacturer instructions",
        "Coaches patient how to breathe through mask",
        "Connects CPAP unit to suitable O2 supply and attaches breathing circuit to device",
        "Turns on oxygen",
        "Sets device parameters, if applicable (end at 10 cm H2O)"
      ]},
      { title: "Performs procedure", steps: [
        "Places mask over patient's mouth and nose (leave EtCO2 in place, if applicable)",
        "May start at 5 cm H2O, but must end at 10 cm H2O for treatment",
        "Coaches patient to breathe normally"
      ]},
      { title: "Frequently reassesses patient for desired effects", steps: [
        "Decreased ventilatory distress",
        "SpO2 greater than 92%",
        "Decreased adventitious lung sounds",
        "Absence of reactions (barotrauma, pneumothorax)",
        "Records settings/readings and documents appropriately"
      ]}
    ]
  },
  {
    id: "aed",
    name: "Automated External Defibrillator",
    page: "Training Manual p18",
    levels: "EMR / EMT / AEMT / Paramedic",
    groups: [
      { title: "Steps", steps: [
        "Perform an initial assessment: check responsiveness, then look for breathing or only gasping and check pulse simultaneously (within 10 seconds)",
        "Begin CPR with 100% oxygen while preparing the AED",
        "CPR continuously until the AED is set up and attached",
        "If WITNESSED arrest: defibrillate immediately",
        "If UNWITNESSED arrest: perform CPR for 2 minutes prior to defibrillation",
        "Turn on the AED",
        "Place the defibrillator pads on the patient",
        "Stop CPR and allow the AED to analyze the rhythm",
        "If shock is advised, clear all personnel and administer the shock",
        "Resume CPR with compressions immediately if there is no response to the shock",
        "Repeat analyze / shock / CPR every 2 minutes when prompted"
      ]}
    ]
  },
  {
    id: "tourniquet",
    name: "Application of Tourniquet",
    page: "Training Manual p47",
    levels: "EMR / EMT / AEMT / Paramedic",
    groups: [
      { title: "Steps", steps: [
        "List the indications: uncontrollable bleeding after the application of direct pressure",
        "List the equipment required (bandages, tourniquet, blankets, oxygen)",
        "List the potential complications: severe tissue damage",
        "Apply firm direct pressure to the exposed wound",
        "If the bleeding fails to slow or stop, apply the tourniquet",
        "Properly position the patient",
        "Initiate steps to prevent heat loss",
        "Indicate need for immediate transport"
      ]},
      { title: "Application technique", steps: [
        "Route the band around the limb as proximal to the torso as possible",
        "Pass the band through the buckle and fasten it on itself, not over the rod clips",
        "Twist the rod until the bleeding stops, then secure the rod in the clips",
        "Band should be tight enough that the tips of 3 fingers cannot slide under it",
        "Check for bleeding and a distal pulse; if still bleeding, tighten or apply a second tourniquet side-by-side",
        "Clip the rod and secure with the time strap; record the time of application with a marker",
        "Never place a tourniquet over a joint, or over items in clothing"
      ]}
    ]
  },
  {
    id: "supraglottic",
    name: "Supraglottic Airway Device",
    page: "Training Manual p38",
    levels: "EMT / AEMT / Paramedic",
    groups: [
      { title: "Indications (EMT)", steps: [
        "Unable to orally intubate the patient",
        "Used by EMTs when the patient is apneic and pulseless ONLY",
        "Used as a primary way to secure an airway in a pediatric patient"
      ]},
      { title: "Steps", steps: [
        "List the indications for insertion of a supraglottic airway",
        "Select correct size device per manufacturer guidelines",
        "Takes or verbalizes appropriate PPE precautions",
        "Opens the airway manually",
        "Elevates tongue, inserts simple adjunct (OPA or NPA)",
        "Ventilates immediately with BVM unattached to oxygen, with room air",
        "Attaches oxygen reservoir and connects to high-flow regulator at 12-15 L/min",
        "Ventilates at 10-12/min (1 ventilation every 5-6 seconds) with appropriate volumes",
        "Checks/prepares the supraglottic device",
        "Lubricates the distal tip (may be verbalized)",
        "Positions head properly",
        "Performs a tongue-jaw lift",
        "Inserts device to proper depth",
        "Secures device (inflates cuffs with proper volumes, immediately removes syringe or secures strap)",
        "Confirms ventilation by auscultation bilaterally over the lungs and over the epigastrium",
        "Adjusts ventilation as necessary (slightly withdraws tube until optimized)",
        "Verifies placement with secondary confirmation: capnography, capnometry, or colorimetric device",
        "Secures device or confirms it remains secured",
        "Ventilates at proper rate and volume while observing capnography and pulse oximetry"
      ]}
    ]
  },
  {
    id: "oxygen",
    name: "Oxygen Administration",
    page: "Training Manual p6",
    levels: "EMR and above",
    groups: [
      { title: "Nonrebreather mask", steps: [
        "List indications for oxygen delivery by nonrebreather mask",
        "Assure regulator is on tank, open tank and check for leaks",
        "Check tank pressure",
        "Attach nonrebreather mask to oxygen",
        "Prefill the reservoir",
        "Adjust liter flow to 12-15 LPM",
        "Apply and adjust mask to the patient's face"
      ]},
      { title: "Nasal cannula", steps: [
        "List indications for oxygen delivery by nasal cannula",
        "Assure regulator is on tank, open tank and check for leaks",
        "Check tank pressure",
        "Attach nasal cannula to oxygen",
        "Adjust liter flow to 4-6 LPM",
        "Apply nasal cannula to the patient"
      ]},
      { title: "Bag-valve-mask", steps: [
        "List indications for oxygen delivery by bag-valve-mask",
        "Assure regulator is on tank, open tank and check for leaks",
        "Check tank pressure",
        "Assemble bag-valve-mask with an appropriately sized mask",
        "Connect reservoir and set oxygen at 12-15 LPM",
        "Create a proper mask-to-face seal while maintaining an open airway position",
        "Ventilate at the appropriate rate and check for chest rise"
      ]}
    ]
  },
  {
    id: "epipen",
    name: "Assisting with EpiPen Administration",
    page: "Training Manual p28",
    levels: "EMR / EMT",
    groups: [
      { title: "Steps", steps: [
        "Contact MCP if necessary",
        "Evaluate the patient, with attention to signs and symptoms of anaphylaxis",
        "Obtain the patient's EpiPen auto-injector",
        "Assure that it is prescribed to the patient",
        "Check the medication for expiration date and for cloudiness or discoloration",
        "Remove the safety cap",
        "Select the injection site: anterolateral thigh",
        "Push the injector firmly against the site",
        "Properly discard the injector",
        "Monitor the patient and record the results of the treatment",
        "Record vital signs"
      ]}
    ]
  },
  {
    id: "intranasal",
    name: "Intranasal Medication Administration",
    page: "Training Manual p27",
    levels: "EMR / EMT / AEMT / Paramedic",
    groups: [
      { title: "Steps", steps: [
        "Assures that patient is being ventilated adequately, if necessary",
        "Selects, checks and assembles equipment: medication, syringe, needle, mucosal atomizer device (MAD), sharps container, alcohol swabs, sterile gauze",
        "Confirms the rights: right patient, right medication, right dosage/concentration, right time, right route",
        "Checks medication for clarity and expiration date",
        "Reaffirms the medication",
        "Takes or verbalizes appropriate PPE precautions",
        "Stops ventilation and removes mask, if necessary",
        "Inserts MAD into nostril and briskly depresses the plunger - half the medication up each nostril",
        "Disposes/verbalizes proper disposal of syringe and MAD",
        "Resumes ventilation of patient, if necessary",
        "Verbalizes need to observe patient for desired effect and side effects"
      ]}
    ]
  },
  {
    id: "twelvelead",
    name: "12-Lead EKG Acquisition",
    page: "Training Manual p33",
    levels: "EMT / AEMT / Paramedic",
    groups: [
      { title: "Steps (complete within two minutes)", steps: [
        "Expose chest",
        "Limb lead placement, and placement options",
        "Precordial (chest) lead placement, with no deviation",
        "Speed: all ten leads must be placed within two minutes",
        "When to acquire according to optional standing orders",
        "Interface with hospital: notify for suspected MI, rapid transport"
      ]},
      { title: "Knowledge points", steps: [
        "Monitor quality vs. diagnostic quality",
        "Frequency response - must use the printed EKG for ST segment analysis",
        "Calibration and paper speeds",
        "Various limb lead placements",
        "Importance of anatomical uniformity with precordial leads",
        "Need for a note on the chart and EKG if a non-standard position is used",
        "Negative complex in aVR as a 'test' for lead placement",
        "Hair removal",
        "Artifact and what to do about it: skin prep, electrode attachment, patient movement, cable movement, vehicle movement, EMI"
      ]}
    ]
  }
];
