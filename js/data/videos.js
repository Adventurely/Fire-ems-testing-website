/* Training videos.
   GMVEMSC-produced videos come first - each one is published by the Council on its own
   training-resources page and hosted on the Council's YouTube channel.
   Every video ID here was verified against the YouTube oEmbed API, and the "source" field
   is the channel name YouTube reports, not a guess.

   Where GMVEMSC has not produced a video for a tested skill, that gap is listed in
   VIDEO_GAPS below rather than filled with a random third-party clip. */

const VIDEOS = [
  {
    id: "9bQf54uaWaA",
    title: "GMVEMSC CPAP Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "4:14",
    topic: "CPAP",
    sheet: "cpap",
    page: "https://gmvemsc.org/training-resources/cpap-training/",
    blurb: "The Council's own overview of prehospital CPAP - when it is indicated and how it works. Pair it with protocol 4013 and the CPAP skill sheet."
  },
  {
    id: "m3vOm0zVBcw",
    title: "GMVEMSC CPAP Application Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "0:42",
    topic: "CPAP",
    sheet: "cpap",
    page: "https://gmvemsc.org/training-resources/cpap-training/",
    blurb: "Short, hands-on demonstration of mask application - the part of the skill sheet that gets graded on technique rather than recall."
  },
  {
    id: "dS-V1h6-E5g",
    title: "LEO Narcan Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "2:55",
    topic: "Naloxone",
    sheet: "intranasal",
    page: "https://gmvemsc.org/training-resources/narcan-for-law-enforcement-officers/",
    blurb: "The Council's approach to opiate overdose. Produced for law enforcement, so it is not the full EMT protocol - but the intranasal technique and the 'ventilate first' priority are the same. See formulary 8033."
  },
  {
    id: "Duzdq4j-TvI",
    title: "GMVEMSC Football Equipment Removal Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "20:41",
    topic: "Spinal Motion Restriction",
    sheet: null,
    page: "https://gmvemsc.org/training-resources/football-equipment-removal-training/",
    blurb: "Directly supports protocol 3017.6, which requires protective equipment be removed prior to transport in equipment-intensive sports. Carries CE credit through the Council's post-test."
  },
  {
    id: "8JCVeo15n4E",
    title: "GMVEMSC SALT Triage Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "45:11",
    topic: "SALT Triage / MCI",
    sheet: null,
    page: "https://gmvemsc.org/training-resources/salt-triage-training/",
    blurb: "The regional triage system under protocol 3019. Note the region uses SALT, not START - national study material will teach you the wrong system."
  },
  {
    id: "Q1IzAzuL3C4",
    title: "GMVEMSC Triage Tags Training",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "30:25",
    topic: "SALT Triage / MCI",
    sheet: null,
    page: "https://gmvemsc.org/triage-tags-training/",
    blurb: "How the regional SALT triage tags and ribbons are actually filled out and applied."
  },
  {
    id: "lPoNoT7-TrY",
    title: "EMS MCI Communications, Surgenet, RHNS and OHTrac",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "-",
    topic: "SALT Triage / MCI",
    sheet: null,
    page: "https://gmvemsc.org/training-resources/regional-mci-communications-and-exercise-training/",
    blurb: "The EMS version of the regional MCI communications training - the Regional Hospital Notification System under protocol 3020."
  },
  {
    id: "Qdq0HVRXN_4",
    title: "GMVEMSC Rescue Task Force for Law Enforcement Officers",
    source: "Greater Miami Valley EMS Council",
    official: true,
    duration: "13:38",
    topic: "Active Shooter / RTF",
    sheet: null,
    page: "https://gmvemsc.org/rescue-task-force-for-law-enforcement-officers/",
    blurb: "How law enforcement and EMS operate together in a Rescue Task Force during an active shooter response."
  },

  /* ---- Not GMVEMSC. Included because protocol 2002 states outright that it
     'has adopted the 2025 American Heart Association CPR Guidelines', which makes
     the AHA the defining authority for compression technique in this region. ---- */
  {
    id: "QOWB1hYAjZc",
    title: "How to Save a Life: Hands-Only CPR",
    source: "American Heart Association",
    official: false,
    duration: "-",
    topic: "CPR",
    sheet: "aed",
    page: "https://cpr.heart.org/en/cpr-courses-and-kits/hands-only-cpr",
    blurb: "Compression rate, depth and full recoil demonstrated by the guideline body GMVEMSC protocol 2002 adopts.",
    caution: "This is LAY-RESCUER Hands-Only CPR. As an EMT you perform 30:2 with a BVM, not compression-only. Watch it for compression quality, then get your ratios from protocol 2002."
  },
  {
    id: "A5PnI4I-vd8",
    title: "Hands-Only CPR - Live Training Version",
    source: "American Heart Association",
    official: false,
    duration: "-",
    topic: "CPR",
    sheet: "aed",
    page: "https://cpr.heart.org/en/cpr-courses-and-kits/hands-only-cpr",
    blurb: "The AHA's instructor version, with a full 60 seconds of practice time so you can rehearse the 100-120/min rate against the metronome.",
    caution: "Again, compression-only is the lay-rescuer technique. Use it to drill rate and depth; your protocol sequence is 30:2."
  }
];

/* Tested skills with no GMVEMSC-produced video. Shown honestly on the page rather
   than backfilled with third-party clips of unverified technique. */
const VIDEO_GAPS = [
  "AED operation (see the AED skill sheet and protocol 2002)",
  "Commercial tourniquet application (the Training Manual has step-by-step photographs on p47-48)",
  "Supraglottic airway insertion (Training Manual p38-39)",
  "12-lead acquisition and lead placement (Training Manual p33-35)",
  "Spinal motion restriction decision-making (protocol 3017)",
  "Glucometer use and oral glucose administration"
];
