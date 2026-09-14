/* Firefighter I / II question bank, aligned to NFPA 1001 job performance areas
   and standard IFSTA Essentials content. */

const FIRE_QUESTIONS = [
  /* ---------- Fire Behavior ---------- */
  {
    id: "fire-beh-01",
    domain: "Fire Behavior",
    q: "The fire tetrahedron consists of heat, fuel, oxygen, and:",
    choices: ["Smoke", "An uninhibited chemical chain reaction", "Pressure", "Carbon monoxide"],
    answer: 1,
    why: "The tetrahedron adds the self-sustaining chemical chain reaction to the classic triangle. Remove any one of the four and the fire goes out - which is exactly how dry chemical and clean agents work."
  },
  {
    id: "fire-beh-02",
    domain: "Fire Behavior",
    q: "Heat transferred through the air in the form of electromagnetic waves, requiring no physical contact, is:",
    choices: ["Conduction", "Convection", "Radiation", "Direct flame impingement"],
    answer: 2,
    why: "Radiation travels in straight lines through space and is the primary way fire extends to exposures across a street or alley. Conduction needs contact; convection needs a moving fluid such as hot gases."
  },
  {
    id: "fire-beh-03",
    domain: "Fire Behavior",
    q: "The sudden, simultaneous ignition of all combustible contents in a compartment is called:",
    choices: ["Backdraft", "Flashover", "Rollover", "Thermal layering"],
    answer: 1,
    why: "Flashover happens when radiant heat raises everything in the room to its ignition temperature at once. Warning signs include rollover across the ceiling, rapidly building heat, and thick, dark, turbulent smoke."
  },
  {
    id: "fire-beh-04",
    domain: "Fire Behavior",
    q: "Which set of signs suggests a potential backdraft?",
    choices: [
      "Bright open flames and light gray smoke",
      "Smoke puffing in and out of openings, smoke-stained windows, and little visible flame",
      "Thin white smoke rising straight up",
      "Free-burning fire venting from a window"
    ],
    answer: 1,
    why: "Backdraft is a ventilation-limited condition - the fire has consumed the oxygen and is waiting for air. Pulsing smoke, stained windows, and a hot, pressurized space with little flame are the classic indicators. Ventilate vertically, above the fire."
  },
  {
    id: "fire-beh-05",
    domain: "Fire Behavior",
    q: "The four stages of fire development, in order, are:",
    choices: [
      "Growth, incipient, decay, fully developed",
      "Incipient, growth, fully developed, decay",
      "Ignition, flashover, backdraft, overhaul",
      "Smoldering, flaming, rollover, collapse"
    ],
    answer: 1,
    why: "Incipient, growth, fully developed, decay. Flashover typically occurs in the transition from growth to fully developed; backdraft is a risk during decay when oxygen is depleted."
  },
  {
    id: "fire-beh-06",
    domain: "Fire Behavior",
    q: "A fire involving energized electrical equipment is classified as:",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    answer: 2,
    why: "Class A is ordinary combustibles, B is flammable liquids and gases, C is energized electrical, D is combustible metals, and K is cooking oils and fats. Once the power is cut, a Class C fire becomes whatever the burning material is."
  },
  {
    id: "fire-beh-07",
    domain: "Fire Behavior",
    q: "Water is the most effective extinguishing agent on Class A fires primarily because it:",
    choices: [
      "Smothers the fire by excluding oxygen",
      "Absorbs heat as it converts to steam, cooling the fuel below its ignition temperature",
      "Chemically interrupts the chain reaction",
      "Dilutes the fuel"
    ],
    answer: 1,
    why: "Water's high heat of vaporization means it soaks up enormous heat when it turns to steam - roughly 1,700 times expansion at 212F. Cooling is the mechanism; the steam produced also provides some smothering effect."
  },
  {
    id: "fire-beh-08",
    domain: "Fire Behavior",
    q: "For fireground purposes, smoke should be regarded as:",
    choices: [
      "A harmless byproduct of combustion",
      "Fuel - an ignitable mixture of unburned gases and particulates",
      "Only a visibility problem",
      "An indicator that the fire is going out"
    ],
    answer: 1,
    why: "Smoke is unburned fuel suspended in hot gases. Dense, dark, fast-moving smoke under pressure is a loaded gun - it can ignite as rollover, flashover, or a smoke explosion."
  },

  /* ---------- PPE & SCBA ---------- */
  {
    id: "fire-ppe-01",
    domain: "PPE & SCBA",
    q: "The SCBA low-air alarm is required to activate when the remaining cylinder air reaches:",
    choices: ["50% of capacity", "33% of capacity", "25% of capacity", "10% of capacity"],
    answer: 1,
    why: "NFPA 1981 requires the end-of-service-time indicator to activate at 33% of rated cylinder capacity. That air is your reserve for exiting - it is not working air."
  },
  {
    id: "fire-ppe-02",
    domain: "PPE & SCBA",
    q: "The OSHA 'two-in, two-out' rule requires that:",
    choices: [
      "Two firefighters enter and two remain outside, trained and equipped for rescue",
      "Two firefighters enter through two separate doors",
      "Crews rotate out every two hours",
      "Two hoselines are stretched before entry"
    ],
    answer: 0,
    why: "In an IDLH atmosphere, entry crews work in teams of at least two while at least two properly equipped firefighters stand by outside. The exception is a known life hazard where immediate rescue can be made."
  },
  {
    id: "fire-ppe-03",
    domain: "PPE & SCBA",
    q: "A PASS device functions by:",
    choices: [
      "Measuring the remaining air in the SCBA cylinder",
      "Sounding an alarm when the firefighter remains motionless for a preset time",
      "Filtering particulates from the breathing air",
      "Tracking the firefighter's position by GPS"
    ],
    answer: 1,
    why: "The Personal Alert Safety System sounds after roughly 30 seconds of no motion, and can also be activated manually. It must be turned on every time you don SCBA - an unactivated PASS has contributed to firefighter deaths."
  },
  {
    id: "fire-ppe-04",
    domain: "PPE & SCBA",
    q: "In structural firefighting PPE, TPP and THL refer to:",
    choices: [
      "Total protective pressure and total heat load",
      "Thermal protective performance and total heat loss",
      "Thermal padding protection and thermal hazard limit",
      "Turnout protection package and turnout heat level"
    ],
    answer: 1,
    why: "TPP measures how well the ensemble insulates against heat; THL measures how well it sheds the body's own heat. They pull against each other - more insulation means more heat stress on the firefighter."
  },
  {
    id: "fire-ppe-05",
    domain: "PPE & SCBA",
    q: "Open-circuit SCBA used in structural firefighting operates in what mode?",
    choices: ["Demand", "Positive pressure", "Negative pressure", "Closed-circuit rebreather"],
    answer: 1,
    why: "Positive pressure keeps the facepiece pressure slightly above ambient, so any leak in the seal pushes air out rather than drawing contaminants in."
  },

  /* ---------- Ropes, Knots & Ladders ---------- */
  {
    id: "fire-rope-01",
    domain: "Ropes & Ladders",
    q: "Once a life safety rope has been used to support a load under emergency conditions and fails inspection, it should be:",
    choices: [
      "Returned to service after washing",
      "Destroyed or downgraded to utility rope so it can never be used for life safety again",
      "Stored for training use as life safety rope",
      "Shortened by ten feet and reinspected"
    ],
    answer: 1,
    why: "NFPA 1983 is strict: a life safety rope that cannot pass inspection is removed from life safety service permanently. It can be re-marked as utility rope, but it never supports a person again."
  },
  {
    id: "fire-rope-02",
    domain: "Ropes & Ladders",
    q: "Which knot is most commonly used to secure a hoisting rope to a pike pole or an axe handle?",
    choices: ["Bowline", "Clove hitch with a half hitch", "Becket bend", "Figure eight on a bight"],
    answer: 1,
    why: "A clove hitch plus one or more half hitches secures the tool and keeps it oriented for hoisting. A bowline forms a fixed loop; a becket bend joins two ropes of unequal diameter."
  },
  {
    id: "fire-rope-03",
    domain: "Ropes & Ladders",
    q: "A ground ladder should be raised at a climbing angle of approximately:",
    choices: ["45 degrees", "60 degrees", "75 degrees", "90 degrees"],
    answer: 2,
    why: "75 degrees. A quick field check: place the butt one quarter of the ladder's working length away from the building. A 24-foot working length means a 6-foot butt distance."
  },
  {
    id: "fire-rope-04",
    domain: "Ropes & Ladders",
    q: "When a ladder is placed for roof access, the tip should extend:",
    choices: [
      "Level with the roof edge",
      "3 to 5 rungs above the roofline",
      "10 rungs above the roofline",
      "Below the roofline so it does not obstruct ventilation"
    ],
    answer: 1,
    why: "Three to five rungs above the roofline gives a handhold for stepping on and off and makes the ladder visible to crews on the roof - critical when they are exiting in heavy smoke."
  },
  {
    id: "fire-rope-05",
    domain: "Ropes & Ladders",
    q: "When a ladder is placed to a window for rescue, the tip should be placed:",
    choices: [
      "Even with or just below the windowsill",
      "Three rungs above the top of the window",
      "In the center of the window opening",
      "At the top of the window frame"
    ],
    answer: 0,
    why: "Placing the tip at or just below the sill leaves the opening clear so victims and firefighters can move through it directly onto the ladder."
  },

  /* ---------- Forcible Entry, Search & Rescue ---------- */
  {
    id: "fire-fe-01",
    domain: "Forcible Entry & Search",
    q: "The tool combination known as 'the irons' consists of:",
    choices: [
      "A halligan bar and a flat-head axe",
      "A pick-head axe and a sledgehammer",
      "A hydraulic spreader and a cutter",
      "A pike pole and a bolt cutter"
    ],
    answer: 0,
    why: "A halligan married to a flat-head axe is the classic forcible entry set. The axe drives the halligan; the halligan's adz, fork, and pike do the prying and striking work."
  },
  {
    id: "fire-fe-02",
    domain: "Forcible Entry & Search",
    q: "A primary search is best described as:",
    choices: [
      "A slow, thorough search performed after the fire is controlled",
      "A rapid search for victims performed as soon as conditions allow, often under fire conditions",
      "A search of the exterior only",
      "A search performed only by the rapid intervention team"
    ],
    answer: 1,
    why: "The primary search is fast and aimed at finding savable victims quickly. The secondary search is the thorough, systematic sweep performed by a different crew after the fire is knocked down."
  },
  {
    id: "fire-fe-03",
    domain: "Forcible Entry & Search",
    q: "When searching a smoke-filled room, maintaining contact with a wall is important because it:",
    choices: [
      "Keeps you out of the thermal layer",
      "Provides an orientation reference and a path back out",
      "Prevents the floor from collapsing",
      "Improves radio reception"
    ],
    answer: 1,
    why: "A right- or left-hand wall search gives you a continuous reference in zero visibility, and reversing the hand you are using walks you back out the way you came in."
  },
  {
    id: "fire-fe-04",
    domain: "Forcible Entry & Search",
    q: "In the LUNAR mayday report, the letters stand for:",
    choices: [
      "Location, Unit, Name, Assignment, Resources needed",
      "Level, Urgency, Name, Air, Rescue",
      "Location, Urgency, Number, Air, Radio",
      "Line, Unit, Name, Access, Route"
    ],
    answer: 0,
    why: "Location, Unit, Name, Assignment, and Resources needed. Transmit the mayday immediately, activate your PASS, and stay put unless you have a clear path out - do not wait until your air is gone to call."
  },
  {
    id: "fire-fe-05",
    domain: "Forcible Entry & Search",
    q: "Before forcing a door, the first thing a firefighter should do is:",
    choices: [
      "Break the glass to check conditions",
      "Try the door - it may be unlocked",
      "Cut the hinges",
      "Apply water through the doorway"
    ],
    answer: 1,
    why: "Try before you pry. Checking the door also lets you read conditions - heat on the door, smoke pushing from the seams - before you create an opening that changes the fire's airflow."
  },

  /* ---------- Hose, Streams & Water Supply ---------- */
  {
    id: "fire-hose-01",
    domain: "Hose & Water Supply",
    q: "The standard operating nozzle pressure for a combination fog nozzle on a handline is:",
    choices: ["50 psi", "75 psi", "100 psi", "150 psi"],
    answer: 2,
    why: "Fog nozzles on handlines are typically designed for 100 psi. A smooth bore handline runs at 50 psi, and a smooth bore master stream at 80 psi."
  },
  {
    id: "fire-hose-02",
    domain: "Hose & Water Supply",
    q: "Compared with a fog stream, a solid (smooth bore) stream generally offers:",
    choices: [
      "Greater reach and penetration with less air entrainment",
      "Better heat absorption per gallon",
      "A wider protective pattern for crew protection",
      "More effective hydraulic ventilation"
    ],
    answer: 0,
    why: "Solid streams reach farther, penetrate deeper into the fuel, and disturb the thermal layer less. Fog streams break water into smaller droplets for faster heat absorption and can be used for hydraulic ventilation and crew protection."
  },
  {
    id: "fire-hose-03",
    domain: "Hose & Water Supply",
    q: "Friction loss in a hoseline increases most sharply when:",
    choices: [
      "The hose diameter is increased",
      "The flow rate through the hose is increased",
      "The hose is laid downhill",
      "The nozzle is shut down"
    ],
    answer: 1,
    why: "Friction loss varies approximately with the square of the flow - double the gpm and friction loss roughly quadruples. Increasing hose diameter reduces it substantially."
  },
  {
    id: "fire-hose-04",
    domain: "Hose & Water Supply",
    q: "Under NFPA 291, a hydrant with a GREEN bonnet and caps indicates a flow of:",
    choices: [
      "Less than 500 gpm",
      "500 to 999 gpm",
      "1,000 to 1,499 gpm",
      "1,500 gpm or greater"
    ],
    answer: 2,
    why: "NFPA 291 color coding: red is under 500 gpm, orange 500-999, green 1,000-1,499, and light blue 1,500 gpm or more."
  },
  {
    id: "fire-hose-05",
    domain: "Hose & Water Supply",
    q: "The Higbee indicator on a hose coupling is used to:",
    choices: [
      "Show the maximum working pressure",
      "Identify the correct starting point for the threads so couplings are not cross-threaded",
      "Indicate the hose diameter",
      "Lock the coupling under pressure"
    ],
    answer: 1,
    why: "The Higbee cut is a blunted thread start, and the indicator marks it. Lining up the indicators lets you join couplings quickly in the dark without cross-threading."
  },
  {
    id: "fire-hose-06",
    domain: "Hose & Water Supply",
    q: "A forward lay is a hose evolution in which the apparatus:",
    choices: [
      "Drops a supply line at the hydrant and drives to the fire",
      "Drops a supply line at the fire and drives to the hydrant",
      "Carries all hose to the fire by hand",
      "Connects two engines pumping in series"
    ],
    answer: 0,
    why: "Forward lay: hydrant to fire. Reverse lay: fire to hydrant, which is used when the first engine needs to stay at the fire with its attack lines or when a supply pumper is needed at the hydrant."
  },

  /* ---------- Ventilation ---------- */
  {
    id: "fire-vent-01",
    domain: "Ventilation",
    q: "The primary purpose of fireground ventilation is to:",
    choices: [
      "Remove heat, smoke, and fire gases to improve conditions for victims and crews",
      "Make the building easier to see from the street",
      "Cool the fire by introducing outside air",
      "Reduce water damage"
    ],
    answer: 0,
    why: "Ventilation channels heat and toxic smoke out, improving visibility and survivability, reducing flashover potential, and letting attack crews advance. It must be coordinated with the attack - uncoordinated ventilation feeds the fire."
  },
  {
    id: "fire-vent-02",
    domain: "Ventilation",
    q: "Vertical ventilation openings should be made:",
    choices: [
      "As far from the fire as possible",
      "Directly over the fire whenever it can be done safely",
      "Only on the leeward side of the roof",
      "At the lowest point of the roof"
    ],
    answer: 1,
    why: "An opening directly over the fire lets the heat and smoke take the shortest path out, rather than drawing them horizontally through uninvolved parts of the building. Always sound the roof and have two means of egress."
  },
  {
    id: "fire-vent-03",
    domain: "Ventilation",
    q: "Positive pressure ventilation is most effective when:",
    choices: [
      "The fan is placed inside the structure with all openings closed",
      "An adequate exhaust opening is created and the fan pressurizes the space behind the attack",
      "Multiple fans push air from all sides simultaneously",
      "It is started before the fire location is known"
    ],
    answer: 1,
    why: "PPV needs a controlled exhaust opening roughly matched to the inlet, and it must be coordinated with the attack crew. Pressurizing a building with no exhaust, or before the fire is located, can push fire into uninvolved areas."
  },

  /* ---------- Hazardous Materials ---------- */
  {
    id: "fire-haz-01",
    domain: "Hazardous Materials",
    q: "On an NFPA 704 marking, the BLUE quadrant indicates:",
    choices: ["Flammability", "Health hazard", "Instability/reactivity", "Special hazards"],
    answer: 1,
    why: "Blue is health, red is flammability, yellow is instability/reactivity, and the white section carries special hazards such as W (reacts with water) or OX (oxidizer). Each is rated 0 through 4."
  },
  {
    id: "fire-haz-02",
    domain: "Hazardous Materials",
    q: "At the awareness level, a firefighter's responsibilities at a hazmat incident are to:",
    choices: [
      "Recognize the hazard, isolate the area, and notify appropriate resources",
      "Enter the hot zone and perform rescue",
      "Begin technical decontamination",
      "Plug and patch the leaking container"
    ],
    answer: 0,
    why: "Awareness level is recognize, isolate, notify - no offensive action. Operations level personnel may take defensive actions such as diking and damming from a safe distance."
  },
  {
    id: "fire-haz-03",
    domain: "Hazardous Materials",
    q: "The orange-bordered pages of the Emergency Response Guidebook contain:",
    choices: [
      "The alphabetical index of materials",
      "The numerically indexed material list",
      "The action guides describing hazards and emergency response",
      "The table of initial isolation and protective action distances"
    ],
    answer: 2,
    why: "ERG color sections: yellow is indexed by UN/ID number, blue by material name, orange contains the response guides, and green holds the initial isolation and protective action distances for materials highlighted in yellow and blue."
  },

  /* ---------- Fireground Operations & Safety ---------- */
  {
    id: "fire-ops-01",
    domain: "Fireground Operations",
    q: "In the incident priority model RECEO-VS, the 'E' immediately following Rescue stands for:",
    choices: ["Extinguishment", "Exposures", "Evacuation", "Entry"],
    answer: 1,
    why: "Rescue, Exposures, Confinement, Extinguishment, Overhaul, plus Ventilation and Salvage as ongoing tasks. Protecting exposures comes before extinguishment because losing a neighboring structure multiplies the problem."
  },
  {
    id: "fire-ops-02",
    domain: "Fireground Operations",
    q: "The recommended span of control for one supervisor on an incident is:",
    choices: ["1 to 2 people", "3 to 7 people, with 5 being optimal", "8 to 12 people", "Unlimited, if radios are available"],
    answer: 1,
    why: "ICS sets span of control at three to seven, with five as the target. Exceeding it is the cue to add divisions or groups rather than trying to track more units personally."
  },
  {
    id: "fire-ops-03",
    domain: "Fireground Operations",
    q: "A PAR (personnel accountability report) is a:",
    choices: [
      "Roll call confirming the location and status of every crew on the incident",
      "Written report filed after the incident",
      "Pump pressure verification",
      "Measure of air remaining in SCBA cylinders"
    ],
    answer: 0,
    why: "Command calls a PAR at benchmarks, after a mayday, after a sudden event such as a collapse, and at regular time intervals. Each company officer accounts for every member face to face."
  },
  {
    id: "fire-ops-04",
    domain: "Fireground Operations",
    q: "The primary role of a rapid intervention team (RIT/RIC) is to:",
    choices: [
      "Perform primary search of the fire floor",
      "Stand by, fully equipped, ready to rescue trapped or missing firefighters",
      "Operate the backup hoseline",
      "Manage rehab and accountability"
    ],
    answer: 1,
    why: "RIT stages ready with tools, a spare air supply, and a plan. Committing the RIT to routine fireground tasks defeats its purpose and must be followed by establishing a replacement team."
  },
  {
    id: "fire-ops-05",
    domain: "Fireground Operations",
    q: "The difference between salvage and overhaul is best described as:",
    choices: [
      "Salvage protects property from damage; overhaul searches for and extinguishes hidden fire",
      "Salvage occurs before the fire; overhaul occurs during the fire",
      "Salvage is performed by the fire investigator; overhaul by the engine company",
      "They are two names for the same task"
    ],
    answer: 0,
    why: "Salvage - covers, water removal, protecting contents - limits secondary damage and often starts early. Overhaul opens walls and ceilings to find extension, and should preserve evidence of the fire's origin and cause."
  },
  {
    id: "fire-ops-06",
    domain: "Fireground Operations",
    q: "Which condition is the strongest indicator of impending structural collapse?",
    choices: [
      "Light smoke from the eaves",
      "Bulging walls, sagging floors, and cracks in masonry",
      "Steam conversion at the nozzle",
      "A working smoke detector"
    ],
    answer: 1,
    why: "Bulging or leaning walls, sagging roofs or floors, large cracks, and the sound of structural members working all signal collapse. Establish a collapse zone of at least 1.5 times the building height and go defensive."
  },
  {
    id: "fire-ops-07",
    domain: "Fireground Operations",
    q: "Firefighter rehabilitation should be established:",
    choices: [
      "Only after the fire is fully extinguished",
      "Whenever the incident's size or duration poses a risk of heat stress or exhaustion",
      "Only at incidents lasting more than four hours",
      "Only when the outside temperature exceeds 90F"
    ],
    answer: 1,
    why: "NFPA 1584 calls for rehab whenever conditions warrant - typically after two SCBA cylinders or 45 minutes of work. Rehab includes rest, rehydration, active cooling or warming, and medical monitoring."
  }
];
