export interface TestPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatItIs: string;
  indications: string[];
  process: string;
  preparation: string[];
  prepNote?: string;
  urgent?: boolean;
  ctaHeading: string;
}

export const testPages: TestPage[] = [
  {
    slug: "ecg-test",
    title: "ECG Test in Jaipur (Electrocardiogram)",
    metaTitle: "ECG Test in Jaipur | Jaipur Cardiac Centre, Hanuman Nagar",
    metaDescription:
      "ECG (electrocardiogram) test done at Jaipur Cardiac Centre, Hanuman Nagar, Jaipur. Quick, painless recording of the heart's electrical activity. Open 9 am to 6 pm, all days. Call +91 8107667788.",
    intro:
      "An ECG (electrocardiogram) records the electrical activity of the heart. It is often the first heart test a doctor orders, and it is done right here at Jaipur Cardiac Centre, Hanuman Nagar.",
    whatItIs:
      "An ECG is a quick, painless test that records the heart's electrical signals through small patches (electrodes) placed on the chest, arms and legs. It shows how fast the heart is beating and whether the rhythm is normal, and it can indicate heart muscle damage, the effects of heart medicines or a pacemaker, and the size of the heart chambers.",
    indications: [
      "Chest pain or palpitations, as advised by a doctor",
      "A past heart problem, or a strong family history of heart disease",
      "Before planned surgery, when requested",
      "Checking the effect of heart medicines or a pacemaker",
    ],
    process:
      "You lie still while a technician places small electrodes on your chest, arms and legs. The recording itself takes only a few minutes and involves no needles or radiation.",
    preparation: [
      "No special preparation is usually needed",
      "Avoid exercise or cold water right before the test",
      "Wear clothing that allows easy access to the chest, wrists and ankles",
      "Tell us about all medicines you take",
    ],
    prepNote: "The recording takes a few minutes; allow a short visit including setup.",
    urgent: true,
    ctaHeading: "Book your ECG at Jaipur Cardiac Centre",
  },
  {
    slug: "2d-echo",
    title: "2D Echocardiography in Jaipur (2D Echo)",
    metaTitle: "2D Echo Test in Jaipur | Jaipur Cardiac Centre, Hanuman Nagar",
    metaDescription:
      "2D echocardiography (ultrasound of the heart) with Doppler, done at Jaipur Cardiac Centre, Hanuman Nagar, Jaipur. Open 9 am to 6 pm, all days. Call +91 8107667788.",
    intro:
      "A 2D echocardiogram uses ultrasound to create moving pictures of the heart. It is done right here at Jaipur Cardiac Centre, Hanuman Nagar.",
    whatItIs:
      "An echocardiogram is an ultrasound scan of the heart. It shows the heart's chambers and valves and how well the heart is pumping. A Doppler study, part of the same examination, assesses blood flow through the heart.",
    indications: [
      "Breathlessness, chest pain or palpitations, as advised by a doctor",
      "A heart murmur or a suspected valve problem",
      "Checking the heart's pumping function after a heart attack or in heart failure",
      "Follow-up of known valve or structural heart disease",
    ],
    process:
      "You lie comfortably while a technician moves a small probe over the chest with a little gel. The scan is painless and uses no radiation.",
    preparation: [
      "No special preparation is needed before a standard echocardiogram",
      "Wear comfortable clothing",
      "Bring any previous heart reports or prescriptions you have",
    ],
    ctaHeading: "Book your 2D echo at Jaipur Cardiac Centre",
  },
  {
    slug: "tmt-test",
    title: "TMT Test in Jaipur (Treadmill Stress Test)",
    metaTitle: "TMT (Treadmill Test) in Jaipur | Jaipur Cardiac Centre, Hanuman Nagar",
    metaDescription:
      "Treadmill stress test (TMT) done at Jaipur Cardiac Centre, Hanuman Nagar, Jaipur. ECG and blood pressure monitored during exercise. Open 9 am to 6 pm, all days. Call +91 8107667788.",
    intro:
      "A treadmill test (TMT) records how the heart responds to exercise. It is done right here at Jaipur Cardiac Centre, Hanuman Nagar.",
    whatItIs:
      "A TMT is an exercise stress test. You walk on a treadmill that gradually increases in speed and incline while your ECG and blood pressure are monitored. The test stops when you reach a target heart rate or if symptoms appear.",
    indications: [
      "Chest pain, to check for coronary artery disease, as advised by a doctor",
      "Follow-up after a heart attack, angioplasty or bypass surgery",
      "Clearance before starting an exercise programme in people with heart disease or diabetes",
      "Heart rhythm changes that appear with exercise",
    ],
    process:
      "Small electrodes are placed on your chest and a cuff measures your blood pressure. You walk on the treadmill in stages, each slightly faster and steeper, while the ECG is recorded. Allow time for preparation, the walking test and a short recovery.",
    preparation: [
      "Wear comfortable shoes and loose clothing",
      "Do not eat, smoke, or have caffeine or alcohol for at least 3 hours before the test",
      "Ask us whether to take your usual medicines before the test",
    ],
    urgent: true,
    ctaHeading: "Book your TMT at Jaipur Cardiac Centre",
  },
  {
    slug: "holter-monitoring",
    title: "Holter Monitoring in Jaipur",
    metaTitle: "Holter Monitoring in Jaipur | Jaipur Cardiac Centre, Hanuman Nagar",
    metaDescription:
      "Holter monitoring (continuous ECG, usually 24 to 48 hours) fitted at Jaipur Cardiac Centre, Hanuman Nagar, Jaipur. Open 9 am to 6 pm, all days. Call +91 8107667788.",
    intro:
      "A Holter monitor records the heart's rhythm continuously as you go about your day. Fitting and collection are done at Jaipur Cardiac Centre, Hanuman Nagar.",
    whatItIs:
      "A Holter monitor is a small, portable ECG device worn on the body. It records every heartbeat, usually for 24 to 48 hours, or longer if advised, to catch rhythm problems that a short ECG recording can miss.",
    indications: [
      "Unexplained palpitations, fainting or dizziness, as advised by a doctor",
      "A rhythm check after an abnormal ECG",
      "Monitoring after a heart event, or to check the effect of heart medicines",
    ],
    process:
      "A technician fits the monitor with a few electrodes on the chest - a short clinic visit. You then go about your normal day while it records, keep a simple diary of symptoms and activities, and return the device when the recording is complete.",
    preparation: [
      "Wear loose, comfortable clothing to the fitting",
      "You cannot shower or bathe while wearing the monitor",
      "Keep the symptom and activity diary as instructed",
    ],
    ctaHeading: "Book Holter monitoring at Jaipur Cardiac Centre",
  },
];
