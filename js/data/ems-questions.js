/* EMT / NREMT-style question bank.
   Domains follow the NREMT cognitive exam blueprint.
   Every item carries an explanation so a wrong answer still teaches something. */

const EMS_QUESTIONS = [
  /* ---------- Airway, Respiration & Ventilation ---------- */
  {
    id: "ems-air-01",
    domain: "Airway & Ventilation",
    q: "What is the normal resting respiratory rate for a healthy adult?",
    choices: ["6-10 breaths per minute", "12-20 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"],
    answer: 1,
    why: "Adults normally breathe 12-20 times per minute. Below 12 or above 20 in an adult is a red flag that should push you to assess tidal volume and consider assisted ventilation."
  },
  {
    id: "ems-air-02",
    domain: "Airway & Ventilation",
    q: "An adult is in respiratory arrest but has a strong carotid pulse. How often should you deliver ventilations?",
    choices: ["1 breath every 3 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "2 breaths every 15 seconds"],
    answer: 1,
    why: "Rescue breathing for an adult with a pulse is 1 breath every 6 seconds (about 10 per minute). Faster rates cause gastric distention and raise intrathoracic pressure, which reduces venous return."
  },
  {
    id: "ems-air-03",
    domain: "Airway & Ventilation",
    q: "How do you size an oropharyngeal airway (OPA)?",
    choices: [
      "From the tip of the nose to the earlobe",
      "From the corner of the mouth to the angle of the jaw",
      "From the chin to the sternal notch",
      "By using the largest size that will fit"
    ],
    answer: 1,
    why: "Measure from the corner of the mouth to the angle of the jaw (or the earlobe). Too short and it pushes the tongue back; too long and it can press the epiglottis over the glottic opening."
  },
  {
    id: "ems-air-04",
    domain: "Airway & Ventilation",
    q: "Which finding is an absolute contraindication to inserting an oropharyngeal airway?",
    choices: ["Snoring respirations", "An intact gag reflex", "Blood in the mouth", "Suspected spinal injury"],
    answer: 1,
    why: "An intact gag reflex means the patient can still protect the airway. Forcing an OPA in will provoke vomiting and aspiration. Consider a nasopharyngeal airway instead."
  },
  {
    id: "ems-air-05",
    domain: "Airway & Ventilation",
    q: "A nonrebreather mask should be run at what oxygen flow rate?",
    choices: ["2-4 L/min", "6-8 L/min", "10-15 L/min", "20-25 L/min"],
    answer: 2,
    why: "10-15 L/min keeps the reservoir bag inflated and delivers roughly 80-90% oxygen. If the bag collapses on inspiration, the flow is too low."
  },
  {
    id: "ems-air-06",
    domain: "Airway & Ventilation",
    q: "A nasal cannula delivers approximately what oxygen concentration at 1-6 L/min?",
    choices: ["16-20%", "24-44%", "50-60%", "80-90%"],
    answer: 1,
    why: "A nasal cannula gives roughly 24-44% oxygen. Flows above 6 L/min dry and irritate the nasal mucosa without meaningfully raising the delivered concentration."
  },
  {
    id: "ems-air-07",
    domain: "Airway & Ventilation",
    q: "What is the maximum time you should apply suction to an adult's airway in a single attempt?",
    choices: ["5 seconds", "10-15 seconds", "30 seconds", "60 seconds"],
    answer: 1,
    why: "Limit adult suctioning to 10-15 seconds. Suction removes oxygen along with secretions and can trigger vagal bradycardia, so preoxygenate before and ventilate after."
  },
  {
    id: "ems-air-08",
    domain: "Airway & Ventilation",
    q: "Which maneuver should you use to open the airway of an unresponsive patient with a suspected cervical spine injury?",
    choices: ["Head-tilt, chin-lift", "Jaw-thrust", "Hyperextension of the neck", "Sniffing position"],
    answer: 1,
    why: "The modified jaw-thrust opens the airway while keeping the head in a neutral, in-line position. If the jaw-thrust fails to open the airway, a patent airway takes priority over spinal precautions."
  },
  {
    id: "ems-air-09",
    domain: "Airway & Ventilation",
    q: "High-pitched stridor on inspiration most likely indicates:",
    choices: [
      "Lower airway constriction such as asthma",
      "Upper airway narrowing or obstruction",
      "Fluid in the alveoli",
      "A pneumothorax"
    ],
    answer: 1,
    why: "Stridor is produced by turbulent airflow through a narrowed upper airway - croup, epiglottitis, anaphylaxis, foreign body, or burn-related swelling. Wheezing, by contrast, comes from the lower airways."
  },
  {
    id: "ems-air-10",
    domain: "Airway & Ventilation",
    q: "CPAP would be contraindicated in which of the following patients?",
    choices: [
      "A conscious CHF patient with rales and a blood pressure of 160/90",
      "An alert COPD patient with severe dyspnea and a blood pressure of 140/84",
      "An unresponsive patient with shallow respirations and a blood pressure of 78/40",
      "An anxious asthma patient who is speaking in short sentences"
    ],
    answer: 2,
    why: "CPAP requires a patient who is awake enough to follow commands, breathe spontaneously, and maintain a blood pressure. Hypotension and an unprotected airway rule it out - this patient needs BVM ventilation."
  },
  {
    id: "ems-air-11",
    domain: "Airway & Ventilation",
    q: "The single best indicator that your bag-valve-mask ventilations are effective is:",
    choices: [
      "The bag empties completely with each squeeze",
      "Visible chest rise with each ventilation",
      "You hear air escaping around the mask",
      "The patient's skin becomes flushed"
    ],
    answer: 1,
    why: "Adequate, visible chest rise is the bedside proof that air is reaching the lungs. A poor mask seal or an obstructed airway will let the bag empty with no chest rise at all."
  },
  {
    id: "ems-air-12",
    domain: "Airway & Ventilation",
    q: "The normal respiratory rate for a newborn is:",
    choices: ["12-20 breaths per minute", "20-30 breaths per minute", "30-60 breaths per minute", "60-80 breaths per minute"],
    answer: 2,
    why: "Newborns breathe 30-60 times per minute. Rates persistently below 30 in a newborn suggest impending respiratory failure and the need for positive pressure ventilation."
  },

  /* ---------- Cardiology & Resuscitation ---------- */
  {
    id: "ems-card-01",
    domain: "Cardiology & Resuscitation",
    q: "What is the correct compression depth for adult CPR?",
    choices: ["About 1 inch", "At least 2 inches (5 cm), no more than 2.4 inches", "At least 3 inches", "One-third the depth of the chest, roughly 4 inches"],
    answer: 1,
    why: "Push at least 2 inches but not more than 2.4 inches in an adult. Shallow compressions do not generate perfusion; excessive depth increases injury without improving outcomes."
  },
  {
    id: "ems-card-02",
    domain: "Cardiology & Resuscitation",
    q: "The recommended rate for chest compressions in a patient of any age is:",
    choices: ["60-80 per minute", "80-100 per minute", "100-120 per minute", "120-140 per minute"],
    answer: 2,
    why: "100-120 compressions per minute. Faster than 120 shortens diastole and the heart does not refill, which drops coronary perfusion pressure."
  },
  {
    id: "ems-card-03",
    domain: "Cardiology & Resuscitation",
    q: "Two rescuers are performing CPR on a 4-year-old child without an advanced airway. What compression-to-ventilation ratio should they use?",
    choices: ["30:2", "15:2", "5:1", "Continuous compressions with no ventilations"],
    answer: 1,
    why: "Two-rescuer CPR on an infant or child uses 15:2. Pediatric arrests are most often respiratory in origin, so ventilations carry more weight than in adult arrest. A single rescuer still uses 30:2."
  },
  {
    id: "ems-card-04",
    domain: "Cardiology & Resuscitation",
    q: "Interruptions in chest compressions should be limited to no more than:",
    choices: ["5 seconds", "10 seconds", "20 seconds", "30 seconds"],
    answer: 1,
    why: "Keep every pause under 10 seconds. Coronary perfusion pressure falls off immediately when compressions stop and takes several compressions to rebuild."
  },
  {
    id: "ems-card-05",
    domain: "Cardiology & Resuscitation",
    q: "Before assisting a patient with nitroglycerin, which question is most critical to ask?",
    choices: [
      "Have you eaten in the last four hours?",
      "Have you taken any erectile dysfunction medication in the last 24-48 hours?",
      "Do you have any allergies to shellfish?",
      "Have you ever had surgery?"
    ],
    answer: 1,
    why: "Nitrates combined with PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) can cause profound, refractory hypotension. Also confirm systolic blood pressure is above your protocol's threshold, commonly 100 mmHg."
  },
  {
    id: "ems-card-06",
    domain: "Cardiology & Resuscitation",
    q: "The usual EMS dose of aspirin for a patient with suspected acute coronary syndrome is:",
    choices: ["81 mg swallowed whole", "160-325 mg chewed", "500 mg swallowed with water", "650 mg chewed"],
    answer: 1,
    why: "160-325 mg (commonly four 81 mg chewable tablets) chewed for faster absorption. Aspirin inhibits platelet aggregation and measurably reduces mortality in myocardial infarction."
  },
  {
    id: "ems-card-07",
    domain: "Cardiology & Resuscitation",
    q: "You are applying an AED to a 5-year-old in cardiac arrest. Pediatric pads are unavailable. You should:",
    choices: [
      "Withhold defibrillation and continue CPR only",
      "Use adult pads, ensuring they do not touch each other",
      "Cut the adult pads in half",
      "Wait for ALS to arrive with pediatric pads"
    ],
    answer: 1,
    why: "For a child under 8, pediatric pads or a dose attenuator are preferred, but if they are not available, use adult pads. Place them so they do not touch - anterior/posterior placement works well on a small chest."
  },
  {
    id: "ems-card-08",
    domain: "Cardiology & Resuscitation",
    q: "Which set of findings best suggests cardiogenic shock?",
    choices: [
      "Warm flushed skin, bounding pulse, and hypertension",
      "Pale cool clammy skin, weak rapid pulse, and hypotension in a patient with chest pain",
      "Hives, wheezing, and facial swelling",
      "Fever, warm skin, and a widening pulse pressure"
    ],
    answer: 1,
    why: "In cardiogenic shock the pump fails, so the body compensates by vasoconstricting: cool, pale, clammy skin with a weak, fast pulse and falling pressure, often alongside chest pain or pulmonary edema."
  },

  /* ---------- Trauma ---------- */
  {
    id: "ems-trauma-01",
    domain: "Trauma",
    q: "What is the first step in controlling external hemorrhage from an extremity?",
    choices: ["Apply a tourniquet", "Apply direct pressure", "Elevate the extremity", "Apply a pressure point"],
    answer: 1,
    why: "Direct pressure controls the large majority of external bleeding. If direct pressure fails or the bleeding is life-threatening from the start, move quickly to a tourniquet - do not waste time on elevation or pressure points."
  },
  {
    id: "ems-trauma-02",
    domain: "Trauma",
    q: "After applying a tourniquet, you should:",
    choices: [
      "Loosen it every 10 minutes to restore circulation",
      "Tighten until bleeding stops, note the time of application, and leave it in place",
      "Cover it with a bandage so the patient does not see it",
      "Apply a second tourniquet distally"
    ],
    answer: 1,
    why: "Tighten until the bleeding stops (and the distal pulse disappears), write the application time, and leave the tourniquet exposed and in place. Periodically loosening it causes repeated blood loss and washes out metabolic acids."
  },
  {
    id: "ems-trauma-03",
    domain: "Trauma",
    q: "Which finding is a LATE sign of shock in an adult trauma patient?",
    choices: ["Tachycardia", "Anxiety and restlessness", "Hypotension", "Cool, clammy skin"],
    answer: 2,
    why: "A falling blood pressure means compensation has failed. Adults can lose roughly 30% of blood volume before the systolic pressure drops - treat the tachycardia, the anxiety, and the skin signs long before that."
  },
  {
    id: "ems-trauma-04",
    domain: "Trauma",
    q: "Flail chest is defined as:",
    choices: [
      "A single rib fractured in two places",
      "Two or more adjacent ribs fractured in two or more places",
      "Any fracture of the sternum",
      "Fractures of the first and second ribs"
    ],
    answer: 1,
    why: "Two or more adjacent ribs broken in two or more places creates a free-floating segment that moves paradoxically - in on inhalation, out on exhalation. The underlying pulmonary contusion is usually the greater threat."
  },
  {
    id: "ems-trauma-05",
    domain: "Trauma",
    q: "Using the rule of nines for an adult, what percentage of total body surface area does one entire leg represent?",
    choices: ["9%", "13.5%", "18%", "27%"],
    answer: 2,
    why: "In an adult each leg is 18%, each arm 9%, the head 9%, the anterior trunk 18%, the posterior trunk 18%, and the genitalia 1%. Children have proportionally larger heads and smaller legs."
  },
  {
    id: "ems-trauma-06",
    domain: "Trauma",
    q: "How should you manage an abdominal evisceration?",
    choices: [
      "Gently replace the organs and cover with a dry dressing",
      "Cover with a moist sterile dressing and then an occlusive dressing",
      "Pack the wound with gauze to control bleeding",
      "Leave it uncovered so the organs can breathe"
    ],
    answer: 1,
    why: "Never push exposed organs back in. Cover with a moist, sterile dressing to prevent drying, then an occlusive layer to retain heat and moisture. Flex the patient's knees to reduce abdominal tension."
  },
  {
    id: "ems-trauma-07",
    domain: "Trauma",
    q: "A patient has a knife impaled in the thigh. You should:",
    choices: [
      "Remove it and control bleeding with direct pressure",
      "Stabilize it in place with bulky dressings",
      "Remove it only if it interferes with transport",
      "Push it in further to tamponade the vessel"
    ],
    answer: 1,
    why: "Stabilize impaled objects in place - the object may be tamponading a vessel, and removing it can cause uncontrollable bleeding. The exception is an object through the cheek or one that blocks CPR."
  },
  {
    id: "ems-trauma-08",
    domain: "Trauma",
    q: "Cushing's triad, a sign of rising intracranial pressure, consists of:",
    choices: [
      "Hypotension, tachycardia, and rapid respirations",
      "Hypertension, bradycardia, and irregular respirations",
      "Fever, tachycardia, and hypotension",
      "Hypotension, bradycardia, and warm dry skin"
    ],
    answer: 1,
    why: "Rising ICP produces hypertension (often with a widening pulse pressure), bradycardia, and an irregular respiratory pattern. It is a late and ominous sign of brain herniation."
  },
  {
    id: "ems-trauma-09",
    domain: "Trauma",
    q: "Which findings suggest a tension pneumothorax?",
    choices: [
      "Bilateral wheezing and a productive cough",
      "Absent breath sounds on one side, jugular vein distention, and worsening hypotension",
      "Rales in both lung bases and pink frothy sputum",
      "Pain on inspiration with clear lung sounds"
    ],
    answer: 1,
    why: "Air trapped under pressure collapses the lung and shifts the mediastinum, compressing the great vessels: unilateral absent breath sounds, JVD, severe dyspnea, and hypotension. Tracheal deviation is a very late finding."
  },

  /* ---------- Medical / Obstetrics ---------- */
  {
    id: "ems-med-01",
    domain: "Medical & OB",
    q: "A diabetic patient is confused, diaphoretic, and tachycardic but can follow commands and swallow. The best treatment is:",
    choices: [
      "Oral glucose",
      "Nothing by mouth until ALS arrives",
      "An epinephrine auto-injector",
      "Activated charcoal"
    ],
    answer: 0,
    why: "These are classic hypoglycemia findings. If the patient is awake enough to protect the airway and swallow, oral glucose is indicated. Never put anything in the mouth of a patient who cannot swallow or protect the airway."
  },
  {
    id: "ems-med-02",
    domain: "Medical & OB",
    q: "The adult dose and route for an epinephrine auto-injector in anaphylaxis is:",
    choices: ["0.15 mg subcutaneously in the arm", "0.3 mg IM in the lateral thigh", "1.0 mg IV push", "0.5 mg sublingually"],
    answer: 1,
    why: "0.3 mg intramuscularly in the lateral thigh (vastus lateralis) for an adult; 0.15 mg for a pediatric patient. The lateral thigh gives the fastest absorption of the available IM sites."
  },
  {
    id: "ems-med-03",
    domain: "Medical & OB",
    q: "Which three findings make up the Cincinnati Prehospital Stroke Scale?",
    choices: [
      "Facial droop, arm drift, abnormal speech",
      "Pupil size, grip strength, gait",
      "Headache, nausea, dizziness",
      "Blood pressure, heart rate, blood glucose"
    ],
    answer: 0,
    why: "Facial droop, arm drift, and abnormal speech. Any one abnormal finding makes stroke likely. Just as important: establish the last known well time, because it drives eligibility for thrombolytics or thrombectomy."
  },
  {
    id: "ems-med-04",
    domain: "Medical & OB",
    q: "A patient is actively seizing. Your priority is to:",
    choices: [
      "Restrain the extremities to prevent injury",
      "Place a bite block between the teeth",
      "Protect the patient from injury and manage the airway",
      "Perform a rapid trauma assessment"
    ],
    answer: 2,
    why: "Move furniture out of the way, pad what you can, and keep the airway open with suction ready. Never restrain a seizing patient or force anything into the mouth. A seizure lasting more than 5 minutes is status epilepticus - a true emergency."
  },
  {
    id: "ems-med-05",
    domain: "Medical & OB",
    q: "Pinpoint pupils, respiratory depression, and unresponsiveness most strongly suggest:",
    choices: ["Stimulant overdose", "Opioid overdose", "Hypoglycemia", "Hyperthermia"],
    answer: 1,
    why: "That triad - miosis, respiratory depression, and CNS depression - is the classic opioid toxidrome. Ventilate first, then give naloxone per protocol; the ventilation is what saves the patient."
  },
  {
    id: "ems-med-06",
    domain: "Medical & OB",
    q: "A woman in labor tells you she feels the urge to push and you see crowning. You should:",
    choices: [
      "Load and transport immediately with lights and siren",
      "Prepare for delivery on scene",
      "Have her cross her legs to delay delivery",
      "Place her in a left lateral recumbent position and wait"
    ],
    answer: 1,
    why: "Crowning plus the urge to push means delivery is imminent - prepare to deliver where you are. Attempting to delay delivery or moving the patient mid-delivery endangers both mother and infant."
  },
  {
    id: "ems-med-07",
    domain: "Medical & OB",
    q: "What are the five components of the APGAR score?",
    choices: [
      "Appearance, pulse, grimace, activity, respirations",
      "Airway, perfusion, gag, alertness, rate",
      "Alertness, pupils, glucose, arousal, respiration",
      "Appearance, position, grip, activity, reflex"
    ],
    answer: 0,
    why: "Appearance (color), Pulse, Grimace (reflex irritability), Activity (muscle tone), and Respirations - each scored 0-2 at 1 and 5 minutes after birth."
  },
  {
    id: "ems-med-08",
    domain: "Medical & OB",
    q: "A newborn has been dried, warmed, and stimulated but the heart rate is 80 beats per minute. Your next action is:",
    choices: [
      "Begin chest compressions",
      "Begin positive pressure ventilation",
      "Continue to observe and reassess in one minute",
      "Apply a nonrebreather mask"
    ],
    answer: 1,
    why: "A newborn heart rate under 100 after drying and stimulation calls for positive pressure ventilation at 40-60 breaths per minute. Compressions are added only if the rate stays below 60 after 30 seconds of effective PPV."
  },

  /* ---------- EMS Operations ---------- */
  {
    id: "ems-ops-01",
    domain: "EMS Operations",
    q: "During scene size-up, what takes priority over everything else?",
    choices: [
      "Determining the mechanism of injury",
      "Scene safety and standard precautions",
      "Counting the number of patients",
      "Requesting additional resources"
    ],
    answer: 1,
    why: "You cannot help anyone if you become a patient. Standard precautions and scene safety come first, then MOI/NOI, number of patients, and additional resources."
  },
  {
    id: "ems-ops-02",
    domain: "EMS Operations",
    q: "In START triage, an adult who is breathing at 34 breaths per minute is tagged:",
    choices: ["Minor (green)", "Delayed (yellow)", "Immediate (red)", "Expectant (black)"],
    answer: 2,
    why: "START uses RPM: Respirations over 30, no radial pulse or capillary refill over 2 seconds, or inability to follow simple commands - any one makes the patient Immediate (red)."
  },
  {
    id: "ems-ops-03",
    domain: "EMS Operations",
    q: "You find an unresponsive adult with no family present. Under what legal principle do you begin treatment?",
    choices: ["Expressed consent", "Informed consent", "Implied consent", "Involuntary consent"],
    answer: 2,
    why: "Implied consent assumes a reasonable person who is unresponsive and in need of emergency care would consent to it. It covers treatment only until the patient can make their own decisions."
  },
  {
    id: "ems-ops-04",
    domain: "EMS Operations",
    q: "Which is required for a legally valid patient refusal?",
    choices: [
      "The patient must be alert, oriented, and competent to make the decision",
      "A family member must sign the form",
      "The refusal must be witnessed by a police officer",
      "The patient must be over the age of 21"
    ],
    answer: 0,
    why: "The patient must have decision-making capacity, must be informed of the risks of refusing, and should be encouraged to call back. Document the assessment, the warnings given, and get a witness signature."
  },
  {
    id: "ems-ops-05",
    domain: "EMS Operations",
    q: "You arrive at a possible hazardous materials incident. Your first action is to:",
    choices: [
      "Enter and remove patients quickly",
      "Position upwind and uphill, isolate the area, and deny entry",
      "Begin decontamination with copious water",
      "Identify the substance by approaching the placard for a closer look"
    ],
    answer: 1,
    why: "At the awareness level the job is recognize, isolate, notify. Stage upwind and uphill, keep people out, identify the material from a distance with binoculars and the ERG, and call for a hazmat team."
  },
  {
    id: "ems-ops-06",
    domain: "EMS Operations",
    q: "The minimum recommended landing zone for a medical helicopter is approximately:",
    choices: ["30 x 30 feet", "60 x 60 feet", "100 x 100 feet", "300 x 300 feet"],
    answer: 2,
    why: "A 100 x 100 foot area that is flat, firm, and clear of wires, poles, and loose debris. Never approach the aircraft until the crew signals you, and always approach from the front, in the pilot's view."
  },
  {
    id: "ems-ops-07",
    domain: "EMS Operations",
    q: "Under HIPAA, sharing patient information with the receiving hospital staff is:",
    choices: [
      "A violation requiring written patient consent",
      "Permitted, because it is for treatment purposes",
      "Permitted only if the patient is unresponsive",
      "Permitted only with a supervisor's approval"
    ],
    answer: 1,
    why: "HIPAA allows disclosure for treatment, payment, and health care operations. Handing off clinical information to the receiving team is treatment. Discussing the call in a public hallway or on social media is not."
  },
  {
    id: "ems-ops-08",
    domain: "EMS Operations",
    q: "When operating an ambulance with lights and siren, 'due regard' means:",
    choices: [
      "You are exempt from all traffic laws",
      "You must drive with reasonable care for the safety of others at all times",
      "You may exceed the speed limit by up to 20 mph",
      "Other drivers are legally required to yield, so you may proceed through intersections"
    ],
    answer: 1,
    why: "Emergency exemptions never remove the duty to drive safely. Come to a complete stop at red lights and stop signs per your protocol, and assume other drivers have not seen or heard you."
  }
];
