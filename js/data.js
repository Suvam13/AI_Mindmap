window.MINDMAP_DATA = {
  id: "ai",
  label: "Artificial Intelligence",
  description: "The central concept of the exhibition.",
  daily: false,
  tier: 1,
  links: [],
  children: [
    {
      id: "tech",
      label: "Technology",
      description: "The different kinds of AI, and how each one learns.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "tech-rule-based",
          label: "Rule-Based AI",
          description: "AI that follows rules written by people. Older, and still everywhere.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-rule-based-expert", label: "Expert Systems", description: "Software that copies a specialist's rules, like an online symptom checker.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-rule-based-search", label: "Search and Planning", description: "Tries many options to find the best one, like a satnav or a chess program.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-rule-based-graphs", label: "Knowledge Graphs", description: "A web of linked facts, like the info box beside search results.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-rule-based-fuzzy", label: "Fuzzy Logic", description: "Handles \"a bit warm\" instead of just hot or cold, as in washing machines.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-ml",
          label: "Machine Learning",
          description: "AI that finds patterns in examples instead of being given rules.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-ml-supervised", label: "Learning with Answers (Supervised)", description: "Shown examples with the right answer, like photos labelled \"cat\".", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-ml-unsupervised", label: "Learning without Answers (Unsupervised)", description: "Finds its own groups in data, like shoppers with similar habits.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-ml-reinforcement", label: "Learning by Trial and Error (Reinforcement)", description: "Earns rewards for good moves, the way game-playing AI improves.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-ml-self-supervised", label: "Learning by Filling Gaps (Self-Supervised)", description: "Hides part of the data and guesses it. Most chatbots start this way.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-nn",
          label: "Neural Networks",
          description: "Layers of simple units, loosely inspired by brain cells, that learn complex patterns.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-nn-cnn", label: "Image Networks (CNN)", description: "Built to make sense of pictures.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nn-rnn", label: "Sequence Networks (RNN)", description: "Built for things that happen in order, like speech.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nn-transformers", label: "Transformers", description: "Work out which words matter to each other. The design behind modern chatbots.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-nn-gnn", label: "Graph Networks (GNN)", description: "Learn from connections, like friendships or the atoms in a molecule.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nn-snn", label: "Spiking Networks (SNN)", description: "Fire in pulses like real neurons, using very little energy.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-gen",
          label: "Generative AI",
          description: "AI that creates new content instead of only analysing existing content.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-gen-llm", label: "Large Language Models", description: "Trained on huge amounts of text to write and answer questions.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-gen-diffusion", label: "Diffusion Models", description: "Make pictures by turning random noise into an image.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-gen-gans", label: "Rival Networks (GANs)", description: "Two networks compete: one makes fakes, the other tries to catch them.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-gen-vae", label: "Compressing Networks (VAEs)", description: "Squeeze data small, then rebuild it to create variations.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-robotics",
          label: "Robotics",
          description: "AI with a body that can sense and move in the real world.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-robotics-factory", label: "Factory Robots", description: "Robot arms that build and assemble products.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-service", label: "Home and Service Robots", description: "Machines that help with daily tasks, like robot vacuums.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-robotics-av", label: "Self-Driving Vehicles", description: "Cars and trucks that sense the road and steer themselves.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-drones", label: "Drones", description: "Flying machines that navigate and inspect on their own.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-humanoid", label: "Humanoid Robots", description: "Robots shaped like people, built for human spaces.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-swarm", label: "Robot Swarms", description: "Many simple robots cooperating like a flock of birds.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-nextgen",
          label: "Next-Generation AI",
          description: "Newer ideas that are still taking shape.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-nextgen-edge", label: "AI on Your Device (Edge AI)", description: "Runs on your phone instead of in the cloud, as with face unlock.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-nextgen-federated", label: "Learning without Sharing Data (Federated)", description: "Learns from many devices while the data stays on each one.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nextgen-neuromorphic", label: "Brain-Like Chips (Neuromorphic)", description: "Hardware built to work like a brain, using far less power.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nextgen-quantum", label: "Quantum AI", description: "Uses quantum computers for problems normal computers find too hard.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-nextgen-xai", label: "Explainable AI", description: "Shows why an AI made its decision, so people can check it.", daily: false, tier: 1, links: [], children: [] }
          ]
        }
      ]
    },
    {
      id: "caps",
      label: "Capabilities",
      description: "What AI can do.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "caps-see",
          label: "See",
          description: "Making sense of pictures and video.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-see-objects", label: "Recognise Objects", description: "Tell a cat from a car, or ripe fruit from unripe.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-see-faces", label: "Recognise Faces", description: "Unlock a phone or find a friend in your photos.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-see-ocr", label: "Read Text in Images", description: "Turn a photo of a sign or document into typed text.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-see-scenes", label: "Understand Scenes", description: "Work out what is happening in a photo or video.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-hear",
          label: "Hear and Speak",
          description: "Listening to people and talking back.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-hear-speech", label: "Recognise Speech", description: "Turn what you say into text or commands.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-hear-voice", label: "Recognise Voices", description: "Tell who is speaking, as in voice unlock.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-hear-tts", label: "Speak Aloud", description: "Read text out in a natural voice.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-lang",
          label: "Understand Language",
          description: "Making sense of what people write and say.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-lang-translate", label: "Translate", description: "Convert text or speech between languages.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-summarise", label: "Summarise", description: "Boil a long document down to its key points.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-qa", label: "Answer Questions", description: "Find or work out answers to everyday questions.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-sentiment", label: "Sense Mood", description: "Tell whether a review or message is positive or negative.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-create",
          label: "Create",
          description: "Making brand-new things.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-create-write", label: "Write", description: "Draft stories, emails, reports and scripts.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-create-draw", label: "Draw", description: "Turn a description into a picture.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-create-compose", label: "Compose", description: "Produce music, voices and sound effects.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-create-animate", label: "Animate", description: "Generate video from a prompt.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-create-code", label: "Code", description: "Write software from plain instructions.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-predict",
          label: "Predict",
          description: "Using patterns from the past to look ahead.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-predict-forecast", label: "Forecast", description: "Estimate what comes next, such as demand or weather.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-predict-anomaly", label: "Spot the Unusual", description: "Flag anything that looks out of the ordinary.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-predict-risk", label: "Estimate Risk", description: "Judge the chance of illness, default or failure.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-predict-recsys", label: "Suggest", description: "Recommend songs, films and products you might like.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-plan",
          label: "Decide and Plan",
          description: "Weighing options and choosing.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-plan-ahead", label: "Plan Ahead", description: "Work out the steps needed to reach a goal.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-plan-optimise", label: "Find the Best Option", description: "Make the best use of time, money or resources.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-plan-decide", label: "Support Decisions", description: "Help experts choose when many factors are involved.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-act",
          label: "Act",
          description: "Getting tasks done.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-act-routine", label: "Automate Routine Tasks", description: "Handle repetitive jobs without a person at each step.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-act-control", label: "Control Machines", description: "Steer vehicles and operate equipment.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-act-multi", label: "Carry Out Multi-Step Goals", description: "Chain several tools and steps together on its own.", daily: false, tier: 1, links: [], children: [] }
          ]
        }
      ]
    },
    {
      id: "apps",
      label: "Applications",
      description: "Where AI is already at work.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "apps-health",
          label: "Health",
          description: "Helping doctors and patients.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-health-scans", label: "Spotting Disease in Scans", description: "Find early signs in X-rays and MRIs.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-drugs", label: "Finding New Medicines", description: "Screen millions of possible drugs quickly.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-vitals", label: "Watching Vital Signs", description: "Track patients and raise alerts, including via wearables.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-health-assist", label: "Helping Doctors Decide", description: "Suggest likely diagnoses and treatments.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-finance",
          label: "Money and Banking",
          description: "Keeping finances safe and fair.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-finance-fraud", label: "Catching Card Fraud", description: "Flag suspicious payments instantly.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-finance-loans", label: "Deciding Loans", description: "Estimate whether a loan will be repaid.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-finance-trading", label: "Automated Trading", description: "Buy and sell on markets within milliseconds.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-edu",
          label: "Education",
          description: "Supporting teachers and learners.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-edu-tutors", label: "AI Tutors", description: "One-to-one help that explains step by step.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-adapt", label: "Lessons That Adapt", description: "Adjust content to each student's pace.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-marking", label: "Automatic Marking", description: "Grade work and give quick feedback.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-access",
          label: "Accessibility",
          description: "Making the world usable for everyone.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-access-captions", label: "Live Captions", description: "Show speech as text in real time.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-access-describe", label: "Describing Images", description: "Tell blind users what a photo shows.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-access-voice", label: "Voice Control", description: "Operate devices by speaking.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-mfg",
          label: "Factories",
          description: "Making things.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-mfg-defects", label: "Spotting Defects", description: "Cameras that catch faulty products.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-maint", label: "Fixing Machines Early", description: "Predict breakdowns before they happen.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-tune", label: "Tuning Production", description: "Adjust the line in real time to cut waste.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-transport",
          label: "Transport and Delivery",
          description: "Moving people and goods.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-transport-av", label: "Self-Driving Cars", description: "Vehicles that drive themselves.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-traffic", label: "Smarter Traffic Lights", description: "Ease jams by adapting signals to traffic.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-nav", label: "Navigation", description: "Find the fastest route around traffic.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-transport-delivery", label: "Delivery Planning", description: "Plan routes and stock for shipments.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-agri",
          label: "Farming",
          description: "Growing food.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-agri-precise", label: "Precise Watering and Feeding", description: "Give each part of a field exactly what it needs.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-crop", label: "Crop Health from the Sky", description: "Spot disease from drones and satellites.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-yield", label: "Harvest Forecasts", description: "Estimate yield before harvest.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-sci",
          label: "Science and Research",
          description: "Speeding up discovery.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-sci-protein", label: "Protein Shapes", description: "Predict the 3D shape of proteins.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-materials", label: "New Materials", description: "Search for better batteries and alloys.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-astro", label: "Telescope Data", description: "Find planets and galaxies in huge surveys.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-climate", label: "Climate Simulation", description: "Model how Earth's climate may change.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-env",
          label: "Energy and Environment",
          description: "Looking after the planet.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-env-grid", label: "Balancing Power Grids", description: "Match electricity supply to demand.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-env-forecast", label: "Forecasting Sun and Wind", description: "Predict solar and wind output.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-env-nature", label: "Watching Nature", description: "Track forests, oceans and pollution.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-retail",
          label: "Shopping and Media",
          description: "What you buy, watch and see.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-retail-rec", label: "Suggesting What to Buy or Watch", description: "Product, film and music recommendations.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-retail-price", label: "Changing Prices", description: "Adjust prices as demand moves.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-retail-ads", label: "Personalised Ads", description: "Show ads matched to your interests.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-retail-mod", label: "Moderating Posts", description: "Flag harmful content on social media.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-gov",
          label: "Public Services and Safety",
          description: "Helping governments and protecting people.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-gov-smart", label: "Smart Cities", description: "Manage lighting, waste and traffic.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-gov-disaster", label: "Disaster Warnings", description: "Predict floods and storms and direct aid.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-gov-cyber", label: "Cyber Threats", description: "Spot hacking attempts and harmful software.", daily: false, tier: 1, links: [], children: [] }
          ]
        }
      ]
    }
  ]
};